
import EnrollmentForm from "@/components/EnrollmentForm";

export const metadata = {
  title: "Enroll | The Hacker Smith",
  description:
    "Register your interest in Ethical Hacking Foundations with The Hacker Smith.",
};

export default function EnrollPage() {
  return (
    <main className="section bg-base">
      <div className="shell mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="section-label mb-4">
            THE HACKER SMITH · FOUNDING COHORT
          </p>

          <h1 className="heading-lg">
            Start Your Technology Journey.
          </h1>

          <p className="body-text mx-auto mt-4 max-w-2xl">
            Interested in Ethical Hacking Foundations? Tell us a little
            about yourself. We'll contact you with the next steps.
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
