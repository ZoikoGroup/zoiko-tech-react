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

const architectureLayers = [
  {
    title: "User Layer",
    subtitle: "Tablet, mobile, web",
  },
  {
    title: "Interaction Layer",
    subtitle: "Voice, chat, accessibility",
  },
  {
    title: "Intelligence Layer",
    subtitle: "Cognitive Rhythm Engine™",
  },
  {
    title: "Circle of Care Layer",
    subtitle: "Family and carer coordination",
  },
  {
    title: "Data Layer",
    subtitle: "Routines, communication logs, preferences",
  },
  {
    title: "Integration Layer",
    subtitle: "Home devices, calendars",
  },
  {
    title: "Security Layer",
    subtitle: "Encryption, RBAC, audit logs",
  },
];

const performanceTargets = [
  {
    metric: "<250ms",
    description: "conversational responses",
  },
  {
    metric: "Real-time",
    description: "updates",
  },
  {
    metric: "99.9%",
    description: "uptime",
  },
];

export default function ArchitectureEngineering() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Header Section */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#2D3748] mb-3 tracking-tight">
            Architecture & Engineering
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Secure, reliable platform designed for elder care environments
          </p>
        </motion.div>

        {/* Main Grid: Architecture Stack + Performance Targets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-start">
          {/* Left Column: Stacked Teal Architecture Layers (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-3.5">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                custom={0.15 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="w-full bg-gradient-to-r from-[#1D7667] to-[#34AB98] text-white rounded-lg py-3.5 px-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-semibold text-[18px] md:text-[17px] tracking-wide mb-0.5">
                  {layer.title}
                </h3>
                <p className="text-[16px] text-white/80 font-normal">
                  {layer.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Performance Targets (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <motion.h3
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="text-2xl font-bold text-[#20B2AA] tracking-tight mb-8"
            >
              Performance Targets
            </motion.h3>

            <div className="flex flex-col space-y-4">
              {performanceTargets.map((target, index) => (
                <motion.div
                  key={index}
                  custom={0.25 + index * 0.08}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeUpVariant}
                  className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100/80 shadow-sm flex flex-col justify-center min-h-[96px]"
                >
                  <span className="text-2xl md:text-3xl font-bold text-[#1F796A] tracking-tight mb-1">
                    {target.metric}
                  </span>
                  <span className="text-[#6C757D] font-normal leading-snug">
                    {target.description}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
