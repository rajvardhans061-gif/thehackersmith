import Link from "next/link";

import { programs, pilotProgram } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";

export default function Programs() {
  return (
    <section id="programs" className="section bg-[#091827]">
      <div className="shell">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow">A focused first step</p>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#F4F7FA] sm:text-5xl">
            One thoughtful program. <span className="text-[#85EFC7]">No noise.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[#A9BAC8]">
            We are validating one focused, beginner-friendly program before expanding our catalog.
          </p>
        </div>

        {pilotProgram && <div className="mx-auto max-w-xl"><ProgramCard program={pilotProgram} /></div>}

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-sm">
          <h3 className="text-xl font-bold tracking-[-0.02em] text-[#F4F7FA]">More pathways are in development</h3>
          <p className="mt-3 text-sm leading-6 text-[#A9BAC8]">
            Cybersecurity, Data Science &amp; AI, and extended career pathways are being developed. They are not open for enrollment yet.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#85EFC7]">{programs.filter((program) => program.availability === "In development").length} planned pathways</p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/enroll"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#85EFC7] px-6 py-3 font-semibold text-[#06201a] transition hover:-translate-y-0.5 hover:bg-[#B1F7DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
          >
            Request Pilot Details
          </Link>
        </div>
      </div>
    </section>
  );
}
