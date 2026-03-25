import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-center text-sm text-muted">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-4 flex flex-wrap justify-center gap-4">
          <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
          <Link href="/guides" className="transition-colors hover:text-white">Guides</Link>
          <Link href="/directory" className="transition-colors hover:text-white">Directory</Link>
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://clawhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            ClawHub
          </a>
        </div>
        <p className="opacity-60">
          OpenClaw Playground — Free · Open Source · Community-driven
        </p>
      </div>
    </footer>
  );
}
