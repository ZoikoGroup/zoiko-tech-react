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

const capabilities: string[] = [
  "Identity management for patients, providers, distributors, and staff",
  "Secure APIs for device data, order flows, and payment integrations",
  "Threat intelligence across clinical systems and digital supply chains",
  "Business continuity planning for regulated and high-sensitivity environments",
  "Incident detection, containment, and recovery workflows",
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
              src="/healthcare/sign.png"
              alt="ZoikoShield Cybersecurity for Critical Health Infrastructure"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoShield™ – Cybersecurity
              <br className="hidden md:block" /> for Critical Health
              Infrastructure
            </h2>
            <p className="text-sm leading-relaxed text-[#666666]">
              ZoikoShield™ protects sensitive patient data, MedTech interfaces,
              pharmaceutical IP, and wellness platforms from cyber threats —
              with zero-trust frameworks and continuous defense layers.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Capabilities:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {capability}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Closing Sentence */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2"
          >
            When lives and regulatory licenses are at stake — ZoikoShield™
            defends both.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
