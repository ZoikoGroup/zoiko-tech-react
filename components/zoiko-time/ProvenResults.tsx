"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    role: "NorthStar Systems - CTO",
    quote:
      '"41% faster project turnaround — no burnout. ZoikoTime helped us optimize without compromising team wellbeing."',
  },
  {
    role: "BrightCo - HR Director",
    quote:
      '"We finally understood what real ethical visibility feels like. Complete transparency without invasion of privacy."',
  },
];

const metrics = [
  {
    title: "Key Performance Metrics",
    items: [
      { label: "Conversion Rate", value: "≥ 6.5%" },
      { label: "CAC", value: "≤ $40" },
      { label: "30-Day Retention", value: "≥ 78%" },
      { label: "NPS", value: "≥ 70" },
    ],
  },
  {
    title: "Governance Standards",
    items: [
      { label: "Governance Log Accuracy", value: "100%" },
      { label: "Privacy Compliance", value: "Full" },
      { label: "AI Transparency", value: "Complete" },
    ],
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
            Real-world productivity improvements with ethical AI
          </p>
        </motion.div>

        {/* 4 Cards Grid Layout (3 Top, 1 Bottom Left) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {/* Card 1: NorthStar Systems Testimonial */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[200px]"
          >
            <h3 className="text-[19px] font-bold text-[#0f1124] mb-4 leading-snug">
              {testimonials[0].role}
            </h3>
            <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
              {testimonials[0].quote}
            </p>
          </motion.div>

          {/* Card 2: BrightCo Testimonial */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[200px]"
          >
            <h3 className="text-[19px] font-bold text-[#0f1124] mb-4 leading-snug">
              {testimonials[1].role}
            </h3>
            <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
              {testimonials[1].quote}
            </p>
          </motion.div>

          {/* Card 3: Key Performance Metrics */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[200px]"
          >
            <h3 className="text-[19px] font-bold text-[#0f1124] mb-4 leading-snug">
              {metrics[0].title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[13.5px] text-[#334155] font-medium leading-relaxed">
              {metrics[0].items.map((item, i) => (
                <React.Fragment key={i}>
                  <span>
                    <strong className="font-bold text-[#0f1124]">
                      {item.label}:
                    </strong>{" "}
                    {item.value}
                  </span>
                  {i < metrics[0].items.length - 1 && (
                    <span className="text-slate-300 select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Governance Standards (Bottom Left) */}
          <motion.div
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[200px]"
          >
            <h3 className="text-[19px] font-bold text-[#0f1124] mb-4 leading-snug">
              {metrics[1].title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[13.5px] text-[#334155] font-medium leading-relaxed">
              {metrics[1].items.map((item, i) => (
                <React.Fragment key={i}>
                  <span>
                    <strong className="font-bold text-[#0f1124]">
                      {item.label}:
                    </strong>{" "}
                    {item.value}
                  </span>
                  {i < metrics[1].items.length - 1 && (
                    <span className="text-slate-300 select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
