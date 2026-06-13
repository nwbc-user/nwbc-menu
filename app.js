/* ============================================================================
   NATURAL WONDER BEAUTY CREATION — APP LOGIC
   Renders the menu, handles tap-to-expand, search, category jump-nav, and
   a PIN-protected staff edit mode for prices & durations.
   You normally won't need to edit this file — change your menu in services.js.
   ========================================================================== */

(function () {
  "use strict";

  if (typeof SERVICES_DATA === "undefined") {
    document.getElementById("content").innerHTML =
      "<p class='no-results'>Could not load services.js. Make sure the file is present.</p>";
    return;
  }

  var OVERRIDE_KEY = "nwbc_overrides_v1";
  var state = { query: "", editing: false };

  /* ----------------------------- Helpers ----------------------------- */
  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function serviceId(catName, svcName) {
    return slug(catName) + "__" + slug(svcName);
  }
  function loadOverrides() {
    try { return JSON.parse(localStorage.getItem(OVERRIDE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveOverrides(ov) {
    try { localStorage.setItem(OVERRIDE_KEY, JSON.stringify(ov)); }
    catch (e) { /* storage unavailable — edits won't persist, but app still works */ }
  }
  function effective(catName, svc) {
    var id = serviceId(catName, svc.name);
    var ov = loadOverrides()[id] || {};
    return {
      price: ("price" in ov) ? ov.price : (svc.price || ""),
      duration: ("duration" in ov) ? ov.duration : (svc.duration || "")
    };
  }
  function formatPrice(raw) {
    var p = (raw == null ? "" : String(raw)).trim();
    if (!p) return { text: "—", empty: true };
    var cur = SERVICES_DATA.currency || "$";
    if (/^[\d.,]+$/.test(p)) p = cur + p;        // pure number -> add currency symbol
    return { text: p, empty: false };
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
    return svc.name.toLowerCase().indexOf(q) !== -1 ||
           (svc.description || "").toLowerCase().indexOf(q) !== -1 ||
           catName.toLowerCase().indexOf(q) !== -1;
  }

  /* ----------------------------- Header / footer ----------------------------- */
  function fillBusiness() {
    var b = SERVICES_DATA.business || {};
    document.title = (b.name || "Services") + " — Services";
    if (b.name) {
      document.getElementById("studio-name").textContent = b.name;
      document.getElementById("footer-name").textContent = b.name;
    }
    if (b.tagline) document.getElementById("studio-tagline").textContent = b.tagline;
    document.getElementById("footer-address").textContent = b.address || "";
    document.getElementById("footer-hours").textContent = b.hours || "";
    var ph = document.getElementById("footer-phone");
    if (b.phone) { ph.textContent = b.phone; ph.href = "tel:" + b.phone.replace(/[^\d+]/g, ""); }
    else { ph.parentNode.style.display = "none"; }
  }

  /* ----------------------------- Render ----------------------------- */
  var contentEl = document.getElementById("content");
  var navEl = document.getElementById("category-nav");
  var noResultsEl = document.getElementById("no-results");

  function render() {
    var q = state.editing ? "" : state.query.trim();
    contentEl.innerHTML = "";
    navEl.innerHTML = "";
    var anyVisible = false;

    SERVICES_DATA.categories.forEach(function (cat, ci) {
      var visibleServices = cat.services.filter(function (svc) {
        return state.editing || matches(svc, cat.name, q);
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
      setHighlighted(titleSpan, cat.name, q);
      h2.appendChild(titleSpan);
      head.appendChild(h2);
      if (cat.description) {
        var desc = document.createElement("p");
        desc.className = "category-desc";
        desc.textContent = cat.description;
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
    var eff = effective(catName, svc);
    var wrap = document.createElement("div");
    wrap.className = "service";

    var row = document.createElement("button");
    row.className = "service-row";
    row.type = "button";

    var nameEl = document.createElement("span");
    nameEl.className = "service-name";
    var nameText = document.createElement("span");
    setHighlighted(nameText, svc.name, q);
    nameEl.appendChild(nameText);

    var meta = document.createElement("span");
    meta.className = "service-meta";

    if (state.editing) {
      /* ---- editable fields ---- */
      var id = serviceId(catName, svc.name);
      var durInput = document.createElement("input");
      durInput.className = "edit-field duration-field";
      durInput.value = eff.duration;
      durInput.placeholder = "e.g. 60 min";
      durInput.dataset.id = id; durInput.dataset.field = "duration";
      durInput.addEventListener("input", onEditInput);

      var priceInput = document.createElement("input");
      priceInput.className = "edit-field price-field";
      priceInput.value = eff.price;
      priceInput.placeholder = "price";
      priceInput.inputMode = "decimal";
      priceInput.dataset.id = id; priceInput.dataset.field = "price";
      priceInput.addEventListener("input", onEditInput);

      meta.appendChild(durInput);
      meta.appendChild(priceInput);
      row.appendChild(nameEl);
      row.appendChild(meta);
      wrap.appendChild(row);
      return wrap; /* no expand in edit mode */
    }

    /* ---- view mode ---- */
    if (eff.duration) {
      var dur = document.createElement("span");
      dur.className = "service-duration";
      dur.textContent = eff.duration;
      meta.appendChild(dur);
    }
    var pr = formatPrice(eff.price);
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
    if (hasDetail) { setHighlighted(p, svc.description, q); }
    else { p.className = "detail-empty"; p.textContent = "Ask our team for details about this service."; }
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

  function onEditInput(e) {
    var el = e.target;
    var ov = loadOverrides();
    ov[el.dataset.id] = ov[el.dataset.id] || {};
    ov[el.dataset.id][el.dataset.field] = el.value;
    saveOverrides(ov);
  }

  /* ----------------------------- Scroll-spy (active pill) ----------------------------- */
  var spyObserver = null;
  function setupScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    if (state.editing) return;
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

  /* ----------------------------- Staff edit mode ----------------------------- */
  var gear = document.getElementById("staff-gear");
  var pinOverlay = document.getElementById("pin-overlay");
  var pinInput = document.getElementById("pin-input");
  var pinError = document.getElementById("pin-error");
  var editToolbar = document.getElementById("edit-toolbar");
  var searchWrap = document.querySelector(".search-wrap");

  function openPin() {
    if (!pinOverlay) return;
    if (pinError) pinError.hidden = true;
    if (pinInput) pinInput.value = "";
    pinOverlay.hidden = false; pinOverlay.style.display = "flex";   /* inline style = bulletproof show */
    setTimeout(function () { if (pinInput) pinInput.focus(); }, 50);
  }
  function closePin() {
    if (!pinOverlay) return;
    pinOverlay.hidden = true; pinOverlay.style.display = "none";    /* inline style = bulletproof hide */
  }
  function tryUnlock() {
    var entered = (pinInput.value || "").trim();
    var expected = String(SERVICES_DATA.staffPin == null ? "" : SERVICES_DATA.staffPin).trim();
    if (entered === expected) {
      closePin(); enterEditMode();
    } else {
      pinError.hidden = false; pinInput.value = ""; pinInput.focus();
    }
  }
  function enterEditMode() {
    state.editing = true;
    document.body.classList.add("editing");
    closePin();                                                    /* make sure the modal is gone */
    if (editToolbar) { editToolbar.hidden = false; editToolbar.style.display = "flex"; }
    if (searchWrap) searchWrap.style.display = "none";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function exitEditMode() {
    state.editing = false;
    document.body.classList.remove("editing");
    if (editToolbar) { editToolbar.hidden = true; editToolbar.style.display = "none"; }
    if (searchWrap) searchWrap.style.display = "";
    render();
  }

  /* Wire up controls. Every lookup is guarded so a missing element can never
     throw and stop the rest of the script from running. */
  function byId(id) { return document.getElementById(id); }

  if (gear) gear.addEventListener("click", openPin);
  var pinCancel = byId("pin-cancel");
  if (pinCancel) pinCancel.addEventListener("click", closePin);

  /* Unlock works three ways and never lets the page navigate/reload:
     pressing Enter, clicking "Unlock", or a form submit. Robust whether or
     not the markup uses a <form>. */
  if (pinInput) {
    pinInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.keyCode === 13) { e.preventDefault(); tryUnlock(); }
    });
  }
  var pinSubmit = byId("pin-submit");
  if (pinSubmit) pinSubmit.addEventListener("click", function (e) { e.preventDefault(); tryUnlock(); });
  var pinForm = byId("pin-form");
  if (pinForm) pinForm.addEventListener("submit", function (e) { e.preventDefault(); tryUnlock(); });

  if (pinOverlay) pinOverlay.addEventListener("click", function (e) { if (e.target === pinOverlay) closePin(); });

  var exitBtn = byId("exit-edit-btn");
  if (exitBtn) exitBtn.addEventListener("click", exitEditMode);

  var resetBtn = byId("reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", function () {
    if (confirm("Reset all price & duration edits made on this iPad back to the values in services.js?")) {
      saveOverrides({});
      render();
      toast("Edits reset to the saved file");
    }
  });

  var exportBtn = byId("export-btn");
  if (exportBtn) exportBtn.addEventListener("click", function () {
    download("services.js", buildExportText());
    toast("Downloaded services.js — upload it to GitHub to update all devices");
  });

  function buildExportText() {
    var clone = JSON.parse(JSON.stringify(SERVICES_DATA));
    var ov = loadOverrides();
    clone.categories.forEach(function (cat) {
      cat.services.forEach(function (svc) {
        var o = ov[serviceId(cat.name, svc.name)];
        if (o) {
          if ("price" in o) svc.price = o.price;
          if ("duration" in o) svc.duration = o.duration;
        }
      });
    });
    var header =
      "/* Natural Wonder Beauty Creation — exported service menu\n" +
      "   Generated " + new Date().toLocaleString() + "\n" +
      "   To change a price or duration, edit the value inside the \"quotes\" below,\n" +
      "   save the file, and upload it to replace services.js on GitHub. */\n\n";
    return header + "const SERVICES_DATA = " + JSON.stringify(clone, null, 2) + ";\n";
  }

  function download(filename, text) {
    var blob = new Blob([text], { type: "text/javascript" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  var toastTimer;
  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg; t.hidden = false;
    requestAnimationFrame(function () { t.classList.add("show"); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove("show");
      setTimeout(function () { t.hidden = true; }, 300);
    }, 2600);
  }

  /* ----------------------------- Init ----------------------------- */
  fillBusiness();
  render();

})();
