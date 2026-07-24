"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wallet, Users, ShieldCheck, Cog, Check } from "lucide-react";

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

const featureCategories = [
  {
    icon: Wallet,
    title: "Accounting & Finance Suite",
    items: [
      "Multi-entity ledger, multi-currency",
      "Automated journals, smart reconciliation",
      "AP/AR automation",
      "Financial dashboards",
    ],
  },
  {
    icon: Users,
    title: "HR & People Operations",
    items: [
      "Personnel files, compliance documents",
      "Geo-aware leave management",
      "Recruitment & onboarding automation",
      "Payroll-ready exports",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance Suite (UCC)",
    items: [
      "Global compliance calendar",
      "Policy management",
      "Automated risk monitoring alerts",
      "Audit trail engine",
    ],
  },
  {
    icon: Cog,
    title: "Business Operations",
    items: [
      "Workflow automation",
      "Document automation",
      "Assets & inventory module (optional)",
      "Process optimization tools",
    ],
  },
];

export default function ZoikoSuiteFeatures() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center justify-center">
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
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] mb-4 leading-tight">
            Features & Capabilities
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px] max-w-2xl mx-auto">
            Complete business operations platform designed for modern
            enterprises
          </p>
        </motion.div>

        {/* 3-Column + 1 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {featureCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center justify-start min-h-[360px]"
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-[#25A18E]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#25A18E] stroke-[2]" />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-[#25A18E] mb-8 leading-snug">
                  {category.title}
                </h3>

                {/* Features Checklist */}
                <ul className="space-y-4 w-full text-left">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-[14px] text-[#555555]"
                    >
                      <Check className="w-4 h-4 text-[#25A18E] mr-3 mt-0.5 shrink-0 stroke-[2.5]" />
                      <span className="leading-snug">{item}</span>
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
