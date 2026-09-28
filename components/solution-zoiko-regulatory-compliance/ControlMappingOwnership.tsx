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
  controlOwner: string;
  coverage: Badge;
  evidence: Badge;
  lastReview: string;
  exception: string;
  action: string;
};

const columns = [
  { key: "obligation", label: "Obligation", width: "125.61px" },
  { key: "controlOwner", label: "Control / owner", width: "242.78px" },
  { key: "coverage", label: "Coverage", width: "148.94px" },
  { key: "evidence", label: "Evidence", width: "123.72px" },
  { key: "lastReview", label: "Last review", width: "229.08px" },
  { key: "exception", label: "Exception", width: "122.55px" },
  { key: "action", label: "Action", width: "197.33px" },
];

const rows: Row[] = [
  {
    obligation: "OBL-014",
    controlOwner: "CTL-101 · Control Owner",
    coverage: { label: "Full", color: "#8bf2c8" },
    evidence: { label: "Current", color: "#8bf2c8" },
    lastReview: "Dated, reviewer named",
    exception: "None",
    action: "Review mapping",
  },
  {
    obligation: "OBL-022",
    controlOwner: "CTL-207 · Control Owner",
    coverage: { label: "Partial", color: "#f5c451" },
    evidence: { label: "Stale", color: "#f5c451" },
    lastReview: "Dated, reviewer named",
    exception: "Open",
    action: "Add evidence",
  },
  {
    obligation: "OBL-031",
    controlOwner: "No mapped control",
    coverage: { label: "None (gap)", color: "#ff7a7a" },
    evidence: { label: "Missing", color: "#ff7a7a" },
    lastReview: "Not reviewed",
    exception: "Gap",
    action: "Open remediation",
  },
];

export default function ControlMappingOwnership() {
  return (
    <section
      className="w-full border-t border-solid border-[#0b5c54] px-4 md:px-[100px] py-[60px] md:py-[79px]"
      style={{
        backgroundImage: "linear-gradient(to left, #00443b 0%, #020d0c 100%)",
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
            CONTROL MAPPING &amp; OWNERSHIP
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
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white">
            Every obligation connects to a control and an owner.
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
            Coverage uses Full, Partial, None or Needs review. It never uses &ldquo;compliant&rdquo; as
            shorthand.
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
          <div className="min-w-[720px] w-full flex flex-col items-start pb-[16px]">
            <div className="w-full px-[16px] py-[12px]">
              <p className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#87c7aa]">
                Obligation-to-control matrix (specimen data)
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
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-white whitespace-nowrap">
                    {row.obligation}
                  </p>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[1].width }}
                >
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa] whitespace-nowrap">
                    {row.controlOwner}
                  </p>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[2].width }}
                >
                  <div
                    className="border border-solid rounded-[99px] inline-flex items-start px-[10px] pt-px pb-[2.19px]"
                    style={{ borderColor: row.coverage.color }}
                  >
                    <p
                      className="font-segoe font-normal text-[12px] leading-[19.2px] whitespace-nowrap"
                      style={{ color: row.coverage.color }}
                    >
                      {row.coverage.label}
                    </p>
                  </div>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[3].width }}
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
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[4].width }}
                >
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa] whitespace-nowrap">
                    {row.lastReview}
                  </p>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[5].width }}
                >
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa] whitespace-nowrap">
                    {row.exception}
                  </p>
                </div>
                <div
                  className="border-t border-solid border-[#0f3c37] shrink-0 px-[16px] py-[12px]"
                  style={{ width: columns[6].width }}
                >
                  <p className="font-segoe font-bold text-[14px] leading-[22.4px] text-[#8bf2c8] whitespace-nowrap">
                    {row.action}
                  </p>
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
          className="w-full pt-[12px]"
        >
          <div className="border border-dashed border-[#10b981] rounded-[12px] w-full px-[20px] pt-[15.5px] pb-[15.89px]">
            <p className="font-segoe text-[14px] leading-[22.4px]">
              <span className="font-segoe font-bold text-[#22d3a4]">Control statuses:</span>
              <span className="font-segoe font-normal text-[#8fb5ac]">
                {" "}
                Designed · Implemented · Operating · Needs review · Exception · Gap / Not
                implemented.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
