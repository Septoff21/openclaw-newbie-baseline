import HeroSection from "@/components/HeroSection";
import TierCard from "@/components/TierCard";
import { prompts } from "@/data/prompts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Tier Cards */}
      <section id="journey" className="px-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {(Object.keys(prompts) as Array<keyof typeof prompts>).map((tier) => (
            <TierCard key={tier} tier={tier} />
          ))}
        </div>
      </section>

      {/* Verification Loop */}
      <section className="glass-card mt-8 p-6 sm:p-8">
        <h3 className="mb-3 text-lg font-bold">Verification Loop (anti-hallucination)</h3>
        <ul className="space-y-2 text-sm text-muted">
          <li>• Always require: plan → progress → blocker → final summary.</li>
          <li>• Require command-level evidence for critical actions.</li>
          <li>• Context warning policy: 70% / 85% / 95%.</li>
          <li>• If unverifiable, ask for retry with explicit checks.</li>
        </ul>
      </section>

      {/* Verification Checklist */}
      <section id="verify-checklist" className="glass-card mt-6 p-6 sm:p-8">
        <h3 className="mb-3 text-lg font-bold">Verification Checklist (practical)</h3>
        <ol className="space-y-2 text-sm text-muted">
          <li>
            <strong className="text-white">1. Scope lock:</strong> restate goal in one sentence
            before execution.
          </li>
          <li>
            <strong className="text-white">2. Evidence lock:</strong> include exact commands/URLs
            used.
          </li>
          <li>
            <strong className="text-white">3. Result lock:</strong> show before/after or status code
            proof.
          </li>
          <li>
            <strong className="text-white">4. Risk lock:</strong> mention blocker and rollback when
            relevant.
          </li>
        </ol>
      </section>

      {/* Quick Links */}
      <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link href="/blog" className="glass-card p-5 transition-all hover:-translate-y-0.5">
          <h3 className="mb-1 font-bold">📝 Blog</h3>
          <p className="text-sm text-muted">Tutorials, tips, ecosystem deep-dives</p>
        </Link>
        <Link href="/guides" className="glass-card p-5 transition-all hover:-translate-y-0.5">
          <h3 className="mb-1 font-bold">📚 Guides</h3>
          <p className="text-sm text-muted">Setup steps, agent blueprint, architecture docs</p>
        </Link>
        <Link href="/directory" className="glass-card p-5 transition-all hover:-translate-y-0.5">
          <h3 className="mb-1 font-bold">🦞 Directory</h3>
          <p className="text-sm text-muted">Community claw websites and style references</p>
        </Link>
        <a
          href="https://clawhub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-5 transition-all hover:-translate-y-0.5"
        >
          <h3 className="mb-1 font-bold">🧩 ClawHub</h3>
          <p className="text-sm text-muted">Skill marketplace — search, install, publish</p>
        </a>
      </section>
    </>
  );
}
