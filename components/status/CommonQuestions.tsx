"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function CommonQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Zoiko Tech operating normally right now?",
      answer:
        "Answered only from a verified current snapshot inside the freshness policy. If that isn't available, we say current status can't be confirmed and direct you to the live status surface.",
    },
    {
      question: "Are there any active incidents?",
      answer:
        "Active incidents are displayed with real-time severity levels, affected scope, and the most recent verified updates from engineering teams.",
    },
    {
      question: "What services are affected?",
      answer:
        "A comprehensive breakdown linking directly to public component rows experiencing degradation or downtime.",
    },
    {
      question: "When will the incident be resolved?",
      answer:
        "Estimated time to resolution is provided as soon as root cause analysis is completed and verified by the response team.",
    },
    {
      question: "Is scheduled maintenance planned?",
      answer:
        "Upcoming maintenance windows, expected service impacts, and duration details are published in advance.",
    },
    {
      question: "What is Zoiko Tech uptime?",
      answer:
        "Uptime metrics are calculated over rolling historical periods and displayed alongside SLA boundary guidelines.",
    },
    {
      question: "Where can I get help?",
      answer:
        "Access our help and support documentation, account troubleshooting guides, or create a support case.",
    },
    {
      question: "Where do I report a security vulnerability?",
      answer:
        "Review our responsible disclosure guidelines to securely report vulnerabilities and view approved security disclosures.",
    },
    {
      question: "How do I subscribe to status updates?",
      answer:
        "Choose from source-supported channels including email, SMS, webhooks, or RSS notifications with explicit consent.",
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
            Common questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Answers here follow the same verified snapshot and freshness policy
            as the page. Where a live answer is needed, this page can't give it
            without a connected source.
          </p>
        </div>

        {/* Two-Column Layout (FAQ Accordion + Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Accordion List (Left Column - 7 cols) */}
          <div className="lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5 transition-all">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex-shrink-0 text-gray-400">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pr-6">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Image Container (5 cols) */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
              <img
                src="/status/22.png"
                alt="Tech support control room and team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
