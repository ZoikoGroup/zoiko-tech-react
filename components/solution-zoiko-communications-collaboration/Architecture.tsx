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

export default function Architecture() {
  return (
    <section id="explore-communication-governance" className="w-full">
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
            Communication workspace architecture
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            Communication as a structured, governed system rather than a set
            of isolated media features. Read from the bottom layer up.
          </p>

          <div className="flex flex-col items-start gap-[10px] w-full pt-[4px]">
            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex items-center gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L7 Evidence &amp; operations
              </div>
              <div className="flex-1 min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Audit, analytics, integration state, service status.
              </div>
              <div className="flex-1 min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780]">
                Can it be operated and reviewed?
              </div>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex items-center gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L6 Policy &amp; trust
              </div>
              <div className="flex-1 min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Permissions, guest controls, sensitive spaces, retention,
                privacy.
              </div>
              <div className="flex-1 min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780]">
                What is allowed?
              </div>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex items-center gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L5 AI assistance
              </div>
              <div className="flex-1 min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Summaries, action extraction, decision capture, where
                approved.
              </div>
              <div className="flex-1 min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780]">
                How is AI used?
              </div>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex items-center gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L4 Work artifacts
              </div>
              <div className="flex-1 min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Decisions, action items, notes, follow-up objects.
              </div>
              <div className="flex-1 min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780]">
                What durable work comes out?
              </div>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex items-center gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L3 Communication modes
              </div>
              <div className="flex-1 min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Messaging, meetings, calling, local communications where
                approved.
              </div>
              <div className="flex-1 min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780]">
                How do people communicate?
              </div>
            </div>

            <div
              className="rounded-[12px] flex items-center gap-[12px] px-[18px] py-[13px] w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
              }}
            >
              <div className="w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-white">
                L2 Workspace &amp; context
              </div>
              <div className="flex-1 min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-white">
                Workspaces, channels, meeting spaces, business context.
              </div>
              <div className="flex-1 min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-white">
                Where does it happen?
              </div>
            </div>

            <div
              className="rounded-[12px] flex items-center gap-[12px] px-[18px] py-[13px] w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
              }}
            >
              <div className="w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-white">
                L1 Organization &amp; identity
              </div>
              <div className="flex-1 min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-white">
                Users, groups, roles, guests, authentication.
              </div>
              <div className="flex-1 min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-white">
                Who can participate?
              </div>
            </div>
          </div>

          <a
            href="#discuss-communications-environment"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200 mt-[6px]"
          >
            View architecture
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px]">
            Communication workspace architecture
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            Communication as a structured, governed system rather than a set
            of isolated media features. Read from the bottom layer up.
          </p>

          <div className="flex flex-col items-start gap-[10px] w-full py-[10px]">
            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-[6px] sm:gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-full sm:w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L7 Evidence &amp; operations
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Audit, analytics, integration state, service status.
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780] mt-[2px] sm:mt-0">
                Can it be operated and reviewed?
              </div>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-[6px] sm:gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-full sm:w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L6 Policy &amp; trust
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Permissions, guest controls, sensitive spaces, retention,
                privacy.
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780] mt-[2px] sm:mt-0">
                What is allowed?
              </div>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-[6px] sm:gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-full sm:w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L5 AI assistance
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Summaries, action extraction, decision capture, where
                approved.
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780] mt-[2px] sm:mt-0">
                How is AI used?
              </div>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-[6px] sm:gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-full sm:w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L4 Work artifacts
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Decisions, action items, notes, follow-up objects.
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780] mt-[2px] sm:mt-0">
                What durable work comes out?
              </div>
            </div>

            <div className="bg-[#f3f9fa] border border-solid border-[#d5e3e5] rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-[6px] sm:gap-[12px] px-[18px] py-[13px] w-full">
              <div className="w-full sm:w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416]">
                L3 Communication modes
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                Messaging, meetings, calling, local communications where
                approved.
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780] mt-[2px] sm:mt-0">
                How do people communicate?
              </div>
            </div>

            <div
              className="rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-[6px] sm:gap-[12px] px-[18px] py-[13px] w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
              }}
            >
              <div className="w-full sm:w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-white">
                L2 Workspace &amp; context
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-white">
                Workspaces, channels, meeting spaces, business context.
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-white mt-[2px] sm:mt-0">
                Where does it happen?
              </div>
            </div>

            <div
              className="rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-[6px] sm:gap-[12px] px-[18px] py-[13px] w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
              }}
            >
              <div className="w-full sm:w-[200px] shrink-0 font-sora font-bold text-[15.2px] leading-[24.32px] text-white">
                L1 Organization &amp; identity
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-normal text-[16px] leading-[25.6px] text-white">
                Users, groups, roles, guests, authentication.
              </div>
              <div className="w-full sm:flex-1 sm:min-w-0 font-inter font-semibold text-[16px] leading-[25.6px] text-white mt-[2px] sm:mt-0">
                Who can participate?
              </div>
            </div>
          </div>

          {/* Tablet-only note box (present in the 768w design, absent from the 1440w desktop frame) */}
          <div className="bg-[#e6f2f4] border-l-4 border-solid border-[#247780] rounded-tr-[10px] rounded-br-[10px] px-[16px] pt-[11px] pb-[18px] w-full">
            <p className="font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
              <span className="font-bold">Architecture boundary.</span> These
              concepts illustrate enterprise communication architecture.
              Exact product screens and feature availability must be
              product-approved.
            </p>
          </div>

          <a
            href="#discuss-communications-environment"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
          >
            View architecture
          </a>
        </motion.div>
      </div>
    </section>
  );
}
