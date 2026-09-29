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

type FragmentCard = {
  title: string;
  description: string;
};

const cards: FragmentCard[] = [
  {
    title: "Different systems own different facts",
    description: "Authoritative sources and provenance must be explicit.",
  },
  {
    title: "Deadlines cross functions",
    description:
      "A dependency and readiness calendar replaces isolated task lists.",
  },
  {
    title: "Exceptions arrive late",
    description: "Readiness blockers surface before execution or release.",
  },
  {
    title: "Approvals hide in email",
    description: "Explicit approval states with accountable roles.",
  },
  {
    title: "Markets vary",
    description:
      "Availability comes from controlled records, never universal claims.",
  },
  {
    title: "Reconciliation happens late",
    description: "It is part of the cycle, not an afterthought.",
  },
  {
    title: "Evidence is scattered",
    description:
      "Material approvals, changes and outcomes are preserved where required.",
  },
];

export default function WhyFragment() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.03deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[16px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-white max-w-[730px]">
            Why recurring operations fragment
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[707px]">
            Recurring work breaks where systems, teams and deadlines meet.
            These are the seven places it usually shows up.
          </p>

          <div className="grid grid-cols-4 gap-[16px] w-full mt-[4px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.03deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[508px]">
            Why recurring operations fragment
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] w-full">
            Recurring work breaks where systems, teams and deadlines meet.
            These are the seven places it usually shows up.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full pt-[2px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
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
