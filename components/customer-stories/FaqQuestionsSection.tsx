"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What are Zoiko Tech Customer Stories?",
    answer:
      "Zoiko Tech Customer Stories are factual, evidence-led summaries of approved customer implementations. They connect an operating challenge, specific Zoiko Tech technology or platform capabilities, verified deployment reality and qualified outcomes without promotional embellishment.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "No. Customer outcomes are specific to the operating environment, scope, architecture, data scale and organizational adoption of the organization in question. Anecdotal or customer-specific metrics do not constitute a warranty, SLA or universal performance guarantee.",
  },
  {
    question: "Can I filter by industry or technology?",
    answer:
      "When the story catalog is connected, discovery permits filtering across approved industry domains, operating challenges, specific technologies, outcome categories and media formats based on published metadata.",
  },
  {
    question: "Are quotes and logos authorized?",
    answer:
      "Yes. Every customer name, logo, quotation and media asset is individually cleared and rights-gated. If an approved logo is unavailable, compliant plain text is displayed; unapproved brand assets are never scraped or simulated.",
  },
  {
    question: "How are metrics verified?",
    answer:
      "Quantitative metrics require an approved baseline, defined denominator, measurement period, sample size and verified methodology. Where numerical proof is not cleared for public disclosure, qualitative observations are presented accurately without synthetic extrapolation.",
  },
  {
    question: "Does a story prove availability in my market?",
    answer:
      "Not necessarily. Story examples reflect specific regional and contractual deployments. Current product availability, geographic regulatory clearance and tenant hosting options should always be verified against official Documentation and Trust Center status.",
  },
  {
    question: "Can a story be anonymous?",
    answer:
      "Yes. When a customer requires anonymity, neutral approved descriptors are utilized. Demographic, scale, technological and geographic details are generalized to prevent re-identification.",
  },
  {
    question: "What happens when rights change?",
    answer:
      "If rights expire or are revoked, associated customer assets, names and claims are promptly withdrawn from story cards, search index, detail views and caching layers in compliance with governance policy.",
  },
];

export default function FaqQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="questions" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[820px] mb-12 sm:mb-14"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-[#102D2F] mb-4">
            Clear answers before you rely on proof.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#5E7076]">
            Attribution, applicability and rights are part of the reading experience.
          </p>
        </motion.div>

        {/* 2-Column Layout: Accordions Left, Graphic Right */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12">
          {/* Accordion Questions - Clean border dividers matching Figma */}
          <div className="flex-1 w-full flex flex-col divide-y divide-[#DEEBEB] border-t border-b border-[#DEEBEB]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="transition-all duration-200">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-5 flex items-center justify-between text-left gap-4 hover:text-[#247780] transition-colors group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-poppins font-bold text-base sm:text-lg text-[#102D2F] group-hover:text-[#247780] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="w-7 h-7 flex items-center justify-center text-[#247780] shrink-0">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                        <div className="pb-6 pr-6 text-sm sm:text-[15px] leading-[25.5px] text-[#5E7076] font-poppins">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[500px] lg:max-w-[480px] shrink-0 mx-auto"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[#DEEBEB] shadow-xl bg-slate-50 group">
              <Image
                src="/customer-stories/faq-visual.png"
                alt="Frequently Asked Questions illustration"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
