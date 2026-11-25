# REPO-MAP.md

## Folders
- `index.html` — the whole site: canvas homepage, Projects (Duki, Alexandrea's Library), Contact (click-to-reveal email and phone), and the shared `<chadm-appbar>`.
- `assets/chadm-appbar.js`, `assets/chadm-appbar.css` — copied shared app tray and profile menu (same idea as LOA and Duki).
- `assets/chadm-session.js` — shared non-secret cookies on `.chadmurchison.com` (`chadm_signed_in`, `chadm_user`, `chadm_sso_until`, `chadm_signout_at`). No tokens.
- `assets/site-account.js` — wires the app bar from those cookies; Log in / Sign up / Sign out URLs go to `library.chadmurchison.com`.
- `assets/alexandreas-library-screenshot.webp` — Projects card image.
- `pages/_headers` — Cache-Control for `/`, `/index.html`, `/assets/*`, `/robots.txt`; noindex on `*.pages.dev`.
- `pages/_redirects` — comments only; no active redirect rules. Old `/1010-glow/` and `/_app/*` fall through to the home page.
- `pages/robots.txt` — allow all crawlers.
- `scripts/build-pages.sh` — copies `index.html`, `assets/`, and the `pages/` files into the Pages output dir (default `dist/`).
- `.github/workflows/ci.yml` — Pages assemble (`./scripts/build-pages.sh dist`) on every push and pull request; no test suite and no deploy.
- `.github/workflows/deploy.yml` — push to `main` (path-filtered) deploys Cloudflare Pages. Wait for green CI first.

## Entry points
- Open `index.html` locally, or serve the folder statically.
- Production assemble: `./scripts/build-pages.sh dist`.

## Data stores
- None on the server. The site is static.
- Browser: shared session cookies only (see `assets/chadm-session.js`). No Cognito tokens are stored here.

## External services
- Cloudflare Pages project `chadmurchison-portfolio`, custom domains `chadmurchison.com` and `www`.
- Sign-in is delegated to Alexandrea's Library (`https://library.chadmurchison.com/?login`, `?signup`, `?logout&return=...`).
- Project links: `https://duki.chadmurchison.com`, `https://library.chadmurchison.com`.

## Hot files (bots: coordinate first)
`index.html`, `assets/chadm-appbar.js`, `assets/chadm-session.js`, `assets/site-account.js`.
