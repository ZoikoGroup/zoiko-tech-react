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
  "Secure online case or tax filing portals with real-time client updates",
  "Microsites for specialist practice areas (Tax, M&A, Disputes, Regulatory, ESG)",
  "Digital knowledge centers, document builders, and chatbot assistants",
  "Secure payment gateways, consultation scheduling, and client onboarding flows",
  "White-label platforms for affiliate firms in regional or global networks",
];

export default function ZoikoWebServicesLegalSection() {
  return (
    <section className="relative w-full bg-[#0070BB14] py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Content Area */}
        <div className="lg:col-span-7 order-1 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Zoiko Web Services – Digital
              <br className="hidden md:block" /> Portals for Legal, Tax &
              Advisory Brands
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              Zoiko Web Services™ builds client-facing websites and engagement
              platforms for professional service firms that demand excellence in
              both function and form.
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
            {examples.map((example, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {example}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Closing Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2 leading-relaxed"
          >
            Zoiko Web Services is also the technology partner behind Noxx & Co —
            a global professional services platform that delivers
            cross-jurisdictional legal, tax, accounting, and compliance
            expertise, powered entirely by ZoikoTech's enterprise
            infrastructure.
          </motion.p>
        </div>

        {/* Right Image Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 order-2 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <img
              src="/compliance/web.png"
              alt="Digital portals for legal and tax analytics"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
