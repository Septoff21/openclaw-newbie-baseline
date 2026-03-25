import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="px-5 py-10">
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
          <span>{post.readTime} read</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight">{post.title}</h1>
      </div>

      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      <hr className="my-8 border-white/10" />
      <div className="flex justify-between text-sm">
        <Link href="/blog" className="text-sky-300 hover:text-sky-200">
          ← All Posts
        </Link>
        <Link href="/" className="text-sky-300 hover:text-sky-200">
          Home →
        </Link>
      </div>
    </article>
  );
}
