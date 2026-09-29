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

type RouterCard = {
  title: string;
  description: string;
};

const routerCards: RouterCard[] = [
  {
    title: "Authenticate users",
    description:
      "Establish trusted sign-in and session controls across approved applications and platforms.",
  },
  {
    title: "Govern access",
    description:
      "Define roles, entitlements, scopes and least-privilege access decisions.",
  },
  {
    title: "Manage identity lifecycle",
    description:
      "Create, change, review, suspend and revoke access as identity state changes.",
  },
  {
    title: "Control privileged authority",
    description: "Separate high-impact administrative access from routine work.",
  },
  {
    title: "Manage systems / agents",
    description: "Govern service, integration and agent identities alongside people.",
  },
  {
    title: "Delegate authority",
    description:
      "Allow approved actors to act on behalf of another user, service or organization within explicit bounds.",
  },
];

export default function IntentRouter() {
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
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
            What do you need to control?
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            Choose a path and jump to the relevant part of the identity model.
          </p>

          <div className="grid grid-cols-4 gap-[16px] w-full">
            {routerCards.map((card) => (
              <a
                key={card.title}
                href="#"
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col gap-[8px] shadow-[0px_4px_2.25px_rgba(0,0,0,0.25)]"
              >
                <span className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416]">
                  {card.title}
                </span>
                <span className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.description}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.4px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px]">
            What do you need to control?
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            Choose a path and jump to the relevant part of the identity model.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-[16px] w-full pt-[5.6px]">
            {routerCards.map((card) => (
              <a
                key={card.title}
                href="#"
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col gap-[8px]"
              >
                <span className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416]">
                  {card.title}
                </span>
                <span className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.description}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
