import { BlogPost } from "@/types";

export const mcpEcosystem: BlogPost = {
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
};
