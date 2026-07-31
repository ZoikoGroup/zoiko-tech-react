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

const practices: string[] = [
  "Corporate, commercial & employment law",
  "Tax advisory, accounting & cross-border compliance",
  "Regulatory consulting & litigation support",
  "M&A, insolvency & restructuring",
  "Governance, risk & compliance (GRC) across jurisdictions",
];

export default function LegalTaxComplianceSection() {
  return (
    <section className="relative w-full bg-[#F5F5F5] py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Image Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center"
        >
          <div className="relative w-full h-[510px] overflow-hidden rounded-sm">
            <img
              src="/compliance/hero.png"
              alt="Legal, Tax & Compliance Firms"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Legal, Tax & Compliance Firms
            </h2>
            <p className="text-[17px] leading-relaxed text-[#666666]">
              ZoikoTech empowers world-class legal, tax, and compliance
              organizations with the digital infrastructure needed to deliver
              regulated services at scale — securely, intelligently, and
              globally.
            </p>
            <p className="text-[17px] leading-relaxed text-[#666666]">
              Whether you're a boutique tax consultancy, a leading commercial
              law firm, a multidisciplinary compliance practice, or part of a
              global professional services group, ZoikoTech provides the secure
              platforms, embedded compliance engines, and modular digital
              systems that streamline client service and operational oversight.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            We support practices across:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {practices.map((practice, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {practice}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Closing Sentence */}
          <motion.p
            variants={itemVariants}
            className="text-[#666666] max-w-xl pt-2 leading-relaxed"
          >
            From managing privileged documents to orchestrating global
            regulatory obligations — ZoikoTech is the partner behind tomorrow’s
            most trusted professional firms.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
