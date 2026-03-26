"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMemo, useState, useEffect } from "react";

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
        style={{ opacity: undefined }}
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  const post = blogPosts.find((p) => p.slug === slug);
  const toc = useMemo(() => (post ? extractToc(post.content) : []), [post]);

  // Find prev/next posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

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
        <h1 className="text-3xl font-extrabold leading-tight">{post.title}</h1>
      </div>

      {/* Content with TOC sidebar */}
      <div className="flex gap-8 flex-col lg:flex-row">
        {/* TOC */}
        {toc.length > 0 && (
          <nav className="lg:w-56 flex-shrink-0 order-last lg:order-first">
            <div className="lg:sticky lg:top-20">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
                目录
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

        {/* Article content */}
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
            {post.content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Prev/Next navigation */}
      <hr className="my-8 border-white/10" />
      <div className="flex justify-between gap-4 text-sm">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="glass-card p-4 flex-1 transition hover:-translate-y-0.5">
            <span className="text-xs text-muted">← 上一篇</span>
            <div className="font-semibold text-white mt-1">{prevPost.title}</div>
          </Link>
        ) : <div />}
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="glass-card p-4 flex-1 text-right transition hover:-translate-y-0.5">
            <span className="text-xs text-muted">下一篇 →</span>
            <div className="font-semibold text-white mt-1">{nextPost.title}</div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
