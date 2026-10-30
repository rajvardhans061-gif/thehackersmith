import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <section id="programs" className="section bg-base">
      <div className="shell">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="section-label mb-4">
            // Our Programs
          </div>

          <h2 className="heading-lg mb-5">
            Focused programs for{" "}
            <span className="text-gradient-cyan">
              real technology careers.
            </span>
          </h2>

          <p className="body-text max-w-2xl">
            Practical, instructor-led programs designed to help you build
            technical knowledge, gain hands-on experience and develop
            career-ready technology skills.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <article
                key={program.slug}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-panel/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  program.featured
                    ? "border-cyan-400/40 shadow-[0_0_35px_rgba(0,229,255,0.08)]"
                    : "border-cyan-400/15 hover:border-cyan-400/35"
                }`}
              >
                {/* Top Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <span className="font-mono text-xs text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Category */}
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                  {program.category}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mb-7 text-sm leading-7 text-slate-400">
                  {program.description}
                </p>

                {/* Topics */}
                <div className="mb-7">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Core Topics
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {program.topics.slice(0, 6).map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.03] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-8">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    You Will Learn
                  </div>

                  <ul className="space-y-2.5">
                    {program.outcomes.slice(0, 4).map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-400"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-cyan-400"
                        />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-auto border-t border-white/5 pt-5">
                  <div className="mb-5 flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      {program.level}
                    </span>

                    <span className="font-mono text-cyan-300">
                      {program.format}
                    </span>
                  </div>

                  <Link
                    href={`/programs/${program.slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-300"
                  >
                    Explore Program
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}