"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  ShieldAlert,
  Globe,
  Shield,
  FileCheck,
  Activity,
} from "lucide-react";

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

const securityFeatures = [
  {
    icon: UserCheck,
    title: "Identity & Access Security",
    description: "Control who accesses what, when, and from where.",
    items: [
      "Multi-factor authentication",
      "Conditional access policies",
      "Risk-based login scoring",
      "IP controls",
      "Privileged Access Management Lite",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Endpoint Protection",
    description: "Secure every device in your organization.",
    items: [
      "Malware prevention",
      "Ransomware rollback",
      "Device posture scoring",
      "USB/block device control",
      "Patch monitoring",
    ],
  },
  {
    icon: Globe,
    title: "Network & Cloud Protection",
    description: "Secure your network infrastructure.",
    items: [
      "DNS filtering",
      "Firewall-as-a-Service (Lite)",
      "Suspicious traffic detection",
      "Cloud app access rules",
    ],
  },
  {
    icon: Shield,
    title: "Fraud Shield Engine™",
    description: "AI-powered fraud detection and prevention.",
    items: [
      "Transaction anomaly detection",
      "Merchant fraud scoring",
      "Synthetic identity detection",
      "Chargeback probability scoring",
    ],
  },
  {
    icon: FileCheck,
    title: "Data Protection & Compliance",
    description: "Keep sensitive data safe and compliant.",
    items: [
      "Data Loss Prevention (DLP)",
      "File integrity monitoring",
      "GDPR/UK GDPR assist",
      "PCI readiness checks",
    ],
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "24/7 visibility into your security posture.",
    items: [
      "Security dashboards",
      "Event logs",
      "Device threat feeds",
      "Automated policy response",
    ],
  },
];

export default function ZoikoSecurityStack() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
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
            Security Features
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] mb-4 max-w-xl leading-tight">
            Complete Security Stack for SMEs
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px] leading-relaxed">
            Enterprise-grade protection without enterprise complexity.
          </p>
        </motion.div>

        {/* 3-Column 2-Row Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[360px]"
              >
                {/* Square Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#006059] flex items-center justify-center text-white mb-6 shadow-xs shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Card Title & Description */}
                <h3 className="text-lg sm:text-[20px] font-bold text-[#1A202C] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#666666] mb-6 min-h-[40px] leading-relaxed">
                  {feature.description}
                </p>

                {/* Bullet Checklist */}
                <ul className="space-y-3 w-full text-left mt-auto">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0" />
                      <span className="text-[13px] sm:text-[14px] text-[#555555] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
