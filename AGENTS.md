# AGENTS.md

## What this is
The public portfolio site for Chad Murchison: static HTML with a canvas homepage plus Projects and Contact views. Live: https://chadmurchison.com (and www). Repo: [Renovare10/Portfolio-Site](https://github.com/Renovare10/Portfolio-Site) (public). Owner: Yoshi.

## Start here
1. Read `REPO-MAP.md`.
2. `LIVE.md` is not generated in this repo yet; do not invent one.
3. Shared programmer playbook: `/home/box/reference/PLAYBOOK.md`.

## Run / test
```bash
python3 -m http.server 8080    # no build step, no package.json, no test script
./scripts/build-pages.sh dist  # optional: assemble the Pages output
```

## Hard rules
- No deploy, push to `main`, paid service, or delete without Chad's approval in his own words.
- Commit as `Chadfire <chadfire10@yahoo.com>`. Never commit or print secrets.
- Pushing `main` deploys the live site via `.github/workflows/deploy.yml` when `index.html`, `assets/**`, `pages/**`, `scripts/build-pages.sh`, or the workflow file change. Work on a feature branch.
- This site has no Cognito client. Log in / Sign up / Sign out go through the library. Shared cookies only; no tokens.
- Do not add 1010-glow back (intentionally omitted in `scripts/build-pages.sh`).

## Deploy (only when approved)
1. Record the current Pages deployment ID for rollback (project `chadmurchison-portfolio`).
2. Production: push to `main`. CI runs `./scripts/build-pages.sh dist` and `pages deploy dist --project-name=chadmurchison-portfolio --branch=main`.
3. Manual preview: same assemble, deploy to a Pages branch other than `main`.
4. Rollback: redeploy the recorded prior Pages deployment.

## Keep current
Changed layout, commands, or deploy? Update this file and `REPO-MAP.md` in the same commit.
