
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  getProgramBySlug,
  getProgramSlugFromSearch,
  programs,
} from "@/data/programs";

const experienceOptions = [
  "Beginner",
  "Student",
  "IT or networking experience",
  "Cybersecurity experience",
  "Career changer",
];

export default function EnrollmentForm() {
  const [experience, setExperience] = useState("Beginner");
  const [programSlug, setProgramSlug] = useState(programs[0].slug);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [consultationRequest, setConsultationRequest] = useState(false);
  const [goal, setGoal] = useState("");

  useEffect(() => {
    setProgramSlug(getProgramSlugFromSearch(window.location.search));
    const isConsultation =
      new URLSearchParams(window.location.search).get("intent") ===
      "consultation";
    setConsultationRequest(isConsultation);
    if (isConsultation) {
      const requestedProgram =
        getProgramBySlug(getProgramSlugFromSearch(window.location.search)) ??
        programs[0];
      setGoal(
        `I would like to request a free consultation about ${requestedProgram.title}.`
      );
    }
  }, []);

  const selectedProgram = getProgramBySlug(programSlug) ?? programs[0];
  const selectedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(selectedProgram.priceUsd);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (busy) return;

    const form = event.currentTarget;
    const values = new FormData(form);

    const name = String(values.get("name") || "").trim();
    const email = String(values.get("email") || "").trim();
    const contactNumber = String(
      values.get("contactNumber") || ""
    ).trim();
    const goal = String(values.get("goal") || "").trim();
    const website = String(values.get("website") || "").trim();

    setBusy(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contactNumber,
          experienceLevel: experience,
          programSlug: selectedProgram.slug,
          goal,
          website,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.error || "We couldn't submit your request."
        );
      }

      form.reset();
      setExperience("Beginner");
      setProgramSlug(programs[0].slug);
      setGoal("");
      setSuccess(true);

      setStatus(
        "Thank you! Your inquiry has been received. Our team will follow up with program information and next steps, including your free consultation request if you included one."
      );
    } catch (error) {
      setSuccess(false);

      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setBusy(false);
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-cyan-400/15 bg-slate-950 " +
    "px-4 py-3 text-white placeholder:text-slate-500 outline-none " +
    "transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400";

  return (
    <section id="enroll" className="bg-base">
      <div className="shell">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl rounded-2xl border border-cyan-400/20 bg-panel/80 p-6 shadow-[0_0_35px_rgba(0,229,255,0.05)] backdrop-blur-md sm:p-8"
        >
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
              Program enrollment inquiry
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Enquire about a program
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Choose from six Foundation and Career Accelerator programs.
              Live instructor-led online sessions run on Saturdays and
              Sundays via Zoom.
            </p>

            {consultationRequest && (
              <p className="mt-3 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] p-3 text-sm leading-6 text-cyan-100">
                You are requesting a free consultation. The form below will
                include that request with your program enquiry.
              </p>
            )}

            <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4">
              <p className="text-sm font-semibold text-white">
                Selected program fee:{" "}
                <span className="text-cyan-300">{selectedPrice} USD</span>
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                {selectedProgram.title} · {selectedProgram.duration}
              </p>
            </div>
          </div>

          {/* Honeypot field for basic bot detection */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor="enroll-website">
              Leave this field empty
            </label>

            <input
              id="enroll-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="enroll-name"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Full name *
              </label>

              <input
                id="enroll-name"
                name="name"
                type="text"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
                placeholder="Enter your full name"
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="enroll-email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address *
              </label>

              <input
                id="enroll-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="enroll-contact"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Contact number
              </label>

              <input
                id="enroll-contact"
                name="contactNumber"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                maxLength={25}
                placeholder="+1 555 123 4567"
                pattern="[+]?[0-9 ()().-]{7,25}"
                title="Enter a valid contact number, including country code if applicable."
                className={fieldClass}
              />

              <p className="mt-2 text-xs text-slate-500">
                Optional. Include your country code.
              </p>
            </div>

            <div>
              <label
                htmlFor="enroll-program"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Select your program *
              </label>

              <select
                id="enroll-program"
                name="programSlug"
                value={programSlug}
                onChange={(event) =>
                  setProgramSlug(event.target.value)
                }
                required
                className={fieldClass}
              >
                {programs.map((program) => (
                  <option key={program.slug} value={program.slug}>
                    {program.title} — {program.duration} — ${program.priceUsd} USD
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="enroll-experience"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Experience level *
              </label>

              <select
                id="enroll-experience"
                name="experienceLevel"
                value={experience}
                onChange={(event) => setExperience(event.target.value)}
                required
                className={fieldClass}
              >
                {experienceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="enroll-goal"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                What is your main goal or question?
              </label>

              <textarea
                id="enroll-goal"
                name="goal"
                rows={3}
                maxLength={500}
                placeholder="Tell us about your learning or career goals."
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={busy}
              className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {busy ? "Submitting..." : "Request Enrollment Details"}
            </button>

            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`rounded-xl border p-4 text-sm leading-6 ${
                  success
                    ? "border-cyan-400/30 bg-cyan-400/[0.06] text-cyan-100"
                    : "border-amber-400/30 bg-amber-400/[0.06] text-amber-200"
                }`}
              >
                <p>{status}</p>
              </div>
            )}

            <p className="text-xs leading-5 text-slate-500">
              By submitting this form, you agree to be contacted about your
              inquiry. Your details will be used to respond to your request.
              Please do not submit passwords or payment information.{" "}
              <Link
                href="/privacy-policy"
                className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
