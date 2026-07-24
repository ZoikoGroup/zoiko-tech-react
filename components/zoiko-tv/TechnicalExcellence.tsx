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
      "React + Next.js with responsive design, optimized for all devices and accessibility standards including WCAG 2.2 AA compliance.",
  },
  {
    title: "Zoiko Cloud Backend",
    description:
      "Scalable cloud infrastructure with Zoiko AI integration, real-time analytics, and automated content delivery optimization.",
  },
  {
    title: "Global CDN",
    description:
      "AWS + Akamai content delivery network ensuring fast, reliable streaming with adaptive bitrate and quality optimization worldwide.",
  },
  {
    title: "Performance Metrics",
    metrics: [
      { label: "Uptime", value: "99.987%" },
      { label: "Latency", value: "<80ms" },
      { label: "Support", value: "Global" },
      { label: "Offline", value: "Available" },
    ],
  },
];

export default function TechnicalExcellence() {
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
          Technical Excellence
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16"
        >
          Cloud-native streaming infrastructure with global reach
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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

                {/* Card Content */}
                {card.description && (
                  <p className="text-[#555555] text-[14px] leading-relaxed">
                    {card.description}
                  </p>
                )}

                {/* Metrics Specific Layout */}
                {card.metrics && (
                  <div className="mt-2 space-y-2 text-[14px]">
                    <div className="flex items-center gap-x-2 text-[#222222]">
                      <span className="font-bold">Uptime:</span>
                      <span className="text-[#555555] font-normal">
                        {card.metrics[0].value}
                      </span>
                      <span className="text-[#CCCCCC] mx-1">|</span>
                      <span className="font-bold">Latency:</span>
                      <span className="text-[#555555] font-normal">
                        {card.metrics[1].value}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#222222]">
                      <span className="font-bold">Support:</span>
                      <span className="text-[#555555] font-normal">
                        {card.metrics[2].value}
                      </span>
                      <span className="text-[#CCCCCC] mx-1">|</span>
                      <span className="font-bold">Offline:</span>
                      <span className="text-[#555555] font-normal">
                        {card.metrics[3].value}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
