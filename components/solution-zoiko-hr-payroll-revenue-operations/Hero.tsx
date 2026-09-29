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

const flowBoxClass =
  "font-inter font-normal text-[12.5px] leading-[19.97px] text-white text-center bg-[rgba(255,255,255,0.07)] border border-[rgba(127,208,217,0.45)] rounded-[8px] px-[4px] py-[8px] flex-1 flex items-center justify-center min-w-[90px]";

const governanceBoxClass =
  "font-inter font-normal text-[12.5px] leading-[19.97px] text-white text-center bg-[rgba(36,119,128,0.55)] border border-[rgba(127,208,217,0.45)] rounded-[8px] px-[4px] py-[8px] flex-1 flex items-center justify-center min-w-[90px]";

type Lane = {
  label: string;
  steps: string[];
  handoff: string;
  governance?: boolean;
};

const lanes: Lane[] = [
  {
    label: "People / HR",
    steps: ["Source record", "Validate", "Exception", "Approve"],
    handoff: "Handoff",
  },
  {
    label: "Payroll",
    steps: ["Approved inputs", "Validate", "Exception", "Approve"],
    handoff: "Release",
  },
  {
    label: "Billing / Revenue",
    steps: ["Billable source", "Validate", "Exception", "Approve"],
    handoff: "Issue",
  },
];

const governanceLane = ["Identity", "Data", "Policy", "Evidence"];

export default function Hero() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[99px] lg:pb-[100px] lg:px-[96px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(140.26deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1248px] mx-auto flex items-center justify-center gap-[40px]"
        >
          <div className="flex-1 min-w-0 max-w-[599px] flex flex-col items-start">
            <span className="font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[10px] py-[1px]">
              HR, Payroll &amp; Revenue Operations
            </span>

            <h1 className="font-plus-jakarta font-bold text-[44px] lg:text-[57.6px] leading-[50px] lg:leading-[66.24px] tracking-[-1.152px] text-white mt-[25px]">
              Run recurring people and revenue operations with
              <br />
              clearer control from input to outcome.
            </h1>

            <p className="font-inter font-normal text-[17.6px] leading-[28.16px] text-[#dcecee] mt-[35px]">
              Zoiko Tech connects HR operations, payroll workflows, billing
              and recurring business processes through governed handoffs,
              authoritative data, approvals, exception management and
              evidence — while preserving the specialist controls each
              operating domain requires.
            </p>

            <div className="flex flex-wrap items-center gap-[12px] mt-[19px]">
              <a
                href="#discuss-operating-model"
                className="font-inter font-semibold text-[16px] leading-[25.6px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
              >
                Discuss your operating model
              </a>
              <a
                href="#explore-operations-platforms"
                className="font-inter font-semibold text-[16px] leading-[25.6px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
              >
                Explore Operations Platforms
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-0 w-full max-w-[642px] flex justify-end">
            <img
              src="/solution-zoiko-hr-payroll-revenue-operations/hero-operations-dashboard.png"
              alt="HR, payroll and revenue operations dashboard illustration showing input, automated workflows, people operations, and business outcomes panels"
              className="w-full h-auto object-contain pointer-events-none"
            />
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[40px] pb-[46px] px-[24px] sm:pt-[60.44px] sm:pb-[61.43px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(130.56deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start"
        >
          <p className="font-inter font-normal text-[13.6px] leading-[21.76px] text-[#7fd0d9] break-words">
            Home / Solutions / HR, Payroll &amp; Revenue Operations
          </p>

          <span className="inline-block font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[10px] py-[1px] mt-[25px]">
            HR, Payroll &amp; Revenue Operations
          </span>

          <h1 className="font-sora font-bold text-[28px] sm:text-[38.4px] leading-[34px] sm:leading-[44.16px] tracking-[-0.768px] text-white mt-[19px]">
            Run recurring people and revenue operations with clearer control
            from input to outcome.
          </h1>

          <p className="font-inter font-normal text-[17.6px] leading-[28.16px] text-[#dcecee] mt-[23px]">
            Zoiko Tech connects HR operations, payroll workflows, billing and
            recurring business processes through governed handoffs,
            authoritative data, approvals, exception management and evidence
            — while preserving the specialist controls each operating domain
            requires.
          </p>

          <div className="flex flex-wrap items-center gap-[12px] mt-[19px]">
            <a
              href="#discuss-operating-model"
              className="font-inter font-semibold text-[16px] leading-[25.6px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
            >
              Discuss your operating model
            </a>
            <a
              href="#explore-operations-platforms"
              className="font-inter font-semibold text-[16px] leading-[25.6px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
            >
              Explore Operations Platforms
            </a>
          </div>

          <a
            href="#explore-zoiko-payroll"
            className="font-inter font-semibold text-[16px] leading-[25.6px] text-[#7fd0d9] underline mt-[12px] inline-block"
          >
            Explore Zoiko Payroll →
          </a>

          <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#a9c9cd] mt-[12px]">
            Authoritative inputs. Explicit ownership. Controlled approvals.
            Evidence-aware operations.
          </p>

          <div className="flex flex-col gap-[10px] w-full mt-[37px]">
            {lanes.map((lane) => (
              <div key={lane.label} className="flex flex-col gap-[8px] w-full">
                <div className="flex items-center gap-[12px] w-full">
                  <span className="font-inter font-bold text-[14.4px] leading-[23px] text-[#7fd0d9] w-[110px] sm:w-[150px] shrink-0">
                    {lane.label}
                  </span>
                  <div className="flex flex-1 flex-wrap gap-[6px] justify-center">
                    {lane.steps.map((step) => (
                      <span key={step} className={flowBoxClass}>
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-inter font-normal text-[12.5px] leading-[19.97px] text-white text-center bg-[rgba(255,255,255,0.07)] border border-[rgba(127,208,217,0.45)] rounded-[8px] px-[4px] py-[8px] ml-[122px] sm:ml-[162px]">
                  {lane.handoff}
                </span>
              </div>
            ))}

            <div className="flex items-center gap-[12px] w-full">
              <span className="font-inter font-bold text-[14.4px] leading-[23px] text-[#7fd0d9] w-[110px] sm:w-[150px] shrink-0">
                Shared governance
              </span>
              <div className="flex flex-1 flex-wrap gap-[6px] justify-center">
                {governanceLane.map((item) => (
                  <span key={item} className={governanceBoxClass}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
