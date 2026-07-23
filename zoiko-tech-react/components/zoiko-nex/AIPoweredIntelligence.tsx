"use client";

import React from "react";
import { motion } from "framer-motion";

const aiFeatures = [
  {
    title: "Predictive Network Management",
    description:
      "AI algorithms predict network congestion, equipment failures, and capacity requirements with automated optimization and proactive maintenance.",
  },
  {
    title: "Fraud Detection & Prevention",
    description:
      "Real-time fraud detection across telecom and financial services using machine learning models and behavioral analysis.",
  },
  {
    title: "Customer Lifecycle Intelligence",
    description:
      "AI-driven customer segmentation, churn prediction, and personalized service recommendations to maximize customer lifetime value.",
  },
  {
    title: "Revenue Optimization",
    description:
      "Dynamic pricing algorithms, usage pattern analysis, and cross-selling optimization to maximize ARPU and minimize churn.",
  },
  {
    title: "Compliance Automation",
    description:
      "Automated regulatory reporting, audit preparation, and compliance monitoring across telecom and financial services regulations.",
  },
  {
    title: "Operational Intelligence",
    description:
      "Real-time dashboards, KPI monitoring, and predictive analytics for operational efficiency and strategic decision making.",
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

export default function AIPoweredIntelligence() {
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
            AI-Powered Intelligence
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Zoiko AI integration across all platform operations
          </p>
        </motion.div>

        {/* 6 Cards Grid Layout (3x2 Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {aiFeatures.map((item, idx) => (
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
      </div>
    </section>
  );
}
