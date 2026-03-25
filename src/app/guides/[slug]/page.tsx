import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <article className="px-5 py-10">
      <Link
        href="/guides"
        className="mb-6 inline-block text-sm text-sky-300 transition-colors hover:text-sky-200"
      >
        ← Back to Guides
      </Link>

      <h1 className="mb-2 text-3xl font-extrabold leading-tight">{guide.meta.title}</h1>
      <p className="mb-8 text-muted">{guide.meta.description}</p>

      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{guide.content}</ReactMarkdown>
      </div>

      <hr className="my-8 border-white/10" />
      <div className="flex justify-between text-sm">
        <Link href="/guides" className="text-sky-300 hover:text-sky-200">
          ← All Guides
        </Link>
        <Link href="/" className="text-sky-300 hover:text-sky-200">
          Home →
        </Link>
      </div>
    </article>
  );
}
