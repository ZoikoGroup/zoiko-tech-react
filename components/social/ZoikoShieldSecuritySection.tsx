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
  "End-to-end encryption for health, location, and identity data",
  "Access governance for program teams, field officers, and oversight bodies",
  "Cyber threat detection for NGOs operating in high-risk or politically sensitive zones",
  "Secure infrastructure for public-sector databases and legacy integrations",
  "Breach reporting and compliance-aligned incident management",
];

export default function ZoikoShieldSecuritySection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between"
      >
        {/* Left Image Area */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[42%] order-2 lg:order-1 flex items-center justify-center lg:justify-start"
        >
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <img
              src="/social/nex.png"
              alt="Hand using stylus near laptop with secure data graphics"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <div className="w-full lg:w-[58%] order-1 lg:order-2 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoShield™ – Security
              <br className="hidden md:block" /> for Mission-Critical Systems
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              ZoikoShield™ protects sensitive data in high-trust environments —
              from endangered species tracking and education records to donor
              information and eldercare access credentials.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Features:
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

          {/* Closing Sentence */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2 leading-relaxed"
          >
            Security is not a luxury in public service — ZoikoShield™ makes it a
            standard.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
