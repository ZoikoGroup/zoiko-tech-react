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
    title: "Data Protection &\nPrivacy",
    items: [
      "GDPR and UK GDPR-aligned data handling",
      "CCPA-aligned approaches for California users",
      "Clear privacy policy and data collection transparency",
      "Data minimisation and purpose limitation principles",
    ],
  },
  {
    title: "Security",
    items: [
      "Encryption in transit (TLS) and at rest (AES-256)",
      "Strong password policies and optional MFA",
      "Regular third-party penetration testing",
      "Security incident response procedures",
    ],
  },
  {
    title: "Enterprise\nGovernance",
    items: [
      "Role-based access control (RBAC) with granular permissions",
      "Admin controls for data export restrictions",
      "Full audit logs for access and configuration changes",
      "Configurable data retention policies",
    ],
  },
];

export default function ComplianceAndGovernance() {
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
            Compliance & Governance
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Security and privacy built into every aspect
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {complianceCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.15 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col border-l-4 border-l-[#25A18E] border-y border-r border-gray-100/80 min-h-[380px]"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#25A18E] mb-8 leading-snug min-h-[60px] flex items-center whitespace-pre-line">
                {card.title}
              </h3>

              {/* Items with Lock Icon */}
              <ul className="space-y-5 w-full">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-[#D1A054] shrink-0 mt-0.5" />
                    <span className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed font-normal">
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
