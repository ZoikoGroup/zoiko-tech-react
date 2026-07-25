"use client";

import React from "react";
import { motion } from "framer-motion";

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
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
  "Built by Zoiko Tech Inc.",
  "Designed for modern teams\nacross 30+ countries",
  "Hybrid and remote friendly",
  "Enterprise-ready: SSO, RBAC, and\naudit trails",
];

export default function TimeBadges() {
  return (
    <section className="w-full bg-[#C0FFFC] py-8 px-6 md:px-12 lg:px-16">
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
              className="flex items-center justify-center p-3 rounded-lg"
            >
              <span className="text-[13px] md:text-[14px] font-semibold text-[#2B4C46] leading-snug whitespace-pre-line">
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
