import Link from "next/link";
import {
  CalendarCheck,
  GraduationCap,
  MonitorPlay,
  ShieldCheck,
  Check,
} from "lucide-react";

const learningFeatures = [
  {
    icon: MonitorPlay,
    title: "Live instructor-led online sessions",
  },
  {
    icon: CalendarCheck,
    title: "Saturday and Sunday delivery",
  },
  {
    icon: ShieldCheck,
    title: "Guided practice and practical projects",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="page-grid relative isolate overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(106,231,234,0.13),transparent_26rem)]" />
      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="eyebrow">Ethical Hacking Foundation · Pilot cohort</p>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-[#F4F7FA] sm:text-6xl lg:text-7xl">
              Build security skills with <span className="text-gradient-cyan">clarity.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-[16px] leading-7 text-[#A9BAC8] sm:text-lg sm:leading-8">
              A small-group, instructor-guided starting point for people who
              want to learn ethical hacking through live teaching and
              authorized, hands-on practice.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#DCE6ED]">
              {["8-week format", "Live online via Zoom", "Beginner-friendly"].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#85EFC7]" />{item}</span>)}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#programs"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#85EFC7] px-6 py-3 text-sm font-bold text-[#06201a] transition hover:-translate-y-0.5 hover:bg-[#B1F7DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071827]"
              >
                View Pilot Details
              </Link>
              <Link
                href="/enroll?intent=consultation"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-[#F4F7FA] transition hover:border-[#85EFC7]/70 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071827]"
              >
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Request Pilot Details
              </Link>
            </div>
          </div>

          <aside
            aria-label="THS learning format"
            className="surface-elevated relative overflow-hidden p-6 sm:p-8"
          >
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-200/10 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-[#85EFC7]">The learning experience</p>
            <h2 className="relative mt-3 text-2xl font-bold leading-snug tracking-[-0.03em] text-[#F4F7FA] sm:text-3xl">
              A calmer, clearer way to begin.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#A9BAC8]">
              Focused pathways pair instructor guidance with hands-on exercises
              and projects.
            </p>

            <ul className="relative mt-7 divide-y divide-white/10">
              {learningFeatures.map(({ icon: Icon, title }) => (
                <li key={title} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-200/[0.08] text-[#85EFC7]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-6 text-[#DCE6ED]">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
