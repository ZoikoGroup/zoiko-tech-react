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

const developerHubData = [
  {
    title: "APIs",
    items: [
      "/alerts - Security alerts",
      "/devices - Device management",
      "/access - Access control",
      "/fraud - Fraud detection",
      "/policies - Policy management",
      "/logs - Security logs",
    ],
  },
  {
    title: "SDKs & Tools",
    items: [
      "Device SDK",
      "Browser extension SDK",
      "Policy enforcement SDK",
      "Policy builder",
      "Alert simulator",
      "Incident stream viewer",
    ],
  },
];

export default function ZoikoDeveloperHub() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
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
            Developer Resources
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
            API & Developer Hub
          </h2>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {developerHubData.map((section, index) => (
            <motion.div
              key={section.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[340px]"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-[22px] font-bold text-[#1A202C] mb-8 leading-snug flex items-center">
                {section.title}
              </h3>

              {/* Bullet List with Icon and Gradient Background */}
              <ul className="space-y-4 w-full text-left mt-auto">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-3.5">
                    <div className="w-2 h-2 rounded-full flex items-center justify-center shrink-0 bg-[#20B2AA]">
                    </div>
                    <span className="text-[14px] md:text-[15px] text-[#555555] font-medium leading-relaxed">
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
