import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

const difficultyMap: Record<string, { label: string; badge: string }> = {
  "setup-beginner": { label: "Beginner", badge: "badge-beginner" },
  "setup-advanced": { label: "Advanced", badge: "badge-advanced" },
  "agent-blueprint": { label: "Expert", badge: "badge-expert" },
  "uhx-newbie": { label: "Beginner", badge: "badge-beginner" },
};

const readTimeMap: Record<string, string> = {
  "setup-beginner": "~5 min",
  "setup-advanced": "~8 min",
  "agent-blueprint": "~6 min",
  "uhx-newbie": "~10 min",
};

const iconMap: Record<string, string> = {
  "setup-beginner": "🌱",
  "setup-advanced": "⚙️",
  "agent-blueprint": "🤖",
  "uhx-newbie": "📘",
};

export default function GuidesIndex() {
  const guides = getAllGuides();

  return (
    <div className="page-transition px-5 py-10">
      <h1 className="mb-2 text-3xl font-extrabold">Guides</h1>
      <p className="mb-8 text-muted">
        Setup steps, agent blueprints, and architecture docs for OpenClaw.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((guide, i) => {
          const diff = difficultyMap[guide.slug] || { label: "Guide", badge: "badge-beginner" };
          const readTime = readTimeMap[guide.slug] || "~5 min";
          const icon = iconMap[guide.slug] || "📄";

          return (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="glass-card block p-5 transition-all hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{icon}</span>
                <h2 className="text-lg font-bold text-white">{guide.title}</h2>
              </div>
              <p className="text-sm text-muted mb-3">{guide.description}</p>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${diff.badge}`}>
                  {diff.label}
                </span>
                <span className="text-xs text-muted">⏱ {readTime}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
