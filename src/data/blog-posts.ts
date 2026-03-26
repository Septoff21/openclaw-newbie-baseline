import { BlogPost } from "@/types";
import { gettingStarted } from "./posts/getting-started";
import { promptTips } from "./posts/prompt-tips";
import { mcpEcosystem } from "./posts/mcp-ecosystem";
import { modelsGuide } from "./posts/models-guide";
import { clawhubGuide } from "./posts/clawhub-guide";
import { aiAgentSecurity } from "./posts/ai-agent-security";

export const blogPosts: BlogPost[] = [
  gettingStarted,
  promptTips,
  mcpEcosystem,
  modelsGuide,
  clawhubGuide,
  aiAgentSecurity,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export type { BlogPost };
