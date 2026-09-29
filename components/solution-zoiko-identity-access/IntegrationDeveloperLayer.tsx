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
  lines: string[];
};

const cards: Card[] = [
  {
    title: "Identity sources",
    lines: ["Approved workforce, directory,", "customer or partner sources."],
  },
  {
    title: "Applications",
    lines: ["Zoiko and external resources", "receiving identity context."],
  },
  {
    title: "APIs / events",
    lines: ["Lifecycle, role or access events", "where supported."],
  },
  {
    title: "Federation",
    lines: ["Exact methods only from", "authoritative documentation."],
  },
  {
    title: "Provisioning",
    lines: ["Only if publicly supported."],
  },
  {
    title: "Audit",
    lines: ["Change and decision evidence at", "the level the product exposes."],
  },
];

const cardClass =
  "bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] flex flex-col items-start gap-[6px] p-[20px]";

export default function IntegrationDeveloperLayer() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[20px] w-full"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
              Integration and developer layer
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
              Only approved, documented integrations are shown. No protocol
              support is implied.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-4 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex flex-wrap gap-[12px] items-center pt-[12px]"
          >
            <a
              href="#explore-developer-platform"
              className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
            >
              Explore Developer Platform
            </a>
            <a
              href="#documentation"
              className="font-inter font-semibold text-[16px] text-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#247780]/10 transition-colors duration-200"
            >
              Documentation
            </a>
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.4px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[14.4px] w-full"
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[507.72px]">
              Integration and developer layer
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
              Only approved, documented integrations are shown. No protocol
              support is implied.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-2 gap-[16px] w-full pt-[5.6px]"
          >
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex flex-wrap gap-[12px] items-center pt-[17.6px]"
          >
            <a
              href="#explore-developer-platform"
              className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
            >
              Explore Developer Platform
            </a>
            <a
              href="#documentation"
              className="font-inter font-semibold text-[16px] text-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#247780]/10 transition-colors duration-200"
            >
              Documentation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
