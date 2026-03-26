"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect, useMemo } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  const lines = markdown.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/[*_`]/g, "");
      const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, "");
      items.push({ id, text, level });
    }
  }
  return items;
}

function CodeBlockWithCopy({ children, className }: { children: React.ReactNode; className?: string }) {
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
      <button
        onClick={handleCopy}
        className="code-copy-btn"
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const guide = slug ? getGuideBySlug(slug) : null;
  const toc = useMemo(() => (guide ? extractToc(guide.content) : []), [guide]);

  const allGuides = getAllGuides();
  const currentIndex = allGuides.findIndex((g) => g.slug === slug);
  const prevGuide = currentIndex > 0 ? allGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex < allGuides.length - 1 ? allGuides[currentIndex + 1] : null;

  if (slug && !guide) notFound();
  if (!guide) return null;

  return (
    <div className="page-transition px-5 py-10">
      <Link
        href="/guides"
        className="mb-6 inline-block text-sm text-sky-300 transition-colors hover:text-sky-200"
      >
        ← Back to Guides
      </Link>

      <h1 className="mb-2 text-3xl font-extrabold leading-tight" style={{ letterSpacing: '-0.03em' }}>{guide.meta.title}</h1>
      <p className="mb-8 text-muted">{guide.meta.description}</p>

      {/* Content with TOC */}
      <div className="flex gap-8 flex-col lg:flex-row">
        {/* TOC */}
        {toc.length > 0 && (
          <nav className="lg:w-56 flex-shrink-0 order-last lg:order-first">
            <div className="lg:sticky lg:top-20">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
                Table of Contents
              </h3>
              <div className="space-y-0.5">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`toc-link ${item.level === 3 ? "toc-h3" : ""}`}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}

        <article className="prose max-w-none flex-1 min-w-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...props }) {
                const isBlock = String(children).includes("\n");
                if (isBlock) {
                  return <CodeBlockWithCopy className={className}>{children}</CodeBlockWithCopy>;
                }
                return <code className={className} {...props}>{children}</code>;
              },
              h2({ children }) {
                const text = String(children).replace(/[*_`]/g, "");
                const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, "");
                return <h2 id={id}>{children}</h2>;
              },
              h3({ children }) {
                const text = String(children).replace(/[*_`]/g, "");
                const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, "");
                return <h3 id={id}>{children}</h3>;
              },
            }}
          >
            {guide.content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Prev/Next navigation */}
      <hr className="my-8 border-white/10" />
      <div className="flex justify-between gap-4 text-sm">
        {prevGuide ? (
          <Link href={`/guides/${prevGuide.slug}`} className="glass-card p-4 flex-1 transition hover:-translate-y-0.5">
            <span className="text-xs text-muted">← Previous</span>
            <div className="font-semibold text-white mt-1">{prevGuide.title}</div>
          </Link>
        ) : <div />}
        {nextGuide ? (
          <Link href={`/guides/${nextGuide.slug}`} className="glass-card p-4 flex-1 text-right transition hover:-translate-y-0.5">
            <span className="text-xs text-muted">Next →</span>
            <div className="font-semibold text-white mt-1">{nextGuide.title}</div>
          </Link>
        ) : <div />}
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl text-white shadow-lg transition-all hover:bg-primary/20 hover:border-primary/30 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}
