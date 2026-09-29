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

const cardTagClass =
  "border border-[#7fd0d9] rounded-[99px] flex items-center px-[10px] py-[1px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] w-fit";

const cards = [
  {
    title: "Identity technology",
    lines: [
      "Identity, authentication,",
      "entitlement and delegated",
      "authority as a technology pillar.",
    ],
    tag: "Architecture-first",
    image: "/solution-zoiko-identity-access/card-identity-technology-bg.png",
    icon: "/solution-zoiko-identity-access/icon-shield.svg",
  },
  {
    title: "Access governance",
    lines: [
      "Scoped authority, review and",
      "revocation as a control model.",
    ],
    tag: "Architecture-first",
    image: "/solution-zoiko-identity-access/card-access-governance-bg.png",
    icon: "/solution-zoiko-identity-access/icon-key.svg",
  },
  {
    title: "Zoiko iD / Zoiko Access",
    lines: ["Mapped delivery evidence when", "launch-ready."],
    tag: "Hidden until launch-ready",
    image: "/solution-zoiko-identity-access/card-zoiko-id-access-bg.png",
    icon: "/solution-zoiko-identity-access/icon-shield.svg",
  },
  {
    title: "Trust Center / Cybersecurity",
    lines: ["Authoritative security and trust", "evidence."],
    tag: null,
    image: "/solution-zoiko-identity-access/card-trust-center-bg.png",
    icon: "/solution-zoiko-identity-access/icon-shield-check.svg",
  },
];

export default function PlatformEvidence() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:px-[130px] lg:py-[96px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(131deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[20px] w-full"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
              Platform evidence, gated by launch readiness
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
              Named products appear only when their public destination,
              descriptor, maturity and capabilities are approved. Until then
              this page is architecture-first, and there are no empty product
              cards.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex gap-[16px] items-stretch justify-center w-full"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] flex flex-1 flex-col items-start gap-[16px] p-[20px] min-w-0"
              >
                <div className="relative flex w-full h-[140px] overflow-hidden rounded-[8px] shrink-0">
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <div className="relative flex flex-1 h-full items-center justify-center bg-[rgba(0,0,0,0.25)]">
                    <img
                      src={card.icon}
                      alt=""
                      className="w-[32px] h-[32px] block"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[8px] w-full">
                  <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                    {card.title}
                  </h3>
                  <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                    {card.lines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < card.lines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                {card.tag && <span className={cardTagClass}>{card.tag}</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design ============ */}
      <div
        className="flex lg:hidden flex-col items-start px-[24px] py-[46px] sm:px-[38.4px] sm:pt-[60.65px] sm:pb-[61.43px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.5px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[14.5px] w-full"
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[508px]">
              Platform evidence, gated by launch readiness
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
              Named products appear only when their public destination,
              descriptor, maturity and capabilities are approved. Until then
              this page is architecture-first, and there are no empty product
              cards.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] flex flex-col items-start gap-[8px] p-[20px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                {card.tag && (
                  <span className={`${cardTagClass} mt-[2px]`}>{card.tag}</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.25}
          >
            <a
              href="#explore-identity-technology"
              className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
            >
              Explore identity technology
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
