# BIO2026 Student Symposium website

Static Next.js site for the **SASBi | SAGS BIO2026 Student Symposium** programme booklet
(Nelson Mandela University, Gqeberha — 31 August 2026).

Live: [https://symposium-booklet.vividhouse.co.za/](https://symposium-booklet.vividhouse.co.za/)

## Requirements

- **Node.js 22** (pinned in `[.nvmrc](.nvmrc)`)
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



### Afrihost DNS ([vividhouse.co.za](http://vividhouse.co.za))

In the Afrihost control panel for **vividhouse.co.za**, add:


| Type  | Host / name         | Value / points to  |
| ----- | ------------------- | ------------------ |
| CNAME | `symposium-booklet` | `seal12.github.io` |


Use only the subdomain label (`symposium-booklet`), not the full hostname, if Afrihost asks for the host field. DNS can take up to an hour (sometimes longer) to propagate before GitHub shows the domain as verified.

## Content

Booklet copy lives in typed modules under `src/content/`. Images/logos are under `public/assets/` (PNG/SVG); reference them via `asset()` from `src/lib/asset.ts`.

## Scripts


| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Local development server |
| `pnpm build` | Static export to `out/`  |
| `pnpm lint`  | ESLint                   |




## Generate QR Code

Ensure that `qrencode` and `imagemagick` are installed with the below command:

```bash
sudo apt update && sudo apt install qrencode imagemagick -y
```

> `imagemagick` does not install a single wrapper. Instead installs `convert` and `composite`.

1. Generate QR Code for web link:

```bash
qrencode -s 20 -l H -o out/qr-code-h.png "https://symposium-booklet.vividhouse.co.za/"
```

2. Add logo to QR Code:

```bash
convert public/assets/logos/bio26-wordmark-white.jpeg -resize 200x200 out/resized_logo.png && composite -gravity center out/resized_logo.png out/qr-code-h.png out/bio26-students-qr-code-h.png 

```

3. Clean up:

```bash
rm -f out/qr-code-h.png out/resized_logo.png
```