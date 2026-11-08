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
    <section className="relative overflow-hidden bg-white py-8">
      <div className="shell">
        <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F4F7FA] px-6 py-10 md:px-10 md:py-12">
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#137E88]">
                Training &amp; Workshops
              </p>

              <h2 className="max-w-2xl text-2xl font-bold text-[#10243A] md:text-3xl">
                Bring practical technology learning to your team.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#526477] md:text-[16px]">
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
                      className="flex items-center gap-2 text-sm text-[#526477]"
                    >
                      <Icon size={16} className="text-[#137E88]" />
                      {audience.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#20C9D8] px-5 py-3 text-sm font-semibold text-[#10243A] transition-colors hover:bg-[#36B7A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137E88] focus-visible:ring-offset-2"
              >
                Request a Workshop
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/programs"
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-lg border border-[#526477] px-5 py-3 text-sm font-semibold text-[#10243A] transition-colors hover:border-[#137E88] hover:text-[#137E88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137E88] focus-visible:ring-offset-2"
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
