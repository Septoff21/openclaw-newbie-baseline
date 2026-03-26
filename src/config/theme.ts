/** Theme configuration — edit colors and fonts to customize the look */
export const themeConfig = {
  colors: {
    bg: "#0A0A0A",
    fg: "#F0F0F0",
    muted: "#a0a8b0",
    primary: { DEFAULT: "#6a5cff", hover: "#7d72ff" },
    accent: "#46ffb3",
    accentBlue: "#00d4ff",
    accentPink: "#ff3d9a",
  },
  font: {
    family: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
  },
} as const;

/** Tailwind class maps used by tier cards */
export const tierColorMap: Record<string, string> = {
  accent: "text-accent",
  "accent-blue": "text-accent-blue",
  "accent-pink": "text-accent-pink",
};

export const tierBorderMap: Record<string, string> = {
  accent: "tier-beginner",
  "accent-blue": "tier-advance",
  "accent-pink": "tier-extreme",
};

export const tierBtnBgMap: Record<string, string> = {
  accent: "bg-emerald-500/20 hover:bg-emerald-500/30 text-accent",
  "accent-blue": "bg-cyan-500/20 hover:bg-cyan-500/30 text-accent-blue",
  "accent-pink": "bg-pink-500/20 hover:bg-pink-500/30 text-accent-pink",
};

export const tierIconMap: Record<string, string> = {
  accent: "🚀",
  "accent-blue": "⚡",
  "accent-pink": "🏆",
};

export const tierBulletColorMap: Record<string, string> = {
  accent: "text-accent/70",
  "accent-blue": "text-accent-blue/70",
  "accent-pink": "text-accent-pink/70",
};

export const tierPreviewBgMap: Record<string, string> = {
  accent: "border-emerald-500/20",
  "accent-blue": "border-cyan-500/20",
  "accent-pink": "border-pink-500/20",
};
