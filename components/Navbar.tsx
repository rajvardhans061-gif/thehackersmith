"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Resources", href: "/#resources" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main Navigation */}
        <nav className="relative flex min-h-[76px] items-center justify-between rounded-2xl border border-cyan-400/15 bg-[#06131d]/90 px-4 shadow-[0_12px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6 lg:min-h-[82px] lg:px-7">

          {/* Subtle cyan glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_-100%,rgba(0,229,255,0.10),transparent_55%)]" />

          {/* Logo */}
          <Link
            href="/#home"
            aria-label="The Hacker Smith Home"
            className="relative z-10 flex shrink-0 items-center"
          >
            <Image
              src="/logo.png"
              alt="The Hacker Smith"
              width={180}
              height={70}
              priority
              className="h-[50px] w-auto object-contain sm:h-[56px] lg:h-[62px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="relative z-10 hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[15px] font-medium text-[#c6d1d7] transition-colors duration-200 hover:text-[#00e5ff]"
              >
                {item.label}

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="relative z-10 hidden items-center gap-2.5 lg:flex">

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] text-[#a7b5bd] transition-all duration-200 hover:border-cyan-400/25 hover:bg-cyan-400/[0.06] hover:text-[#00e5ff]"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            {/* Contact */}
            <Link
              href="/#contact"
              className="rounded-full border border-white/[0.12] px-4 py-2.5 text-sm font-medium text-[#d8e1e5] transition-all duration-200 hover:border-cyan-400/40 hover:text-[#00e5ff]"
            >
              Contact
            </Link>

            {/* Primary CTA */}
            <Link
              href="/#programs"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00e5ff] px-5 py-2.5 text-sm font-bold text-[#02141c] shadow-[0_8px_28px_rgba(0,229,255,0.16)] transition-all duration-200 hover:bg-[#12efff] hover:shadow-[0_10px_32px_rgba(0,229,255,0.28)]"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.04] text-[#d8e1e5] transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-[#00e5ff] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="relative mt-3 overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#06131d]/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden">

            {/* Mobile glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#00e5ff]/[0.06] blur-3xl" />

            <div className="relative flex flex-col">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className="rounded-xl px-4 py-3.5 text-sm font-medium text-[#c6d1d7] transition-colors hover:bg-cyan-400/[0.06] hover:text-[#00e5ff]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={closeMobile}
                className="rounded-xl px-4 py-3.5 text-sm font-medium text-[#c6d1d7] transition-colors hover:bg-cyan-400/[0.06] hover:text-[#00e5ff]"
              >
                Contact
              </Link>

              <div className="my-2 h-px bg-white/[0.07]" />

              <Link
                href="/#programs"
                onClick={closeMobile}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00e5ff] px-5 py-3.5 text-sm font-bold text-[#02141c] transition-all duration-200 hover:bg-[#12efff]"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}