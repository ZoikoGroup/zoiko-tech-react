"use client";
import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Artificial Intelligence at Zoiko Tech?",
    answer:
      "A technology architecture for domain-aware intelligence that connects approved sources and operating context to AI assistance, policy, human and system authority, integrations and evidence.",
  },
  { question: "Is this the same as Agentic Systems?" },
  { question: "What is Governed Work Orchestration?" },
  { question: "Does Zoiko have its own model?" },
  { question: "What is Zoiko AI?" },
  { question: "Which AI platform is live?" },
  { question: "How is AI governed?" },
  { question: "Does AI output become the system of record?" },
  { question: "How do we start?" },
];

interface NavigationLink {
  category: string;
  title: string;
}

const NAV_LINKS: NavigationLink[] = [
  { category: "Agent execution", title: "Agentic Systems →" },
  {
    category: "Multi-step governed work",
    title: "Governed Work Orchestration →",
  },
  { category: "Risk & evaluation", title: "AI Safety & Governance →" },
  { category: "Applied AI solutions", title: "AI & Intelligent Automation →" },
  { category: "Technical papers", title: "Zoiko Research →" },
];

export default function AiFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            ANSWER-FIRST BUYER QUESTIONS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
            Artificial Intelligence at a glance
          </h2>
        </div>

        {/* Main Grid Layout: Left FAQs, Right Dark Sidebar Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: Accordion List */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 md:p-8 divide-y divide-gray-100">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="text-sm font-extrabold text-[#0B132B] group-hover:text-[#2b7a78] transition-colors">
                      {item.question}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200 text-gray-600 flex items-center justify-center shrink-0 ml-4 group-hover:border-[#2b7a78] group-hover:text-[#2b7a78] transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                  {isOpen && item.answer && (
                    <div className="mt-3 pr-8">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dark Navigation Card with Image (/ai/30.png) */}
          <div className="lg:col-span-5 bg-[#00191E] rounded-3xl shadow-2xl border border-[#34D4CA33] overflow-hidden flex flex-col">
            {/* Top Image Specimen (/ai/30.png) */}
            <div className="w-full h-[220px] bg-[#112D32]">
              <img
                src="/ai/30.png"
                alt="Workspace and architecture view"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>

            {/* Sidebar Content */}
            <div className="p-8 flex flex-col justify-between text-white">
              <div>
                <div className="text-[#34D4CA] font-bold text-[10px] tracking-widest uppercase mb-2 font-mono">
                  WHERE TO GO NEXT
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Each adjacent technology has its own page. Nothing is
                  duplicated here.
                </p>

                {/* Links Stack */}
                <div className="space-y-4 border-t border-[#34D4CA22] pt-6">
                  {NAV_LINKS.map((link, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="text-[10px] text-gray-400 font-mono mb-0.5">
                        {link.category}
                      </div>
                      <a
                        href="#"
                        className="text-xs font-bold text-[#34D4CA] group-hover:underline inline-flex items-center"
                      >
                        {link.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
