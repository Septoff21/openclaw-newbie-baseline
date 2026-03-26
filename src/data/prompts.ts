import { PromptData, PromptTier } from "@/types";

export const prompts: Record<PromptTier, PromptData> = {
  beginner: {
    label: "Quick Start",
    color: "accent",
    description: "Get running in 5 minutes with safe defaults and copy-ready prompts.",
    bullets: [
      "Audit plugins & enable safe core only",
      "One-click memory setup with auto-capture",
      "Install essential beginner skills",
    ],
    text: `You are my OpenClaw setup copilot.
Goal: beginner-safe baseline.
Do now:
1) Audit enabled plugins and keep only safe core
2) Enable one memory plugin with autoCapture+autoRecall+smartExtraction
3) Install general beginner skills
4) Return: verification commands + expected outputs
Always report: plan/progress/blocker/final summary.`,
  },
  advance: {
    label: "Power User",
    color: "accent-blue",
    description: "Add verification, context warnings, and workflow automation.",
    bullets: [
      "Context warning ladder (70/85/95%)",
      "Anti-hallucination verification checklist",
      "Role, agent & tool baseline docs",
    ],
    text: `You are my OpenClaw operations copilot.
Goal: improve reliability and trust.
Do now:
1) Add context warning ladder (70/85/95)
2) Add anti-hallucination verification checklist
3) Add role/agent/tool baseline doc
4) Add install-order and rollback docs
Return only actionable markdown + validation commands.`,
  },
  extreme: {
    label: "Expert Mode",
    color: "accent-pink",
    description: "Multi-agent routing, memory strategy, governance, and audit trails.",
    bullets: [
      "Multi-agent routing & isolation policy",
      "Memory scopes, lifecycle & governance",
      "Approval gates & incident response",
    ],
    text: `You are my OpenClaw architecture copilot.
Goal: autonomous but governed operation.
Do now:
1) Design multi-agent routing policy
2) Define memory scopes and lifecycle
3) Define approval gates for risky actions
4) Define incident response + audit trails
Return: architecture map + phased rollout checklist.`,
  },
};

export type { PromptTier };
