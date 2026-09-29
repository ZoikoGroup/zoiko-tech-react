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

type Stage = {
  title: string;
  description: string;
  states: string;
  icon?: string;
};

// Desktop: 6 stages (the Figma desktop frame does not include an "Approve" stage)
const desktopStages: Stage[] = [
  {
    title: "Prepare",
    description: "Collect records, changes, events and configuration.",
    states: "Not started · Gathering inputs · Ready for validation",
    icon: "/solution-zoiko-hr-payroll-revenue-operations/operating-cycle-prepare-icon.svg",
  },
  {
    title: "Validate",
    description: "Check completeness, consistency, policy and evidence.",
    states: "Valid · Warning · Exception · Blocked",
    icon: "/solution-zoiko-hr-payroll-revenue-operations/operating-cycle-validate-icon.svg",
  },
  {
    title: "Review",
    description: "Route material exceptions to responsible reviewers.",
    states: "Review required · Assigned · In review",
    icon: "/solution-zoiko-hr-payroll-revenue-operations/operating-cycle-review-icon.svg",
  },
  {
    title: "Execute / Release",
    description: "The relevant platform performs the approved action.",
    states: "Scheduled · Processing · Completed · Failed / Partial",
    icon: "/solution-zoiko-hr-payroll-revenue-operations/operating-cycle-execute-release-icon.svg",
  },
  {
    title: "Reconcile",
    description: "Compare expected and actual outcomes.",
    states: "Matched · Difference · Review required",
    icon: "/solution-zoiko-hr-payroll-revenue-operations/operating-cycle-reconcile-icon.svg",
  },
  {
    title: "Evidence & Close",
    description: "Record outcomes, approvals and open exceptions.",
    states: "Closed · Closed with exception · Reopened",
    icon: "/solution-zoiko-hr-payroll-revenue-operations/operating-cycle-evidence-close-icon.svg",
  },
];

// Tablet: 7 stages (adds "Approve"); icons are plain teal circles in this frame, no glyph
const tabletStages: Stage[] = [
  {
    title: "Prepare",
    description: "Collect records, changes, events and configuration.",
    states: "Not started · Gathering inputs · Ready for validation",
  },
  {
    title: "Validate",
    description: "Check completeness, consistency, policy and evidence.",
    states: "Valid · Warning · Exception · Blocked",
  },
  {
    title: "Review",
    description: "Route material exceptions to responsible reviewers.",
    states: "Review required · Assigned · In review",
  },
  {
    title: "Approve",
    description: "An authorized role approves the defined action.",
    states: "Pending · Approved · Rejected · Expired",
  },
  {
    title: "Execute / Release",
    description: "The relevant platform performs the approved action.",
    states: "Scheduled · Processing · Completed · Failed / Partial",
  },
  {
    title: "Reconcile",
    description: "Compare expected and actual outcomes.",
    states: "Matched · Difference · Review required",
  },
  {
    title: "Evidence & Close",
    description: "Record outcomes, approvals and open exceptions.",
    states: "Closed · Closed with exception · Reopened",
  },
];

export default function OperatingCycle() {
  return (
    <section className="w-full bg-white">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[99.155px] lg:pb-[100px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-center gap-[20px] pb-[12px]"
        >
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416] w-full text-left">
            One operating cycle, seven controlled stages
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full text-left">
            A reusable pattern for recurring work. Each domain runs its own
            cycle; the stages and states below show how control is kept
            consistent.
          </p>

          <div className="flex flex-wrap gap-[14px_41px] items-start justify-center w-full pt-[4px]">
            {desktopStages.map((stage) => (
              <div
                key={stage.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] flex flex-col gap-[3px] w-[218.4px]"
              >
                <div className="bg-[#247780] rounded-[16px] flex items-center justify-center size-[32px]">
                  <img
                    src={stage.icon}
                    alt=""
                    className="size-[18px] pointer-events-none"
                  />
                </div>
                <p className="font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416] mt-[7px]">
                  {stage.title}
                </p>
                <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                  {stage.description}
                </p>
                <p className="font-inter font-semibold text-[13.3px] leading-[21.33px] text-[#247780] mt-[5px]">
                  {stage.states}
                </p>
              </div>
            ))}
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px] pb-[12px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px]">
            One operating cycle, seven controlled stages
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
            A reusable pattern for recurring work. Each domain runs its own
            cycle; the stages and states below show how control is kept
            consistent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[14px] w-full py-[9.8px]">
            {tabletStages.map((stage) => (
              <div
                key={stage.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] flex flex-col gap-[3px] w-full"
              >
                <div className="bg-[#247780] rounded-[16px] size-[32px]" />
                <p className="font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416] mt-[7px]">
                  {stage.title}
                </p>
                <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                  {stage.description}
                </p>
                <p className="font-inter font-semibold text-[13.3px] leading-[21.33px] text-[#247780] mt-[5px]">
                  {stage.states}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#e6f2f4] border-l-4 border-[#247780] rounded-tr-[10px] rounded-br-[10px] px-[16px] pt-[10.77px] pb-[17.8px] w-full max-w-[743px]">
            <p className="font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
              <span className="font-bold">Design-contract boundary.</span>{" "}
              This is a recommended operating pattern, not the exact
              production workflow of Zoiko HR, Zoiko Payroll, Zoiko Billing or
              ZoikoSuite.
            </p>
          </div>

          <a
            href="#view-cycle-model"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200 mt-[4px]"
          >
            View cycle model
          </a>
        </motion.div>
      </div>
    </section>
  );
}
