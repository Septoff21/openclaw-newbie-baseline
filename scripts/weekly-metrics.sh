#!/bin/bash
# Weekly Metrics Report — OpenClaw Newbie Baseline
# Usage: ./scripts/weekly-metrics.sh
# Output: Git log analysis for the past 7 days

REPO="/home/dm/.openclaw/workspace/openclaw-newbie-baseline"
cd "$REPO" || exit 1

echo "📊 Weekly Metrics — $(date '+%Y-%m-%d %H:%M %Z')"
echo "================================================"
echo ""

# Commits this week
COMMITS=$(git log --oneline --since="7 days ago" --all | wc -l)
echo "📝 Commits (7 days): $COMMITS"

# Files changed
FILES=$(git log --stat --since="7 days ago" --all --name-only | grep -E '\.(html|css|js|json|md|sh)$' | sort -u | wc -l)
echo "📁 Files touched: $FILES"

# Contributors
CONTRIB=$(git log --format='%an' --since="7 days ago" --all | sort -u)
echo "👤 Contributors: $CONTRIB"

echo ""
echo "📋 Commit Timeline:"
git log --oneline --since="7 days ago" --all --format="  %ad %s" --date=short

echo ""
echo "📈 Page Count:"
echo "  HTML pages: $(find . -name '*.html' | wc -l)"
echo "  JS files: $(find . -name '*.js' | wc -l)"
echo "  JSON data: $(find . -name '*.json' | wc -l)"
echo "  Shell scripts: $(find . -name '*.sh' | wc -l)"
echo "  Diary entries: $(find diary/ -name '*.md' 2>/dev/null | wc -l)"
