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

const features: string[] = [
  "Continuous threat monitoring and behavioral anomaly detection",
  "Secure tokenization, access intelligence, and data masking",
  "API protection and third-party risk mapping",
  "Identity governance, IAM, and zero-trust readiness",
  "Business continuity, disaster recovery, and breach response layers",
];

export default function ZoikoShieldRiskSection() {
  return (
    <section className="relative w-full bg-[#0070BB14] py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-center"
      >
        {/* Left Logo Area */}
        <motion.div
          variants={itemVariants}
          className="order-2 lg:order-1 flex items-center justify-center lg:justify-start"
        >
          <img
            src="/telecom/shiled.png"
            alt="Zoiko Shield - Securing Tomorrow - Today Logo"
            className="w-full max-w-[320px] h-auto object-contain"
          />
        </motion.div>

        {/* Right Content Area */}
        <div className="order-1 lg:order-2 space-y-6 flex flex-col justify-center">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-[28px] font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoShield™ — Cybersecurity & Operational Risk Infrastructure
            </h2>

            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666] max-w-3xl">
              ZoikoShield™ is our intelligent cybersecurity and risk defense
              platform, purpose-built for digital-first SaaS organizations
              operating in globally exposed environments.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Features include:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {features.map((feature, index) => (
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
            className="text-sm text-[#666666] pt-2 max-w-3xl"
          >
            With ZoikoShield™, security becomes proactive, intelligent, and
            enterprise-ready.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}