"use client";

import React from "react";
import { motion } from "framer-motion";

const aiModules = [
  {
    title: "ZOL: Orchestration Layer",
    description:
      "Manages comprehensive workflow logic, process orchestration, and inter-system communication with intelligent routing and decision-making capabilities.",
  },
  {
    title: "ZRE: Regulatory Engine",
    description:
      "Enforces jurisdictional AI policy compliance automatically with real-time monitoring, violation detection, and compliance reporting across multiple regulatory frameworks.",
  },
  {
    title: "ZKG: Knowledge Graph",
    description:
      "Enables enterprise knowledge integration, relationship mapping, and contextual understanding across all business processes and data sources.",
  },
  {
    title: "ZWS: Support Layer",
    description:
      "Comprehensive DevSecOps, infrastructure management, and compliance delivery with 24/7 monitoring and support services.",
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

export default function CoreAIModules() {
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
            Core AI Modules
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Foundational components powering enterprise AI automation
          </p>
        </motion.div>

        {/* 4-Column Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {aiModules.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-6 sm:p-7 border-l-[4px] border-l-[#4FD1C7] border-y border-r border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[250px]"
            >
              {/* Module Title */}
              <h3 className="text-[18px] md:text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Module Description */}
              <p className="text-[#64748b] text-[13.5px] md:text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
