import Link from "next/link";
import {
  ArrowRight,
  Newspaper,
  FlaskConical,
  BookOpen,
} from "lucide-react";

const resources = [
  {
    icon: Newspaper,
    number: "01",
    title: "Technical Articles",
    text: "Practical insights, explanations and technology perspectives across cybersecurity, AI and modern IT.",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Practical Labs",
    text: "Guided exercises and technical practice designed to help turn concepts into usable skills.",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Technology Guides",
    text: "Structured learning material that helps you understand technologies from fundamentals to practical application.",
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="section relative overflow-hidden border-t border-cyan-400/10 bg-[#030b12]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-3xl" />

      <div className="shell relative">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="section-label mb-4">
              // Resources
            </div>

            <h2 className="heading-lg">
              Keep learning{" "}
              <span className="text-gradient-cyan">
                beyond the classroom.
              </span>
            </h2>

            <p className="body-text mt-6 max-w-2xl">
              Continue building your technology knowledge with practical
              articles, guided labs and structured resources designed for
              continuous learning.
            </p>
          </div>

          <Link
            href="#contact"
            className="hidden items-center gap-2 text-sm font-semibold text-cyan-300 transition-all hover:gap-3 hover:text-cyan-200 md:inline-flex"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Resource Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#06131d]/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(0,229,255,0.06)]"
              >
                {/* Number */}
                <div className="absolute right-6 top-6 font-mono text-xs text-slate-700">
                  {resource.number}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-white">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {resource.text}
                </p>

                {/* Bottom Link */}
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  Explore
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>

                {/* Accent */}
                <div className="absolute bottom-0 left-7 h-px w-8 bg-cyan-400/40 transition-all duration-300 group-hover:w-16" />
              </article>
            );
          })}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-10 flex flex-col gap-3 border-t border-cyan-400/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Learning doesn't stop when the session ends.
          </p>

          <span className="font-mono text-xs tracking-[0.12em] text-cyan-300/70">
            KEEP LEARNING → KEEP BUILDING
          </span>
        </div>
      </div>
    </section>
  );
}