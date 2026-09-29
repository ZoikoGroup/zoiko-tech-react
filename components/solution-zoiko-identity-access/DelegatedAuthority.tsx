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

const cards = [
  {
    title: "Delegator & delegate",
    lines: ["Who grants authority and who", "receives it."],
  },
  {
    title: "Purpose & scope",
    lines: ["Why it is needed, and the exact", "resources and actions covered."],
  },
  {
    title: "Duration",
    lines: ["Start, expiry and renewal rules."],
  },
  {
    title: "Approval & constraints",
    lines: ["Required approver, environment,", "action class or data limits."],
  },
  {
    title: "Revocation",
    lines: ["Immediate revoke or expiry,", "removing downstream authority."],
  },
  {
    title: "Evidence",
    lines: ["Creation, approval, use, change", "and revocation history."],
  },
];

const states = [
  { title: "Draft", sub: "Proposed" },
  { title: "Approval required", sub: "Waiting" },
  { title: "Active", sub: "Within scope" },
  { title: "Expiring", sub: "Renewal review" },
  { title: "Suspended", sub: "Disabled" },
  { title: "Revoked", sub: "Ended early" },
  { title: "Expired", sub: "Ended automatically" },
];

const tableRows = [
  {
    delegator: "Sample lead",
    delegate: "Sample deputy",
    scope: "Approve requests, one team",
    duration: "Specimen dates",
    state: "Active",
    stateBg: "#e5f5e7",
    stateText: "#155724",
  },
  {
    delegator: "Sample org X",
    delegate: "Sample service",
    scope: "Read reports",
    duration: "Ended",
    state: "Revoked",
    stateBg: "#e6f2f4",
    stateText: "#14484e",
  },
];

const cardClass =
  "bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col gap-[6px]";
const cardTitleClass =
  "font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]";
const cardBodyClass =
  "font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]";

export default function DelegatedAuthority() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:px-[130px] lg:py-[96px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px] pb-[12px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
              Delegated authority is its own object
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px] mt-[12px]">
              Authority granted by one identity to another, for a defined
              purpose, scope and duration.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-4 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardBodyClass}>
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex flex-wrap gap-[10px] w-full"
          >
            {states.map((s) => (
              <div
                key={s.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[10px] px-[16px] py-[10px] flex-1 min-w-[130px]"
              >
                <p className="font-inter font-bold text-[14.4px] leading-[23px] text-[#4d6468]">
                  {s.title}
                </p>
                <p className="font-inter font-normal text-[14.4px] leading-[23px] text-[#4d6468]">
                  {s.sub}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.2}
            className="border border-[#d5e3e5] rounded-[12px] overflow-auto w-full"
          >
            <table className="min-w-[560px] w-full border-collapse">
              <thead>
                <tr className="bg-[#247780]">
                  <th className="w-[198.58px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Delegator
                  </th>
                  <th className="w-[220.91px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Delegate
                  </th>
                  <th className="w-[367.38px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Scope
                  </th>
                  <th className="w-[228.7px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Duration
                  </th>
                  <th className="w-[162.44px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    State
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.delegator}>
                    <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                      {row.delegator}
                    </td>
                    <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                      {row.delegate}
                    </td>
                    <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                      {row.scope}
                    </td>
                    <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                      {row.duration}
                    </td>
                    <td className="px-[14px] py-[10px] border-b border-[#d5e3e5]">
                      <span
                        className="inline-flex items-start px-[9px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px]"
                        style={{ backgroundColor: row.stateBg, color: row.stateText }}
                      >
                        {row.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.4px] pb-[12px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start"
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[507px]">
              Delegated authority is its own object
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px] mt-[10px]">
              Authority granted by one identity to another, for a defined
              purpose, scope and duration.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardBodyClass}>
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex flex-wrap gap-[10px] w-full"
          >
            {states.map((s) => (
              <div
                key={s.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[10px] px-[16px] py-[10px] flex-1 min-w-[130px]"
              >
                <p className="font-inter font-bold text-[14.4px] leading-[23px] text-[#4d6468]">
                  {s.title}
                </p>
                <p className="font-inter font-normal text-[14.4px] leading-[23px] text-[#4d6468]">
                  {s.sub}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.2}
            className="border border-[#d5e3e5] rounded-[12px] overflow-auto w-full"
          >
            <table className="min-w-[560px] w-full border-collapse">
              <caption className="text-left px-[14px] py-[7px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#0a1416] opacity-85">
                Delegation detail (specimen data)
              </caption>
              <thead>
                <tr className="bg-[#247780]">
                  <th className="w-[118.28px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Delegator
                  </th>
                  <th className="w-[129.45px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Delegate
                  </th>
                  <th className="w-[207.95px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Scope
                  </th>
                  <th className="w-[134.36px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Duration
                  </th>
                  <th className="w-[99.17px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    State
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.delegator}>
                    <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                      {row.delegator}
                    </td>
                    <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                      {row.delegate}
                    </td>
                    <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                      {row.scope}
                    </td>
                    <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                      {row.duration}
                    </td>
                    <td className="px-[14px] py-[10px] border-b border-[#d5e3e5]">
                      <span
                        className="inline-flex items-start px-[9px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px]"
                        style={{ backgroundColor: row.stateBg, color: row.stateText }}
                      >
                        {row.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.25}
            href="#explore-delegation"
            className="bg-[#247780] border-2 border-[#247780] rounded-[10px] min-h-[48px] px-[24px] py-[12px] flex items-center font-inter font-semibold text-[16px] text-white hover:bg-[#1c5c62] transition-colors duration-200"
          >
            Explore delegation
          </motion.a>
        </div>
      </div>
    </section>
  );
}
