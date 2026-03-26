import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OpenClaw Baseline — Build Your AI Agent Team",
  description:
    "Beginner-first, copy-and-run OpenClaw project. Free, open source, natural language, no-code friendly.",
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
        <main className="mx-auto max-w-5xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
