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

const bulletPoints: string[] = [
  "Launching your first B2B SaaS product,",
  "Expanding across continents,",
  "Navigating a funding round,",
  "Or entering highly regulated verticals —",
];

export default function ReadyForScaleSection() {
  return (
    <section className="relative border-t border-t-[#D9D9D9] w-full bg-white py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto space-y-6"
      >
        {/* Title & Subtitle */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
            Ready for Scale. Engineered for Global Trust.
          </h2>
          <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
            All ZoikoTech platforms are cloud-agnostic (AWS, Azure, GCP,
            sovereign and hybrid environments) and compliant with global
            standards (SOC 2, ISO 27001, GDPR, CCPA, HIPAA).
          </p>
        </motion.div>

        {/* Feature List */}
        <motion.ul variants={itemVariants} className="space-y-3 pt-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* Closing Sentence */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-[15px] leading-relaxed text-[#666666] pt-2"
        >
          ZoikoTech gives you the technological backbone to scale like a global
          leader, operate with governance, and win with confidence.
        </motion.p>
      </motion.div>
    </section>
  );
}
