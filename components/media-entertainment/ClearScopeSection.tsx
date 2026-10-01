"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ClearScopeSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does Zoiko Tech provide for Media & Entertainment?",
      answer:
        "Zoiko Tech provides robust media infrastructure, live-event broadcasting technology, secure operator communications, and verifiable compliance and evidence retention capabilities tailored for media environments.",
    },
    {
      question: "Which platforms are relevant?",
      answer:
        "Relevant platforms include ZoikoStream Live Events, ZoikoStream, Zoiko Social, and specialized media & streaming infrastructure solutions.",
    },
    {
      question: "Does Zoiko provide a full streaming stack?",
      answer:
        "Zoiko provides programmable media infrastructure, delivery capabilities, replay services, and architecture framing designed to integrate with your existing media workflows.",
    },
    {
      question: "Does Zoiko support sports media specifically?",
      answer:
        "Yes, Zoiko supports commercial live-event broadcasting technology and live-event operations with explicit ownership, state controls, and secure failure handling paths.",
    },
    {
      question: "Why is the page called Media & Entertainment?",
      answer:
        "The page reflects structured architectures, event states, and ownership boundaries specifically configured for media production, live broadcasting, and community engagement.",
    },
    {
      question: "How is service health handled?",
      answer:
        "Service health is separated from event state, keeping impact, owners, mitigation paths, and recovery visible through structured monitoring and synthetic event-state views.",
    },
    {
      question: "How do we start?",
      answer:
        "You can start by defining the experience, mapping source and destination boundaries, reviewing controls and permissions, and authorizing a bounded launch.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Grid: Left FAQs vs Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Accordions (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-10">
              Clear scope. <br />
              Clear next steps.
            </h2>

            {/* Accordion List */}
            <div className="w-full flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-5">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none"
                    >
                      <span className="text-sm md:text-base font-bold text-gray-900 group-hover:text-teal-800 transition-colors pr-4">
                        {faq.question}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 shrink-0 group-hover:bg-teal-50 group-hover:text-teal-800 transition-colors">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
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
          </div>

          {/* Right Column: Image (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src="/media/28.png"
                alt="Media & Entertainment Strategy Sync Meeting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
