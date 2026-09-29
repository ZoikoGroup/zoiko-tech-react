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
    title: "Billing-cycle readiness",
    lines: ["Source data, configuration and", "approvals visible before action."],
  },
  {
    title: "Invoice preparation",
    lines: ["Preparation and validation as a", "generic operating concept."],
  },
  {
    title: "Exceptions",
    lines: ["Missing account, usage, service", "or approval issues stay visible."],
  },
  {
    title: "Approval & release",
    lines: ["Authorized review before issue", "where the product supports it."],
  },
  {
    title: "Downstream handoff",
    lines: ["Only approved delivery and", "system connections are shown."],
  },
  {
    title: "Reconciliation",
    lines: ["Expected cycle state compared", "to completed outcomes."],
  },
];

type Row = {
  issue: string;
  source: string;
  scope: string;
  owner: string;
  state: string;
  stateBg: string;
  stateText: string;
};

const rows: Row[] = [
  {
    issue: "Missing account reference",
    source: "Account data",
    scope: "Sample account A",
    owner: "Billing Ops",
    state: "Blocked",
    stateBg: "bg-[#ffe9e0]",
    stateText: "text-[#7a2a08]",
  },
  {
    issue: "Release awaiting review",
    source: "Billing cycle",
    scope: "Sample group B",
    owner: "Finance Reviewer",
    state: "Approval pending",
    stateBg: "bg-[#fff5d6]",
    stateText: "text-[#6b4e00]",
  },
];

export default function BillingOperations() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99.16px] lg:pb-[100px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[12.8px] pb-[12px]"
        >
          <div className="max-w-[729.97px] w-full">
            <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416]">
              Billing and revenue operations: clear
              <br />
              cycles, visible exceptions
            </h2>
          </div>

          <div className="max-w-[706.56px] w-full pt-[8.075px]">
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
              Zoiko Billing supports billing, invoicing and revenue operations. This page shows controlled
              <br />
              billing operations without assuming a specific pricing, tax, collection or accounting engine.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[16px] w-full pt-[3.19px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col gap-[5.89px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.lines[0]}
                  <br />
                  {card.lines[1]}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] w-full overflow-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="text-left px-[14px] pt-[7px] pb-[8.47px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#4d6468]">
                Billing exception queue (specimen data)
              </caption>
              <thead>
                <tr>
                  {["Issue", "Source", "Scope", "Owner", "State"].map((h) => (
                    <th
                      key={h}
                      className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.issue}>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.issue}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.source}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.scope}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] pt-[11.5px] pb-[9.58px]">
                      <span
                        className={`inline-flex items-start px-[9px] pb-[1.47px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] whitespace-nowrap ${row.stateBg} ${row.stateText}`}
                      >
                        {row.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.43px] px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[12.8px] pb-[12px]"
        >
          <div className="max-w-[507.72px] w-full pb-[0.63px]">
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
              Billing and revenue operations: clear
              <br />
              cycles, visible exceptions
            </h2>
          </div>

          <div className="w-full pt-[1.36px]">
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
              Zoiko Billing supports billing, invoicing and revenue operations. This page shows controlled
              billing operations without assuming a specific pricing, tax, collection or accounting engine.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-[16px] w-full pt-[3.2px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col gap-[5.88px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.lines[0]}
                  <br />
                  {card.lines[1]}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] w-full overflow-auto pt-[5.2px]">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="text-left px-[14px] pt-[7px] pb-[8.47px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#4d6468]">
                Billing exception queue (specimen data)
              </caption>
              <thead>
                <tr>
                  {["Issue", "Source", "Scope", "Owner", "State"].map((h) => (
                    <th
                      key={h}
                      className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.issue}>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[9.5px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                      {row.issue}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[9.5px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                      {row.source}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[9.5px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                      {row.scope}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[9.5px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[12px]">
                      <span
                        className={`inline-flex items-start px-[9px] py-px rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] ${row.stateBg} ${row.stateText}`}
                      >
                        {row.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="max-w-[565.11px] w-full pt-[4.2px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#4d6468]">
            No tax, payment, collection, accounting or revenue-recognition controls are shown.
          </p>

          <a
            href="#explore-zoiko-billing"
            className="inline-flex items-center min-h-[48px] px-[24px] rounded-[10px] bg-[#247780] border-2 border-[#247780] font-inter font-semibold text-[16px] leading-[25.6px] text-white hover:bg-[#1d626a] transition-colors duration-200"
          >
            Explore Zoiko Billing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
