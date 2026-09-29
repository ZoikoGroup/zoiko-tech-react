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
    title: "Workforce records",
    body: "Trusted worker and organizational context as an input to recurring operations.",
  },
  {
    title: "Lifecycle changes",
    body: "Join, change and leave shown as business events that explain handoffs.",
  },
  {
    title: "Policy context",
    body: "Department, role, manager, market and approved policy shape workflows.",
  },
  {
    title: "Approvals & exceptions",
    body: "Explicit owners and states for material people-process changes.",
  },
  {
    title: "Payroll handoff",
    body: "Approved changes flow to payroll only where integration is validated.",
  },
  {
    title: "Evidence",
    body: "Administrative changes and approvals stay reviewable where supported.",
  },
];

const cardClass =
  "bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col gap-[6px]";

const cardTitleClass =
  "font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]";

const cardBodyClass =
  "font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]";

type TableRow = {
  change: string;
  effective: string;
  owner: string;
  approval: "Pending" | "Approved";
  downstream: string;
};

const tableRows: TableRow[] = [
  {
    change: "Role change",
    effective: "Specimen date",
    owner: "HR Operations",
    approval: "Pending",
    downstream: "Payroll input",
  },
  {
    change: "Location change",
    effective: "Specimen date",
    owner: "HR Admin",
    approval: "Approved",
    downstream: "Market review",
  },
];

const approvalTag: Record<TableRow["approval"], { bg: string; color: string }> = {
  Pending: { bg: "#fff5d6", color: "#6b4e00" },
  Approved: { bg: "#e5f5e7", color: "#155724" },
};

function ApprovalBadge({ approval }: { approval: TableRow["approval"] }) {
  const tag = approvalTag[approval];
  return (
    <span
      className="font-inter font-semibold text-[12.8px] leading-[20.48px] rounded-[6px] px-[9px] inline-block"
      style={{ backgroundColor: tag.bg, color: tag.color }}
    >
      {approval}
    </span>
  );
}

export default function Hr() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[16px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416] w-full">
            HR operations: a trusted people context for every downstream cycle
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
            Zoiko HR supports global human resources and workforce operations. This page stays at the
            <br />
            operating-domain level.
          </p>

          <div className="flex items-center justify-between w-full gap-[16px]">
            <div className="flex flex-wrap gap-[16px] w-[582px] shrink-0">
              {cards.map((card) => (
                <div key={card.title} className={`${cardClass} w-[283px]`}>
                  <h3 className={cardTitleClass}>{card.title}</h3>
                  <p className={cardBodyClass}>{card.body}</p>
                </div>
              ))}
            </div>

            <div className="w-[571px] h-[381px] shrink-0">
              <img
                src="/solution-zoiko-hr-payroll-revenue-operations/hr-operations-team-photo.png"
                alt="HR operations team reviewing worker records and approvals together"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
            HR operations: a trusted people
            <br />
            context for every downstream cycle
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
            Zoiko HR supports global human resources and workforce operations. This page stays at
            the operating-domain level.
          </p>

          <div className="grid grid-cols-2 gap-[16px] w-full">
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardBodyClass}>{card.body}</p>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] w-full overflow-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#4d6468] text-left px-[14px] py-[7px] caption-top">
                HR change queue (specimen data)
              </caption>
              <thead>
                <tr>
                  {["Change", "Effective date", "Owner", "Approval", "Downstream impact"].map(
                    (col) => (
                      <th
                        key={col}
                        className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white text-left bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9px] whitespace-nowrap"
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.change}>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5] px-[14px] py-[10px] whitespace-nowrap">
                      {row.change}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5] px-[14px] py-[10px] whitespace-nowrap">
                      {row.effective}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5] px-[14px] py-[10px] whitespace-nowrap">
                      {row.owner}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[11.5px] whitespace-nowrap">
                      <ApprovalBadge approval={row.approval} />
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5] px-[14px] py-[10px] whitespace-nowrap">
                      {row.downstream}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href="#explore-zoiko-hr"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
          >
            Explore Zoiko HR
          </a>
        </motion.div>
      </div>
    </section>
  );
}
