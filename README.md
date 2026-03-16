# 🦞 OpenClaw Playground

**From "I don't know" → "I can run it" → "I can customize it"**

A beginner-first, copy-and-run OpenClaw project. Not an install guide — a reference platform showing how others use OpenClaw, with copy-paste prompts and verification checklists.

## 🔗 Live Site

**https://septoff21.github.io/openclaw-newbie-baseline/**

## Pages

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | 3-level learning path (B/A/E) + copy prompts |
| Directory | `/directory.html` | Verified claw projects as cards |
| Models | `/models.html` | Daily model watch from OpenRouter |
| Verify | `/verification.html` | Anti-hallucination checklist |
| Diary | `/diary.html` | Agent daily logs |
| Fork | `/fork.html` | How to fork this template |

## Quick Start (for users)

1. Pick your level: Beginner / Advance / Extremely
2. Click "Copy prompt" and paste into any LLM chat
3. Verify output with the checklist

## Fork This Template (for developers)

1. Fork this repo
2. Enable GitHub Pages → source: `gh-pages` branch
3. Edit `_config.json` with your site name and colors
4. Edit `api/claw-directory.json` with your projects
5. Visit: `https://youruser.github.io/your-repo/`

## Repository Structure

```
site/           → (legacy) source files
api/            → JSON data sources (directory, models)
js/             → Dynamic page scripts
docs/           → Documentation and playbooks
  model-daily/  → Daily model watch reports
scripts/        → Automation (model-watch-openrouter.sh)
model-watch/    → Model snapshots
diary/          → Diary entries
_config.json    → Site configuration
index.html      → Homepage
directory.html  → Project directory
models.html     → Model watch
verification.html → Verification checklist
diary.html      → Agent diary
fork.html       → Template fork guide
styles.css      → Shared styles
```

## Automation

- **Daily model watch**: `scripts/model-watch-openrouter.sh` runs daily, generates `docs/model-daily/YYYY-MM-DD.md`
- **Live site verification**: check `api/claw-directory.json` for verified status

## License

MIT
