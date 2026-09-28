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
  icon: string;
  title: string;
  description: string[];
};

const cards: Card[] = [
  {
    icon: "R",
    title: "Responsible AI",
    description: [
      "Human oversight, evaluation, accountable",
      "deployment, use boundaries, evidence and change",
      "control.",
    ],
  },
  {
    icon: "S",
    title: "Security",
    description: [
      "Least privilege, identity, secure integration,",
      "credential isolation, threat prevention, incident",
      "handling.",
    ],
  },
  {
    icon: "P",
    title: "Privacy",
    description: [
      "Purpose limitation, data minimization, sensitive-data",
      "boundaries, retention, regional context.",
    ],
  },
  {
    icon: "C",
    title: "Compliance",
    description: [
      "Evidence, approvals and obligations, only where",
      "legally and product-wise supportable.",
    ],
  },
  {
    icon: "↻",
    title: "Reliability",
    description: [
      "Workflow state, retries, failure handling, service",
      "health, containment, recovery.",
    ],
  },
  {
    icon: "A",
    title: "Accessibility",
    description: ["Review and admin experiences designed to WCAG", "2.2 AA."],
  },
];

const claims = [
  "Certified / Attested",
  "Compliant, only where legally verified",
  "Aligned / Designed to",
  "Roadmap / Target",
];

export default function SecurityPrivacyResponsibleAi() {
  return (
    <section className="w-full bg-white border-t border-[#0d3632] py-[84px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[7px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#10b981] w-full">
            SECURITY, PRIVACY &amp; RESPONSIBLE AI
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[513.73px] pt-[3px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-[#06231f]">
            Intelligence is valuable only when it can be trusted.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full md:max-w-[640.5px] pt-[6px]"
        >
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#324b40]">
            Built for procurement, risk and security review. Each pillar names what is designed
            in, not what is assumed.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[31px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border border-[#15503d] border-solid rounded-[14px] flex flex-col items-start gap-[6px] p-[24px]"
                style={{
                  backgroundImage: "linear-gradient(160deg, #0a2f2a 0%, #062621 100%)",
                }}
              >
                <div className="bg-[#0f3c37] border border-[#10b981] border-solid rounded-[10px] flex items-center justify-center size-[40px]">
                  <span className="font-segoe font-bold text-[16px] leading-[25.6px] text-[#10b981]">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-segoe font-bold text-[18px] leading-[28.8px] text-white pt-[8px] w-full">
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
          className="w-full pt-[19px] flex flex-wrap items-center gap-[10px]"
        >
          <span className="font-segoe font-bold text-[14px] leading-[22.4px] text-white">
            Claims hierarchy:
          </span>
          {claims.map((claim, i) => (
            <React.Fragment key={claim}>
              {i > 0 && (
                <span className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#10b981]">
                  ›
                </span>
              )}
              <span className="bg-[#0d3632] border border-[#15503d] border-solid rounded-[8px] px-[14px] py-[7.5px] font-segoe font-normal text-[14px] leading-[22.4px] text-white whitespace-nowrap">
                {claim}
              </span>
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.3}
          className="w-full"
        >
          <p className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#87c7aa]">
            These states are not interchangeable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
