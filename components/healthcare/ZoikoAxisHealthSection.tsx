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
  "HIPAA, GDPR, and health-data compliant backends",
  "HL7/FHIR integrations with clinical, diagnostic, or research platforms",
  "Workflow automation for diagnostics, patient care, product tracking, and virtual delivery",
  "Custom apps for MedTech tools, pharmaceutical sales, and nutraceutical ordering systems",
  "Portals for HCPs, patients, caregivers, distributors, and regulators",
];

export default function ZoikoAxisHealthSection() {
  return (
    <section className="relative w-full bg-[#0070BB14] py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
      >
        {/* Left Content Area */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoAxis™ – Custom
              <br className="hidden md:block" /> Infrastructure for Health &
              Life Sciences
            </h2>
            <p className="leading-relaxed text-[#666666] max-w-xl">
              ZoikoAxis™ delivers enterprise-grade, modular infrastructure
              tailored to the needs of regulated health environments.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-medium text-[#666666]"
          >
            Use cases include:
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
            className="text-[15px] text-[#666666] pt-2"
          >
            From patient onboarding to pharmaceutical logistics — ZoikoAxis™
            delivers the digital core.
          </motion.p>
        </div>

        {/* Right Image Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-sm overflow-hidden shadow-sm">
            <img
              src="/healthcare/graph.png"
              alt="Healthcare professional using digital health interface"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
