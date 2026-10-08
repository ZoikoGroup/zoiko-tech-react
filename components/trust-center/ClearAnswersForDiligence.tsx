"use client";

import React, { useState } from "react";

export default function ClearAnswersForDiligence() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does Trust Center provide?",
      answer:
        "The Trust Center provides source-owned evidence collection, control architecture details, framework mapping, and compliance verification context without badge walls or universal compliance promises.",
    },
    {
      question: "Does this page prove certification or compliance?",
      answer:
        "No. This page provides documentation, review states, and evidence access. It does not act as a universal compliance promise or automated certification.",
    },
    {
      question: "Where is live service health?",
      answer:
        "Live service health and current incident updates are managed through dedicated authoritative operational channels, separate from vulnerability intake and procurement reviews.",
    },
    {
      question: "Where do I report a vulnerability?",
      answer:
        "Vulnerability reporting follows a canonical responsible disclosure workflow. A procurement or review request must never be used as vulnerability intake.",
    },
    {
      question: "Is all evidence public?",
      answer:
        "No. Public trust basics remain ungated, while controlled evidence access requires an approved operational workflow and verification.",
    },
    {
      question: "Does a region prove residency?",
      answer:
        "Region routing and work email parameters are handled on a strict need-to-know basis and do not inherently guarantee residency proof without explicit verification.",
    },
    {
      question: "Does this page prove universal accessibility or safe AI?",
      answer:
        "No absolute safety or universal conformance claims are made. Responsible AI and accessibility evidence are evaluated based on specific scopes, frameworks, and limitations.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Clear answers for diligence.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Source, scope and currentness before reassurance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#7FD0D933] transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-center justify-between text-left text-white group focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold tracking-tight group-hover:text-[#6FD0F6] transition-colors">
                    {faq.question}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pr-12 text-gray-300 text-xs sm:text-sm leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
