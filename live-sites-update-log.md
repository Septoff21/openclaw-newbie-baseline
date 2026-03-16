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
