"use client";

import { useState } from "react";

export default function CodeBlockWithCopy({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const code = typeof children === "string" ? children : "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group">
      <pre className={className}>
        <code>{children}</code>
      </pre>
      <button onClick={handleCopy} className="code-copy-btn">
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
}
