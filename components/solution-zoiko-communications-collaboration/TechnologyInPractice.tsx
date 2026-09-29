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
  status: string;
  available?: boolean;
};

const desktopCards: Card[] = [
  {
    title: "Collaboration",
    description: "Problem, workspace and policy model, deployment, approved result.",
    status: "Evidence pending",
  },
  {
    title: "Meeting workflow",
    description: "Controlled AI and action workflow with outcome.",
    status: "Evidence pending",
  },
  {
    title: "Calling / customer communication",
    description: "Approved infrastructure and measurable result, if evidence-approved.",
    status: "Evidence pending",
  },
  {
    title: "Governance",
    description: "Admin, security and compliance problem with policy and role design.",
    status: "Evidence pending",
  },
];

const tabletCards: Card[] = [
  ...desktopCards,
  {
    title: "Reference architecture",
    description: "Identity, workspace, modes, AI and policy, integration, evidence.",
    status: "Available",
    available: true,
  },
];

export default function TechnologyInPractice() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416]">
            Technology in practice
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
            Proof appears only when approved for public use.
          </p>

          <div className="flex flex-wrap gap-[16px] w-full">
            {desktopCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] w-[283px] h-[208px] flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]">
                    {card.title}
                  </h3>
                  <p className="mt-[5px] font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                    {card.description}
                  </p>
                </div>
                <span className="inline-flex items-center self-start border border-[#247780] rounded-full px-[10px] py-[1px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#247780]">
                  {card.status}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#read-evidence"
            className="mt-[0px] font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:opacity-90 transition-opacity duration-200"
          >
            Read evidence
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
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
            Technology in practice
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
            Proof appears only when approved for public use.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
            {tabletCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col items-start gap-[1px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="mt-[5px] font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.description}
                </p>
                {card.available ? (
                  <span className="mt-[5px] inline-flex items-center bg-[#247780] border border-white rounded-full px-[10px] py-[1px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-white">
                    {card.status}
                  </span>
                ) : (
                  <span className="mt-[5px] inline-flex items-center border border-[#247780] rounded-full px-[10px] py-[1px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#247780]">
                    {card.status}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="w-full border-l-4 border-[#247780] bg-[#e6f2f4] rounded-tr-[10px] rounded-br-[10px] px-[16px] pt-[16.64px] pb-[17.6px]">
            <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
              No approved public proof yet? Talk to us about the architecture, governance
              model and Trust Center. We do not publish unverified customer logos,
              adoption figures, call quality claims or AI productivity gains.
            </p>
          </div>

          <a
            href="#read-evidence"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:opacity-90 transition-opacity duration-200"
          >
            Read evidence
          </a>
        </motion.div>
      </div>
    </section>
  );
}
