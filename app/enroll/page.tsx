
import GoogleFormEmbed from "@/components/GoogleFormEmbed";

export const metadata = {
  title: "Enroll | The Hacker Smith",
  description:
    "Enquire about a Foundation or Career Accelerator program with The Hacker Smith.",
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
            Start Your Technology Journey.
          </h1>

          <p className="body-text mx-auto mt-4 max-w-2xl">
            Tell us what you would like to learn. Our team will contact you
            about the programs and next steps.
          </p>
        </div>

        <GoogleFormEmbed />

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Submitting this form is an inquiry, not a payment or a
          confirmed seat reservation.
        </p>
      </div>
    </main>
  );
}
