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
  "Case management systems for humanitarian aid, grants, or citizen services",
  "Volunteer, donor, and beneficiary engagement platforms",
  "AI-powered data collection for impact measurement and field operations",
  "Inter-agency collaboration tools with multilingual and accessibility features",
  "Integrations with government ID systems, education databases, or EHRs",
];

export default function ZoikoAxisPublicGoodSection() {
  return (
    <section className="relative w-full bg-[#0070BB14] py-16 md:py-24 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between"
      >
        {/* Left Content Area */}
        <div className="w-full lg:w-[58%] order-1 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoAxis™ – Infrastructure
              <br className="hidden md:block" /> for Public Good
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              ZoikoAxis™ enables public institutions and mission-driven
              organizations to build purpose-aligned digital systems — while
              remaining agile, secure, and community-centered.ZoikoAxis™ enables
              public institutions and mission-driven organizations to build
              purpose-aligned digital systems — while remaining agile, secure,
              and community-centered.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Core capabilities:
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
            className="text-sm text-[#666666] pt-2 leading-relaxed"
          >
            ZoikoAxis™ transforms purpose into platforms — helping organizations
            serve better, faster, and wider.
          </motion.p>
        </div>

        {/* Right Image Area */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[42%] order-2 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <img
              src="/social/axis.png"
              alt="Professional working at desk with laptop and legal scales of justice"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
