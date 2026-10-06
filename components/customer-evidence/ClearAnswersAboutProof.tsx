"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ClearAnswersAboutProof() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is customer evidence approved?",
      answer:
        "Customer evidence goes through a multi-stage governance and permission workflow involving evidence owners, legal review, and direct client sign-off.",
    },
    {
      question: "Are the photographs customer deployments?",
      answer:
        "Photographs represent either actual approved customer operating environments or authorized illustrative context under strict public-safe guidelines.",
    },
    {
      question: "Why are no case studies shown?",
      answer:
        "Case studies require verified metrics, active permissions, and valid proof chains. Unverified or pending records remain hidden until fully approved.",
    },
    {
      question: "What makes a metric meaningful?",
      answer:
        "A metric requires exact value and unit definitions, clear baselines, defined measurement periods, and relevant population scope.",
    },
    {
      question: "Can customer evidence be anonymized?",
      answer:
        "Yes, anonymization requires explicit separate approval, suppressing identifiable names and logos while retaining verified factual integrity.",
    },
    {
      question: "Where do full case studies live?",
      answer:
        "Canonical long-form stories reside within the Resources section, routed through industry discovery upon approval.",
    },
    {
      question: "Are results guaranteed for every customer?",
      answer:
        "No results are guaranteed. Outcomes depend on specific deployment context, baseline conditions, and operating environments.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Clear answers about proof.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Permission, scope and provenance guide the evaluation.
          </p>
        </div>

        {/* Two-Column Layout: Left FAQs vs Right Flush Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Accordions (Span 7) */}
          <div className="lg:col-span-7 flex flex-col border-t border-gray-200">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-gray-200 py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center cursor-pointer justify-between text-left focus:outline-none group"
                  >
                    <span className="text-base  md:text-lg font-bold text-gray-900 group-hover:text-teal-800 transition-colors pr-4">
                      {item.question}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center text-gray-500 group-hover:text-teal-800 transition-colors shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Flush Image (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center sticky top-12">
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
              <img
                src="/customer/19.png"
                alt="Workspace desk reviewing clear proof documentation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
