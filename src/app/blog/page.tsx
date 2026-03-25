import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export default function BlogIndex() {
  return (
    <div className="px-5 py-10">
      <h1 className="mb-2 text-3xl font-extrabold">Blog</h1>
      <p className="mb-8 text-muted">Tutorials, tips, and ecosystem deep-dives for OpenClaw.</p>

      <div className="grid gap-4">
        {blogPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-card block p-5 transition-all hover:-translate-y-0.5"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
              <span className="rounded-full bg-primary/20 px-2.5 py-0.5 font-medium text-primary">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} read</span>
            </div>
            <h2 className="mb-1 text-lg font-bold text-white">{post.title}</h2>
            <p className="text-sm text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
