import {
  ShieldHalf,
  Network,
  Terminal,
  Radar,
  Bot,
  Presentation,
  MonitorPlay,
  Wrench,
  Globe2,
  MessagesSquare,
} from "lucide-react";

const workshops = [
  {
    icon: ShieldHalf,
    label: "Cybersecurity Workshops",
  },
  {
    icon: Network,
    label: "Networking Workshops",
  },
  {
    icon: Terminal,
    label: "Linux Workshops",
  },
  {
    icon: Radar,
    label: "SOC Workshops",
  },
  {
    icon: Bot,
    label: "AI Workshops",
  },
  {
    icon: Presentation,
    label: "Technology Awareness",
  },
];

const highlights = [
  {
    icon: MonitorPlay,
    number: "01",
    title: "Live Demonstrations",
    text: "See concepts, technologies and workflows applied in real time.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Hands-On Exercises",
    text: "Practice during the session through guided technical activities.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Real-World Scenarios",
    text: "Learn through practical situations inspired by modern technology environments.",
  },
  {
    icon: MessagesSquare,
    number: "04",
    title: "Instructor Interaction",
    text: "Ask questions, discuss problems and receive direct instructor feedback.",
  },
];

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="section relative overflow-hidden bg-[#030b12]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/[0.03] blur-3xl" />

      <div className="shell relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="section-label mb-4">
              // Workshops
            </div>

            <h2 className="heading-lg">
              Practical workshops for{" "}
              <span className="text-gradient-cyan">
                real-world skills.
              </span>
            </h2>

            <p className="body-text mt-6 max-w-xl">
              Focused, instructor-led sessions designed around practical
              technology skills, live demonstrations and hands-on learning.
            </p>

            {/* Workshop Categories */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {workshops.map((workshop) => {
                const Icon = workshop.icon;

                return (
                  <div
                    key={workshop.label}
                    className="group flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/5">
                      <Icon
                        className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-sm font-medium text-slate-300">
                      {workshop.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#06131d]/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.06)]"
                >
                  {/* Card Number */}
                  <div className="absolute right-5 top-5 font-mono text-xs text-slate-700">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-px w-8 bg-cyan-400/40 transition-all duration-300 group-hover:w-14" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-14 border-t border-cyan-400/10 pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Built for students, professionals, institutions and technology
              teams.
            </p>

            <div className="font-mono text-xs tracking-wide text-cyan-300/70">
              LEARN → PRACTICE → BUILD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}