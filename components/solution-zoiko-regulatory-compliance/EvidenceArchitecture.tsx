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

type EvidenceCard = {
  badge: string;
  badgeBorder: string;
  badgeText: string;
  title: string;
  description: string[];
};

const cards: EvidenceCard[] = [
  {
    badge: "Direct",
    badgeBorder: "border-[#10b981]",
    badgeText: "text-[#8bf2c8]",
    title: "Primary source evidence",
    description: [
      "Exact legal or regulatory text with canonical",
      "metadata.",
    ],
  },
  {
    badge: "Structured",
    badgeBorder: "border-[#10b981]",
    badgeText: "text-[#8bf2c8]",
    title: "Structured source fact",
    description: [
      "Normalized jurisdiction, date, citation and",
      "requirement field with a source reference.",
    ],
  },
  {
    badge: "Direct",
    badgeBorder: "border-[#10b981]",
    badgeText: "text-[#8bf2c8]",
    title: "Control evidence",
    description: [
      "Configuration, approval, policy, log, report or system",
      "state where permitted.",
    ],
  },
  {
    badge: "Direct",
    badgeBorder: "border-[#10b981]",
    badgeText: "text-[#8bf2c8]",
    title: "Operational evidence",
    description: [
      "Workflow completion, acknowledgement, review",
      "record or exception resolution.",
    ],
  },
  {
    badge: "Direct",
    badgeBorder: "border-[#10b981]",
    badgeText: "text-[#8bf2c8]",
    title: "Assessment evidence",
    description: [
      "Test result, audit note, independent review or",
      "attestation.",
    ],
  },
  {
    badge: "Derived / inferred",
    badgeBorder: "border-[#f5c451]",
    badgeText: "text-[#f5c451]",
    title: "AI analysis",
    description: [
      "Labeled as inferred, linked to supporting evidence,",
      "never authoritative by itself.",
    ],
  },
];

const freshnessStates = ["Current", "Review due", "Stale", "Superseded"];

export default function EvidenceArchitecture() {
  return (
    <section className="w-full bg-white border-t border-[#0b5c54] py-[79px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#00bd80] w-full">
            EVIDENCE ARCHITECTURE
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[533.75px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#06231f]">
            Evidence is typed, dated and traceable to its source.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#354f43]">
            Not every artifact carries equal authority, so each evidence card
            states what it is and how well it is supported.
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
                className="border border-[#26dca2] border-solid rounded-[14px] flex flex-col items-start gap-[6px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, rgb(10, 47, 42) 0%, rgb(6, 35, 31) 100%)",
                }}
              >
                <div
                  className={`border ${card.badgeBorder} border-solid rounded-[99px] flex items-start px-[10px] pt-[2px] pb-[3.19px]`}
                >
                  <p
                    className={`font-segoe font-normal text-[12px] leading-[19.2px] ${card.badgeText} whitespace-nowrap`}
                  >
                    {card.badge}
                  </p>
                </div>
                <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white pt-[4px] w-full">
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
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="w-full flex flex-wrap items-center gap-[10px] pt-[12px] pb-[16px]"
        >
          <p className="font-segoe font-bold text-[14px] leading-[22.4px] text-white whitespace-nowrap">
            Freshness:
          </p>
          {freshnessStates.map((state) => (
            <div
              key={state}
              className="bg-[#0b5c54] border border-[#26dca2] border-solid rounded-[8px] flex items-start px-[14px] pt-[7.5px] pb-[7.89px]"
            >
              <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-white whitespace-nowrap">
                {state}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.3}
          className="w-full border border-dashed border-[#10b981] rounded-[12px] px-[20px] pt-[15.5px] pb-[15.89px]"
        >
          <p className="font-segoe text-[14px] leading-[22.4px]">
            <span className="font-bold text-[#00bd80]">
              Unknown-state rule:
            </span>{" "}
            <span className="font-normal text-[#37514b]">
              stale, partial, unsupported and unknown states stay visible.
              None becomes &ldquo;clear&rdquo; because the system lacks
              evidence.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
