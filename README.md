# sanjaesuresh.com

Personal portfolio for Sanjae Suresh — software engineer and photographer. A
single-page site with a cyanotype, field-notes aesthetic. Live at
[sanjaesuresh.com](https://sanjaesuresh.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [`motion`](https://motion.dev) for animation, [`yet-another-react-lightbox`](https://yet-another-react-lightbox.com) for the photo gallery
- Fonts: IBM Plex Mono (mono UI) + Space Grotesk (display), via `next/font`

## Run it

```bash
npm install
npm run dev      # dev server at http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm start` (serve the
build), `npm run lint`.

## Layout

The page is composed in `src/app/page.tsx` from section components in
`src/components/` — in order: Masthead, About, Experience, Projects, Atlas (an
interactive travel map), Photography, Contact. Styling and the cyanotype color
tokens live in `src/app/globals.css`.

Section content is data-driven — edit these rather than the components:

| File | Drives |
| --- | --- |
| `src/data/experience.ts` | Work history / log entries |
| `src/data/projects.ts` | Projects list |
| `src/data/travel.ts` | Places for the Atlas map (city pins, notes) |
| `src/data/photos.ts` | Photo gallery manifest (generated — see below) |
| `src/data/worldPaths.ts` | Atlas world-map SVG paths (generated — see below) |

Drop-in assets live in `content/` (resume PDF, source photos) and are published
to `public/` for the site to serve.

## Content scripts

Two one-off generators keep the data files in sync with real content:

- **Photos** — drop images (JPG / HEIC / DNG / PNG) into `content/photography/`,
  then run `python3 scripts/build-photos.py`. It downsizes each to a web JPEG in
  `public/photography/`, reads EXIF (focal / aperture / shutter / ISO) for the
  contact-sheet captions, and regenerates `src/data/photos.ts`. Uses macOS
  built-ins (`sips`, `mdls`) plus Pillow.
- **Map** — `node scripts/build-map.mjs <world.geojson>` projects a Natural
  Earth countries GeoJSON into the SVG paths in `src/data/worldPaths.ts`. Re-run
  only to regenerate the base map.

## Note on Next.js

This repo pins a newer Next.js than most references describe — see `AGENTS.md`.
Check `node_modules/next/dist/docs/` for the version actually installed before
relying on older conventions.
