"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Scale, ClipboardList, Users } from "lucide-react";

const governanceFeatures = [
  {
    icon: Search,
    title: "Right-to-Explanation Dashboard",
    description:
      "Complete transparency into AI decision-making processes with detailed reasoning logs for every recommendation.",
  },
  {
    icon: Scale,
    title: "Bias Monitoring System",
    description:
      "Continuous algorithmic fairness testing with automated bias detection and correction protocols.",
  },
  {
    icon: ClipboardList,
    title: "Annual AI Ethics Impact Report",
    description:
      "Comprehensive yearly assessment via Zoiko Assure documenting ethical AI practices and community impact.",
  },
  {
    icon: Users,
    title: "Human-in-Command Architecture",
    description:
      "Always maintain human oversight for critical health decisions with immediate escalation protocols.",
  },
];

// Motion animation variants with typed easing
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

export default function GovernanceEthicsDashboard() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
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
            Governance &amp; Ethics Dashboard
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Transparent AI decision-making with comprehensive ethical oversight
          </p>
        </motion.div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {governanceFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                custom={0.12 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
              >
                {/* Circular Teal Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D] flex items-center justify-center mb-6 shadow-xs">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
