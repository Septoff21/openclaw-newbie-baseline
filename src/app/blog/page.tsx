import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

const categoryColors: Record<string, string> = {
  tutorial: "bg-emerald-500/20 text-emerald-300",
  tips: "bg-amber-500/20 text-amber-300",
  protocol: "bg-purple-500/20 text-purple-300",
  comparison: "bg-cyan-500/20 text-cyan-300",
  skills: "bg-pink-500/20 text-pink-300",
  security: "bg-red-500/20 text-red-300",
};

export default function BlogIndex() {
  return (
    <div className="page-transition px-5 py-10">
      <h1 className="mb-2 text-3xl font-extrabold" style={{ letterSpacing: '-0.03em' }}>Blog</h1>
      <p className="mb-8 text-muted">Tutorials, tips, and ecosystem deep-dives for OpenClaw.</p>

      <div className="mx-auto grid max-w-[1200px] gap-5">
        {blogPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-card block overflow-hidden blog-card-hover animate-fade-in-up"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Cover placeholder */}
              <div className="hidden sm:flex sm:h-auto sm:min-h-[140px] sm:w-48 sm:flex-shrink-0 items-center justify-center bg-gradient-to-br from-primary/20 to-accent-blue/10 text-4xl">
                {post.category === "tutorial" && "📖"}
                {post.category === "tips" && "💡"}
                {post.category === "protocol" && "🔌"}
                {post.category === "comparison" && "⚖️"}
                {post.category === "skills" && "🧩"}
                {post.category === "security" && "🔒"}
              </div>
              <div className="flex-1 p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span className={`rounded-full px-2.5 py-0.5 font-medium ${categoryColors[post.category] || "bg-primary/20 text-primary"}`}>
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>⏱ {post.readTime} read</span>
                </div>
                <h2 className="mb-1 text-lg font-bold text-white" style={{ letterSpacing: '-0.02em' }}>{post.title}</h2>
                <p className="text-sm text-muted">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
