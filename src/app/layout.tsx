import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Farriel Arrianta — Software Engineer",
  description:
    "Farriel Arrianta engineers polished web, mobile, and data-driven products from Indonesia.",
  keywords: [
    "Farriel Arrianta",
    "software engineer",
    "Next.js developer",
    "Flutter developer",
    "Indonesia",
  ],
};

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } catch (_) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
