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

const applications: string[] = [
  "Appointment booking, digital health records, and care coordination",
  "HCP and distributor portals with authentication and licensing workflows",
  "Nutraceutical storefronts with dynamic jurisdictional disclaimers",
  "B2B pharma ordering systems with pricing tiers, product verification, and quota control",
  "Multilingual UX for regulatory clarity and market localization",
];

export default function ZoikoWebServicesSection() {
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
        <div className="lg:col-span-7 order-1 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Zoiko Web Services – UX Layer
              <br className="hidden md:block" /> for Healthcare, Pharma &
              Wellness
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              Zoiko Web Services™ powers compliant, consumer-grade digital
              experiences for health-related systems — from patient apps and
              wellness dashboards to pharmaceutical e-commerce and B2B portals.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Applications:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {applications.map((app, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {app}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Closing Sentence */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2"
          >
            We combine usability and regulation — for systems where precision is
            essential.
          </motion.p>
        </div>

        {/* Right Image Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 order-2 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-sm overflow-hidden shadow-sm">
            <img
              src="/healthcare/med.png"
              alt="Zoiko Web Services UX Layer for Healthcare"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
