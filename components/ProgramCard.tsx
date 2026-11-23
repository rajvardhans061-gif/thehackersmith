import Link from "next/link";
import { CalendarDays, Clock3, Video } from "lucide-react";

import type { Program } from "@/data/programs";
import { formatProgramPrice } from "@/lib/commercial-config";

export default function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  const buttonClassName =
    "inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#85EFC7] px-5 py-3 text-sm font-bold text-[#06201a] transition hover:-translate-y-0.5 hover:bg-[#B1F7DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85EFC7] focus-visible:ring-offset-2 focus-visible:ring-offset-panel active:translate-y-px";

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0D1D30] p-7 shadow-[0_20px_54px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-1 hover:border-[#85EFC7]/35">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#85EFC7]/[0.06] blur-3xl" />
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#85EFC7]/20 bg-[#85EFC7]/[0.07] text-[#85EFC7]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="relative rounded-full border border-[#85EFC7]/20 bg-[#85EFC7]/[0.07] px-3 py-1 text-xs font-semibold text-[#B8F8DC]">
          {program.availability}
        </span>
      </div>

      <p className="relative mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#85EFC7]">
        {program.domain}
      </p>
      <h3 className="relative mt-2 text-2xl font-bold leading-snug tracking-[-0.03em] text-white">
        {program.title}
      </h3>
      <p className="relative mt-3 text-[15px] leading-7 text-slate-300">
        {program.shortDescription}
      </p>

      <dl className="relative mt-6 grid gap-3 border-y border-white/10 py-5 text-sm text-slate-200 sm:grid-cols-3">
        <div className="flex min-h-6 items-center gap-2">
          <Clock3 className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
          <dt className="sr-only">Duration</dt>
          <dd>{program.duration}</dd>
        </div>
        <div className="flex min-h-10 items-start gap-2">
          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
          <dt className="sr-only">Schedule</dt>
          <dd>{program.deliveryFormat.schedule}</dd>
        </div>
        <div className="flex min-h-10 items-start gap-2">
          <Video className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
          <dt className="sr-only">Delivery</dt>
          <dd>{program.deliveryFormat.mode}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-5">
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
          <p className="text-xs font-medium text-slate-400">Program price</p>
          <p className="mt-1 text-lg font-bold text-white">
            {formatProgramPrice(program.priceUsd)} USD
          </p>
        </div>

        <div className="mt-4 grid gap-3">
          <Link href={`/programs/${program.slug}`} className={buttonClassName}>
            View curriculum
          </Link>
          {program.availability === "Pilot enrollment" && (
            <Link href={`/enroll?program=${program.slug}`} className={buttonClassName}>
              Request Pilot Details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
