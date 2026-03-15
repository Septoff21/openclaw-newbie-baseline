# UHX Evolution Operating Model (Blueprint + Daily Improvement)

This document turns the current project into a repeatable operating system.

## 1) Core Objective
Build a beginner-first OpenClaw ecosystem that users can copy, run, customize, and evolve:
- Beginner → Advance → Extremely
- Copy-first prompts (non-dev friendly)
- Verification-first trust loop (anti-hallucination)

## 2) Kernel (What must stay stable)
1. **Content kernel**: copyable md/json/prompt templates
2. **Trust kernel**: plan/progress/blocker/final + independent verification
3. **Discovery kernel**: continuous claw repo/url scanning + curation
4. **Delivery kernel**: fixed public URL + repeatable deploy flow

## 3) Agent Team Model (adapted from provided references)
- **Intake Agent**: handles routine requests, classifies by Beginner/Advance/Extremely
- **Builder Agent**: generates content/cards/templates
- **Verifier Agent**: checks evidence and reproducibility
- **Maintainer Agent (UHX main)**: updates memory/docs/scripts and publishes
- **Escalation rule**: complex/high-risk items route to DM

## 4) Technical Oversight Rules
- Main agent can patch subordinate agent prompts, memory files, and scripts.
- Any policy-level change must be logged in docs + changelog.
- Risky actions require explicit verification outputs.

## 5) Daily Evolution Loop (self-update)
- **Frequency**: once daily (target 01:00 local) + heartbeat checkpoints
- **Daily cycle**:
  1. Review previous actions/errors
  2. Classify mistakes: real issue vs noise
  3. Patch templates/scripts/filters
  4. Rebuild and publish
  5. Write short report entry

## 6) Incident Loop (Sentry-style pattern)
1. Detect issue
2. Assess (real bug or ignorable noise)
3. Resolve (fix + deploy)
4. Report (what changed + verification)
5. Mute repeated false positives

## 7) Monetization-ready Modules (future-facing)
- Info products (guides/playbooks)
- Skill marketplace packaging
- Bespoke service templates
- Optional agent-payment rails (crypto/micropayment context, policy-dependent)

## 8) Website Style Policy
- Warm, youth-friendly, low jargon
- Fast scanning layout (list/card hybrid)
- Strong “copy and run” CTAs
- Clear progression: Beginner → Advance → Extremely

## 9) What to update automatically
- `site/claw-live-sites.json`
- `docs/live-sites-update-log.md`
- prompt library and beginner templates
- verification checklist language (if new failure patterns found)

## 10) Non-negotiables
- free + open source direction
- reproducible outputs
- transparent process updates
- no silent long gaps without checkpoint
