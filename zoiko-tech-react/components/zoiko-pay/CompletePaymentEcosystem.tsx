"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Briefcase,
  ShieldCheck,
  Bot,
  Zap,
  Globe,
} from "lucide-react";

const ecosystemItems = [
  {
    icon: CreditCard,
    title: "Payment Gateway",
    description:
      "Card, ACH, RTP, and crypto settlement rails with AI fraud scoring and anomaly detection. PCI-DSS 4.0 compliant with FedNow integration.",
  },
  {
    icon: Briefcase,
    title: "Wallet & Payouts",
    description:
      "Multi-currency consumer and merchant wallets with dynamic AI-based limits and comprehensive KYC/AML compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Hub",
    description:
      "Real-time AML, sanctions, and SAR orchestration with autonomous case-flagging powered by Zoiko AI.",
  },
  {
    icon: Bot,
    title: "AI Decision Engine",
    description:
      "Self-training system with human-in-command layer, learns from transaction histories to predict risk and optimize routing.",
  },
  {
    icon: Zap,
    title: "RegTech API Layer",
    description:
      "Secure middleware for partner integrations, invoicing, and audit logs with SOC 2 Type II compliance.",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description:
      "Multi-jurisdiction framework supporting U.S., UK, EU regulations with automated compliance reporting.",
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

export default function CompletePaymentEcosystem() {
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
            Complete Payment Ecosystem
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Unified payment, compliance, and AI intelligence platform designed
            for modern businesses
          </p>
        </motion.div>

        {/* 6 Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {ecosystemItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                custom={0.1 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[240px]"
              >
                {/* Circular Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#379c93] text-white flex items-center justify-center mb-6 shadow-xs">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
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
