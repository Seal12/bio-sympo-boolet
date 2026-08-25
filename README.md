# BIO2026 Student Symposium website

Static Next.js site for the **SASBi | SAGS BIO2026 Student Symposium** programme booklet
(Nelson Mandela University, Gqeberha — 31 August 2026).

Live (GitHub Pages): https://seal12.github.io/bio-sympo-boolet/

## Requirements

- **Node.js 22** (pinned in [`.nvmrc`](.nvmrc))

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static build

```bash
nvm use
npm run build
```

Output is written to `out/`. Preview locally (paths without GitHub Pages `basePath`):

```bash
npx serve out
```

On GitHub Actions, `GITHUB_ACTIONS=true` enables `basePath` / `assetPrefix` of `/bio-sympo-boolet` so assets resolve under project Pages.

## GitHub Pages setup

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).
3. Site URL: `https://seal12.github.io/bio-sympo-boolet/`

## Content

Booklet copy lives in typed modules under `src/content/`. Images/logos are under `public/assets/` (PNG/SVG).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Local development server |
| `npm run build`| Static export to `out/`  |
| `npm run lint` | ESLint                   |
