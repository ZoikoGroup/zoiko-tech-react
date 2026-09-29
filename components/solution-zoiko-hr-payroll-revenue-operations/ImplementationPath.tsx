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

type Step = {
  icon: string;
  title: string;
  description: string[];
  gate: string;
};

const steps: Step[] = [
  {
    icon: "/solution-zoiko-hr-payroll-revenue-operations/define-scope-icon.svg",
    title: "Define scope",
    description: ["Domain, entities, markets, source systems, owners."],
    gate: "Gate: scope approved",
  },
  {
    icon: "/solution-zoiko-hr-payroll-revenue-operations/map-data-handoffs-icon.svg",
    title: "Map data & handoffs",
    description: [
      "Authoritative sources, downstream systems, exception owners.",
    ],
    gate: "Gate: map approved",
  },
  {
    icon: "/solution-zoiko-hr-payroll-revenue-operations/define-controls-icon.svg",
    title: "Define controls",
    description: ["Roles, approvals, policy, evidence, support."],
    gate: "Gate: control design approved",
  },
  {
    icon: "/solution-zoiko-hr-payroll-revenue-operations/validate-icon.svg",
    title: "Validate",
    description: [
      "Test with synthetic data, integrations, exceptions and correction paths.",
    ],
    gate: "Gate: acceptance criteria met",
  },
  {
    icon: "/solution-zoiko-hr-payroll-revenue-operations/pilot-icon.svg",
    title: "Pilot",
    description: ["Run a controlled cycle with explicit review."],
    gate: "Gate: pilot evidence reviewed",
  },
  {
    icon: "/solution-zoiko-hr-payroll-revenue-operations/roll-out-icon.svg",
    title: "Roll out",
    description: ["Expand by entity, market, unit or process."],
    gate: "Gate: readiness confirmed",
  },
  {
    icon: "/solution-zoiko-hr-payroll-revenue-operations/review-expand-icon.svg",
    title: "Review & expand",
    description: ["Monitor exceptions, quality and adjacent value."],
    gate: "Gate: periodic review done",
  },
];

export default function ImplementationPath() {
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[24px]"
        >
          <h2 className="w-full font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416] text-center">
            Start with one bounded workflow, then expand
          </h2>

          <div className="w-full flex flex-wrap gap-[14px_55px] items-start justify-center">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] flex flex-col items-start gap-[6px] w-[224.8px]"
              >
                <div className="bg-[#247780] rounded-[16px] size-[32px] flex items-center justify-center">
                  <img
                    src={step.icon}
                    alt={`${step.title} icon`}
                    className="size-[18px]"
                  />
                </div>
                <p className="font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416] mt-[7px]">
                  {step.title}
                </p>
                <div className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                  {step.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <p className="font-inter font-semibold text-[13.3px] leading-[21.33px] text-[#247780] mt-[5px]">
                  {step.gate}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[24px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[507.73px]">
            Start with one bounded workflow, then expand
          </h2>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-[14px]">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] flex flex-col items-start gap-[6px]"
              >
                <div className="bg-[#247780] rounded-[16px] size-[32px]" />
                <p className="font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416] mt-[7px]">
                  {step.title}
                </p>
                <div className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                  {step.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <p className="font-inter font-semibold text-[13.3px] leading-[21.33px] text-[#247780] mt-[5px]">
                  {step.gate}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#discuss-rollout"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#247780]/90 transition-colors duration-200"
          >
            Discuss rollout
          </a>
        </motion.div>
      </div>
    </section>
  );
}
