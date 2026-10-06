"use client";

import React, { useState } from "react";
import { SectionHeader, faqImg } from "./shared";

const faqs = [
  { q: "What is Zoiko Tech’s Technology & SaaS solution?" },
  { q: "Does it require replacing our existing systems?" },
  { q: "Can Zoiko integrate with an existing architecture?" },
  { q: "How is AI governed?" },
  { q: "How does Zoiko support security and compliance review?" },
  { q: "How do we evaluate fit?" },
];

export default function BuyerQuestionsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader title="Buyer questions, answered directly" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-2">
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.q}
                  className="self-stretch py-3.5 border-b border-color-cyan-87 flex flex-col justify-start items-start"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="self-stretch min-h-11 py-2 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="flex-1 zk-body text-color-cyan-6 text-base font-semibold leading-7">
                      {faq.q}
                    </span>
                    <span className="size-6 flex items-center justify-center text-2xl font-light text-color-cyan-19 shrink-0 leading-none select-none transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="self-stretch pb-3 pt-1 max-w-[820px]">
                      <p className="zk-body text-color-cyan-35-2 text-sm md:text-base font-normal leading-6">
                        Contact Zoiko Tech for the current answer to this
                        question — answers are evidence-gated and
                        product-supported only.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src={faqImg.src}
              alt={faqImg.alt}
              className="w-full max-w-[540px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
