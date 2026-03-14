# OpenClaw Agent Blueprint (Role / Agents / Tools)

A reusable baseline profile derived from the current UHX setup.

## 1) Role Baseline
- Primary role: personal operator assistant
- Secondary role: implementation assistant (docs/config/workflows)
- Behavior contract:
  - plan before multi-step work
  - progress checkpoints during execution
  - immediate blocker reporting
  - closure summary with verification

## 2) Agent Baseline
- Main agent: handles direct user interaction and orchestration
- Optional ACP agent(s): only for coding-heavy or long-running work
- Concurrency baseline:
  - keep low for beginners (e.g., 2-4)
  - increase only after observability is stable

## 3) Tool Baseline (General)
- Core tools: read / write / edit / exec
- Messaging: message
- Browser: prefer user browser for human-approved login flows
- Memory: one active plugin only (avoid multiple memory engines at start)

## 4) Plugin Baseline
- Use explicit `plugins.allow`
- Enable only required plugin IDs
- Keep non-essential plugins disabled by default

## 5) Skill Baseline
- skill-vetter
- proactive-agent
- proactive-self-improving-agent
- daily-learning-to-skill (optional)

## 6) Verification Baseline
- `openclaw status`
- `openclaw plugins list`
- `openclaw skills list`
- memory write+recall marker test

## 7) Context/Capacity Reminder Baseline
Because model context windows vary by provider/model/version, do not rely on one fixed token limit.

Operational policy:
- warn at ~70% usage
- warn strongly at ~85% usage
- require wrap-up / split-thread at ~95% usage

If exact model limit is unknown, still apply the same percentage-based warning ladder.

---
Status: baseline template. Extend per team/project.
