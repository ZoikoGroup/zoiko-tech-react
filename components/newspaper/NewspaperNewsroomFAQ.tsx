"use client";
import React, { useState } from "react";

export default function NewspaperNewsroomFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default based on design

  const faqs = [
    {
      question: "Is Newspaper the same as Newsroom?",
      answer:
        "The supplied sources don't establish that. They are treated as separate named pending destinations until Product and Corporate Communications approve the relationship.",
    },
    {
      question: "Can they share a backend registry?",
      answer:
        "No, backend registries are kept isolated until Corporate Communications and Product explicitly authorize and validate a shared data schema.",
    },
    {
      question: "Can Newspaper canonicalize to Newsroom?",
      answer:
        "Canonicalization between them is blocked until an official migration or consolidation policy is signed off by editorial and technical leads.",
    },
    {
      question: "Can Newsroom replace Newspaper in navigation?",
      answer:
        "Newsroom cannot replace Newspaper in active navigation until the pending destination status is fully approved and released.",
    },
    {
      question: "Can article URLs live under /newsroom/?",
      answer:
        "Article URLs remain anchored to their designated route structure until a formal URL routing change is authorized.",
    },
    {
      question: "Who owns official corporate source truth?",
      answer:
        "Corporate Communications maintains sole ownership and authority over official corporate source truth and designated announcements.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Newspaper and Newsroom
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Newspaper and the Company footer's Newsroom are separate pending
            destinations until Corporate Communications approves their
            relationship.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 transition-all">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-teal-800 font-bold text-xl transition-transform">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
}
