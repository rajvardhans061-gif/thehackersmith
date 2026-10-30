import {
  Radio,
  FlaskConical,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    icon: Radio,
    title: "Cybersecurity",
    text: "Build practical skills in security operations, network defense, incident response, and modern cybersecurity.",
  },
  {
    icon: FlaskConical,
    title: "Ethical Hacking",
    text: "Learn penetration testing, vulnerability assessment, and web security through practical, authorized training.",
  },
  {
    icon: FolderGit2,
    title: "Data Science & AI",
    text: "Develop practical skills in data analysis, machine learning, AI tools, and real-world applications.",
  },
];

export default function About() {
  return (
    <section id="about" className="section !pb-12 md:!pb-16">
      <div className="shell">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">

          {/* =====================================================
              LEFT — INTRODUCTION
          ===================================================== */}

          <div>
            <p className="section-label mb-4">
              {"// Why The Hacker Smith"}
            </p>

            <h2 className="heading-lg">
              Learn.{" "}
              <span className="text-brand">
                Practice.
              </span>{" "}
              Build.
            </h2>

            <p className="body-text mt-6">
              The Hacker Smith focuses on practical learning instead of
              passive theory. Every program is designed around one simple
              learning loop:
            </p>

            <div className="mt-5 inline-flex items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-3">
              <span className="font-mono text-sm font-medium text-[#00e5ff]">
                learn → practice → build → advance
              </span>
            </div>

            <p className="body-text mt-5">
              You don't just study technology — you work with it through
              hands-on learning, real-world scenarios, practical projects,
              and career-focused training.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#8f9fa8]">
              Explore our core technology areas
              <ArrowUpRight className="h-4 w-4 text-[#00e5ff]" />
            </div>
          </div>

          {/* =====================================================
              RIGHT — CORE AREAS
          ===================================================== */}

          <div className="grid items-start gap-4 sm:grid-cols-3">

            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="glass-card card-hover self-start !h-fit !min-h-0 p-5 pb-5"
                >
                  {/* Number */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] text-[#00e5ff]">
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-mono text-[10px] text-[#52656f]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-[#8f9fa8]">
                    {pillar.text}
                  </p>

                  <div className="mt-5 h-px w-8 bg-cyan-400/30" />
                </article>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}