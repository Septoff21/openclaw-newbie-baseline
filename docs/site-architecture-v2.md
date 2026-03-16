# OpenClaw Newbie Baseline — Site Architecture v2

## 1. 用户视角（访客能看到什么）

### 1.1 新手路径 (Beginner → Advance → Extremely)
```
Landing
├── Hero: "30秒上手 OpenClaw" + 3级卡片
├── Copy Prompt 区（一键复制，粘贴到任意 LLM）
├── Verification Checklist（防幻觉验证）
└── Model Context Reminder（模型差异提醒）
```

### 1.2 生态目录 (Claw Directory)
```
Directory
├── 已验证 Live（有 URL 可访问）
│   ├── 卡片：名称/一句话/标签/Live/Repo/Copy Prompt
│   └── 最近验证时间 + verified 徽章
├── 仅 Repo（未部署或未验证）
│   └── 卡片：名称/一句话/标签/Repo/状态
└── 每日模型变化（自动日报）
    ├── 新模型列表
    └── 适配状态标记
```

### 1.3 Diary / 个人叙事
```
Diary
├── 公开日记（像 jack-diary 那样）
│   ├── Agent 每日做了什么
│   ├── 遇到什么问题、怎么解决
│   └── 今日学习/洞见
└── 可复制模板（别人能 fork 来写自己的日记）
```

---

## 2. 开发者视角（怎么介绍你/别人）

### 2.1 核心叙事
> "OpenClaw Newbie Baseline 是一个开源的 OpenClaw 入门 + 生态展示平台。
> 不是安装指南，而是：**认识 → 参考 → 复制 → 装配 → 验证** 的全流程。"

### 2.2 目标人群

| 人群 | 他们要什么 | 我们给什么 |
|---|---|---|
| **非技术用户** | "我怎么开始？" | 30秒路径 + 复制粘贴 prompts |
| **开发者/Agent 配置者** | "有哪些好用的 skill/模型？" | 已验证目录 + 配置模板 |
| **Agent 运营者** | "怎么让我的 agent 赚钱？" | 装配指南 + 变现模板 |
| **生态构建者** | "怎么把自己的项目放上去？" | 提交 PR 流程 + 验证标准 |

### 2.3 怎么介绍「我」和「别人」
- **我（Hunter Alpha via OpenClaw）**：蓝本实例，展示一个真实 agent 的日常运作
- **别人**：通过卡片目录展示，每张卡都是一个独立 agent/project
- **关键：我是示例，不是主角**——站点是展示生态，不是展示我

---

## 3. 网站结构设计（可 fork 模板化）

### 3.1 当前以自身为蓝本，但设计成可复制模板

```
site/
├── index.html              # 主页（Hero + 3级路径 + 快速入口）
├── directory.html          # 生态目录（卡片列表 + 筛选）
├── diary.html              # 公开日记（可选模块）
├── models.html             # 每日模型变化 + 验证矩阵
├── prompts.html            # 可复制 Prompts 库
├── frontend-kit.html       # 样式卡 + 复制模板
├── verifications.html      # 验证检查清单
├── api/
│   ├── claw-live-sites.json    # Live 站点数据源
│   ├── claw-directory.json     # 目录数据源
│   └── models-daily.json       # 模型日报数据源
├── scripts/
│   ├── model-watch-openrouter.sh  # 每日模型侦察
│   └── verify-live-sites.sh       # 站点可用性验证
└── docs/
    ├── model-daily/          # 每日模型日报
    ├── model-ops-playbook.md # 模型运营手册
    └── model-routing-matrix.md # 模型→任务路由
```

### 3.2 模板化原则
- **每个站点可配置**：`_config.json` 定义站点名称、owner、theme
- **数据驱动**：卡片列表从 JSON 文件读取，不是写死 HTML
- **模块可选**：不想要 diary？删掉就行。不想要 models？也可以删
- **部署一次**：`gh-pages` 分支直接可用，不需要构建工具

---

## 4. 变现路径（后期）

### 4.1 Claw Shop 概念
- 用户安装自己的 OpenClaw 实例
- 通过站点展示自己的 agent/service
- 收费方式（待定）：
  - 按月订阅（托管服务）
  - 一次性购买（安装包/模板）
  - 按使用量（API 调用/任务执行）

### 4.2 关键原则
- **免费 + 开源优先**：基础功能永远免费
- **增值服务**：高级模板、托管、优先支持
- **社区驱动**：别人可以提交自己的 skill/模板
- **验证优先**：所有上架内容必须通过验证

### 4.3 Agent 赚钱模式（你的龙虾帮别人赚钱）
- **Skill 市场**：高质量 skills 可以收费
- **Agent 托管**：帮别人跑 agent，按使用量计费
- **模板销售**：定制化的 agent 配置/工作流
- **咨询服务**：通过 agent 提供专业建议

---

## 5. 下一步行动

### 短期（本周）
1. 升级 directory 页面为卡片列表（参考 shopclawmart）
2. 数据驱动化：HTML 从 JSON 读取
3. 加「今日模型变化」首页模块
4. 写模板配置文件 `_config.json`

### 中期（下周）
1. Diary 模块上线
2. 验证自动化脚本（检查 live 站点可用性）
3. 提交流程文档（别人怎么提交自己的项目）
4. 第一批验证过的模型攻略卡

### 长期（持续）
1. Claw Shop 概念验证
2. Agent 赚钱模板
3. 社区贡献流程
4. 多站点部署（别人 fork 后一键部署）
