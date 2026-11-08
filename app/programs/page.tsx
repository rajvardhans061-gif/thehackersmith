import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const metadata = {
  title: "Programs | The Hacker Smith",
  description:
    "Explore foundation and career accelerator programs in cybersecurity, ethical hacking, and data science and AI.",
};

const programSections = [
  {
    pathway: "Foundation",
    title: "Foundation Programs",
    description:
      "Build practical starting skills through guided learning in your chosen technology domain.",
  },
  {
    pathway: "Career Accelerator",
    title: "Career Accelerator Programs",
    description:
      "Develop deeper applied skills through extended study, practical projects, and career preparation.",
  },
] as const;

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-base text-ink">
      <section className="border-b border-white/5 pb-14 pt-32 sm:pb-16 md:pt-36">
        <div className="shell text-center">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Practical Technology Education
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Learn technology.
            <br />
            <span className="text-cyan-300">Build real skills.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Choose a foundation pathway or a six-month career accelerator across our three technology domains.
          </p>
        </div>
      </section>

      {programSections.map((section) => {
        const sectionPrograms = programs.filter(
          (program) => program.pathway === section.pathway
        );

        return (
          <section
            key={section.pathway}
            aria-labelledby={`${section.pathway}-heading`}
            className="border-b border-white/5 py-12 md:py-16"
          >
            <div className="shell">
              <div className="mb-7 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {section.pathway}
                  </p>
                  <h2
                    id={`${section.pathway}-heading`}
                    className="text-2xl font-bold text-white sm:text-3xl"
                  >
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                    {section.description}
                  </p>
                </div>
                <span className="text-sm font-medium text-slate-400">
                  {sectionPrograms.length} programs
                </span>
              </div>

              <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                {sectionPrograms.map((program) => (
                  <ProgramCard key={program.slug} program={program} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-14 md:py-20">
        <div className="shell">
          <div className="rounded-2xl border border-white/10 bg-surface px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
              Not sure where to start?
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Find the right technology path.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Tell us what you want to learn and your career goals. Our team can help you explore a suitable pathway.
            </p>
            <Link
              href="/enroll"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-[#02141c] transition-colors hover:bg-brand-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:translate-y-px"
            >
              Enquire About a Program
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
