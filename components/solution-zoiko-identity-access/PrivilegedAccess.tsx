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

const cards = [
  {
    title: "Privileged role",
    lines: [
      "High-impact admin,",
      "security, billing or",
      "compliance authority.",
    ],
  },
  {
    title: "Eligibility",
    lines: ["Who may request or", "hold it, and in what", "scope."],
  },
  {
    title: "Approval",
    lines: ["Authorized approver", "with rationale or", "context."],
  },
  {
    title: "Time / scope boundary",
    lines: ["Temporary or bounded.", "No JIT or PAM claim."],
  },
  {
    title: "Sensitive action",
    lines: ["Extra confirmation or", "verification."],
  },
  {
    title: "Review / revoke",
    lines: ["Expiry and immediate", "revoke path."],
  },
  {
    title: "Evidence",
    lines: ["Grant, use, approval and", "revocation history."],
  },
];

const cardClass =
  "bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] p-[18px] flex flex-col gap-[6px]";
const cardTitleClass =
  "font-sora font-bold text-[16px] leading-[25.6px] text-[#0a1416]";
const cardBodyClass =
  "font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468]";

function Bullet({ card }: { card: (typeof cards)[number] }) {
  return (
    <div className={cardClass}>
      <div className="bg-[#247780] rounded-full size-[32px]" />
      <h3 className={cardTitleClass}>{card.title}</h3>
      <p className={cardBodyClass}>
        {card.lines.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < card.lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default function PrivilegedAccess() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:px-[130px] lg:py-[96px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[19.9px] pb-[12px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
              Privileged and sensitive access
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px] mt-[12px]">
              High-impact authority is kept separate from routine work. This
              is a recommended pattern; product support requires validation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-5 gap-[14px] w-full"
          >
            {cards.map((card) => (
              <Bullet key={card.title} card={card} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.2px] pb-[12px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start"
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[507px]">
              Privileged and sensitive access
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px] mt-[10px]">
              High-impact authority is kept separate from routine work. This
              is a recommended pattern; product support requires validation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] w-full"
          >
            {cards.map((card) => (
              <Bullet key={card.title} card={card} />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="border border-[#d5e3e5] rounded-[12px] overflow-auto w-full"
          >
            <table className="min-w-[560px] w-full border-collapse">
              <caption className="text-left px-[14px] py-[7px] font-inter font-normal text-[12.8px] leading-[20.48px] text-[#0a1416] opacity-85">
                Privileged access request (specimen data)
              </caption>
              <thead>
                <tr className="bg-[#247780]">
                  <th className="w-[160.89px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Requested authority
                  </th>
                  <th className="w-[139.56px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Scope
                  </th>
                  <th className="w-[109.45px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Duration
                  </th>
                  <th className="w-[134.36px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Approver
                  </th>
                  <th className="w-[144.95px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    State
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                    Billing administrator
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                    One organization
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                    Time-limited
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] border-b border-[#d5e3e5]">
                    Access approver
                  </td>
                  <td className="px-[14px] py-[10px] border-b border-[#d5e3e5]">
                    <span className="inline-flex items-start px-[9px] rounded-[6px] bg-[#fff5d6] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#6b4e00]">
                      Approval required
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.2}
            href="#review-privileged-access"
            className="bg-[#247780] border-2 border-[#247780] rounded-[10px] min-h-[48px] px-[24px] py-[12px] flex items-center font-inter font-semibold text-[16px] text-white hover:bg-[#1c5c62] transition-colors duration-200"
          >
            Review privileged access
          </motion.a>
        </div>
      </div>
    </section>
  );
}
