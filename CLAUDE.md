# Notes for Claude Code

- Static site, zero dependencies. Build with `node build.mjs` → `dist/`. Preview with `npm run dev` (http://localhost:3000).
- Content lives in `src/content.mjs` and mirrors Reem Sharaf's CV exactly — don't invent facts.
- The visible site is English, plus a few Arabic touches for Arabic search: the Arabic name line in the hero, the footer, and one Arabic FAQ entry (all from the `AR` translation). Arabic names also appear in meta/JSON-LD/llms.txt.
- Deploy: push to GitHub, import into Vercel with project name `reemsharaf` (domain reemsharaf.vercel.app). `vercel.json` already sets build command and output directory.
- After deploy: add Google Search Console verification token to `SITE.googleSiteVerification` in `src/content.mjs`, rebuild, and submit `/sitemap.xml`.
- `dist/` is generated — don't edit it by hand.
- Structure: one module per section in `src/sections/`, styles in `src/styles/` (+ `sections/<key>.css`), scripts in `src/scripts/` (bundled in filename order). The home page is an in-place stage (`40-stage.js`); each section picks its transition with `data-enter`.
