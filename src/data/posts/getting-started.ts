import { BlogPost } from "@/types";

export const gettingStarted: BlogPost = {
  slug: "getting-started",
  title: "Getting Started with OpenClaw — 5 分钟上手",
  date: "2026-03-24",
  category: "tutorial",
  readTime: "3 min",
  excerpt: "从零开始，在 5 分钟内运行第一个 OpenClaw agent。",
  content: `Welcome! This guide gets you from zero to running your first OpenClaw agent in under 5 minutes.

## Step 1: Prerequisites

- Node.js 20+ installed
- A terminal (Terminal, iTerm, or VS Code terminal)

## Step 2: Install

\`\`\`bash
npm install -g openclaw
openclaw init
openclaw configure
\`\`\`

> **💡 Tip:** During \`openclaw configure\`, select your preferred model. Free models work great for learning!

## Step 3: Run Your First Task

\`\`\`bash
openclaw run "Say hello and tell me a joke"
\`\`\`

That's it! Your agent will respond with a greeting and a joke. You've just run your first AI agent task.

## Step 4: Next Steps

- Check out the **Guides** section for deeper setup
- Browse the **Blog** for tips and ecosystem info
- Try the copy-ready prompts on the homepage`,
};
