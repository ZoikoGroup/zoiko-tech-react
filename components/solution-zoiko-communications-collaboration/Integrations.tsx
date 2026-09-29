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

const integrationCards = [
  { title: "Identity", lines: ["SAML, OIDC or SCIM only where", "confirmed."] },
  { title: "Calendars", lines: ["Scheduling integration where", "approved."] },
  {
    title: "Storage & files",
    lines: ["Connected storage at supported", "scope."],
  },
  {
    title: "Workflow",
    lines: ["Events and action items to", "approved workflow systems."],
  },
  { title: "APIs & webhooks", lines: ["Only when public-ready."] },
  {
    title: "Status",
    lines: ["Health and service state link to", "authoritative surfaces."],
  },
];

export default function Integrations() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[19.9px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
            Integrations and workflow connectivity
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
            Connect communication to the systems where work happens. Only
            approved, public-ready integrations are shown.
          </p>

          <div className="grid grid-cols-4 gap-[16px] w-full">
            {integrationCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                  {card.title}
                </h3>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-[12px] mt-[6px]">
            <a
              href="#explore-developer-platform"
              className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
            >
              Explore Developer Platform
            </a>
            <a
              href="#documentation"
              className="font-inter font-semibold text-[16px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
            >
              Documentation
            </a>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
            Integrations and workflow connectivity
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
            Connect communication to the systems where work happens. Only
            approved, public-ready integrations are shown.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full pt-[6px]">
            {integrationCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                  {card.title}
                </h3>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-[12px] pt-[6px]">
            <a
              href="#explore-developer-platform"
              className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
            >
              Explore Developer Platform
            </a>
            <a
              href="#documentation"
              className="font-inter font-semibold text-[16px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
            >
              Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
