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
    title: "Developer platform / API foundation",
    lines: [
      "Modernization & Integration → Identity & Access →",
      "Cybersecurity & Resilience.",
    ],
  },
  {
    title: "Cloud / infrastructure adoption",
    lines: [
      "Technology & SaaS → AI & Agentic Automation →",
      "relevant platform workloads.",
    ],
  },
  {
    title: "Integration layer",
    lines: [
      "Communications & Collaboration → HR / Payroll /",
      "Revenue Operations → industry solutions.",
    ],
  },
  {
    title: "Identity / governance",
    lines: [
      "Regulatory & Compliance → AI Governance &",
      "Assurance → more APIs and workflows.",
    ],
  },
  {
    title: "Observability / operations",
    lines: [
      "System Status and support → broader platform",
      "estate → cross-platform operating patterns.",
    ],
  },
];

export default function ReuseFoundationAcrossPlatforms() {
  return (
    <section
      className="w-full py-[48px] md:pt-[83px] md:pb-[84px] px-4 md:px-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(246.09deg, rgb(18, 70, 63) 10.628%, rgb(6, 25, 27) 68.746%)",
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
          <h2 className="font-segoe font-bold text-white text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] max-w-[766px]">
            Reuse the foundation across more platforms.
          </h2>
          <p className="font-segoe font-normal text-[#87c7aa] text-[16px] leading-[25.6px] max-w-[640px] pt-[3px]">
            Suggested paths follow what you already run and stay out of the way of active work.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="flex flex-wrap justify-center gap-[20px] w-full pt-[24px]"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#ffffff17] border border-[#ffffff3d] border-solid flex flex-col gap-[1.5px] items-start p-[22px] rounded-[14px] min-w-0 w-full md:w-[calc(33.333%-13.34px)]"
            >
              <h3 className="font-segoe font-bold text-white text-[17px] leading-[27.2px] w-full">
                {card.title}
              </h3>
              <p className="font-segoe font-normal text-[#87c7aa] text-[14.5px] leading-[23.2px] w-full pt-[4.5px]">
                {card.lines[0]}
                <br />
                {card.lines[1]}
              </p>
              <p className="font-segoe font-bold text-white text-[14px] leading-[22.4px] whitespace-nowrap pt-[8px]">
                Explore adjacent solutions →
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
