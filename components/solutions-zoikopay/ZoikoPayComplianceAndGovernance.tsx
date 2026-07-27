"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

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

const complianceCards = [
  {
    title: "Compliance",
    items: [
      "PCI-DSS Ready",
      "GDPR/UK GDPR aligned",
      "AML/CTF compliant",
      "Country-level compliance modules",
    ],
  },
  {
    title: "Risk & Governance",
    items: [
      "Fraud triggers",
      "Risk scoring",
      "KYB/KYC workflows",
      "Audit-ready logs",
    ],
  },
  {
    title: "Data Control",
    items: [
      "End-to-end encryption",
      "Data retention policies",
      "Region-based residency",
      "Privacy controls",
    ],
  },
];

export default function ZoikoPayComplianceAndGovernance() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-[500px] flex items-center justify-center">
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
            Compliance & Governance
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Built to meet the highest financial industry standards
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {complianceCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.15 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border-l-4 border-l-[#25A18E] border-t border-r border-b border-gray-100/80 min-h-[300px]"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#25A18E] mb-6">
                {card.title}
              </h3>

              {/* Items List with Lock Icon */}
              <ul className="space-y-4 w-full text-left">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#25A18E]/10 flex items-center justify-center shrink-0">
                      <Lock className="w-3 h-3 text-[#25A18E]" />
                    </div>
                    <span className="text-[14px] text-[#555555] font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
