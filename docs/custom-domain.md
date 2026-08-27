# Custom domain: bio-sympo.vividhouse.co.za

This site is hosted on **GitHub Pages** and served at:

**https://bio-sympo.vividhouse.co.za/**

The domain `vividhouse.co.za` is registered with Afrihost. The subdomain `bio-sympo` points at the same GitHub Pages deployment as before.

## Overview

GitHub Pages serves a custom subdomain from the **root** of that hostname (not under `/bio-sympo-boolet`). The repo is configured accordingly:

- `next.config.ts` — no `basePath` or `assetPrefix` on deploy
- `public/CNAME` — contains `bio-sympo.vividhouse.co.za` (copied into `out/` on build)

## Setup steps

### 1. Afrihost DNS

In the Afrihost control panel for **vividhouse.co.za**, add:

| Type  | Host / name | Points to          |
|-------|-------------|--------------------|
| CNAME | `bio-sympo` | `seal12.github.io` |

Use only the subdomain label (`bio-sympo`), not the full hostname, if Afrihost asks for the host field.

DNS can take up to an hour (sometimes longer) to propagate before GitHub shows the domain as verified.

### 2. GitHub Pages custom domain

1. Push to `main` and let the **Deploy to GitHub Pages** workflow finish (or run it manually from the Actions tab).
2. In the repo: **Settings → Pages → Custom domain**
3. Enter: `bio-sympo.vividhouse.co.za`
4. Wait until GitHub shows the domain as verified.
5. Enable **Enforce HTTPS**.

### 3. Verify

Open **https://bio-sympo.vividhouse.co.za/** and confirm pages and images load correctly.

## GitHub Pages source

- **Settings → Pages → Source:** GitHub Actions
- Workflow: `.github/workflows/deploy.yml` (runs on push to `main` or via `workflow_dispatch`)

## Notes

- The old project URL (`https://seal12.github.io/bio-sympo-boolet/`) may redirect to the custom domain or stop working correctly, since assets are no longer under `/bio-sympo-boolet`. That is expected when switching to a custom subdomain.
- If the domain does not verify, double-check the CNAME record in Afrihost and that `public/CNAME` is present in the deployed `out/` artifact.
