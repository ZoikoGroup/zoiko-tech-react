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

const developerHubData = [
  {
    title: "APIs",
    items: [
      "Workflow Engine API",
      "AI Orchestrator API",
      "Rule Engine API",
      "OSS/BSS Modules",
      "Provisioning API",
      "Data Pipeline API",
    ],
  },
  {
    title: "SDKs & Tools",
    items: [
      "Python SDK",
      "JavaScript/TypeScript SDK",
      "Go SDK",
      "PHP SDK",
      "API Explorer",
      "Testing Sandbox",
      "Infrastructure Templates",
    ],
  },
];

export default function ApiDeveloperHub() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-4"
        >
          <div className="flex flex-row items-center justify-center p-[6px_16px] bg-[#EEF8F7] border border-[#D5EDED] rounded-[100px]">
            <span className="text-[#107F6D] font-inter font-semibold text-[13px] leading-[18px]">
              Developer Resources
            </span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-[16px]"
        >
          <h2 className="text-[#1D2939] font-inter font-bold text-[40px] md:text-[48px] leading-[50px] md:leading-[60px] tracking-[-0.96px]">
            API & Developer Hub
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#667085] font-inter font-normal text-[16px] leading-[24px] text-center mb-[60px] max-w-[600px]"
        >
          Powerful APIs and SDKs to integrate ZoikoAxis capabilities.
        </motion.p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[32px] w-full">
          {developerHubData.map((section, index) => (
            <motion.div
              key={section.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="flex flex-col items-start p-[40px] gap-[24px] bg-white border border-[#E9E9E9] rounded-[16px] shadow-[0_4px_12px_#0000001A]"
            >
              {/* Card Title */}
              <h3 className="text-[#1D2939] font-inter font-bold text-[18px] leading-[26px]">
                {section.title}
              </h3>

              {/* Bullet List */}
              <ul className="flex flex-col items-start gap-[16px]">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex flex-row items-center gap-[10px]"
                  >
                    {/* Bullet Dot */}
                    <div className="w-[6px] h-[6px] rounded-full bg-[#107F6D] shrink-0"></div>
                    <span className="text-[#667085] font-inter font-normal text-[15px] leading-[22px]">
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
