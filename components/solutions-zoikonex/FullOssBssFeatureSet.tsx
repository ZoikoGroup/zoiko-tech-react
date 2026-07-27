"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

const featureColumns = [
  {
    category: "OSS",
    features: [
      "Service provisioning & activation",
      "Multi-carrier activation routing",
      "Number management (MDN/MSISDN)",
      "Intelligent fallout handling",
      "Network orchestration & policy control",
      "QoS monitoring & alerting",
    ],
  },
  {
    category: "BSS",
    features: [
      "Real-time rating & charging",
      "CDR/UDR mediation",
      "Billing, invoicing, collections",
      "Partner settlement & tax logic",
      "Subscriber lifecycle management",
      "Product catalogue management",
    ],
  },
  {
    category: "Cross-platform",
    features: [
      "API gateway",
      "Self-care & partner portals",
      "Customer care console",
    ],
  },
];

export default function FullOssBssFeatureSet() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Main Section Title */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-16 leading-tight"
        >
          Full OSS/BSS Feature Set
        </motion.h2>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {featureColumns.map((column, index) => (
            <motion.div
              key={column.category}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 border-t-4 border-[#25A18E] min-h-[460px] flex flex-col justify-start"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-[#25A18E] mb-8">
                {column.category}
              </h3>

              {/* Feature List */}
              <ul className="space-y-5">
                {column.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start text-[14px] text-[#555555] pb-4 border-b border-gray-100 last:border-none last:pb-0"
                  >
                    <Check className="w-4 h-4 text-[#25A18E] mr-3 mt-0.5 shrink-0 stroke-[2.5]" />
                    <span className="leading-snug">{feature}</span>
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
