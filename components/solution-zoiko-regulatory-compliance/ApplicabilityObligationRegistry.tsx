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

type Badge = {
  label: string;
  color: string;
};

type Row = {
  obligation: string;
  source: string;
  applicability: Badge;
  owner: string;
  due: string;
  evidence: Badge;
};

const columns = [
  { key: "obligation", label: "Obligation", width: "294.67px" },
  { key: "source", label: "Source", width: "186.56px" },
  { key: "applicability", label: "Applicability", width: "215px" },
  { key: "owner", label: "Owner", width: "165.7px" },
  { key: "due", label: "Due / review", width: "174.52px" },
  { key: "evidence", label: "Evidence", width: "153.55px" },
];

const rows: Row[] = [
  {
    obligation: "OBL-014 · Example reporting duty",
    source: "Regulator notice, cited",
    applicability: { label: "✓ Applicable", color: "#00b76c" },
    owner: "Compliance Owner",
    due: "Review due",
    evidence: { label: "Current", color: "#00b76c" },
  },
  {
    obligation: "OBL-022 · Example data-retention rule",
    source: "Regulation, cited",
    applicability: { label: "◐ Partially applicable", color: "#f5c451" },
    owner: "Control Owner",
    due: "Effective, future date",
    evidence: { label: "Review required", color: "#f5c451" },
  },
  {
    obligation: "OBL-031 · Example market rule",
    source: "Guidance update",
    applicability: { label: "? Unknown / Needs review", color: "#3d594c" },
    owner: "Qualified Reviewer",
    due: "Not set",
    evidence: { label: "Missing", color: "#ff7a7a" },
  },
  {
    obligation: "OBL-040 · Example licensing rule",
    source: "Standard",
    applicability: { label: "○ Not applicable", color: "#3d594c" },
    owner: "Compliance Owner",
    due: "Periodic",
    evidence: { label: "Unsupported", color: "#3d594c" },
  },
];

type Card = {
  title: string;
  lines: string[];
};

const cards: Card[] = [
  {
    title: "Entity & jurisdiction",
    lines: ["Which entity is affected and where", "the obligation applies."],
  },
  {
    title: "Business scope",
    lines: ["Activity, product, service or process", "in scope."],
  },
  {
    title: "Effective period",
    lines: ["Start, sunset and review date."],
  },
  {
    title: "Reviewer & rationale",
    lines: ["Qualified role, decision and source-", "backed explanation."],
  },
];

export default function ApplicabilityObligationRegistry() {
  return (
    <section className="w-full bg-white border-t border-solid border-[#0b5c54] px-4 md:px-[100px] py-[60px] md:py-[79px]">
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
            APPLICABILITY &amp; OBLIGATION REGISTRY
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
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#0b2a20]">
            Applicability is a decision, not an automatic conclusion.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#375145]">
            Each obligation shows its source, scope, owner, dates, control coverage and evidence
            state.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[24px] border border-[#26dca2] border-solid rounded-[12px] overflow-x-auto"
        >
          <div className="min-w-[720px] w-full flex flex-col items-start">
            <div className="w-full px-[16px] py-[12px]">
              <p className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#3d594c]">
                Obligation registry (specimen data)
              </p>
            </div>
            <div className="w-full flex items-start">
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="bg-[#0b5c54] border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: col.width }}
                >
                  <p className="font-segoe font-bold text-[13px] leading-[20.8px] text-[#8bf2c8] whitespace-nowrap">
                    {col.label}
                  </p>
                </div>
              ))}
            </div>
            {rows.map((row) => (
              <div key={row.obligation} className="w-full flex items-start">
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[0].width }}
                >
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-black whitespace-nowrap">
                    {row.obligation}
                  </p>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[1].width }}
                >
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#3d594c] whitespace-nowrap">
                    {row.source}
                  </p>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[2].width }}
                >
                  <div
                    className="border border-solid rounded-[99px] inline-flex items-start px-[10px] pt-px pb-[2.19px]"
                    style={{ borderColor: row.applicability.color }}
                  >
                    <p
                      className="font-segoe font-normal text-[12px] leading-[19.2px] whitespace-nowrap"
                      style={{ color: row.applicability.color }}
                    >
                      {row.applicability.label}
                    </p>
                  </div>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[3].width }}
                >
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#3d594c] whitespace-nowrap">
                    {row.owner}
                  </p>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[4].width }}
                >
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#3d594c] whitespace-nowrap">
                    {row.due}
                  </p>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[5].width }}
                >
                  <div
                    className="border border-solid rounded-[99px] inline-flex items-start px-[10px] pt-px pb-[2.19px]"
                    style={{ borderColor: row.evidence.color }}
                  >
                    <p
                      className="font-segoe font-normal text-[12px] leading-[19.2px] whitespace-nowrap"
                      style={{ color: row.evidence.color }}
                    >
                      {row.evidence.label}
                    </p>
                  </div>
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
          className="w-full flex flex-col md:flex-row gap-[18px] items-stretch pt-[12px]"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#15503d] border border-[#26dca2] border-solid rounded-[14px] flex flex-1 flex-col gap-[6px] items-start p-[22px]"
            >
              <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white w-full">
                {card.title}
              </h3>
              <div className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa] w-full">
                {card.lines.map((line, i) => (
                  <p key={i} className="mb-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
