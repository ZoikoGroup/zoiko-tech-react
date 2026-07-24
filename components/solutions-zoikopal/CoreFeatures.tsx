"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Users, ShieldCheck } from "lucide-react";

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

const coreFeatures = [
  {
    title: "Cognitive Rhythm Engine™",
    description:
      "Learns individual patterns and preferences to provide personalized support that adapts to each person's unique daily rhythm and cognitive needs.",
    icon: Brain,
  },
  {
    title: "Circle of Care Hub™",
    description:
      "Connects family members, caregivers, and support networks with shared updates, messaging, and coordinated care management.",
    icon: Users,
  },
  {
    title: "Independence Guardian Suite™",
    description:
      "Provides safety monitoring and independence support through non-intrusive check-ins and activity awareness.",
    icon: ShieldCheck,
  },
];

export default function CoreFeatures() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* 2-Column Grid matching the card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
          {coreFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={0.15 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center min-h-[320px] justify-start"
              >
                {/* Circular Teal Icon Container */}
                <div className="w-16 h-16 rounded-full bg-[#25A18E] flex items-center justify-center mb-6 shadow-sm shrink-0">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Feature Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#2D3748] mb-4 leading-snug whitespace-pre-line">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-[14px] md:text-[15px] text-[#666666] leading-relaxed font-normal max-w-md">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
