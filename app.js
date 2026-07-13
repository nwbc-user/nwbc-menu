/* ============================================================================
   NATURAL WONDER BEAUTY CREATION — APP LOGIC
   Renders the menu, handles tap-to-expand, search, category jump-nav, and the
   English/中文 language toggle.
   You normally won't need to edit this file — change your menu in services.js.
   ========================================================================== */

(function () {
  "use strict";

  if (typeof SERVICES_DATA === "undefined") {
    document.getElementById("content").innerHTML =
      "<p class='no-results'>Could not load services.js. Make sure the file is present.</p>";
    return;
  }

  var state = { query: "", lang: "en" };

  /* ----------------------------- Helpers ----------------------------- */
  /* Translate a piece of English text to Chinese when the page is in zh mode.
     Looks through every section of the I18N map; falls back to the original
     English (brand names, address, prices, anything without an entry). */
  function tr(s) {
    if (state.lang !== "zh" || s == null || typeof I18N === "undefined") return s;
    if (I18N.content[s] != null) return I18N.content[s];
    if (I18N.durations[s] != null) return I18N.durations[s];
    if (I18N.business[s] != null) return I18N.business[s];
    if (I18N.ui[s] != null) return I18N.ui[s];
    return s;
  }

  function byId(id) { return document.getElementById(id); }
  function formatPrice(raw) {
    var p = (raw == null ? "" : String(raw)).trim();
    if (!p) return { text: "—", empty: true };
    var cur = SERVICES_DATA.currency || "$";
    if (/^[\d.,]+$/.test(p)) p = cur + p;        // pure number -> add currency symbol
    return { text: p, empty: false };
  }

  /* Pull a plain number out of a price like "120" or "$120" (null if none) */
  function priceNumber(raw) {
    var n = parseFloat(String(raw == null ? "" : raw).replace(/[^0-9.]/g, ""));
    return isNaN(n) ? null : n;
  }
  /* All package tiers for a service as an array, normalizing the single
     `package` object and the multi-tier `packages` array into one shape. */
  function servicePackages(svc) {
    if (Array.isArray(svc.packages)) return svc.packages;
    if (svc.package) return [svc.package];
    return [];
  }
  /* Human line for a package, e.g. "10 treatments · $950" (translated) */
  function packageDetail(pkg) {
    var cur = SERVICES_DATA.currency || "$";
    return pkg.count + " " + tr("treatments") + " · " + cur + pkg.price;
  }
  /* Whole-percent discount for one package tier vs. buying the single service
     `count` times. Returns null when it can't be computed or isn't a saving. */
  function packageDiscount(svc, pkg) {
    var unit = priceNumber(svc.price);
    if (!pkg || unit == null || !pkg.count || pkg.price == null) return null;
    var regular = unit * pkg.count;
    if (regular <= 0) return null;
    var pct = Math.round((1 - pkg.price / regular) * 100);
    return pct > 0 ? pct : null;
  }

  /* Set element text, wrapping query matches in <mark> (safe; no raw HTML injected) */
  function setHighlighted(el, text, query) {
    el.textContent = "";
    text = text || "";
    if (!query) { el.textContent = text; return; }
    var lc = text.toLowerCase(), q = query.toLowerCase(), i = 0, idx;
    while ((idx = lc.indexOf(q, i)) !== -1) {
      if (idx > i) el.appendChild(document.createTextNode(text.slice(i, idx)));
      var m = document.createElement("mark");
      m.textContent = text.slice(idx, idx + q.length);
      el.appendChild(m);
      i = idx + q.length;
    }
    if (i < text.length) el.appendChild(document.createTextNode(text.slice(i)));
  }

  function matches(svc, catName, q) {
    if (!q) return true;
    q = q.toLowerCase();
    /* Match against both English and the active translation so search works
       in either language. */
    var cur = SERVICES_DATA.currency || "$";
    var pkgText = servicePackages(svc).map(function (pk) {
      return pk.count + " " + cur + pk.price;
    }).join(" ");
    var fields = [svc.name, svc.description || "", pkgText, catName,
                  tr(svc.name), tr(svc.description || ""), tr(catName)];
    for (var i = 0; i < fields.length; i++) {
      if (String(fields[i]).toLowerCase().indexOf(q) !== -1) return true;
    }
    return false;
  }

  /* ----------------------------- Header / footer ----------------------------- */
  function fillBusiness() {
    var b = SERVICES_DATA.business || {};
    document.title = (b.name || "Services") + " — Services";
    if (b.name) {
      document.getElementById("studio-name").textContent = b.name;
      document.getElementById("footer-name").textContent = b.name;
    }
    if (b.tagline) document.getElementById("studio-tagline").textContent = tr(b.tagline);
  }

  /* ----------------------------- Render ----------------------------- */
  var contentEl = document.getElementById("content");
  var navEl = document.getElementById("category-nav");
  var noResultsEl = document.getElementById("no-results");

  function render() {
    var q = state.query.trim();
    contentEl.innerHTML = "";
    navEl.innerHTML = "";
    var anyVisible = false;

    SERVICES_DATA.categories.forEach(function (cat, ci) {
      var visibleServices = cat.services.filter(function (svc) {
        return matches(svc, cat.name, q);
      });
      if (visibleServices.length === 0) return;
      anyVisible = true;

      var sectionId = "category-" + ci;

      /* nav pill */
      var pill = document.createElement("button");
      pill.className = "cat-pill";
      pill.textContent = cat.name;
      pill.dataset.target = sectionId;
      pill.addEventListener("click", function () {
        var target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      navEl.appendChild(pill);

      /* section */
      var section = document.createElement("section");
      section.className = "category";
      section.id = sectionId;

      var head = document.createElement("div");
      head.className = "category-head";
      var h2 = document.createElement("h2");
      h2.className = "category-title";
      var titleSpan = document.createElement("span");
      setHighlighted(titleSpan, tr(cat.name), q);
      h2.appendChild(titleSpan);
      head.appendChild(h2);
      if (cat.description) {
        var desc = document.createElement("p");
        desc.className = "category-desc";
        desc.textContent = tr(cat.description);
        head.appendChild(desc);
      }
      section.appendChild(head);

      var list = document.createElement("div");
      list.className = "service-list";
      visibleServices.forEach(function (svc) {
        list.appendChild(buildService(cat.name, svc, q));
      });
      section.appendChild(list);
      contentEl.appendChild(section);
    });

    noResultsEl.hidden = anyVisible;
    setupScrollSpy();
  }

  function buildService(catName, svc, q) {
    var wrap = document.createElement("div");
    wrap.className = "service";

    var row = document.createElement("button");
    row.className = "service-row";
    row.type = "button";

    var nameEl = document.createElement("span");
    nameEl.className = "service-name";
    var nameText = document.createElement("span");
    setHighlighted(nameText, tr(svc.name), q);
    nameEl.appendChild(nameText);

    /* package deals — a prominent badge per tier, shown under the name */
    servicePackages(svc).forEach(function (pk) {
      var pkg = document.createElement("span");
      pkg.className = "service-package";

      var pkgLabel = document.createElement("strong");
      pkgLabel.className = "pkg-label";
      pkgLabel.textContent = tr("Package");
      pkg.appendChild(pkgLabel);

      var pkgDetail = document.createElement("span");
      pkgDetail.className = "pkg-detail";
      pkgDetail.textContent = packageDetail(pk);
      pkg.appendChild(pkgDetail);

      var pct = packageDiscount(svc, pk);
      if (pct != null) {
        var pkgSave = document.createElement("span");
        pkgSave.className = "pkg-save";
        pkgSave.textContent = tr("Save") + " " + pct + "%";
        pkg.appendChild(pkgSave);
      }

      nameEl.appendChild(pkg);
    });

    var meta = document.createElement("span");
    meta.className = "service-meta";

    if (svc.duration) {
      var dur = document.createElement("span");
      dur.className = "service-duration";
      dur.textContent = tr(svc.duration);
      meta.appendChild(dur);
    }
    var pr = formatPrice(svc.price);
    var price = document.createElement("span");
    price.className = "service-price" + (pr.empty ? " empty" : "");
    price.textContent = pr.text;
    meta.appendChild(price);

    var chev = document.createElement("span");
    chev.className = "chevron";
    chev.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    meta.appendChild(chev);

    row.appendChild(nameEl);
    row.appendChild(meta);

    /* expandable detail */
    var hasDetail = !!(svc.description && svc.description.trim());
    var detail = document.createElement("div");
    detail.className = "service-detail";
    var inner = document.createElement("div");
    inner.className = "service-detail-inner";
    var p = document.createElement("p");
    if (hasDetail) { setHighlighted(p, tr(svc.description), q); }
    else { p.className = "detail-empty"; p.textContent = tr("Ask our team for details about this service."); }
    inner.appendChild(p);
    detail.appendChild(inner);

    row.setAttribute("aria-expanded", "false");
    row.addEventListener("click", function () {
      var open = wrap.classList.toggle("open");
      row.setAttribute("aria-expanded", open ? "true" : "false");
    });

    wrap.appendChild(row);
    wrap.appendChild(detail);

    /* auto-open if a search query matched only the description */
    if (q && hasDetail &&
        svc.name.toLowerCase().indexOf(q.toLowerCase()) === -1 &&
        svc.description.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
      wrap.classList.add("open");
      row.setAttribute("aria-expanded", "true");
    }
    return wrap;
  }

  /* ----------------------------- Scroll-spy (active pill) ----------------------------- */
  var spyObserver = null;
  function setupScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    if (typeof IntersectionObserver === "undefined") return; /* old browsers / tests */
    var sections = Array.prototype.slice.call(document.querySelectorAll(".category"));
    if (!sections.length) return;
    spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActivePill(entry.target.id);
      });
    }, { rootMargin: "-92px 0px -68% 0px", threshold: 0 });
    sections.forEach(function (s) { spyObserver.observe(s); });
  }
  function setActivePill(sectionId) {
    var pills = navEl.querySelectorAll(".cat-pill");
    /* Only auto-center when the bar is actually a horizontal scroller (iPad/
       desktop). Scroll the BAR itself — never scrollIntoView, which would also
       jerk the whole page on a phone. */
    var canScroll = navEl.scrollWidth > navEl.clientWidth + 4;
    pills.forEach(function (p) {
      var on = p.dataset.target === sectionId;
      p.classList.toggle("active", on);
      if (on && canScroll) {
        var left = p.offsetLeft - (navEl.clientWidth - p.offsetWidth) / 2;
        navEl.scrollTo({ left: left < 0 ? 0 : left, behavior: "smooth" });
      }
    });
  }

  /* ----------------------------- Search ----------------------------- */
  var searchInput = document.getElementById("search-input");
  var searchClear = document.getElementById("search-clear");
  searchInput.addEventListener("input", function () {
    state.query = searchInput.value;
    searchClear.hidden = !searchInput.value;
    render();
  });
  searchClear.addEventListener("click", function () {
    searchInput.value = ""; state.query = ""; searchClear.hidden = true;
    render(); searchInput.focus();
  });

  /* ----------------------------- Language toggle ----------------------------- */
  /* Translate the static page chrome (header eyebrow, search placeholder,
     no-results message) and the toggle button label. The menu itself is
     translated through tr() inside render()/fillBusiness(). */
  function applyStaticUI() {
    var z = state.lang === "zh";
    function L(en) {
      return z && typeof I18N !== "undefined" && I18N.ui[en] ? I18N.ui[en] : en;
    }
    function txt(el, en) { if (el) el.textContent = L(en); }

    txt(byId("header-eyebrow"), "San Francisco");
    txt(byId("footer-eyebrow"), "San Francisco");
    txt(byId("no-results"), "No services match your search.");

    var si = byId("search-input");
    if (si) si.placeholder = L("Search services…");

    var lt = byId("lang-toggle");
    if (lt) {
      lt.textContent = z ? "EN" : "中文";
      lt.setAttribute("aria-label", z ? "Switch to English" : "切换到中文");
    }
  }

  function setLang(lang) {
    state.lang = (lang === "zh") ? "zh" : "en";
    document.documentElement.lang = state.lang;
    applyStaticUI();
    fillBusiness();
    render();
  }

  var langToggle = byId("lang-toggle");
  if (langToggle) langToggle.addEventListener("click", function () {
    setLang(state.lang === "zh" ? "en" : "zh");
  });

  /* ----------------------------- Init ----------------------------- */
  fillBusiness();
  applyStaticUI();
  render();

})();
