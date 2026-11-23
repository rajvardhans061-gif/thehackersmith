"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Pilot", href: "/#programs" },
  { label: "How it works", href: "/#workshops" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main Navigation */}
        <nav className="relative flex min-h-[70px] items-center justify-between rounded-2xl border border-white/10 bg-[#091728]/80 px-4 shadow-[0_16px_42px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-6 lg:min-h-[76px] lg:px-7">

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
              className="h-[44px] w-auto object-contain sm:h-[49px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="relative z-10 hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative rounded-sm py-2 text-[15px] font-medium text-[#DCE6ED] transition-colors duration-200 hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8]"
              >
                {item.label}

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#20C9D8] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="relative z-10 hidden items-center gap-2.5 lg:flex">

            {/* Contact */}
            <Link
              href="/#contact"
            className="rounded-full px-4 py-2.5 text-sm font-medium text-[#DCE6ED] transition-colors duration-200 hover:text-[#85EFC7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7]"
            >
              Contact
            </Link>

            {/* Primary CTA */}
            <Link
              href="/#programs"
              className="inline-flex items-center rounded-full bg-[#85EFC7] px-5 py-2.5 text-sm font-bold text-[#06201a] transition duration-200 hover:-translate-y-0.5 hover:bg-[#B1F7DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
            >
              Request details
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-[#526477] bg-[#123047] text-[#DCE6ED] transition-colors duration-200 hover:border-[#20C9D8] hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] lg:hidden"
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
          <div className="relative mt-3 overflow-hidden rounded-2xl border border-[#233B4D] bg-[#0D2235] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.3)] lg:hidden">
            <div className="relative flex flex-col">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className="rounded-xl px-4 py-3.5 text-sm font-medium text-[#DCE6ED] transition-colors hover:bg-[#123047] hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={closeMobile}
                className="rounded-xl px-4 py-3.5 text-sm font-medium text-[#DCE6ED] transition-colors hover:bg-[#123047] hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8]"
              >
                Contact
              </Link>

              <div className="my-2 h-px bg-white/[0.07]" />

              <Link
                href="/#programs"
                onClick={closeMobile}
                className="inline-flex items-center justify-center rounded-full bg-[#85EFC7] px-5 py-3.5 text-sm font-bold text-[#06201a] transition-colors duration-200 hover:bg-[#B1F7DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
              >
                Request details
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
