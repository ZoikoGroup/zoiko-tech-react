"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Globe, Activity, Zap, Pill } from "lucide-react";

const assuranceMetrics = [
  "Uptime 99.987%",
  "Audit Logs 100%",
  "False Alert Rate <0.8%",
  "HIPAA Certified",
  "SOC2 Compliant",
];

const architectureFeatures = [
  {
    icon: Heart,
    title: "Human Trust Index™",
    description:
      "Powered by Zoiko AI to quantify engagement warmth and sentiment stability for personalized care interactions.",
  },
  {
    icon: Brain,
    title: "Predictive Mood Engine",
    description:
      "Advanced emotional intelligence that learns patterns and provides proactive mental wellness support with ethical oversight.",
  },
  {
    icon: Globe,
    title: "Cross-Border Compliance Router",
    description:
      "Automatically adapts to local healthcare regulations across US, Canada, UK, and Brazil with real-time compliance monitoring.",
  },
  {
    icon: Activity,
    title: "Health Metrics Integration",
    description:
      "Seamlessly connects with Amazon Alexa Elder API, Philips HealthSuite, Apple HealthKit, and Google Fit for comprehensive monitoring.",
  },
  {
    icon: Zap,
    title: "Emergency Response",
    description:
      "+39% faster fall detection with intelligent emergency protocols and automated healthcare provider notifications.",
  },
  {
    icon: Pill,
    title: "Medication Adherence",
    description:
      "+28% improvement in medication compliance through personalized reminders and intelligent scheduling.",
  },
];

// Motion animation variants with typed easing
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

export default function HolisticAIArchitecture() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-10 md:mb-12 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Holistic AI Architecture
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] max-w-xl font-normal leading-relaxed">
            Integration of Zoiko AI + ZWS + Zoiko Suite + Zoiko Assure + Zoiko
            Axis for comprehensive health support
          </p>
        </motion.div>

        {/* Assurance Metrics Bar Banner */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full bg-[#F5F5F5] rounded-2xl p-6 md:p-8 mb-12 flex flex-col items-center border border-slate-200/60"
        >
          <h3 className="text-[16px] font-bold text-[#1e293b] mb-5 tracking-wide">
            Assurance Metrics Bar
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {assuranceMetrics.map((metric, idx) => (
              <span
                key={idx}
                className="bg-[#4FD1C7] text-white text-[13px] sm:text-[14px] font-semibold px-4 py-2 rounded-full shadow-xs tracking-wide"
              >
                {metric}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 6-Card Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {architectureFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                custom={0.12 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
              >
                {/* Circular Teal Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-[#3BA8A0] flex items-center justify-center mb-6 shadow-xs">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
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
