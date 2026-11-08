import {
  BriefcaseBusiness,
  FileText,
  Linkedin,
  MessageSquareText,
} from "lucide-react";

import { programs } from "@/data/programs";

const supportServices =
  programs.find((program) => program.pathway === "Career Accelerator")
    ?.careerSupport ?? [];

const serviceIcons = [
  FileText,
  Linkedin,
  MessageSquareText,
  BriefcaseBusiness,
];

export default function CareerSupport() {
  return (
    <section className="section bg-[#071827]">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#36B7A8]">
            Career Accelerator programs
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#F4F7FA] sm:text-4xl">
            Dedicated Career Support
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#A9BAC8]">
            Career Accelerator learners can access practical guidance as they
            prepare for technology roles.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {supportServices.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <li
                key={service.title}
                className="h-full rounded-xl border border-[#233B4D] bg-[#0D2235] p-5 sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#123047] text-[#20C9D8]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-[#F4F7FA]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#A9BAC8]">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
