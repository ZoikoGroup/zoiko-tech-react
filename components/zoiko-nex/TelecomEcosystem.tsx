"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Briefcase,
  Smartphone,
  CreditCard,
  Bot,
  Lock,
} from "lucide-react";

const ecosystemFeatures = [
  {
    icon: Activity,
    title: "OSS (Operations Support Systems)",
    description:
      "Network inventory management, fault management, performance monitoring, and service provisioning with AI-powered automation and predictive maintenance.",
  },
  {
    icon: Briefcase,
    title: "BSS (Business Support Systems)",
    description:
      "Customer management, billing, revenue assurance, and order management with integrated CRM and real-time analytics powered by Zoiko AI.",
  },
  {
    icon: Smartphone,
    title: "MVNO Platform",
    description:
      "Complete Mobile Virtual Network Operator infrastructure with SIM management, roaming, interconnect billing, and regulatory compliance.",
  },
  {
    icon: CreditCard,
    title: "Fintech Integration",
    description:
      "Native ZoikoPay integration for mobile payments, digital wallets, micro-lending, and financial services with comprehensive compliance.",
  },
  {
    icon: Bot,
    title: "AI Governance Layer",
    description:
      "Zoiko AI-powered decision making, predictive analytics, fraud detection, and automated compliance across all platform operations.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "End-to-end security with Zoiko Assure integration, multi-jurisdiction compliance, and comprehensive audit trails.",
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

export default function TelecomEcosystem() {
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
            Comprehensive Telecom Ecosystem
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            AI-governed platform unifying OSS, BSS, MVNO operations, and fintech
            services
          </p>
        </motion.div>

        {/* 6 Cards Grid Layout (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {ecosystemFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                custom={0.1 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300"
              >
                {/* Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D] flex items-center justify-center text-white mb-6 shadow-xs shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
