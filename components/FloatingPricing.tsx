"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Tag } from "lucide-react";

export default function FloatingPricing() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shell flex justify-center py-4 sm:justify-end sm:py-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
        >
          <Tag size={17} aria-hidden="true" />
          View Program Pricing
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center"
          onClick={() => setOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="ths-pricing-title"
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-cyan-400/20 bg-slate-950 p-6 text-white shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close pricing information"
              className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
              The Hacker Smith Programs
            </p>
            <h2 id="ths-pricing-title" className="pr-8 text-2xl font-bold tracking-tight sm:text-3xl">
              Explore six practical learning pathways
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Choose a Foundation or Career Accelerator program in Cybersecurity, Ethical Hacking, or Data Science &amp; AI.
            </p>

            <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5">
              <p className="text-sm text-slate-300">Program-specific pricing</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                View each program page for its individual fee. All prices are in USD.
              </p>
            </div>

            <div className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
              <p>Live instructor-led online sessions via Zoom</p>
              <p>Saturday and Sunday sessions</p>
              <p>Hands-on practical learning, guided assignments, and projects</p>
            </div>

            <Link
              href="/programs"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              View Programs and Pricing
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      )}
    </>
  );
}
