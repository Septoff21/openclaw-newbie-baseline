import { BlogPost } from "@/types";

export const clawhubGuide: BlogPost = {
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
};
