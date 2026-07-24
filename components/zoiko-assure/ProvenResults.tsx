"use client";

import React from "react";
import { motion } from "framer-motion";

const resultsData = [
  {
    organization: "BankOne Americas",
    impact:
      "Achieved 90% reduction in manual audit hours through automated compliance monitoring and reporting.",
  },
  {
    organization: "Telco Europa",
    impact:
      "Zero regulatory breach fines since ZoikoAssure adoption with comprehensive telecom compliance.",
  },
  {
    organization: "FinServe Asia",
    impact:
      "Cut vendor SLA breach claims by 41% through proactive monitoring and automated notifications.",
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

export default function ProvenResults() {
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
            Proven Results
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Real-world impact from leading organizations
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {resultsData.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.12 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[200px]"
            >
              {/* Organization Title */}
              <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.organization}
              </h3>

              {/* Impact Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
