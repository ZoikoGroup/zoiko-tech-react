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

const desktopCards = [
  {
    title: "Center / Responsible AI",
    lines: ["Security, privacy, compliance", "and AI-governance evidence."],
  },
  {
    title: "System Status",
    lines: [
      "Current service availability,",
      "always from the live status page.",
    ],
  },
  {
    title: "Zoiko Sema",
    lines: [
      "Meetings, messaging and calling;",
      "governed communications for",
      "messaging, meetings, calls and",
      "intelligent workflows.",
      "",
      "Shown only if registry-approved.",
    ],
  },
  {
    title: "Zoiko Local",
    lines: [
      "Communications and local-",
      "number infrastructure: local",
      "numbers, calling, video, routing",
      "and AI-powered customer",
      "communications.",
      "",
      "Approved market and regulatory",
      "scope only.",
    ],
  },
];

const tabletCards = [
  {
    title: "Zoiko Sema",
    lines: [
      "Meetings, messaging and calling;",
      "governed communications for",
      "messaging, meetings, calls and",
      "intelligent workflows.",
      "",
      "Shown only if registry-approved.",
    ],
  },
  {
    title: "Zoiko Local",
    lines: [
      "Communications and local-number",
      "infrastructure: local numbers, calling,",
      "video, routing and AI-powered customer",
      "communications.",
      "",
      "Approved market and regulatory scope",
      "only.",
    ],
  },
  {
    title: "Developer Platform",
    lines: ["APIs, SDKs, tooling and ecosystem", "services."],
  },
  {
    title: "Trust Center / Responsible AI",
    lines: ["Security, privacy, compliance and AI-", "governance evidence."],
  },
  {
    title: "System Status",
    lines: [
      "Current service availability, always from",
      "the live status page.",
    ],
  },
];

export default function PlatformEvidence() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[19.9px] pb-[12px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
            Platform evidence
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            This page is capability-first. Named platform cards appear only
            after platform-registry approval for this solution.
          </p>

          <div className="flex items-center gap-[40px] w-full">
            <div className="flex flex-wrap gap-[24px_24px] gap-y-[16px] items-start justify-center shrink-0 w-[590px]">
              {desktopCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col items-center gap-[15px] w-[283px] min-h-[233px]"
                >
                  <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full whitespace-nowrap">
                    {card.title}
                  </h3>
                  <div className="w-full h-px bg-[#d5e3e5]" />
                  <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                    {card.lines.map((line, idx) =>
                      line === "" ? (
                        <div key={idx} className="h-[8px]" />
                      ) : (
                        <p key={idx}>{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="shrink-0 w-[550px] h-[369px]">
              <img
                src="/solution-zoiko-communications-collaboration/platform-evidence-security-checklist-illustration.png"
                alt="3D illustration of security shield, checklist, fingerprint and document icons around a pedestal"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>

          <a
            href="#explore-platform"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
          >
            Explore platform
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[61.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[19px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
            Platform evidence
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            This page is capability-first. Named platform cards appear only
            after platform-registry approval for this solution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
            {tabletCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full">
                  {card.title}
                </h3>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                  {card.lines.map((line, idx) =>
                    line === "" ? (
                      <div key={idx} className="h-[6px]" />
                    ) : (
                      <p key={idx}>{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#e6f2f4] border-l-4 border-[#247780] rounded-tr-[10px] rounded-br-[10px] px-[16px] py-[12px] w-full">
            <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
              If registry approval is absent, the named platform card is
              omitted.
            </p>
          </div>

          <a
            href="#explore-platform"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
          >
            Explore platform
          </a>
        </motion.div>
      </div>
    </section>
  );
}
