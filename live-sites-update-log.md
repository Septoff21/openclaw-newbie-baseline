# Live Sites Update Log

## 2026-03-16 (proactive optimization pass)

### What changed
1. Added **Model Context Reminder** section on homepage
   - Warns users that context/tool behavior differs across models/providers
   - Reinforces evidence-first verification and warning ladder (70/85/95)
2. Reframed references into **Role / Agents / Tools baseline** block
   - Makes governance/operating baseline visible for non-dev users

### Why
- Reduce hallucination risk for beginner users who assume all models behave the same
- Make architecture/governance guidance visible earlier in the journey

### Verification
- Local file updated: `index.html`
- Deployed branch: `gh-pages` (after commit/push)
- Live URL to verify: `https://septoff21.github.io/openclaw-newbie-baseline/`

### Next step
- Add a compact “copyable model-selection prompt” card (speed vs cost vs context)
- Add one-click mobile screenshot proof checklist block

## 2026-03-18 (iteration continue pass)

### What changed
1. Re-curated ecosystem links (33 → 20 high-signal entries)
   - Removed noisy/out-of-scope domains (badge pages, registry mirrors, social-only links)
   - Synced structured data to:
     - `openclaw-newbie-baseline/claw-live-sites.json`
     - `openclaw-newbie-baseline/site/claw-live-sites.json`
   - Refreshed human-readable list:
     - `claw-analysis/claw-live-sites-curated.md`
2. Added homepage section: **User View + Builder View**
   - Clarifies what end users can get immediately
   - Clarifies how developers can fork and rebrand this template quickly

### Why
- Reduce decision fatigue for beginners by showing only actionable references
- Align homepage with DM's positioning needs: audience clarity + copy-first fork path

### Verification
- Health check: `curl -s -o /dev/null -w "%{http_code}" https://septoff21.github.io/openclaw-newbie-baseline/` → `200`
- Local file diff confirms new section in `index.html`
- Curated data count in markdown/json now consistent at 20

### Next step
- Connect curated JSON directly to `directory.html` renderer (single source of truth)
- Add a “target audience chooser” mini wizard (user / builder / monetizer)
