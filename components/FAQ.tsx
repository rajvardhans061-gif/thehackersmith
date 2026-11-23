import Link from "next/link";
const questions = [
  {
    question: "Which program is currently open for inquiries?",
    answer: "Ethical Hacking Foundation is the first small-group pilot. Other listed pathways are planned and are not open for enrollment.",
  },
  {
    question: "What does the pilot include?",
    answer:
      "The 8-week pilot introduces ethical hacking fundamentals through live online instruction, authorized practice, guided assignments, and a beginner project. The detailed schedule and learner terms are shared before enrollment.",
  },
  {
    question: "Does an inquiry enroll me or take payment?",
    answer:
      "No. An inquiry only tells us you are interested. It does not process payment, reserve a seat, or create an enrollment agreement.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "Ethical Hacking Foundation is designed as an introductory pathway. Review its program page for topics and learning outcomes, or send an inquiry if you are unsure whether it fits your experience.",
  },
  {
    question: "Does THS provide job placement?",
    answer:
      "No. THS does not promise job placement, employer access, or employment outcomes. Any career guidance is described separately and does not guarantee a job.",
  },
  {
    question: "Can I request a free consultation?",
    answer:
      "Yes. Use the pilot-details button and submit the inquiry form. You can add your questions and request a free consultation.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-base">
      <div className="shell mx-auto max-w-4xl">
        <div className="text-center">
          <p className="section-label">Frequently asked questions</p>
          <h2 className="heading-lg mt-3">Clear answers before you enquire</h2>
        </div>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-panel px-5 sm:px-7">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-white marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                <span className="relative after:absolute after:right-0 after:top-0 after:text-cyan-300 after:content-['+'] group-open:after:content-['-']">
                  {question}
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">
          Need more detail? <Link href="/enroll" className="text-cyan-300 underline underline-offset-4">Send a program enquiry</Link>.
        </p>
      </div>
    </section>
  );
}
