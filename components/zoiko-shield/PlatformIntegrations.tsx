"use client";

import React from "react";
import { motion } from "framer-motion";

const integrationCategories = [
  {
    title: "Zoiko Ecosystem",
    description:
      "ZoikoSuite for HR and compliance data insider-risk tracking, ZoikoAssure for governance overlay and legal traceability, and ZoikoAxis for custom AI modules.",
  },
  {
    title: "Zoiko AI Intelligence",
    description:
      "Native integration with Zoiko AI Nexus and Halo layers for core threat intelligence, behavioral analysis, and governance oversight.",
  },
  {
    title: "Cloud Security Platforms",
    description:
      "AWS GuardDuty, Azure Sentinel, Google Cloud Security Command Center with API connectors for unified threat intelligence.",
  },
  {
    title: "SIEM & Analytics",
    description:
      "Splunk, IBM QRadar, LogRhythm, and other enterprise SIEM platforms via standardized API connectors and data feeds.",
  },
  {
    title: "Endpoint Protection",
    description:
      "CrowdStrike, SentinelOne, Microsoft Defender integration for comprehensive endpoint visibility and response coordination.",
  },
  {
    title: "Identity & Access",
    description:
      "Okta, Azure AD, Ping Identity integration for user behavior analytics and access governance with automated policy enforcement.",
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

export default function PlatformIntegrations() {
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
            Platform Integrations
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive connectivity with security and business platforms
          </p>
        </motion.div>

        {/* 3-Column Grid Layout (6 Items Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {integrationCategories.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[220px]"
            >
              {/* Card Title */}
              <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
