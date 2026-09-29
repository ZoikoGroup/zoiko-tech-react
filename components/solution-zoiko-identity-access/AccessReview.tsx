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
    title: "Review decision",
    lines: ["Keep, change, revoke, request", "more evidence, or escalate."],
  },
  {
    title: "Exception",
    lines: ["Deviation with reason, owner,", "approver and expiry."],
  },
  {
    title: "Orphaned entitlement",
    lines: ["No valid identity, resource or", "owner. Routed to remediation."],
  },
  {
    title: "Conflicting authority",
    lines: ["Direct, group and delegated", "paths shown together."],
  },
  {
    title: "Evidence export",
    lines: ["Where permitted, preserving", "source, scope, time and", "reviewer."],
  },
  {
    title: "Audit timeline",
    lines: ["Identity, role, entitlement,", "delegation, review and revoke", "events."],
  },
];

const tableRows = [
  {
    identity: "Sample user A",
    resource: "Project workspace",
    entitlement: "Editor",
    grantSource: "Group",
    owner: "Resource owner",
    decision: "Keep",
    decisionBg: "#e5f5e7",
    decisionColor: "#155724",
  },
  {
    identity: "Sample integration D",
    resource: "Reporting API",
    entitlement: "Read",
    grantSource: "Direct",
    owner: "Service owner",
    decision: "More evidence",
    decisionBg: "#fff5d6",
    decisionColor: "#6b4e00",
  },
  {
    identity: "Sample partner C",
    resource: "Shared workspace",
    entitlement: "Viewer",
    grantSource: "Delegated",
    owner: "—",
    decision: "Revoke",
    decisionBg: "#ffe9e0",
    decisionColor: "#7a2a08",
  },
];

const tableHeaders = [
  "Identity",
  "Resource",
  "Entitlement",
  "Grant source",
  "Owner",
  "Decision",
];

export default function AccessReview() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:px-[130px] lg:py-[96px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[20px] w-full"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[522px]">
              Access review, evidence and exceptions
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
              Review is continuous. Each item shows its access paths so
              nobody has to infer them.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex items-center justify-between w-full gap-[16px]"
          >
            <div className="flex flex-wrap gap-[16px] items-start w-[582px]">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#247780] border border-[#247780] rounded-[14px] flex flex-col items-start gap-[6px] p-[20px] w-[283px]"
                >
                  <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                    {card.title}
                  </h3>
                  <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#e6f2f4]">
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
            <div className="shrink-0 w-[555px] h-[555px]">
              <img
                src="/solution-zoiko-identity-access/access-review-illustration.png"
                alt="Illustration of identity access review: user icons, magnifying glass over a document stack, database, keys and a timeline"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.25}
            className="border border-[#d5e3e5] rounded-[12px] overflow-auto w-full"
          >
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  {tableHeaders.map((h) => (
                    <th
                      key={h}
                      className="bg-[#247780] border-b border-[#d5e3e5] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white px-[14px] py-[9px]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.identity}>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.identity}
                    </td>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.resource}
                    </td>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.entitlement}
                    </td>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.grantSource}
                    </td>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.owner}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px]">
                      <span
                        className="inline-flex items-start rounded-[6px] px-[9px] font-inter font-semibold text-[12.8px] leading-[20.48px]"
                        style={{
                          backgroundColor: row.decisionBg,
                          color: row.decisionColor,
                        }}
                      >
                        {row.decision}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design ============ */}
      <div className="flex lg:hidden flex-col items-start px-[24px] py-[46px] sm:px-[38.4px] sm:pt-[60.65px] sm:pb-[61.43px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.4px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[14.4px] w-full"
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px]">
              Access review, evidence and exceptions
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
              Review is continuous. Each item shows its access paths so
              nobody has to infer them.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] flex flex-col items-start gap-[6px] p-[20px]"
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
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.25}
            className="border border-[#d5e3e5] rounded-[12px] overflow-auto w-full"
          >
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="text-left font-inter font-normal text-[12.8px] leading-[20.48px] text-[#0a1416] px-[14px] py-[7px] opacity-85">
                Access review (specimen data)
              </caption>
              <thead>
                <tr>
                  {tableHeaders.map((h) => (
                    <th
                      key={h}
                      className="bg-[#247780] border-b border-[#d5e3e5] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white px-[14px] py-[9px]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.identity}>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.identity}
                    </td>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.resource}
                    </td>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.entitlement}
                    </td>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.grantSource}
                    </td>
                    <td className="border-b border-[#d5e3e5] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] px-[14px] py-[10px]">
                      {row.owner}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px]">
                      <span
                        className="inline-flex items-start rounded-[6px] px-[9px] font-inter font-semibold text-[12.8px] leading-[20.48px]"
                        style={{
                          backgroundColor: row.decisionBg,
                          color: row.decisionColor,
                        }}
                      >
                        {row.decision}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.35}
          >
            <a
              href="#review-governance"
              className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
            >
              Review governance
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
