
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Tag } from "lucide-react";

export default function FloatingPricing() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating pricing button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2
          rounded-full border border-cyan-300/30 bg-cyan-400 px-5 py-3
          text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20
          transition hover:-translate-y-0.5 hover:bg-cyan-300
          focus:outline-none focus:ring-2 focus:ring-cyan-300
          focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        <Tag size={17} />
        First Cohort Pricing
      </button>

      {/* Pricing dialog */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center
            bg-black/70 p-3 backdrop-blur-sm sm:items-center"
          onClick={() => setOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="ths-pricing-title"
            className="relative max-h-[90vh] w-full max-w-lg
              overflow-y-auto rounded-2xl border border-cyan-400/20
              bg-slate-950 p-6 text-white shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close pricing"
              className="absolute right-4 top-4 rounded-lg p-2
                text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <p className="mb-3 font-mono text-xs uppercase
              tracking-[0.18em] text-cyan-300">
              THS Founding Cohort
            </p>

            <h2
              id="ths-pricing-title"
              className="pr-8 text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Ethical Hacking Foundations
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Build practical cybersecurity foundations through live
              teaching, guided labs, assignments and a final project.
            </p>

            <div className="mt-6 rounded-xl border border-cyan-400/20
              bg-cyan-400/[0.05] p-5">
              <p className="text-sm text-slate-300">Pay in full</p>
              <p className="mt-1 text-4xl font-bold">$449</p>
              <p className="mt-2 text-sm text-slate-400">
                One payment for the course.
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 p-5">
              <p className="text-sm text-slate-300">Two installments</p>
              <p className="mt-1 text-2xl font-bold">$499 total</p>
              <p className="mt-2 text-sm text-slate-400">
                $250 first payment + $249 second payment.
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                The second installment due date must be disclosed
                before enrollment.
              </p>
            </div>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>8 weeks of instruction</p>
              <p>40 hours of live online teaching</p>
              <p>Planned start: Coming Soon</p>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              The start date is planned and may be adjusted if enrollment
              needs to be extended. Students will be notified of any change.
            </p>

            <Link
              href="/enroll"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center
                justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3
                font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Enroll Now
              <ArrowRight size={18} />
            </Link>

            <p className="mt-3 text-center text-xs text-slate-500">
              Review course terms and refund policy before enrolling.
            </p>
          </section>
        </div>
      )}
    </>
  );
}
