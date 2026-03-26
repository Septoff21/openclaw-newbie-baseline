import { StepItem } from "@/types";

const steps: StepItem[] = [
  {
    step: "1",
    title: "Pick a Template",
    desc: "Choose Quick Start, Power User, or Expert Mode.",
    code: "# Open your OpenClaw chat",
  },
  {
    step: "2",
    title: "Paste & Send",
    desc: "Copy the prompt and send it to your agent.",
    code: "> Paste the copied prompt",
  },
  {
    step: "3",
    title: "Verify & Go",
    desc: "Follow the steps your agent returns.",
    code: "openclaw status",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-5" style={{ paddingTop: "80px" }}>
      <h2
        className="mb-8 text-center text-2xl font-extrabold"
        style={{ letterSpacing: "-0.03em" }}
      >
        How It Works
      </h2>
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:gap-0">
        {steps.map((item, i) => (
          <div key={item.step} className="flex flex-1 flex-col items-center sm:relative">
            <div
              className="glass-card w-full p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-2xl font-extrabold text-white"
                style={{ letterSpacing: "-0.03em" }}
              >
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
            {i < 2 && (
              <div className="hidden sm:flex absolute -right-3 top-1/2 z-10 h-6 w-6 -translate-y-1/2 items-center justify-center text-xl text-primary/60">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
