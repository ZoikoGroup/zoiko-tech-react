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
  title: string;
  lines: string[];
};

const evidenceCards: EvidenceCard[] = [
  {
    title: "Case study",
    lines: [
      "Problem → workflow → authority",
      "model → systems → governance →",
      "measurable result → permission.",
    ],
  },
  {
    title: "Reference architecture",
    lines: [
      "Use case → identities → context →",
      "workflow → tools → approvals →",
      "evidence → operations.",
    ],
  },
  {
    title: "Evaluation report",
    lines: [
      "Scenarios → criteria → results →",
      "limitations → version and date →",
      "reviewer.",
    ],
  },
  {
    title: "Operational note",
    lines: [
      "Scope → issue → containment or",
      "change → result → current state.",
    ],
  },
];

export default function EvidenceYouCanAttribute() {
  return (
    <section
      className="w-full flex flex-col items-start justify-center px-4 md:px-[100px] border-t border-solid border-[#0d3632] py-16 md:pt-[83px] md:pb-[84px]"
      style={{
        backgroundImage: "linear-gradient(to bottom, #04201d, #020d0c)",
      }}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-start gap-[10px] px-0 md:px-[24px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#10b981] uppercase">
            Technology in practice
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[513.75px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-white">
            Evidence you can attribute.
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
            Only approved, attributable proof appears here. No stock
            testimonials, invented adoption figures or anonymous metrics.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full grid grid-cols-1 md:grid-cols-4 gap-[18px] pt-[28px]"
        >
          {evidenceCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[14px] border border-solid border-[#15503d] p-[24px] flex flex-col items-start gap-[6px]"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, #0a2f2a 0%, #06231f 100%)",
              }}
            >
              <h3 className="font-segoe font-bold text-[18px] leading-[28.8px] text-white">
                {card.title}
              </h3>
              <div className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa]">
                {card.lines.map((line, i) => (
                  <p key={i} className="mb-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="w-full pt-[18px]"
        >
          <div
            className="w-full rounded-[14px] border border-solid border-[#15503d] flex flex-col items-center justify-center gap-[16px] px-[24px] py-[52px] text-center"
            style={{
              backgroundImage:
                "linear-gradient(159deg, #0a2f2a 0%, #06231f 100%)",
            }}
          >
            <span className="inline-flex items-center justify-center rounded-[99px] border border-solid border-[#f5c451] px-[10px] py-[2px] font-segoe font-normal text-[12px] leading-[19.2px] text-[#f5c451]">
              Evidence pending
            </span>

            <h3 className="font-segoe font-bold text-[18px] leading-[28.8px] text-white max-w-[640px]">
              No approved public evidence is available for this workflow yet.
            </h3>

            <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa] max-w-[483.7px]">
              Explore what we can share today, or talk to us about evaluating
              your own use case.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[2px]">
              <a
                href="#contact-sales"
                className="inline-flex items-center justify-center rounded-[8px] px-[22px] min-h-[44px] font-segoe font-bold text-[15px] leading-[24px] text-[#0b2a20] hover:opacity-90 transition-opacity duration-200"
                style={{
                  backgroundImage:
                    "linear-gradient(133deg, #22d3a4 0%, #0fa585 100%)",
                }}
              >
                Contact Sales
              </a>
              <a
                href="#explore-ai-technology"
                className="inline-flex items-center justify-center rounded-[8px] px-[22px] min-h-[44px] font-segoe font-bold text-[15px] leading-[24px] text-[#10b981] border border-solid border-[#10b981] hover:bg-[#10b981]/10 transition-colors duration-200"
              >
                Explore AI &amp; Technology
              </a>
              <a
                href="#responsible-ai"
                className="inline-flex items-center justify-center rounded-[8px] px-[22px] min-h-[44px] font-segoe font-bold text-[15px] leading-[24px] text-[#10b981] border border-solid border-[#10b981] hover:bg-[#10b981]/10 transition-colors duration-200"
              >
                Responsible AI
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
