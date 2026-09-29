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
  description: string;
  tag: string;
};

const cards: Card[] = [
  {
    title: "HR operations",
    description:
      "Problem, source systems, controls, result and customer permission.",
    tag: "Evidence pending",
  },
  {
    title: "Payroll operations",
    description:
      "Cycle context, inputs, exceptions, approved outcome and limitations.",
    tag: "Evidence pending",
  },
  {
    title: "Billing operations",
    description: "Process, integrations, release model and approved result.",
    tag: "Evidence pending",
  },
  {
    title: "Cross-functional architecture",
    description:
      "HR, payroll, billing and process handoffs through identity, data and approvals.",
    tag: "Reference architecture",
  },
];

export default function TechnologyInPractice() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(140.17deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
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
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-white max-w-[729.97px]">
            Technology in practice
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[706.56px]">
            Proof appears here only when it is approved for public use.
          </p>

          <div className="w-full flex items-stretch justify-center gap-[16px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex-1 min-w-0 bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col items-start gap-[1px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] mt-[5px]">
                  {card.description}
                </p>
                <span className="font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[10px] py-[1px] mt-[8px]">
                  {card.tag}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#read-evidence"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Read evidence
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.02deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.4px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[507.73px]">
            Technology in practice
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] w-full">
            Proof appears here only when it is approved for public use.
          </p>

          <div className="w-full grid grid-cols-2 gap-[16px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col items-start gap-[1px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] mt-[5px]">
                  {card.description}
                </p>
                <span className="font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[10px] py-[1px] mt-[8px]">
                  {card.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full max-w-[742.84px] bg-[rgba(0,0,0,0.35)] border-l-4 border-[#7fd0d9] rounded-tr-[10px] rounded-br-[10px] py-[16px] px-[16px]">
            <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] max-w-[649.98px]">
              No approved public proof yet? Talk to us about the operating
              architecture, platform descriptors and availability rules. We
              don&rsquo;t publish unverified savings, speed gains or customer
              logos.
            </p>
          </div>

          <a
            href="#read-evidence"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Read evidence
          </a>
        </motion.div>
      </div>
    </section>
  );
}
