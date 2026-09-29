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
    item: "Decision: adopt pilot plan",
    owner: "Sample lead",
    source: "Weekly sync",
    status: "Confirmed",
    badgeBg: "#e5f5e7",
    badgeText: "#155724",
  },
  {
    item: "Action: draft policy outline",
    owner: "Sample admin",
    source: "Weekly sync",
    status: "Due soon",
    badgeBg: "#fff5d6",
    badgeText: "#6b4e00",
  },
  {
    item: "AI summary",
    owner: "Host",
    source: "Weekly sync",
    status: "Pending review",
    badgeBg: "#e6f2f4",
    badgeText: "#14484e",
  },
];

const desktopCycleItems = [
  {
    icon: "/solution-zoiko-communications-collaboration/meetings-icon-plan.svg",
    title: "Plan",
    lines: ["Participants, purpose,", "guest state, AI policy", "state."],
  },
  {
    icon: "/solution-zoiko-communications-collaboration/meetings-icon-join-conduct.svg",
    title: "Join / conduct",
    lines: ["Audio, video and", "participant behavior at", "approved scope."],
  },
  {
    icon: "/solution-zoiko-communications-collaboration/meetings-icon-capture.svg",
    title: "Capture",
    lines: ["Notes, decisions,", "actions, summaries", "where enabled."],
  },
  {
    icon: "/solution-zoiko-communications-collaboration/meetings-icon-review.svg",
    title: "Review",
    lines: ["Participants review AI or", "human-entered", "artifacts."],
  },
  {
    icon: "/solution-zoiko-communications-collaboration/meetings-icon-assign.svg",
    title: "Assign",
    lines: ["Action owner, due state,", "source meeting."],
  },
  {
    icon: "/solution-zoiko-communications-collaboration/meetings-icon-follow-up.svg",
    title: "Follow up",
    lines: ["Actions stay reachable", "from the workspace."],
  },
];

const tabletCycleItems = [
  {
    title: "Plan",
    lines: ["Participants, purpose,", "guest state, AI policy", "state."],
  },
  {
    title: "Join / conduct",
    lines: ["Audio, video and", "participant behavior at", "approved scope."],
  },
  {
    title: "Capture",
    lines: ["Notes, decisions,", "actions, summaries", "where enabled."],
  },
  {
    title: "Review",
    lines: ["Participants review AI", "or human-entered", "artifacts."],
  },
  {
    title: "Assign",
    lines: ["Action owner, due state,", "source meeting."],
  },
  {
    title: "Follow up",
    lines: ["Actions stay reachable", "from the workspace."],
  },
  {
    title: "Retain / delete",
    lines: ["Retention, legal and", "privacy policy applied."],
  },
];

function MeetingTable() {
  return (
    <div className="border border-[#d5e3e5] rounded-[12px] overflow-auto w-full">
      <table className="w-full min-w-[520px] border-collapse">
        <caption className="text-left px-[14px] pt-[7px] pb-[8.47px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#0a1416] opacity-85">
          Meeting detail (specimen data)
        </caption>
        <thead>
          <tr>
            {["Item", "Owner", "Source", "Status"].map((h) => (
              <th
                key={h}
                className="bg-[#247780] border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] text-left font-inter font-semibold text-[14.7px] leading-[23.55px] text-white whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr key={row.item}>
              <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                {row.item}
              </td>
              <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                {row.owner}
              </td>
              <td className="border-b border-[#d5e3e5] px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] whitespace-nowrap">
                {row.source}
              </td>
              <td className="border-b border-[#d5e3e5] px-[14px] pt-[11.5px] pb-[9.58px]">
                <span
                  className="inline-flex items-start px-[9px] pb-[1.47px] rounded-[6px] font-inter font-semibold text-[12.8px] leading-[20.48px] whitespace-nowrap"
                  style={{ backgroundColor: row.badgeBg, color: row.badgeText }}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AiRuleNote() {
  return (
    <div className="bg-[#e6f2f4] border-l-4 border-[#247780] rounded-tr-[10px] rounded-br-[10px] px-[16px] pt-[10.775px] pb-[12px] w-full max-w-[743px]">
      <p className="font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
        <span className="font-bold">Meeting AI rule.</span> Administrators can
        limit AI by workspace, guest context, sensitivity and retention. AI is
        not automatically active everywhere.
      </p>
    </div>
  );
}

export default function Meetings() {
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
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px] items-start"
        >
          <div className="flex gap-[40px] items-center justify-center w-full">
            <div className="flex-1 min-w-0 min-h-[280px] rounded-[16px] overflow-hidden relative">
              <img
                src="/solution-zoiko-communications-collaboration/meetings-whiteboard-review-photo.png"
                alt="People in a meeting reviewing notes on a whiteboard"
                className="absolute inset-0 w-full h-[280px] object-cover pointer-events-none"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-[19.9px] items-start">
              <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] w-full">
                Meetings and decision capture
              </h2>
              <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
                A meeting is only useful if what was decided stays findable
                and owned. Follow the lifecycle from plan to retention.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[14px] w-full">
            {desktopCycleItems.map((cycleItem) => (
              <div
                key={cycleItem.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] flex flex-col gap-[3.1px] items-start justify-center min-h-[186px]"
              >
                <img
                  src={cycleItem.icon}
                  alt=""
                  className="w-[36px] h-[36px] mb-[6.9px]"
                />
                <b className="font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full not-italic">
                  {cycleItem.title}
                </b>
                <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
                  {cycleItem.lines.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < cycleItem.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <AiRuleNote />

          <MeetingTable />

          <a
            href="#explore-meetings"
            className="bg-[#247780] border-2 border-[#247780] text-white font-inter font-semibold text-[16px] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
          >
            Explore meetings
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[61.44px] pb-[61.44px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px] items-start"
        >
          <div className="flex flex-col gap-[39px] items-center w-full">
            <figure
              className="border border-[rgba(127,208,217,0.4)] rounded-[16px] overflow-hidden relative w-full min-h-[280px]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
              }}
            >
              <img
                src="/solution-zoiko-communications-collaboration/meetings-whiteboard-review-photo.png"
                alt="People in a meeting reviewing notes on a whiteboard"
                className="w-full h-[280px] object-cover"
              />
              <figcaption
                className="absolute bottom-0 left-0 right-0 px-[14px] py-[8px] font-inter font-normal text-[12.5px] leading-[19.97px] text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
                }}
              >
                Meetings that end in owned decisions and actions
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14.16px] items-start w-full">
              <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
                Meetings and decision capture
              </h2>
              <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]">
                A meeting is only useful if what was decided stays findable
                and owned. Follow the lifecycle from plan to retention.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] w-full">
            {tabletCycleItems.map((cycleItem, idx) => (
              <div
                key={idx}
                className={`bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] flex flex-col gap-[3px] items-start min-h-[186px] ${
                  idx === 6 ? "col-span-1" : ""
                }`}
              >
                <span className="bg-[#247780] rounded-[16px] w-[32px] h-[32px] shrink-0" />
                {cycleItem.title && (
                  <b className="font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416] w-full not-italic pt-[7px]">
                    {cycleItem.title}
                  </b>
                )}
                {cycleItem.lines.length > 0 && (
                  <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] w-full">
                    {cycleItem.lines.map((line, lineIdx) => (
                      <React.Fragment key={lineIdx}>
                        {line}
                        {lineIdx < cycleItem.lines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>

          <AiRuleNote />

          <MeetingTable />

          <a
            href="#explore-meetings"
            className="bg-[#247780] border-2 border-[#247780] text-white font-inter font-semibold text-[16px] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200"
          >
            Explore meetings
          </a>
        </motion.div>
      </div>
    </section>
  );
}
