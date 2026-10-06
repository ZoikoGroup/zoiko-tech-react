"use client"
import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What are Agentic Systems at Zoiko Tech?",
    answer:
      "The controlled-execution layer for agents that act through approved tools and systems under explicit identity, authority, policy, human accountability and evidence controls.",
  },
  {
    question: "Is this the same as Artificial Intelligence?",
    answer:
      "No. Artificial Intelligence provides broad intelligence and foundational models, whereas Agentic Systems focus specifically on controlled execution, approved tool usage, and deterministic workflow boundaries.",
  },
  {
    question: "Are the agents autonomous?",
    answer:
      "They operate with bounded autonomy within strictly defined scopes, requiring explicit authority tokens, policy checks, and human approvals for high-impact or sensitive side effects.",
  },
  {
    question: "What can an agent do?",
    answer:
      "Agents can execute multi-step workflows, query integrated enterprise systems, draft communications, analyze documents, and invoke approved tools under strict parameter constraints.",
  },
  {
    question: "Who is responsible for an agent action?",
    answer:
      "Accountability rests with the human owner, reviewer, or approver who authorized the workflow scope and validated critical execution checkpoints.",
  },
  {
    question: "What happens when an agent fails?",
    answer:
      "Agents trigger built-in failure handlers such as safe pauses, manual intervention prompts, rollbacks where supported, or structured escalation paths.",
  },
  {
    question: "What is ZoikoVertex?",
    answer:
      "The live production-ready runtime environment providing governed agentic execution and automated workflow capabilities.",
  },
  {
    question: "What is Governed Work Orchestration?",
    answer:
      "The broader coordination layer responsible for cross-team workflows, work queues, and durable multi-step progression outside single agent bounds.",
  },
  {
    question: "How do we start?",
    answer:
      "Begin by piloting a single bounded task with approved scope, mapping tools, defining authority models, and scaling gradually through gated checkpoints.",
  },
];

interface NavLinkItem {
  category: string;
  title: string;
}

const NAV_LINKS: NavLinkItem[] = [
  {
    category: "Intelligence & models",
    title: "Artificial Intelligence",
  },
  {
    category: "Multi-step governed work",
    title: "Governed Work Orchestration",
  },
  {
    category: "Risk & evaluation",
    title: "AI Safety and Governance",
  },
  {
    category: "Applied automation",
    title: "AI & Intelligent Automation",
  },
  {
    category: "Identity for agents",
    title: "Identity & Access",
  },
];

export default function AgenticSystemsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Main Grid: Left FAQ Accordion, Right Sidebar Card with /age/22.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: Header & FAQ List */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
              ANSWER-FIRST BUYER QUESTIONS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-12">
              Agentic Systems at a glance
            </h2>

            {/* Accordion Container */}
            <div className="w-full space-y-4">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-gray-200/80 pb-4 transition-all"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
                    >
                      <span className="text-sm font-extrabold text-[#0B132B] group-hover:text-[#2b7a78] transition-colors">
                        {item.question}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0 ml-4 group-hover:bg-[#2b7a78] group-hover:text-white transition-colors">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="pt-2 pb-3 text-xs text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dark Navigation Card with Image /age/22.png */}
          <div className="lg:col-span-5 bg-[#00191E] rounded-3xl shadow-2xl overflow-hidden border border-gray-200/20 text-white w-full">
            {/* Image Header */}
            <div className="w-full h-[220px] m-0 p-0 overflow-hidden relative">
              <img
                src="/age/22.png"
                alt="Agentic systems overview transport visual"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <div className="text-[#34D4CA] font-bold text-[10px] tracking-widest uppercase mb-2 font-mono">
                WHERE TO GO NEXT
              </div>
              <p className="text-gray-300 text-xs mb-8">
                Never shown during an active run, approval or recovery.
              </p>

              {/* Navigation Links List */}
              <div className="space-y-6">
                {NAV_LINKS.map((nav, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                      {nav.category}
                    </span>
                    <a
                      href="#"
                      className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#34D4CA] transition-colors"
                    >
                      {nav.title}{" "}
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
