"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Scale, Bot, BarChart3, Sparkles, Users } from "lucide-react";

const behavioralFeatures = [
  {
    icon: Brain,
    title: "Adaptive Focus Index™",
    description:
      "Dynamically recalibrated through Zoiko AI's ZKG with personalized focus pattern analysis and productivity scoring.",
  },
  {
    icon: Scale,
    title: "Cognitive Load Balancer",
    description:
      "AI-powered break interval suggestions based on fatigue metrics and workload analysis for optimal performance.",
  },
  {
    icon: Bot,
    title: "AI Coach Tips (Governed Mode)",
    description:
      "Intelligent recommendations that pass bias and fairness checks through ZRE with explainable reasoning.",
  },
  {
    icon: BarChart3,
    title: "Smart Timeline",
    description:
      "Visualizes effort versus outcome via Zoiko AI's workload mapping with predictive performance insights.",
  },
  {
    icon: Sparkles,
    title: "Predictive Productivity",
    description:
      "Forecasts next-day performance patterns based on historical data and behavioral analysis.",
  },
  {
    icon: Users,
    title: "Team Performance Dashboard",
    description:
      "Ethical visibility without personal overexposure, maintaining individual privacy while providing team insights.",
  },
];

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

export default function BehavioralAIFeatures() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-14 md:mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Behavioral-AI Intelligence Features
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Advanced productivity analytics with ethical AI governance and
            transparency
          </p>
        </motion.div>

        {/* 6 Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {behavioralFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                custom={0.1 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[250px]"
              >
                {/* Circular Icon Container */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D] text-white flex items-center justify-center mb-6 shadow-xs">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
