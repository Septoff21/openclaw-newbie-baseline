import { BlogPost } from "@/types";

export const promptTips: BlogPost = {
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
};
