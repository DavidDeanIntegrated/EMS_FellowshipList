# EMS Fellowship Rankings Site

This repository is configured to host your static site (`index.html`) on **GitHub Pages**.

## Files required for GitHub Pages (already included)

- `index.html` — your website entrypoint.
- `.github/workflows/deploy-pages.yml` — GitHub Actions workflow that deploys automatically.
- `.nojekyll` — tells Pages to serve static files exactly as-is.

## One-time setup in GitHub (required)

1. Open **Settings → Pages** in your repo.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or `master`) to trigger deployment.

## Live URL format

After the first successful Actions run, your site should be available at:

- `https://<github-username>.github.io/<repo-name>/`

## Deploy status from this environment

I can prepare the deployment files in git, but I cannot complete the final live publish step from here unless the repo is connected/authenticated for GitHub push/actions access.

To deploy immediately on your machine:

```bash
git push origin main
```

(Or `master`, depending on your default branch.)

Then check:

- **Actions** tab for workflow success
- **Settings → Pages** for the published URL

## Do I need both Jekyll Pages and static HTML?

No — you should use **one deployment method**. For this repo, use **GitHub Actions** in Pages settings (not a separate Jekyll build).

- In **Settings → Pages**, set **Source = GitHub Actions**.
- Keep `.nojekyll` in the repo (it is safe and ensures files are served without Jekyll processing).
- Your `index.html` is a static site and will deploy as-is.
