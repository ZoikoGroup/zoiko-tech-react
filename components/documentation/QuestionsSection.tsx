"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Documentation?",
    answer:
      "Zoiko Tech Documentation provides source-governed, authoritative guidance for using, configuring, operating, and troubleshooting Zoiko Tech products and platforms. Every public article makes scope, currentness, prerequisites, and expected behavior visible.",
  },
  {
    question: "Is it Developer Resources?",
    answer:
      "No. Documentation focuses on product behavior, workflows, and operational guidance. Technical integration contracts, API references, SDK libraries, and protocol specifications belong to Developer Resources.",
  },
  {
    question: "How do I know an article is current?",
    answer:
      "Product scope, version, and review govern currentness. Every article includes explicit applicability metadata and labeled approved publication or update timestamps; no stale instructions are presented as current.",
  },
  {
    question: "Where do I check an outage?",
    answer:
      "Status owns current availability, maintenance schedules, and active incidents. Static documentation never asserts real-time system state.",
  },
  {
    question: "Where do I verify assurance claims?",
    answer:
      "Security certifications, compliance audits, privacy commitments, and governance attestations are maintained in the Zoiko Tech Trust Center.",
  },
  {
    question: "Does documentation prove a feature is available to me?",
    answer:
      "Documentation presence does not establish availability, commercial entitlement, or a live product on your tenant. Availability must be verified through account settings and Sales evaluation.",
  },
  {
    question: "What if a task fails?",
    answer:
      "Procedures conclude with validation criteria and safe recovery guidelines (such as retry, input correction, or waiting). If an issue persists, use approved Support channels.",
  },
];

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="questions" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 lg:py-[74px]">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[840px] mb-10 sm:mb-12"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.15] tracking-[-0.0217em] text-[#102D2F] mb-3">
            Clear answers before taking action.
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Scope, source and currentness govern task guidance.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col divide-y divide-[#79999D]/35 border-t border-b border-[#79999D]/35">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="transition-all duration-200">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4 hover:text-[#247780] transition-colors group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-poppins font-bold text-base sm:text-[17px] leading-[27.2px] text-[#102D2F] group-hover:text-[#247780] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Image
                      src="/documentation/plus-icon.svg"
                      alt="Toggle FAQ"
                      width={16}
                      height={16}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-6 text-sm sm:text-[15px] leading-[24px] text-[#587176] font-poppins font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
