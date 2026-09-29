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

const externalItems = [
  {
    title: "Guest identity",
    lines: ["Clear external label, invited-by", "context and access state."],
  },
  {
    title: "Scope",
    lines: [
      "Explicit workspaces, channels",
      "and meetings the guest can",
      "reach.",
    ],
  },
  {
    title: "Expiry / review",
    lines: ["Time-bound access or periodic", "review where supported."],
  },
  {
    title: "Sharing & meetings",
    lines: ["Governed by policy, including AI", "outputs in external meetings."],
  },
  {
    title: "Sensitive spaces",
    lines: [
      "Legal, executive, HR or regulated",
      "areas can restrict guests and AI.",
    ],
  },
  {
    title: "Offboarding",
    lines: [
      "Access removal keeps required",
      "evidence and closes ownership.",
    ],
  },
];

export default function External() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[19.9px] items-start"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698.05px]">
            External and guest collaboration
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686.38px]">
            Guests, partners and customers bring different risk. Access is
            scoped, time-bound and reviewable.
          </p>

          <div className="grid grid-cols-3 gap-x-[16px] gap-y-[16px] w-full">
            {externalItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col gap-[6px] items-start"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                  {item.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] w-full overflow-auto">
            <div className="min-w-[520px] w-full">
              <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#0a1416] opacity-85 px-[14px] pt-[7px] pb-[8.47px]">
                Guest / external access panel (specimen data)
              </p>
              <div className="flex w-full">
                <div className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[314.42px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Guest
                  </span>
                </div>
                <div className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[354.94px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Scope
                  </span>
                </div>
                <div className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[278.19px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Expiry
                  </span>
                </div>
                <div className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[230.45px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    State
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[314.42px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    Sample partner A
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[354.94px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    One project channel
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[278.19px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    Specimen date
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] pt-[11.5px] pb-[9.58px] w-[230.45px]">
                  <span className="inline-flex items-start bg-[#e5f5e7] rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#155724]">
                    Active
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[314.42px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    Sample partner B
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[354.94px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    Legal workspace
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[278.19px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    —
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] pt-[11.5px] pb-[9.58px] w-[230.45px]">
                  <span className="inline-flex items-start bg-[#ffe9e0] rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7a2a08]">
                    Restricted
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#review-external-model"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:opacity-90 transition-opacity duration-200"
          >
            Review external model
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.2px] items-start"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[507.73px]">
            External and guest collaboration
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686.38px]">
            Guests, partners and customers bring different risk. Access is
            scoped, time-bound and reviewable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[16px] w-full">
            {externalItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col gap-[6px] items-start"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                  {item.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] w-full overflow-auto">
            <div className="min-w-[520px] w-full">
              <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#0a1416] opacity-85 px-[14px] pt-[7px] pb-[8.47px]">
                Guest / external access panel (specimen data)
              </p>
              <div className="flex w-full">
                <div className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[183.95px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Guest
                  </span>
                </div>
                <div className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[207.66px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Scope
                  </span>
                </div>
                <div className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[162.77px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Expiry
                  </span>
                </div>
                <div className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[134.84px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    State
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[183.95px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    Sample partner A
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[207.66px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    One project channel
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[162.77px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    Specimen date
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] pt-[11.5px] pb-[9.58px] w-[134.84px]">
                  <span className="inline-flex items-start bg-[#e5f5e7] rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#155724]">
                    Active
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[183.95px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    Sample partner B
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[207.66px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    Legal workspace
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] py-[10px] w-[162.77px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468]">
                    —
                  </span>
                </div>
                <div className="border-b border-[#d5e3e5] px-[14px] pt-[11.5px] pb-[9.58px] w-[134.84px]">
                  <span className="inline-flex items-start bg-[#ffe9e0] rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7a2a08]">
                    Restricted
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#review-external-model"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:opacity-90 transition-opacity duration-200"
          >
            Review external model
          </a>
        </motion.div>
      </div>
    </section>
  );
}
