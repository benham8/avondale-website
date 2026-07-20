# Avondale Website

A simple, fast band website built with plain HTML, CSS, and a little JavaScript.
No fancy tools required — just open the files, edit them, and upload.

---

## What’s included

| File / folder | What it’s for |
|---|---|
| `index.html` | Homepage (hero photo, about, tour) |
| `merch.html` | Merch / vinyl page + store placeholder |
| `css/styles.css` | All the look and layout |
| `js/script.js` | Mobile menu + smooth scrolling |
| `js/data-loader.js` | Loads bio, tour dates, and links from JSON |
| `data/band.json` | Band bio text |
| `data/tour.json` | Upcoming show dates |
| `data/links.json` | Linktree and social URLs |
| `images/` | Logo, hero photo, album art |

---

## How to preview the site on your computer

Because the site loads JSON files, opening `index.html` by double-clicking may block the data in some browsers.

**Easiest options:**

1. **VS Code / Cursor** — install the “Live Server” extension, right-click `index.html`, choose **Open with Live Server**.
2. **Terminal** — from inside this folder, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

---

## How to replace images

1. Open the `images` folder.
2. Replace these files **using the exact same names**:
   - `logo.png` — logo in the top-left
   - `band-photo.jpg` — big homepage hero photo
   - `holding-patterns.jpg` — album cover on the Merch page
3. Refresh your browser.

More tips are in `images/README.txt`.

---

## How to update the band bio

1. Open `data/band.json` in any text editor.
2. Edit the sentences inside the quotes.
3. Each item in the list becomes its own paragraph on the site.
4. Save the file and refresh.

Example:

```json
{
  "bio": [
    "First paragraph goes here.",
    "Second paragraph goes here."
  ]
}
```

**Tip:** Keep the commas and quotation marks. JSON is picky about formatting.

---

## How to add a tour date

1. Open `data/tour.json`.
2. Copy an existing show block and paste it below the last one.
3. Change the `date`, `city`, and `venue`.
4. Put a comma between shows (but not after the last one).
5. Save and refresh.

Example of two shows:

```json
[
  {
    "date": "July 20",
    "city": "Chicago, IL",
    "venue": "Subterranean"
  },
  {
    "date": "August 8",
    "city": "Milwaukee, WI",
    "venue": "X-Ray Arcade"
  }
]
```

That’s it — the website builds the list for you. You never need to edit the HTML for tour dates.

---

## How to change the Linktree (Listen) URL

1. Open `data/links.json`.
2. Replace `https://linktr.ee/REPLACE_ME` with your real Linktree link.
3. Save and refresh.

The **Listen** button in the navigation reads from this file automatically.

You can also fill in Spotify, Instagram, YouTube, TikTok, and Facebook when you’re ready to add social icons later.

---

## How to add the Ecwid store

1. Open `merch.html`.
2. Find the box that says:

```html
<div id="store-widget">
  <!-- Paste Ecwid widget here -->
```

3. Paste your Ecwid embed code inside that `<div>`, replacing the placeholder comment (and the temporary “Your store will appear here…” paragraph if you want).
4. Save and refresh.

The **Buy Now** button already scrolls down to this Store section.

---

## How to put the site online

### Option A — Netlify (very beginner-friendly)

1. Go to [https://www.netlify.com](https://www.netlify.com) and create a free account.
2. Drag the entire `avondale-website` folder onto Netlify’s **Deploy** area.
3. Netlify gives you a live URL immediately.
4. (Optional) Connect a custom domain in Netlify’s settings.

### Option B — GitHub Pages

1. Create a free account at [https://github.com](https://github.com).
2. Create a new repository (for example: `avondale-website`).
3. Upload all the files from this folder into the repository.
4. Go to **Settings → Pages**.
5. Under **Source**, choose the `main` branch and the root folder (`/`).
6. Save. GitHub will show a public URL like `https://yourusername.github.io/avondale-website/`.

### Option C — Any traditional web host

Upload the whole folder (HTML, CSS, JS, data, images) via FTP or your host’s file manager. Point the domain at the folder that contains `index.html`.

---

## Future pages (not built yet)

The navigation is set up so you can later add pages like:

- Music
- Videos
- Store
- Tour
- Contact
- About

When you’re ready, create a new `.html` file, copy the header/nav from `index.html`, and link to it from the nav list.

---

## Need help editing safely?

- Always keep a backup copy of the folder before big changes.
- If something breaks after editing JSON, check for missing commas or quotes.
- Image names must match exactly (including `.png` / `.jpg`).
