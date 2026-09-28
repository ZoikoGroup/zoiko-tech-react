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

type MetaRow = {
  term: string;
  detail: string;
};

type Card = {
  icon?: string;
  badge?: string;
  badgeVariant?: "green" | "amber";
  title: string | string[];
  description: string[];
  meta?: MetaRow[];
  cta?: string;
  solidBg?: boolean;
};

const cards: Card[] = [
  {
    icon: "AI",
    badge: "Maturity · registry-approved",
    badgeVariant: "green",
    title: "Zoiko AI",
    description: [
      "Governed agentic intelligence infrastructure: AI",
      "architecture, domain AI, responsible AI and",
      "governance.",
    ],
    meta: [
      { term: "Operator", detail: "Per registry" },
      { term: "Workflow role", detail: "Intelligence & governance" },
    ],
    cta: "Explore Zoiko AI →",
  },
  {
    icon: "V",
    badge: "Maturity · registry-approved",
    badgeVariant: "green",
    title: "ZoikoVertex",
    description: [
      "Governed agentic execution evidence for matching",
      "workflows. Supporting proof only, not a marketing-",
      "automation pitch.",
    ],
    meta: [
      { term: "Operator", detail: "Per registry" },
      { term: "Workflow role", detail: "Governed execution" },
    ],
    cta: "Explore ZoikoVertex →",
  },
  {
    icon: "G",
    badge: "Shown only when naming approved",
    badgeVariant: "amber",
    title: ["Zoiko Gesta / Governed Work", "Orchestration"],
    description: [
      "Governed work orchestration evidence. If the name",
      "is not approved, this card uses the generic",
      "capability label or is omitted.",
    ],
    meta: [
      { term: "Operator", detail: "Per registry" },
      { term: "Workflow role", detail: "Work orchestration" },
    ],
    cta: "Explore orchestration →",
  },
  {
    icon: "</>",
    badge: "Preview / Coming where not live",
    badgeVariant: "amber",
    title: "Developer Platform",
    description: [
      "APIs, SDKs, model interfaces, webhooks,",
      "authentication and observability, where live.",
    ],
    cta: "Developer Platform →",
    solidBg: true,
  },
  {
    icon: "✓",
    badge: "Authoritative route",
    badgeVariant: "green",
    title: "Trust Center / Responsible AI",
    description: [
      "The source of record for governance, security,",
      "privacy and assurance. We link to it rather than",
      "repeat claims.",
    ],
    cta: "Open Trust Center →",
    solidBg: true,
  },
  {
    title: "Platform card contract",
    description: [
      "Name · descriptor · maturity · operator · workflow",
      "role · documentation link · Explore CTA. No",
      "unsupported model names, logos, benchmarks or",
      "availability.",
    ],
  },
];

export default function PlatformEvidenceLayer() {
  return (
    <section className="w-full bg-white border-t border-[#0d3632] py-[84px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#10b981] w-full">
            PLATFORM EVIDENCE LAYER
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[513.73px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-[#06231f]">
            Approved platform evidence, shown as evidence.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full md:max-w-[640.5px] pt-[3px]"
        >
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#324b40]">
            Platforms support the solution; they never replace it. Each card shows only publicly
            approved capabilities, maturity, operator and destination.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[28px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {cards.map((card, i) => {
              const titleLines = Array.isArray(card.title) ? card.title : [card.title];
              const isContract = !card.icon && !card.cta;
              return (
                <div
                  key={i}
                  className="border border-[#15503d] border-solid rounded-[14px] flex flex-col items-start p-[24px] relative"
                  style={{
                    backgroundImage: card.solidBg
                      ? undefined
                      : "linear-gradient(160deg, #0a2f2a 0%, #062621 100%)",
                    backgroundColor: card.solidBg ? "#0a2f2a" : undefined,
                  }}
                >
                  {card.icon && (
                    <div className="bg-[#0c3b34] border border-[#10b981] border-solid rounded-[10px] flex items-center justify-center size-[40px]">
                      <span className="font-segoe font-bold text-[16px] leading-[25.6px] text-[#10b981]">
                        {card.icon}
                      </span>
                    </div>
                  )}

                  {card.badge && (
                    <div
                      className={`mt-[14px] border border-solid rounded-[99px] px-[10px] pt-[2px] pb-[3px] inline-flex items-start ${
                        card.badgeVariant === "amber"
                          ? "border-[#f5c451]"
                          : "border-[#10b981]"
                      }`}
                    >
                      <span
                        className={`font-segoe font-normal text-[12px] leading-[19.2px] whitespace-nowrap ${
                          card.badgeVariant === "amber"
                            ? "text-[#f5c451]"
                            : "text-[#10b981]"
                        }`}
                      >
                        {card.badge}
                      </span>
                    </div>
                  )}

                  <div className={card.icon || card.badge ? "mt-[16px]" : ""}>
                    <h3 className="font-segoe font-bold text-[18px] leading-[28.8px] text-white">
                      {titleLines.map((line, li) => (
                        <span key={li} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>

                  <div className="pt-[6px] font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa]">
                    {card.description.map((line, li) => (
                      <p key={li} className="mb-0">
                        {line}
                      </p>
                    ))}
                  </div>

                  {card.meta && (
                    <div className="w-full pt-[14px]">
                      {card.meta.map((row, ri) => (
                        <div
                          key={ri}
                          className="border-t border-[#0f3c37] border-solid flex items-center gap-[8px] py-[5px] w-full"
                        >
                          <span className="font-segoe font-normal text-[13px] leading-[20.8px] text-white min-w-[82px]">
                            {row.term}
                          </span>
                          <span className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#87c7aa]">
                            {row.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.cta && (
                    <p
                      className={`font-segoe font-bold text-[14px] leading-[22.4px] text-[#10b981] ${
                        card.meta ? "pt-[12px]" : "pt-[24px]"
                      } ${isContract ? "" : ""}`}
                    >
                      {card.cta}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
