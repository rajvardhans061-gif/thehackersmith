import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, Video } from "lucide-react";

import { getProgramBySlug, programs } from "@/data/programs";
import { formatProgramPrice } from "@/lib/commercial-config";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return { title: "Program Not Found | The Hacker Smith" };
  }

  return {
    title: `${program.title} | The Hacker Smith`,
    description: program.shortDescription,
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) notFound();

  const Icon = program.icon;

  return (
    <main className="min-h-screen bg-base">
      <section className="relative overflow-hidden border-b border-cyan-400/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,229,255,0.10),transparent_35%)]" />
        <div className="shell relative py-16 md:py-24">
          <Link
            href="/programs"
            className="mb-9 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft size={16} /> Back to Programs
          </Link>

          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/5 text-cyan-300">
                <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {program.domain}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {program.pathway} <span aria-hidden="true">·</span> {program.duration}
                </p>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              {program.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {program.shortDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/enroll?program=${program.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                {program.ctaLabel}
                <ArrowRight size={17} />
              </Link>
              <span className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 px-5 py-3 text-sm font-semibold text-cyan-100">
                {formatProgramPrice(program.priceUsd)} USD
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="space-y-8">
            <section className="glass-card p-6 md:p-8">
              <p className="section-label mb-4">Program overview</p>
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Practical Technology Education
              </h2>
              <p className="text-base leading-8 text-slate-300">
                {program.fullDescription}
              </p>
            </section>

            <section className="glass-card p-6 md:p-8">
              <p className="section-label mb-5">Curriculum and modules</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {program.modules.map((module, index) => (
                  <article
                    key={module.title}
                    className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.02] p-5"
                  >
                    <p className="font-mono text-xs text-cyan-300">
                      MODULE {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-semibold text-white">
                      {module.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm leading-6 text-slate-400">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="glass-card p-6 md:p-8">
              <p className="section-label mb-5">Learning outcomes</p>
              <ul className="space-y-3">
                {program.learningOutcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card p-6 md:p-8">
              <p className="section-label mb-5">Practical learning</p>
              <ul className="space-y-3">
                {program.practicalActivities.map((activity) => (
                  <li key={activity} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                    {activity}
                  </li>
                ))}
              </ul>
              <h3 className="mt-7 font-semibold text-white">Projects and assessment</h3>
              <ul className="mt-3 space-y-2">
                {program.projects.map((project) => (
                  <li key={project} className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                    {project}
                  </li>
                ))}
              </ul>
            </section>

            {program.careerSupport && (
              <section className="rounded-2xl border border-cyan-400/25 bg-[#06131d] p-6 md:p-8">
                <p className="section-label mb-2">Career preparation</p>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Dedicated Career Support
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  Practical guidance to help you prepare your application materials, communicate your skills, and approach a job search.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {program.careerSupport.map((service) => (
                    <div key={service.title} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                      <h3 className="font-semibold text-cyan-100">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-2xl border border-cyan-400/20 bg-panel/80 p-6 backdrop-blur-md md:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                Program format
              </p>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {program.duration}
                </div>
                <div className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                  <Video className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {program.deliveryFormat.mode}; {program.deliveryFormat.schedule}. {program.deliveryFormat.approach}
                </div>
              </div>
              <div className="my-6 h-px bg-white/[0.08]" />
              <p className="text-sm font-semibold text-white">
                {formatProgramPrice(program.priceUsd)} USD
              </p>
              <Link
                href={`/enroll?program=${program.slug}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                {program.ctaLabel}
                <ArrowRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
