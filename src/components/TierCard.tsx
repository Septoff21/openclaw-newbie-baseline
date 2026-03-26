"use client";

import { prompts, PromptTier } from "@/data/prompts";
import { useState } from "react";

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
  accent: "⚡",
  "accent-blue": "🔧",
  "accent-pink": "🏗️",
};

const bulletColorMap: Record<string, string> = {
  accent: "text-accent/70",
  "accent-blue": "text-accent-blue/70",
  "accent-pink": "text-accent-pink/70",
};

export default function TierCard({ tier }: TierCardProps) {
  const prompt = prompts[tier];
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      className={`glass-card ${borderMap[prompt.color]} flex flex-col p-6 animate-fade-in-up`}
      style={{ animationDelay: tier === "beginner" ? "0s" : tier === "advance" ? "0.08s" : "0.16s" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{iconMap[prompt.color]}</span>
        <h2 className={`text-xl font-bold tracking-tight ${colorMap[prompt.color]}`}>{prompt.label}</h2>
      </div>
      <p className="mb-4 text-sm text-muted leading-relaxed">{prompt.description}</p>

      {/* Bullet points */}
      {"bullets" in prompt && Array.isArray((prompt as any).bullets) && (
        <ul className="mb-5 space-y-2 flex-1">
          {(prompt as any).bullets.map((bullet: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className={`mt-0.5 text-xs ${bulletColorMap[prompt.color]}`}>●</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleCopy}
        className={`w-full rounded-lg px-4 py-3 text-sm font-bold transition-all shadow-md ${
          copied
            ? "bg-green-500/30 text-green-300 shadow-green-500/20"
            : btnBgMap[prompt.color]
        }`}
      >
        {copied ? "✓ Copied!" : "📋 Copy prompt"}
      </button>
      <p className="mt-2.5 text-center text-[11px] text-muted/60">
        Copy this prompt and paste into your OpenClaw chat
      </p>
    </article>
  );
}
