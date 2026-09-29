"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

const faqs = [
  {
    question: "What is Zoiko Tech Workforce & Productivity?",
    answer:
      "Zoiko Tech Workforce & Productivity brings time, workforce context, collaboration signals and operational accountability into governed workflows. It connects systems of work with HR and business rules without turning management into invasive employee surveillance.",
  },
  {
    question: "Is workforce visibility the same as employee monitoring?",
    answer:
      "No. Our model strictly enforces purpose limitation and role-based visibility. We provide operational context around projects, handoffs, exceptions, and schedules rather than keylogging, screen capture, or surveillance scoring.",
  },
  {
    question: "Which Zoiko platforms support this solution?",
    answer:
      "ZoikoTime provides governed time tracking and workforce assurance; Zoiko HR supplies employee master data, policy, and leave handoffs; and Zoiko Sema provides secure, auditable communication and coordination workflows.",
  },
  {
    question: "How should workforce data be shown to managers?",
    answer:
      "Data is filtered by least privilege and specific task requirements. Executive views receive aggregate operational metrics, while managers only see workflow-level context and exceptions necessary for day-to-day team coordination.",
  },
  {
    question: "How are exceptions handled?",
    answer:
      "Exceptions such as missing time signals, schedule conflicts, or overtime outside policy are routed to designated owners with transparent provenance, review timers, and auditable approval workflows.",
  },
  {
    question: "Can communication data be used for productivity scoring?",
    answer:
      "No. Private communication content is never parsed or scored for employee performance. Communication metadata is only utilized as context for explicit workflow decisions and auditable operational handoffs where approved.",
  },
  {
    question: "How do we start?",
    answer:
      "Start with a defined operational purpose and a bounded pilot. We work with you to map source systems, document authority boundaries, configure governance rules, and validate measurable workflow outcomes before full rollout.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full text-white py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(153deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10 max-w-[820px]"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-white">
            Buyer questions, answered directly
          </h2>
        </motion.div>

        {/* FAQ Accordion List (width: 820px in Figma) */}
        <div className="max-w-[820px] flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={index * 0.05}
                className="border-b border-[#7FD0D9]/30 py-3"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left py-2 gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] sm:text-[16.8px] font-semibold text-white group-hover:text-[#7FD0D9] transition-colors leading-[26.8px]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7FD0D9] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
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
                      <p className="pt-2 pb-4 text-[15px] sm:text-[15.5px] leading-[25px] text-[#DCECEE] font-normal">
                        {faq.answer}
                      </p>
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
