# Search Optimization Playbook (OpenClaw ecosystem)

Purpose: keep repo discovery efficient, reproducible, and continuously improvable.

## 1) Query Strategy (layered)

Run in this order to reduce noise:
1. Exact-core terms: `openclaw`, `clawdbot`, `moltbot`, `clawhub`
2. Scoped terms: `openclaw skill`, `openclaw plugin`, `openclaw template`, `openclaw guide`
3. Ecosystem terms: `awesome openclaw`, `openclaw dashboard`, `openclaw memory`
4. Source constrained: `site:github.com`, `site:docs.openclaw.ai`

## 2) Collection Pipeline

1. Pull candidates from GitHub search / API
2. Extract potential URLs from homepage + README
3. De-duplicate URLs
4. Keep only actionable links (docs/demo/app/site)
5. Validate reachability (HTTP 200/301/302)
6. Store both raw + filtered outputs

## 3) Filtering Rules

Prefer:
- product/docs/demo domains
- github.io / vercel / netlify / official docs domains

Down-rank or remove:
- badges/images
- donation links
- generic social links unless required for context
- obviously unrelated high-star repos

## 4) Output Contract (every scan)

Produce:
- `openclaw-repo-url-scan-100.md` (raw candidate list)
- `openclaw-repo-url-validated.md` (reachable subset)
- `openclaw-repo-url-scan-100.json` (structured machine-readable)

## 5) Reflection Loop (mandatory)

After each run:
1. Count irrelevant hits
2. Identify noisy queries
3. Add/remove query terms
4. Update filtering rules
5. Record what improved in this file

## 6) Efficiency Guardrails

- Prefer one larger batch query over many tiny loops
- Use bounded pages/timeouts
- Avoid re-checking unchanged URLs (future: cache last status)
- Keep a rolling top list for high-value domains

## 7) Next upgrades

- Add URL status cache (`url-status-cache.json`)
- Add domain quality scoring
- Add "claw directory" auto-generator for frontend cards
