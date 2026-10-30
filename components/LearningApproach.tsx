const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Build strong technical foundations with clear, structured instruction.",
  },
  {
    number: "02",
    title: "Practice",
    text: "Apply concepts through labs, exercises and guided repetition.",
  },
  {
    number: "03",
    title: "Build",
    text: "Create projects and portfolio work that prove your ability.",
  },
  {
    number: "04",
    title: "Advance",
    text: "Develop skills for real technology careers — and keep growing.",
  },
];

export default function LearningApproach() {
  return (
    <section className="section relative overflow-hidden border-y border-cyan-400/10 bg-[#030b12]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-3xl" />

      <div className="shell relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-label mb-4">
            // Learning Approach
          </div>

          <h2 className="heading-lg">
            A process designed for{" "}
            <span className="text-gradient-cyan">
              lasting skill.
            </span>
          </h2>

          <p className="body-text mx-auto mt-6 max-w-2xl">
            Technology skills are built through a process — not passive
            learning. Our approach moves learners from understanding concepts
            to applying them, building with them and advancing with confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting Line */}
          <div
            className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent md:block"
            aria-hidden="true"
          />

          <ol className="grid gap-8 md:grid-cols-4 md:gap-5">
            {steps.map((step) => (
              <li
                key={step.number}
                className="group relative text-center"
              >
                {/* Number */}
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-[#06131d] font-mono text-sm font-bold text-cyan-300 shadow-[0_0_25px_rgba(0,229,255,0.08)] transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.02] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/25 group-hover:bg-cyan-400/[0.035]">
                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[240px] text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom Philosophy */}
        <div className="mt-14 flex justify-center">
          <div className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.03] px-5 py-2.5">
            <span className="font-mono text-xs tracking-[0.12em] text-cyan-300/80">
              UNDERSTAND → PRACTICE → BUILD → ADVANCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}