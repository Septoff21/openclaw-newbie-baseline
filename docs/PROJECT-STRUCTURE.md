# Project Structure

## Product Surface
- `site/index.html`: primary user entry
- `site/claw-live-sites.html`: curated list page
- `site/*.html`: thematic modules (SEO, diary, case pages)

## Data Layer
- `site/claw-live-sites.json`: list data for cards
- `site/claw-directory.json`: style reference cards

## Docs Layer
- `docs/guides/`: stable user-facing guides
- `docs/research/`: scan outputs and candidate pools
- `docs/live-sites-maintenance.md`: ops manual
- `docs/live-sites-update-log.md`: update history

## Automation Layer
- `scripts/update-live-sites.py`: rebuild curated dataset
- `scripts/proactive-refresh.sh`: commit/push only when changed

## Analysis Layer
- `claw-analysis/`: reverse-engineering notes, screenshots, extraction traces
