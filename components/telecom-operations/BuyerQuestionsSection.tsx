"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What is Zoiko Tech Telecom Operations & Monetization?",
    answer:
      "It is a governed operational framework and platform suite designed for telecom operators to manage service state, subscriber workflows, monetization, and integration with explicit ownership and source-of-truth boundaries.",
  },
  {
    question: "Which Zoiko platforms support this solution?",
    answer:
      "The solution is powered by dedicated platforms including ZoikoNex for OSS/BSS infrastructure, Zoiko Local for communications and local-number infrastructure, alongside relevant developer and delivery layers.",
  },
  {
    question: "What is ZoikoNex?",
    answer:
      "ZoikoNex is a telecom-grade OSS/BSS and operational infrastructure platform focused on core telecom monetization, service provisioning, and operator infrastructure.",
  },
  {
    question: "What is Zoiko Local?",
    answer:
      "Zoiko Local provides communications and local-number infrastructure, handling local numbers, calling, video routing, and AI-powered customer communications.",
  },
  {
    question: "Does the solution support every telecom function?",
    answer:
      "No, it provides governed investigation and operational patterns within approved scopes, avoiding fake NOC metrics or unsupported broad claims.",
  },
  {
    question: "Can Zoiko coexist with legacy OSS/BSS?",
    answer:
      "Yes, through flexible modernization patterns like wrapping, integrating, or migrating in waves, allowing legacy systems to remain systems of record where bounded.",
  },
  {
    question: "How do we start?",
    answer:
      "You start bounded by defining your operating scope, mapping architecture, establishing controls, and validating workflows before piloting and expanding.",
  },
];

export default function BuyerQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Buyer questions, answered directly
          </h2>
        </div>

        {/* Main Content Grid: Accordion on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Accordion */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="text-base md:text-lg cursor-pointer font-medium text-white group-hover:text-teal-300 transition-colors">
                      {item.question}
                    </span>
                    <span className="ml-4 flex-shrink-0 w-7 h-7 text-[#267880]">
                      {isOpen ? (
                        <Plus className="w-4 h-4" />
                      ) : (
                        <Minus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side: Command Center Image */}
          <div className="lg:col-span-5 flex justify-center sticky top-24">
            <div className="relative w-full h-[450px] sm:h-[500px] max-w-md rounded-3xl overflow-hidden border border-[#7FD0D959] shadow-2xl bg-black/40">
              <Image
                src="/tel/25.png"
                alt="Command center operations team reviewing metrics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
