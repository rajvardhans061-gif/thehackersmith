import {
  CalendarDays,
  FolderKanban,
  MonitorPlay,
  Wrench,
} from "lucide-react";

import { programs } from "@/data/programs";

const delivery = programs[0].deliveryFormat;
const everyProgramHasProjects = programs.every(
  (program) => program.projects.length > 0
);

const features = [
  {
    icon: MonitorPlay,
    title: "Live online instruction",
    description: delivery.mode,
  },
  {
    icon: CalendarDays,
    title: "Weekend sessions",
    description: delivery.schedule,
  },
  {
    icon: Wrench,
    title: "Hands-on practice",
    description: delivery.approach,
  },
  {
    icon: FolderKanban,
    title: "Practical projects",
    description: everyProgramHasProjects
      ? "Every pathway includes practical project work."
      : "Project work is included in selected pathways.",
  },
];

export default function LearningApproach() {
  return (
    <section className="section bg-[#F4F7FA]">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#137E88]">
            Learning Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#10243A] sm:text-4xl">
            Learn with guidance. Build through practice.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#526477]">
            Live online instruction is paired with guided exercises, feedback,
            and practical work across the program pathways.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="h-full rounded-xl border border-[#E2E8F0] bg-white p-5 sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F4F7FA] text-[#137E88]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-[16px] font-semibold text-[#10243A]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#526477]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
