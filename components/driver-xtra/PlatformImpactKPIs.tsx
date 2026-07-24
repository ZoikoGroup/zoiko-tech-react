"use client";

import React from "react";
import { motion } from "framer-motion";

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

const kpiCards = [
  {
    title: "Trust & Accuracy",
    metrics: [
      { label: "Buyer Trust Index", value: "≥ 90%" },
      { label: "AI Fitment Accuracy", value: "≥ 98.5%" },
      { label: "Verified Seller Retention", value: "≥ 85%" },
    ],
  },
  {
    title: "Operational Excellence",
    metrics: [
      { label: "Resolution Time", value: "≤ 24 hours" },
      { label: "Cross-border Delivery Improvement", value: "41% faster" },
      { label: "Customer Satisfaction", value: "93%" },
    ],
  },
  {
    title: "Sustainability Goals",
    metrics: [
      { label: "Carbon-neutral Fulfillment", value: "Target 2027" },
      { label: "Eco-friendly Packaging", value: "100%" },
      { label: "Offset Programs", value: "Integrated" },
    ],
  },
  {
    title: "Market Leadership",
    metrics: [
      { label: "Global Reach", value: "50+ Countries" },
      { label: "Parts Database", value: "10M+ Items" },
      { label: "Verified Workshops", value: "15,000+" },
    ],
  },
];

export default function PlatformImpactKPIs() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-3 leading-tight"
        >
          Platform Impact & KPIs
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16 max-w-xl leading-relaxed"
        >
          Proven results transforming automotive commerce globally
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {kpiCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[220px]"
            >
              <div>
                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#222222] mb-6 leading-snug">
                  {card.title}
                </h3>

                {/* Inline Metrics with Pipe Dividers */}
                <div className="text-[14px] text-[#555555] leading-relaxed flex flex-wrap items-center gap-y-2">
                  {card.metrics.map((metric, idx) => (
                    <React.Fragment key={metric.label}>
                      <span>
                        <span className="font-bold text-[#222222]">
                          {metric.label}:
                        </span>{" "}
                        {metric.value}
                      </span>
                      {idx < card.metrics.length - 1 && (
                        <span className="text-[#CCCCCC] mx-2.5 font-light">
                          |
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
