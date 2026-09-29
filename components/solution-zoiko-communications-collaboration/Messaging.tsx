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

const tableRows = [
  {
    sender: "Sample user A",
    message: "Proposed rollout order for the pilot group.",
    time: "10:02",
    governance: "Internal only",
    badgeBg: "#e6f2f4",
    badgeText: "#14484e",
  },
  {
    sender: "Sample guest B",
    message: "Shared the requirements summary.",
    time: "10:08",
    governance: "Guest · Expires",
    badgeBg: "#fff5d6",
    badgeText: "#6b4e00",
  },
  {
    sender: "Decision",
    message: "Start pilot with one team.",
    time: "10:15",
    governance: "Owner assigned",
    badgeBg: "#e5f5e7",
    badgeText: "#155724",
  },
];

const infoCards = [
  {
    title: "Workspace / team",
    body: "Owner, membership and policy context.",
  },
  {
    title: "Channel / thread",
    body: "Topic areas with explicit permissions.",
  },
  {
    title: "Shared context",
    body: "Decisions, actions and references where supported.",
  },
  {
    title: "Retention",
    body: "Policy-driven lifecycle through admin controls.",
  },
];

export default function Messaging() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.31deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px] items-start"
        >
          <div className="flex gap-[40px] items-center justify-center w-full">
            <div className="flex-1 min-w-0 flex flex-col gap-[19.9px] items-start">
              <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white w-full">
                Messaging and persistent collaboration
              </h2>

              <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
                Keep conversation in durable, permissioned workspaces with
                clear owners, visible guests and policy context.
              </p>

              <div className="flex gap-[39px] items-center w-full">
                <div className="flex-1 min-w-0 grid grid-cols-2 gap-x-[16px] gap-y-[22.5px]">
                  {infoCards.map((card) => (
                    <div
                      key={card.title}
                      className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[5.9px] justify-center h-[165px]"
                    >
                      <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                        {card.title}
                      </h3>
                      <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex-1 min-w-0 h-[372.5px] max-h-[420px] min-h-[280px] relative overflow-hidden rounded-none">
                  <img
                    src="/solution-zoiko-communications-collaboration/messaging-team-discussing-photo.png"
                    alt="Team discussing ideas at a shared desk"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] overflow-auto w-full">
            <table className="w-full min-w-[520px] border-collapse">
              <caption className="text-left px-[14px] pt-[7px] pb-[8.47px] font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85">
                Messaging workspace (specimen content)
              </caption>
              <thead>
                <tr>
                  {["Sender", "Message", "Time", "Governance"].map((h) => (
                    <th
                      key={h}
                      className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.sender + row.time}>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.sender}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.message}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.time}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px]">
                      <span
                        className="inline-flex items-start px-[9px] pb-[1.47px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] whitespace-nowrap"
                        style={{
                          backgroundColor: row.badgeBg,
                          color: row.badgeText,
                        }}
                      >
                        {row.governance}
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
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px] items-start"
        >
          <div className="flex flex-col gap-[40px] items-center w-full">
            <div className="flex flex-col gap-[14.2px] items-start w-full">
              <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
                Messaging and persistent collaboration
              </h2>

              <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
                Keep conversation in durable, permissioned workspaces with
                clear owners, visible guests and policy context.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[16px] w-full pt-[5.8px]">
                {infoCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[5.72px] items-start"
                  >
                    <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                      {card.title}
                    </h3>
                    <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <figure
              className="border border-[rgba(127,208,217,0.4)] rounded-[16px] overflow-hidden relative w-full min-h-[280px]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
              }}
            >
              <img
                src="/solution-zoiko-communications-collaboration/messaging-team-discussing-photo.png"
                alt="Team discussing ideas at a shared desk"
                className="w-full h-[280px] sm:h-[420px] object-cover"
              />
              <figcaption
                className="absolute bottom-0 left-0 right-0 px-[14px] py-[8px] font-inter font-normal text-[12.5px] leading-[19.97px] text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
                }}
              >
                Persistent, permission-bound team communication
              </figcaption>
            </figure>
          </div>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] overflow-auto w-full">
            <table className="w-full min-w-[520px] border-collapse">
              <caption className="text-left px-[14px] pt-[7px] pb-[8.47px] font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85">
                Messaging workspace (specimen content)
              </caption>
              <thead>
                <tr>
                  {["Sender", "Message", "Time", "Governance"].map((h) => (
                    <th
                      key={h}
                      className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.sender + row.time}>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.sender}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.message}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] whitespace-nowrap">
                      {row.time}
                    </td>
                    <td className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px]">
                      <span
                        className="inline-flex items-start px-[9px] pb-[1.47px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] whitespace-nowrap"
                        style={{
                          backgroundColor: row.badgeBg,
                          color: row.badgeText,
                        }}
                      >
                        {row.governance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href="#explore-messaging"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Explore messaging
          </a>
        </motion.div>
      </div>
    </section>
  );
}
