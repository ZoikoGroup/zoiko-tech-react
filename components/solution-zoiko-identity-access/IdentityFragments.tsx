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
  image: string;
};

const fragmentCards: FragmentCard[] = [
  {
    title: "Multiple identity sources",
    description:
      "Show the authoritative source, linking, and conflict or unknown states.",
    image: "/solution-zoiko-identity-access/fragment-multiple-identity-sources.png",
  },
  {
    title: "Login confused with access",
    description: "Proving identity is different from deciding what it may do.",
    image: "/solution-zoiko-identity-access/fragment-login-confused-with-access.png",
  },
  {
    title: "Roles accumulate",
    description: "Entitlements need scope, owner and review or expiry.",
    image: "/solution-zoiko-identity-access/fragment-roles-accumulate.png",
  },
  {
    title: "Unmanaged service identities",
    description:
      "Integrations, workloads and agents are accountable actors with owners.",
    image: "/solution-zoiko-identity-access/fragment-unmanaged-service-identities.png",
  },
  {
    title: "Informal delegation",
    description: "Make delegation explicit, with duration and revocation.",
    image: "/solution-zoiko-identity-access/fragment-informal-delegation.png",
  },
  {
    title: "Offboarding gaps",
    description: "Revoke or suspend across direct and delegated authority.",
    image: "/solution-zoiko-identity-access/fragment-offboarding-gaps.png",
  },
  {
    title: "Incomplete evidence",
    description:
      "Preserve access decisions, reviews, exceptions and changes where supported.",
    image: "/solution-zoiko-identity-access/fragment-incomplete-evidence.png",
  },
];

export default function IdentityFragments() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(123.39deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[21.11px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
            Why identity fragments
          </h2>

          <div className="grid grid-cols-12 gap-[16px] w-full items-stretch">
            {fragmentCards.map((card, index) => (
              <div
                key={card.title}
                className={`${
                  index < 4 ? "col-span-3" : "col-span-4"
                } h-full bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px]`}
              >
                <div className="w-full h-[132px] rounded-[14px] overflow-hidden shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
                <span className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                  {card.title}
                </span>
                <span className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.description}
                </span>
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
            "linear-gradient(135.02deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[508px]">
            Why identity fragments
          </h2>

          <div className="grid grid-cols-2 gap-[16px] w-full">
            {fragmentCards.map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px]"
              >
                <span className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                  {card.title}
                </span>
                <span className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.description}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
