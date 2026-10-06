"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ClearAnswers() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does Zoiko Tech provide for Professional Services?",
      answer:
        "Zoiko Tech delivers structured operating solutions, workforce tools, and compliance frameworks designed for professional service firms.",
    },
    {
      question: "Does Zoiko provide legal, tax or accounting advice?",
      answer:
        "No. Interpretation, professional judgment, and sign-off remain strictly with authorized professionals.",
    },
    {
      question: "What is Professional Intelligence?",
      answer:
        "It is an evidence-candidate framework supporting verified professional workflows and structured insight generation.",
    },
    {
      question: "Which specialist products are ready?",
      answer:
        "Readiness-gated specialist tools including ZoikoTime, HR, Payroll, and Billing are available based on verified deployment scope.",
    },
    {
      question: "Can AI issue professional advice automatically?",
      answer:
        "No. Technology and AI assist with review and drafting, but do not automatically create or preserve legal privilege or professional advice.",
    },
    {
      question: "Does Zoiko replace practice-management systems?",
      answer:
        "Zoiko integrates with or extends existing architecture depending on documented capabilities and approved infrastructure.",
    },
    {
      question: "How do we start?",
      answer:
        "Start with one accountable workflow, define service scope, and expand after reviewed evidence and approved readiness.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Clear answers before you start.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Professional authority, scope and readiness guide the conversation.
          </p>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Accordion List (Left Column) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5 transition-colors">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="text-sm md:text-base font-bold text-gray-900 group-hover:text-teal-700 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-gray-700" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-700" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Image Container (Right Column) */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
              <img
                src="/prof/67.png"
                alt="Professional team reviewing strategy"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
