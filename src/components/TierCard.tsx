"use client";

import { prompts } from "@/data/prompts";
import { PromptTier } from "@/types";
import { useState } from "react";
import {
  tierColorMap,
  tierBorderMap,
  tierBtnBgMap,
  tierIconMap,
  tierBulletColorMap,
  tierPreviewBgMap,
} from "@/config/theme";

interface TierCardProps {
  tier: PromptTier;
}

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
      className={`glass-card hover:border-blue-500/30 hover:translate-y-[-2px] transition-all duration-200 ${tierBorderMap[prompt.color]} flex flex-col p-6 animate-fade-in-up`}
      style={{
        animationDelay:
          tier === "beginner" ? "0s" : tier === "advance" ? "0.08s" : "0.16s",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-3xl">{tierIconMap[prompt.color]}</span>
        <h2
          className={`text-xl font-bold tracking-tight ${tierColorMap[prompt.color]}`}
          style={{ letterSpacing: "-0.03em" }}
        >
          {prompt.label}
        </h2>
      </div>
      <p className="mb-4 text-sm text-muted leading-relaxed">
        {prompt.description}
      </p>

      {prompt.bullets.length > 0 && (
        <ul className="mb-5 space-y-2 flex-1">
          {prompt.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className={`mt-0.5 text-xs ${tierBulletColorMap[prompt.color]}`}>
                ●
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => setShowPreview(!showPreview)}
        className="mb-3 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-muted transition-all hover:bg-white/[0.08] hover:text-white"
      >
        {showPreview ? "🔼 Hide Prompt" : "👁 Preview Prompt"}
      </button>

      {showPreview && (
        <div
          className={`mb-4 rounded-lg border ${tierPreviewBgMap[prompt.color]} bg-black/30 p-4`}
        >
          <pre
            className="whitespace-pre-wrap text-xs text-muted leading-relaxed"
            style={{ fontFamily: "inherit" }}
          >
            {prompt.text}
          </pre>
        </div>
      )}

      <button
        onClick={handleCopy}
        className={`w-full rounded-lg px-4 py-3 text-sm font-bold transition-all shadow-md ${
          copied
            ? "bg-green-500/30 text-green-300 shadow-green-500/20"
            : tierBtnBgMap[prompt.color]
        }`}
        style={{ transition: "all 0.2s ease" }}
      >
        {copied ? "✅ Copied!" : "📋 Copy Prompt"}
      </button>
      <p className="mt-2.5 text-center text-[11px] text-muted/60">
        Copy and paste into your OpenClaw chat
      </p>
    </article>
  );
}
