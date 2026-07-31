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

const keyFeatures: string[] = [
  "Jurisdiction-specific rule engines and audit workflows",
  "Automated risk scoring and regulatory mapping",
  "Internal policy automation and enforcement dashboards",
  "Embedded compliance nudges and regional triggers",
  "Multi-entity reporting and board-level oversight",
];

export default function ZoikoAssureSection() {
  return (
    <section className="relative w-full bg-[#F2F2F2] py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center"
      >
        {/* Left Content Area */}
        <div className="lg:col-span-10 space-y-6 flex flex-col justify-center py-2 pr-0 lg:pr-32">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoAssure™ — Embedded Compliance, Automated Oversight
            </h2>

            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              ZoikoAssure™ enables SaaS companies to stay ahead of a complex,
              shifting regulatory landscape. From GDPR and CCPA to SOC 2, HIPAA,
              and ISO standards, we embed compliance into the SaaS lifecycle —
              early, elegantly, and at scale.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Key features:
          </motion.p>

          <motion.ul variants={itemVariants} className="space-y-3">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>

                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2"
          >
            ZoikoAssure™ transforms compliance from burden to business enabler.
          </motion.p>
        </div>

        {/* Right Logo Area */}
        <motion.div
          variants={itemVariants}
          className="mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-end"
        >
          <img
            src="/leadership-and-governance/zoikoassure.png"
            alt="Zoiko Assure Logo"
            className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[340px] h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
