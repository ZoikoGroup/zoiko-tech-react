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

const architectureLayers = [
  {
    title: "Experience Layer",
    tags: ["Video Player", "Social Feed", "Dual Experience Fabric™"],
  },
  {
    title: "Core Platform",
    tags: [
      "Content Management System",
      "Planetary Interest Graph™",
      "Creator Ecosystem Engine™",
    ],
  },
  {
    title: "Media Layer",
    tags: ["Transcoding", "CDN", "Storage"],
  },
  {
    title: "Data Layer",
    tags: ["User Profiles", "Engagement Data", "Analytics"],
  },
  {
    title: "Governance Layer",
    tags: ["Moderation", "Safety Systems"],
  },
];

export default function ZoikoPlatformArchitecture() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
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
            Platform Architecture
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-12 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] leading-tight">
            Built for Scale and Performance
          </h2>
        </motion.div>

        {/* Outer Architecture Container Block */}
        <motion.div
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
          className="bg-[#F8FAFA] rounded-xl p-6 sm:p-10 w-full flex flex-col gap-5 shadow-xs"
        >
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-6 border-4 border-l-[#20B2AA] shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Layer Title */}
              <h3 className="text-lg md:text-[19px] font-bold text-[#006059] pl-2">
                {layer.title}
              </h3>

              {/* Tag Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pl-2">
                {layer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E8F2F2] text-[#4A5F5F] px-4 py-2 rounded-lg text-[13px] md:text-[14px] font-medium hover:bg-[#E2E8E8] transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
