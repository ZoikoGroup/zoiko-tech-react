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

const developerSections = [
  {
    title: "APIs",
    items: [
      "Content Ingestion API",
      "Metadata Management API",
      "Creator Accounts API",
      "Live Streaming API",
      "Community Posts API",
      "Engagement Metrics API",
    ],
  },
  {
    title: "SDKs & Tools",
    items: [
      "Video Player SDK",
      "Social SDK",
      "Creator Studio SDK",
      "NGO Verification Portal",
      "Multi-content Uploader",
    ],
  },
];

export default function ZoikoDeveloperHub() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-6"
        >
          <span className="bg-[#E8F2F2] text-[#006666] px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
            Developer & Partner Hub
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] leading-tight">
            Build on Our Platform
          </h2>
        </motion.div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {developerSections.map((section, index) => (
            <motion.div
              key={section.title}
              custom={0.15 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[340px]"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#1A202C] mb-8 leading-snug">
                {section.title}
              </h3>

              {/* Bullet List */}
              <ul className="space-y-4 w-full text-left">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0" />
                    <span className="text-[14px] sm:text-[15px] text-[#555555] font-medium leading-relaxed">
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
