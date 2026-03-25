"use client";

import { useState } from "react";

interface CopyPromptProps {
  text: string;
  label?: string;
}

export default function CopyPrompt({ text, label = "Copy" }: CopyPromptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-lg border border-white/5 bg-black/35 p-4 text-sm leading-relaxed">
        <code>{text}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded-md bg-primary/20 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-primary/30"
      >
        {copied ? "✓ Copied!" : label}
      </button>
    </div>
  );
}
