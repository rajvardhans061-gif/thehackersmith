
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPricing from "@/components/FloatingPricing";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Hacker Smith | Practical Technology Education",
  description:
    "The Hacker Smith provides practical technology education across cybersecurity, networking, cloud, AI and IT.",
  keywords: [
    "technology education",
    "cybersecurity training",
    "networking courses",
    "cloud training",
    "AI education",
    "IT training",
    "corporate technology training",
  ],
  openGraph: {
    title: "The Hacker Smith | Practical Technology Education",
    description:
      "Practical, instructor-led technology education across cybersecurity, networking, cloud, AI and IT.",
    siteName: "The Hacker Smith",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-base font-sans text-ink antialiased">
        <Navbar />

        {children}
        <FloatingPricing />

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
