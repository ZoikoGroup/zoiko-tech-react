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

type IntentCard = {
  title: string;
  description: string;
};

const cards: IntentCard[] = [
  {
    title: "Run HR operations",
    description:
      "Create clearer governed workflows around workforce and people operations.",
  },
  {
    title: "Standardize payroll operations",
    description:
      "Move payroll inputs, review, controls and release through a clearer operating cycle.",
  },
  {
    title: "Improve billing / revenue operations",
    description:
      "Bring invoicing, billing and recurring revenue workflows into more controlled processes.",
  },
  {
    title: "Connect recurring processes",
    description:
      "Coordinate deadlines, approvals, evidence and handoffs across functions.",
  },
  {
    title: "Reduce exceptions",
    description:
      "Surface missing, conflicting or unapproved inputs before downstream action.",
  },
  {
    title: "Operate across markets",
    description:
      "Understand availability, operator and jurisdiction-specific requirements before rollout.",
  },
];

export default function IntentRouter() {
  return (
    <section className="w-full bg-white">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[99.155px] lg:pb-[100px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[16px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416] max-w-[730px]">
            Where does your operating challenge start?
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[707px]">
            Choose the path closest to your need. Each one jumps to the
            relevant part of this page.
          </p>

          <div className="flex items-center justify-end gap-[10px] w-full mt-[4px]">
            <div className="relative w-[594px] h-[495px] shrink-0">
              <img
                src="/solution-zoiko-hr-payroll-revenue-operations/intent-router-hexagon-diagram.png"
                alt="Hexagon diagram showing HR, calendar, document, refresh, search and globe icons connected to a central hub"
                className="absolute left-[21px] top-0 w-[552px] h-[552px] object-cover pointer-events-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-[16px] w-[582px] shrink-0 justify-end">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col gap-[3px] w-[283px] shadow-[0px_4px_2px_rgba(0,0,0,0.25)]"
                >
                  <p className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416]">
                    {card.title}
                  </p>
                  <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.4px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px]">
            Where does your operating challenge start?
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
            Choose the path closest to your need. Each one jumps to the
            relevant part of this page.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full pt-[2px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col gap-[3px] w-full"
              >
                <p className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416]">
                  {card.title}
                </p>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
