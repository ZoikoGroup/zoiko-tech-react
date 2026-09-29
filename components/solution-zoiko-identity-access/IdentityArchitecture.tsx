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

type LayerRow = {
  label: string;
  description: string;
  question: string;
  dark: boolean;
};

const layers: LayerRow[] = [
  {
    label: "L7 Evidence / review",
    description:
      "Decision, grant source, approver, session context, review and expiry.",
    question: "Can authority be explained and reviewed?",
    dark: false,
  },
  {
    label: "L6 Resource / application",
    description: "Platform, API, data or administrative action being protected.",
    question: "What is being accessed?",
    dark: false,
  },
  {
    label: "L5 Entitlements / roles",
    description:
      "Role, group, permission, scope, temporary or delegated authority.",
    question: "What authority exists?",
    dark: false,
  },
  {
    label: "L4 Authorization decision",
    description: "Subject + resource + action + context + policy.",
    question: "Is this actor allowed?",
    dark: false,
  },
  {
    label: "L3 Authentication",
    description: "Proof of identity and session establishment.",
    question: "How is identity established?",
    dark: true,
  },
  {
    label: "L2 Identity record & ownership",
    description: "Subject, status, owner, attributes, relationships.",
    question: "What do we know about it?",
    dark: true,
  },
  {
    label: "L1 Identity sources",
    description: "Workforce, customer / partner, service, application sources.",
    question: "Who or what is the identity?",
    dark: true,
  },
];

export default function IdentityArchitecture() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[19.9px] pb-[12px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
            Identity and authority architecture
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            The access-decision chain, from who is acting to how authority is
            reviewed. Read from the bottom layer up.
          </p>

          <div className="flex flex-col gap-[10px] w-full pt-[4.1px]">
            {layers.map((layer) =>
              layer.dark ? (
                <div
                  key={layer.label}
                  className="flex items-center gap-[12px] rounded-[12px] px-[18px] py-[13px] w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(0,0,0), #247780)",
                  }}
                >
                  <span className="font-sora font-bold text-[15.2px] leading-[24.32px] text-white w-[210px] shrink-0">
                    {layer.label}
                  </span>
                  <span className="font-inter font-normal text-[16px] leading-[25.6px] text-white flex-1 min-w-0">
                    {layer.description}
                  </span>
                  <span className="font-inter font-semibold text-[16px] leading-[25.6px] text-white flex-1 min-w-0">
                    {layer.question}
                  </span>
                </div>
              ) : (
                <div
                  key={layer.label}
                  className="flex items-center gap-[12px] bg-[#f3f9fa] border border-[#d5e3e5] rounded-[12px] px-[18px] py-[13px] w-full"
                >
                  <span className="font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416] w-[210px] shrink-0">
                    {layer.label}
                  </span>
                  <span className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] flex-1 min-w-0">
                    {layer.description}
                  </span>
                  <span className="font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780] flex-1 min-w-0">
                    {layer.question}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.2px] pb-[12.01px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[508px]">
            Identity and authority architecture
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
            The access-decision chain, from who is acting to how authority is
            reviewed. Read from the bottom layer up.
          </p>

          <div className="flex flex-col gap-[10px] w-full py-[9.8px]">
            {layers.map((layer) =>
              layer.dark ? (
                <div
                  key={layer.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-[6px] sm:gap-[12px] rounded-[12px] px-[18px] py-[13px] w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(0,0,0), #247780)",
                  }}
                >
                  <span className="font-sora font-bold text-[15.2px] leading-[24.32px] text-white sm:w-[210px] sm:shrink-0">
                    {layer.label}
                  </span>
                  <span className="font-inter font-normal text-[16px] leading-[25.6px] text-white flex-1 min-w-0">
                    {layer.description}
                  </span>
                  <span className="font-inter font-semibold text-[16px] leading-[25.6px] text-white flex-1 min-w-0">
                    {layer.question}
                  </span>
                </div>
              ) : (
                <div
                  key={layer.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-[6px] sm:gap-[12px] bg-[#f3f9fa] border border-[#d5e3e5] rounded-[12px] px-[18px] py-[13px] w-full"
                >
                  <span className="font-sora font-bold text-[15.2px] leading-[24.32px] text-[#0a1416] sm:w-[210px] sm:shrink-0">
                    {layer.label}
                  </span>
                  <span className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] flex-1 min-w-0">
                    {layer.description}
                  </span>
                  <span className="font-inter font-semibold text-[16px] leading-[25.6px] text-[#247780] flex-1 min-w-0">
                    {layer.question}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="bg-[#e6f2f4] border-l-4 border-[#247780] rounded-tr-[10px] rounded-br-[10px] px-[16px] pt-[11.05px] pb-[17.8px] w-full max-w-[742.84px]">
            <p className="font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
              <span className="font-bold">Architecture claims boundary.</span>{" "}
              This is a recommended enterprise control model. Directory,
              federation, MFA, passkey, SCIM, policy-engine and session
              support must come from an approved Zoiko iD / Zoiko Access
              specification before it is represented as live.
            </p>
          </div>

          <a
            href="#"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5c62] transition-colors duration-200"
          >
            View architecture
          </a>
        </motion.div>
      </div>
    </section>
  );
}
