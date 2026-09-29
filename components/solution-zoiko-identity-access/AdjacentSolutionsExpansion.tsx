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

const cardClass =
  "bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] px-[20px] py-[19px] flex flex-col gap-[3.2px]";

type AdjacentCard = {
  title: string;
  lines: string[];
};

const cards: AdjacentCard[] = [
  {
    title: "Identity foundation",
    lines: [
      "Cybersecurity & Resilience,",
      "Regulatory & Compliance,",
      "platform administration.",
    ],
  },
  {
    title: "AI / agent deployment",
    lines: ["AI Governance & Assurance, then", "agent authority here."],
  },
  {
    title: "Developer platform",
    lines: ["Cloud & Developer Infrastructure,", "Modernization & Integration."],
  },
  {
    title: "Workforce systems",
    lines: ["Workforce & Productivity, HR,", "Payroll & Revenue Operations."],
  },
  {
    title: "Regulated environments",
    lines: ["Regulatory & Compliance,", "Cybersecurity & Resilience."],
  },
];

export default function AdjacentSolutionsExpansion() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[19.9px] pb-[12px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
            Where teams go next
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
            Adjacent routes are contextual, and never interrupt an access
            review, revocation or privileged flow.
          </p>

          <div className="grid grid-cols-4 gap-[16px] w-full items-stretch">
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <p className="font-inter font-bold text-[16px] leading-[25.6px] text-white">
                  {card.title}
                </p>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#explore-adjacent-solutions"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] inline-flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Explore adjacent solutions
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col gap-[14.2px] pb-[12px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[508px]">
            Where teams go next
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
            Adjacent routes are contextual, and never interrupt an access
            review, revocation or privileged flow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full items-stretch">
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <p className="font-inter font-bold text-[16px] leading-[25.6px] text-white">
                  {card.title}
                </p>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#explore-adjacent-solutions"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] inline-flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Explore adjacent solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
