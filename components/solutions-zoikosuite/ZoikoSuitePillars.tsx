"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, BarChart3, Users } from "lucide-react";

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

const pillars = [
  {
    icon: Scale,
    title: "Unified Compliance Core™ (UCC)",
    description:
      "Comprehensive compliance management with global regulatory support and automated monitoring",
  },
  {
    icon: BarChart3,
    title: "SmartOps Ledger Engine™",
    description:
      "Intelligent accounting automation with multi-entity support and real-time financial insights",
  },
  {
    icon: Users,
    title: "Enterprise People Graph™",
    description:
      "Advanced HR analytics connecting people, performance, and compliance across your organization",
  },
];

export default function ZoikoSuitePillars() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                custom={0.1 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center justify-start min-h-[320px]"
              >
                {/* Circle Icon Badge */}
                <div className="w-16 h-16 rounded-full bg-[#25A18E] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 hover:scale-105">
                  <Icon className="w-7 h-7 text-white stroke-[2]" />
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl font-bold text-[#222222] mb-4 leading-snug">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-[#666666] text-[14px] leading-relaxed max-w-xs font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
