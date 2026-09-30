"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const faqs = [
  {
    question: "What is Zoiko Tech Cybersecurity & Resilience?",
    answer:
      "An enterprise solution approach for protecting systems and users while supporting business continuity through secure engineering, identity, least privilege, threat prevention, security operations, evidence and resilience controls.",
  },
  {
    question: "Which Zoiko platform supports this solution?",
    answer:
      "Zoiko Shield is the primary delivery platform, providing unified security posture, threat mitigation, identity enforcement, and audit-ready evidence workflows.",
  },
  {
    question: "Does Zoiko provide a full SOC, SIEM, XDR or MDR service?",
    answer:
      "Zoiko Tech delivers vendor-neutral detection, investigation, and response architectures that integrate with your existing telemetry, SIEM, and SOC operations without requiring rip-and-replace.",
  },
  {
    question: "How does identity fit into cybersecurity?",
    answer:
      "Identity is the primary perimeter. Zoiko Tech couples least privilege, authentication, authorization, delegated access, and continuous entitlement reviews directly into core workflows.",
  },
  {
    question: "How is resilience addressed?",
    answer:
      "Resilience extends beyond disaster recovery and backups to encompass critical service mapping, dependency tracking, degraded-mode operational plans, and verified recovery procedures.",
  },
  {
    question: "Where can buyers review security evidence?",
    answer:
      "Buyers and compliance teams can access authoritative security, privacy, and compliance documentation directly through the Zoiko Tech Trust Center.",
  },
  {
    question: "How do we start?",
    answer:
      "Start with an initial scope and exposure assessment to identify critical assets, baseline existing controls, and prioritize remediation milestones.",
  },
];

export default function FaqSection() {
  // First item open by default as in Figma design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[1180px] mx-auto mb-8 sm:mb-12"
        >
          <h2 className="font-sora text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold text-[#0A1416] leading-[1.2] tracking-[-0.02em]">
            Buyer questions, answered directly
          </h2>
        </motion.div>

        {/* Accordion List with border-t and border-b dividers */}
        <div className="w-full max-w-[1180px] mx-auto border-t border-[#D5E3E5]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.1 + idx * 0.04}
                className="border-b border-[#D5E3E5] transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sora text-[16px] sm:text-[17.5px] font-semibold text-[#0A1416] group-hover:text-[#247780] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className="text-[24px] sm:text-[26px] font-medium text-[#247780] leading-none shrink-0 w-8 h-8 flex items-center justify-center">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="pb-6 sm:pb-7 max-w-[707px] text-[15px] sm:text-[16px] text-[#4D6468] leading-[26px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
