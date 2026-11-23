
import EnrollmentForm from "@/components/EnrollmentForm";

export const metadata = {
  title: "Enroll | The Hacker Smith",
  description:
    "Request details about The Hacker Smith's Ethical Hacking Foundation pilot.",
};

export default function EnrollPage() {
  return (
    <main className="section bg-base">
      <div className="shell mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="section-label mb-4">
            THE HACKER SMITH · PROGRAM ENQUIRIES
          </p>

          <h1 className="heading-lg">
            Request pilot details.
          </h1>

          <p className="body-text mx-auto mt-4 max-w-2xl">
            Tell us about your background and goals. We will contact you with
            Ethical Hacking Foundation pilot details and next steps.
          </p>
        </div>

        <EnrollmentForm />

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Submitting this form is an inquiry, not a payment or a
          confirmed seat reservation.
        </p>
      </div>
    </main>
  );
}
