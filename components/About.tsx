import { ArrowUpRight, FlaskConical, FolderGit2, Radio } from "lucide-react";

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
    <section id="about" className="section bg-white">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#137E88]">
              About The Hacker Smith
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10243A] sm:text-4xl">
              Learn through practice. Build with purpose.
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-[#526477]">
              The Hacker Smith offers practical technology education across
              Cybersecurity, Ethical Hacking, and Data Science &amp; AI.
              Instructor-led learning is supported by guided exercises and
              projects that help learners apply the concepts they study.
            </p>
            <p className="mt-4 text-[16px] leading-7 text-[#526477]">
              Programs are delivered online, with Foundation and Career
              Accelerator pathways for different learning goals.
            </p>
            <a
              href="#programs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#137E88] transition-colors hover:text-[#10243A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2"
            >
              Explore our learning areas
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="h-full rounded-xl border border-[#E2E8F0] bg-[#F4F7FA] p-5"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#137E88] shadow-sm">
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
      </div>
    </section>
  );
}
