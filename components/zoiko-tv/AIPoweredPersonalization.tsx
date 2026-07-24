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

const personalizationItems = [
  {
    title: "Nova Discovery Engine",
    description:
      "AI-powered content curation that learns your interests while respecting privacy and promoting diverse, meaningful content discovery.",
  },
  {
    title: "Halo Governance",
    description:
      "Transparent content moderation ensuring all recommendations align with ethical guidelines and community standards with explainable AI decisions.",
  },
  {
    title: "Ethos Transparency Board",
    description:
      "Complete AI reasoning transparency with user control over data rights, recommendation logic, and content filtering preferences.",
  },
  {
    title: "Ethical Recommendations",
    description:
      "Algorithm designed to promote educational, inspiring, and socially beneficial content rather than maximizing engagement through controversial material.",
  },
];

export default function AIPoweredPersonalization() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[38px] font-bold tracking-tight text-slate-800 text-center mb-3"
        >
          AI-Powered Personalization
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-slate-500 text-[15px] sm:text-[16px] font-normal text-center mb-14"
        >
          Intelligent content discovery with ethical governance and transparency
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {personalizationItems.map((item, index) => (
            <motion.div
              key={item.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] border border-slate-100 flex flex-col items-start hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[220px]"
            >
              {/* Card Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-500 text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
