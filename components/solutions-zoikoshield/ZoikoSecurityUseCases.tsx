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

const useCases = [
  {
    title: "SMEs & Startups",
    items: [
      "Full-stack security without complexity",
      "Affordable enterprise-grade protection",
      "Easy deployment and management",
    ],
  },
  {
    title: "Professional\nServices",
    items: [
      "Client data protection",
      "Secure collaboration",
      "Compliance assistance",
    ],
  },
  {
    title: "E-commerce",
    items: ["Fraud detection", "Payment security", "Customer data protection"],
  },
  {
    title: "Remote Workforce",
    items: ["Device security", "Zero trust access", "Cloud app protection"],
  },
];

export default function ZoikoSecurityUseCases() {
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
          className="mb-6"
        >
          <span className="bg-[#E8F2F2] text-[#006666] px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
            Use Cases
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
            Security for Every Industry
          </h2>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[300px]"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-[22px] font-bold text-[#006059] mb-8 leading-snug whitespace-pre-line min-h-[60px] flex items-center">
                {useCase.title}
              </h3>

              {/* Bullet List with Plus Icons */}
              <ul className="space-y-4 w-full text-left mt-auto">
                {useCase.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Plus className="w-4 h-4 text-[#25A18E] shrink-0 stroke-[2.5]" />
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
