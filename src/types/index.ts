/** Shared type definitions */

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface NavItem {
  href: string;
  label: string;
  icon: string;
}

export interface CommunityLink {
  name: string;
  url: string;
  description: string;
  icon: string;
  tags: string[];
}

export type PromptTier = "beginner" | "advance" | "extreme";

export interface PromptData {
  label: string;
  color: string;
  description: string;
  bullets: readonly string[];
  text: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
  code: string;
}
