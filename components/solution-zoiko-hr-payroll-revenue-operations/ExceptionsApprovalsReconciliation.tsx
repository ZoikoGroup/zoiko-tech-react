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
  title: string;
  lines: string[];
};

const cards: Card[] = [
  {
    title: "Exception",
    lines: ["Type, source, scope, priority,", "owner, age and next action."],
  },
  {
    title: "Approval",
    lines: [
      "Requested action, evidence,",
      "approver role, expiry; approve,",
      "reject or escalate.",
    ],
  },
  {
    title: "Conflict",
    lines: ["Competing sources side by side", "with a resolution owner."],
  },
  {
    title: "Partial completion",
    lines: [
      "Completed and failed subsets",
      "stay visible. A partial cycle is",
      "never shown as “Success.”",
    ],
  },
  {
    title: "Reconciliation difference",
    lines: ["Expected versus actual, with", "review state."],
  },
  {
    title: "Override & closure",
    lines: [
      "Who changed what, when and",
      "why; closure records residual",
      "follow-up.",
    ],
  },
];

type Row = {
  domain: string;
  exception: string;
  sourcePeriod: string;
  owner: string;
  status: string;
  action: string;
  statusBg: string;
  statusText: string;
};

const rows: Row[] = [
  {
    domain: "HR",
    exception: "Effective date conflict",
    sourcePeriod: "HR source · Period 1",
    owner: "HR Operations",
    status: "In review",
    action: "Resolve",
    statusBg: "bg-[#fff5d6]",
    statusText: "text-[#6b4e00]",
  },
  {
    domain: "Payroll",
    exception: "Unapproved adjustment",
    sourcePeriod: "Payroll cycle · Period 1",
    owner: "Payroll Approver",
    status: "Approval pending",
    action: "Approve / Reject",
    statusBg: "bg-[#e6f2f4]",
    statusText: "text-[#14484e]",
  },
  {
    domain: "Billing",
    exception: "Missing account mapping",
    sourcePeriod: "Billing cycle · Period 1",
    owner: "Billing Ops",
    status: "Blocked",
    action: "Escalate",
    statusBg: "bg-[#ffe9e0]",
    statusText: "text-[#7a2a08]",
  },
  {
    domain: "Recurring",
    exception: "Checklist task overdue",
    sourcePeriod: "Close process",
    owner: "Operations Owner",
    status: "Assigned",
    action: "Assign",
    statusBg: "bg-[#e6f2f4]",
    statusText: "text-[#14484e]",
  },
];

export default function ExceptionsApprovalsReconciliation() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99.31px] lg:pb-[100px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[18px] pb-[12.01px]"
        >
          <div className="max-w-[729.97px] w-full">
            <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416]">
              Exceptions, approvals and
              <br />
              reconciliation stay visible until
              <br />
              resolved
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-[16px] w-full pt-[4.07px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col gap-[5.88px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] w-full overflow-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="text-left px-[14px] pt-[7px] pb-[8.47px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#4d6468]">
                Shared exception queue (specimen data)
              </caption>
              <thead>
                <tr>
                  {["Domain", "Exception", "Source / period", "Owner", "Status", "Action"].map(
                    (h) => (
                      <th
                        key={h}
                        className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.exception}>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.domain}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.exception}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.sourcePeriod}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] pt-[11.5px] pb-[9.58px]">
                      <span
                        className={`inline-flex items-start px-[9px] pb-[1.47px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] whitespace-nowrap ${row.statusBg} ${row.statusText}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.36px] pb-[61.43px] px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[15.3px] pb-[12.01px]"
        >
          <div className="max-w-[507.72px] w-full">
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
              Exceptions, approvals and
              <br />
              reconciliation stay visible until
              <br />
              resolved
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-[16px] w-full">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col gap-[5.88px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] w-full overflow-auto pt-[2.7px]">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="text-left px-[14px] pt-[7px] pb-[8.47px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#4d6468]">
                Shared exception queue (specimen data)
              </caption>
              <thead>
                <tr>
                  {["Domain", "Exception", "Source / period", "Owner", "Status", "Action"].map(
                    (h) => (
                      <th
                        key={h}
                        className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.exception}>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.domain}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.exception}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.sourcePeriod}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[12px]">
                      <span
                        className={`inline-flex items-start px-[9px] py-px rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] whitespace-nowrap ${row.statusBg} ${row.statusText}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href="#review-controls"
            className="inline-flex items-center min-h-[48px] px-[24px] rounded-[10px] bg-[#247780] border-2 border-[#247780] font-inter font-semibold text-[16px] leading-[25.6px] text-white hover:bg-[#1d626a] transition-colors duration-200"
          >
            Review controls
          </a>
        </motion.div>
      </div>
    </section>
  );
}
