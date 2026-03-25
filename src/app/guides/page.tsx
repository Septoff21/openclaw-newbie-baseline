import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

export default function GuidesIndex() {
  const guides = getAllGuides();

  return (
    <div className="px-5 py-10">
      <h1 className="mb-2 text-3xl font-extrabold">Guides</h1>
      <p className="mb-8 text-muted">
        Setup steps, agent blueprints, and architecture docs for OpenClaw.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((guide, i) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="glass-card block p-5 transition-all hover:-translate-y-0.5"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <h2 className="mb-2 text-lg font-bold text-white">{guide.title}</h2>
            <p className="text-sm text-muted">{guide.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
