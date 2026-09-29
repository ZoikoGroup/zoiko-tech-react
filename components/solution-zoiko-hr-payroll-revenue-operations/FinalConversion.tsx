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

const darkInputClass =
  "bg-[#0b2629] border border-[#334155] rounded-[10px] h-[48px] px-[16px] py-[12px] text-[14px] font-inter font-normal text-[#e2e8f0] placeholder:text-[#64748b] w-full outline-none";

const darkLabelClass =
  "font-inter font-semibold text-[14px] text-[#e2e8f0]";

const lightInputClass =
  "bg-white border border-[#9bb5b8] rounded-[10px] h-[48px] px-[16px] py-[12px] text-[14.4px] font-inter font-normal text-[#0a1416] placeholder:text-[#64748b] w-full outline-none";

const lightLabelClass =
  "font-inter font-semibold text-[14.4px] text-[#0a1416]";

export default function FinalConversion() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <DesktopFinalConversion />

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <TabletFinalConversion />
    </section>
  );
}

function DesktopFinalConversion() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUpVariant}
        custom={0.05}
        className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[21px]"
      >
        <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-[#0a1416] max-w-[730px]">
          Bring recurring people and revenue operations into clearer control.
        </h2>
        <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[707px]">
          Talk with Zoiko Tech about your HR, payroll, billing or recurring
          operations, the systems and markets involved, the handoffs that
          create risk, and the right platform path to evaluate fit.
        </p>

        <div className="bg-[#195157] rounded-[16px] p-[24px] flex flex-col gap-[24px] items-start w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-inter font-bold text-[24px] text-[#f8fafc]">
              Contact Sales
            </p>
            <p className="font-inter font-normal text-[14px] text-[#94a3b8] max-w-full">
              Tell us a bit about your organization and what you're looking
              to solve. We'll connect you with the right team.
            </p>
          </div>

          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex gap-[16px] items-start w-full">
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <label className={darkLabelClass}>Work email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className={darkInputClass}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <label className={darkLabelClass}>Company</label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className={darkInputClass}
                />
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full">
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <label className={darkLabelClass}>
                  Role / function (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. HR Director"
                  className={darkInputClass}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <label className={darkLabelClass}>Country / region</label>
                <input
                  type="text"
                  placeholder="Select country"
                  className={darkInputClass}
                />
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full">
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <label className={darkLabelClass}>Primary domain</label>
                <div className="bg-[#0b2629] border border-[#334155] rounded-[10px] h-[48px] px-[16px] py-[12px] flex items-center justify-between w-full">
                  <span className="font-inter font-normal text-[14px] text-[#e2e8f0]">
                    HR operations
                  </span>
                  <img
                    src="/solution-zoiko-hr-payroll-revenue-operations/icon-chevron-down.svg"
                    alt=""
                    className="size-[12px]"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <label className={darkLabelClass}>
                  Market / entity complexity (optional)
                </label>
                <div className="bg-[#0b2629] border border-[#334155] rounded-[10px] h-[48px] px-[16px] py-[12px] flex items-center justify-between w-full">
                  <span className="font-inter font-normal text-[14px] text-[#e2e8f0]">
                    Unsure
                  </span>
                  <img
                    src="/solution-zoiko-hr-payroll-revenue-operations/icon-chevron-down.svg"
                    alt=""
                    className="size-[12px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full">
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <label className={darkLabelClass}>Current challenge</label>
                <div className="bg-[#0b2629] border border-[#334155] rounded-[10px] h-[48px] px-[16px] py-[12px] flex items-center justify-between w-full">
                  <span className="font-inter font-normal text-[14px] text-[#e2e8f0]">
                    Fragmented systems
                  </span>
                  <img
                    src="/solution-zoiko-hr-payroll-revenue-operations/icon-chevron-down.svg"
                    alt=""
                    className="size-[12px]"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <label className={darkLabelClass}>Evaluation stage</label>
                <div className="bg-[#0b2629] border border-[#334155] rounded-[10px] h-[48px] px-[16px] py-[12px] flex items-center justify-between w-full">
                  <span className="font-inter font-normal text-[14px] text-[#e2e8f0]">
                    Exploring
                  </span>
                  <img
                    src="/solution-zoiko-hr-payroll-revenue-operations/icon-chevron-down.svg"
                    alt=""
                    className="size-[12px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-start w-full">
              <label className={darkLabelClass}>Message (optional)</label>
              <textarea
                placeholder="Tell us more about your goals..."
                className="bg-[#0b2629] border border-[#334155] rounded-[10px] h-[120px] p-[16px] text-[14px] font-inter font-normal text-[#64748b] placeholder:text-[#64748b] w-full outline-none resize-none"
              />
              <p className="font-inter font-semibold text-[12px] text-[#94a3b8] w-full">
                Please don't submit employee data, payroll records, customer
                financial data, credentials, invoices or other confidential
                operational records.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] items-start w-full">
            <label className="flex gap-[12px] items-center w-full cursor-pointer">
              <input
                type="checkbox"
                className="size-[20px] rounded-[4px] border border-[#475569] accent-[#14b8a6]"
              />
              <span className="font-inter font-normal text-[14px] text-[#e2e8f0]">
                I acknowledge the Privacy Notice.
              </span>
            </label>
            <label className="flex gap-[12px] items-center w-full cursor-pointer">
              <input
                type="checkbox"
                className="size-[20px] rounded-[4px] border border-[#475569] accent-[#14b8a6]"
              />
              <span className="font-inter font-normal text-[14px] text-[#e2e8f0]">
                Send me optional Zoiko Tech updates.
              </span>
            </label>
          </div>

          <div className="flex gap-[12px] items-start w-full flex-wrap">
            <button
              type="submit"
              className="bg-[#14b8a6] rounded-[10px] px-[24px] py-[12px] font-inter font-semibold text-[16px] text-white hover:bg-[#14b8a6]/90 transition-colors duration-200"
            >
              Contact Sales
            </button>
            <a
              href="#explore-operations-platforms"
              className="bg-[#fbfbfb] rounded-[10px] px-[24px] py-[12px] font-inter font-semibold text-[16px] text-[#14b8a6] hover:bg-white/90 transition-colors duration-200"
            >
              Explore Operations Platforms
            </a>
            <a
              href="#explore-zoiko-payroll"
              className="bg-[#fbfbfb] rounded-[10px] px-[24px] py-[12px] font-inter font-semibold text-[16px] text-[#14b8a6] hover:bg-white/90 transition-colors duration-200"
            >
              Explore Zoiko Payroll →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TabletFinalConversion() {
  return (
    <div className="flex lg:hidden flex-col items-start pt-[40px] pb-[46px] px-[24px] sm:pt-[60.65px] sm:pb-[61.43px] sm:px-[38.4px] w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUpVariant}
        custom={0.05}
        className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.5px]"
      >
        <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px]">
          Bring recurring people and revenue operations into clearer control.
        </h2>
        <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
          Talk with Zoiko Tech about your HR, payroll, billing or recurring
          operations, the systems and markets involved, the handoffs that
          create risk, and the right platform path to evaluate fit.
        </p>

        <div className="flex flex-col gap-[14px] items-start w-full pt-[9.5px]">
          <div className="grid grid-cols-2 gap-[14px] w-full">
            <div className="flex flex-col gap-[6px] items-start">
              <label className={lightLabelClass}>Work email</label>
              <input type="email" className={lightInputClass} />
            </div>
            <div className="flex flex-col gap-[6px] items-start">
              <label className={lightLabelClass}>Company</label>
              <input type="text" className={lightInputClass} />
            </div>
            <div className="flex flex-col gap-[6px] items-start">
              <label className={lightLabelClass}>
                Role / function (optional)
              </label>
              <input type="text" className={lightInputClass} />
            </div>
            <div className="flex flex-col gap-[6px] items-start">
              <label className={lightLabelClass}>Country / region</label>
              <input type="text" className={lightInputClass} />
            </div>
            <div className="flex flex-col gap-[6px] items-start">
              <label className={lightLabelClass}>Primary domain</label>
              <div className={`${lightInputClass} flex items-center`}>
                HR operations
              </div>
            </div>
            <div className="flex flex-col gap-[6px] items-start">
              <label className={lightLabelClass}>
                Market / entity complexity (optional)
              </label>
              <div className={`${lightInputClass} flex items-center`}>
                Unsure
              </div>
            </div>
            <div className="flex flex-col gap-[6px] items-start">
              <label className={lightLabelClass}>Current challenge</label>
              <div className={`${lightInputClass} flex items-center`}>
                Fragmented systems
              </div>
            </div>
            <div className="flex flex-col gap-[6px] items-start">
              <label className={lightLabelClass}>Evaluation stage</label>
              <div className={`${lightInputClass} flex items-center`}>
                Exploring
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-[5px] items-start">
              <label className={lightLabelClass}>Message (optional)</label>
              <textarea className="bg-white border border-[#9bb5b8] rounded-[10px] h-[91px] p-[16px] w-full outline-none resize-none" />
              <p className="font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#4d6468] w-full">
                Please don't submit employee data, payroll records, customer
                financial data, credentials, invoices or other confidential
                operational records.
              </p>
            </div>
            <div className="col-span-2 flex items-center gap-[13px]">
              <input
                type="checkbox"
                className="size-[22px] rounded-[2.5px] border border-[#767676] accent-[#247780]"
              />
              <span className="font-inter font-normal text-[14.4px] leading-[23px] text-[#0a1416]">
                I acknowledge the Privacy Notice.
              </span>
            </div>
            <div className="col-span-2 flex items-center gap-[13px]">
              <input
                type="checkbox"
                className="size-[22px] rounded-[2.5px] border border-[#767676] accent-[#247780]"
              />
              <span className="font-inter font-normal text-[14.4px] leading-[23px] text-[#0a1416]">
                Send me optional Zoiko Tech updates.
              </span>
            </div>
            <div className="col-span-2 flex flex-col gap-[12px] items-start pt-[12px] w-full">
              <button
                type="submit"
                className="bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] py-[12px] font-inter font-semibold text-[16px] text-white hover:bg-[#247780]/90 transition-colors duration-200"
              >
                Contact Sales
              </button>
              <a
                href="#explore-operations-platforms"
                className="border-2 border-[#247780] rounded-[10px] px-[24px] py-[12px] font-inter font-semibold text-[16px] text-[#247780] hover:bg-[#247780]/10 transition-colors duration-200"
              >
                Explore Operations Platforms
              </a>
              <a
                href="#explore-zoiko-payroll"
                className="border-2 border-[#247780] rounded-[10px] px-[24px] py-[12px] font-inter font-semibold text-[16px] text-[#247780] hover:bg-[#247780]/10 transition-colors duration-200"
              >
                Explore Zoiko Payroll →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
