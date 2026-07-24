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

const comparisons = [
  {
    competitor: "vs. Amazon",
    driverXtra: "Specialized fitment accuracy and deep automotive verification",
    competitorDetail: "Generic reach but lacks automotive expertise",
    competitorName: "Amazon",
  },
  {
    competitor: "vs. eBay Motors",
    driverXtra: "AI-powered authenticity validation and quality assurance",
    competitorDetail: "Large used-part base but weak authenticity validation",
    competitorName: "eBay Motors",
  },
  {
    competitor: "vs. RockAuto",
    driverXtra: "AI personalization and ecosystem integration",
    competitorDetail: "Strong catalog but no user personalization",
    competitorName: "RockAuto",
  },
  {
    competitor: "vs. AutoZone",
    driverXtra: "Global reach with AI-driven interface",
    competitorDetail: "Localized retail strength, no international presence",
    competitorName: "AutoZone",
  },
];

export default function CompetitiveAdvantage() {
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
          Competitive Advantage
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
          How DriverXtra leads the automotive commerce revolution
        </motion.p>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.competitor}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[220px]"
            >
              <div>
                {/* Competitor Title */}
                <h3 className="text-xl font-bold text-[#222222] mb-6 leading-snug">
                  {item.competitor}
                </h3>

                {/* Comparison Content */}
                <div className="space-y-3 text-[14px]">
                  <p className="text-[#555555]">
                    <span className="font-bold text-[#222222]">
                      DriverXtra:
                    </span>{" "}
                    {item.driverXtra}
                  </p>
                  <p className="text-[#555555]">
                    <span className="font-bold text-[#222222]">
                      {item.competitorName}:
                    </span>{" "}
                    {item.competitorDetail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
