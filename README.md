# Katharine Wells — Research Portfolio

A fully static personal research website, built with accessible HTML, CSS, and JavaScript. It is ready for GitHub Pages—no Node, package installs, database, build system, or paid host required.

## What's included

- `index.html`: homepage (research, methods, experience, contact)
- `projects/opportunity-index.html`: Live and Learn Opportunity Index
- `projects/mls-accuracy.html`: MLS school-assignment accuracy
- `projects/rezoning.html`: sociology capstone
- `projects/metro-systems.html`: metro systems Wikipedia corpus
- `assets/css/styles.css`: colors, typography, mobile layout
- `assets/js/main.js`: mobile menu, project filters, copyright year
- `assets/img/`: favicon only; no illustrative or generated research figures
- `404.html`, `assets/img/favicon.svg`, `.nojekyll`

## Preview on your computer

Double-click `index.html` to open it in your browser. All local page links and filtering work without a web server.

If using VS Code, you can alternatively open the entire folder and run Live Server. No dependencies are needed.

## Publish on GitHub Pages

1. Sign into [GitHub](https://github.com) and create a repository. For the cleanest personal URL, call it `YOUR-USERNAME.github.io`. Alternatively, a repository named `research-portfolio` will publish at `https://YOUR-USERNAME.github.io/research-portfolio/`.
2. Upload the **contents** of this folder to the repository root, including `index.html`, `projects`, and `assets` (not a single ZIP file). Make sure `index.html` is in the root.
3. Commit the files to the `main` branch.
4. Go to **Settings → Pages → Build and deployment**.
5. Choose **Deploy from a branch**, then **main** and **/(root)**, and click **Save**.
6. Once publishing completes, open the URL shown in the Pages settings.

Reference: [GitHub's documentation on publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit your information

- **Headline, About, experience, research card descriptions:** edit `index.html`.
- **Project details and methodological language:** edit the relevant file in `projects/`.
- **Colors and spacing:** edit the `:root` variables at the start of `assets/css/styles.css`.
- **Email:** search for `katharine.wells@richmond.edu` and replace if preferred.
- **LinkedIn:** search for `katharinewells2027` and replace if your handle changes.
- **Original research files:** see `research-assets/SOURCE_MANIFEST.json` and `research-assets/README.md` for the exact source checklist. Files and maps must be added from your real research exports; none were fabricated to stand in.

## Before sharing publicly

- Review all copy and factual claims; check dates, academic titles, and award naming.
- Get approval from research supervisors and partners before uploading unpublished maps, figures, proprietary property-level MLS data, or draft manuscripts.
- Decide whether to keep your university email publicly visible.
- The index and capstone are ongoing projects, so add finalized findings only when supported.
- All files in a GitHub Pages site are public on the internet.

## Design + accessibility

Semantic landmarks, skip link, visible keyboard focus, alt text, contrast-aware colors, reduced-motion preference, working mobile navigation, no JavaScript dependency for core navigation, and no third-party analytics or trackers.

**Status:** Local website files generated and browser tested; **not** deployed to a live GitHub repository.

## Research-media integrity (important)

**This version does not bundle the original presentations or maps.** Their titles and content could be verified in the research library, but their raw binary files could not be copied into the build. Consequently, the first-version conceptual SVG illustrations were **removed** from the site and its package. Project cards are typography only, not alleged geographic or quantitative results.

In the project pages, the Research Materials sections name the specific originals and say that they have not been bundled yet. The site cannot honestly claim to contain the original files until you re-upload them in a tool-accessible form. The published GitHub site should only make downloads live after the approved original files are included.

Only original user/research-team figures may be included as research output; do not recreate the actual maps or claim AI illustrations are research findings.
