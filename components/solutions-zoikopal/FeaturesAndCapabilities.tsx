"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Calendar,
  MessageSquare,
  Users,
  BarChart2,
  Lock,
  Accessibility,
  Heart,
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

const badges = [
  "Privacy-first architecture",
  "GDPR/UK GDPR aligned",
  "Non-medical, non-diagnostic",
  "Family, care home, and NGO-ready",
];

const featureCards = [
  {
    title: "Daily Living Support",
    icon: Calendar,
    items: [
      "Reminders (hydration, meals, events)",
      "Routine prompts",
      "Checklists",
      "Familiar voice options",
    ],
  },
  {
    title: "Conversational\nCompanion",
    icon: MessageSquare,
    items: [
      "Warm, human conversation",
      "Memory reinforcement",
      "Trivia, stories, wellbeing prompts",
    ],
  },
  {
    title: "Circle of Care Hub™",
    icon: Users,
    items: [
      "Shared updates",
      "Family access controls",
      "Messaging threads",
      "Carer notes",
    ],
  },
  {
    title: "Wellbeing & Awareness\nInsights",
    icon: BarChart2,
    items: [
      "Non-medical routine monitoring",
      "Missed habits",
      "Engagement levels",
      "Optional sensor integration",
    ],
  },
  {
    title: "Independence Guardian\nSuite™",
    icon: Lock,
    items: [
      "Daily check-ins",
      "Missed interaction alerts",
      "Location reassurance (optional)",
      "Home activity awareness",
    ],
  },
  {
    title: "Accessibility First",
    icon: Accessibility,
    items: ["Large UI", "Voice-commands", "High contrast", "Multi-language"],
  },
  {
    title: "Family Portal",
    icon: Heart,
    items: ["Summaries", "Photos", "Shared tasks", "Permissions"],
  },
];

function TrustBadges() {
  return (
    <section className="w-full bg-[#F8F9FA] py-10 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-center text-center"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-xl bg-white/50 border border-gray-100 shadow-sm sm:shadow-none sm:bg-transparent sm:border-0"
            >
              <span className="text-[14px] md:text-[15px] font-semibold text-[#334155] leading-snug">
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function FeaturesAndCapabilities() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Title & Subtitle */}

        <TrustBadges />

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
            Comprehensive support designed with dignity and independence at the
            center
          </p>
        </motion.div>

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {featureCards.map((card, cardIndex) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={0.15 + cardIndex * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center min-h-[320px]"
              >
                {/* Square Soft Grey Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-[#F4F5F7] flex items-center justify-center mb-6 shrink-0 border border-gray-100">
                  <IconComponent className="w-6 h-6 text-[#25A18E]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#25A18E] mb-6 leading-snug whitespace-pre-line text-center min-h-[56px] flex items-center justify-center">
                  {card.title}
                </h3>

                {/* Checklist Features */}
                <ul className="space-y-3.5 w-full">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#25A18E] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#555555] leading-relaxed">
                        {item}
                      </span>
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
