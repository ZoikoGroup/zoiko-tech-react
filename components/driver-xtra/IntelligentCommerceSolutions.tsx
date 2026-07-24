"use client";

import React from "react";
import { motion } from "framer-motion";

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

const intelligencePillars = [
  {
    title: "AI Fitment Engine (Zoiko AI)",
    description:
      "Predicts and validates part compatibility in real time using advanced machine learning and comprehensive vehicle databases.",
  },
  {
    title: "SellerTrust Protocol",
    description:
      "Multi-tier verification using blockchain-backed transaction history ensuring authentic, high-quality parts and services.",
  },
  {
    title: "FleetOps Dashboard",
    description:
      "Provides predictive insights for fleets and mobility enterprises with maintenance scheduling and cost optimization.",
  },
  {
    title: "Global Compliance Suite",
    description:
      "Powered by Zoiko Assure for automated tax, customs, and trade alignment across multiple jurisdictions.",
  },
  {
    title: "Unified Commerce Stack",
    description:
      "Zoiko Pay handles instant, multi-currency, and escrow-secured transactions with comprehensive fraud protection.",
  },
];

export default function IntelligentCommerceSolutions() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-3 leading-tight"
        >
          Intelligent Commerce Solutions
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16 max-w-xl leading-relaxed"
        >
          Five integrated intelligence pillars transforming automotive commerce
        </motion.p>

        {/* Intelligence Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {intelligencePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="relative bg-white p-6 pl-8 flex flex-col justify-start transition-all duration-300 border-l-[3px] border-[#52D4B9] min-h-[220px]"
            >
              <div>
                {/* Pillar Title */}
                <h3 className="text-lg font-bold text-[#222222] mb-3 leading-snug">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-[#666666] text-[14px] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
