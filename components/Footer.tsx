import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, Github, Mail, ArrowUpRight } from "lucide-react";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Programs", href: "/#programs" },
      { label: "Workshops", href: "/#workshops" },
      { label: "Resources", href: "/#resources" },
      { label: "About", href: "/#about" },
      { label: "Program Comparison", href: "/#program-comparison" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  {
    heading: "Core Areas",
    links: [
      { label: "Cybersecurity", href: "/#programs" },
      { label: "Ethical Hacking", href: "/#programs" },
      { label: "Data Science & AI", href: "/#programs" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "mailto:training@thehackersmith.com" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/the-hacker-smith",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@thehackersmith",
      },
      {
        label: "GitHub",
        href: "https://github.com/thehackersmith",
      },
    ],
  },
];

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/the-hacker-smith",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@thehackersmith",
    label: "YouTube",
  },
  {
    icon: Github,
    href: "https://github.com/thehackersmith",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:training@thehackersmith.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
  <footer className="border-t border-[#233B4D] bg-[#071827]">
      <div className="shell py-14 md:py-16">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="/#home"
              className="inline-flex items-center"
              aria-label="The Hacker Smith Home"
            >
              <Image
                src="/logo.png"
                alt="The Hacker Smith"
                width={190}
                height={70}
                className="h-[54px] w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#A9BAC8]">
              Practical technology education designed to help students,
              professionals, and organizations build real-world skills
              through focused learning, practical training, and
              career-oriented technology programs.
            </p>

            {/* Core areas */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Cybersecurity", "Ethical Hacking", "Data Science & AI"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#233B4D] bg-[#0D2235] px-3 py-1.5 text-[10px] font-medium text-[#A9BAC8]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#233B4D] bg-[#0D2235] text-[#A9BAC8] transition-colors duration-200 hover:border-[#20C9D8] hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8]"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A9BAC8]">
                {column.heading}
              </h3>

              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => {
                  const isExternal =
                    link.href.startsWith("http") ||
                    link.href.startsWith("mailto:");

                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target={
                            link.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group inline-flex items-center gap-1.5 text-sm text-[#A9BAC8] transition-colors hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8]"
                        >
                          {link.label}

                          {link.href.startsWith("http") && (
                            <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                          )}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-[#A9BAC8] transition-colors hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8]"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-[#233B4D] pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-[#A9BAC8]">
            © 2026 The Hacker Smith. All rights reserved.
          </p>

          <div className="flex flex-col gap-2 sm:items-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A9BAC8]">
              Learn → Practice → Build → Advance
            </p>

            <p className="text-xs text-[#A9BAC8]">
              Build Skills. Build Careers. Build With Technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
