#!/usr/bin/env bash
set -euo pipefail

# Smart refresh: update dataset only when changed, avoid noisy commits.
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

python3 scripts/update-live-sites.py >/tmp/uhx-refresh.out 2>/tmp/uhx-refresh.err || {
  echo "refresh_failed"
  cat /tmp/uhx-refresh.err
  exit 1
}

# Stage only relevant files
git add site/claw-live-sites.json docs/live-sites-update-log.md || true

if git diff --cached --quiet; then
  echo "no_changes"
  exit 0
fi

# compact commit message with item count
COUNT=$(python3 - <<'PY'
import json
p='site/claw-live-sites.json'
try:
  d=json.load(open(p))
  print(len(d))
except:
  print('unknown')
PY
)

git commit -m "Proactive refresh: curated live-sites sync (${COUNT})" >/tmp/uhx-refresh-commit.out

git push origin master >/tmp/uhx-refresh-push.out

echo "updated:${COUNT}"
