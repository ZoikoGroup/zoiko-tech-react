"use client";

import React from "react";
import { motion } from "framer-motion";

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
    question: "What is Customer & Local Commerce at Zoiko Tech?",
    answer:
      "A broad solution hub for customer communications, marketing, commerce journeys, local presence, life orchestration and digital experiences.",
  },
  {
    question: "How is ‘local commerce’ defined here?",
    answer:
      "The strongest local capability is customer communications and local presence through Zoiko Local. Marketplace, listings, POS, reservations or local SEO capabilities require separate product evidence.",
  },
  {
    question: "Which platforms support this area?",
    answer:
      "Zoiko Local, ZoikoVertex and Zoiko Arc. Zoiko Sema may support adjacent business-communication scenarios. Exact scope and availability remain platform-specific.",
  },
  {
    question: "Does Zoiko provide a complete ecommerce platform?",
    answer:
      "No universal ecommerce, checkout, POS or payments platform is part of this solution. The architecture supports handoffs to the authoritative commerce systems you already use.",
  },
  {
    question: "What is Zoiko Arc?",
    answer:
      "An AI-powered life-orchestration ecosystem spanning travel, health, education, finance, mobility and connectivity.",
  },
  {
    question: "How is customer data governed?",
    answer:
      "Through identity, purpose limitation, consent and permission where required, minimum necessary data, and explicit partner and operator boundaries.",
  },
  {
    question: "How do we start?",
    answer:
      "Choose a specific customer journey, map its channels and authoritative systems, identify market requirements, define consent and identity boundaries, and validate a bounded integration.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col items-start mb-12"
        >
          <span className="font-['Poppins',sans-serif] text-[#247780] text-[11px] font-semibold tracking-[0.14em] uppercase mb-3">
            Answer-first buyer questions
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.17] tracking-[-0.03em]">
            Customer & Local Commerce at a<br className="hidden sm:inline" /> glance
          </h2>
        </motion.div>

        {/* 2-Column Static Q&A Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-9 sm:gap-y-11"
        >
          {faqs.map((faq, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0F172A] leading-[28px] mb-2">
                {faq.question}
              </h3>
              <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[15.5px] text-[#334155] leading-[26px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
