"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What does Cybersecurity mean here?",
    answer:
      "Protection, resilience and security-operations architecture with explicit state, ownership, recovery and evidence.",
  },
  {
    question: "Is Zoiko Shield generally available?",
    answer:
      "Availability is subject to our readiness-gated framework and controlled rollout phases.",
  },
  {
    question: "Does Zoiko provide a SOC, SIEM, XDR or MDR?",
    answer:
      "We provide structured architectural blueprints, state management, and evidence foundations rather than managed operations.",
  },
  {
    question: "How are incidents represented?",
    answer:
      "Incidents are recorded through rigorous signal-to-recovery timelines with explicit ownership and verifiable evidence trails.",
  },
  {
    question: "Who owns response?",
    answer:
      "Response ownership is strictly defined and assigned through our responsibility matrix for every security event.",
  },
  {
    question: "How is Digital Identity related?",
    answer:
      "Digital Identity acts as a neighboring, independent domain where authentication state and source are cleanly separated from cybersecurity posture.",
  },
  {
    question: "Does security evidence mean we are compliant?",
    answer:
      "Security evidence demonstrates operational posture and verifiable controls but does not automatically imply regulatory compliance without formal validation.",
  },
  {
    question: "Where do I report a vulnerability?",
    answer:
      "Vulnerabilities can be reported through our canonical Responsible Disclosure route.",
  },
  {
    question: "Where do I see current service status?",
    answer:
      "Current service availability and incident communications are published exclusively through our Authoritative System Status route.",
  },
  {
    question: "How do we evaluate fit?",
    answer:
      "Fit is evaluated through our structured implementation and adoption rollout stages, prioritizing architecture and evidence readiness.",
  },
];

export default function CybersecurityFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Header & Image */}
        <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-8">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            ANSWER-FIRST BUYER QUESTIONS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Cybersecurity, answered plainly
          </h2>

          {/* Image Thumbnail */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
            <img
              src="/cyber/32.png"
              alt="Cybersecurity answered plainly professional working"
              className="w-full h-[240px] object-cover object-center"
            />
          </div>
        </div>

        {/* Right Column: FAQ Accordion List */}
        <div className="lg:col-span-8 flex flex-col w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="flex flex-col transition-colors">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-5 px-6 md:px-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors focus:outline-none"
                  >
                    <span className="text-sm font-bold text-[#0B132B] pr-4">
                      {item.question}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[#2b7a78] shrink-0">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 md:px-8 pb-6 pt-0 text-xs text-gray-600 leading-relaxed bg-gray-50/30">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
