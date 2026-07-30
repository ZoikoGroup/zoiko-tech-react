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

const keyCapabilities: string[] = [
  "Client portals with real-time status updates, document exchange, and billing access",
  "End-to-end legal workflow automation (from intake to case closure)",
  "Matter-specific collaboration hubs for internal and external counsel",
  "Cross-jurisdictional dashboards for multi-office or multi-country operations",
  "Integration with CRMs, DMS, legaltech tools, and financial systems",
];

export default function ZoikoAxisLegalSection() {
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
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl text-[#1a1a1a] leading-tight">
              ZoikoAxis™ – Custom Digital Infrastructure for Professional
              Practices
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              ZoikoAxis™ enables law firms, tax professionals, and compliance
              consultancies to operate in a modern digital environment — with
              secure, client-centric platforms tailored to their workflow and
              regulatory responsibilities.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Key capabilities:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {keyCapabilities.map((capability, index) => (
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
            className="text-[#666666] pt-2 leading-relaxed"
          >
            From engagement to resolution — ZoikoAxis™ builds your digital
            practice around precision and trust.
          </motion.p>
        </div>

        {/* Right Image Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 order-2 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-[1/1] overflow-hidden rounded-sm">
            <img
              src="/compliance/read.png"
              alt="Professional practice team collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
