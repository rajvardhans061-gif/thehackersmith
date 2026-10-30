import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="section relative overflow-hidden bg-base">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-3xl" />

      <div className="shell relative">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#06131d]/90 px-6 py-16 text-center shadow-[0_0_60px_rgba(0,229,255,0.05)] backdrop-blur-md md:px-12 md:py-24">
          {/* Grid Background */}
          <div
            className="grid-bg pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
          />

          {/* Top Accent */}
          <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                <Mail size={19} />
              </div>
            </div>

            <div className="section-label mb-5">
              // Get Started
            </div>

            <h2 className="heading-xl mx-auto">
              Ready to build your{" "}
              <span className="text-gradient-cyan">
                next skill?
              </span>
            </h2>

            <p className="body-text mx-auto mt-6 max-w-2xl">
              Talk to The Hacker Smith about training programs, workshops,
              corporate learning or customized technology education
              solutions.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="mailto:training@thehackersmith.com"
                className="btn-primary w-full sm:w-auto"
              >
                Contact The Hacker Smith
                <ArrowRight size={16} />
              </Link>

              <Link
                href="#programs"
                className="btn-secondary w-full sm:w-auto"
              >
                Explore Programs
              </Link>
            </div>

            <div className="mt-8 font-mono text-xs tracking-[0.12em] text-slate-600">
              LEARN → PRACTICE → BUILD → ADVANCE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}