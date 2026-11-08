import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  GraduationCap,
  MonitorPlay,
  ShieldCheck,
} from "lucide-react";

const focusAreas = ["Cybersecurity", "Ethical Hacking", "Data Science & AI"];

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
      className="relative isolate overflow-hidden bg-[#071827] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#20C9D8]">
              <span className="h-px w-8 bg-[#36B7A8]" aria-hidden="true" />
              Practical Technology Education
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#F4F7FA] sm:text-5xl lg:text-[3.5rem]">
              Build practical skills across{" "}
              <span className="text-[#20C9D8]">technology.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-[16px] leading-7 text-[#A9BAC8] sm:text-lg sm:leading-8">
              Designed for learners in the United States and international
              markets, THS programs build practical knowledge in Cybersecurity,
              Ethical Hacking, and Data Science &amp; AI through live
              instructor-led online training, guided practice, and projects.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Program areas">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[#233B4D] bg-[#0D2235] px-3.5 py-2 text-sm font-medium text-[#DCE6ED]"
                >
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#programs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#20C9D8] px-6 py-3 text-sm font-bold text-[#10243A] transition-colors hover:bg-[#36B7A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071827]"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/enroll?intent=consultation"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#526477] px-6 py-3 text-sm font-semibold text-[#F4F7FA] transition-colors hover:border-[#20C9D8] hover:text-[#20C9D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071827]"
              >
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Request a Free Consultation
              </Link>
            </div>
          </div>

          <aside
            aria-label="THS learning format"
            className="rounded-2xl border border-[#233B4D] bg-[#0D2235] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#36B7A8]">
              Learn with THS
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-[#F4F7FA] sm:text-3xl">
              Structured learning. Practical application.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#A9BAC8]">
              Focused pathways pair instructor guidance with hands-on exercises
              and projects.
            </p>

            <ul className="mt-7 divide-y divide-[#233B4D]">
              {learningFeatures.map(({ icon: Icon, title }) => (
                <li key={title} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#123047] text-[#20C9D8]">
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
