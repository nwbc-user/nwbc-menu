# New Natural Wonder Beauty Creation — Services Menu App

A simple, no-database website that shows the studio's service menu. It's built to
run full-screen on an iPad in the salon, but works just as well on a phone or
computer. Customers browse services by category, tap one to expand its details,
search by name, and switch the whole page between **English and 中文**. There's
nothing to install and no server to maintain — it's just a few static files.

## What it does

- **Bilingual** — a 中文 / EN button (top-right of the header) translates the
  entire menu instantly.
- **Tap to expand** — each service reveals its description when tapped.
- **Live search** — the search box filters services as you type, in either language.
- **Category jump-nav** — a sticky bar jumps to any section and highlights the one
  you're viewing.
- **Package deals** — a service can show one or more package badges, each with the
  **Save %** calculated automatically from the single-visit price.
- **Works offline** — everything runs in the browser; the fonts fall back to nice
  system defaults if there's no internet.

## The files

| File | What it is |
|------|------------|
| `index.html` | The page itself. Open this to view the menu. |
| `services.js` | **Your menu** — every service, price, duration, package, and description. This is the file you'll edit. |
| `i18n.js` | The English → 中文 translations. Add an entry here when you add new menu text. |
| `styles.css` | The look and feel. You usually won't touch this. |
| `app.js` | The behavior (rendering, search, language toggle). You won't need to touch this. |

## Preview it on your computer

Double-click `index.html` — it opens in your web browser. That's the whole app.
No installation, no internet required (except for the fonts, which fall back to
nice defaults if you're offline).

## Editing the menu

Everything about the menu lives in `services.js`. Open it in any text editor and
change the text inside the `"quotes"`. A single service looks like this:

```js
{ name: "European Facial Treatment", price: "120", duration: "75 min",
  description: "A classic deep-cleansing facial..." },
```

- **Price** — type `"120"` or `"$120"`; both display as **$120**. Leave it `""`
  and the service shows a small "—" instead of a price.
- **Duration** — e.g. `"75 min"`. Leave it `""` to hide it (some services don't
  show a time).
- **Description** — shown when the customer taps the service. Leave it `""` and it
  shows "Ask our team for details about this service."

Save the file and refresh the page to see your changes.

> **Translations:** menu text shows in English by default and is translated to 中文
> through `i18n.js`. When you add or rename a service, add its English text as a key
> in `i18n.js` with the Chinese value. Anything without an entry simply stays in
> English — that's intended for brand names and prices.

### Package deals

Add a `package` line to offer a multi-visit deal. Give the number of visits and the
**total** package price:

```js
{ name: "European Facial Treatment", price: "120", duration: "75 min",
  package: { count: 10, price: 950 },
  description: "..." },
```

It appears as a **PACKAGE · 10 treatments · $950** badge under the service name, and
the **Save %** is worked out from the single price for you (here `$120 × 10` vs.
`$950` = **Save 21%**). Change either number and the discount updates itself.

To offer more than one tier (say a 5-pack and a 10-pack), use `packages` (plural) —
a list of tiers, each shown as its own badge:

```js
{ name: "Full Face", price: "300", duration: "",
  packages: [ { count: 5, price: 1250 }, { count: 10, price: 2000 } ],
  description: "" },
```

To remove a package, just delete its `package` (or `packages`) line.

### Adding or reordering sections

Each section is an entry in the `categories` list, with a `name`, a short
`description`, and its `services`. Reorder the entries to reorder the page — the
first section listed shows first (both in the page and in the top jump-nav).

## Put it online for free (GitHub Pages)

1. Create a free account at **github.com** if you don't have one.
2. Click **New repository**. Name it (e.g., `nwbc-menu`), set it **Public**, click **Create**.
3. On the new repo page, click **"uploading an existing file"**.
4. Drag in **all five files** (`index.html`, `services.js`, `i18n.js`, `styles.css`,
   `app.js`) and the optional README. Click **Commit changes**.
5. Go to **Settings → Pages**. Under "Branch", pick **main** and the **/ (root)** folder, then **Save**.
6. Wait about a minute. Your site appears at:
   `https://YOUR-USERNAME.github.io/nwbc-menu/`

To update the menu later: edit `services.js`, then in your repo click `services.js`
→ the pencil ✏️ → paste/replace → **Commit**. Or just upload the new `services.js`
over the old one. The site updates in ~1 minute.

## Set up the iPad as a walk-in kiosk

1. Open **Safari** and go to your GitHub Pages link.
2. Tap **Share → Add to Home Screen**. This gives you a full-screen app icon with no address bar.
3. (Optional but recommended) Lock it to this one app so customers can't wander off:
   **Settings → Accessibility → Guided Access → On.** Open the menu app, triple-click
   the side/home button, and start Guided Access.
4. In **Settings → Display & Brightness → Auto-Lock**, set to **Never** while it's on display.

## Quick tips

- The menu works in portrait and landscape, on phones, tablets, and desktops.
- Use the **中文 / EN** button in the top-right corner to switch languages.
- The category bar at the top jumps between sections, and the search box filters live.
- Everything runs in the browser. There is no database and nothing to maintain on a server.
