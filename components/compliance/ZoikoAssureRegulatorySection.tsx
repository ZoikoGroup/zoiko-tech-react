"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const useCases: string[] = [
  "Intelligent KYC, AML, conflict-of-interest checks, and client onboarding",
  "GDPR, data residency, confidentiality, and privilege enforcement",
  "Jurisdiction-specific engagement letter templates with risk ratings",
  "Regulator-ready audit trails for ethics committees, tax authorities, and bar associations",
  "Real-time compliance alerting across multiple service verticals",
];

export default function ZoikoAssureRegulatorySection() {
  return (
    <section className="relative w-full bg-[#0070BB14] py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Content Area */}
        <div className="lg:col-span-7 order-1 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoAssure™ – Regulatory
              <br className="hidden md:block" /> Intelligence for Professional
              Services
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              ZoikoAssure™ automates firm-wide compliance across evolving local
              and international standards — embedding governance into daily
              operations.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Use cases:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {useCase}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Closing Sentence */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2 leading-relaxed"
          >
            Whether you’re advising Fortune 500s or startups — ZoikoAssure™
            embeds integrity into every matter.
          </motion.p>
        </div>

        {/* Right Image Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 order-2 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-[1/1] overflow-hidden rounded-sm">
            <img
              src="/compliance/regu.png"
              alt="Legal professional working at office desk"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
