"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const supportCards = [
  {
    title: "Enterprise Support",
    items: [
      "24/7 availability",
      "15 min P1 response",
      "Dedicated CSM",
      "Quarterly architecture reviews",
    ],
  },
  {
    title: "Onboarding",
    items: [
      "Migration support",
      "Custom integrations",
      "White-glove provisioning",
    ],
  },
];

export default function EnterpriseSupportAndOnboarding() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {supportCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.1 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 border-l-4 border-[#FF6B4A] min-h-[320px] flex flex-col justify-start"
            >
              {/* Card Title */}
              <h3 className="text-xl font-bold text-[#25A18E] mb-8">
                {card.title}
              </h3>

              {/* Items List */}
              <ul className="space-y-5">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-[14px] text-[#555555]"
                  >
                    <ArrowRight className="w-4 h-4 text-[#FF6B4A] mr-3 shrink-0 stroke-[2.5]" />
                    <span className="leading-snug">{item}</span>
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
