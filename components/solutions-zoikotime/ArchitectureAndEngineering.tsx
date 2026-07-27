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

const layers = [
  {
    title: "User Interface Layer",
    subtitle: "Web application, mobile apps, desktop wrappers",
  },
  {
    title: "Application Logic Layer",
    subtitle:
      "Time Engine, Pattern DNA Engine, TES™ Calculator, Analytics Framework",
  },
  {
    title: "Data Layer",
    subtitle: "Time Records, Behavioural Metadata, Insights & Aggregates",
  },
  {
    title: "Integration Layer",
    subtitle: "REST APIs, Webhooks, SDKs",
  },
  {
    title: "Security & Governance Layer",
    subtitle: "IAM, Encryption, Logging, Monitoring",
  },
];

const performanceTargets = [
  {
    metric: "Thousands",
    label: "of concurrent users per tenant",
  },
  {
    metric: "Sub-second",
    label: "write latency for time entries",
  },
  {
    metric: "Real-time",
    label: "dashboard and TES™ updates",
  },
];

export default function ArchitectureAndEngineering() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#2D3748] mb-3 leading-tight">
            Architecture & Engineering
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Secure, scalable, multi-tenant SaaS solution with clear separation
            of concerns
          </p>
        </motion.div>

        {/* Content Layout: Left Architecture Stack, Right Performance Targets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: Stacked Architecture Layers */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-[#38C6B1] rounded-lg py-5 px-6 text-center text-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center"
              >
                <h3 className="text-[17px] md:text-[19px] font-bold tracking-wide">
                  {layer.title}
                </h3>
                <p className="text-white/90 text-[13px] md:text-[14px] font-normal mt-1">
                  {layer.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Performance & Scalability Objectives */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.h3
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="text-2xl font-bold text-[#25A18E] mb-2 leading-snug"
            >
              Performance & Scalability Objectives
            </motion.h3>

            {performanceTargets.map((target, index) => (
              <motion.div
                key={target.metric}
                custom={0.25 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-[#F8F9FA] rounded-xl p-6 flex flex-col justify-center border border-gray-100 transition-all duration-300 hover:bg-[#F1F3F5]"
              >
                <span className="text-2xl sm:text-3xl font-bold text-[#38C6B1] tracking-tight">
                  {target.metric}
                </span>
                <span className="text-[14px] text-[#666666] font-normal mt-1">
                  {target.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
