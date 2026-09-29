"use client";

import React from "react";
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
    question: "What is Zoiko Tech Communications & Collaboration?",
    answer:
      "Zoiko Communications & Collaboration is a unified solution designed to help teams coordinate, communicate, and work together more clearly across meetings, messaging, and shared workflows.",
  },
  {
    question: "Which Zoiko platforms deliver this solution?",
    answer:
      "The solution is delivered through a coordinated set of Zoiko platforms, giving buyers a consistent experience across meetings, collaboration, and communication workflows.",
  },
  {
    question: "How does Zoiko Sema fit?",
    answer:
      "Zoiko Sema supports the solution by bringing structure, context, and clarity to communication and collaboration workflows, helping teams stay aligned and move faster.",
  },
  {
    question: "How does Zoiko Local fit?",
    answer:
      "Zoiko Local plays a complementary role in the solution, helping buyers connect local context, coordination, and communication into a more cohesive collaboration experience.",
  },
  {
    question: "How is AI controlled in meetings and communication?",
    answer:
      "AI is controlled through intentional configuration and guardrails, so buyers can choose when and how automation supports meetings and communication without losing control of the experience.",
  },
  {
    question: "Does Zoiko monitor employees through communication data?",
    answer:
      "The solution is designed to support collaboration, not employee monitoring. Buyers can configure visibility, access, and controls to align with their policies and privacy expectations.",
  },
  {
    question: "How do we start?",
    answer:
      "Start with a guided discovery of your current workflows, then map the right Zoiko platforms and configuration to your collaboration goals, rollout plan, and adoption priorities.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[24px] items-start"
        >
          <div className="flex flex-col gap-[12px] items-start max-w-[820px] w-full">
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416]">
              Buyer questions, answered directly
            </h2>
            <p className="font-inter font-semibold text-[18px] leading-[28px] text-[rgba(10,20,22,0.7)]">
              Clear answers on how Zoiko Communications &amp; Collaboration
              works, which platforms are involved, and what buyers should
              expect from rollout to everyday use.
            </p>
          </div>

          <div className="w-full bg-white border border-[rgba(127,208,217,0.3)] rounded-[20px] overflow-hidden flex flex-col items-start">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`w-full flex flex-col gap-[16px] items-start px-[24px] py-[20px] ${
                  index !== faqs.length - 1
                    ? "border-b border-[rgba(127,208,217,0.3)]"
                    : ""
                }`}
              >
                <div className="w-full flex gap-[16px] items-center">
                  <div className="shrink-0 size-[40px] rounded-[20px] bg-[rgba(127,208,217,0.3)] flex items-center justify-center">
                    <img
                      src="/solution-zoiko-communications-collaboration/faq-help-circle-icon.svg"
                      alt=""
                      className="size-[18px]"
                    />
                  </div>
                  <p className="flex-1 font-inter font-semibold text-[16.8px] leading-[26.88px] text-[#0a1416]">
                    {faq.question}
                  </p>
                </div>
                {faq.answer && (
                  <p className="w-full font-inter font-semibold text-[16px] leading-[26px] text-[rgba(10,20,22,0.7)]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px] pb-[15.36px]">
            Buyer questions, answered directly
          </h2>

          <div className="w-full max-w-[820px] flex flex-col items-start">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="w-full group border-b border-[rgba(127,208,217,0.3)] py-[12px]"
              >
                <summary className="w-full min-h-[44px] flex items-center justify-between gap-[12px] py-[8px] cursor-pointer list-none">
                  <span className="flex-1 font-inter font-semibold text-[16.8px] leading-[26.88px] text-[#0a1416]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 font-inter font-semibold text-[18px] text-[#0a1416] group-open:hidden">
                    +
                  </span>
                  <span className="shrink-0 font-inter font-semibold text-[18px] text-[#0a1416] hidden group-open:inline">
                    −
                  </span>
                </summary>
                {faq.answer && (
                  <p className="w-full font-inter font-semibold text-[16px] leading-[26px] text-[rgba(10,20,22,0.7)] pt-[4px]">
                    {faq.answer}
                  </p>
                )}
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
