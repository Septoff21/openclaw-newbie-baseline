import HeroSection from "@/components/HeroSection";
import TierCard from "@/components/TierCard";
import { prompts } from "@/data/prompts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-transition">
      <HeroSection />

      {/* Tier Cards */}
      <section id="journey" className="px-5" style={{ paddingTop: '80px' }}>
        <h2 className="mb-2 text-center text-2xl font-extrabold" style={{ letterSpacing: '-0.03em' }}>
          Choose Your Path
        </h2>
        <p className="mb-8 text-center text-sm text-muted">
          Pick a template, copy the prompt, paste into your OpenClaw chat
        </p>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-3">
          {(Object.keys(prompts) as Array<keyof typeof prompts>).map((tier) => (
            <TierCard key={tier} tier={tier} />
          ))}
        </div>
        {/* Next step guidance */}
        <div className="glass-card mx-auto mt-6 max-w-[1200px] p-5 text-center">
          <p className="text-sm text-muted leading-relaxed">
            Copied a prompt? Next step: <strong className="text-white">open your OpenClaw chat</strong>, paste and send.
          </p>
          <p className="text-xs text-muted mt-1.5">
            Not installed yet? <Link href="/guides/setup-beginner" className="text-sky-300 hover:text-sky-200 underline underline-offset-2">Read the setup guide →</Link>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-5" style={{ paddingTop: '80px' }}>
        <h2 className="mb-8 text-center text-2xl font-extrabold" style={{ letterSpacing: '-0.03em' }}>
          How It Works
        </h2>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:gap-0">
          {[
            {
              step: "1",
              title: "Pick a Template",
              desc: "Choose Quick Start, Power User, or Expert Mode.",
              code: `# Open your OpenClaw chat`,
            },
            {
              step: "2",
              title: "Paste & Send",
              desc: "Copy the prompt and send it to your agent.",
              code: `> Paste the copied prompt`,
            },
            {
              step: "3",
              title: "Verify & Go",
              desc: "Follow the steps your agent returns.",
              code: `openclaw status`,
            },
          ].map((item, i) => (
            <div key={item.step} className="flex flex-1 flex-col items-center sm:relative">
              <div className="glass-card w-full p-6 text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-2xl font-extrabold text-white" style={{ letterSpacing: '-0.03em' }}>
                  {item.step}
                </div>
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Step {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="mb-3 text-sm text-muted leading-relaxed">{item.desc}</p>
                <pre className="rounded-lg border border-white/5 bg-black/35 px-3 py-2 text-left text-xs text-muted overflow-x-auto">
                  <code>{item.code}</code>
                </pre>
              </div>
              {/* Arrow connector (desktop only) */}
              {i < 2 && (
                <div className="hidden sm:flex absolute -right-3 top-1/2 z-10 h-6 w-6 -translate-y-1/2 items-center justify-center text-xl text-primary/60">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-5" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <h2 className="mb-6 text-center text-2xl font-extrabold" style={{ letterSpacing: '-0.03em' }}>
          Explore More
        </h2>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2">
          <Link href="/blog" className="glass-card p-5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📝</span>
              <h3 className="font-bold">Blog</h3>
              <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-muted">8 articles</span>
            </div>
            <p className="text-sm text-muted">Tutorials, tips, ecosystem deep-dives</p>
            <p className="mt-1.5 text-[11px] text-muted/60">Latest: Security 101, MCP Ecosystem, Prompt Tips</p>
          </Link>
          <Link href="/guides" className="glass-card p-5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📚</span>
              <h3 className="font-bold">Guides</h3>
              <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-muted">4 guides</span>
            </div>
            <p className="text-sm text-muted">Setup steps, agent blueprint, architecture docs</p>
            <p className="mt-1.5 text-[11px] text-muted/60">Beginner → Advanced → Expert paths available</p>
          </Link>
          <Link href="/directory" className="glass-card p-5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🔗</span>
              <h3 className="font-bold">Community Links</h3>
            </div>
            <p className="text-sm text-muted">GitHub, Discord, ClawHub, and more</p>
            <p className="mt-1.5 text-[11px] text-muted/60">Official resources & community channels</p>
          </Link>
          <a
            href="https://clawhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🧩</span>
              <h3 className="font-bold">ClawHub</h3>
            </div>
            <p className="text-sm text-muted">Skill marketplace — search, install, publish</p>
            <p className="mt-1.5 text-[11px] text-muted/60">Extend your agent with community skills</p>
          </a>
        </div>
      </section>
    </div>
  );
}
