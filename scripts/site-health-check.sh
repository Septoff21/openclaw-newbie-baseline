#!/bin/bash
# Site Health Check — OpenClaw Newbie Baseline
# Usage: ./scripts/site-health-check.sh
# Exit code: 0 = all OK, 1 = one or more pages down

BASE="https://septoff21.github.io/openclaw-newbie-baseline"
PAGES=("" "directory.html" "models.html" "verification.html" "diary.html" "fork.html" "shop.html" "quickstart.html" "reference.html")
LABELS=("Home" "Directory" "Models" "Verification" "Diary" "Fork" "Shop" "QuickStart" "Reference")

FAIL=0
RESULTS=""

for i in "${!PAGES[@]}"; do
  URL="$BASE/${PAGES[$i]}"
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$URL")
  if [ "$STATUS" = "200" ]; then
    RESULTS+="✅ ${LABELS[$i]}: $STATUS\n"
  else
    RESULTS+="❌ ${LABELS[$i]}: $STATUS\n"
    FAIL=1
  fi
done

echo -e "Site Health Check — $(date '+%Y-%m-%d %H:%M %Z')\n"
echo -e "$RESULTS"

if [ $FAIL -eq 1 ]; then
  echo "⚠️ ONE OR MORE PAGES DOWN"
  exit 1
else
  echo "✅ All pages healthy"
  exit 0
fi
