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

export default function IntentRouter() {
  return (
    <section id="explore-communications-platforms" className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
            What do you want to improve first?
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            Pick the closest goal and jump straight to the relevant section.
          </p>

          <div className="grid grid-cols-4 gap-x-[16px] gap-y-[16px] w-full">
            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Modernize team collaboration
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Bring persistent team communication into governed workspaces.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Run better meetings
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Connect meetings to decisions, actions and controlled AI
                assistance.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Improve business calling
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Use approved calling and communications infrastructure with
                clearer policy and integration.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Work with guests / partners
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Collaborate externally without losing identity, access and
                content boundaries.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Govern AI in communication
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Control where summaries, action extraction and meeting
                intelligence can be used.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Centralize administration
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Manage users, workspaces, roles, security, integrations and
                reporting from one governed layer.
              </p>
            </div>
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.4px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px]">
            What do you want to improve first?
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            Pick the closest goal and jump straight to the relevant section.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[16px] w-full pt-[5.6px]">
            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Modernize team collaboration
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Bring persistent team communication into governed workspaces.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Run better meetings
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Connect meetings to decisions, actions and controlled AI
                assistance.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Improve business calling
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Use approved calling and communications infrastructure with
                clearer policy and integration.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Work with guests / partners
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Collaborate externally without losing identity, access and
                content boundaries.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Govern AI in communication
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Control where summaries, action extraction and meeting
                intelligence can be used.
              </p>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[14px] px-[20px] pt-[19px] pb-[20px] flex flex-col items-start gap-[3px]">
              <h3 className="font-inter font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full">
                Centralize administration
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                Manage users, workspaces, roles, security, integrations and
                reporting from one governed layer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
