import { FlaskConical, FolderGit2, Radio } from "lucide-react";

const pillars = [
  {
    icon: Radio,
    title: "Cybersecurity",
    text: "A planned learning area for a future focused pathway.",
  },
  {
    icon: FlaskConical,
    title: "Ethical Hacking",
    text: "Our current pilot focuses on authorized security-testing foundations.",
  },
  {
    icon: FolderGit2,
    title: "Data Science & AI",
    text: "A planned learning area for a future focused pathway.",
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-[#F5F8FA]">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#137E88]">
              About The Hacker Smith
            </p>
            <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#10243A] sm:text-5xl">
              Skills should feel <span className="text-[#137E88]">within reach.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-[#526477]">
              The Hacker Smith is a founder-led technology education venture.
              We are beginning with a small, instructor-guided Ethical Hacking
              Foundation pilot for learners who want structured, authorized practice.
            </p>
            <p className="mt-4 text-[16px] leading-7 text-[#526477]">
              Additional Cybersecurity and Data Science &amp; AI pathways are in
              development and are not currently open for enrollment.
            </p>
            <a
              href="#programs"
              className="mt-7 inline-flex rounded-full border border-[#137E88]/25 bg-white px-5 py-3 text-sm font-semibold text-[#137E88] transition hover:border-[#137E88] hover:bg-[#E8F8F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2"
            >
              Explore our learning areas
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="h-full rounded-2xl border border-[#DCE7ED] bg-white p-5 shadow-[0_10px_24px_rgba(26,64,83,0.05)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F8F6] text-[#137E88]">
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
