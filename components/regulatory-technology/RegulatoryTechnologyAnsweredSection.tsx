import React from "react";

interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    number: "Q01",
    question: "What is Regulatory Technology at Zoiko Tech?",
    answer:
      "Architecture for turning source-backed regulatory requirements into scoped obligations, governed workflows, authoritative outcomes and evidence, with legal and human authority kept explicit.",
  },
  {
    number: "Q02",
    question: "Does the page provide legal advice or guarantee compliance?",
    answer:
      "No. It organizes sources, controls, workflows and evidence; legal conclusions and compliance responsibility remain with authorized people, systems and authorities.",
  },
  {
    number: "Q03",
    question: "Which Zoiko platforms are relevant?",
    answer:
      "Zoiko Assure and Zoiko Tax, both Build-state and readiness-gated, plus relevant domain AI and shared developer and identity foundations where approved.",
  },
  {
    number: "Q04",
    question: "Is ZoikoTax the same as Regulatory Technology?",
    answer:
      "No. ZoikoTax is a telecom-specific specialist solution; Regulatory Technology is the broader technology-architecture category.",
  },
  {
    number: "Q05",
    question: "Is every jurisdiction or filing supported?",
    answer:
      "No blanket claim is made. Availability comes from current market and capability registries.",
  },
  {
    number: "Q06",
    question: "Can AI decide regulatory obligations automatically?",
    answer:
      "AI may assist with monitoring, classification, explanation or preparation where approved. Authoritative obligations and actions need approved rules, systems and accountable people.",
  },
  {
    number: "Q07",
    question: "How are regulatory changes handled?",
    answer:
      "Pin source, version and effective date, assess impact, review applicability, update obligations and controls when approved, and keep history for replay.",
  },
  {
    number: "Q08",
    question: "How is evidence different from compliance?",
    answer:
      "Evidence proves what source, decision, action or outcome occurred at a defined scope and period; on its own it does not prove an organization is compliant.",
  },
  {
    number: "Q09",
    question: "How should we start?",
    answer:
      "Pick one material workflow and jurisdiction, identify sources and owners, model obligations, controls and approvals, integrate a bounded flow, validate evidence, then expand.",
  },
];

export default function RegulatoryTechnologyAnsweredSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
            <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
              §22
            </span>
            
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            ANSWER-FIRST BUYER QUESTIONS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
            Regulatory Technology, answered
          </h2>
        </div>

        {/* 3x3 FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFDF8] rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-[#2b7a78] mb-2 font-mono">
                  {item.number}
                </div>
                <h3 className="text-sm font-extrabold text-[#0B132B] mb-3 leading-snug">
                  {item.question}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
