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

type PillTone = "sage" | "orange";

const pillToneClasses: Record<PillTone, string> = {
  sage: "border-[#10b981] text-[#8bf2c8]",
  orange: "border-[#f5c451] text-[#f5c451]",
};

type PlatformCard = {
  icon: string;
  pill: string;
  tone: PillTone;
  title: string;
  description: string[];
  linkText: string;
};

const cards: PlatformCard[] = [
  {
    icon: "A",
    pill: "Registry-approved scope",
    tone: "sage",
    title: "Zoiko Assure",
    description: [
      "Regulatory intelligence, compliance and audit",
      "automation.",
      "Maturity, operator and jurisdictions: per registry.",
    ],
    linkText: "Explore Zoiko Assure →",
  },
  {
    icon: "T",
    pill: "Registry-approved scope",
    tone: "sage",
    title: "ZoikoTax",
    description: [
      "Mapped delivery evidence for regulatory work, within",
      "approved coverage and filing scope.",
      "Maturity, operator and jurisdictions: per registry.",
    ],
    linkText: "Explore ZoikoTax →",
  },
  {
    icon: "AI",
    pill: "Approved domain use",
    tone: "sage",
    title: "Relevant domain AI",
    description: [
      "Evidence-linked, reviewable AI for regulated",
      "domains.",
    ],
    linkText: "Responsible AI →",
  },
  {
    icon: "✓",
    pill: "Authoritative route",
    tone: "sage",
    title: "Trust Center",
    description: [
      "Certifications, policies, security and privacy. We link",
      "to it rather than repeat claims.",
    ],
    linkText: "Open Trust Center →",
  },
  {
    icon: "</>",
    pill: "Where public-ready",
    tone: "orange",
    title: "Developer Platform",
    description: [
      "APIs, events and integration patterns. Technical",
      "evidence, not a compliance product.",
    ],
    linkText: "Explore Developer Platform →",
  },
];

const claimsTags = [
  "Certified / Attested",
  "Compliant, if legally verified",
  "Aligned / Designed to",
  "Roadmap / Target",
];

export default function PlatformEvidenceLayer() {
  return (
    <section
      className="w-full border-t border-solid border-[#0b5c54] px-4 md:px-[100px] py-[80px]"
      style={{
        backgroundImage: "linear-gradient(160deg, #04201d 0%, #020d0c 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#8bf2c8] w-full">
            PLATFORM EVIDENCE LAYER
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[533.76px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white">
            Platforms support the solution within their approved scope.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full md:max-w-[640.5px] pt-[3px]"
        >
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa]">
            Each card shows maturity, operator, coverage and role only as
            approved in the registry. If registry data is unavailable,
            claims are omitted.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[24px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border border-[#26dca2] border-solid rounded-[14px] flex flex-col items-start gap-[12px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #0a2f2a 0%, #06231f 100%)",
                }}
              >
                <div className="bg-[#0f3c37] border border-[#10b981] border-solid rounded-[10px] flex items-center justify-center size-[38px]">
                  <p className="font-segoe font-bold text-[13px] leading-[20.8px] text-[#8bf2c8] text-center">
                    {card.icon}
                  </p>
                </div>
                <div
                  className={`border border-solid rounded-[99px] flex items-start px-[10px] pt-[2px] pb-[3.19px] ${pillToneClasses[card.tone]}`}
                >
                  <p className="font-segoe font-normal text-[12px] leading-[19.2px] whitespace-nowrap">
                    {card.pill}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-[6px] w-full">
                  <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white w-full">
                    {card.title}
                  </h3>
                  <div className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa] w-full">
                    {card.description.map((line, i) => (
                      <p key={i} className="mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <a
                  href="#"
                  className="font-segoe font-bold text-[14px] leading-[22.4px] text-[#8bf2c8] hover:text-white transition-colors duration-200"
                >
                  {card.linkText}
                </a>
              </div>
            ))}

            {/* Claims hierarchy card */}
            <div
              className="border border-[#26dca2] border-solid rounded-[14px] flex flex-col items-start gap-[8px] p-[22px]"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, #0a2f2a 0%, #06231f 100%)",
              }}
            >
              <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white w-full">
                Claims hierarchy
              </h3>
              <div className="flex flex-wrap items-center gap-[8px] w-full py-[8px]">
                {claimsTags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-[#0b5c54] border border-[#26dca2] border-solid rounded-[8px] px-[14px] py-[8px]"
                  >
                    <p className="font-segoe font-normal text-[13px] leading-[20.8px] text-white whitespace-nowrap">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa] w-full">
                Distinct states, never interchangeable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
