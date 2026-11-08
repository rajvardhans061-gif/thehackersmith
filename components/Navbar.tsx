"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
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
        <nav className="relative flex min-h-[76px] items-center justify-between rounded-2xl border border-[#233B4D] bg-[#0D2235] px-4 shadow-[0_12px_32px_rgba(0,0,0,0.25)] sm:px-6 lg:min-h-[82px] lg:px-7">

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
              className="rounded-full border border-[#526477] px-4 py-2.5 text-sm font-medium text-[#DCE6ED] transition-colors duration-200 hover:border-[#20C9D8] hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
            >
              Contact
            </Link>

            {/* Primary CTA */}
            <Link
              href="/#programs"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#20C9D8] px-5 py-2.5 text-sm font-bold text-[#10243A] transition-colors duration-200 hover:bg-[#36B7A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
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
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#20C9D8] px-5 py-3.5 text-sm font-bold text-[#10243A] transition-colors duration-200 hover:bg-[#36B7A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
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
