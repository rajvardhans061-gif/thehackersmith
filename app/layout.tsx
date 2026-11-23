
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPricing from "@/components/FloatingPricing";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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
    "The Hacker Smith is developing practical technology education and is introducing an Ethical Hacking Foundation pilot.",
  keywords: [
    "technology education",
    "cybersecurity training",
    "ethical hacking foundation",
    "technology education pilot",
  ],
  openGraph: {
    title: "The Hacker Smith | Practical Technology Education",
    description:
      "An instructor-guided Ethical Hacking Foundation pilot from The Hacker Smith.",
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
        <FloatingWhatsApp />

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
