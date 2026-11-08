import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy Information | The Hacker Smith",
  description:
    "Current information about data submitted through The Hacker Smith website.",
};

const collectedInformation = [
  "Name and email address",
  "Optional contact number",
  "Experience level",
  "Selected program",
  "Learning goal or enquiry message, if provided",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="section min-h-[60vh] bg-base">
      <div className="shell mx-auto max-w-3xl">
        <p className="section-label">Privacy information</p>
        <h1 className="heading-lg mt-3">Privacy Policy</h1>

        <div className="mt-6 rounded-xl border border-amber-300/30 bg-amber-300/[0.06] p-5 text-sm leading-6 text-amber-100">
          <p className="font-semibold">Preparation draft</p>
          <p className="mt-2">
            This page records currently verifiable website practices. The
            business identity, applicable jurisdiction, retention periods, and
            legal terms have not been confirmed by the owner, so this page is
            not presented as a complete legal policy.
          </p>
        </div>

        <section className="mt-9">
          <h2 className="text-xl font-bold text-white">
            Information submitted through the enquiry form
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            The form asks for the following information:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-6 text-slate-300">
            {collectedInformation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-white">
            How enquiry information is used
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            The website describes this information as being used to respond to
            an enquiry and provide requested program and next-step information.
            Submitting the form is an enquiry; it does not process payment or
            reserve a seat.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-white">Website analytics</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            The website includes Vercel Analytics. Further details about
            analytics data handling are not specified on this draft page.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            For questions about a website enquiry, contact{" "}
            <a
              className="text-cyan-300 underline underline-offset-4"
              href="mailto:training@thehackersmith.com"
            >
              training@thehackersmith.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
