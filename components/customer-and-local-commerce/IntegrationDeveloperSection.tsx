"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Webhook, Fingerprint, Database, Activity, ShieldCheck } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const devPillars = [
  {
    icon: Code2,
    title: "APIs & SDKs",
    description: "Approved customer, communications, commerce, service and orchestration interfaces.",
  },
  {
    icon: Webhook,
    title: "Events & webhooks",
    description: "Interaction, handoff and status events where the product exposes them.",
  },
  {
    icon: Fingerprint,
    title: "Identity",
    description: "Customer, service and integration identity with authorization boundaries.",
  },
  {
    icon: Database,
    title: "Data & provenance",
    description: "Authoritative sources and derived-context labeling.",
  },
  {
    icon: Activity,
    title: "Observability",
    description: "Integration state, failures, retries and latency at the approved level.",
  },
  {
    icon: ShieldCheck,
    title: "Consent & governance",
    description: "Communication preferences, privacy, evidence and retention.",
  },
];

export default function IntegrationDeveloperSection() {
  return (
    <section
      id="integration-developer"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-[96px]"
      style={{
        background:
          "linear-gradient(221deg, rgba(6, 85, 72, 0.65) 31%, rgba(0, 38, 42, 0.65) 75%), #001315",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col items-start mb-12 sm:mb-14"
        >
          <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
            Integration & developer layer
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-white leading-[1.2] tracking-[-0.03em] mb-4 max-w-[800px]">
            Connect experiences through one governed developer layer
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#E2E8F0] leading-[28px] max-w-[840px]">
            Customer-facing experiences share APIs, events, identity and observability across the Zoiko ecosystem. Exact interfaces are listed in the documentation.
          </p>
        </motion.div>

        {/* 6 Grid Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10"
        >
          {devPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-[14px] bg-[#00191E]/70 border border-[#34D4CA]/25 hover:border-[#34D4CA]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-[8px] bg-[#34D4CA]/15 border border-[#34D4CA]/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#4DDCAD]" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[17px] text-white mb-2">
                    {p.title}
                  </h3>
                </div>
                <p className="font-['Poppins',sans-serif] text-[13.5px] text-[#E2E8F0] leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Action Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="/developer-portal"
            className="px-6 py-3 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-semibold text-[14px] transition-colors shadow-sm"
          >
            Explore Developer Platform
          </a>
          <a
            href="/developer-integration"
            className="inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[14px] font-semibold text-[#4DDCAD] hover:text-white transition-colors px-2 py-3"
          >
            <span>Read documentation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
