"use client";

import React from "react";
import { motion } from "framer-motion";

const securityLayers = [
  {
    title: "ZAI Cognitive Threat Engine",
    description:
      "Predicts and neutralizes anomalies using multi-signal learning and behavioral pattern analysis with real-time threat intelligence.",
  },
  {
    title: "ZRE Security Policy Engine",
    description:
      "Applies and enforces governance-aligned security rules automatically with policy compliance and regulatory adaptation.",
  },
  {
    title: "ZKG Intelligence Graph",
    description:
      "Correlates behavioral, transactional, and network data for comprehensive threat landscape understanding and prediction.",
  },
  {
    title: "ZAFE Adaptive Loop",
    description:
      "Learns from security incidents to improve detection precision and reduce false positives through continuous optimization.",
  },
  {
    title: "ZWS Incident Ledger",
    description:
      "Automates evidence documentation, incident response, and SLA breach logs for legal defensibility and compliance reporting.",
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

export default function FiveLayerSecurityIntelligence() {
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
            Five-Layer Security Intelligence
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive AI-powered cybersecurity stack with autonomous threat
            detection and response
          </p>
        </motion.div>

        {/* 4-Column Grid Layout (5 Items Total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {securityLayers.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-6 sm:p-7 border-l-[4px] border-l-[#4FD1C7] border-y border-r border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[250px]"
            >
              {/* Title */}
              <h3 className="text-[18px] md:text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
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
