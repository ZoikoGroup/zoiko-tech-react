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

const useCases: string[] = [
  "Self-service portals, onboarding flows, and subscription management",
  "Tiered user access, admin consoles, and real-time analytics dashboards",
  "Multilingual localization and jurisdictional content logic",
  "Embedded compliance prompts, consent flows, and privacy configurations",
  "Frontend A/B testing, accessibility compliance, and responsive design",
];

export default function ZoikoWebServicesSaaSSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center"
      >
        {/* Left Content Area */}
        <div className="lg:col-span-10 space-y-6 flex flex-col justify-center py-2 pr-0 lg:pr-32">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Zoiko Web Services — Frontend Excellence & Digital UX
            </h2>

            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              Zoiko Web Services gives SaaS companies the digital touchpoints
              they need to deliver modern, compliant, and conversion-optimized
              experiences.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Use cases include:
          </motion.p>

          <motion.ul variants={itemVariants} className="space-y-3">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>

                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {useCase}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2"
          >
            We combine security, compliance, and design — because digital trust
            begins with digital experience.
          </motion.p>
        </div>

        {/* Right Logo Area */}
        <motion.div
          variants={itemVariants}
          className="mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-end"
        >
          <img
            src="/telecom/web.png"
            alt="Zoiko Web Services Logo"
            className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[340px] h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}