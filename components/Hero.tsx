import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  GraduationCap,
  Code2,
  BrainCircuit,
  Network,
  Cloud,
} from "lucide-react";

const technologyTags = [
  "Cybersecurity",
  "Ethical Hacking",
  "Data Science & AI",
];

const learningModel = [
  {
    number: "01",
    title: "Learn",
    description: "Build strong technical foundations.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Practice",
    description: "Apply concepts through practical work.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Build",
    description: "Create projects with real technology.",
    icon: Network,
  },
  {
    number: "04",
    title: "Advance",
    description: "Turn skills into career opportunities.",
    icon: BrainCircuit,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#02080f] pt-28 pb-10 md:pt-32 md:pb-12 lg:min-h-0 lg:pt-36"
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#00e5ff]/[0.07] blur-[150px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute top-[35%] -right-64 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[140px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-[-200px] h-[350px] w-[350px] rounded-full bg-blue-500/[0.035] blur-[130px]"
        aria-hidden="true"
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="shell relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* =====================================================
              LEFT — HERO CONTENT
          ===================================================== */}

          <div className="animate-fade-up">

            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.8)]" />

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00e5ff] sm:text-xs">
                Practical Technology Education
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-[44px] font-bold leading-[1] tracking-[-0.04em] text-white sm:text-[54px] md:text-[62px] lg:text-[68px] xl:text-[72px]">
              Build Skills.
              <br />

              <span className="text-white">
                Build Careers.
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#00e5ff] via-[#27edff] to-[#73f5ff] bg-clip-text text-transparent">
                Build With Technology.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-[16px] leading-7 text-[#a7b5bd] sm:text-[17px] sm:leading-8">
              Practical, instructor-led technology education designed to help
              students, professionals, and organizations build real-world
              skills through focused learning in{" "}
              <span className="font-medium text-white">
                Cybersecurity, Ethical Hacking, and Data Science & AI.
              </span>
            </p>

            {/* Technology Tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {technologyTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-1.5 text-xs font-medium text-[#a7b5bd] transition hover:border-cyan-400/30 hover:text-[#00e5ff]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#programs"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#00e5ff] px-6 py-3.5 text-sm font-bold text-[#02080f] shadow-[0_10px_35px_rgba(0,229,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#38edff] hover:shadow-[0_14px_40px_rgba(0,229,255,0.28)]"
              >
                Explore Programs

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="#about"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
              >
                Discover The Hacker Smith

                <ArrowUpRight
                  className="h-4 w-4 text-[#00e5ff] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-white/[0.07] pt-7 sm:grid-cols-3 sm:gap-6">

              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05]">
                  <ShieldCheck className="h-4 w-4 text-[#00e5ff]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white">
                    Hands-on Learning
                  </p>

                  <p className="text-[11px] text-[#6f818b]">
                    Practical Training
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05]">
                  <Activity className="h-4 w-4 text-[#00e5ff]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white">
                    Live Instruction
                  </p>

                  <p className="text-[11px] text-[#6f818b]">
                    Expert-led Training
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05]">
                  <GraduationCap className="h-4 w-4 text-[#00e5ff]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white">
                    Career Focused
                  </p>

                  <p className="text-[11px] text-[#6f818b]">
                    Industry-Relevant Skills
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =====================================================
              RIGHT — THS LEARNING MODEL
          ===================================================== */}

          <div
            className="relative animate-fade-up lg:pl-4"
            style={{ animationDelay: "0.15s" }}
          >

            {/* Background glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[110px]"
              aria-hidden="true"
            />

            {/* Main learning card */}
            <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[#06131d]/85 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45),0_0_50px_rgba(0,229,255,0.05)] backdrop-blur-xl sm:p-7">

              {/* Top label */}
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00e5ff]">
                    The THS Approach
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Learn. Practice. Build. Advance.
                  </h2>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] sm:flex">
                  <BrainCircuit className="h-5 w-5 text-[#00e5ff]" />
                </div>
              </div>

              {/* Learning Model */}
              <div className="mt-6 space-y-3">
                {learningModel.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="group relative flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-cyan-400/[0.035]"
                    >
                      {/* Connector */}
                      {index < learningModel.length - 1 && (
                        <div className="absolute bottom-[-13px] left-[31px] z-10 h-3 w-px bg-cyan-400/20" />
                      )}

                      {/* Number */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-[#02080f] font-mono text-[10px] font-semibold text-[#00e5ff]">
                        {item.number}
                      </div>

                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/[0.05]">
                        <Icon className="h-4 w-4 text-[#00e5ff]" />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-xs leading-5 text-[#6f818b]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Core areas */}
              <div className="mt-6 border-t border-white/[0.07] pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f818b]">
                  Core Technology Areas
                </p>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <ShieldCheck className="h-4 w-4 text-[#00e5ff]" />

                    <p className="mt-2 text-[11px] font-semibold text-white">
                      Cybersecurity
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <Code2 className="h-4 w-4 text-[#00e5ff]" />

                    <p className="mt-2 text-[11px] font-semibold text-white">
                      Ethical Hacking
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <BrainCircuit className="h-4 w-4 text-[#00e5ff]" />

                    <p className="mt-2 text-[11px] font-semibold text-white">
                      Data & AI
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom status */}
              <div className="mt-5 flex items-center justify-between rounded-xl border border-cyan-400/10 bg-cyan-400/[0.035] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00e676] shadow-[0_0_9px_rgba(0,230,118,0.7)]" />

                  <span className="font-mono text-[10px] text-[#a7b5bd]">
                    PRACTICAL • CAREER-FOCUSED
                  </span>
                </div>

                <span className="font-mono text-[10px] text-[#00e5ff]">
                  THS
                </span>
              </div>
            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-5 -left-4 z-20 hidden rounded-2xl border border-cyan-400/15 bg-[#06131d]/95 px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:block">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/[0.06]">
                  <Cloud className="h-4 w-4 text-[#00e5ff]" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6f818b]">
                    Technology
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-white">
                    Learn With Purpose
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-medium uppercase tracking-[0.25em] text-[#52656f] lg:flex">
        <span className="h-px w-8 bg-[#52656f]/50" />
        Explore
        <span className="h-px w-8 bg-[#52656f]/50" />
      </div>
    </section>
  );
}