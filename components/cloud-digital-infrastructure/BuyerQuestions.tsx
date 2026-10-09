"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is Cloud & Digital Infrastructure at Zoiko Tech?",
    answer:
      "A corporate technology architecture spanning Zoiko Cloud, developer-facing interfaces, shared control and evidence infrastructure, identity, security, data, governance and observability at approved scope.",
  },
  {
    question: "Is Zoiko Cloud a general public cloud?",
    answer:
      "Zoiko Cloud operates as a specialized enterprise and partner platform rather than an open public cloud utility, structured around specific architectural and compliance controls.",
  },
  {
    question: "Is Zoiko Cloud publicly available?",
    answer:
      "Access is governed by specific deployment criteria, approved workloads, and partner agreements rather than open public self-service signup.",
  },
  {
    question: "What is Developer Platform?",
    answer:
      "A structured environment providing APIs, SDKs, tooling, and ecosystem services designed to support authorized developers and integrations.",
  },
  {
    question: "What is CoreX?",
    answer:
      "CoreX provides shared control, evidence, and transaction infrastructure designed to coordinate state and security across customer-facing modules.",
  },
  {
    question: "Which regions or cloud providers are supported?",
    answer:
      "Supported regions and providers are defined strictly by authorized enterprise deployment agreements and regulatory jurisdictions.",
  },
  {
    question: "Does “regulated workloads” mean compliant everywhere?",
    answer:
      "No. Regulated workload descriptors outline architectural context and requirements, but compliance depends on exact product, jurisdiction, market, and verified evidence state.",
  },
  {
    question: "How do developers integrate?",
    answer:
      "Developers integrate using approved APIs, SDKs, webhooks, and documented authentication protocols under authorized integration contracts.",
  },
];

export default function BuyerQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Buyer questions, answered directly
          </h1>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#7FD0D98C]/40 py-6">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left text-lg sm:text-xl font-medium text-white focus:outline-none group"
                >
                  <span className="group-hover:text-[#7FD0D9] transition-colors duration-200">
                    {item.question}
                  </span>
                  <span className="text-xl font-bold text-[#7FD0D9] ml-4 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 pr-8">
                    <p className="text-[15px] text-[#DCECEE] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Wave Image Section */}
        <div className="w-full relative mt-8 flex justify-center">
          <div className="w-full max-w-[1440px] h-64 sm:h-80 relative">
            <Image
              src="/cloud/46.png"
              alt="Buyer questions wave background"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
