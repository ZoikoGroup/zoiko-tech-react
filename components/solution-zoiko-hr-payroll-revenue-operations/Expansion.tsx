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

type Card = {
  title: string;
  description: string[];
};

const cards: Card[] = [
  {
    title: "Starting from Zoiko HR",
    description: [
      "Workforce & Productivity, Zoiko Payroll, Communications & Collaboration.",
    ],
  },
  {
    title: "Starting from Zoiko Payroll",
    description: [
      "Zoiko HR, Regulatory & Compliance where approved, broader business operations.",
    ],
  },
  {
    title: "Starting from Zoiko Billing",
    description: [
      "Technology & SaaS, Modernization & Integration, Regulatory & Compliance.",
    ],
  },
  {
    title: "Recurring operations",
    description: [
      "HR, payroll or billing specialist platforms, based on the process.",
    ],
  },
  {
    title: "Global operations",
    description: ["Cloud & Developer Infrastructure, Modernization & Integration."],
  },
];

export default function Expansion() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[16px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416] max-w-[729.97px]">
            Where teams go next
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[706.56px]">
            Adjacent paths follow the operating process you are standardizing.
          </p>

          <div className="w-full grid grid-cols-4 gap-[16px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] pt-[19px] pb-[20px] px-[20px] flex flex-col items-start gap-[3px]"
              >
                <p className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                  {card.title}
                </p>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#explore-adjacent-solutions"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#247780]/90 transition-colors duration-200"
          >
            Explore adjacent solutions
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.4px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[507.73px]">
            Where teams go next
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
            Adjacent paths follow the operating process you are standardizing.
          </p>

          <div className="w-full grid grid-cols-2 gap-[16px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] pt-[19px] pb-[20px] px-[20px] flex flex-col items-start gap-[3px]"
              >
                <p className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                  {card.title}
                </p>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#explore-adjacent-solutions"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#247780]/90 transition-colors duration-200"
          >
            Explore adjacent solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
