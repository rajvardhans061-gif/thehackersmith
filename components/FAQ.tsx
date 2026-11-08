import Link from "next/link";
import { programs } from "@/data/programs";

const foundationPrograms = programs.filter(
  (program) => program.pathway === "Foundation"
);
const questions = [
  {
    question: "What subjects can I study?",
    answer: `The catalog currently includes ${foundationPrograms
      .map((program) => program.domain)
      .join(", ")}. Each subject has a Foundation and a Career Accelerator pathway.`,
  },
  {
    question: "How do Foundation and Career Accelerator programs differ?",
    answer:
      "Foundation programs are 8 weeks and introduce core concepts with guided practice and a beginner project. Career Accelerator programs are 6 months and cover a broader set of practical topics, projects, and career preparation. Career support services are listed on the Career Accelerator program pages.",
  },
  {
    question: "How are classes delivered?",
    answer:
      "Programs use live instructor-led online sessions via Zoom, scheduled on Saturdays and Sundays. Program pages describe the learning activities and curriculum.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "The Foundation programs are described as introductory or beginner pathways. Review the individual program page to see its topics and learning outcomes, or send an enquiry if you are unsure which pathway fits.",
  },
  {
    question: "Does an enquiry enroll me or take payment?",
    answer:
      "No. The enquiry form requests information only. It does not process payment or reserve a seat. The team follows up with program and next-step information.",
  },
  {
    question: "Can I request a free consultation?",
    answer:
      "Yes. Use the free consultation request button and submit the enquiry form. You can edit the prefilled consultation request and add the program or questions you want to discuss.",
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
