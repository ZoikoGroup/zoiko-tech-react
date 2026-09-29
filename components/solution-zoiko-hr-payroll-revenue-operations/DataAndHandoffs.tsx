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

type StateTag = {
  label: string;
  bg: string;
  color: string;
};

const stateTags: Record<string, StateTag> = {
  Authoritative: { label: "Authoritative", bg: "#e5f5e7", color: "#155724" },
  Pending: { label: "Pending", bg: "#fff5d6", color: "#6b4e00" },
  Conflicting: { label: "Conflicting", bg: "#ffe9e0", color: "#7a2a08" },
  Unknown: { label: "Unknown", bg: "#e6f2f4", color: "#14484e" },
  Derived: { label: "Derived", bg: "#e6f2f4", color: "#14484e" },
};

type Row = {
  record: string;
  source: string;
  owner: string;
  effective: string;
  state: keyof typeof stateTags;
  downstream: string;
};

const rows: Row[] = [
  {
    record: "Worker record",
    source: "HR system",
    owner: "HR Operations",
    effective: "Specimen date",
    state: "Authoritative",
    downstream: "Payroll handoff",
  },
  {
    record: "Time input",
    source: "Workforce input",
    owner: "Payroll Admin",
    effective: "Current period",
    state: "Pending",
    downstream: "Payroll cycle",
  },
  {
    record: "Account mapping",
    source: "Billing source",
    owner: "Billing Ops",
    effective: "Current period",
    state: "Conflicting",
    downstream: "Billing cycle",
  },
  {
    record: "Cross-system ID",
    source: "Mapping table",
    owner: "Operations Owner",
    effective: "—",
    state: "Unknown",
    downstream: "Exception queue",
  },
  {
    record: "Derived total",
    source: "Calculated",
    owner: "Finance Reviewer",
    effective: "Current period",
    state: "Derived",
    downstream: "Reconciliation",
  },
];

const columns = ["Record", "Source", "Owner", "Effective", "State", "Downstream use"];

function StateBadge({ state }: { state: keyof typeof stateTags }) {
  const tag = stateTags[state];
  return (
    <span
      className="font-inter font-semibold text-[12.8px] leading-[20.48px] rounded-[6px] px-[9px] inline-block"
      style={{ backgroundColor: tag.bg, color: tag.color }}
    >
      {tag.label}
    </span>
  );
}

export default function DataAndHandoffs() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99px] lg:pb-[113px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(134.98deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[17px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-white">
            Know which record is authoritative
            <br />
            before anything moves
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee]">
            Every material record shows its source, owner, period, verification state and downstream
            <br />
            use. Conflicts are shown, never silently resolved.
          </p>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white text-left bg-[rgba(0,0,0,0.35)] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[9px] whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.record}>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.record}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.source}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.effective}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[11.5px] whitespace-nowrap">
                      <StateBadge state={row.state} />
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.downstream}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#a9c9cd] max-w-[565px]">
            Specimen data for illustration only. Cross-product relationships appear only where approved;
            ZoikoSuite is described as governed business operations and does not replace every
            specialist system.
          </p>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[74.23px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.05deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
            Know which record is authoritative
            <br />
            before anything moves
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] w-full">
            Every material record shows its source, owner, period, verification state and downstream
            use. Conflicts are shown, never silently resolved.
          </p>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white text-left bg-[rgba(0,0,0,0.35)] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[9px] whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.record}>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.record}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.source}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.effective}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[11.5px] whitespace-nowrap">
                      <StateBadge state={row.state} />
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.downstream}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#a9c9cd] max-w-[565px]">
            Specimen data for illustration only. Cross-product relationships appear only where approved;
            ZoikoSuite is described as governed business operations and does not replace every
            specialist system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
