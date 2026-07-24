"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Lock,
  BarChart3,
  Scale,
  FileText,
  Globe,
} from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldAlert,
    title: "Autonomous Threat Detection",
    description:
      "AI identifies behavioral anomalies, phishing patterns, and insider risks with machine learning models trained on global threat intelligence.",
  },
  {
    icon: Lock,
    title: "Fraud Monitoring",
    description:
      "Real-time transaction verification for fintech and telecom billing with advanced pattern recognition and risk scoring algorithms.",
  },
  {
    icon: BarChart3,
    title: "Data-Leak Prevention",
    description:
      "Monitors endpoints and cloud flows, blocking unauthorized exfiltration with content inspection and behavioral analysis.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance Engine",
    description:
      "Auto-applies security frameworks: NIST 800-53, ISO 27001, PCI DSS, HIPAA with continuous compliance monitoring and reporting.",
  },
  {
    icon: FileText,
    title: "Incident Response Hub",
    description:
      "Automates evidence collection, stakeholder notifications, and post-mortem analysis via ZWS with forensic-grade documentation.",
  },
  {
    icon: Globe,
    title: "Cross-Jurisdiction Governance",
    description:
      "Unified compliance dashboard for USA, U.K., E.U., and APAC with automated regulatory adaptation and local compliance reporting.",
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

export default function AdvancedSecurityFeatures() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
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
            Advanced Security Features
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive protection suite for modern enterprise security
            challenges
          </p>
        </motion.div>

        {/* 3-Column Grid Layout (6 Items Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {securityFeatures.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                custom={0.1 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[260px]"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#44c3b8] to-[#2a756f] flex items-center justify-center text-white mb-6 shadow-xs">
                  <IconComponent className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
