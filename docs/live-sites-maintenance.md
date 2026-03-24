# Live Sites Maintenance

## Refresh flow
1. Update scan sources in workspace:
   - `openclaw-repo-url-scan-100.json`
   - `openclaw-repo-url-validated.md`
2. Run:
   - `python3 scripts/update-live-sites.py`
3. Commit and push `site/claw-live-sites.json`
4. Publish gh-pages from `site/`

## Quality bar
- Keep only actionable external URLs
- Remove image/badge/social noise
- One best URL per repo
- Preserve star ranking for default sort
