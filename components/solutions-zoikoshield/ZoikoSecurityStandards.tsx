"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

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

const standardsData = [
  {
    title: "Compliance",
    items: ["GDPR/UK GDPR aligned", "ISO 27001 aligned", "PCI-DSS assist"],
  },
  {
    title: "Identity Governance",
    items: ["IAM/SSO", "RBAC", "MFA enforcement"],
  },
  {
    title: "Data Protection",
    items: ["Encrypt at rest", "Encrypt in transit", "Data residency controls"],
  },
  {
    title: "Access Controls",
    items: ["Zero Trust policies", "Conditional access", "Device compliance"],
  },
];

export default function ZoikoSecurityStandards() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
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
            Compliance & Governance
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
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] leading-tight">
            Built on Security Standards
          </h2>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {standardsData.map((section, index) => (
            <motion.div
              key={section.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[260px]"
            >
              {/* Card Title */}
              <h3 className="text-lg md:text-[20px] font-bold text-[#1A202C] mb-8 leading-snug min-h-[48px] flex items-center">
                {section.title}
              </h3>

              {/* Bullet List with Icon and Gradient Background */}
              <ul className="space-y-4 w-full text-left mt-auto">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D]">
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
