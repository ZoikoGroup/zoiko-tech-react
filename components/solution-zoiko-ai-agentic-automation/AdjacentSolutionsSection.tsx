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
    title: "AI assistance / summaries",
    description: (
      <>
        AI Governance &amp; Assurance → Identity &amp; Access →<br />
        workflow orchestration.
      </>
    ),
  },
  {
    title: "Bounded agent workflow",
    description: (
      <>
        Cloud &amp; Developer Infrastructure → Cybersecurity
        <br />
        &amp; Resilience → more approved tools.
      </>
    ),
  },
  {
    title: "Marketing / commerce automation",
    description: (
      <>
        Customer and commerce solutions, plus
        <br />
        governance and integration layers.
      </>
    ),
  },
  {
    title: "Workforce operations",
    description: (
      <>
        Workforce &amp; Productivity → HR, Payroll &amp; Revenue
        <br />
        Operations → Communications &amp; Collaboration.
      </>
    ),
  },
  {
    title: "Regulated workflow",
    description: (
      <>
        Regulatory &amp; Compliance → AI Governance &amp;
        <br />
        Assurance → domain industry solutions.
      </>
    ),
  },
];

export default function AdjacentSolutionsSection() {
  return (
    <section className="w-full bg-white border-t border-[#0d3632] px-4 md:px-[100px] pt-[48px] md:pt-[83px] pb-[48px] md:pb-[84px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] w-full flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start gap-[10px]"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#10b981] uppercase">
            Expansion &amp; Retention
          </p>
          <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-[#06231f] max-w-[514px]">
            Extend what works into adjacent workflows.
          </h2>
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#324b40] max-w-[641px] pt-[3px]">
            Suggested paths follow the capability you already run, and never interrupt a review or
            approval task.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-[18px] pt-[28px]"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[1.5px] rounded-[14px] border border-[#15503d] px-[24px] pt-[24px] pb-[25px]"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, rgb(10, 47, 42) 0%, rgb(6, 35, 31) 100%)",
              }}
            >
              <h3 className="font-segoe font-bold text-[18px] leading-[28.8px] text-white w-full">
                {card.title}
              </h3>
              <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa] w-full pt-[4.5px]">
                {card.description}
              </p>
              <a
                href="#explore-adjacent-solutions"
                className="font-segoe font-bold text-[14px] leading-[22.4px] text-[#10b981] whitespace-nowrap pt-[1px]"
              >
                Explore adjacent solutions →
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
