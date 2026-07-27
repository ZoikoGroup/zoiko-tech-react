"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const industrySolutionsData = [
  {
    title: "Telecommunications",
    items: [
      "MVNO engineering",
      "SIM provisioning platforms",
      "Network automation",
    ],
  },
  {
    title: "Financial Services",
    items: ["Risk engines", "KYC/KYB automation", "Payment processing"],
  },
  {
    title: "Healthcare",
    items: ["AI triage systems", "Patient portals", "Compliance automation"],
  },
  {
    title: "Logistics",
    items: ["Route optimization", "Real-time tracking", "Inventory management"],
  },
];

export default function ProvenAcrossIndustries() {
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
              Industry Solutions
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
          className="text-center mb-[60px]"
        >
          <h2 className="text-[#1D2939] font-inter font-bold text-[40px] md:text-[48px] leading-[50px] md:leading-[60px] tracking-[-0.96px]">
            Proven Across Industries
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {industrySolutionsData.map((solution, index) => (
            <motion.div
              key={solution.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="flex flex-col items-start p-[40px] bg-white border border-[#E9E9E9] rounded-[16px] shadow-[0_4px_12px_#0000001A]"
            >
              {/* Card Title */}
              <h3 className="text-[#107F6D] font-inter font-bold text-[22px] leading-[30px] mb-[32px]">
                {solution.title}
              </h3>

              {/* List Items */}
              <ul className="flex flex-col items-start gap-[20px] w-full">
                {solution.items.map((item) => (
                  <li
                    key={item}
                    className="flex flex-row items-center gap-[12px]"
                  >
                    <ArrowRight className="w-[16px] h-[16px] text-[#107F6D] shrink-0" />
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
