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

const topRowLocations = [
  { boldText: "HQ:", lightText: " Sacramento, California – USA" },
  { boldText: "Austin, Texas", lightText: " – Engineering & AI" },
  { boldText: "Albany, New York", lightText: " – Legal & Strategy" },
  { boldText: "Springfield, Illinois", lightText: " – Cloud & Cybersecurity" },
];

const bottomRowLocations = [
  { boldText: "London, UK", lightText: " – International Telecom Division" },
  { boldText: "Shenzhen, China", lightText: " – Innovation & Supply Chain" },
  { boldText: "Singapore", lightText: " – Marina Bay Financial Centre" },
];

export default function GlobalPresence() {
  return (
    <footer className="w-full bg-[#0A2540] text-white py-12 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center font-sans">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-lg md:text-xl font-bold tracking-wide text-center mb-8 text-white"
        >
          Global Presence
        </motion.h2>

        {/* Locations Grid Container */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full flex flex-col gap-y-4 md:gap-y-6 text-xs md:text-[13px] text-white/90 text-center mb-8"
        >
          {/* Top Row Locations */}
          <div className="flex flex-wrap items-center justify-center gap-y-2">
            {topRowLocations.map((item, index) => (
              <React.Fragment key={index}>
                <div className="px-3 md:px-4 py-1">
                  <span className="font-bold text-white">{item.boldText}</span>
                  <span className="font-normal text-white/80">
                    {item.lightText}
                  </span>
                </div>
                {index < topRowLocations.length - 1 && (
                  <div className="hidden md:block h-4 w-[1px] bg-white/20 my-auto" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Row Locations */}
          <div className="flex flex-wrap items-center justify-center gap-y-2">
            {bottomRowLocations.map((item, index) => (
              <React.Fragment key={index}>
                <div className="px-3 md:px-4 py-1">
                  <span className="font-bold text-white">{item.boldText}</span>
                  <span className="font-normal text-white/80">
                    {item.lightText}
                  </span>
                </div>
                {index < bottomRowLocations.length - 1 && (
                  <div className="hidden md:block h-4 w-[1px] bg-white/20 my-auto" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="w-full border-t border-white/20 mb-6" />

        {/* Copyright & Tagline */}
        <motion.p
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[11px] md:text-[12px] text-white/70 text-center leading-relaxed font-normal"
        >
          © 2025 ZoikoTech Inc. | A proud member of the Zoiko Group | Powered by
          Purpose. Engineered for the Future. "One Platform. Infinite
          Possibilities."
        </motion.p>
      </div>
    </footer>
  );
}
