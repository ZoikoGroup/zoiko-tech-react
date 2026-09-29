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
    title: "Service / workload",
    lines: ["Owner, purpose, environment,", "permissions, rotation and review."],
  },
  {
    title: "Integration",
    lines: ["Owner, connected applications,", "scopes, events and health."],
  },
  {
    title: "API / automation client",
    lines: ["Purpose, environment, scopes", "and last-used state."],
  },
  {
    title: "AI / agent",
    lines: [
      "Named workflow, accountable",
      "owner, allowed actions and",
      "delegated authority.",
    ],
  },
  {
    title: "Orphaned identity",
    lines: [
      "No owner or dependency. Route",
      "to review and revoke rather than",
      "silently retain.",
    ],
  },
];

const cardClass =
  "bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px]";
const cardTitleClass =
  "font-sora font-bold text-[16.8px] leading-[19.32px] text-white";
const cardBodyClass =
  "font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]";

export default function MachineIdentity() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:px-[130px] lg:py-[96px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(140.06deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[19.9px] pb-[12px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
              Service, integration and agent identity
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px] mt-[12px]">
              Systems must be authenticated as well as people. AI agents are
              governed identities with an accountable human owner.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-4 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
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
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="border border-[rgba(127,208,217,0.35)] rounded-[12px] overflow-auto w-full"
          >
            <table className="min-w-[560px] w-full border-collapse">
              <caption className="text-left px-[14px] py-[7px] font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85">
                Service / agent identity (specimen metadata only)
              </caption>
              <thead>
                <tr className="bg-[rgba(0,0,0,0.4)]">
                  <th className="w-[189.3px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Identity
                  </th>
                  <th className="w-[176.86px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Owner
                  </th>
                  <th className="w-[163.64px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Environment
                  </th>
                  <th className="w-[373.83px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Credential
                  </th>
                  <th className="w-[164.38px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Scope
                  </th>
                  <th className="w-[110px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Review
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Sample agent E
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Sample owner
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Staging
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Created &middot; Last used &middot; Expiry shown
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Ticket queue
                  </td>
                  <td className="px-[14px] py-[10px] border-b border-[rgba(127,208,217,0.2)]">
                    <span className="inline-flex items-start px-[9px] rounded-[6px] bg-[#fff5d6] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#6b4e00]">
                      Due
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.03deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.2px] pb-[12px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start"
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[507px]">
              Service, integration and agent identity
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px] mt-[10px]">
              Systems must be authenticated as well as people. AI agents are
              governed identities with an accountable human owner.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
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
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="border border-[rgba(127,208,217,0.35)] rounded-[12px] overflow-auto w-full"
          >
            <table className="min-w-[560px] w-full border-collapse">
              <caption className="text-left px-[14px] py-[7px] font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85">
                Service / agent identity (specimen metadata only)
              </caption>
              <thead>
                <tr className="bg-[rgba(0,0,0,0.4)]">
                  <th className="w-[108.98px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Identity
                  </th>
                  <th className="w-[103.31px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Owner
                  </th>
                  <th className="w-[117.81px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Environment
                  </th>
                  <th className="w-[184.45px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Credential
                  </th>
                  <th className="w-[95.45px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Scope
                  </th>
                  <th className="w-[79.2px] text-left px-[14px] py-[10px] font-inter font-semibold text-[14.7px] leading-[23.55px] text-white border-b border-[#d5e3e5]">
                    Review
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Sample agent E
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Sample owner
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Staging
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Created &middot; Last used &middot; Expiry shown
                  </td>
                  <td className="px-[14px] py-[10px] font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee] border-b border-[rgba(127,208,217,0.2)]">
                    Ticket queue
                  </td>
                  <td className="px-[14px] py-[10px] border-b border-[rgba(127,208,217,0.2)]">
                    <span className="inline-flex items-start px-[9px] rounded-[6px] bg-[#fff5d6] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#6b4e00]">
                      Due
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.2}
            className="bg-[rgba(0,0,0,0.35)] border-l-4 border-[#7fd0d9] rounded-tr-[10px] rounded-br-[10px] px-[16px] py-[16px] max-w-[742px] w-full"
          >
            <p className="font-inter text-[14.7px] leading-[23.55px] text-[#dcecee]">
              <span className="font-bold">Credential-safety rule.</span>{" "}
              <span className="font-normal">
                Mockups never reveal keys, tokens, passwords or production
                identifiers.
              </span>
            </p>
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.25}
            href="#explore-machine-identity"
            className="bg-white border-2 border-white rounded-[10px] min-h-[48px] px-[24px] py-[12px] flex items-center font-inter font-semibold text-[16px] text-black hover:bg-white/90 transition-colors duration-200"
          >
            Explore machine identity
          </motion.a>
        </div>
      </div>
    </section>
  );
}
