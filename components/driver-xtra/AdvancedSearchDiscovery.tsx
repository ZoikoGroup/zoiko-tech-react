"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScanLine, Brain, SearchCheck, Bot } from "lucide-react";

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

const searchFeatures = [
  {
    icon: ScanLine,
    title: "VIN & License Scan",
    description:
      "Advanced OCR technology with predictive part recognition using vehicle identification numbers and license plate scanning.",
  },
  {
    icon: Brain,
    title: "AI-Powered Search",
    description:
      "Context-aware search with natural language processing understanding vehicle symptoms and maintenance needs.",
  },
  {
    icon: SearchCheck,
    title: "Fitment Accuracy",
    description:
      "98.5% accuracy in part compatibility verification preventing costly ordering mistakes and returns.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Context-aware help powered by Zoiko AI's conversational reasoning for technical support and product recommendations.",
  },
];

export default function AdvancedSearchDiscovery() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-3 leading-tight"
        >
          Advanced Search & Discovery
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16 max-w-xl leading-relaxed"
        >
          Intelligent part identification with predictive compatibility
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {searchFeatures.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={0.2 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[240px]"
              >
                <div>
                  {/* Circle Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-[#52D4B9] flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-[#222222] mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[#555555] text-[14px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
