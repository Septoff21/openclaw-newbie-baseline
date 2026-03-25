export const prompts = {
  beginner: {
    label: "Beginner",
    color: "accent",
    description: "Quick start with copy-ready prompts and safe defaults.",
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
    label: "Advance",
    color: "accent-blue",
    description: "Add verification, context warnings, and workflow automation.",
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
    label: "Extremely",
    color: "accent-pink",
    description: "Multi-agent, routing, memory strategy, and governance.",
    text: `You are my OpenClaw architecture copilot.
Goal: autonomous but governed operation.
Do now:
1) Design multi-agent routing policy
2) Define memory scopes and lifecycle
3) Define approval gates for risky actions
4) Define incident response + audit trails
Return: architecture map + phased rollout checklist.`,
  },
} as const;

export type PromptTier = keyof typeof prompts;
