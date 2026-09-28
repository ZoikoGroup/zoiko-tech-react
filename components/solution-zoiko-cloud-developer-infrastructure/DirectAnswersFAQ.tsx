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
    question: "What is Zoiko Tech Cloud & Developer Infrastructure?",
    answer:
      "An enterprise solution layer for building, integrating and operating on shared platform foundations: developer interfaces, identity, integrations, documentation, testing, observability and operational controls, at the level publicly approved.",
  },
  {
    question: "What developer resources does Zoiko Tech intend to provide?",
    answer: "",
  },
  {
    question: "Is there a public sandbox or developer console?",
    answer: "",
  },
  {
    question: "How do integrations work?",
    answer: "",
  },
  {
    question: "How is service health communicated?",
    answer: "",
  },
  {
    question: "Can we use the same foundation across multiple Zoiko platforms?",
    answer: "",
  },
  {
    question: "How do we evaluate fit?",
    answer: "",
  },
];

export default function DirectAnswersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white pt-[48px] pb-[64px] md:pt-[83px] md:pb-[96px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] flex flex-col gap-[10px] items-start w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="flex flex-col gap-[10px] w-full pb-[24px] md:pb-[63.6px]"
        >
          <p className="font-segoe font-bold text-[#0d3632] text-[13px] leading-[20.8px] tracking-[1.3px] uppercase">
            Answer-First Technical Questions
          </p>
          <h2 className="font-segoe font-bold text-[#0b2a20] text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] max-w-[534px]">
            Direct answers for technical evaluation.
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
                className="bg-[#deffef] border border-[#cfe9dc] border-solid rounded-[12px] w-full overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full min-h-[48px] px-[22px] py-[18px] text-left"
                >
                  <span className="font-segoe font-bold text-[#0b2a20] text-[16px] leading-[25.6px] pr-[16px]">
                    {faq.question}
                  </span>
                  <span className="font-segoe font-bold text-[#0d3632] text-[22px] leading-[22px] shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && faq.answer && (
                  <div className="px-[22px] pb-[20.685px] max-w-[712px]">
                    <p className="font-segoe font-normal text-[#4b6b5f] text-[16px] leading-[25.6px]">
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
