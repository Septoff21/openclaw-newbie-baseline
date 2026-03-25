export default function HeroSection() {
  return (
    <section className="animate-fade-in-up px-5 pb-8 pt-12 text-center sm:pt-16">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sky-300">
        OpenClaw Visual Onboarding
      </p>
      <h1 className="mb-3 text-4xl font-extrabold leading-tight sm:text-5xl">
        OpenClaw Playground
      </h1>
      <p className="mx-auto mb-6 max-w-xl text-lg text-muted">
        From <strong className="text-white">&quot;I don&apos;t know&quot;</strong> →{" "}
        <strong className="text-white">&quot;I can run it&quot;</strong> →{" "}
        <strong className="text-white">&quot;I can customize it&quot;</strong>
      </p>
      <div className="mb-5 flex flex-wrap justify-center gap-3">
        <a
          href="#journey"
          className="inline-block rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(106,92,255,0.3)] hover:-translate-y-0.5"
        >
          Start with Beginner
        </a>
        <a
          href="#verify-checklist"
          className="inline-block rounded-xl border border-white/12 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/[0.18] hover:-translate-y-0.5"
        >
          Use verification checklist
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {["Free", "Open Source", "Natural Language", "No-code Friendly"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.06] bg-white/[0.08] px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
