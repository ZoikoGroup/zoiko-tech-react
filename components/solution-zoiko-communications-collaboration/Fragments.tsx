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

export default function Fragments() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[21px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
            Why business communication fragments
          </h2>

          <div className="grid grid-cols-4 gap-x-[16px] gap-y-[16px] w-full">
            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Separate tools
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Meetings, messages and calls live apart. One operating model,
                not one universal product.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Lost decisions
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Decisions vanish into history. Decision and action capture
                adds owners and states.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                External bypass
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Guests skip internal controls. Policy boundaries and expiry
                keep access in check.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Uneven AI
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                AI is switched on inconsistently. Central controls and
                sensitive-space exclusions fix that.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Scattered admin
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Workspace, role, security, retention and integration controls
                sit in one place.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Disconnected work
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                APIs and workflow handoffs link communication to business
                systems.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Invasive visibility
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Aggregate operational context and privacy-respecting
                administration. No surveillance patterns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[508px]">
            Why business communication fragments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[16px] w-full">
            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Separate tools
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Meetings, messages and calls live apart. One operating model,
                not one universal product.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Lost decisions
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Decisions vanish into history. Decision and action capture
                adds owners and states.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                External bypass
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Guests skip internal controls. Policy boundaries and expiry
                keep access in check.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Uneven AI
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                AI is switched on inconsistently. Central controls and
                sensitive-space exclusions fix that.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Scattered admin
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Workspace, role, security, retention and integration controls
                sit in one place.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Disconnected work
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                APIs and workflow handoffs link communication to business
                systems.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-solid border-[#7fd0d9]/35 rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]">
              <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                Invasive visibility
              </h3>
              <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                Aggregate operational context and privacy-respecting
                administration. No surveillance patterns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
