"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "Q01",
    question: "What is AI Safety and Governance at Zoiko Tech?",
    answer:
      "The governance architecture for registering, risk-classifying, approving, evaluating, monitoring, changing and evidencing AI and agent use cases while keeping authority explicit.",
  },
  {
    id: "Q02",
    question: "Does Zoiko Tech claim its AI is safe or bias-free?",
    answer:
      "No. We never make generalized safety or bias-free claims. Every capability carries scoped evaluation metrics, explicit boundaries, documented limitations, and named oversight.",
  },
  {
    id: "Q03",
    question: "Can AI make authoritative decisions?",
    answer:
      "Only within defined delegated authority tiers. High-impact decisions strictly require named human reviewer approval and cannot be executed autonomously.",
  },
  {
    id: "Q04",
    question: "How are AI systems evaluated?",
    answer:
      "Systems are evaluated against five rungs of evidence with explicit capability scope, system versions, evaluation rubrics, synthetic/licensed datasets, and currentness dates.",
  },
  {
    id: "Q05",
    question: "How is human oversight handled?",
    answer:
      "Oversight requires named roles, concrete triggers, explicit review actions (accept, reject, escalate), audit-logged overrides, and fail-safe fallback paths.",
  },
  {
    id: "Q06",
    question: "Which models or providers does Zoiko Tech use?",
    answer:
      "Provider identities, hosted versus internal boundaries, and data processing routes are published strictly from approved architecture and privacy contracts.",
  },
  {
    id: "Q07",
    question: "How are AI incidents handled?",
    answer:
      "Through a seven-stage lifecycle: Observe, Report, Contain, Investigate, Correct, Re-evaluate, and Re-enter. Re-entry always requires human review and approval.",
  },
  {
    id: "Q08",
    question: "How do we start?",
    answer:
      "Engage with our AI governance team to register your bounded use cases, apply our risk model, configure authority tiers, and establish evaluation criteria.",
  },
];

export const BuyerQuestionsFaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ Q01: true });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 sm:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3">
          <span className="text-xs md:text-sm font-semibold tracking-wider text-[#247780] font-poppins uppercase">
            Answer-first buyer questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0F172A] font-plus-jakarta leading-tight">
            AI Safety and Governance,<br />answered
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
          {faqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div key={faq.id} className="py-1.5 sm:py-2 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full py-3.5 sm:py-4 flex items-start sm:items-center justify-between gap-3 sm:gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm font-bold font-mono text-[#247780] shrink-0 pt-0.5 sm:pt-0">
                      {faq.id}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#0F172A] font-plus-jakarta group-hover:text-[#247780] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-[#247780] text-xl font-medium shrink-0 ml-2">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-4 sm:pb-5 pl-7 sm:pl-10 pr-2 sm:pr-4 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[#475569] font-poppins leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
