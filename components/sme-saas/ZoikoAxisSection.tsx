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
  "Custom SaaS workflow design and dynamic automation",
  "Multi-region data handling and jurisdictional logic engines",
  "Role-based access controls, SSO, and identity federation",
  "Integration with CRMs, ERPs, KYC/AML tools, and productivity stacks",
  "Modular backends for vertical SaaS, platforms, and B2B ecosystems",
];

export default function ZoikoAxisSection() {
  return (
    <section className="relative w-full bg-[#0070BB14] py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch"
      >
        {/* Left Content Area */}
        <div className="lg:col-span-8 order-1 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoAxis™ — Custom Technology That Adapts to You
            </h2>
            <p className="leading-relaxed text-[#666666]">
              ZoikoAxis™ is our flagship platform for customized technology
              infrastructure. It enables SaaS firms to build architecture that
              aligns with their product strategy, user base, and jurisdictional
              exposure — not one-size-fits-all templates.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Capabilities include:
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
            With ZoikoAxis™, software becomes sovereign, scalable, and
            strategic.
          </motion.p>
        </div>

        {/* Right Image/Logo Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 order-2 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-[444px] min-h-[194px] rounded-sm overflow-hidden flex items-center justify-center p-8">
            <img
              src="/telecom/axis.png"
              alt="Zoiko Axis Logo"
              className="max-w-[280px] md:max-w-[320px] w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
