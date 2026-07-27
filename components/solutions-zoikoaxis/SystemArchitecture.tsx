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

const systemArchitectureData = [
  {
    title: "Architecture Overview",
    tags: [
      "Axis Intelligence Framework™",
      "AI Pipelines",
      "OSS/BSS Modules",
      "Workflow Engine",
      "API Orchestration",
    ],
  },
  {
    title: "Data Layer",
    tags: ["Knowledge Graphs", "Data Warehouses", "Event Logs"],
  },
  {
    title: "Integration Layer",
    tags: ["Telecom APIs", "Payment Providers", "ERP/CRM Systems"],
  },
  {
    title: "Security Layer",
    tags: ["IAM/SSO", "Encryption", "RBAC", "SIEM"],
  },
];

export default function SystemArchitecture() {
  return (
    <section className="w-full bg-[#F8FAFA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-4"
        >
          <div className="flex flex-row items-center justify-center p-[6px_16px] bg-[#EEF8F7] border border-[#D5EDED] rounded-[100px]">
            <span className="text-[#107F6D] font-inter font-semibold text-[13px] leading-[18px]">
              System Architecture
            </span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-[20px]"
        >
          <h2 className="text-[#1D2939] font-inter font-bold text-[40px] md:text-[48px] leading-[50px] md:leading-[60px] tracking-[-0.96px] max-w-[800px]">
            Built on Enterprise-Grade Foundations
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#667085] font-inter font-normal text-[16px] leading-[24px] text-center mb-[48px] max-w-[640px]"
        >
          Our architecture ensures scalability, reliability, and performance at
          every layer.
        </motion.p>

        {/* Layers Stack */}
        <div className="flex flex-col gap-[20px] w-full">
          {systemArchitectureData.map((layer, index) => (
            <motion.div
              key={layer.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="relative flex flex-col items-start p-[32px] sm:p-[40px] bg-white rounded-[16px] border-l-4 border-l-[#20B2AA] overflow-hidden"
            >
              {/* Layer Title */}
              <h3 className="text-[#107F6D] font-inter font-bold text-[18px] leading-[26px] mb-[20px]">
                {layer.title}
              </h3>

              {/* Tags Container */}
              <div className="flex flex-wrap items-center gap-[12px] w-full">
                {layer.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex flex-row items-center justify-center p-[10px_18px] bg-[#E8F2F2] rounded-[8px]"
                  >
                    <span className="text-[#4A5F5F] font-inter font-medium text-[14px] leading-[20px]">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
