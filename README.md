# BIO2026 Student Symposium website

Static Next.js site for the **SASBi | SAGS BIO2026 Student Symposium** programme booklet
(Nelson Mandela University, Gqeberha — 31 August 2026).

Live: https://symposium-booklet.vividhouse.co.za/

## Requirements

- **Node.js 22** (pinned in [`.nvmrc`](.nvmrc))
- **pnpm 11.24.0** (pinned via `packageManager` in `package.json`; Corepack recommended)

```bash
nvm use
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static build

```bash
nvm use
pnpm build
```

Output is written to `out/`. Preview locally:

```bash
pnpm dlx serve out
```

## GitHub Pages setup

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).
3. **Settings → Pages → Custom domain**: `symposium-booklet.vividhouse.co.za` (wait for DNS, then enable **Enforce HTTPS**).
4. Site URL: `https://symposium-booklet.vividhouse.co.za/`

### Afrihost DNS (vividhouse.co.za)

In the Afrihost control panel for **vividhouse.co.za**, add:

| Type  | Host / name   | Value / points to   |
|-------|---------------|---------------------|
| CNAME | `symposium-booklet`   | `seal12.github.io`  |

Use only the subdomain label (`symposium-booklet`), not the full hostname, if Afrihost asks for the host field. DNS can take up to an hour (sometimes longer) to propagate before GitHub shows the domain as verified.

## Content

Booklet copy lives in typed modules under `src/content/`. Images/logos are under `public/assets/` (PNG/SVG); reference them via `asset()` from `src/lib/asset.ts`.

## Scripts

| Command         | Description              |
|-----------------|--------------------------|
| `pnpm dev`      | Local development server |
| `pnpm build`    | Static export to `out/`  |
| `pnpm lint`     | ESLint                   |
