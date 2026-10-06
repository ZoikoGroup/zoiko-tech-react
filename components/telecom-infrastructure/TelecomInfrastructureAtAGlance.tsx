"use client"
import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface NavigationLink {
  category: string;
  title: string;
  href: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Telecom Infrastructure at Zoiko Tech?",
    answer:
      "A broad solution hub covering OSS/BSS, subscriber operations, identity, cloud and digital infrastructure, APIs and integration, plus billing and communications infrastructure.",
  },
  {
    question: "How is this different from Telecom Operations & Monetization?",
    answer:
      "While Operations & Monetization focuses specifically on billing, rating, and revenue management layers, Telecom Infrastructure provides the overarching foundation supporting network integration, core systems, and foundational APIs.",
  },
  {
    question: "Which Zoiko platforms support this area?",
    answer:
      "ZoikoNex powers the core OSS/BSS and monetization workflows, supported by Zoiko Local for communications, Developer Platform for integration, and Identity foundations for security and access.",
  },
  {
    question: "Does Zoiko provide a full telecom network stack?",
    answer:
      "Zoiko provides software solutions, integration layers, and operational command tools that coexist with or orchestrate carrier infrastructure rather than supplying physical RAN or core hardware directly.",
  },
  {
    question: "Can Zoiko coexist with legacy OSS/BSS?",
    answer:
      "Yes. The architecture is explicitly designed around coexistence patterns, allowing legacy systems to remain systems of record while wrapping them with approved APIs, events, and modern digital layers.",
  },
  {
    question: "What integration methods are available?",
    answer:
      "We support event-driven messaging, secure REST APIs, token exchanges, and standardized data models coordinated through a robust API fabric.",
  },
  {
    question: "How do we start?",
    answer:
      "You can begin with an architecture discovery session to map your current estate, identify seams, choose domain-specific patterns, and plan your initial migration wave.",
  },
];

const navLinks: NavigationLink[] = [
  {
    category: "Broad telecom infrastructure",
    title: "Telecom Operations & Monetization",
    href: "#",
  },
  {
    category: "OSS/BSS modernization",
    title: "Developer Platform",
    href: "#",
  },
  {
    category: "Subscriber identity / access",
    title: "Identity & Access",
    href: "#",
  },
  {
    category: "Communications infrastructure",
    title: "Communications & Collaboration",
    href: "#",
  },
  {
    category: "API / integration program",
    title: "Cloud & Developer Infrastructure",
    href: "#",
  },
];

export default function TelecomInfrastructureAtAGlance() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default as shown in image

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Header & Accordion FAQs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#247780] mb-3">
            Answer-First Buyer Questions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-10 leading-[1.1]">
            Telecom Infrastructure at a glance
          </h1>

          <div className="divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image Card with Dark Navigation Panel */}
        <div className="lg:col-span-5 sticky top-8">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-[#071318]">
            {/* Image Container */}
            <div className="relative w-full h-[240px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/tele/6.png)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071318] via-transparent to-transparent" />
            </div>

            {/* Dark Content Box */}
            <div className="p-6 md:p-8 bg-[#071318] text-white space-y-6">
              <div>
                <p className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-2">
                  Where to go next
                </p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Routes follow your architecture intent, never during an
                  incident, cutover or identity review.
                </p>
              </div>

              {/* Navigation Links List */}
              <div className="space-y-4 pt-2">
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className="group border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-[11px] text-gray-400 mb-0.5">
                      {link.category}
                    </p>
                    <a
                      href={link.href}
                      className="inline-flex items-center text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors"
                    >
                      <span>{link.title}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
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
