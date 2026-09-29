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

type AuthCard = {
  icon: string;
  title: string;
  lines: string[];
};

const cards: AuthCard[] = [
  {
    icon: "/solution-zoiko-identity-access/icon-identity-source-user.svg",
    title: "Identity source",
    lines: ["The authoritative identity,", "directory or account source."],
  },
  {
    icon: "/solution-zoiko-identity-access/icon-method-shield.svg",
    title: "Method",
    lines: ["Only methods the product", "officially supports."],
  },
  {
    icon: "/solution-zoiko-identity-access/icon-session-clock.svg",
    title: "Session",
    lines: [
      "Active, expired, revoked or risk-",
      "review states where supported.",
    ],
  },
  {
    icon: "/solution-zoiko-identity-access/icon-recovery-refresh.svg",
    title: "Recovery",
    lines: ["A high-risk flow that needs", "explicit verification and audit."],
  },
  {
    icon: "/solution-zoiko-identity-access/icon-stronger-assurance-star.svg",
    title: "Stronger assurance",
    lines: [
      "An architecture concept for",
      "sensitive actions, not a capability",
      "claim.",
    ],
  },
  {
    icon: "/solution-zoiko-identity-access/icon-evidence-file-text.svg",
    title: "Evidence",
    lines: [
      "Time, assurance context and",
      "result. Secrets are never",
      "exposed.",
    ],
  },
];

export default function AuthenticationSessionTrust() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col items-center gap-[19.9px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-center"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] text-center">
              Authentication and session trust
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] mt-[20px] text-center max-w-[1100px]">
              Authentication is one layer of identity. The control objective
              comes first, and concrete methods appear only from current
              product documentation.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-[16px] items-start justify-center w-full">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                custom={0.1 + i * 0.05}
                className="bg-[#f3f9fa] border border-[#d5e3e5] shadow-[0px_6px_2.65px_rgba(0,0,0,0.25)] rounded-[14px] flex flex-col items-center justify-center gap-[5.875px] p-[20px] w-[283px]"
              >
                <div className="bg-[rgba(16,185,129,0.12)] rounded-[20px] flex items-center justify-center size-[40px]">
                  <img
                    src={card.icon}
                    alt=""
                    className="size-[20px]"
                  />
                </div>
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] text-center w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] text-center w-full">
                  {card.lines.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.43px] pb-[61.45px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.2px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416]">
              Authentication and session trust
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] mt-[14px]">
              Authentication is one layer of identity. The control objective
              comes first, and concrete methods appear only from current
              product documentation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mt-[6px]"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] flex flex-col items-start gap-[5.88px] p-[20px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full">
                  {card.lines.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < card.lines.length - 1 && <br />}
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
            className="bg-[#e6f2f4] border-l-[4px] border-[#247780] rounded-tr-[10px] rounded-br-[10px] px-[16px] pt-[16.575px] pb-[17.81px] w-full mt-[4px]"
          >
            <p className="font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
              <span className="font-semibold">Copy rule.</span> Modern
              identity is not a checklist of protocols or factors. No SSO,
              MFA or passkey support is claimed here.
            </p>
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.2}
            href="#review-authentication"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center justify-center w-fit mt-[4px] hover:bg-[#1c5c62] transition-colors duration-200"
          >
            Review authentication
          </motion.a>
        </div>
      </div>
    </section>
  );
}
