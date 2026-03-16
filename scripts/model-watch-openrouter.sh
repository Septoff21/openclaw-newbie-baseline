#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SNAPSHOT_DIR="$ROOT/model-watch"
TODAY="$(date +%F)"
STAMP="$(date -Iseconds)"
mkdir -p "$SNAPSHOT_DIR" "$ROOT/docs/model-daily"

curl -sL https://openrouter.ai/api/v1/models > "$SNAPSHOT_DIR/latest.json"
cp "$SNAPSHOT_DIR/latest.json" "$SNAPSHOT_DIR/$TODAY.json"

jq -r '.data[] | [.id, .name, .context_length, .pricing.prompt, .pricing.completion] | @tsv' "$SNAPSHOT_DIR/latest.json" \
  | sort > "$SNAPSHOT_DIR/latest.flat.tsv"

if [[ -f "$SNAPSHOT_DIR/prev.flat.tsv" ]]; then
  NEW_COUNT=$(comm -13 "$SNAPSHOT_DIR/prev.flat.tsv" "$SNAPSHOT_DIR/latest.flat.tsv" | wc -l)
  REMOVED_COUNT=$(comm -23 "$SNAPSHOT_DIR/prev.flat.tsv" "$SNAPSHOT_DIR/latest.flat.tsv" | wc -l)
else
  NEW_COUNT=0
  REMOVED_COUNT=0
fi

TOTAL=$(jq '.data|length' "$SNAPSHOT_DIR/latest.json")

REPORT="$ROOT/docs/model-daily/$TODAY.md"
{
  echo "# Model Daily Watch — $TODAY"
  echo
  echo "- Generated: $STAMP"
  echo "- Source: OpenRouter /api/v1/models"
  echo "- Total models: $TOTAL"
  echo "- New (vs previous snapshot): $NEW_COUNT"
  echo "- Removed (vs previous snapshot): $REMOVED_COUNT"
  echo
  echo "## New/Changed candidates (top 20 by created desc)"
  jq -r '.data | sort_by(.created) | reverse | .[:20] | .[] | "- \(.id) | ctx=\(.context_length // 0) | created=\(.created // 0)"' "$SNAPSHOT_DIR/latest.json"
  echo
  echo "## Adaptation checklist"
  cat <<'EOF'
- [ ] 1) Run smoke prompt (basic instruction following)
- [ ] 2) Run tool-calling prompt (if supported)
- [ ] 3) Run long-context prompt (if ctx >= 128k)
- [ ] 4) Record cost/latency/error pattern
- [ ] 5) Assign profile: fast-cheap / balanced / long-context / high-reasoning
EOF
} > "$REPORT"

cp "$SNAPSHOT_DIR/latest.flat.tsv" "$SNAPSHOT_DIR/prev.flat.tsv"
echo "Wrote: $REPORT"
