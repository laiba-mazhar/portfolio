# Portfolio

Live at **https://laiba-mazhar.vercel.app**

Two files matter:

| file | what it is |
|---|---|
| **`data.js`** | **all your content — this is the only file you edit** |
| `index.html` | layout, styling and the code that renders `data.js` |

Everything else is assets: `photo.jpg`, `logos/`, `Laiba_Mazhar_CV.pdf`.

## Editing it

Open `data.js`, change the text, save, refresh. That's the whole loop.

- Keep quotes and commas exactly as they are — a missing comma breaks the page.
- To hide a whole section, empty its list: `awards: []`
- Search for `TODO` — those are values that still need filling in.

## Viewing it locally

```bash
python -m http.server 5400
```

Then open http://localhost:5400. On localhost the page loads `data.js` with a
timestamp appended, because the dev server sends no `Cache-Control` and browsers
otherwise keep serving a stale copy after every edit.

## Publishing an update

```bash
vercel deploy --prod --yes
```

The CLI must be logged in as the account that owns the project
(`laibamazharone6-3293`). Check with `vercel whoami`; if it is wrong, run
`vercel logout` then `vercel login <email>`.

`.vercelignore` keeps the working files (`sample-*.html`, `logo_sheet.png`, this
README) out of the published site.

## The CV

Two versions exist deliberately:

| file | contains | where it lives |
|---|---|---|
| `Laiba_Mazhar_CV.pdf` | **no date of birth, no street address** | here, published |
| `Laiba_Mazhar_CV_KAUST.pdf` | full — DOB and address, which KAUST requires | `../KAUST-APPLICATION`, private |

Rebuild either from `../KAUST-APPLICATION/build_cv.py`:

```bash
python build_cv.py --web    # public version
python build_cv.py          # full KAUST version
```

Do not publish the KAUST version. It carries a home address.

## Logos

`logos/` holds six marks at 192 px, which covers a 3× retina panel at the 52–56 px
they display at. They were 512 px and nearly 1 MB in total before being resized.

Each entry's `logo` field is optional — leave it `""` and the site draws a clean
monogram from the organisation name instead. A logo file that 404s also falls back
to the monogram, so a missing image never shows as broken.

## Design notes

- **Dark only.** One palette, `color-scheme: dark` so the browser's own controls
  and scrollbars match.
- Paper-grain texture over the whole page (`screen` blend at 0.12), plus soft
  accent glows in the hero and each section, alternating sides.
- Contrast: body text 16.3:1, primary button 9.3:1 — well past WCAG AA.
- No external fonts, no CDN, no build step. Two files, works offline.
- Motion respects `prefers-reduced-motion` throughout.
