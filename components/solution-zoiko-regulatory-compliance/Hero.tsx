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

type ChainRow = {
  label: string;
  status: string;
  statusColor: string;
  borderColor: string;
};

const chainRows: ChainRow[] = [
  {
    label: "Source",
    status: "✓ Published",
    statusColor: "#8bf2c8",
    borderColor: "#8bf2c8",
  },
  {
    label: "Applicability",
    status: "◐ Under review",
    statusColor: "#f5c451",
    borderColor: "#f5c451",
  },
  {
    label: "Obligation",
    status: "✓ Applicable",
    statusColor: "#8bf2c8",
    borderColor: "#8bf2c8",
  },
  {
    label: "Control",
    status: "? Unknown coverage",
    statusColor: "#87c7aa",
    borderColor: "#87c7aa",
  },
  {
    label: "Evidence",
    status: "! Evidence stale",
    statusColor: "#ff7a7a",
    borderColor: "#ff7a7a",
  },
  {
    label: "Review / workflow",
    status: "○ Exception open",
    statusColor: "#87c7aa",
    borderColor: "#87c7aa",
  },
];

export default function Hero() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-4 md:px-[100px]"
      style={{
        backgroundImage: "linear-gradient(to left, #11443e, #02181a)",
      }}
    >
      <div className="w-full max-w-[1240px] px-0 md:px-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-[44px] items-center py-16 md:py-[40px] md:pb-[80px]">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[9.5px] min-w-0 w-full"
          >
            <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#8bf2c8] uppercase">
              Regulatory &amp; Compliance
            </p>

            <h1 className="font-segoe font-bold text-[36px] md:text-[52px] leading-[42px] md:leading-[58.24px] text-white pt-2">
              Turn regulatory obligations into work that can be reviewed,
              evidenced and operated.
            </h1>

            <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa] max-w-[533.76px] pt-1">
              Zoiko Tech connects regulatory intelligence, applicability,
              obligations, controls, evidence and regulated workflows so
              organizations can understand what applies, prove how it is
              controlled, and preserve accountable review across changing
              jurisdictions.
            </p>

            <div className="flex flex-wrap items-center gap-[14px] pt-[18px] w-full">
              <a
                href="#discuss-architecture"
                className="font-segoe font-bold text-[15px] leading-[24px] text-[#0b2a20] rounded-[8px] px-[22px] pt-[8.5px] pb-[9.5px] min-h-[44px] flex items-center justify-center text-center hover:opacity-90 transition-opacity duration-200"
                style={{
                  backgroundImage:
                    "linear-gradient(133.05deg, rgb(34, 211, 164) 0%, rgb(15, 165, 133) 100%)",
                }}
              >
                Discuss your compliance architecture
              </a>
              <a
                href="#regulatory-technology"
                className="font-segoe font-bold text-[15px] leading-[24px] text-[#8bf2c8] border border-[#8bf2c8] rounded-[8px] px-[22px] pt-[8.5px] pb-[9.5px] min-h-[44px] flex items-center justify-center text-center hover:bg-white/10 transition-colors duration-200"
              >
                Explore Regulatory Technology
              </a>
            </div>

            <a
              href="#trust-center"
              className="font-segoe font-bold text-[14px] leading-[22.4px] text-[#8bf2c8] pt-[9px] hover:text-white transition-colors duration-200"
            >
              Open Trust Center →
            </a>

            <p className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#8bf2c8] pt-[5.5px] w-full">
              Source-aware. Jurisdiction-aware. Evidence-led. Qualified review
              remains explicit.
            </p>
          </motion.div>

          {/* Right regulatory chain card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="bg-[#0b2a20] border border-[#26dca2] rounded-[16px] flex flex-col items-center gap-[7px] p-[20px] w-full"
          >
            {chainRows.map((row, i) => (
              <React.Fragment key={row.label}>
                <div className="bg-[#0b5c54] border border-[#26dca2] rounded-[10px] flex items-center justify-between px-[14px] py-[10px] w-full">
                  <span className="font-segoe font-normal text-[14px] leading-[22.4px] text-white">
                    {row.label}
                  </span>
                  <span
                    className="font-segoe font-normal text-[12px] leading-[19.2px] rounded-[99px] border px-[10px] py-[1px] whitespace-nowrap"
                    style={{ color: row.statusColor, borderColor: row.borderColor }}
                  >
                    {row.status}
                  </span>
                </div>
                {i === 0 && (
                  <div className="border border-dashed border-[#f5c451] rounded-[99px] px-[12px] py-[3px]">
                    <span className="font-segoe font-normal text-[12px] leading-[19.2px] text-[#f5c451] whitespace-nowrap">
                      Qualified human review
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}
            <p className="font-segoe font-normal text-[12px] leading-[19.2px] text-[#87c7aa] w-full">
              Specimen data for illustration only.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
