import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { programs } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";

export default function Programs() {
  return (
    <section id="programs" className="section bg-[#0D2235]">
      <div className="shell">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#36B7A8]">
            Practical Technology Education
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#F4F7FA] sm:text-4xl">
            Choose Your Learning Path
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[#A9BAC8]">
            Build practical skills across cybersecurity, ethical hacking, and data science and AI.
          </p>
        </div>

        <div className="space-y-12">
          {([
            { pathway: "Foundation", title: "Foundation Programs" },
            {
              pathway: "Career Accelerator",
              title: "Career Accelerator Programs",
            },
          ] as const).map(({ pathway, title }) => (
            <section key={pathway} aria-labelledby={`home-programs-${pathway}`}>
              <h3
                id={`home-programs-${pathway}`}
                className="mb-6 text-2xl font-bold text-[#F4F7FA]"
              >
                {title}
              </h3>
              <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
                {programs
                  .filter((program) => program.pathway === pathway)
                  .map((program) => (
                    <ProgramCard key={program.slug} program={program} />
                  ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/enroll"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-[#02141c] transition-colors hover:bg-brand-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
          >
            Enquire About a Program
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
