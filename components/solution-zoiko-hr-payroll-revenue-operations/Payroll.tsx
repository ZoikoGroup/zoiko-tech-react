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

type Card = { title: string; body: React.ReactNode };

const cards: Card[] = [
  {
    title: "Cycle readiness",
    body: "Approved inputs shown as present, pending, conflicting or blocked.",
  },
  {
    title: "Change intake",
    body: "Changes and adjustments treated as controlled inputs.",
  },
  {
    title: "Validation",
    body: "Completeness and control checks, without invented statutory rules.",
  },
  {
    title: "Exception review",
    body: "Missing or conflicting items routed to accountable owners.",
  },
  {
    title: "Approval & release",
    body: "Authorized approval before release or payment handoff where supported.",
  },
  {
    title: "Reconciliation",
    body: "Expected versus actual, accepted versus exception.",
  },
];

const cardClass =
  "bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px]";

const cardTitleClass = "font-sora font-bold text-[16.8px] leading-[19.32px] text-white";

const cardBodyClass =
  "font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]";

type TableRow = {
  category: string;
  status: "Ready" | "Awaiting source" | "Blocked";
  owner: string;
  blocker: string;
};

const tableRows: TableRow[] = [
  {
    category: "Approved workforce changes",
    status: "Ready",
    owner: "HR Operations",
    blocker: "None",
  },
  {
    category: "Time inputs",
    status: "Awaiting source",
    owner: "Payroll Admin",
    blocker: "Unverified entries",
  },
  {
    category: "Adjustments",
    status: "Blocked",
    owner: "Payroll Approver",
    blocker: "Approval pending",
  },
];

const statusTag: Record<TableRow["status"], { bg: string; color: string }> = {
  Ready: { bg: "#e5f5e7", color: "#155724" },
  "Awaiting source": { bg: "#fff5d6", color: "#6b4e00" },
  Blocked: { bg: "#ffe9e0", color: "#7a2a08" },
};

function StatusBadge({ status }: { status: TableRow["status"] }) {
  const tag = statusTag[status];
  return (
    <span
      className="font-inter font-semibold text-[12.8px] leading-[20.48px] rounded-[6px] px-[9px] inline-block whitespace-nowrap"
      style={{ backgroundColor: tag.bg, color: tag.color }}
    >
      {status}
    </span>
  );
}

const columns = ["Input category", "Status", "Owner", "Blocker"];

export default function Payroll() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(139.56deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[16px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-white">
            Payroll operations: readiness, review
            <br />
            and release under control
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee]">
            Zoiko Payroll supports payroll operations, controls and multinational workflows. Country
            <br />
            coverage, statutory calculations, tax filing and payment execution remain evidence-gated.
          </p>

          <div className="grid grid-cols-4 gap-[16px] w-full">
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardBodyClass}>{card.body}</p>
              </div>
            ))}
          </div>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#a9c9cd] text-left px-[14px] py-[7px] caption-top">
                Payroll readiness checklist (specimen data)
              </caption>
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
                {tableRows.map((row) => (
                  <tr key={row.category}>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.category}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[11.5px] whitespace-nowrap">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.blocker}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
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
            Payroll operations: readiness, review
            <br />
            and release under control
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] w-full">
            Zoiko Payroll supports payroll operations, controls and multinational workflows. Country
            coverage, statutory calculations, tax filing and payment execution remain evidence-gated.
          </p>

          <div className="grid grid-cols-2 gap-[16px] w-full">
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardBodyClass}>{card.body}</p>
              </div>
            ))}
          </div>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#a9c9cd] text-left px-[14px] py-[7px] caption-top">
                Payroll readiness checklist (specimen data)
              </caption>
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
                {tableRows.map((row) => (
                  <tr key={row.category}>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.category}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[11.5px] whitespace-nowrap">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.blocker}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[rgba(0,0,0,0.35)] border-l-4 border-[#7fd0d9] rounded-tr-[10px] rounded-br-[10px] px-[16px] py-[17px] w-full max-w-[742.84px]">
            <p className="font-inter text-[14.7px] leading-[23.55px] text-[#dcecee]">
              <span className="font-bold">Global payroll claims rule.</span>{" "}
              <span className="font-normal">
                &ldquo;Multinational workflows&rdquo; does not establish universal country
                coverage, employer-of-record service, tax filing or payment availability.
              </span>
            </p>
          </div>

          <a
            href="#explore-zoiko-payroll"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Explore Zoiko Payroll
          </a>
        </motion.div>
      </div>
    </section>
  );
}
