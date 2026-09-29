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

type Platform = {
  name: string;
  paragraphs: React.ReactNode[];
  cta: string;
};

const platforms: Platform[] = [
  {
    name: "Zoiko HR",
    paragraphs: [
      <>
        Global human resources and
        <br />
        workforce operations.
      </>,
      <>
        Product modules need separate
        <br />
        approval.
      </>,
    ],
    cta: "Explore Zoiko HR",
  },
  {
    name: "Zoiko Payroll",
    paragraphs: [
      <>
        Payroll operations, controls and
        <br />
        multinational workflows; global
        <br />
        payroll operations and workforce
        <br />
        payments.
      </>,
      <>
        Within approved market and
        <br />
        capability scope.
      </>,
    ],
    cta: "Explore Zoiko Payroll",
  },
  {
    name: "Zoiko Billing",
    paragraphs: [
      <>
        Billing, invoicing and revenue
        <br />
        operations.
      </>,
      <>
        No tax, collections or accounting
        <br />
        implied.
      </>,
    ],
    cta: "Explore Zoiko Billing",
  },
  {
    name: "ZoikoSuite",
    paragraphs: [
      <>Governed business operations.</>,
      <>
        Shared recurring-process
        <br />
        evidence, where approved.
      </>,
    ],
    cta: "Explore ZoikoSuite",
  },
];

export default function PlatformEvidence() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[16px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416] max-w-[729.97px]">
            The platforms behind this solution
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[706.56px]">
            Product names are supporting evidence for the operating outcomes above, within approved
            scope, maturity, operator and market boundaries.
          </p>

          <div className="flex gap-[16px] items-stretch justify-center w-full">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex-1 min-w-0 bg-[#0f4248] rounded-[14px] flex flex-col items-center justify-between px-[20px] pt-[20px] pb-[15px]"
              >
                <div className="flex flex-col items-center gap-[6px] w-full">
                  <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#7fd0d9] w-full text-center">
                    {platform.name}
                  </h3>
                  {platform.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] text-center w-full"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <a
                  href={`#${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-inter font-semibold text-[16px] leading-[25.6px] text-[#14484e] bg-white border-2 border-[#14484e] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200 mt-[15px]"
                >
                  {platform.cta}
                </a>
              </div>
            ))}
          </div>
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
            The platforms behind this solution
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
            Product names are supporting evidence for the operating outcomes above, within
            approved scope, maturity, operator and market boundaries.
          </p>

          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] w-full">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] flex flex-col items-start gap-[6px] px-[20px] pt-[20px] pb-[32px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full">
                  {platform.name}
                </h3>
                {platform.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full"
                  >
                    {p}
                  </p>
                ))}
                <a
                  href={`#${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#247780]/10 transition-colors duration-200"
                >
                  {platform.cta}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
