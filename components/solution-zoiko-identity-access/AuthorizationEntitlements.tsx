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

const chainSegmentClass =
  "font-inter font-semibold text-[13.6px] leading-[21.76px] text-white text-center bg-[rgba(255,255,255,0.07)] border border-[rgba(127,208,217,0.5)] rounded-[10px] px-[8px] py-[11px] flex items-center justify-center";

const decisionSegmentClass =
  "font-inter font-semibold text-[13.6px] leading-[21.76px] text-white text-center bg-[rgba(36,119,128,0.6)] border border-[rgba(127,208,217,0.5)] rounded-[10px] px-[8px] py-[11px] flex items-center justify-center";

const plusClass =
  "font-inter font-semibold text-[13.6px] text-[#7fd0d9] px-[4px] flex items-center justify-center";

type EntitlementRow = {
  principal: string;
  resource: string;
  entitlement: string;
  scope: string;
  grantSource: string;
  review: string;
  reviewClass: string;
};

const rows: EntitlementRow[] = [
  {
    principal: "Sample user A (User)",
    resource: "Project workspace",
    entitlement: "Editor",
    scope: "One project",
    grantSource: "Group",
    review: "Current",
    reviewClass: "bg-[#e5f5e7] text-[#155724]",
  },
  {
    principal: "Sample integration D",
    resource: "Reporting API",
    entitlement: "Read",
    scope: "Production",
    grantSource: "Direct",
    review: "Due soon",
    reviewClass: "bg-[#fff5d6] text-[#6b4e00]",
  },
  {
    principal: "Sample agent E",
    resource: "Ticket queue",
    entitlement: "Approve",
    scope: "Team",
    grantSource: "Delegated",
    review: "Expired",
    reviewClass: "bg-[#ffe9e0] text-[#7a2a08]",
  },
];

export default function AuthorizationEntitlements() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.51deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[17px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
              Authorization and entitlements
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] mt-[13.31px] max-w-[686px]">
              Every access decision has a subject, a resource, an action,
              context, a policy and a result.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex items-stretch justify-between w-full pt-[27.2px]"
          >
            <span className={`${chainSegmentClass} w-[174.95px]`}>Subject</span>
            <span className={plusClass}>+</span>
            <span className={`${chainSegmentClass} w-[174.97px]`}>Resource</span>
            <span className={plusClass}>+</span>
            <span className={`${chainSegmentClass} w-[174.95px]`}>Action</span>
            <span className={plusClass}>+</span>
            <span className={`${chainSegmentClass} w-[174.97px]`}>Context</span>
            <span className={plusClass}>+</span>
            <span className={`${chainSegmentClass} w-[174.97px]`}>Policy</span>
            <span className={plusClass}>→</span>
            <span className={`${decisionSegmentClass} w-[174.97px]`}>Decision</span>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]"
          >
            Decisions: allow, deny, approval required, step-up verification
            or exception path, as supported. Evidence shows why access exists,
            who granted it and when it expires.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.2}
            className="border border-[rgba(127,208,217,0.35)] rounded-[12px] overflow-auto py-[13.2px] w-full"
          >
            <div className="min-w-[560px] flex flex-col">
              <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85 px-[14px] pb-[8.47px] pt-[7px]">
                Entitlement matrix (specimen data)
              </p>
              <div className="flex items-stretch justify-center w-full">
                {[
                  "Principal",
                  "Resource",
                  "Entitlement",
                  "Scope",
                  "Grant source",
                  "Review / expiry",
                ].map((h) => (
                  <div
                    key={h}
                    className="bg-[rgba(0,0,0,0.4)] border-b border-[#d5e3e5] flex-1 px-[14px] py-[9px]"
                  >
                    <p className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap">
                      {h}
                    </p>
                  </div>
                ))}
              </div>
              {rows.map((row) => (
                <div
                  key={row.principal}
                  className="flex items-stretch justify-center w-full"
                >
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.principal}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.resource}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.entitlement}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.scope}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.grantSource}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[11.5px]">
                    <span
                      className={`font-inter font-semibold text-[12.8px] leading-[20.48px] rounded-[6px] px-[9px] whitespace-nowrap ${row.reviewClass}`}
                    >
                      {row.review}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.05deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[6.8px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[507.72px]">
              Authorization and entitlements
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] mt-[7.56px]">
              Every access decision has a subject, a resource, an action,
              context, a policy and a result.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col gap-[8px] mt-[19px]"
          >
            <div className="flex flex-wrap items-center gap-[8px]">
              <span className={`${chainSegmentClass} flex-1 min-w-[130px]`}>
                Subject
              </span>
              <span className={plusClass}>+</span>
              <span className={`${chainSegmentClass} flex-1 min-w-[130px]`}>
                Resource
              </span>
              <span className={plusClass}>+</span>
              <span className={`${chainSegmentClass} flex-1 min-w-[130px]`}>
                Action
              </span>
              <span className={plusClass}>+</span>
              <span className={`${chainSegmentClass} flex-1 min-w-[130px]`}>
                Context
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-[8px]">
              <span className={`${chainSegmentClass} flex-1 min-w-[130px]`}>
                Policy
              </span>
              <span className={plusClass}>→</span>
              <span className={`${decisionSegmentClass} flex-1 min-w-[130px]`}>
                Decision
              </span>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] mt-[8px]"
          >
            Decisions: allow, deny, approval required, step-up verification
            or exception path, as supported. Evidence shows why access exists,
            who granted it and when it expires.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.2}
            className="border border-[rgba(127,208,217,0.35)] rounded-[12px] overflow-auto py-[13.2px] w-full mt-[4px]"
          >
            <div className="min-w-[560px] flex flex-col">
              <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85 px-[14px] pb-[8.47px] pt-[7px]">
                Entitlement matrix (specimen data)
              </p>
              <div className="flex items-stretch justify-center w-full">
                {[
                  "Principal",
                  "Resource",
                  "Entitlement",
                  "Scope",
                  "Grant source",
                  "Review / expiry",
                ].map((h) => (
                  <div
                    key={h}
                    className="bg-[rgba(0,0,0,0.4)] border-b border-[#d5e3e5] flex-1 px-[14px] py-[9px]"
                  >
                    <p className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap">
                      {h}
                    </p>
                  </div>
                ))}
              </div>
              {rows.map((row) => (
                <div
                  key={row.principal}
                  className="flex items-stretch justify-center w-full"
                >
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.principal}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.resource}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.entitlement}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.scope}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.grantSource}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[11.5px]">
                    <span
                      className={`font-inter font-semibold text-[12.8px] leading-[20.48px] rounded-[6px] px-[9px] whitespace-nowrap ${row.reviewClass}`}
                    >
                      {row.review}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.25}
            href="#review-access-model"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center justify-center w-fit mt-[16px] hover:bg-white/90 transition-colors duration-200"
          >
            Review access model
          </motion.a>
        </div>
      </div>
    </section>
  );
}
