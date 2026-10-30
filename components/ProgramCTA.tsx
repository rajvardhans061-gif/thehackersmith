import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ProgramCTA() {
  return (
    <section className="relative overflow-hidden bg-base py-10">
      <div className="shell">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#06131d] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-400/[0.07] blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                // Find Your Path
              </p>

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Not sure which program is right for you?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 !text-white md:text-base">
  Tell us about your goals and interests. Let's explore
  the right technology learning path for you.
</p>
            </div>

            <div className="relative flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={17} />
                Talk to Us
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/programs"
                className="btn-secondary inline-flex items-center justify-center"
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