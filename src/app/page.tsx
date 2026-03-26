import HeroSection from "@/components/HeroSection";
import TierCard from "@/components/TierCard";
import { prompts } from "@/data/prompts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-transition">
      <HeroSection />

      {/* Tier Cards */}
      <section id="journey" className="px-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {(Object.keys(prompts) as Array<keyof typeof prompts>).map((tier) => (
            <TierCard key={tier} tier={tier} />
          ))}
        </div>
        {/* Next step guidance */}
        <div className="glass-card mt-6 p-5 text-center">
          <p className="text-sm text-muted leading-relaxed">
            Copied a prompt? Next step: <strong className="text-white">open your OpenClaw chat</strong>, paste and send.
          </p>
          <p className="text-xs text-muted mt-1.5">
            Not installed yet? <Link href="/guides/setup-beginner" className="text-sky-300 hover:text-sky-200 underline underline-offset-2">Read the setup guide →</Link>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-10 px-5">
        <h2 className="mb-6 text-center text-2xl font-extrabold tracking-tight">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              step: "1",
              icon: "📋",
              title: "Pick a Template",
              desc: "Choose Quick Start, Power User, or Expert Mode based on your experience level.",
            },
            {
              step: "2",
              icon: "💬",
              title: "Paste into OpenClaw",
              desc: "Copy the prompt and send it to your OpenClaw agent. It handles everything automatically.",
            },
            {
              step: "3",
              icon: "✅",
              title: "Verify & Go",
              desc: "Follow the verification steps your agent returns. You're now running a production-grade setup.",
            },
          ].map((item) => (
            <div key={item.step} className="glass-card p-6 text-center animate-fade-in-up">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-2xl">
                {item.icon}
              </div>
              <div className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                Step {item.step}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="mt-10 px-5 pb-4">
        <h2 className="mb-6 text-center text-2xl font-extrabold tracking-tight">
          Explore More
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link href="/blog" className="glass-card p-5 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📝</span>
              <h3 className="font-bold">Blog</h3>
            </div>
            <p className="text-sm text-muted">Tutorials, tips, ecosystem deep-dives</p>
          </Link>
          <Link href="/guides" className="glass-card p-5 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📚</span>
              <h3 className="font-bold">Guides</h3>
            </div>
            <p className="text-sm text-muted">Setup steps, agent blueprint, architecture docs</p>
          </Link>
          <Link href="/directory" className="glass-card p-5 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🦞</span>
              <h3 className="font-bold">Directory</h3>
            </div>
            <p className="text-sm text-muted">Community claw websites and style references</p>
          </Link>
          <a
            href="https://clawhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🧩</span>
              <h3 className="font-bold">ClawHub</h3>
            </div>
            <p className="text-sm text-muted">Skill marketplace — search, install, publish</p>
          </a>
        </div>
      </section>
    </div>
  );
}
