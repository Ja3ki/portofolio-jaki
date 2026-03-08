import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.content.en.heroSummary,
  applicationName: `${profile.name} Portfolio`,
  keywords: [
    profile.name,
    "Portfolio",
    "Project Manager",
    "Data Analyst",
    "Dashboard",
    "Analytics",
    "Next.js",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.content.en.heroSummary,
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${profile.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.content.en.heroSummary,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50">
        <ThemeProvider>
          <LocaleProvider>
            <Analytics />
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}