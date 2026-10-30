import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
} from "lucide-react";

import { programs } from "@/data/programs";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#02080f] text-[#f4f7f9]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-32 pb-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#00e5ff]/[0.06] blur-[150px]" />

        <div className="shell relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#00e5ff]">
              {"// Our Programs"}
            </p>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Learn technology.
              <br />
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#7cf2ff] bg-clip-text text-transparent">
                Build real skills.
              </span>
            </h1>

       <p
  className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
  style={{ color: "#a7b5bd" }}
>
  Practical, instructor-led technology programs designed around
  hands-on learning, real-world scenarios and career-focused
  skills.
</p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="relative py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  key={program.slug}
                  className="group flex h-full flex-col rounded-2xl border border-[rgba(0,229,255,0.15)] bg-[#081d2a]/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.08)]"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(0,229,255,0.25)] bg-[#02080f] text-[#00e5ff]">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Category */}
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00e5ff]">
                    {program.category}
                  </p>

                  {/* Title */}
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    {program.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-[#a7b5bd]">
                    {program.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 grid grid-cols-2 gap-3 border-y border-white/[0.06] py-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-[#00e5ff]" />
                      <span className="text-xs text-[#a7b5bd]">
                        {program.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-[#00e5ff]" />
                      <span className="text-xs text-[#a7b5bd]">
                        {program.format}
                      </span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white">
                      Core Topics
                    </p>

                    <ul className="mt-3 space-y-2">
                      {program.topics.slice(0, 5).map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-[#8f9fa8]"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00e5ff]" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-7">
                    <Link
                      href={`/programs/${program.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#00e5ff]"
                    >
                      Explore Program
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/[0.05] py-20">
        <div className="shell">
          <div className="rounded-2xl border border-[rgba(0,229,255,0.18)] bg-[#06131d] px-6 py-12 text-center sm:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00e5ff]">
              {"// Not sure where to start?"}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Find the right technology path.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#a7b5bd] sm:text-base">
              Tell us what you want to learn, your current experience level,
              and your career goal. We can help you choose the right learning
              path.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#00e5ff] px-6 py-3 text-sm font-semibold text-[#02141c] transition-all hover:bg-[#12efff] hover:shadow-[0_10px_35px_rgba(0,229,255,0.2)]"
            >
              Talk to The Hacker Smith
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}