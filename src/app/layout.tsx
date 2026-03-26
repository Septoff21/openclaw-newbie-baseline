import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.copyTagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.copyTagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
// force deploy 2026年 03月 26日 星期四 17:53:28 +08
