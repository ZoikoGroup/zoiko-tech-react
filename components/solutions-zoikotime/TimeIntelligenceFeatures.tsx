"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dna, Zap, BarChart3 } from "lucide-react";

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

const featureCards = [
  {
    title: "Work Pattern DNA™",
    description:
      "Your personal productivity blueprint that analyses how you actually work — focus rhythm, energy curve, deep-work cycles, recovery windows, and collaboration patterns — generating a living profile that guides you toward your best work every day.",
    icon: Dna,
    sectionTitle: "Key behaviours tracked:",
    highlightBorder: true,
    items: [
      "Time-of-day performance patterns",
      "Focus vs fragmentation levels",
      "Deep work vs shallow work balance",
      "Recovery and micro-break cadence",
      "Meeting density and impact on performance",
    ],
  },
  {
    title: "Temporal Behaviour Engine™",
    description:
      "Enterprise-only feature that turns time data into decision intelligence. Models how teams actually operate over time and surfaces predictive insights leaders can act on.",
    icon: Zap,
    sectionTitle: "Powers:",
    highlightBorder: false,
    items: [
      "Early warnings for burnout and overload",
      "Under-utilisation and role drift detection",
      "Project delivery risk signals",
      "Capacity planning and staffing scenarios",
      "Team rhythm benchmarking",
    ],
  },
  {
    title: "Time Efficiency Score (TES™)",
    description:
      "The single metric that leaders can rally around. Condenses complex time and behaviour signals into one interpretable score for individuals, teams, projects, and departments.",
    icon: BarChart3,
    sectionTitle: "Calculated from:",
    highlightBorder: false,
    items: [
      "Focus time ratio",
      "Task completion consistency",
      "Context switching frequency",
      "Overtime and overload indicators",
      "Alignment of time spent vs stated priorities",
    ],
  },
];

export default function TimeIntelligenceFeatures() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Responsive Grid matching the mockup structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={0.15 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className={`bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center ${
                  card.highlightBorder
                    ? "border-2 border-[#25A18E]"
                    : "border border-gray-100"
                }`}
              >
                {/* Circular Teal Icon Container */}
                <div className="w-14 h-14 rounded-full bg-[#25A18E] flex items-center justify-center mb-6 shadow-sm shrink-0">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#2D3748] mb-4">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[14px] md:text-[15px] text-[#666666] leading-relaxed font-normal mb-8 max-w-lg">
                  {card.description}
                </p>

                {/* Light Gray Inner Block for Bullet List */}
                <div className="w-full bg-[#F8F9FA] rounded-xl p-6 text-left border border-gray-100/80 mt-auto">
                  <h4 className="text-[13px] font-bold text-[#25A18E] mb-3">
                    {card.sectionTitle}
                  </h4>
                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#555555] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
