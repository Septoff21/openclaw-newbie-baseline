import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OpenClaw Playground — Build Your AI Agent Team",
  description:
    "Free, open source templates for OpenClaw. Copy, customize, deploy your AI agent team.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "OpenClaw Playground",
    description: "Build Your AI Agent Team — Copy, Paste, Deploy",
    url: "https://claw-baseline.vercel.app",
    siteName: "OpenClaw Playground",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Playground",
    description: "Build Your AI Agent Team — Copy, Paste, Deploy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="mx-auto max-w-[1200px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
