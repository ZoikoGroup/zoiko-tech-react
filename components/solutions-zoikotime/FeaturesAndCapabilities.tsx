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

const featureSections = [
  {
    number: "1",
    title: "Time Tracking Reinvented",
    subtitle:
      "Make time capture effortless, accurate, and trustworthy with intelligent automation",
    items: [
      "One-click timers for tasks and projects",
      "Smart auto-tracking with activity detection",
      "Idle detection with confirmation prompts",
      "Offline mode with automatic sync",
      "Visual timeline view of work blocks",
      "Context tags for client and project coding",
    ],
  },
  {
    number: "2",
    title: "Work Pattern DNA™",
    subtitle:
      "Turn raw time into a living pattern of how individuals work best",
    items: [
      "Daily and weekly pattern visualisations",
      "High-focus windows identification",
      "Fragmentation detection and analysis",
      "Deep work vs shallow work ratios",
      "Meeting load impact assessment",
      "Personalised productivity suggestions",
    ],
  },
  {
    number: "3",
    title: "Activity Analytics & Behaviour Science",
    subtitle: "Meaningful context around work without invasive surveillance",
    items: [
      "Activity heatmaps by time and day",
      "Focus vs distraction indicators",
      "Task fragmentation analysis",
      "Weekly behaviour summaries",
      "Trend comparisons across periods",
      "Privacy-first approach (no keylogging)",
    ],
  },
  {
    number: "4",
    title: "AI-Enhanced Insights",
    subtitle: "Use AI to surface suggestions, not to micromanage users",
    items: [
      "Weekly AI summary emails and nudges",
      "Time allocation forecasting for projects",
      "At-risk deadline identification",
      "Workload rebalancing recommendations",
      "Focus blocks and meeting hygiene tips",
      "Advisory tone, not prescriptive",
    ],
  },
  {
    number: "5",
    title: "Project & Client Intelligence",
    subtitle: "Connect time to commercial and delivery outcomes",
    items: [
      "Project dashboards with budget tracking",
      "Client profitability analysis",
      "Billable vs non-billable breakdowns",
      "Task-level time analysis",
      "Completion time forecasting",
      "Executive and operational views",
    ],
  },
  {
    number: "6",
    title: "Team Management & Workforce Intelligence",
    subtitle: "Humane, truthful view of workload and capacity for leaders",
    items: [
      "Team-wide workload visualisation",
      "Burnout risk signal detection",
      "Under-utilisation alerts",
      "Comparative TES™ across teams",
      "Capacity reallocation scenarios",
      "Focus on support, not surveillance",
    ],
  },
];

export default function FeaturesAndCapabilities() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
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
            Features & Capabilities
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Comprehensive productivity platform designed for the modern
            workforce
          </p>
        </motion.div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {featureSections.map((feature, index) => (
            <motion.div
              key={feature.number}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start relative min-h-[380px]"
            >
              {/* Number Badge */}
              <div className="w-8 h-8 rounded-full bg-[#25A18E] text-white font-bold text-[14px] flex items-center justify-center mb-6 shrink-0">
                {feature.number}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl md:text-2xl font-bold text-[#25A18E] mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-[13px] md:text-[14px] italic text-[#777777] mb-6 leading-relaxed">
                {feature.subtitle}
              </p>

              {/* Checklist Items */}
              <ul className="space-y-3.5 w-full mt-auto">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#25A18E] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-[#555555] leading-relaxed">
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
