"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { useState, useEffect, useMemo } from "react";
import { extractToc } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import CodeBlockWithCopy from "@/components/CodeBlockWithCopy";
import ShareButtons from "@/components/ShareButtons";
import BackToTop from "@/components/BackToTop";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  const post = blogPosts.find((p) => p.slug === slug);
  const toc = useMemo(() => (post ? extractToc(post.content) : []), [post]);

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (slug && !post) notFound();
  if (!post) return null;

  return (
    <div className="page-transition px-5 py-10">
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm text-sky-300 transition-colors hover:text-sky-200"
      >
        ← Back to Blog
      </Link>

      <div className="mb-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-primary/20 px-2.5 py-0.5 font-medium text-primary">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>⏱ {post.readTime} read</span>
        </div>
        <h1
          className="text-3xl font-extrabold leading-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          {post.title}
        </h1>
        <div className="mt-4">
          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </div>

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
          <MarkdownRenderer content={post.content} />
        </article>
      </div>

      <div className="mt-8 flex justify-center">
        <ShareButtons title={post.title} slug={post.slug} />
      </div>

      <hr className="my-8 border-white/10" />
      <div className="flex justify-between gap-4 text-sm">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="glass-card p-4 flex-1 transition hover:-translate-y-0.5"
          >
            <span className="text-xs text-muted">← Previous</span>
            <div className="font-semibold text-white mt-1">{prevPost.title}</div>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="glass-card p-4 flex-1 text-right transition hover:-translate-y-0.5"
          >
            <span className="text-xs text-muted">Next →</span>
            <div className="font-semibold text-white mt-1">{nextPost.title}</div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <BackToTop />
    </div>
  );
}
