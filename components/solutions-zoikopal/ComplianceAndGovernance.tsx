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

const complianceCategories = [
  {
    title: "Privacy",
    items: [
      "GDPR/UK GDPR compliance",
      "Zero surveillance approach",
      "User-controlled permissions",
    ],
  },
  {
    title: "Security",
    items: [
      "AES-256 encryption",
      "Secure voice interactions",
      "Comprehensive audit logs",
    ],
  },
  {
    title: "Ethics",
    items: [
      "No diagnosis or medical advice",
      "No coercive nudging",
      "Transparent AI behaviour",
    ],
  },
];

export default function ComplianceAndGovernance() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
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
            Built with privacy, security, and ethical care at the foundation
          </p>
        </motion.div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {complianceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col relative border-l-4 border-l-[#9B51E0] overflow-hidden min-h-[280px]"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#9B51E0] mb-8">
                {category.title}
              </h3>

              {/* Items List with Lock Icons */}
              <ul className="space-y-4 w-full flex-grow">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-[#BDBDBD] shrink-0 mt-0.5" />
                    <span className="text-[14px] md:text-[15px] text-[#555555] leading-snug">
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
