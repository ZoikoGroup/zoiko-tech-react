"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ClearAnswersForCitationAndReuse() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are Press Releases?",
      answer:
        "Press Releases provide official first-party release archives, approved announcements, and verified public statements.",
    },
    {
      question: "Are these live announcements?",
      answer:
        "Releases follow authorized atomic publication schedules and reflect official timestamps rather than live unverified status.",
    },
    {
      question: "Is this Newspaper or Newsroom?",
      answer:
        "This section is dedicated exclusively to official Press Releases, maintaining strict separation from broader Newspaper editorial discovery and corporate Newsroom umbrellas.",
    },
    {
      question: "Can I quote or reuse release media?",
      answer:
        "Approved quotations and media assets follow strict rights, credits, and expiry rules governed by Media Resources records.",
    },
    {
      question: "How are corrections shown?",
      answer:
        "Material corrections retain dates and version linkage directly within the public record, ensuring historical accuracy.",
    },
    {
      question: "Does a release prove availability or certification?",
      answer:
        "No. A release does not strengthen a product, security, or legal claim; specialist facts follow authoritative technical and compliance records.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Clear answers for citation and reuse
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
            Verify source, scope and state before relying on a statement.
          </p>
        </div>

        {/* Main Grid: FAQs Accordion (Left) & Image /press/19.png (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: FAQs Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  
                  className="rounded-2xl backdrop-blur-md overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#6FD0F6]">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-[#7FD0D933] mt-2 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Image Container (/press/19.png) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full rounded-2xl overflow-hidden border border-[#7FD0D959] shadow-2xl bg-black/40">
              <img
                src="/press/19.png"
                alt="Clear answers for citation and reuse conference room view"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
