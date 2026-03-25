import { guideMeta, guideContent, GuideMeta } from "./guides-data";

export type { GuideMeta };

export function getAllGuides(): GuideMeta[] {
  return Object.values(guideMeta);
}

export function getGuideBySlug(slug: string): { meta: GuideMeta; content: string } | null {
  const meta = guideMeta[slug];
  if (!meta) return null;

  const content = guideContent[slug];
  if (!content) return { meta, content: "# Guide not found\n\nThis guide is being migrated." };

  return { meta, content };
}
