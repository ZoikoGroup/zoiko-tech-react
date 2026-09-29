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

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  { question: "What is Zoiko Tech Identity & Access?", answer: "" },
  { question: "Which Zoiko platforms support this solution?", answer: "" },
  { question: "Does Zoiko iD support SSO, MFA or passkeys?", answer: "" },
  { question: "What is delegated authority?", answer: "" },
  { question: "How are service or agent identities handled?", answer: "" },
  { question: "How does Identity & Access relate to Cybersecurity?", answer: "" },
  { question: "How do we start?", answer: "" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span className="relative inline-flex items-center justify-center size-[20px] shrink-0">
      <span className="absolute w-[12px] h-[2px] bg-[#0a1416]" />
      <span
        className={`absolute w-[2px] h-[12px] bg-[#0a1416] transition-transform duration-200 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.question}
            className="border-b border-[#d5e3e5] py-[12px] w-full max-w-[820px]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex items-center justify-between gap-[16px] min-h-[44px] w-full text-left"
            >
              <span className="font-inter font-semibold text-[16.8px] leading-[26.88px] text-[#0a1416]">
                {item.question}
              </span>
              <ChevronIcon open={open} />
            </button>
            {open && item.answer && (
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[rgba(10,20,22,0.7)] pt-[8px] pr-[28px]">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

export default function BuyerQuestionsFAQ() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px] pb-[21px]">
            Buyer questions, answered directly
          </h2>

          <FaqAccordion items={faqItems} />
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px] pb-[15px]">
            Buyer questions, answered directly
          </h2>

          <FaqAccordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
