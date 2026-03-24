# Reusable Method: GitHub + Vercel (or GitHub Pages) for OpenClaw Starter Sites

## Goal
Publish a beginner-friendly OpenClaw guide site with a stable URL and repeatable workflow.

## Path A (Recommended): GitHub + Vercel
1. Create a public GitHub repo.
2. Put site files in `site/` (or framework root).
3. Import repo in Vercel.
4. Framework preset:
   - Static HTML: Other
   - Build command: *(empty)*
   - Output dir: `site`
5. Deploy and keep generated Vercel URL.
6. Optional: bind custom domain.

## Path B (No Vercel): GitHub Pages
1. Keep static files in `site/`.
2. Publish `site/` content to `gh-pages` branch root.
3. Enable GitHub Pages source: `gh-pages` `/`.
4. Use URL: `https://<user>.github.io/<repo>/`.

## Repository structure (starter)
- `site/index.html`
- `site/styles.css`
- `beginner/copy-prompts.md`
- `docs/github-vercel-reusable-method.md`

## Beginner checklist
- [ ] URL opens on mobile
- [ ] 3-level journey visible (Beginner/Advance/Extremely)
- [ ] One-click copy prompt works
- [ ] Verification checklist visible
- [ ] No secrets in repo

## Update loop
1. Edit content in GitHub
2. Push
3. Vercel/Pages auto-redeploy
4. Verify URL + screenshot

## Anti-hallucination rule
Always publish with verification:
- what changed
- where deployed
- how to independently verify
