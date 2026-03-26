import Link from "next/link";

export default function NextStepGuidance() {
  return (
    <div className="glass-card mx-auto mt-6 max-w-[1200px] p-5 text-center">
      <p className="text-sm text-muted leading-relaxed">
        Copied a prompt? Next step:{" "}
        <strong className="text-white">open your OpenClaw chat</strong>, paste and send.
      </p>
      <p className="text-xs text-muted mt-1.5">
        Not installed yet?{" "}
        <Link
          href="/guides/setup-beginner"
          className="text-sky-300 hover:text-sky-200 underline underline-offset-2"
        >
          Read the setup guide →
        </Link>
      </p>
    </div>
  );
}
