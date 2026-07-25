"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Palette,
  Laptop,
  Building2,
  Headphones,
  Building,
} from "lucide-react";

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
    title: "Professional Services",
    subtitle: "Legal, Accounting, Consulting",
    icon: Scale,
    items: [
      "Accurate billable hour capture",
      "Client-level profitability analysis",
      "Work Pattern DNA™ insights for high-value staff",
      "TES™ as health metric for practice areas",
    ],
  },
  {
    title: "Agencies & Creative Studios",
    subtitle: "Design, Marketing, Content",
    icon: Palette,
    items: [
      "Project-level TES™ for creative throughput",
      "Meeting load vs deep work balance",
      "Budget adherence with Temporal Behaviour Engine™",
      "Creative flow-state optimization",
    ],
  },
  {
    title: "Technology & Product Teams",
    subtitle: "Software Development, Engineering",
    icon: Laptop,
    items: [
      "Sprint-focused time and pattern tracking",
      "Flow-state detection during development",
      "Team TES™ for sustainable development pace",
      "Code review and collaboration insights",
    ],
  },
  {
    title: "Healthcare Administration",
    subtitle: "Hospital Operations, Social Care",
    icon: Building2,
    items: [
      "Shift tracking with compliance-friendly records",
      "Administrative workload balancing",
      "TES™ assessment across care units",
      "Avoiding healthcare worker burnout",
    ],
  },
  {
    title: "Customer Service & Support",
    subtitle: "Help Desk, Technical Support",
    icon: Headphones,
    items: [
      "Capacity matching to ticket volumes",
      "Burnout risk recognition for support teams",
      "Peak demand and optimal staffing patterns",
      "Response time optimization",
    ],
  },
  {
    title: "SMEs & General Operations",
    subtitle: "Small to Medium Enterprises",
    icon: Building,
    items: [
      "Unified picture of time allocation",
      "Process bottleneck identification",
      "Evidence-based hiring and outsourcing decisions",
      "Automation opportunity discovery",
    ],
  },
];

export default function IndustryUseCases() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
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
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#2D3748] mb-3 leading-tight">
            Industry-Specific Use Cases
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Tailored productivity solutions for every sector
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center border border-gray-100/80 min-h-[340px]"
              >
                {/* Icon Container */}
                <div className="mb-4 text-[#25A18E]">
                  <IconComponent className="w-10 h-10 stroke-[1.5]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-[22px] font-bold text-[#2D3748] mb-1 leading-snug">
                  {useCase.title}
                </h3>

                {/* Card Subtitle */}
                <p className="text-[13px] italic text-[#888888] mb-6">
                  {useCase.subtitle}
                </p>

                {/* List Items */}
                <ul className="space-y-3 w-full text-left mt-auto">
                  {useCase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#555555] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0 mt-2" />
                      <span>{item}</span>
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
