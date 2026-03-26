import Link from "next/link";
import { siteConfig } from "@/config/site";

const links = [
  {
    href: "/blog",
    icon: "📝",
    title: "Blog",
    badge: "8 articles",
    desc: "Tutorials, tips, ecosystem deep-dives",
    sub: "Latest: Security 101, MCP Ecosystem, Prompt Tips",
  },
  {
    href: "/guides",
    icon: "📚",
    title: "Guides",
    badge: "4 guides",
    desc: "Setup steps, agent blueprint, architecture docs",
    sub: "Beginner → Advanced → Expert paths available",
  },
  {
    href: "/directory",
    icon: "🔗",
    title: "Community Links",
    badge: null,
    desc: "GitHub, Discord, ClawHub, and more",
    sub: "Official resources & community channels",
  },
  {
    href: siteConfig.social.clawhub,
    icon: "🧩",
    title: "ClawHub",
    badge: null,
    desc: "Skill marketplace — search, install, publish",
    sub: "Extend your agent with community skills",
    external: true,
  },
];

export default function QuickLinks() {
  return (
    <section className="px-5" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
      <h2
        className="mb-6 text-center text-2xl font-extrabold"
        style={{ letterSpacing: "-0.03em" }}
      >
        Explore More
      </h2>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2">
        {links.map((link) => {
          const className =
            "glass-card p-5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-200";
          const inner = (
            <>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{link.icon}</span>
                <h3 className="font-bold">{link.title}</h3>
                {link.badge && (
                  <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-muted">
                    {link.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted">{link.desc}</p>
              <p className="mt-1.5 text-[11px] text-muted/60">{link.sub}</p>
            </>
          );
          return link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {inner}
            </a>
          ) : (
            <Link key={link.href} href={link.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
