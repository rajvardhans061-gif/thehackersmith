import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProgramCard from "@/components/ProgramCard";
import { pilotProgram, programs } from "@/data/programs";

export const metadata = {
  title: "Programs | The Hacker Smith",
  description:
    "Explore The Hacker Smith's first small-group Ethical Hacking Foundation pilot.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-base text-ink">
      <section className="border-b border-white/5 pb-14 pt-32 sm:pb-16 md:pt-36">
        <div className="shell text-center">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Practical Technology Education
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Start with one
            <br />
            <span className="text-cyan-300">focused pilot.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We are validating a beginner-friendly Ethical Hacking Foundation
            program before expanding into additional subjects and pathways.
          </p>
        </div>
      </section>

      <section className="border-b border-white/5 py-12 md:py-16">
        <div className="shell">
          <div className="mx-auto max-w-md">
            {pilotProgram && <ProgramCard program={pilotProgram} />}
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-surface p-6 text-center">
            <h2 className="text-xl font-bold text-white">Additional pathways are in development</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              We are not accepting enrollment for the other {programs.length - 1} planned pathways yet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="shell">
          <div className="rounded-2xl border border-white/10 bg-surface px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
              Not sure where to start?
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Ask about the pilot.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Tell us about your goals and experience. We will share pilot details and let you know when other pathways are ready.
            </p>
            <Link
              href="/enroll"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-[#02141c] transition-colors hover:bg-brand-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:translate-y-px"
            >
              Request Pilot Details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
