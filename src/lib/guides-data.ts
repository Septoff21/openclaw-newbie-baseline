// Auto-generated from _legacy guides
export interface GuideMeta { slug: string; title: string; description: string; }

export const guideMeta: Record<string, GuideMeta> = {
  "setup-beginner": {
    "slug": "setup-beginner",
    "title": "OpenClaw Setup Steps (Beginner)",
    "description": "A practical, public-safe setup guide for a new OpenClaw install."
  },
  "setup-advanced": {
    "slug": "setup-advanced",
    "title": "OpenClaw Setup Steps (Advanced)",
    "description": "Advanced setup patterns: multi-agent, memory engineering, ACP at scale."
  },
  "agent-blueprint": {
    "slug": "agent-blueprint",
    "title": "OpenClaw Agent Blueprint",
    "description": "A reusable baseline profile: role, agents, tools, plugins, skills, verification."
  },
  "uhx-newbie": {
    "slug": "uhx-newbie",
    "title": "UHX Newbie Documentation",
    "description": "\u901a\u7528\u57fa\u7ebf\u8bbe\u5b9a\uff1a\u63d2\u4ef6\u3001\u8bb0\u5fc6\u3001\u6280\u80fd\u3001\u6267\u884c\u6d41\u7a0b\u3001Context \u6c34\u4f4d\u63d0\u9192\u3002"
  }
};

export const guideContent: Record<string, string> = {
  "setup-beginner": `# OpenClaw Setup Steps (English, General Baseline)

This is a practical, public-safe setup guide for a new OpenClaw install.

## 0) Scope
- Audience: new OpenClaw users
- Goal: working + safe baseline (not advanced tuning)
- Excludes: personal identity/persona customization

## 1) Install + Health Check
1. Install OpenClaw.
2. Run:
   - \`openclaw --version\`
   - \`openclaw status\`
3. Confirm:
   - Gateway service is running
   - At least one channel is connected (or ready)

## 2) Security Baseline (Must-have)
1. Use explicit plugin allowlist (\`plugins.allow\`).
2. Keep only required plugins enabled.
3. Store secrets outside docs (never commit raw keys).
4. Keep Control UI loopback-only unless intentionally exposed.

## 3) Memory Baseline (Production-friendly)
1. Enable one memory plugin as active slot (\`plugins.slots.memory\`).
2. Recommended defaults:
   - \`autoCapture: true\`
   - \`autoRecall: true\`
   - \`smartExtraction: true\`
3. If using \`memory-lancedb-pro\`, use an OpenAI-compatible embedding endpoint (OpenAI/Jina/Gemini/Ollama-compatible).

## 4) General Skills to Install First
- \`skill-vetter\` (review skills before install/update)
- \`proactive-agent\` (plan/progress/blocker/closure workflow)
- \`proactive-self-improving-agent\` (capture reusable learnings)
- \`daily-learning-to-skill\` (optional placeholder for converting daily logs into skill updates)

## 5) ACP + Plugin Restriction Baseline
1. Enable ACP runtime only if needed.
2. Keep ACP/plugin scope minimal for beginners.
3. Do not enable broad plugin sets by default.

## 6) Verification (Required)
Run and verify:

\`\`\`bash
openclaw status
openclaw plugins list
openclaw skills list
\`\`\`

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
`,
  "setup-advanced": `# OpenClaw Setup Steps (Advanced Placeholder)

This file is a placeholder for advanced setup patterns.

## 1) Multi-Agent Architecture
- Agent role split (operator / coding / monitor)
- Context isolation strategy
- Session routing and escalation

## 2) Memory Engineering
- Multi-scope policy design
- Retrieval/rerank tuning methodology
- Memory lifecycle and governance

## 3) ACP at Scale
- Persistent ACP sessions
- Thread/session strategy by channel
- Safety gates for tool execution

## 4) Security Hardening
- Plugin trust model and allowlists
- Channel boundary controls
- Secret handling and audit path

## 5) Reliability & Ops
- Health checks and probes
- Backup/restore playbook
- Failure modes and rollback

## 6) Team Playbook
- Standard operating procedure template
- Change review checklist
- Incident response checklist

---
Status: Placeholder only. Expand section-by-section in future revisions.
`,
  "agent-blueprint": `# OpenClaw Agent Blueprint (Role / Agents / Tools)

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
- Use explicit \`plugins.allow\`
- Enable only required plugin IDs
- Keep non-essential plugins disabled by default

## 5) Skill Baseline
- skill-vetter
- proactive-agent
- proactive-self-improving-agent
- daily-learning-to-skill (optional)

## 6) Verification Baseline
- \`openclaw status\`
- \`openclaw plugins list\`
- \`openclaw skills list\`
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
`,
  "uhx-newbie": `# UHX-newbie-doc.md

## claw-newbie（普通用户最低标准）

> 目标：给第一次安装 OpenClaw 的用户一个可直接复用的通用基线（不含个性化设定）。

### A. 最低可运行要求
- OpenClaw 安装完成，\`openclaw status\` 正常
- Gateway 为 \`running\`
- 至少一个聊天通道可用（如 Telegram）

### B. 插件与限制（新手默认）
- 使用 \`plugins.allow\` 显式白名单（不要开放自动加载）
- 仅启用必要插件：
  - \`telegram\`
  - \`memory-lancedb-pro\`（或你选定的 memory 插件）
  - \`acpx\`（需要 ACP 才开启）
- 其余插件默认关闭，按需启用

### C. 记忆基线（推荐）
- memory 插件启用且已设为 \`plugins.slots.memory\`
- 开启：\`autoCapture\` / \`autoRecall\` / \`smartExtraction\`
- 完成一次“写入+召回”验证（必须）

### D. 建议通用技能（General）
- \`skill-vetter\`：安装/更新任何 skill 前先做安全审查
- \`proactive-agent\`：流程化执行（计划、进度、阻塞、收尾）
- \`proactive-self-improving-agent\`：把日常经验沉淀为规则
- \`daily-learning-to-skill\`（占位）：把每日日志筛选后转成 skill 改进

### E. 标准执行流程
1. 开工前：说明计划与风险
2. 进行中：分阶段汇报（避免长时间静默）
3. 有阻塞：立即说明原因与备选方案
4. 收尾：交付结果、验证方式、变更文件

### F. Context 水位提醒（跨模型通用）
- 70%：黄线提醒（建议收束）
- 85%：橙线提醒（建议分段/新线程）
- 95%：红线提醒（必须收尾或切换会话）

> 不同模型上下文大小不同，统一按“百分比水位”提醒，而不是写死 token 数。

### G. 验收清单
- [ ] 插件是“已启用”而非仅下载
- [ ] 配置已落盘到 \`openclaw.json\`
- [ ] 重启后服务仍正常
- [ ] 有真实调用证据（如 recall 命中）
- [ ] 有变更日志记录

---

## advance（占位）
- 多 Agent / 多 Scope 隔离
- ACP 线程化与长期会话策略
- 检索调优（rerank、阈值、去噪）
- 安全策略分层（本机 / VPS / 团队）
`,
};
