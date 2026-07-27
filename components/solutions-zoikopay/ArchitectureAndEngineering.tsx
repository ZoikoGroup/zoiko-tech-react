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

const leftEngineBlocks = [
  {
    title: "Global Transaction Fabric™",
    subtitle: "Unified payment orchestration",
  },
  {
    title: "Merchant Graph™",
    subtitle: "Relationship and compliance mapping",
  },
  {
    title: "Wallet Engine",
    subtitle: "Multi-currency balance management",
  },
  {
    title: "Subscription Engine",
    subtitle: "Recurring billing and usage tracking",
  },
  {
    title: "FX Routing Engine",
    subtitle: "Real-time currency conversion",
  },
  {
    title: "Payout Engine",
    subtitle: "Settlement and disbursement",
  },
];

const layersData = [
  {
    title: "Integration Layer",
    items: [
      "Card networks",
      "Banking partners",
      "Mobile money APIs",
      "KYC/KYB providers",
    ],
  },
  {
    title: "Data Layer",
    items: [
      "Ledger",
      "Wallet balances",
      "Transaction logs",
      "FX tables",
      "Merchant profiles",
    ],
  },
  {
    title: "Security Layer",
    items: [
      "IAM/SSO",
      "Audit trails",
      "Encryption (AES-256, TLS)",
      "PCI-DSS control zone",
    ],
  },
];

export default function ArchitectureAndEngineering() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
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
            Payment-grade reliability with enterprise-scale performance
          </p>
        </motion.div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-start">
          {/* Left Column: Core Engine Stack */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {leftEngineBlocks.map((block) => (
              <div
                key={block.title}
                className="bg-gradient-to-r from-[#17786D] to-[#25A18E] text-white rounded-xl py-5 px-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[72px]"
              >
                <h3 className="text-[17px] md:text-[18px] font-bold tracking-wide">
                  {block.title}
                </h3>
                <p className="text-[12px] md:text-[13px] text-white/80 font-normal mt-0.5">
                  {block.subtitle}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Integration & Data Layers */}
          <motion.div
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-[#25A18E]">
              Integration & Data Layers
            </h3>

            <div className="flex flex-col gap-5">
              {layersData.map((layer) => (
                <div
                  key={layer.title}
                  className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-[17px] font-bold text-[#2D3748] mb-3">
                    {layer.title}
                  </h4>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[13px] md:text-[14px] text-[#666666]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
