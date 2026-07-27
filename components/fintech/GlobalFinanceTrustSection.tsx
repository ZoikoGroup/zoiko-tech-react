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

const supportItems: string[] = [
  "Licensed digital banks and regulated financial institutions",
  "Payroll, benefits, and remittance platforms (including TropiPay)",
  "Embedded finance solutions and RegTech platforms",
  "Fintech disruptors in lending, insurance, and payments",
  "Institutions advancing financial inclusion and responsible finance",
];

export default function GlobalFinanceTrustSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 font-sans text-[#555555]">
      {/* Top Border Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-200 mb-12" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto space-y-6"
      >
        {/* Title & Subtitle */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
            Built for Global Finance. Designed for Trust.
          </h2>
          <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
            ZoikoTech serves regulated and emerging financial markets across the
            U.S., UK, EU, LATAM, Africa, and Asia-Pacific. Our platforms
            support:
          </p>
        </motion.div>

        {/* Feature List */}
        <motion.ul variants={itemVariants} className="space-y-3 pt-2">
          {supportItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* Closing Sentence */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-[15px] text-[#666666] pt-6 leading-relaxed"
        >
          With ZoikoTech, you don't just launch financial products — you build
          global financial systems that scale responsibly, securely, and
          intelligently.
        </motion.p>
      </motion.div>
    </section>
  );
}
