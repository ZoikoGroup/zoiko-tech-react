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

const cardClass =
  "bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px] w-full";

type Card = {
  title: string;
  body: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "Platform availability",
    body: (
      <>
        Rendered from controlled product
        <br />
        records only.
      </>
    ),
  },
  {
    title: "Operator",
    body: (
      <>
        Exact legal and commercial
        <br />
        operator where relevant.
      </>
    ),
  },
  {
    title: "Regulatory support",
    body: (
      <>
        Approved wording and evidence.
        <br />
        No blanket &ldquo;global compliant&rdquo;
        <br />
        claim.
      </>
    ),
  },
  {
    title: "Currency & payments",
    body: (
      <>
        Only validated coverage is
        <br />
        published.
      </>
    ),
  },
  {
    title: "Data & privacy",
    body: (
      <>
        Jurisdiction considerations
        <br />
        through approved configuration.
      </>
    ),
  },
  {
    title: "Implementation dependency",
    body: (
      <>
        Partner, integration and
        <br />
        configuration needs surfaced
        <br />
        early.
      </>
    ),
  },
];

type StatusTag = {
  label: string;
  bg: string;
  color: string;
};

const statusTags: Record<string, StatusTag> = {
  Available: { label: "Available", bg: "#e5f5e7", color: "#155724" },
  RequiresReview: { label: "Requires review", bg: "#fff5d6", color: "#6b4e00" },
  NotPublished: { label: "Not currently published", bg: "#e6f2f4", color: "#14484e" },
};

type Row = {
  market: string;
  availability: keyof typeof statusTags;
  operator: string;
  nextStep: string;
};

const rows: Row[] = [
  { market: "Sample market A", availability: "Available", operator: "Per registry", nextStep: "Confirm scope" },
  { market: "Sample market B", availability: "RequiresReview", operator: "Per registry", nextStep: "Talk to sales" },
  { market: "Sample market C", availability: "NotPublished", operator: "—", nextStep: "Talk to sales" },
];

const columns = ["Market / entity", "Availability", "Operator", "Next step"];

function StatusBadge({ status }: { status: keyof typeof statusTags }) {
  const tag = statusTags[status];
  return (
    <span
      className="font-inter font-semibold text-[12.8px] leading-[20.48px] rounded-[6px] px-[9px] inline-block"
      style={{ backgroundColor: tag.bg, color: tag.color }}
    >
      {tag.label}
    </span>
  );
}

export default function MarketReadiness() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(139.64deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
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
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-white w-full">
            Market readiness comes from approved records, not assumptions
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[706.56px]">
            Availability, operator, regulatory, currency and localization details are shown only where
            controlled product records support them. If data is unavailable, the claim is omitted.
          </p>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-wrap gap-[16px] items-start w-[588px]">
              {cards.map((card) => (
                <div key={card.title} className={cardClass} style={{ width: "283px" }}>
                  <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                    {card.title}
                  </h3>
                  <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="shrink-0 w-[480px] h-[480px]">
              <img
                src="/solution-zoiko-hr-payroll-revenue-operations/market-readiness-documents-illustration.png"
                alt="Illustration of controlled product record documents with a verification checkmark and globe representing market readiness"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
            Market readiness comes from
            <br />
            approved records, not assumptions
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] w-full">
            Availability, operator, regulatory, currency and localization details are shown only where
            controlled product records support them. If data is unavailable, the claim is omitted.
          </p>

          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] w-full">
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#a9c9cd] text-left px-[14px] py-[7px] caption-top">
                Market readiness panel (specimen states)
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
                {rows.map((row) => (
                  <tr key={row.market}>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.market}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[11.5px] whitespace-nowrap">
                      <StatusBadge status={row.availability} />
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.operator}
                    </td>
                    <td className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] whitespace-nowrap">
                      {row.nextStep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href="#check-availability"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Check availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
