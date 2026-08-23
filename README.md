# laiba-mazhar.vercel.app

Personal portfolio for Laiba Mazhar — data scientist and ML researcher.

A static site with no build step: one HTML file, one data file, and the assets.
Open `index.html` in a browser and it works.

**Live:** https://laiba-mazhar.vercel.app

---

## Layout of the repo

| path | what it is |
|---|---|
| **`data.js`** | **every word on the site. This is the only file to edit for a content change.** |
| `index.html` | the design: tokens, styles, and the script that renders `data.js` |
| `photo.jpg` | hero portrait |
| `logos/` | organisation marks, referenced by the `logo` field of a role or degree |
| `Laiba_Mazhar_CV.pdf` | the CV the site links to |
| `vercel.json` | cache headers — assets for a week, HTML and `data.js` always revalidated |
| `.gitattributes` | marks the binary assets, so `core.autocrlf` cannot rewrite bytes inside the PDF or the PNGs on checkout |

## Editing the content

Open `data.js`, change the text, save, refresh. That is the whole loop —
no install, no compile.

- Keep the quotes and commas as they are; a missing comma breaks the page.
- To hide a whole section, empty its list: `awards: []`.
- Search for `TODO` to find values still waiting on a real answer.
- Every section renders only if its list has entries, so nothing has to be
  deleted from `index.html` to remove one.

## Running it locally

```bash
python -m http.server 5400
```

Then open http://localhost:5400.

On localhost the page appends a timestamp to `data.js`, because a plain
`http.server` sends no `Cache-Control` and the browser otherwise keeps serving
a stale copy after every edit. In production the URL stays clean.

## How the page behaves

**One screen per section.** Every long list opens at a length that fits roughly
one viewport and holds the rest behind a *show more* button — about seven and a
half screens on a desktop instead of fifteen. The row count is per viewport: a
row sitting in a three-column grid stacks to full width on a phone, so narrow
screens keep fewer. Nothing is removed, only folded.

To change how much a section shows, edit its `collapse()` call in `index.html`:

```js
collapse(box, ".sk", keep(3, 2), "areas");
//              ^      ^  ^        ^
//         row class   |  phone    noun for the button, pluralised to match
//                  desktop
```

Two details that are easy to break:

- `.gone` is deliberately the **last** rule in the stylesheet. `.led`, `.awd`
  and the community grid children set their own `display` at equal specificity,
  so an earlier rule loses and collapsing silently does nothing.
- Rows revealed by a button are marked shown explicitly. They carry the
  scroll-reveal class, and the observer already passed over them while they were
  `display:none`, so otherwise they unhide at zero opacity and stay blank.

**Projects** also filter by category. The cap applies inside whatever the
filters have narrowed to, so *show more* always refers to the list on screen,
and the button hides itself when the filtered set already fits.

**Scroll reveal fails safe.** Content is visible by default and is only hidden
while `reveal-on` sits on `<html>`, which the script adds after confirming
`IntersectionObserver` exists and removes again if the observer never fires. A
scroll animation must degrade to *shown*, never to a blank page.

## Organisation marks

`logos/` holds one PNG per organisation, sized for a 3× panel at the 40 px they
display at.

The `logo` field is optional. Leave it `""` and the site draws a monogram from
the organisation's name — two initials for a multi-word name, or the name's own
internal capitals for a single word, so `AiPixal` becomes `AP` rather than a
lone `A`. A logo file that 404s falls back to the same monogram, so a missing
image never renders as broken.

A stacked lockup — glyph over wordmark — is illegible at 40 px. Crop to the
glyph alone; the organisation name is already printed beside the mark.

## Design notes

- **Dark only, deliberately.** Following the OS preference meant a light-mode
  machine got a white page nobody asked for. Every colour is painted
  explicitly rather than inherited.
- Type is IBM Plex Serif / Sans / Mono, loaded from Google Fonts — the one
  external request the page makes.
- The recurring device is a magnitude drawn off a shared baseline. Every bar is
  a real proportion of real content, never decoration.
- Abstracts and row titles are clamped to two lines. The full abstract is in
  the paper each row links to.
- Motion respects `prefers-reduced-motion` throughout, and hover states are
  suppressed on pointerless devices so they cannot stick.

## Deploying

Vercel builds from this repository. Pushing to `main` publishes; pushing any
other branch gives a preview URL.

To deploy from the command line instead:

```bash
npx vercel deploy --yes
```

That gives a preview. Add `--prod` to publish. The CLI has to be logged in as
the account that owns the project — check with `npx vercel whoami`, and run
`npx vercel login` if it is not.

## A note on the CV

The PDF in this repo is the public version: no date of birth, no street
address. A fuller version exists for applications that require those fields.
It is kept outside this repository on purpose and must not be committed here.

## Reuse

The code is here to read and borrow from. The written content, the CV, the
photograph and the organisation logos are not mine to license — please don't
reuse those.
