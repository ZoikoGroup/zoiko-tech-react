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
  description: string;
  status: string;
};

const steps: Step[] = [
  {
    icon: "/solution-zoiko-communications-collaboration/icon-target.svg",
    title: "Define model",
    description: "Teams, internal vs external, modes, critical workflows.",
    status: "Scope approved",
  },
  {
    icon: "/solution-zoiko-communications-collaboration/icon-user.svg",
    title: "Map identity",
    description: "Users, groups, guests, workspaces, sensitive contexts.",
    status: "Access model approved",
  },
  {
    icon: "/solution-zoiko-communications-collaboration/icon-shield.svg",
    title: "Define governance",
    description: "Security, retention, AI, guest and external policies.",
    status: "Policy approved",
  },
  {
    icon: "/solution-zoiko-communications-collaboration/icon-plug.svg",
    title: "Integrate",
    description: "Identity, calendars, storage, workflow, APIs.",
    status: "Integration validated",
  },
  {
    icon: "/solution-zoiko-communications-collaboration/icon-rocket.svg",
    title: "Pilot",
    description: "Bounded teams, clear success criteria, privacy communication.",
    status: "Evidence reviewed",
  },
  {
    icon: "/solution-zoiko-communications-collaboration/icon-play.svg",
    title: "Roll out",
    description: "Training, migration, support and admin readiness.",
    status: "Readiness confirmed",
  },
  {
    icon: "/solution-zoiko-communications-collaboration/icon-refresh-cw.svg",
    title: "Review & expand",
    description: "Usage, policy, support and workflow outcomes.",
    status: "Review completed",
  },
];

export default function ImplementationPath() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[9px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(134.77deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-center gap-[45px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white text-center">
            Start with a bounded pilot, then expand
          </h2>

          <div className="flex flex-wrap justify-center gap-x-[58px] gap-y-[14px] w-full pb-[98.65px]">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] w-[238px] h-[216px] flex flex-col items-start"
              >
                <div className="bg-white rounded-[16px] size-[32px] flex items-center justify-center shrink-0">
                  <img src={step.icon} alt="" className="size-[18px]" />
                </div>
                <div className="mt-[7px] font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416]">
                  {step.title}
                </div>
                <p className="mt-[3px] font-inter font-normal text-[16px] leading-[25.6px] text-[#0c3b34]">
                  {step.description}
                </p>
                <div className="mt-auto pt-[5px] font-inter font-semibold text-[13.3px] leading-[21.33px] text-white">
                  {step.status}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#discuss-rollout"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Discuss rollout
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[24px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
            Start with a bounded pilot, then expand
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[14px] w-full">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] flex flex-col items-start"
              >
                <div className="bg-[#247780] rounded-[16px] size-[32px] shrink-0" />
                <div className="mt-[7px] font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416]">
                  {step.title}
                </div>
                <p className="mt-[3px] font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee]">
                  {step.description}
                </p>
                <div className="mt-[5px] font-inter font-semibold text-[13.3px] leading-[21.33px] text-[#247780]">
                  {step.status}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#discuss-rollout"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Discuss rollout
          </a>
        </motion.div>
      </div>
    </section>
  );
}
