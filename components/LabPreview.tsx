import {
  FlaskConical,
  PlayCircle,
  TerminalSquare,
  FolderKanban,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const labFeatures = [
  {
    icon: TerminalSquare,
    title: "Practice Environments",
    text: "Work with realistic technical environments designed for guided practice.",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Exercises",
    text: "Apply concepts through structured exercises instead of passive learning.",
  },
  {
    icon: FolderKanban,
    title: "Project-Based Learning",
    text: "Turn technical knowledge into practical projects and portfolio work.",
  },
];

const labSteps = [
  "Understand the concept",
  "Follow the guided exercise",
  "Apply the skill in practice",
  "Document what you built",
];

export default function LabPreview() {
  return (
    <section className="section relative overflow-hidden bg-base">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-400/[0.04] blur-3xl" />

      <div className="shell relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-label mb-4">
            // Hands-On Learning
          </div>

          <h2 className="heading-lg">
            Learn by{" "}
            <span className="text-gradient-cyan">
              doing.
            </span>
          </h2>

          <p className="body-text mx-auto mt-6 max-w-2xl">
            Practical learning environments help you move beyond theory.
            Practice concepts, work through guided exercises and build
            technology projects that demonstrate your skills.
          </p>
        </div>

        {/* Main Preview */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#06131d]/80 shadow-[0_0_50px_rgba(0,229,255,0.05)] backdrop-blur-md">
          {/* Preview Header */}
          <div className="flex items-center justify-between border-b border-cyan-400/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                <FlaskConical size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  THS Practical Learning Environment
                </p>
                <p className="text-xs text-slate-500">
                  Guided hands-on experience
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-slate-500">
                PRACTICE MODE
              </span>
            </div>
          </div>

          {/* Preview Content */}
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div className="border-b border-cyan-400/10 p-7 lg:border-b-0 lg:border-r md:p-9">
              <div className="mb-7">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                  Learning Workflow
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  From concept to practical skill.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                  Each learning experience is structured to help you
                  understand the concept, practice it and create something
                  useful with it.
                </p>
              </div>

              <div className="space-y-3">
                {labSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.02] p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 font-mono text-xs text-cyan-300">
                      0{index + 1}
                    </div>

                    <span className="text-sm text-slate-300">
                      {step}
                    </span>

                    {index < 3 && (
                      <CheckCircle2
                        size={16}
                        className="ml-auto text-cyan-400/60"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="p-7 md:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                What You Experience
              </p>

              <div className="mt-6 space-y-4">
                {labFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="group rounded-xl border border-cyan-400/10 bg-cyan-400/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/5 text-cyan-300">
                          <Icon size={19} />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {feature.title}
                          </h4>

                          <p className="mt-1.5 text-sm leading-6 text-slate-400">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center gap-2 font-mono text-xs text-cyan-300/70">
                <PlayCircle size={15} />
                Learn through practice, not just theory.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.02] px-5 py-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            Practical environments designed around real technology skills.
          </p>

          <a
            href="#programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
          >
            Explore Programs
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}