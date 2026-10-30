import Link from "next/link";
import {
  ArrowRight,
  Users,
  Building2,
  GraduationCap,
} from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Students & Learners" },
  { icon: Building2, label: "Institutions & Colleges" },
  { icon: Users, label: "Corporate Teams" },
];

export default function WorkshopCTA() {
  return (
    <section className="relative overflow-hidden bg-base py-10">
      <div className="shell">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#06131d] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-400/[0.07] blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                // Training & Workshops
              </p>

              <h2 className="max-w-2xl text-2xl font-bold text-white md:text-3xl">
                Bring practical technology learning to your team.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 !text-white md:text-base">
                Looking for a workshop, institutional program or customized
                technology training? Let's discuss your audience, learning
                objectives and requirements.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {audiences.map((audience) => {
                  const Icon = audience.icon;

                  return (
                    <div
                      key={audience.label}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <Icon size={16} className="text-cyan-300" />
                      {audience.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Request a Workshop
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/programs"
                className="btn-secondary inline-flex items-center justify-center whitespace-nowrap"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}