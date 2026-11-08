import {
  Bot,
  Globe2,
  MessagesSquare,
  MonitorPlay,
  Network,
  Presentation,
  Radar,
  ShieldHalf,
  Terminal,
  Wrench,
} from "lucide-react";

const workshops = [
  { icon: ShieldHalf, label: "Cybersecurity Workshops" },
  { icon: Network, label: "Networking Workshops" },
  { icon: Terminal, label: "Linux Workshops" },
  { icon: Radar, label: "SOC Workshops" },
  { icon: Bot, label: "AI Workshops" },
  { icon: Presentation, label: "Technology Awareness" },
];

const highlights = [
  {
    icon: MonitorPlay,
    title: "Live Demonstrations",
    text: "See concepts, technologies and workflows applied in real time.",
  },
  {
    icon: Wrench,
    title: "Hands-On Exercises",
    text: "Practice during the session through guided technical activities.",
  },
  {
    icon: Globe2,
    title: "Applied Scenarios",
    text: "Learn through practical situations inspired by modern technology environments.",
  },
  {
    icon: MessagesSquare,
    title: "Instructor Interaction",
    text: "Ask questions, discuss problems and receive direct instructor feedback.",
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="section bg-white">
      <div className="shell">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#137E88]">
              Workshops
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#10243A] sm:text-4xl">
              Practical workshops for modern technology.
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-7 text-[#526477]">
              Focused instructor-led sessions built around practical
              technology skills, live demonstrations, and hands-on learning.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {workshops.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-[#E2E8F0] bg-[#F4F7FA] px-4 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#137E88]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-[#10243A]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="h-full rounded-xl border border-[#E2E8F0] bg-[#F4F7FA] p-5 sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#137E88]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#10243A]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#526477]">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#526477]">
            For students, professionals, institutions, and technology teams.
          </p>
          <p className="font-mono text-xs tracking-wide text-[#137E88]">
            LEARN · PRACTICE · BUILD
          </p>
        </div>
      </div>
    </section>
  );
}
