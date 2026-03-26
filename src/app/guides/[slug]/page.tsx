"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";
import { useState, useEffect, useMemo } from "react";
import { extractToc } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import BackToTop from "@/components/BackToTop";

export default function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  const guide = slug ? getGuideBySlug(slug) : null;
  const toc = useMemo(() => (guide ? extractToc(guide.content) : []), [guide]);

  const allGuides = getAllGuides();
  const currentIndex = allGuides.findIndex((g) => g.slug === slug);
  const prevGuide = currentIndex > 0 ? allGuides[currentIndex - 1] : null;
  const nextGuide =
    currentIndex < allGuides.length - 1 ? allGuides[currentIndex + 1] : null;

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

      <h1
        className="mb-2 text-3xl font-extrabold leading-tight"
        style={{ letterSpacing: "-0.03em" }}
      >
        {guide.meta.title}
      </h1>
      <p className="mb-8 text-muted">{guide.meta.description}</p>

      <div className="flex gap-8 flex-col lg:flex-row">
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
          <MarkdownRenderer content={guide.content} />
        </article>
      </div>

      <hr className="my-8 border-white/10" />
      <div className="flex justify-between gap-4 text-sm">
        {prevGuide ? (
          <Link
            href={`/guides/${prevGuide.slug}`}
            className="glass-card p-4 flex-1 transition hover:-translate-y-0.5"
          >
            <span className="text-xs text-muted">← Previous</span>
            <div className="font-semibold text-white mt-1">{prevGuide.title}</div>
          </Link>
        ) : (
          <div />
        )}
        {nextGuide ? (
          <Link
            href={`/guides/${nextGuide.slug}`}
            className="glass-card p-4 flex-1 text-right transition hover:-translate-y-0.5"
          >
            <span className="text-xs text-muted">Next →</span>
            <div className="font-semibold text-white mt-1">{nextGuide.title}</div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <BackToTop />
    </div>
  );
}
