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
    question: "What is AI & Agentic Automation at Zoiko Tech?",
    answer:
      "An enterprise approach for applying governed AI and agents to repeatable business work, with explicit authority, approved context and tools, human oversight, evaluation, evidence and operational controls.",
  },
  {
    question: "What makes an AI workflow “agentic”?",
  },
  {
    question: "Does the agent act without human approval?",
  },
  {
    question: "How are agents controlled?",
  },
  {
    question: "How do we know the workflow is reliable?",
  },
  {
    question: "Can Zoiko connect AI to our existing systems?",
  },
  {
    question: "How do we start?",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full border-t border-[#0d3632] px-4 md:px-[100px] pt-[48px] md:pt-[83px] pb-[48px] md:pb-[96px]"
      style={{
        backgroundImage: "linear-gradient(to bottom, #04201d, #020d0c)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] w-full flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start gap-[10px]"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#10b981] uppercase">
            Answer-first buyer questions
          </p>
          <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-white max-w-[514px] pb-[8px] md:pb-[68px]">
            Straight answers to evaluation questions.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full flex flex-col gap-0"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#0b2a20] border border-[#15503d] rounded-[12px] w-full mb-[10px] last:mb-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full min-h-[48px] px-[22px] py-[18px] gap-[16px] text-left"
                >
                  <span className="font-segoe font-bold text-[16px] leading-[25.6px] text-white">
                    {faq.question}
                  </span>
                  <span className="font-segoe font-bold text-[22px] leading-[22px] text-[#10b981] shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && faq.answer && (
                  <div className="px-[22px] pb-[21px] max-w-[712px]">
                    <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa]">
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
