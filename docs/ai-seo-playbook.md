# AI SEO Playbook (Condensed from Juejin case + English references)

Source case: https://juejin.cn/post/7616165515789041704

## What worked in the case (compressed)
1. **Start with technical SEO baseline**
   - Fix missing `meta description` and `canonical` quickly, in batch.
2. **Use AI for execution speed, but add risk boundaries**
   - AI can over-optimize titles/keywords; require guardrails before sweeping changes.
3. **Treat publishing as a repeatable pipeline**
   - Diagnose → patch → push to GitHub → verify indexing/promotions.
4. **Keep evidence trail**
   - Log what changed and outcomes; this becomes proof + future long-tail content.

## Beginner-safe AI SEO workflow
1. Baseline check (meta/canonical/sitemap/robots)
2. Small patch set only (no massive title rewrites)
3. Publish + verify crawl/index signals
4. Generate one distribution post from changelog
5. Weekly review: keep what works, remove noisy actions

## Copy Prompt (for OpenClaw)
You are my SEO ops copilot for a small website.
Goal: safe SEO improvements with evidence.
Do now:
1) Audit technical SEO basics (meta description, canonical, sitemap, robots)
2) Propose low-risk fixes only (no global title rewrite)
3) Apply patch and list changed files
4) Provide verification checklist and rollback notes
Return: plan/progress/blocker/final summary.

## English references (practical)
- Google Search Central: Creating helpful, reliable content
  - https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search guidance on AI-generated content
  - https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- Google Search Essentials
  - https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Ahrefs: AI SEO guide
  - https://ahrefs.com/blog/ai-seo/
- Semrush: AI SEO overview
  - https://www.semrush.com/blog/ai-seo/
- HubSpot: AI for SEO (practical workflow)
  - https://blog.hubspot.com/marketing/ai-seo

## How this maps to our project
- Beginner: copy this prompt and run baseline-safe SEO checks
- Advance: automate weekly SEO review + update log
- Extremely: multi-agent pipeline (audit agent, patch agent, verifier agent)
