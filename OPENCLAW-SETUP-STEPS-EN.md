# OpenClaw Setup Steps (English, General Baseline)

This is a practical, public-safe setup guide for a new OpenClaw install.

## 0) Scope
- Audience: new OpenClaw users
- Goal: working + safe baseline (not advanced tuning)
- Excludes: personal identity/persona customization

## 1) Install + Health Check
1. Install OpenClaw.
2. Run:
   - `openclaw --version`
   - `openclaw status`
3. Confirm:
   - Gateway service is running
   - At least one channel is connected (or ready)

## 2) Security Baseline (Must-have)
1. Use explicit plugin allowlist (`plugins.allow`).
2. Keep only required plugins enabled.
3. Store secrets outside docs (never commit raw keys).
4. Keep Control UI loopback-only unless intentionally exposed.

## 3) Memory Baseline (Production-friendly)
1. Enable one memory plugin as active slot (`plugins.slots.memory`).
2. Recommended defaults:
   - `autoCapture: true`
   - `autoRecall: true`
   - `smartExtraction: true`
3. If using `memory-lancedb-pro`, use an OpenAI-compatible embedding endpoint (OpenAI/Jina/Gemini/Ollama-compatible).

## 4) General Skills to Install First
- `skill-vetter` (review skills before install/update)
- `proactive-agent` (plan/progress/blocker/closure workflow)
- `proactive-self-improving-agent` (capture reusable learnings)
- `daily-learning-to-skill` (optional placeholder for converting daily logs into skill updates)

## 5) ACP + Plugin Restriction Baseline
1. Enable ACP runtime only if needed.
2. Keep ACP/plugin scope minimal for beginners.
3. Do not enable broad plugin sets by default.

## 6) Verification (Required)
Run and verify:

```bash
openclaw status
openclaw plugins list
openclaw skills list
```

Memory functional check (example):
1. Store a unique marker in memory.
2. Recall by that marker.
3. Confirm hit count >= 1.

## 7) Execution Transparency Standard
For any multi-step operation, always report:
1. Start plan
2. Progress checkpoints
3. Blockers immediately
4. Final summary with changed files + verification commands

## 8) Public Repo Hygiene Checklist
Before publishing docs:
- [ ] No API key/token/password in markdown
- [ ] No local private paths that expose sensitive layout
- [ ] No bot token, auth token, or secret env values
- [ ] Include only reproducible setup steps

## 9) Advanced (Placeholder)
- Multi-agent scope isolation
- Rerank/retrieval tuning
- Cron-based proactive operations
- Team-grade security hardening
- Recovery and rollback playbooks
