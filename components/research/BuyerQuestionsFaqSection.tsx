import React from "react";

const faqItems = [
  {
    question: "What is Research?",
    answer:
      "Discovery for technical papers, benchmarks and approved research outputs.",
  },
  {
    question: "How is it different from Zoiko Research?",
    answer:
      "Discovery versus corporate research identity and technical authority.",
  },
  {
    question: "Does research mean shipping capability?",
    answer: "No. Product maturity is separately governed.",
  },
  {
    question: "Are all papers peer reviewed?",
    answer: "No assumption; exact metadata must establish review status.",
  },
  {
    question: "Are benchmark scores comparable?",
    answer: "Only within the artifact’s stated methods and conditions.",
  },
  {
    question: "Can I download research, data or code?",
    answer: "Only approved current assets with established rights.",
  },
  {
    question: "How do corrections work?",
    answer:
      "Corrected, superseded and withdrawn states remain visible; authoritative current versions are linked where available.",
  },
  {
    question: "Where is exploratory work?",
    answer:
      "Frontier Technologies, explicitly separate from validated research and commercial availability.",
  },
];

export default function BuyerQuestionsFaqSection() {
  return (
    <section
      id="questions"
      className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Answer-first buyer questions
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Scope and currentness before reliance.
          </p>
        </div>

        {/* 2-Column Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-[rgba(131,183,191,0.33)] py-6 flex flex-col gap-2"
            >
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-[#102D2F]">
                {item.question}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#56747A]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
