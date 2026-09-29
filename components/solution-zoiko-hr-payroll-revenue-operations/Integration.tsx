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
  "bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px] w-full";

type Card = {
  title: string;
  body: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "Identity & access",
    body: (
      <>
        Users, admin roles, service
        <br />
        identities and delegated authority where supported.
      </>
    ),
  },
  {
    title: "APIs & integrations",
    body: (
      <>
        Approved APIs, SDKs, events,
        <br />
        webhooks and connectors only.
      </>
    ),
  },
  {
    title: "Data & provenance",
    body: (
      <>
        Source, effective period,
        <br />
        mapping and verification state.
      </>
    ),
  },
  {
    title: "Workflow & approvals",
    body: (
      <>
        Cross-system handoffs, reviews
        <br />
        and approvals where supported.
      </>
    ),
  },
  {
    title: "Observability",
    body: (
      <>
        Integration health, process state
        <br />
        and errors as products expose
        <br />
        them.
      </>
    ),
  },
  {
    title: "Governance & evidence",
    body: (
      <>
        Audit, retention, policy and
        <br />
        evidence controls as approved.
      </>
    ),
  },
];

export default function Integration() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(138.06deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-white max-w-[729.97px]">
            Shared foundations connect the
            <br />
            specialist platforms
          </h2>

          <div className="grid grid-cols-4 gap-x-[16px] gap-y-[16px] w-full">
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[15.4px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
            Shared foundations connect the
            <br />
            specialist platforms
          </h2>

          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] w-full">
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-[12px] items-center w-full mt-[5px]">
            <a
              href="#explore-developer-platform"
              className="font-inter font-semibold text-[16px] leading-[25.6px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
            >
              Explore Developer Platform
            </a>
            <a
              href="#documentation"
              className="font-inter font-semibold text-[16px] leading-[25.6px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
            >
              Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
