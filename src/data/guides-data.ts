import { GuideMeta } from "@/types";
import { setupBeginner } from "./guides/setup-beginner";
import { setupAdvanced } from "./guides/setup-advanced";
import { agentBlueprint } from "./guides/agent-blueprint";
import { uhxNewbie } from "./guides/uhx-newbie";

const allGuides = [setupBeginner, setupAdvanced, agentBlueprint, uhxNewbie];

export const guideMeta: Record<string, GuideMeta> = Object.fromEntries(
  allGuides.map((g) => [g.meta.slug, g.meta])
);

export const guideContent: Record<string, string> = Object.fromEntries(
  allGuides.map((g) => [g.meta.slug, g.content])
);
