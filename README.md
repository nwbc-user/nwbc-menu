# Natural Wonder Beauty Creation — Services Menu App

A simple, no-database website that shows your service menu on an iPad. Customers
tap a service to see its description, duration, and price. You can edit prices
right on the iPad or in one file.

## The files

| File | What it is |
|------|------------|
| `index.html` | The page itself. Open this to view the menu. |
| `services.js` | **Your menu.** Edit this to change services, prices, durations, and descriptions. |
| `styles.css` | The look and feel. You usually won't touch this. |
| `app.js` | The behavior. You won't need to touch this. |

## Preview it on your computer

Double-click `index.html` — it opens in your web browser. That's the whole app.
No installation, no internet required (except for the fonts, which fall back to
nice defaults if you're offline).

## Editing your prices and durations

**All prices are blank right now** so you can fill in your own. They show a small
"—" until you add them. There are two ways to edit:

### Option A — Edit on the iPad (easiest)
1. Tap the small **⚙ gear** in the bottom-right corner.
2. Enter the staff PIN. The default is **2468** — change it (see below).
3. Tap any **price** or **duration** field and type the new value.
4. Changes save automatically **on that iPad**.
5. Tap **Done** when finished.

To make those edits permanent for *every* device (and survive clearing the
browser), tap **"Save to file (export)"** in edit mode. It downloads an updated
`services.js`. Replace the old `services.js` with it (see deploy steps below).

### Option B — Edit the file directly
Open `services.js` in any text editor. Change the text inside the `"quotes"`:

```js
{ name: "European Facial Treatment", price: "95", duration: "60 min",
  description: "A classic deep-cleansing facial..." },
```

You can type `"95"` or `"$95"` — both show as **$95**. Save the file and refresh.

### Change the staff PIN
In `services.js`, near the top, change:

```js
staffPin: "2468",   // change this to your own number
```

### Heads up on durations
I pre-filled typical durations (like `60 min`) as a starting point. **Please
review them** and adjust to match what you actually offer. Waxing and a few
area-based treatments were left blank on purpose.

## Put it online for free (GitHub Pages)

1. Create a free account at **github.com** if you don't have one.
2. Click **New repository**. Name it (e.g., `nwbc-menu`), set it **Public**, click **Create**.
3. On the new repo page, click **"uploading an existing file"**.
4. Drag in **all four files** (`index.html`, `services.js`, `styles.css`, `app.js`) and the optional README. Click **Commit changes**.
5. Go to **Settings → Pages**. Under "Branch", pick **main** and the **/ (root)** folder, then **Save**.
6. Wait about a minute. Your site appears at:
   `https://YOUR-USERNAME.github.io/nwbc-menu/`

To update prices later: export the new `services.js` (Option A) or edit it, then
in your repo click `services.js` → the pencil ✏️ → paste/replace → **Commit**.
Or just upload the new `services.js` over the old one. The site updates in ~1 minute.

## Set up the iPad as a walk-in kiosk

1. Open **Safari** and go to your GitHub Pages link.
2. Tap **Share → Add to Home Screen**. This gives you a full-screen app icon with no address bar.
3. (Optional but recommended) Lock it to this one app so customers can't wander off:
   **Settings → Accessibility → Guided Access → On.** Open the menu app, triple-click
   the side/home button, and start Guided Access.
4. In **Settings → Display & Brightness → Auto-Lock**, set to **Never** while it's on display.

## Quick tips
- The menu works in both portrait and landscape.
- The category bar at the top is tappable to jump between sections, and there's a search box.
- Everything runs in the browser. There is no database and nothing to maintain on a server.
