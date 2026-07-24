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

const technicalCards = [
  {
    title: "Frontend Technology",
    description:
      "React + Next.js + Tailwind CSS with responsive design optimized for all devices and accessibility compliance.",
  },
  {
    title: "Backend Infrastructure",
    description:
      "Zoiko Cloud (AWS + GCP) with WebSocket real-time messaging and end-to-end encryption for secure communications.",
  },
  {
    title: "AI Stack Integration",
    description:
      "Full Zoiko AI Integration (Nova + Halo + Ethos) for personalization, content moderation, and community safety.",
  },
  {
    title: "Ecosystem Connectivity",
    description:
      "Native integration with Zoiko Pay, ZWS, Zoiko Suite, Zoiko TV, Zoiko Axis, and Zoiko Assure for comprehensive functionality.",
  },
];

const performanceMetrics = [
  { label: "Uptime", value: "99.987%" },
  { label: "Latency", value: "<80ms" },
  { label: "Registered Users", value: "3.5M by Q4 2026" },
  { label: "Daily Messages", value: "15M+" },
  { label: "Retention", value: "80% (90-day)" },
];

export default function TechnicalExcellenceIntegration() {
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
          Technical Excellence & Integration
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
          Built on cutting-edge technology with comprehensive ecosystem
          integration
        </motion.p>

        {/* Top Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-8">
          {technicalCards.map((card, index) => (
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
                <h3 className="text-xl font-bold text-[#222222] mb-4">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#555555] text-[14px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Performance Targets Banner */}
        <motion.div
          custom={0.52}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
          className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_12px_#0000001A] flex items-center justify-center hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300"
        >
          <div className="text-[14px] text-[#555555] text-center flex flex-wrap justify-center items-center gap-y-2 leading-relaxed">
            <span className="font-bold text-[#222222] mr-2">
              Performance Targets:
            </span>
            {performanceMetrics.map((metric, idx) => (
              <React.Fragment key={metric.label}>
                <span>
                  {metric.label} {metric.value}
                </span>
                {idx < performanceMetrics.length - 1 && (
                  <span className="text-[#CCCCCC] mx-3">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
