import { BlogPost } from "@/types";

export const modelsGuide: BlogPost = {
  slug: "models-guide",
  title: "Which Model Should You Use? — 模型选择指南",
  date: "2026-03-24",
  category: "comparison",
  readTime: "3 min",
  excerpt: "模型这么多，选哪个？实用指南帮你理清思路。",
  content: `With so many models available, picking the right one can be confusing. Here's a practical breakdown.

## Free Models

Perfect for learning, testing, and everyday tasks.

| Model | Best For | 速度 |
|-------|----------|------|
| DeepSeek V3 | General tasks, coding | ⚡ 快 |
| Llama 3.3 70B | Complex reasoning | 中等 |
| Gemini 2.0 Flash | Fast responses, multimodal | ⚡⚡ 极快 |

> **💡 Start here:** If you're new, just use DeepSeek V3. It's free, fast, and handles most tasks well.

## Paid Models

For production work or when you need the best quality.

| Model | Best For | Cost |
|-------|----------|------|
| Claude 3.5 Sonnet | Writing, analysis | $$ |
| GPT-4o | General purpose | $$ |
| Claude 3 Opus | Complex reasoning | $$$ |

## Quick Decision Guide

- **Learning:** DeepSeek V3 (free)
- **Coding:** DeepSeek V3 or Claude 3.5 Sonnet
- **Writing:** Claude 3.5 Sonnet
- **Speed:** Gemini 2.0 Flash
- **Production:** GPT-4o or Claude 3.5 Sonnet`,
};
