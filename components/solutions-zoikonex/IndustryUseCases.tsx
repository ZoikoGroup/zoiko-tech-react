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

const useCases = [
  {
    title: "MVNO Launch & Scale",
    description: "Multi-brand, multi-tenant operations",
  },
  {
    title: "Travel eSIM Providers",
    description: "Global rating + instant provisioning",
  },
  {
    title: "IoT/M2M Networks",
    description: "Device-level billing & fleet management",
  },
  {
    title: "Enterprise Private Networks",
    description: "SIM fleet orchestration",
  },
  {
    title: "MVNAs",
    description: "Partner marketplace + tenant provisioning",
  },
];

export default function IndustryUseCases() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center justify-center">
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
          Industry Use Cases
        </motion.h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[190px]"
            >
              {/* Use Case Title */}
              <h3 className="text-[17px] font-bold text-[#25A18E] mb-3 leading-snug">
                {useCase.title}
              </h3>

              {/* Use Case Description */}
              <p className="text-[#666666] text-[14px] leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
