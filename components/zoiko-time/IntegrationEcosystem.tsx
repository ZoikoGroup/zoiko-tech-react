"use client";

import React from "react";
import { motion } from "framer-motion";

const integrationCards = [
  {
    title: "Zoiko Platform",
    description:
      "Native integration with ZoikoSuite, ZoikoAxis, and ZoikoAI for comprehensive business intelligence and workflow optimization.",
  },
  {
    title: "Microsoft 365 & Google Workspace",
    description:
      "Deep integration with Office applications, Teams, Gmail, and Calendar for seamless productivity tracking and insights.",
  },
  {
    title: "Collaboration Tools",
    description:
      "Slack, Zoom, Discord integration for communication pattern analysis and meeting effectiveness optimization.",
  },
  {
    title: "Project Management",
    description:
      "Asana, Jira, Trello, and Monday.com connectivity for task completion analysis and project timeline optimization.",
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

export default function IntegrationEcosystem() {
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
            Integration Ecosystem
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Seamless connectivity with business tools and Zoiko platform
          </p>
        </motion.div>

        {/* 4 Cards Layout (3 Upper, 1 Lower Left) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-8">
          {integrationCards.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[220px]"
            >
              {/* Card Title */}
              <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Data Flow Bar */}
        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full bg-white rounded-[10px] p-5 sm:p-6 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 text-center"
        >
          <p className="text-[#334155] text-[14px] sm:text-[15px] font-medium leading-relaxed">
            <span className="font-bold text-[#0f1124]">Data Flow:</span> Data
            &rarr; Zoiko AI Reasoning &rarr; Insight &rarr; Decision &rarr;
            Governance Log
          </p>
        </motion.div>
      </div>
    </section>
  );
}
