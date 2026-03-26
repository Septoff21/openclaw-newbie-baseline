import { prompts } from "@/data/prompts";
import TierCard from "@/components/TierCard";
import NextStepGuidance from "@/components/NextStepGuidance";

export default function TierSection() {
  return (
    <section id="journey" className="px-5" style={{ paddingTop: "80px" }}>
      <h2
        className="mb-2 text-center text-2xl font-extrabold"
        style={{ letterSpacing: "-0.03em" }}
      >
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
      <NextStepGuidance />
    </section>
  );
}
