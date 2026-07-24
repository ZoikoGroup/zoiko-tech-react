"use client";

import React from "react";
import { motion } from "framer-motion";

const outcomeCards = [
  {
    title: "FinTel Americas",
    description: (
      <>
        <strong className="text-[#0f1124] font-bold">93% reduction</strong> in
        phishing incidents with{" "}
        <strong className="text-[#0f1124] font-bold">2 minutes median</strong>{" "}
        detection time for advanced persistent threats.
      </>
    ),
  },
  {
    title: "Zoiko Telecom UK",
    description: (
      <>
        Integrated fraud analytics{" "}
        <strong className="text-[#0f1124] font-bold">
          cut SIM-swap losses by 38%
        </strong>{" "}
        with real-time behavioral analysis and automated response.
      </>
    ),
  },
  {
    title: "MedAxis Health",
    description: (
      <>
        <strong className="text-[#0f1124] font-bold">0 HIPAA violations</strong>{" "}
        with real-time incident evidence submission via ZWS and automated
        compliance reporting.
      </>
    ),
  },
  {
    title: "Performance Metrics",
    description: (
      <div className="flex flex-wrap items-center gap-y-1.5 text-[13.5px] sm:text-[14px]">
        <span className="text-[#64748b]">
          <strong className="text-[#0f1124] font-bold">Demo Conversion:</strong>{" "}
          &gt;6%
        </span>
        <span className="mx-2 text-slate-300 font-light">|</span>
        <span className="text-[#64748b]">
          <strong className="text-[#0f1124] font-bold">
            Detection Accuracy:
          </strong>{" "}
          &gt;99.3%
        </span>
        <span className="mx-2 text-slate-300 font-light">|</span>
        <span className="text-[#64748b]">
          <strong className="text-[#0f1124] font-bold">
            Response Automation:
          </strong>{" "}
          &gt;85%
        </span>
        <span className="mx-2 text-slate-300 font-light">|</span>
        <span className="text-[#64748b]">
          <strong className="text-[#0f1124] font-bold">Renewal Rate:</strong>{" "}
          &ge;93%
        </span>
      </div>
    ),
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

export default function ProvenSecurityOutcomes() {
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
            Proven Security Outcomes
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Real-world impact from leading organizations across industries
          </p>
        </motion.div>

        {/* 3-Column Grid Layout (4 Items Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {outcomeCards.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[200px]"
            >
              {/* Card Title */}
              <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <div className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
