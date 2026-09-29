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

const adminCards = [
  {
    title: "Users & groups",
    lines: ["Invitations, groups, guests and", "provisioning at approved scope."],
  },
  {
    title: "Roles & permissions",
    lines: [
      "Workspace, security,",
      "compliance, integration and AI",
      "governance roles.",
    ],
  },
  {
    title: "Authentication",
    lines: ["SSO, MFA, sessions and devices", "only where approved."],
  },
  {
    title: "Security policy",
    lines: ["Access, domain, session and", "alert controls where supported."],
  },
  {
    title: "Compliance & data",
    lines: ["Retention, legal hold, exports and", "audit logs where supported."],
  },
  {
    title: "AI governance",
    lines: ["Central controls, exclusions and", "retention."],
  },
];

const tableRows: { area: string; state: string; bg: string; text: string }[] = [
  { area: "Workspaces", state: "Configured", bg: "#e5f5e7", text: "#155724" },
  { area: "Guest access", state: "Needs review", bg: "#fff5d6", text: "#6b4e00" },
  {
    area: "Sensitive spaces",
    state: "Locked / restricted",
    bg: "#e6f2f4",
    text: "#14484e",
  },
  {
    area: "Calendar integration",
    state: "Pending setup",
    bg: "#ffe9e0",
    text: "#7a2a08",
  },
];

export default function AdminControls() {
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px] pb-[12px]"
        >
          <div className="flex items-center gap-[40px] w-full">
            <div className="flex-1 min-w-0 flex flex-col items-start pb-[16px] gap-[20px]">
              <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
                Administration, security and compliance
              </h2>
              <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
                Policy lives in one governed layer, at the scope the product
                supports.
              </p>
            </div>

            <div className="flex-1 min-w-0 border border-[rgba(127,208,217,0.4)] rounded-[16px] overflow-clip min-h-[280px]">
              <div className="h-[280px] max-h-[420px] min-h-[280px] w-full overflow-hidden">
                <img
                  src="/solution-zoiko-communications-collaboration/admin-team-whiteboard-review-photo.png"
                  alt="Team reviewing plans and policy on a whiteboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-[16px] w-full">
            {adminCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] overflow-auto w-full">
            <table className="w-full min-w-[520px] border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9.5px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap">
                    Area
                  </th>
                  <th className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9.5px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap">
                    Policy state
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.area}>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.area}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px]">
                      <span
                        className="inline-flex items-start px-[9px] py-[1.5px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] whitespace-nowrap"
                        style={{ backgroundColor: row.bg, color: row.text }}
                      >
                        {row.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.64px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px] pb-[12px]"
        >
          <div className="flex flex-col items-start gap-[14px] pb-[16px] w-full">
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
              Administration, security and compliance
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
              Policy lives in one governed layer, at the scope the product
              supports.
            </p>
          </div>

          <figure
            className="border border-[rgba(127,208,217,0.4)] rounded-[16px] overflow-clip relative w-full min-h-[280px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
            }}
          >
            <img
              src="/solution-zoiko-communications-collaboration/admin-team-whiteboard-review-photo.png"
              alt="Team reviewing plans and policy on a whiteboard"
              className="w-full h-[280px] object-cover"
            />
            <figcaption
              className="absolute bottom-0 left-0 right-0 px-[14px] py-[8px] font-inter font-normal text-[12.5px] leading-[19.97px] text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
              }}
            >
              One administration layer for policy and evidence
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
            {adminCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[20px] flex flex-col items-start gap-[6px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <div className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-[#d5e3e5] rounded-[12px] overflow-auto w-full">
            <table className="w-full min-w-[520px] border-collapse">
              <caption className="text-left px-[14px] pt-[7px] pb-[8.47px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#0a1416] opacity-85">
                Admin overview (specimen states)
              </caption>
              <thead>
                <tr>
                  <th className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9.5px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap">
                    Area
                  </th>
                  <th className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] py-[9.5px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap">
                    Policy state
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.area}>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                      {row.area}
                    </td>
                    <td className="border-b border-[#d5e3e5] px-[14px] py-[10px]">
                      <span
                        className="inline-flex items-start px-[9px] py-[1.5px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] whitespace-nowrap"
                        style={{ backgroundColor: row.bg, color: row.text }}
                      >
                        {row.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href="#trust-center"
            className="bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center font-inter font-semibold text-[16px] text-white hover:bg-[#1c5f66] transition-colors duration-200"
          >
            Trust Center
          </a>
        </motion.div>
      </div>
    </section>
  );
}
