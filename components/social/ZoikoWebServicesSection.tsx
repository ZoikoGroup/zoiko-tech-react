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

const examples: string[] = [
  "National service portals with citizen accounts, document upload, and e-services",
  "Conservation microsites with interactive species maps and adoption engines",
  "Public education dashboards with digital literacy and multilingual content",
  "Donation and fundraising platforms with integrated CRM functionality",
  "Age-friendly portals for elder services, powered by ZoikoPal™",
];

export default function ZoikoWebServicesSection() {
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
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Zoiko Web Services – Digital Platforms
              <br className="hidden md:block" /> for Public Access & Engagement
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              Zoiko Web Services™ builds intuitive, accessible, and
              mission-aligned portals for governments, NGOs, and conservation
              organizations.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Examples include:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {examples.map((item, index) => (
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
            className="text-sm text-[#666666] pt-2 leading-relaxed"
          >
            From civic service to conservation storytelling — we bring digital
            purpose to life.
          </motion.p>
        </div>

        {/* Right Image Area */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[42%] order-2 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <img
              src="/social/tax.png"
              alt="Person using laptop displaying tax and digital service interface graphics"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
