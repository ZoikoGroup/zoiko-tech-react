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
  "Biometric and MFA-secured authentication",
  "Tokenization of cardholder and personal data",
  "Behavioral anomaly detection for fraud prevention",
  "Secure APIs and encryption protocols for every payment rail",
  "Disaster recovery, breach containment, and compliance-aligned forensics",
];

export default function ZoikoShieldSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
      >
        {/* Left Image Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center lg:justify-start"
        >
          <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-sm overflow-hidden shadow-sm">
            <img
              src="/fintech/security.png"
              alt="ZoikoShield Security Illustration"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoShield™ – Zero-Trust
              <br className="hidden md:block" /> Security for Financial Systems
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              ZoikoShield™ protects financial systems, user credentials, payment
              data, and access gateways from modern cyber threats — ensuring
              every transaction, session, and connection is shielded from risk.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Security stack includes:
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
            className="text-sm text-[#666666] pt-2"
          >
            Because financial trust is only as strong as the system behind it —
            and ZoikoShield™ ensures it never breaks.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
