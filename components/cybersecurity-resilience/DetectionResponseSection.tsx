"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const timelineSteps = [
  {
    step: 1,
    title: "Signal",
    detail: "Source, affected asset, time",
  },
  {
    step: 2,
    title: "Triage",
    detail: "Priority, owner, related events",
  },
  {
    step: 3,
    title: "Investigate",
    detail: "Evidence, timeline, changes",
  },
  {
    step: 4,
    title: "Contain",
    detail: "Approved action, scope, reversibility",
  },
  {
    step: 5,
    title: "Remediate",
    detail: "Correct the root issue",
  },
  {
    step: 6,
    title: "Recover",
    detail: "Restore and validate operation",
  },
  {
    step: 7,
    title: "Close & learn",
    detail: "Outcome, residual risk, follow-up",
  },
];

const specimenPanels = [
  {
    title: "Header",
    description:
      "Incident INC-0001 (specimen) · Status: Investigating · Owner: Security lead · Affected: Sample service A.",
  },
  {
    title: "Affected scope",
    description:
      "Assets, identities, integrations and business services.",
  },
  {
    title: "Evidence panel",
    description:
      "Events, configuration state, approvals, related changes and notes at approved scope.",
  },
  {
    title: "Actions",
    description:
      "Assign, escalate, contain or restrict where supported, request evidence, mark recovery, close.",
  },
];

export default function DetectionResponseSection() {
  return (
    <section
      id="security-operations"
      className="relative w-full overflow-hidden text-white py-14 sm:py-20 lg:pt-[96px] lg:pb-[120px]"
      style={{
        background:
          "linear-gradient(155deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header (Figma itemSpacing: 20px) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[1180px] mx-auto mb-8 lg:mb-[20px]"
        >
          <h2 className="font-poppins text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-white leading-[1.2] lg:leading-[40.5px] tracking-[-0.02em] mb-2.5">
            Detection, investigation and response
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-[#A3B8B9] leading-[24px] sm:leading-[26px]">
            A vendor-neutral incident lifecycle. It does not claim a specific SOC, SIEM or XDR product.
          </p>
        </motion.div>

        {/* 7-Step Sleek Horizontal Timeline (Figma: continuous 2px line #7FD0D9, white circular badges, centered text) */}
        <div className="w-full max-w-[1180px] mx-auto overflow-x-auto pb-4 scrollbar-none mb-10 lg:mb-[40px] -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[840px] lg:min-w-full relative py-2">
            {/* Continuous Connecting Line (exactly centered through the 32px circles) */}
            <div
              className="absolute top-[22px] left-[5%] right-[5%] h-[2px] bg-[#7FD0D9] z-0"
              aria-hidden="true"
            />

            {/* 7 Columns */}
            <div className="grid grid-cols-7 relative z-10 gap-2">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                  custom={0.1 + idx * 0.04}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Circle Badge (Figma: 32x32 white circle, text-black font-bold) */}
                  <div className="w-8 h-8 rounded-full bg-white text-black font-bold text-[13.6px] flex items-center justify-center mb-3 shadow-md">
                    {step.step}
                  </div>

                  {/* Step Title (Figma: font-bold text-white) */}
                  <span className="font-poppins text-[13.6px] font-bold text-white mb-1">
                    {step.title}
                  </span>

                  {/* Step Detail (Figma: muted text, centered) */}
                  <p className="text-[13px] text-[#A3B8B9] leading-[18px] max-w-[145px] mx-auto">
                    {step.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Incident Command View (Specimen) Section (Figma: itemSpacing: 18px) */}
        <div className="w-full max-w-[1180px] mx-auto">
          <h3 className="font-poppins text-[17px] sm:text-[18px] font-bold text-white mb-5 tracking-[-0.01em]">
            Incident command view (specimen)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {specimenPanels.map((panel, idx) => (
              <motion.div
                key={panel.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.2 + idx * 0.05}
                className="bg-white/[0.06] border border-[#7FD0D9]/35 rounded-[14px] p-5 flex flex-col gap-2 backdrop-blur-sm hover:border-[#7FD0D9] hover:bg-white/[0.1] transition-all duration-200 min-h-[166px]"
              >
                <h4 className="font-poppins text-[16px] font-bold text-white">
                  {panel.title}
                </h4>
                <p className="text-[13.8px] sm:text-[14px] text-[#A3B8B9] leading-[22.4px]">
                  {panel.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
