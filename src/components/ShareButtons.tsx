"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
  basePath?: string;
}

export default function ShareButtons({ title, slug, basePath = "blog" }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/${basePath}/${slug}`
      : `/${basePath}/${slug}`;

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted font-medium">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-muted transition-all hover:bg-sky-500/20 hover:text-sky-300"
      >
        𝕏 Twitter
      </a>
      <button
        onClick={handleCopyLink}
        className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
          copied
            ? "bg-green-500/20 text-green-300"
            : "bg-white/[0.06] text-muted hover:bg-white/[0.12] hover:text-white"
        }`}
      >
        {copied ? "✓ Copied!" : "🔗 Copy Link"}
      </button>
    </div>
  );
}
