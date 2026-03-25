export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
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
  },
  {
    slug: "prompt-tips",
    title: "10 Prompt Tips Every Beginner Should Know",
    date: "2026-03-24",
    category: "tips",
    readTime: "4 min",
    excerpt: "用好 AI 的关键在于你怎么问。10 条实用提示词技巧。",
    content: `Getting good results from AI is all about how you ask. Here are 10 proven tips.

## 1. Be Specific
❌ "Write something about dogs"
✅ "Write a 200-word fun fact about Golden Retrievers for a pet blog"

## 2. Give Context
❌ "Fix my code"
✅ "This Python function returns None instead of a list. Here's the code: [paste]"

## 3. Use Examples
> **💡 Few-shot prompting:** Show 1-2 examples of what you want before asking for more.

## 4. Set the Format
Always tell the AI how you want the output: list, table, bullet points, JSON, etc.

## 5. Ask for Reasoning
"Explain your reasoning step by step" gives better results than just asking for the answer.

## 6. Iterate
Don't expect perfection on the first try. Refine your prompt based on the output.

## 7. Use Constraints
"In 3 sentences" or "for a 5-year-old" helps narrow the scope.

## 8. Role Play
"You are a senior Python developer" changes the AI's perspective and tone.

## 9. Chain Tasks
Break complex tasks into smaller steps. "First outline, then write" beats "write a perfect essay."

## 10. Copy from the Pros
Check out the copy-ready prompts on the homepage — all prompts are free to copy and customize!`,
  },
  {
    slug: "mcp-ecosystem",
    title: "MCP：AI Agent 的 USB 接口",
    date: "2026-03-24",
    category: "protocol",
    readTime: "10 min",
    excerpt: "深入解析 Model Context Protocol——让 AI Agent 像插 USB 一样连接万物的开放协议。",
    content: `**Model Context Protocol（MCP）** 是 Anthropic 于 2024 年底提出的开放协议，它定义了一套标准接口，让 AI 模型（或 Agent）能够以统一方式连接各种数据源、工具和服务。

用一个类比：**MCP 之于 AI Agent，就像 USB 之于电脑**——你不需要为每个外设写专属驱动，插上就能用。

## 为什么需要 MCP？

在 MCP 出现之前，每个 AI 应用接入外部工具的方式都是"各搞各的"：

- **ChatGPT 的插件系统**：OpenAI 私有协议
- **LangChain 的 Tool**：Python 绑定
- **各家自研 Function Calling**：格式不同

这就像 90 年代的电脑接口——串口、并口、PS/2、SCSI，每个设备一个标准。

### 从 N×M 到 N+M

没有 MCP 时，N 个 AI 应用和 M 个工具需要 N×M 个适配器。有了 MCP，只需要 N+M 个实现。**复杂度从二次降到线性**。

## MCP 架构详解

MCP 采用经典的**客户端-服务器**架构：

\`\`\`
┌─────────────┐     JSON-RPC 2.0     ┌─────────────┐
│  MCP Client  │ ◄──────────────────► │  MCP Server  │
│ （AI Agent）  │    stdio / SSE /    │ （工具提供方） │
└─────────────┘    HTTP Stream       └─────────────┘
\`\`\`

### 三大能力支柱

1. **Tools（工具）**：可被 AI 调用的函数
2. **Resources（资源）**：结构化数据供 AI 读取
3. **Prompts（提示模板）**：预定义的高质量 prompt

### 传输层

| 传输方式 | 适用场景 | 特点 |
|---------|---------|------|
| stdio | 本地进程 | 最简单，进程间通信 |
| SSE | 远程服务 | HTTP 长连接 |
| HTTP Streamable | 生产环境 | 最灵活 |

## OpenClaw 与 MCP

OpenClaw 原生支持 MCP：

\`\`\`bash
# 添加 MCP 服务器
openclaw mcp add filesystem

# 查看已连接的 MCP 服务器
openclaw mcp list
\`\`\``,
  },
  {
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
  },
  {
    slug: "clawhub-guide",
    title: "ClawHub：你的第一个 AI Agent 技能市场",
    date: "2026-03-24",
    category: "skills",
    readTime: "8 min",
    excerpt: "ClawHub 是 AI Agent 的技能包管理器——搜索、安装、发布 Agent 技能。",
    content: `## AI Agent 缺的不是大脑，是技能

大语言模型已经足够聪明——它能理解意图、推理问题、生成代码。但当你要它"帮我查一下邮件""把这个 PR review 一下"时，光有大脑不够，它还需要**手和脚**。

这些"手和脚"就是 **Agent 技能（Skills）**——预打包的能力模块。

**ClawHub 就是答案。**

## ClawHub 是什么？

一句话定义：**ClawHub 是 AI Agent 的 npm。**

\`\`\`bash
# 搜索技能
clawhub search "github"

# 安装技能
clawhub install github

# 更新所有技能
clawhub update --all

# 发布你自己的技能
clawhub publish ./my-skill
\`\`\`

## 为什么需要 ClawHub？

### 问题一：手动挡时代
给 AI Agent 添加能力需要：手动搜索 GitHub、克隆仓库、复制文件、修改配置……

### 问题二：能力孤岛
- **LangChain Tools**：Python 生态，绑死 LangChain
- **AutoGen Plugins**：微软体系
- **Dify Tools**：SaaS 平台，私有格式
- **OpenAI GPTs**：完全封闭

### ClawHub 的解决方案
1. **标准化**：技能遵循统一的 SKILL.md 规范
2. **集中化**：一个市场，搜索即所得
3. **质量门控**：发布前的安全审查

## 核心概念

### Skill（技能）

\`\`\`
my-skill/
├── SKILL.md          # 技能定义文件（必选）
├── scripts/          # 辅助脚本（可选）
└── references/       # 参考资料（可选）
\`\`\`

### SKILL.md 示例

\`\`\`yaml
---
name: github
description: GitHub operations via gh CLI
version: 1.0.0
---
# GitHub Skill
Your skill instructions here...
\`\`\`

## 常用技能推荐

- **skill-vetter**：安装前安全审查
- **proactive-agent**：流程化执行
- **healthcheck**：系统安全审计
- **weather**：天气查询`,
  },
  {
    slug: "ai-agent-security-101",
    title: "AI Agent 安全入门：从零理解智能体安全框架",
    date: "2026-03-24",
    category: "security",
    readTime: "10 min",
    excerpt: "当你的 AI Agent 开始替你行动时，安全就成了现实问题。",
    content: `当你的 AI Agent 开始替你发邮件、管理文件、甚至操作银行账户时，"安全"就不再是一个抽象概念——它变成了你每天都要面对的现实问题。

## 为什么 Agent 安全如此重要？

传统的 AI 模型只是"回答问题"。但 AI Agent 不同——它能**行动**。它可以调用工具、读写文件、发送消息、操作浏览器。

## 核心安全挑战

### 1. 提示注入攻击（Prompt Injection）

这是 AI Agent 面临的最独特的安全威胁。

- **直接注入：**用户直接在对话中输入恶意提示
- **间接注入：**攻击者将恶意指令藏在 Agent 会读取的外部内容中

### 2. 权限边界与最小权限原则

- **按需授权：**Agent 只在执行特定任务时获得特定权限
- **敏感操作二次确认：**发送邮件、删除文件等必须经过用户确认
- **分级权限：**不同 Agent 角色拥有不同的权限等级
- **审计日志：**所有操作都应该被记录

### 3. 数据泄露与隐私保护

Agent 通常需要访问大量用户数据才能有效工作。敏感数据应在存储前进行脱敏处理，实施严格的会话隔离。

### 4. 工具调用的安全性

每个工具调用都是一个潜在的攻击面。需要对所有工具参数进行严格验证，实施工具调用白名单。

## OpenClaw 的安全设计哲学

- **默认安全：**新安装的 OpenClaw 默认处于高安全模式
- **渐进式信任：**权限随信任逐步开放
- **审计透明：**所有操作都有完整的审计日志
- **隔离优先：**不同数据在独立的隔离环境中运行

## 给用户的建议

1. 了解你的 Agent 的能力边界
2. 审查权限授予
3. 定期检查审计日志
4. 保持更新
5. 敏感操作使用人工确认`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
