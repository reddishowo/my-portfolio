import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Farriel Arrianta — Software Engineer",
  description:
    "Software engineer in Malang, Indonesia, designing and building clear web products, mobile applications, and data systems.",
  keywords: [
    "Farriel Arrianta",
    "software engineer",
    "full-stack developer",
    "Next.js developer",
    "Flutter developer",
    "Indonesia",
  ],
  authors: [{ name: "Farriel Arrianta" }],
  creator: "Farriel Arrianta",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Farriel Arrianta — Software Engineer",
    description:
      "Clear digital products for real-world operations, across web, mobile, and data.",
    siteName: "Farriel Arrianta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farriel Arrianta — Software Engineer",
    description:
      "Clear digital products for real-world operations, across web, mobile, and data.",
  },
};

const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      const preferred = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.dataset.theme = saved === "dark" || saved === "light" ? saved : preferred;
    } catch (_) {}
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Script id="theme-preference" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
