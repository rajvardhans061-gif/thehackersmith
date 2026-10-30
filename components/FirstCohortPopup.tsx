
"use client";

import { useEffect, useState } from "react";
import { X, GraduationCap, Clock3, CalendarDays, ArrowRight } from "lucide-react";

const SESSION_KEY = "ths_first_cohort_popup_shown";

export default function FirstCohortPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // Continue if session storage is unavailable.
    }

    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // The popup can still open if storage is unavailable.
      }

      setIsOpen(true);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSubmitting) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, isSubmitting]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          contactNumber: contactNumber.trim(),
          experienceLevel,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            result.error ||
            "We couldn't submit your request. Please try again."
        );
      }

      setSuccess(
        "Thank you! Your enrollment inquiry has been submitted successfully. We'll follow up with you."
      );

      setName("");
      setEmail("");
      setContactNumber("");
      setExperienceLevel("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isSubmitting) {
          setIsOpen(false);
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="first-cohort-title"
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#06131d] shadow-[0_25px_100px_rgba(0,0,0,0.65),0_0_45px_rgba(0,229,255,0.08)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]"
        />

        <div className="relative p-5 sm:p-7">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            disabled={isSubmitting}
            aria-label="Close enrollment popup"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#a7b5bd] transition hover:border-cyan-400/30 hover:text-white disabled:opacity-50"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-5 flex items-center gap-3 pr-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07]">
              <GraduationCap className="h-6 w-6 text-[#00e5ff]" />
            </div>

            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00e5ff]">
                The Hacker Smith
              </p>
              <p className="mt-1 text-xs text-[#a7b5bd]">
                First Cohort Enrollment
              </p>
            </div>
          </div>

          <div className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#00e5ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]" />
              Ethical Hacking Foundations
            </span>

            <h2
              id="first-cohort-title"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
            >
              Start building
              <span className="block text-[#00e5ff]">
                real-world skills.
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#a7b5bd]">
              Get details about our instructor-led ethical hacking program and
              the upcoming cohort.
            </p>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
              <CalendarDays className="mb-2 h-4 w-4 text-[#00e5ff]" />
              <p className="text-sm font-semibold text-white">8 Weeks</p>
              <p className="mt-1 text-[10px] text-[#8296a3]">Program length</p>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
              <Clock3 className="mb-2 h-4 w-4 text-[#00e5ff]" />
              <p className="text-sm font-semibold text-white">40 Hours</p>
              <p className="mt-1 text-[10px] text-[#8296a3]">Live training</p>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
              <GraduationCap className="mb-2 h-4 w-4 text-[#00e5ff]" />
              <p className="text-sm font-semibold text-white">Practical</p>
              <p className="mt-1 text-[10px] text-[#8296a3]">Hands-on learning</p>
            </div>
          </div>

          {success ? (
            <div
              role="status"
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-5"
            >
              <p className="font-semibold text-[#00e5ff]">
                Inquiry submitted!
              </p>
              <p className="mt-2 text-sm leading-6 text-[#c1d0d7]">
                {success}
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full bg-[#00e5ff] px-5 py-2.5 text-sm font-bold text-[#02080f] transition hover:bg-[#38edff]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="ths-popup-name"
                  className="mb-1.5 block text-xs font-medium text-[#d5e0e5]"
                >
                  Full name
                </label>
                <input
                  id="ths-popup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-[#020b13] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#627681] focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="ths-popup-email"
                  className="mb-1.5 block text-xs font-medium text-[#d5e0e5]"
                >
                  Email address
                </label>
                <input
                  id="ths-popup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#020b13] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#627681] focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="ths-popup-contact"
                  className="mb-1.5 block text-xs font-medium text-[#d5e0e5]"
                >
                  Contact number
                </label>
                <input
                  id="ths-popup-contact"
                  name="contactNumber"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={30}
                  value={contactNumber}
                  onChange={(event) => setContactNumber(event.target.value)}
                  placeholder="Include country code"
                  className="w-full rounded-xl border border-white/10 bg-[#020b13] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#627681] focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="ths-popup-experience"
                  className="mb-1.5 block text-xs font-medium text-[#d5e0e5]"
                >
                  Current experience level
                </label>
                <select
                  id="ths-popup-experience"
                  name="experienceLevel"
                  required
                  value={experienceLevel}
                  onChange={(event) => setExperienceLevel(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#020b13] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                >
                  <option value="" disabled>
                    Select your experience level
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Student">Student</option>
                  <option value="Working Professional">
                    Working Professional
                  </option>
                  <option value="Career Switcher">Career Switcher</option>
                  <option value="IT Professional">IT Professional</option>
                </select>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-400/20 bg-red-400/[0.06] p-3 text-sm text-red-300"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#00e5ff] px-5 py-3.5 text-sm font-bold text-[#02080f] shadow-[0_8px_30px_rgba(0,229,255,0.12)] transition hover:-translate-y-0.5 hover:bg-[#38edff] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Request Enrollment Details"}
                {!isSubmitting && (
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>

              <p className="pt-1 text-center text-[10px] leading-4 text-[#8296a3]">
                Submitting requests information only. It does not reserve a
                seat or process payment. Your details will be used to follow
                up on your inquiry.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
