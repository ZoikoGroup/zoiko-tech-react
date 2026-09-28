"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

const faqs = [
  {
    question: "What is Zoiko Tech Regulatory & Compliance?",
    answer:
      "An enterprise solution approach for connecting regulatory evidence, applicability, obligations, controls and regulated workflows with explicit ownership and review.",
  },
  {
    question: "Which Zoiko platforms support this solution?",
    answer: "",
  },
  {
    question: "What is Zoiko Assure?",
    answer: "",
  },
  {
    question: "Does Zoiko guarantee compliance?",
    answer: "",
  },
  {
    question: "Can AI decide which laws apply to us?",
    answer: "",
  },
  {
    question: "How is evidence handled?",
    answer: "",
  },
  {
    question: "How do we start?",
    answer: "",
  },
];

export default function DirectAnswersComplianceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white pt-[48px] pb-[64px] md:pt-[79px] md:pb-[92px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] flex flex-col gap-[10px] items-start w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="flex flex-col gap-[10px] w-full pb-[24px] md:pb-[63.6px]"
        >
          <p className="font-segoe font-bold text-[#00bd80] text-[13px] leading-[20.8px] tracking-[1.3px] uppercase">
            Answer-First Buyer Questions
          </p>
          <h2 className="font-segoe font-bold text-[#0a2f2a] text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] max-w-[534px]">
            Direct answers to compliance questions.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="flex flex-col gap-[10px] w-full"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#15503d] border border-[#26dca2] border-solid rounded-[12px] w-full overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full min-h-[48px] px-[22px] py-[18px] text-left"
                >
                  <span className="font-segoe font-bold text-white text-[16px] leading-[25.6px] pr-[16px]">
                    {faq.question}
                  </span>
                  <span className="font-segoe font-bold text-[#8bf2c8] text-[22px] leading-[22px] shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && faq.answer && (
                  <div className="px-[22px] pb-[20.685px] max-w-[712px]">
                    <p className="font-segoe font-normal text-[#87c7aa] text-[16px] leading-[25.6px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
