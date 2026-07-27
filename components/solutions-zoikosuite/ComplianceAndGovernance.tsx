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

const complianceGroups = [
  {
    title: "Data Protection",
    items: [
      "GDPR/UK GDPR compliance",
      "CCPA aligned processes",
      "Data retention policies",
    ],
  },
  {
    title: "Security",
    items: [
      "AES-256 encryption",
      "Regular pen testing",
      "Incident response procedures",
    ],
  },
  {
    title: "Governance Controls",
    items: [
      "Role-based access control",
      "Comprehensive audit logs",
      "Policy management tools",
    ],
  },
];

export default function ComplianceAndGovernance() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 flex items-center justify-center">
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
            Built with security and compliance at the core
          </p>
        </motion.div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {complianceGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              custom={0.15 + groupIndex * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-[#F8FAFA] rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col border-l-[4px] border-l-[#25A18E] min-h-[260px]"
            >
              {/* Card Title */}
              <h3 className="text-2xl font-bold text-[#25A18E] mb-8 leading-snug">
                {group.title}
              </h3>

              {/* Items List */}
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-[#A0AEC0] shrink-0" />
                    <span className="text-[14px] text-[#555555] font-normal leading-relaxed">
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
