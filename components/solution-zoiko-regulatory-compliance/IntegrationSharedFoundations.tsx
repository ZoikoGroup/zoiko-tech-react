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

type FoundationCard = {
  title: string;
  description: string[];
};

const cards: FoundationCard[] = [
  {
    title: "Identity & access",
    description: [
      "Reviewer, approver, control owner, auditor and",
      "service identities.",
    ],
  },
  {
    title: "APIs / events",
    description: [
      "Approved obligation, evidence and workflow",
      "integrations only.",
    ],
  },
  {
    title: "Data / provenance",
    description: [
      "Source, citation, effective date, transformation and",
      "evidence links.",
    ],
  },
  {
    title: "Workflow / approvals",
    description: ["Reviews, evidence requests and exceptions."],
  },
  {
    title: "Observability",
    description: ["Integration and workflow health and failure states."],
  },
  {
    title: "Governance / retention",
    description: [
      "Access, retention, export, integrity and audit history",
      "at approved scope.",
    ],
  },
];

export default function IntegrationSharedFoundations() {
  return (
    <section className="w-full bg-white border-t border-[#0b5c54] px-4 md:px-[100px] py-[79px] md:pb-[80px]">
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
            INTEGRATION &amp; SHARED FOUNDATIONS
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
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#0a2f2a]">
            The foundations regulated work depends on.
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
            We describe integrations only where technical and product
            evidence supports them. No regulator or government portal
            connection is implied.
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
                className="border border-[#26dca2] rounded-[14px] flex flex-col items-start gap-[6px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(159.6deg, rgb(10, 47, 42) 0%, rgb(6, 35, 31) 100%)",
                }}
              >
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
