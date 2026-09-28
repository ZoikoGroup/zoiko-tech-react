"use client";

import React from "react";
import { motion } from "framer-motion";

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

const cards = [
  {
    title: "Compliance / assurance",
    lines: [
      "Cybersecurity & Resilience → Identity & Access →",
      "AI Governance & Assurance.",
    ],
  },
  {
    title: "Tax / regulatory operations",
    lines: [
      "HR, Payroll & Revenue Operations or Financial",
      "Services Technology, with ZoikoTax scope explicit.",
    ],
  },
  {
    title: "AI in regulated workflows",
    lines: [
      "AI Governance & Assurance → Identity & Access →",
      "Regulatory & Compliance.",
    ],
  },
  {
    title: "Regulated cloud / SaaS",
    lines: [
      "Cloud & Developer Infrastructure → Cybersecurity &",
      "Resilience → Regulatory & Compliance.",
    ],
  },
  {
    title: "Industry-specific compliance",
    lines: [
      "Relevant industry solution → Regulatory &",
      "Compliance → approved domain platform evidence.",
    ],
  },
];

export default function AdjacentRoutesExpansion() {
  return (
    <section
      className="w-full border-t border-[#0b5c54] px-4 md:px-[100px] py-[48px] md:pt-[79px] md:pb-[80px]"
      style={{
        backgroundImage: "linear-gradient(180deg, #04201d 0%, #020d0c 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] flex flex-col gap-[10px] items-start w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="flex flex-col gap-[10px] w-full"
        >
          <p className="font-segoe font-bold text-[#8bf2c8] text-[13px] leading-[20.8px] tracking-[1.3px] uppercase">
            Expansion &amp; Retention
          </p>
          <h2 className="font-segoe font-bold text-white text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] max-w-[534px]">
            Adjacent routes that follow your starting point.
          </h2>
          <p className="font-segoe font-normal text-[#87c7aa] text-[16px] leading-[25.6px] max-w-[640px] pt-1">
            Suggestions stay out of the way of active audit, filing and approval tasks.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-[18px] pt-6 w-full"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-[#26dca2] rounded-[14px] px-[22px] pt-[22px] pb-[23px] flex flex-col gap-[1.5px] items-start"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, #0a2f2a 0%, #06231f 100%)",
              }}
            >
              <h3 className="font-segoe font-bold text-white text-[17px] leading-[27.2px] w-full">
                {card.title}
              </h3>
              <div className="font-segoe font-normal text-[#87c7aa] text-[14.5px] leading-[23.2px] pt-[4.5px] w-full">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="font-segoe font-bold text-[#8bf2c8] text-[14px] leading-[22.4px] pt-[8px] whitespace-nowrap">
                Explore adjacent solutions →
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
