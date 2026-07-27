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

const securityLayers = [
  {
    title: "Core Security Platform",
    tags: [
      "Adaptive Threat Intelligence Grid™",
      "SME Zero Trust Framework™",
      "Fraud Shield Engine™",
    ],
  },
  {
    title: "Analytics Layer",
    tags: [
      "Behaviour Analysis",
      "Network Telemetry",
      "Transaction Event Stream",
    ],
  },
  {
    title: "Data Layer",
    tags: ["Security Logs", "Metrics", "Policies", "User Profiles"],
  },
  {
    title: "Integration Layer",
    tags: ["Zoiko Ecosystem", "IAM Providers", "SIEM Systems"],
  },
  {
    title: "Security Controls",
    tags: ["Encryption", "IAM/SSO", "RBAC", "Audit Logs"],
  },
];

export default function ZoikoSecurityArchitecture() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-6"
        >
          <span className="bg-[#E8F2F2] text-[#006666] px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
            Security Architecture
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-12 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] leading-tight">
            Built on Zero Trust Principles
          </h2>
        </motion.div>

        {/* Outer Layer Container Block */}
        <motion.div
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
          className="bg-[#F8FAFA] rounded-3xl p-6 sm:p-10 w-full flex flex-col gap-5"
        >
          {securityLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] border-l-4 border-l-[#20B2AA] flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Layer Title */}
              <h3 className="text-lg md:text-[19px] font-bold text-[#006059] pl-2">
                {layer.title}
              </h3>

              {/* Tag Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pl-2">
                {layer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E8F2F2] text-[#4A5F5F] px-4 py-2 rounded-lg text-[13px] md:text-[14px] font-medium hover:bg-[#E2E8E8] transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
