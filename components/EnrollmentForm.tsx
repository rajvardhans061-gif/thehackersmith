
"use client";

import { FormEvent, useState } from "react";

export default function EnrollmentForm() {
  const [experience, setExperience] = useState("Beginner");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);

      setStatus(
        "Thank you for your interest! Your details have been received. We'll contact you about the next steps."
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
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-cyan-400/20 bg-panel/80 p-6 shadow-[0_0_35px_rgba(0,229,255,0.05)] backdrop-blur-md sm:p-8"
    >
      <div className="mb-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
          Enrollment Inquiry
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Tell us about yourself
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Four quick details. No payment is taken through this form.
        </p>
      </div>

      {/* Honeypot field: hidden from normal visitors */}
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
            Contact number *
          </label>

          <input
            id="enroll-contact"
            name="contactNumber"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={25}
            required
            placeholder="+1 202 555 0123"
            pattern="[+]?[0-9 ()().-]{7,25}"
            title="Enter a valid contact number, including country code if applicable."
            className={fieldClass}
          />

          <p className="mt-2 text-xs text-slate-500">
            Include your country code if you are outside the US.
          </p>
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
            <option value="Beginner">Beginner</option>

            <option value="Student">Student</option>

            <option value="IT or networking experience">
              IT or networking experience
            </option>

            <option value="Cybersecurity experience">
              Cybersecurity experience
            </option>

            <option value="Career changer">
              Career changer
            </option>
          </select>
        </div>

        <button
          type="submit"
          disabled={busy}
          className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? "Submitting..." : "Submit Interest"}
        </button>

        {status && (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm leading-6 ${
              success ? "text-cyan-200" : "text-amber-300"
            }`}
          >
            {status}
          </p>
        )}

        <p className="text-xs leading-5 text-slate-500">
          Your details will be used to respond to your inquiry.
          Please don't submit passwords or payment details.
        </p>
      </div>
    </form>
  );
}
