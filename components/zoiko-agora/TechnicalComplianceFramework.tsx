"use client";

import React from "react";
import { motion } from "framer-motion";

const frameworkItems = [
  {
    title: "Frontend Architecture",
    description:
      "React + Next.js (modular, API-first) for scalable, responsive user experience across devices.",
  },
  {
    title: "Backend Infrastructure",
    description:
      "Zoiko Cloud (multi-tenant AWS with jurisdictional isolation) for secure, compliant operations.",
  },
  {
    title: "Compliance Standards",
    description:
      "SOC 2 Type II, ISO/IEC 42001, GDPR, and U.S. federal privacy alignment for global operations.",
  },
  {
    title: "Integration Stack",
    description:
      "Zoiko AI (Gnostic + Nova layers), Zoiko Assure, Zoiko Pay, Zoiko Suite, and ZWS integration.",
  },
  {
    title: "Multi-Jurisdictional Support",
    description:
      "Smart contract templates adapt automatically to governing law (U.S., U.K., E.U., India, etc.).",
  },
  {
    title: "Governance Oversight",
    description:
      "Human-in-Command Council oversees appeals with AI reasoning logs in Zoiko Assure Transparency Hub.",
  },
];

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

export default function TechnicalComplianceFramework() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-14 md:mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Technical & Compliance Framework
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Built on enterprise-grade technology with comprehensive regulatory
            compliance
          </p>
        </motion.div>

        {/* 6 Cards Grid (4 columns top row, 2 bottom row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {frameworkItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 border-y border-r border-slate-200/80 border-l-4 border-l-[#4FD1C7] flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Card Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
