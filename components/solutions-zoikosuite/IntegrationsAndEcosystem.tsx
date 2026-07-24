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

const integrationGroups = [
  {
    title: "Native Zoiko Integrations",
    pills: ["ZoikoPay", "ZoikoTime", "ZoikoAxis", "ZoikoNex"],
  },
  {
    title: "Third-Party Integrations",
    pills: [
      "QuickBooks",
      "Xero",
      "Sage",
      "Slack",
      "MS Teams",
      "Google Workspace",
    ],
  },
  {
    title: "Banking & Automation",
    pills: ["Open Banking", "Plaid", "Yapily", "Zapier", "Make.com"],
  },
];

export default function IntegrationsAndEcosystem() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
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
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] mb-3 leading-tight">
            Integrations & Ecosystem
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Connect with your existing tools and platforms seamlessly
          </p>
        </motion.div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {integrationGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              custom={0.15 + groupIndex * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-start min-h-[300px]"
            >
              {/* Group Title */}
              <h3 className="text-xl font-bold text-[#25A18E] mb-8 leading-snug">
                {group.title}
              </h3>

              {/* Tag / Pill Grid */}
              <div className="flex flex-wrap gap-2.5">
                {group.pills.map((pill) => (
                  <span
                    key={pill}
                    className="bg-[#F4F5F7] text-[#444444] text-[13px] font-medium px-3.5 py-2 rounded-lg border border-gray-100 hover:bg-[#EAECEE] transition-colors duration-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
