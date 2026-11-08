import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Newspaper } from "lucide-react";

const resources = [
  {
    icon: Newspaper,
    title: "Technical Articles",
    text: "Practical insights, explanations and technology perspectives across cybersecurity, AI and modern IT.",
  },
  {
    icon: FlaskConical,
    title: "Practical Labs",
    text: "Guided exercises and technical practice designed to help turn concepts into usable skills.",
  },
  {
    icon: BookOpen,
    title: "Technology Guides",
    text: "Structured learning material that helps you understand technologies from fundamentals to practical application.",
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="section border-t border-[#E2E8F0] bg-[#F4F7FA]"
    >
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#137E88]">
              Resources
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#10243A] sm:text-4xl">
              Keep learning beyond the classroom.
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-7 text-[#526477]">
              Continue building your technology knowledge with practical
              articles, guided labs, and structured learning resources.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-[#137E88] transition-colors hover:bg-white hover:text-[#10243A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137E88] focus-visible:ring-offset-2"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {resources.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="h-full rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F4F7FA] text-[#137E88]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#10243A]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#526477]">{text}</p>
              <div className="mt-6 h-px w-10 bg-[#36B7A8]" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#526477]">
            Learning continues through practice and curiosity.
          </p>
          <span className="text-xs font-semibold tracking-[0.12em] text-[#137E88]">
            KEEP LEARNING · KEEP BUILDING
          </span>
        </div>
      </div>
    </section>
  );
}
