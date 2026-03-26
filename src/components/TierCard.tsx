"use client";

import { prompts, PromptTier } from "@/data/prompts";

interface TierCardProps {
  tier: PromptTier;
}

const colorMap: Record<string, string> = {
  accent: "text-accent",
  "accent-blue": "text-accent-blue",
  "accent-pink": "text-accent-pink",
};

const borderMap: Record<string, string> = {
  accent: "tier-beginner",
  "accent-blue": "tier-advance",
  "accent-pink": "tier-extreme",
};

const btnBgMap: Record<string, string> = {
  accent: "bg-emerald-500/20 hover:bg-emerald-500/30 text-accent",
  "accent-blue": "bg-cyan-500/20 hover:bg-cyan-500/30 text-accent-blue",
  "accent-pink": "bg-pink-500/20 hover:bg-pink-500/30 text-accent-pink",
};

const iconMap: Record<string, string> = {
  accent: "🌱",
  "accent-blue": "⚙️",
  "accent-pink": "🚀",
};

export default function TierCard({ tier }: TierCardProps) {
  const prompt = prompts[tier];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.text);
    const btn = document.getElementById(`copy-btn-${tier}`);
    if (btn) {
      btn.textContent = "✓ Copied!";
      setTimeout(() => {
        btn.textContent = "Copy prompt";
      }, 1500);
    }
  };

  return (
    <article
      className={`glass-card ${borderMap[prompt.color]} flex flex-col p-5 animate-fade-in-up`}
      style={{ animationDelay: tier === "beginner" ? "0s" : tier === "advance" ? "0.08s" : "0.16s" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{iconMap[prompt.color]}</span>
        <h2 className={`text-xl font-bold ${colorMap[prompt.color]}`}>{prompt.label}</h2>
      </div>
      <p className="mb-4 flex-1 text-sm text-muted">{prompt.description}</p>
      <button
        id={`copy-btn-${tier}`}
        onClick={handleCopy}
        className={`w-full rounded-lg px-4 py-3 text-sm font-bold transition-all shadow-md ${btnBgMap[prompt.color]}`}
      >
        📋 Copy prompt
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        复制后粘贴到 OpenClaw 即可执行
      </p>
    </article>
  );
}
