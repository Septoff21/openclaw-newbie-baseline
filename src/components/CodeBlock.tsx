"use client";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="relative">
      {language && (
        <div className="rounded-t-lg border border-b-0 border-white/5 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted">
          {language}
        </div>
      )}
      <pre
        className={`overflow-x-auto border border-white/5 bg-black/35 p-4 text-sm leading-relaxed ${
          language ? "rounded-b-lg" : "rounded-lg"
        }`}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
