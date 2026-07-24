"use client";

import React from "react";
import { motion } from "framer-motion";

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

const categoryCards = [
  {
    title: "OEM & Aftermarket Parts",
    description:
      "Original equipment and high-quality aftermarket parts with authenticity verification and warranty protection.",
  },
  {
    title: "Electric Vehicle Components",
    description:
      "Specialized EV parts, charging equipment, and electric drivetrain components with technical support and installation guidance.",
  },
  {
    title: "Tools & Equipment",
    description:
      "Professional automotive tools, diagnostic equipment, and workshop supplies with technical specifications and training resources.",
  },
  {
    title: "Performance & Tuning",
    description:
      "Performance parts, tuning equipment, and racing components with compatibility verification and performance testing data.",
  },
  {
    title: "Classic & Vintage",
    description:
      "Hard-to-find classic car parts, restoration components, and vintage automotive accessories with authenticity documentation.",
  },
  {
    title: "Insurance Add-ons",
    description:
      "Extended warranties, insurance products, and protection plans integrated with part purchases and professional installations.",
  },
];

export default function MarketplaceCategories() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-3 leading-tight"
        >
          Marketplace Categories
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16 max-w-xl leading-relaxed"
        >
          Comprehensive automotive ecosystem covering all vehicle needs
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categoryCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[220px]"
            >
              <div>
                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#222222] mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#555555] text-[14px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
