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
    title: "UI Layer",
    subtitle: "Web • Mobile",
  },
  {
    title: "Application Layer",
    subtitle: "Accounting, HR, Compliance Core, Workflows",
  },
  {
    title: "Data Layer",
    subtitle: "Financial records, HR records, Audit logs",
  },
  {
    title: "Integration Layer",
    subtitle: "REST API, SDKs, Webhooks",
  },
  {
    title: "Security Layer",
    subtitle: "IAM, Encryption, RBAC, SSO",
  },
];

const performanceTargets = [
  {
    metric: "<150ms",
    label: "LEDGER WRITES",
  },
  {
    metric: "Sub-second",
    label: "HR UPDATES",
  },
  {
    metric: "Daily",
    label: "AUTOMATED COMPLIANCE CHECKS",
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
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] mb-3 leading-tight">
            Architecture & Engineering
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Enterprise-grade platform built for scale and security
          </p>
        </motion.div>

        {/* Content Layout: Left Architecture Stack, Right Performance Targets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: Stacked Architecture Layers */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-linear-to-r from-[#20B2AA] to-[#4FD1C7] rounded-xl py-4 px-6 text-center text-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center"
              >
                <h3 className="text-[18px] font-semibold tracking-wide">
                  {layer.title}
                </h3>
                <p className="text-white/90 text-[14px] font-normal mt-0.5">
                  {layer.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Performance Targets */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.h3
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="text-2xl font-semibold text-[#20B2AA] mb-2"
            >
              Performance Targets
            </motion.h3>

            {performanceTargets.map((target, index) => (
              <motion.div
                key={target.label}
                custom={0.25 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-[#F8F9FA] rounded-2xl p-6 flex flex-col justify-center transition-all duration-300 hover:bg-[#EAECEE]"
              >
                <span className="text-2xl sm:text-3xl font-bold text-[#FF6B35] tracking-tight">
                  {target.metric}
                </span>
                <span className="text-[14px] text-[#6C757D] tracking-widest uppercase mt-2">
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
