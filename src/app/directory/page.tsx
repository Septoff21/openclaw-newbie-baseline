import Link from "next/link";

const communityLinks = [
  {
    name: "GitHub",
    url: "https://github.com/openclaw/openclaw",
    description: "Source code, issues, and community contributions",
    icon: "🐙",
    tags: ["source", "community"],
  },
  {
    name: "Discord",
    url: "https://discord.gg/clawd",
    description: "Join the community — ask questions, share setups, get help",
    icon: "💬",
    tags: ["chat", "support"],
  },
  {
    name: "ClawHub",
    url: "https://clawhub.com",
    description: "AI Agent skill marketplace — search, install, publish skills",
    icon: "🧩",
    tags: ["marketplace", "skills"],
  },
  {
    name: "Documentation",
    url: "https://docs.openclaw.ai",
    description: "Official docs, API reference, and configuration guides",
    icon: "📖",
    tags: ["docs", "reference"],
  },
  {
    name: "OpenClaw Website",
    url: "https://openclaw.ai",
    description: "Official website with news, announcements, and downloads",
    icon: "🌐",
    tags: ["official"],
  },
  {
    name: "Baseline Template",
    url: "https://github.com/openclaw/openclaw-newbie-baseline",
    description: "This site's source — fork it and make it yours",
    icon: "📦",
    tags: ["template", "starter"],
  },
];

export default function DirectoryPage() {
  return (
    <div className="page-transition px-5 py-10">
      <h1 className="mb-2 text-3xl font-extrabold" style={{ letterSpacing: '-0.03em' }}>Community Links</h1>
      <p className="mb-8 text-muted">
        GitHub, Discord, ClawHub, Docs — everything you need to get started.
      </p>

      <div className="mx-auto grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {communityLinks.map((link, i) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card block p-5 transition-all hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{link.icon}</span>
              <h2 className="text-lg font-bold text-white" style={{ letterSpacing: '-0.02em' }}>{link.name}</h2>
            </div>
            <p className="mb-3 text-sm text-muted">{link.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {link.tags.map((tag) => (
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

      <div className="glass-card mx-auto mt-8 max-w-[1200px] p-6 text-center">
        <h3 className="mb-2 text-lg font-bold" style={{ letterSpacing: '-0.02em' }}>Built Something?</h3>
        <p className="text-sm text-muted">
          Built a site with OpenClaw?{" "}
          <a
            href="https://github.com/openclaw/openclaw-newbie-baseline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-300 hover:text-sky-200 underline underline-offset-2"
          >
            Open a PR
          </a>{" "}
          to add your link.
        </p>
      </div>
    </div>
  );
}
