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

const stateCardClass =
  "font-inter text-[14.4px] leading-[23px] text-[#dcecee] bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[10px] px-[16px] py-[10px]";

type IdentityRow = {
  identity: string;
  type: string;
  source: string;
  owner: string;
  status: string;
  statusClass: string;
  exception: string;
  exceptionClass?: string;
};

const identityRows: IdentityRow[] = [
  {
    identity: "Sample user A",
    type: "User",
    source: "Workforce",
    owner: "Manager",
    status: "Active",
    statusClass: "bg-[#e5f5e7] text-[#155724]",
    exception: "None",
  },
  {
    identity: "Sample service B",
    type: "Service",
    source: "Application",
    owner: "—",
    status: "Review required",
    statusClass: "bg-[#fff5d6] text-[#6b4e00]",
    exception: "Orphaned",
    exceptionClass: "bg-[#ffe9e0] text-[#7a2a08]",
  },
  {
    identity: "Sample partner C",
    type: "External",
    source: "Partner",
    owner: "Sponsor",
    status: "Suspended",
    statusClass: "bg-[#e6f2f4] text-[#14484e]",
    exception: "Conflicting source",
  },
];

export default function IdentityLifecycle() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full bg-[#fefefe]">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col items-center gap-[20px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-center"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0f3c37] text-center">
              Identity lifecycle
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#06231f] mt-[20px] text-center">
              Authority changes as identities change. Each state has clear
              access behavior.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="w-full border border-[rgba(127,208,217,0.35)] rounded-[12px] overflow-auto"
          >
            <img
              src="/solution-zoiko-identity-access/identity-lifecycle-diagram.png"
              alt="Identity lifecycle states: pending/invited, active, changed, review required, suspended, revoked, archived/closed"
              className="w-[1179px] h-[786px] object-cover pointer-events-none"
            />
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
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.4px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
              Identity lifecycle
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] mt-[14.4px]">
              Authority changes as identities change. Each state has clear
              access behavior.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col gap-[8px] mt-[10px]"
          >
            <div className="flex flex-wrap gap-[8px]">
              <div className={`${stateCardClass} flex-1 min-w-[140px]`}>
                <p className="font-semibold">Pending / invited</p>
                <p>Not fully active</p>
              </div>
              <div className={`${stateCardClass} flex-1 min-w-[140px]`}>
                <p className="font-semibold">Active</p>
                <p>Valid, approved access</p>
              </div>
              <div className={`${stateCardClass} flex-1 min-w-[140px]`}>
                <p className="font-semibold">Changed</p>
                <p>Access review may be needed</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-[8px]">
              <div className={`${stateCardClass} flex-1 min-w-[140px]`}>
                <p className="font-semibold">Review required</p>
                <p>Needs confirmation</p>
              </div>
              <div className={`${stateCardClass} flex-1 min-w-[140px]`}>
                <p className="font-semibold">Suspended</p>
                <p>Blocked, record kept</p>
              </div>
              <div className={`${stateCardClass} flex-1 min-w-[140px]`}>
                <p className="font-semibold">Revoked</p>
                <p>Authority removed</p>
              </div>
              <div className={`${stateCardClass} flex-1 min-w-[140px]`}>
                <p className="font-semibold">Archived / closed</p>
                <p>Evidence retained</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="border border-[rgba(127,208,217,0.35)] rounded-[12px] overflow-auto py-[9.6px] mt-[4px]"
          >
            <div className="min-w-[560px] flex flex-col">
              <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85 px-[14px] pb-[8.47px] pt-[7px]">
                Identity detail (specimen data)
              </p>
              <div className="flex items-stretch justify-center w-full">
                {["Identity", "Type", "Source", "Owner", "Status", "Exception"].map(
                  (h) => (
                    <div
                      key={h}
                      className="bg-[rgba(0,0,0,0.4)] border-b border-[#d5e3e5] flex-1 px-[14px] py-[9px]"
                    >
                      <p className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap">
                        {h}
                      </p>
                    </div>
                  )
                )}
              </div>
              {identityRows.map((row) => (
                <div
                  key={row.identity}
                  className="flex items-stretch justify-center w-full"
                >
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                      {row.identity}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                      {row.type}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                      {row.source}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                      {row.owner}
                    </p>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[11.5px]">
                    <span
                      className={`font-inter font-semibold text-[12.8px] leading-[20.48px] rounded-[6px] px-[9px] whitespace-nowrap ${row.statusClass}`}
                    >
                      {row.status}
                    </span>
                  </div>
                  <div className="border-b border-[rgba(127,208,217,0.2)] flex-1 px-[14px] py-[10px]">
                    {row.exceptionClass ? (
                      <span
                        className={`font-inter font-semibold text-[12.8px] leading-[20.48px] rounded-[6px] px-[9px] whitespace-nowrap ${row.exceptionClass}`}
                      >
                        {row.exception}
                      </span>
                    ) : (
                      <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                        {row.exception}
                      </p>
                    )}
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
            custom={0.2}
            href="#explore-lifecycle"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center justify-center w-fit mt-[15px] hover:bg-white/90 transition-colors duration-200"
          >
            Explore lifecycle
          </motion.a>
        </div>
      </div>
    </section>
  );
}
