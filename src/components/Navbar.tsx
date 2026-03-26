"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/blog", label: "Blog", icon: "📝" },
  { href: "/guides", label: "Guides", icon: "📚" },
  { href: "/directory", label: "Directory", icon: "🦞" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled
        ? "border-white/15 bg-[#0f1020]/90 backdrop-blur-xl shadow-lg shadow-black/10"
        : "border-white/10 bg-[#0f1020]/80 backdrop-blur-xl"
    }`}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg text-white">
          <span className="text-2xl">🦞</span>
          <span className="hidden sm:inline">OpenClaw Playground</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-all duration-200 ${
                isActive(link.href)
                  ? "text-white font-medium border-b-2 border-primary pb-0.5"
                  : "text-muted hover:text-white"
              }`}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden rounded-lg p-2 text-muted hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-300 sm:hidden ${
        open ? "max-h-80" : "max-h-0"
      }`}>
        <div className="border-t border-white/10 bg-[#0f1020]/95 backdrop-blur-xl">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-5 py-3 text-sm transition-all duration-200 ${
                isActive(link.href)
                  ? "bg-primary/10 text-white font-medium"
                  : "text-muted hover:bg-white/5 hover:text-white"
              }`}
              style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
