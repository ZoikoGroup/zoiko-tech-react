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
    title: "Documentation home",
    lines: [
      "Entry by platform, API, integration,",
      "identity, operations and",
      "troubleshooting.",
    ],
  },
  {
    title: "API reference",
    lines: ["Request, response and event", "definitions where live."],
  },
  {
    title: "Quickstarts & tutorials",
    lines: ["Short path to a first outcome, then", "multi-step guidance."],
  },
  {
    title: "Architecture guides",
    lines: ["Reference patterns, boundaries and", "tradeoffs."],
  },
  {
    title: "Sample apps",
    lines: [
      "Only when maintained, versioned",
      "and safe for external use.",
    ],
  },
  {
    title: "Changelog",
    lines: [
      "Dated changes to affected technical",
      "surfaces where available.",
    ],
  },
];

export default function DocumentationLearningPath() {
  return (
    <section
      className="w-full py-16 md:pt-[83px] md:pb-[84px] md:px-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(109.14deg, rgb(18, 70, 63) 2.71%, rgb(3, 16, 15) 77.97%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#8bf2c8] uppercase">
            LEARN · DOCUMENTATION &amp; ARCHITECTURE
          </p>
          <h2 className="font-segoe font-bold text-white text-[32px] md:text-[40px] leading-[38px] md:leading-[46px] mt-3 max-w-[534px]">
            A learning path that is more than marketing.
          </h2>
          <p className="font-segoe font-normal text-[#87c7aa] text-[16px] leading-[25.6px] mt-3 max-w-[640px]">
            Documentation keeps persistent navigation, copyable code, visible
            version context and direct links to support and status.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="grid grid-cols-1 md:grid-cols-4 gap-[18px] pt-6"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#ffffff17] border border-[#ffffff3d] rounded-[14px] p-[22px] flex flex-col gap-[5.99px]"
            >
              <h3 className="font-segoe font-bold text-white text-[17px] leading-[27.2px]">
                {card.title}
              </h3>
              <div className="font-segoe font-normal text-[#87c7aa] text-[14.5px] leading-[23.2px]">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="pt-[14px]"
        >
          <button
            type="button"
            className="inline-flex items-center justify-center min-h-[44px] px-[22px] pt-[7.2px] pb-[8.8px] rounded-[8px] bg-white border border-white cursor-pointer"
          >
            <span className="font-segoe font-normal text-[#0f3c37] text-[16px] leading-[25.6px] text-center">
              Open documentation
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
