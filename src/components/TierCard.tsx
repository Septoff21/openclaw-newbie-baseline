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
  accent: "🚀",
  "accent-blue": "⚡",
  "accent-pink": "🏆",
};

const bulletColorMap: Record<string, string> = {
  accent: "text-accent/70",
  "accent-blue": "text-accent-blue/70",
  "accent-pink": "text-accent-pink/70",
};

const previewBgMap: Record<string, string> = {
  accent: "border-emerald-500/20",
  "accent-blue": "border-cyan-500/20",
  "accent-pink": "border-pink-500/20",
};

export default function TierCard({ tier }: TierCardProps) {
  const prompt = prompts[tier];
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      className={`glass-card hover:border-blue-500/30 hover:translate-y-[-2px] transition-all duration-200 ${borderMap[prompt.color]} flex flex-col p-6 animate-fade-in-up`}
      style={{ animationDelay: tier === "beginner" ? "0s" : tier === "advance" ? "0.08s" : "0.16s" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-3xl">{iconMap[prompt.color]}</span>
        <h2 className={`text-xl font-bold tracking-tight ${colorMap[prompt.color]}`} style={{ letterSpacing: '-0.03em' }}>{prompt.label}</h2>
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

      {/* Preview toggle */}
      <button
        onClick={() => setShowPreview(!showPreview)}
        className="mb-3 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-muted transition-all hover:bg-white/[0.08] hover:text-white"
      >
        {showPreview ? "🔼 Hide Prompt" : "👁 Preview Prompt"}
      </button>

      {/* Prompt preview */}
      {showPreview && (
        <div className={`mb-4 rounded-lg border ${previewBgMap[prompt.color]} bg-black/30 p-4`}>
          <pre className="whitespace-pre-wrap text-xs text-muted leading-relaxed" style={{ fontFamily: 'inherit' }}>
            {prompt.text}
          </pre>
        </div>
      )}

      <button
        onClick={handleCopy}
        className={`w-full rounded-lg px-4 py-3 text-sm font-bold transition-all shadow-md ${
          copied
            ? "bg-green-500/30 text-green-300 shadow-green-500/20"
            : btnBgMap[prompt.color]
        }`}
        style={{ transition: 'all 0.2s ease' }}
      >
        {copied ? "✅ Copied!" : "📋 Copy Prompt"}
      </button>
      <p className="mt-2.5 text-center text-[11px] text-muted/60">
        Copy and paste into your OpenClaw chat
      </p>
    </article>
  );
}
