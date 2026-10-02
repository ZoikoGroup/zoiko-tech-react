"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  }),
};

export default function FrictionBetweenTeamsSection() {
  const [activeAction, setActiveAction] = useState<string>("Accept");

  const comparisons = [
    {
      problem: "Each function has its own source of truth",
      solution: "Authoritative source and provenance per record",
    },
    {
      problem: "Recurring deadlines live in separate systems",
      solution: "Shared cycle, calendar and dependencies",
    },
    {
      problem: "Cross-functional handoffs are implicit",
      solution: "Defined sender, receiver, object and due state",
    },
    {
      problem: "Approvals happen outside the workflow",
      solution: "Approval state and accountable role explicit",
    },
    {
      problem: "Exceptions surface too late",
      solution: "One shared exception model with downstream impact",
    },
    {
      problem: "Communication is detached from action",
      solution: "Relevant context connected to work, without surveillance",
    },
    {
      problem: "Evidence is fragmented",
      solution: "Decisions, approvals and outcomes preserved",
    },
  ];

  const statusPills = [
    { label: "Ready", dotColor: "#334155", textColor: "#334155", bgColor: "#E2E8F0" },
    { label: "Pending", dotColor: "#075985", textColor: "#075985", bgColor: "#E0F2FE" },
    { label: "Exception", dotColor: "#991B1B", textColor: "#991B1B", bgColor: "#FEE2E2" },
    { label: "Accepted", dotColor: "#195B62", textColor: "#195B62", bgColor: "#DBF2ED" },
    { label: "Rejected", dotColor: "#991B1B", textColor: "#991B1B", bgColor: "#FEE2E2" },
    { label: "Completed", dotColor: "#195B62", textColor: "#195B62", bgColor: "#DBF2ED" },
  ];

  const actionButtons = [
    "Accept",
    "Review",
    "Reject",
    "Request clarification",
    "Escalate",
  ];

  return (
    <section
      id="operational-friction"
      className="w-full bg-[#E9F9F8] py-12 sm:py-16 lg:py-[88px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Heading & Comparison List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-[#247780] uppercase mb-2">
              WHY BUSINESS OPERATIONS FRAGMENT
            </span>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0F172A] leading-[1.2] sm:leading-[1.15] tracking-[-0.02em] mb-4">
              Most operational friction <br className="hidden sm:inline" />
              lives between teams
            </h2>

            <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[16px] text-[#64748B] mb-6 font-normal leading-relaxed">
              Seven reasons recurring operations break down, and how a shared
              operating architecture answers each.
            </p>

            {/* List with top/bottom vertical stack */}
            <div className="flex flex-col border-t border-[#E2E8F0]">
              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="py-[12px] sm:py-[13px] flex flex-col gap-[3.5px] border-b border-[#E2E8F0]"
                >
                  <span className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] text-[#94A3B8] line-through decoration-[#94A3B8]/70 leading-[20px]">
                    {item.problem}
                  </span>

                  <div className="flex items-center gap-2">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[15px] h-[15px] text-[#1F7A6C] shrink-0"
                    >
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] font-semibold text-[#0F172A] leading-[22px]">
                      {item.solution}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Specimen Card & 3 Sub-Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-[#247780] uppercase mb-2">
              AUTHORITATIVE DATA & HANDOFFS
            </span>

            <p className="font-['Poppins',sans-serif] text-[13.5px] sm:text-[15px] text-[#334155] mb-5 font-normal leading-relaxed">
              Every transfer between functions names its source, owner, status
              and what it affects next.
            </p>

            {/* Cross-functional Handoff Card */}
            <div className="w-full bg-white rounded-[14px] border border-[#E2E8F0] shadow-sm overflow-hidden mb-4">
              {/* Card Top Title Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#E2E8F0]">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-[#0F172A]">
                  Cross-functional handoff
                </span>
                <span className="font-['Poppins',sans-serif] text-[10px] sm:text-[11px] font-semibold text-[#64748B] tracking-wider uppercase">
                  SPECIMEN · SYNTHETIC DATA
                </span>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 flex flex-col gap-4">
                {/* FROM / TO Row */}
                <div className="flex items-center gap-2 sm:gap-3 pb-4 border-b border-[#E2E8F0]">
                  <div className="flex-1 p-2.5 sm:p-3.5 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="block font-['Poppins',sans-serif] text-[10px] sm:text-[11px] font-medium text-[#64748B] uppercase mb-0.5 sm:mb-1">
                      FROM
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[15px] font-bold text-[#0F172A]">
                      People / HR
                    </span>
                  </div>

                  <div className="w-6 sm:w-8 flex items-center justify-center shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-[#247780]"
                    >
                      <path
                        d="M3.3335 8H12.6668"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.6665 4L12.6665 8L8.6665 12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex-1 p-2.5 sm:p-3.5 rounded-[10px] bg-[#CFE9EA] border border-[#9FDCD7]">
                    <span className="block font-['Poppins',sans-serif] text-[10px] sm:text-[11px] font-semibold text-[#195B62] uppercase mb-0.5 sm:mb-1">
                      TO
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[15px] font-bold text-[#0F172A]">
                      Payroll operations
                    </span>
                  </div>
                </div>

                {/* Metadata Grid (1 column on mobile, 3 columns on tablet/desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-3 pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <span className="block font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] mb-0.5">
                      Object
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A] leading-snug">
                      Worker change · role and pay grade
                    </span>
                  </div>

                  <div>
                    <span className="block font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] mb-0.5">
                      Source / period
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A] leading-snug">
                      HR record · effective 1 Oct
                    </span>
                  </div>

                  <div>
                    <span className="block font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] mb-0.5">
                      Owner
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A] leading-snug">
                      Payroll Specialist
                    </span>
                  </div>

                  <div className="col-span-1 sm:col-span-3 pt-1">
                    <span className="block font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] mb-0.5">
                      Downstream impact
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A] leading-snug">
                      October payroll cycle
                    </span>
                  </div>
                </div>

                {/* Status Badges with Colored Dots */}
                <div className="flex flex-col gap-2 pb-4 border-b border-[#E2E8F0]">
                  <span className="font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] uppercase tracking-wider">
                    STATUS
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {statusPills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        style={{ backgroundColor: pill.bgColor, color: pill.textColor }}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold"
                      >
                        <span
                          style={{ backgroundColor: pill.dotColor }}
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                        />
                        {pill.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions (Accept active with Elm fill, other buttons outlined in Geyser) */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {actionButtons.map((action) => {
                    const isSelected = activeAction === action;
                    return (
                      <button
                        key={action}
                        onClick={() => setActiveAction(action)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-[6px] text-[12px] sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#1F7A6C] text-white border border-[#1F7A6C] shadow-xs"
                            : "bg-white hover:bg-slate-50 text-[#0F172A] border border-[#CBD5E1]"
                        }`}
                      >
                        {action}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3 Sub-Cards without arbitrary icons, matching Figma exactly */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-[17px] rounded-[12px] bg-white border border-[#E2E8F0] shadow-xs">
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-bold text-[#0F172A] mb-1.5">
                  Authoritative record
                </h4>
                <p className="font-['Poppins',sans-serif] text-[12.5px] text-[#334155] leading-[19px] font-normal">
                  System, owner and effective period. Derived data is never
                  silently treated as authoritative.
                </p>
              </div>

              <div className="p-[17px] rounded-[12px] bg-white border border-[#E2E8F0] shadow-xs">
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-bold text-[#0F172A] mb-1.5">
                  Derived context
                </h4>
                <p className="font-['Poppins',sans-serif] text-[12.5px] text-[#334155] leading-[19px] font-normal">
                  Transformed or calculated context labeled, with provenance
                  kept.
                </p>
              </div>

              <div className="p-[17px] rounded-[12px] bg-white border border-[#E2E8F0] shadow-xs">
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-bold text-[#0F172A] mb-1.5">
                  Exception
                </h4>
                <p className="font-['Poppins',sans-serif] text-[12.5px] text-[#334155] leading-[19px] font-normal">
                  Missing, conflicting or policy-sensitive states stay visible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
