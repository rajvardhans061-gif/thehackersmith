import Link from "next/link";
import { CalendarCheck, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="section bg-[#081624]">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(120deg,#102B3A,#0B1E31)] px-6 py-14 text-center shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-20">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#85EFC7]/10 blur-3xl" />
          <div className="relative">
          <p className="eyebrow">A considered next step</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-[1.1] tracking-[-0.04em] text-[#F4F7FA] sm:text-5xl">
            Ask about the first pilot cohort.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#A9BAC8]">
            Request details about Ethical Hacking Foundation, our first
            small-group instructor-led online pilot.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#programs"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#85EFC7] px-6 py-3 text-sm font-semibold text-[#06201a] transition hover:-translate-y-0.5 hover:bg-[#B1F7DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
            >
              View Pilot Details
            </Link>
            <Link
              href="/enroll?intent=consultation"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#F4F7FA] transition hover:border-[#85EFC7] hover:text-[#85EFC7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Request Pilot Details
            </Link>
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#A9BAC8]">
            An inquiry is free and does not create an enrollment or process a
            payment. We will share the schedule, terms, and next steps before
            you decide whether to enroll.
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
      </div>
    </section>
  );
}
