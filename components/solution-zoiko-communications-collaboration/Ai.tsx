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

const aiItems = [
  {
    title: "Summaries",
    lines: ["Who can generate, view, edit and", "share."],
  },
  {
    title: "Action extraction",
    lines: ["Enable or disable by scope, with", "human review."],
  },
  {
    title: "Decision capture",
    lines: ["Structured assistance, not", "authoritative decisions."],
  },
  {
    title: "External meetings",
    lines: ["Defined rules for guests and", "external participants."],
  },
  {
    title: "Sensitive-space exclusions",
    lines: ["Disable or restrict in confidential", "areas."],
  },
  {
    title: "Retention & audit",
    lines: [
      "Retention for AI outputs and",
      "visibility into when AI was used.",
    ],
  },
];

type BadgeTone = "allowed" | "review" | "disabled" | "restricted";

const badgeStyles: Record<BadgeTone, string> = {
  allowed: "bg-[#e5f5e7] text-[#155724]",
  review: "bg-[#fff5d6] text-[#6b4e00]",
  disabled: "bg-[#ffe9e0] text-[#7a2a08]",
  restricted: "bg-[#ffe9e0] text-[#7a2a08]",
};

function Badge({ tone, children }: { tone: BadgeTone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-start rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] ${badgeStyles[tone]}`}
    >
      {children}
    </span>
  );
}

export default function Ai() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(132.83deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
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
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698.05px]">
            AI-assisted communication, under control
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686.38px]">
            AI feels governed, auditable and reviewable. Human owners stay
            accountable.
          </p>

          <div className="grid grid-cols-3 gap-x-[16px] gap-y-[16px] w-full">
            {aiItems.map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px] items-start justify-center"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
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

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <div className="min-w-[520px] w-full">
              <div className="flex w-full">
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[290.13px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Workspace
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[271.38px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Summaries
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[365.45px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Guests
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[251.05px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Retention
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[290.13px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Project team
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[271.38px]">
                  <Badge tone="allowed">Allowed</Badge>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[365.45px]">
                  <Badge tone="review">Review required</Badge>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[251.05px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Per policy
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[290.13px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Legal
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[271.38px]">
                  <Badge tone="disabled">Disabled</Badge>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[365.45px]">
                  <Badge tone="restricted">Restricted</Badge>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[251.05px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Legal hold
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#review-ai-controls"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Review AI controls
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.64px] pb-[61.44px] px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(134.99deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.4px] items-start"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[507.73px]">
            AI-assisted communication, under control
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686.38px]">
            AI feels governed, auditable and reviewable. Human owners stay
            accountable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[16px] w-full">
            {aiItems.map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px] items-start"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
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

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <div className="min-w-[520px] w-full">
              <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85 px-[14px] pt-[7px] pb-[8.47px]">
                AI governance panel (specimen states)
              </p>
              <div className="flex w-full">
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[169.73px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Workspace
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[158.77px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Summaries
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[213.81px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Guests
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[146.91px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Retention
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[169.73px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Project team
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[158.77px]">
                  <Badge tone="allowed">Allowed</Badge>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[213.81px]">
                  <Badge tone="review">Review required</Badge>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[146.91px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Per policy
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[169.73px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Legal
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[158.77px]">
                  <Badge tone="disabled">Disabled</Badge>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[213.81px]">
                  <Badge tone="restricted">Restricted</Badge>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[146.91px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Legal hold
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#review-ai-controls"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Review AI controls
          </a>
        </motion.div>
      </div>
    </section>
  );
}
