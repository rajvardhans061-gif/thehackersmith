import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { getProgramBySlug, programs } from "@/data/programs";

type ProgramPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return {
      title: "Program Not Found | The Hacker Smith",
    };
  }

  return {
    title: `${program.title} | The Hacker Smith`,
    description: program.description,
  };
}

export default async function ProgramPage({
  params,
}: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const Icon = program.icon;

  return (
    <main className="min-h-screen bg-base">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-cyan-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,229,255,0.10),transparent_35%)]" />

        <div className="shell relative py-20 md:py-28">
          <Link
            href="/programs"
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft size={16} />
            Back to Programs
          </Link>

          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/5 text-cyan-300">
                <Icon size={28} strokeWidth={1.8} />
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {program.category}
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  {program.level} · {program.format}
                </div>
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              {program.title}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
              {program.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
            {/* Main */}
            <div className="space-y-8">
              {/* Overview */}
              <div className="glass-card p-7 md:p-9">
                <div className="section-label mb-4">
                  // Program Overview
                </div>

                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Build practical technology skills.
                </h2>

                <p className="text-base leading-8 text-slate-400">
                  {program.overview}
                </p>
              </div>

              {/* Topics */}
              <div className="glass-card p-7 md:p-9">
                <div className="section-label mb-5">
                  // What You Will Learn
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {program.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-start gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.02] p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-cyan-400"
                      />

                      <span className="text-sm leading-6 text-slate-300">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="glass-card p-7 md:p-9">
                <div className="section-label mb-5">
                  // Learning Outcomes
                </div>

                <div className="space-y-4">
                  {program.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-cyan-400"
                      />

                      <p className="text-sm leading-7 text-slate-400">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-2xl border border-cyan-400/20 bg-panel/80 p-7 backdrop-blur-md">
                <div className="mb-6">
                  <div className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                    The THS Approach
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    Learn → Practice → Build → Advance
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    "Learn the concepts",
                    "Practice with hands-on exercises",
                    "Build practical projects",
                    "Advance your technical skills",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 font-mono text-xs text-cyan-300">
                        0{index + 1}
                      </span>

                      <span className="pt-1 text-sm leading-6 text-slate-400">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="my-7 h-px bg-white/5" />

                <Link
                  href="/#contact"
                  className="btn-primary flex w-full items-center justify-center gap-2"
                >
                  Enquire About This Program
                  <ArrowRight size={17} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}