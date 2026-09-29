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
  lines: string[];
  small: string;
};

const steps: Step[] = [
  {
    icon: "/solution-zoiko-identity-access/icon-target.svg",
    title: "Define scope",
    lines: ["People, externals,", "services, agents, apps,", "owners."],
    small: "Scope approved",
  },
  {
    icon: "/solution-zoiko-identity-access/icon-database.svg",
    title: "Map sources",
    lines: ["Authoritative records,", "relationships, conflicts."],
    small: "Source model approved",
  },
  {
    icon: "/solution-zoiko-identity-access/icon-shield.svg",
    title: "Design authority",
    lines: ["Roles, entitlements,", "delegation, privilege,", "lifecycle."],
    small: "Authority model approved",
  },
  {
    icon: "/solution-zoiko-identity-access/icon-link.svg",
    title: "Integrate & validate",
    lines: ["Bounded systems; test", "success and denial", "paths."],
    small: "Acceptance met",
  },
  {
    icon: "/solution-zoiko-identity-access/icon-rocket.svg",
    title: "Pilot",
    lines: ["Limited users, services", "and applications."],
    small: "Pilot reviewed",
  },
  {
    icon: "/solution-zoiko-identity-access/icon-play.svg",
    title: "Roll out",
    lines: ["Expand while monitoring", "exceptions."],
    small: "Readiness confirmed",
  },
  {
    icon: "/solution-zoiko-identity-access/icon-refresh-cw.svg",
    title: "Review continuously",
    lines: ["Reviews, orphans,", "exceptions, evidence."],
    small: "Review completed",
  },
];

export default function StartBoundedThenExpand() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(137.81deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col items-center gap-[24px] pb-[12px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white text-center max-w-[698px]"
          >
            Start bounded, then expand
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-wrap gap-[14px_85px] items-start justify-center w-[1160px]"
          >
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] flex flex-col items-center justify-center gap-[3px] p-[18px] w-[224.8px]"
              >
                <div className="bg-white rounded-full flex items-center justify-center size-[32px] shrink-0">
                  <img src={step.icon} alt="" className="size-[16px]" />
                </div>
                <h3 className="font-sora font-bold text-[16px] leading-[25.6px] text-[#dcecee] text-center w-full pt-[7px]">
                  {step.title}
                </h3>
                <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] text-center w-full">
                  {step.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < step.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <p className="font-inter font-semibold text-[13.3px] leading-[21.33px] text-[#7fd0d9] text-center w-full pt-[5px]">
                  {step.small}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.01deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[24px] pb-[12px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[507.72px]"
          >
            Start bounded, then expand
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-2 sm:grid-cols-3 gap-[14px] w-full"
          >
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] flex flex-col items-start gap-[3px] p-[18px]"
              >
                {/* Tablet design shows a plain white circle here (no icon glyph in the Figma frame) */}
                <div className="bg-white rounded-full size-[32px] shrink-0" />
                <h3 className="font-sora font-bold text-[16px] leading-[25.6px] text-[#dcecee] w-full pt-[7px]">
                  {step.title}
                </h3>
                <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] w-full">
                  {step.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < step.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <p className="font-inter font-semibold text-[13.3px] leading-[21.33px] text-[#7fd0d9] w-full pt-[5px]">
                  {step.small}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            href="#discuss-rollout"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Discuss rollout
          </motion.a>
        </div>
      </div>
    </section>
  );
}
