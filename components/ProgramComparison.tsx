import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";

import { programs } from "@/data/programs";
import type { Program } from "@/data/programs";
import { formatProgramPrice } from "@/lib/commercial-config";

const foundations = programs.filter((program) => program.pathway === "Foundation");
const accelerators = programs.filter(
  (program) => program.pathway === "Career Accelerator"
);

type FeatureCellValue = {
  text: string;
  status?: "included" | "unavailable";
};

type FeatureRow = {
  label: string;
  foundation: FeatureCellValue;
  accelerator: FeatureCellValue;
};

function sharedValue(items: string[]) {
  const uniqueItems = Array.from(new Set(items));
  return uniqueItems.length === 1 ? uniqueItems[0] : "Varies by program";
}

const foundationDuration = sharedValue(
  foundations.map((program) => program.duration)
);
const acceleratorDuration = sharedValue(
  accelerators.map((program) => program.duration)
);

const confirmedCareerSupport =
  accelerators[0]?.careerSupport?.filter((service) =>
    accelerators.every((program) =>
      program.careerSupport?.some((item) => item.title === service.title)
    )
  ) ?? [];

const featureRows: FeatureRow[] = [
  {
    label: "Program duration",
    foundation: { text: foundationDuration },
    accelerator: { text: acceleratorDuration },
  },
  {
    label: "Learning level",
    foundation: { text: "Beginner and fundamentals" },
    accelerator: { text: "Extended, deeper learning" },
  },
  {
    label: "Topic coverage",
    foundation: { text: "Core concepts and essential topics" },
    accelerator: { text: "Broader subject-specific curriculum" },
  },
  {
    label: "Learning depth",
    foundation: { text: "Introductory understanding" },
    accelerator: { text: "More detailed subject exploration" },
  },
  {
    label: "Advanced topics",
    foundation: { text: "Limited to introductory coverage" },
    accelerator: { text: "Greater scope for advanced subject topics" },
  },
  {
    label: "Practical exercises",
    foundation: {
      text: "Guided introductory exercises",
      status: "included",
    },
    accelerator: { text: "Guided practical learning", status: "included" },
  },
  {
    label: "Hands-on practice",
    foundation: {
      text: "Guided practice within the shorter program",
      status: "included",
    },
    accelerator: {
      text: "More time for practice and skill development",
      status: "included",
    },
  },
  {
    label: "Assignments",
    foundation: { text: "Guided assignments", status: "included" },
    accelerator: {
      text: "Guided assignments across a broader curriculum",
      status: "included",
    },
  },
  {
    label: "Projects",
    foundation: {
      text: foundations.every((program) => program.projects.length > 0)
        ? "Introductory, subject-specific project work"
        : "See subject program page",
      status: foundations.every((program) => program.projects.length > 0)
        ? "included"
        : undefined,
    },
    accelerator: {
      text: accelerators.every((program) =>
        program.projects.some((project) => /capstone/i.test(project))
      )
        ? "Practical projects and a capstone"
        : "See subject program page",
      status: accelerators.every((program) =>
        program.projects.some((project) => /capstone/i.test(project))
      )
        ? "included"
        : undefined,
    },
  },
  {
    label: "Instructor feedback",
    foundation: { text: "Included", status: "included" },
    accelerator: { text: "Included", status: "included" },
  },
  ...confirmedCareerSupport.map((service) => {
    const includedInFoundation = foundations.some((program) =>
      program.careerSupport?.some((item) => item.title === service.title)
    );

    return {
      label: service.title,
      foundation: {
        text: includedInFoundation ? "Included" : "Not included",
        status: includedInFoundation
          ? ("included" as const)
          : ("unavailable" as const),
      },
      accelerator: { text: "Included", status: "included" as const },
    };
  }),
];

function ProgramOption({
  program,
  mobile = false,
}: {
  program: Program;
  mobile?: boolean;
}) {
  return (
    <div
      role="cell"
      aria-label={program.pathway}
      className={`min-w-0 px-5 py-6 sm:px-7 md:px-8 md:py-7 ${
        program.pathway === "Foundation"
          ? "bg-[#0D2235]"
          : "bg-[#123047]"
      }`}
    >
      {mobile && (
        <p className="mb-2 text-sm font-semibold text-[#A9BAC8] md:hidden">
          {program.pathway}
        </p>
      )}
      <h4 className="text-[16px] font-semibold leading-6 text-[#F4F7FA] sm:text-lg">
        {program.title}
      </h4>
      <p className="mt-4 text-[16px] font-medium text-[#A9BAC8]">
        {program.duration}
      </p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-3xl">
        {formatProgramPrice(program.priceUsd)}
        <span className="ml-1 text-sm font-medium tracking-normal text-[#A9BAC8]">
          USD
        </span>
      </p>
      <Link
        href={`/programs/${program.slug}`}
        aria-label={`View ${program.title}`}
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-[16px] font-semibold text-[#20C9D8] underline-offset-4 transition-colors hover:text-[#36B7A8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2235]"
      >
        View Program
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

function FeatureValue({ value }: { value: FeatureCellValue }) {
  if (value.status === "included") {
    return (
      <span className="inline-flex items-start gap-2 font-medium text-[#F4F7FA]">
        <Check className="mt-1 h-4 w-4 shrink-0 text-[#20C9D8]" aria-hidden="true" />
        {value.text}
      </span>
    );
  }

  if (value.status === "unavailable") {
    return (
      <span className="inline-flex items-start gap-2 text-[#A9BAC8]">
        <Minus className="mt-1 h-4 w-4 shrink-0 text-[#A9BAC8]" aria-hidden="true" />
        {value.text}
      </span>
    );
  }

  return <span className="text-[#DCE6ED]">{value.text}</span>;
}

function FeatureComparison() {
  return (
    <div className="mt-12 md:mt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-[#20C9D8]">
          What each pathway includes
        </p>
        <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#F4F7FA] sm:text-4xl">
          Compare the learning experience
        </h3>
        <p className="mt-4 text-[16px] leading-relaxed text-[#A9BAC8] md:text-lg">
          Both pathways include guided learning and instructor feedback. The
          six-month Career Accelerator goes further with broader curricula,
          more time to practice, and career preparation support.
        </p>
      </div>

      <div
        role="table"
        aria-label="Foundation and Career Accelerator feature comparison"
        className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border border-[#233B4D] bg-[#0D2235]"
      >
        <div role="rowgroup" className="hidden md:block">
          <div
            role="row"
            className="grid grid-cols-[minmax(220px,0.72fr)_minmax(0,1.14fr)_minmax(0,1.14fr)] border-b border-[#233B4D]"
          >
            <div role="columnheader" className="px-7 py-6 text-[16px] font-semibold text-[#F4F7FA]">
              Feature
            </div>
            <div role="columnheader" className="border-l border-[#233B4D] px-7 py-6 text-lg font-semibold text-[#F4F7FA]">
              Foundation
            </div>
            <div role="columnheader" className="border-l border-[#233B4D] bg-[#123047] px-7 py-6 text-lg font-semibold text-[#F4F7FA]">
              Career Accelerator
            </div>
          </div>
        </div>

        <div role="rowgroup">
          {featureRows.map((row, index) => (
            <div
              role="row"
              key={row.label}
              className={`grid grid-cols-1 md:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.14fr)_minmax(0,1.14fr)] ${
                index < featureRows.length - 1 ? "border-b border-[#233B4D]" : ""
              }`}
            >
              <h4
                role="rowheader"
                className="bg-[#071827] px-5 py-4 text-[16px] font-semibold text-[#F4F7FA] sm:px-6 md:flex md:items-center md:border-b md:border-[#233B4D] md:bg-[#0D2235] md:py-5 md:text-[16px]"
              >
                {row.label}
              </h4>
              <div role="cell" aria-label="Foundation" className="border-t border-[#233B4D] bg-[#0D2235] px-5 py-4 text-[16px] leading-7 sm:px-6 md:border-l md:border-t-0 md:px-7 md:py-5">
                <p className="mb-2 text-sm font-semibold text-[#A9BAC8] md:hidden">
                  Foundation
                </p>
                <FeatureValue value={row.foundation} />
              </div>
              <div role="cell" aria-label="Career Accelerator" className="border-t border-[#233B4D] bg-[#123047] px-5 py-4 text-[16px] leading-7 sm:px-6 md:border-l md:border-t-0 md:px-7 md:py-5">
                <p className="mb-2 text-sm font-semibold text-[#20C9D8] md:hidden">
                  Career Accelerator
                </p>
                <FeatureValue value={row.accelerator} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-4 max-w-5xl text-sm leading-6 text-[#A9BAC8]">
        Career preparation provides guidance; it does not guarantee a job or
        employment outcome. Review each program page for its subject-specific
        curriculum and projects.
      </p>
    </div>
  );
}

export default function ProgramComparison() {
  const comparisonRows = foundations.flatMap((foundation) => {
    const accelerator = programs.find(
      (program) =>
        program.domain === foundation.domain &&
        program.pathway === "Career Accelerator"
    );

    return accelerator ? [{ foundation, accelerator }] : [];
  });

  return (
    <section
      id="program-comparison"
      className="section bg-[#071827] pb-28 md:pb-24"
    >
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#20C9D8]">
            Choose a pathway
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#F4F7FA] sm:text-4xl">
            Foundation or Career Accelerator?
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#A9BAC8] md:text-lg">
            Foundation builds an introduction to each subject. Career
            Accelerator extends the learning over a longer program and adds
            career preparation. Its broader curriculum and confirmed support
            make it a more extensive offering. The published fees differ with
            these distinct program lengths and scopes; each catalog price is
            shown below.
          </p>
        </div>

        <div
          role="table"
          aria-label="Compare Foundation and Career Accelerator programs by subject"
          className="mx-auto mt-9 max-w-6xl overflow-hidden rounded-2xl border border-[#233B4D] bg-[#0D2235] md:mt-12"
        >
          <div role="rowgroup" className="hidden md:block">
            <div
              role="row"
              className="grid grid-cols-[minmax(190px,0.72fr)_minmax(0,1.14fr)_minmax(0,1.14fr)] border-b border-[#233B4D] bg-[#0D2235]"
            >
              <div role="columnheader" className="px-7 py-6 text-[16px] font-semibold text-[#F4F7FA]">
                Subject
              </div>
              <div role="columnheader" className="border-l border-[#233B4D] px-7 py-6 text-lg font-semibold text-[#F4F7FA]">
                Foundation
              </div>
              <div role="columnheader" className="border-l border-[#233B4D] bg-[#123047] px-7 py-6 text-lg font-semibold text-[#F4F7FA]">
                Career Accelerator
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {comparisonRows.map(({ foundation, accelerator }, index) => (
              <article
                role="row"
                key={foundation.domain}
                className={`grid grid-cols-1 md:grid-cols-[minmax(190px,0.72fr)_minmax(0,1.14fr)_minmax(0,1.14fr)] ${
                  index < comparisonRows.length - 1
                    ? "border-b border-[#233B4D]"
                    : ""
                }`}
              >
                <h3
                  role="rowheader"
                  className="bg-[#0D2235] px-4 pb-1 pt-5 text-sm font-semibold text-[#20C9D8] sm:px-6 md:flex md:items-center md:py-6 md:text-[16px]"
                >
                  {foundation.domain}
                </h3>
                <div
                  role="presentation"
                  className="border-t border-[#233B4D] md:border-l md:border-t-0"
                >
                  <ProgramOption program={foundation} mobile />
                </div>
                <div
                  role="presentation"
                  className="border-t border-[#233B4D] md:border-l md:border-t-0"
                >
                  <ProgramOption program={accelerator} mobile />
                </div>
              </article>
            ))}
          </div>
        </div>

        <FeatureComparison />

        <div className="mt-12 grid items-start gap-6 xl:grid-cols-2">
          <article className="rounded-2xl border border-[#233B4D] bg-[#0D2235] p-6 sm:p-8">
            <p className="text-[16px] font-semibold text-[#20C9D8]">Foundation</p>
            <h3 className="mt-2 text-2xl font-bold text-[#F4F7FA]">
              Build Your Fundamentals
            </h3>
            <p className="mt-3 text-[16px] leading-7 text-[#DCE6ED]">
              A shorter introduction to each subject, focused on its
              fundamentals rather than the same depth as the six-month program.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Essential concepts, core tools and techniques",
                "Guided practical exercises and assignments",
                "Instructor feedback",
                "Introductory, subject-specific project work",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[16px] leading-6 text-[#F4F7FA]"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[#20C9D8]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-[#233B4D] pt-4 text-sm leading-6 text-[#A9BAC8]">
              Career preparation support is not included in Foundation.
            </p>
          </article>

          <article className="rounded-2xl border border-[#20C9D8]/30 bg-[#123047] p-6 sm:p-8">
            <p className="text-[16px] font-semibold text-[#20C9D8]">
              Career Accelerator
            </p>
            <h3 className="mt-2 text-2xl font-bold leading-tight text-[#F4F7FA] sm:text-3xl">
              Go Deeper and Prepare for Career Opportunities
            </h3>
            <p className="mt-3 text-[16px] leading-7 text-[#DCE6ED]">
              An extended learning pathway with more opportunity to explore
              subject topics in depth and time for practice and skill
              development. It also includes career preparation support.
            </p>
            <ul className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {confirmedCareerSupport.map((service) => (
                <li
                  key={service.title}
                  className="flex items-start gap-3 text-[16px] leading-6 text-[#F4F7FA]"
                >
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-[#20C9D8]"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-semibold">{service.title}:</span>{" "}
                    {service.description}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mx-auto mt-5 max-w-5xl text-sm leading-6 text-[#A9BAC8]">
          Both pathways include practical learning and instructor feedback.
          Career support is preparation guidance, not a guarantee of
          employment. Visit each program page for its full subject-specific
          curriculum and projects.
        </p>
      </div>
    </section>
  );
}
