"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is AI & Intelligent Automation at Zoiko Tech?",
      a: "A broad solution family covering enterprise AI, agentic workflows, domain AI, intelligent operations and AI governance.",
    },
    {
      q: "How is this different from AI & Agentic Automation?",
      a: "AI & Intelligent Automation is the umbrella solution family encompassing enterprise AI capabilities, domain intelligence, intelligent operations, and governance. AI & Agentic Automation focuses specifically on agentic workflow execution and orchestrated autonomy.",
    },
    {
      q: "Which Zoiko platforms support this area?",
      a: "Zoiko AI, ZoikoVertex, our Governed Work Orchestration layer, and Responsible AI governance modules across the entire Zoiko enterprise ecosystem.",
    },
    {
      q: "Does Zoiko support fully autonomous AI?",
      a: "No. Zoiko enforces bounded authority with accountable named human owners at every level. We do not make unsupported zero-touch or fully autonomous claims.",
    },
    {
      q: "How is AI governed?",
      a: "Through our embedded 7-layer control fabric including system registration, explicit authority tiers, continuous evaluation, named human oversight, runtime evidence logging, and change control triggers.",
    },
    {
      q: "Can developers build on Zoiko AI?",
      a: "Yes. We offer APIs, SDKs, model interfaces, webhooks, and sandbox environments to integrate and extend AI capabilities into existing enterprise architectures.",
    },
    {
      q: "Where should we start?",
      a: "Start with the work, not the model. Choose a qualified, high-value workflow, define bounded authority, and follow our 7-step gated adoption path from pilot to accountable scale.",
    },
  ];

  const routes = [
    {
      label: "Broad enterprise AI",
      link: "AI & Agentic Automation",
      href: "/solution-zoiko-ai-agentic-automation",
    },
    {
      label: "Agentic workflow",
      link: "Identity & Access",
      href: "/solution-zoiko-identity-access",
    },
    {
      label: "Domain AI",
      link: "Regulatory & Compliance",
      href: "/solution-zoiko-regulatory-compliance",
    },
    {
      label: "Developer / AI platform",
      link: "Cloud & Developer Infrastructure",
      href: "/solution-zoiko-cloud-developer-infrastructure",
    },
    {
      label: "Existing Zoiko customer",
      link: "AI Governance & Assurance",
      href: "#contact-sales",
    },
  ];

  return (
    <section id="faq" className="w-full bg-white py-20 lg:py-[88px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: FAQ Accordions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="font-['Poppins',sans-serif] text-[#247780] text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3">
              Answer-first buyer questions
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.17] tracking-[-0.03em] text-[#0F172A] mb-8">
              AI & Intelligent
              <br />
              Automation at a glance
            </h2>

            {/* Accordion List */}
            <div className="border-t border-[#E2E8F0] divide-y divide-[#E2E8F0]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-4 sm:py-5">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between gap-4 text-left group"
                    >
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] sm:text-[18px] font-semibold text-[#0F172A] group-hover:text-[#247780] transition-colors">
                        {faq.q}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#EBF5F4] flex items-center justify-center shrink-0 text-[#247780] group-hover:bg-[#247780] group-hover:text-white transition-colors">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[15px] leading-[24px] text-[#475569] pt-3 pr-8">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Aside "Where to go next" Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="lg:col-span-5 w-full rounded-[20px] overflow-hidden shadow-xl border border-slate-200"
          >
            {/* Top Image */}
            <div className="relative w-full h-[220px] bg-slate-900">
              <Image
                src="/ai-and-intelligent-automation/faq-curved-architecture.png"
                alt="Curved metal architecture"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Content Container */}
            <div
              className="p-6 sm:p-7 text-white"
              style={{
                background:
                  "linear-gradient(208deg, rgba(6, 85, 72, 0.45) 38%, rgba(0, 38, 42, 0.45) 83%), #001315",
              }}
            >
              <span className="font-['Poppins',sans-serif] text-white text-[11px] font-semibold tracking-[0.16em] uppercase block mb-1">
                Where to go next
              </span>
              <p className="font-['Poppins',sans-serif] text-[13px] text-[#CBD5E1] mb-5">
                Routes follow your starting intent.
              </p>

              <div className="space-y-3.5">
                {routes.map((route, rIndex) => (
                  <div
                    key={rIndex}
                    className="pt-3 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="font-['Poppins',sans-serif] text-[13px] text-[#CBD5E1]">
                      {route.label}
                    </span>
                    <a
                      href={route.href}
                      className="inline-flex items-center gap-1.5 text-[#4DDCAD] hover:text-white font-['Poppins',sans-serif] text-[13px] font-semibold transition-colors"
                    >
                      <span>{route.link}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
