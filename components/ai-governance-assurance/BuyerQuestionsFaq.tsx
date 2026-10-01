"use client";

import React, { useState } from "react";
import { SectionHeader, gradDarkToTeal } from "./shared";

const faqs = [
  { q: "What is Zoiko Tech AI Governance & Assurance?" },
  { q: "What does Zoiko mean by Responsible AI?" },
  { q: "Which Zoiko platform delivers AI Governance & Assurance?" },
  { q: "How are AI agents governed?" },
  { q: "Can AI approve itself for production?" },
  { q: "How is AI evaluated?" },
  { q: "How do we start?" },
];

export default function BuyerQuestionsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-8 md:px-32 py-24" style={gradDarkToTeal}>
      <div className="max-w-[1180px] mx-auto flex flex-col items-start">
        <div className="pb-5">
          <SectionHeader light title="Buyer questions, answered directly" />
        </div>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.q}
              className="self-stretch py-3 border-b border-color-cyan-67/25 flex flex-col justify-start items-start"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="self-stretch min-h-11 py-2 flex items-center gap-4 text-left cursor-pointer"
              >
                <span className="flex-1 zk-body text-color-white-solid text-base font-semibold leading-7">
                  {faq.q}
                </span>
                <span className="size-6 relative shrink-0">
                  <span className="absolute w-3.5 h-0.5 left-[5px] top-[11px] bg-color-cyan-25 rounded-[1px]" />
                  {!isOpen && (
                    <span className="absolute w-0.5 h-3.5 left-[11px] top-[5px] bg-color-cyan-25 rounded-[1px]" />
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="self-stretch pb-3 max-w-[820px]">
                  <p className="zk-body text-color-cyan-90 text-base font-normal leading-6">
                    Contact Zoiko Tech for the current answer to this question —
                    answers are evidence-gated and product-supported only.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
