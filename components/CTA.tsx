import Link from "next/link";
import { ArrowRight, CalendarCheck, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="section bg-[#071827]">
      <div className="shell">
        <div className="rounded-2xl border border-[#233B4D] bg-[#0D2235] px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#36B7A8]">
            Practical Technology Education
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#F4F7FA] sm:text-4xl">
            Choose a learning path that fits your goals.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#A9BAC8]">
            Explore instructor-led online programs in Cybersecurity, Ethical
            Hacking, and Data Science &amp; AI.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#programs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#20C9D8] px-6 py-3 text-sm font-semibold text-[#10243A] transition-colors hover:bg-[#36B7A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/enroll?intent=consultation"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#526477] px-6 py-3 text-sm font-semibold text-[#F4F7FA] transition-colors hover:border-[#20C9D8] hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Request a Free Consultation
            </Link>
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#A9BAC8]">
            The consultation is free. Use the enquiry form to tell us which
            program you are considering, and our team will follow up.
          </p>

          <a
            href="mailto:training@thehackersmith.com"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[#A9BAC8] transition-colors hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact The Hacker Smith
          </a>
        </div>
      </div>
    </section>
  );
}
