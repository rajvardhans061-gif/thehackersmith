import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Video } from "lucide-react";

import type { Program } from "@/data/programs";
import { formatProgramPrice } from "@/lib/commercial-config";

export default function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  const buttonClassName =
    "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-[#02141c] transition-colors hover:bg-brand-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-panel active:translate-y-px";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel p-6 shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-base text-cyan-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-surface px-3 py-1 text-xs font-semibold text-cyan-100">
          {program.pathway}
        </span>
      </div>

      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
        {program.domain}
      </p>
      <h3 className="mt-2 min-h-[3.5rem] text-xl font-bold leading-snug text-white">
        {program.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300 sm:min-h-[6rem]">
        {program.shortDescription}
      </p>

      <dl className="mt-5 space-y-3 border-y border-white/10 py-4 text-sm text-slate-200">
        <div className="flex min-h-6 items-center gap-3">
          <Clock3 className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
          <dt className="sr-only">Duration</dt>
          <dd>{program.duration}</dd>
        </div>
        <div className="flex min-h-10 items-start gap-3">
          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
          <dt className="sr-only">Schedule</dt>
          <dd>{program.deliveryFormat.schedule}</dd>
        </div>
        <div className="flex min-h-10 items-start gap-3">
          <Video className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
          <dt className="sr-only">Delivery</dt>
          <dd>{program.deliveryFormat.mode}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-5">
        <div className="rounded-xl border border-cyan-300/15 bg-base/70 p-4">
          <p className="text-xs font-medium text-slate-400">Program price</p>
          <p className="mt-1 text-lg font-bold text-white">
            {formatProgramPrice(program.priceUsd)} USD
          </p>
        </div>

        <div className="mt-4 grid gap-3">
          <Link href={`/programs/${program.slug}`} className={buttonClassName}>
            View Program
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href={`/enroll?program=${program.slug}`} className={buttonClassName}>
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  );
}
