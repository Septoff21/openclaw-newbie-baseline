import Link from "next/link";

const communitySites = [
  {
    name: "OpenClaw Official",
    url: "https://openclaw.ai",
    description: "Official OpenClaw website and documentation",
    tags: ["official", "docs"],
  },
  {
    name: "ClawHub",
    url: "https://clawhub.com",
    description: "AI Agent skill marketplace — search, install, publish",
    tags: ["marketplace", "skills"],
  },
  {
    name: "OpenClaw GitHub",
    url: "https://github.com/openclaw/openclaw",
    description: "Source code, issues, and community contributions",
    tags: ["source", "community"],
  },
];

export default function DirectoryPage() {
  return (
    <div className="px-5 py-10">
      <h1 className="mb-2 text-3xl font-extrabold">Community Directory</h1>
      <p className="mb-8 text-muted">
        Curated claw websites and community projects. Style references for iteration.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {communitySites.map((site, i) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card block p-5 transition-all hover:-translate-y-0.5"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <h2 className="mb-2 text-lg font-bold text-white">{site.name}</h2>
            <p className="mb-3 text-sm text-muted">{site.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {site.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/[0.08] px-2.5 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="glass-card mt-8 p-6">
        <h3 className="mb-2 text-lg font-bold">Add Your Site</h3>
        <p className="text-sm text-muted">
          Built something with OpenClaw?{" "}
          <a
            href="https://github.com/openclaw/openclaw-newbie-baseline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-300 hover:text-sky-200"
          >
            Open a PR
          </a>{" "}
          to add your claw website to the directory.
        </p>
      </div>
    </div>
  );
}
