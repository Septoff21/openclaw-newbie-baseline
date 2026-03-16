# Model Ops Playbook (Daily)

## Goal
每天发现新模型、验证可用性，并把模型映射到任务配置与攻略。

## Daily Pipeline
1. 拉取模型清单（OpenRouter）
2. 与前一快照对比（新增/下线/关键参数变动）
3. 对候选模型做验证（最少 3 类任务）
4. 更新“模型→任务配置”矩阵
5. 写当日攻略（仅记录验证过的结论）

## Validation Buckets
- **A. 速答型**：短提示、低成本、快速响应
- **B. 工具型**：工具调用稳定性/格式合规
- **C. 长上下文型**：摘要、规划、跨段引用一致性
- **D. 高推理型**：多步问题、约束保持

## Per-model Config Template
- model_id:
- context_window:
- price (prompt/completion):
- supports tools:
- recommended task type:
- prompt style notes:
- failure pattern:
- confidence level: low / medium / high
- last verified at:

## Public signal sources (for “community feeling”)
- OpenRouter model page activity/usage sections
- GitHub issues / discussions (framework adapters)
- Reddit / X / Hacker News qualitative reports（仅作参考，不可直接当结论）

## Rule
没有验证就不写“推荐”，只能写“待验证”。
