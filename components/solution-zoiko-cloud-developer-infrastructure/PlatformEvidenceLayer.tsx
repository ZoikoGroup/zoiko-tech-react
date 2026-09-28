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

type EvidenceCard = {
  icon: string;
  alt: string;
  title: string;
  meta: string;
  tagMuted?: boolean;
};

const row1: EvidenceCard[] = [
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/cloud-icon.svg",
    alt: "Cloud icon",
    title: "Infrastructure for Zoiko platforms and regulated workloads.",
    meta: "Per registry",
  },
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/code-icon.svg",
    alt: "Code icon",
    title: "APIs, SDKs, tooling and ecosystem services.",
    meta: "Not implying full self-service",
  },
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/shield-icon.svg",
    alt: "Shield icon",
    title: "Shared control, evidence and transaction infrastructure.",
    meta: "Shown only if customer-facing",
    tagMuted: true,
  },
];

const row2: EvidenceCard[] = [
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/plug-icon.svg",
    alt: "Plug icon",
    title: "Rendered from maintained integration records.",
    meta: "Live · setup · preview · planned",
  },
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/activity-icon.svg",
    alt: "Activity icon",
    title: "Links to the live surface instead of stating uptime.",
    meta: "Live link",
  },
];

function EvidenceCardItem({ card }: { card: EvidenceCard }) {
  return (
    <div className="bg-[#1b2c2e] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.09)] flex flex-1 flex-col gap-4 items-start min-w-[260px] p-[24px] rounded-[16px]">
      <div className="flex items-center justify-between w-full">
        <div className="bg-[rgba(16,185,129,0.12)] flex flex-col items-center justify-center rounded-[12px] shrink-0 size-[48px]">
          <img alt={card.alt} className="size-[24px]" src={card.icon} />
        </div>
        <div className="bg-[rgba(16,185,129,0.12)] flex gap-1 items-center px-[8px] py-[4px] rounded-[100px] shrink-0">
          <img alt="" className="size-[6px]" src="/solution-zoiko-cloud-developer-infrastructure/live-dot.svg" />
          <p className="font-segoe font-bold leading-[normal] text-[10px] text-white whitespace-nowrap">
            LIVE
          </p>
        </div>
      </div>
      <div className="font-segoe font-bold flex flex-col gap-2 items-start text-white w-full">
        <p className="leading-[1.5] text-[14px] w-full">{card.title}</p>
        <p className="leading-[normal] text-[11px] w-full font-normal">{card.meta}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div
          className={`content-stretch flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0 ${
            card.tagMuted ? "bg-[rgba(179,248,255,0.08)]" : "bg-[rgba(197,197,197,0.08)]"
          }`}
        >
          <p
            className={`font-segoe font-bold leading-[normal] text-[11px] whitespace-nowrap ${
              card.tagMuted ? "text-[#717171]" : "text-white"
            }`}
          >
            Infrastructure
          </p>
        </div>
        <div className="flex gap-1 items-center shrink-0">
          <p className="font-segoe font-bold leading-[normal] text-[12px] text-white whitespace-nowrap">
            Explore
          </p>
          <img alt="" className="size-[12px]" src="/solution-zoiko-cloud-developer-infrastructure/arrow-right.svg" />
        </div>
      </div>
    </div>
  );
}

export default function PlatformEvidenceLayer() {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage:
          "linear-gradient(159.44deg, rgb(18, 70, 63) 0%, rgb(8, 28, 26) 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] py-[60px] md:py-[83px] md:pb-[84px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="flex flex-col items-start gap-2.5 w-full"
        >
          <p className="font-segoe font-bold text-[13px] tracking-[1.3px] leading-[20.8px] text-[#8bf2c8]">
            PLATFORM EVIDENCE LAYER
          </p>
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white max-w-[533.76px] mt-2">
            Platform evidence, within approved scope.
          </h2>
          <p className="font-segoe font-normal text-[15px] md:text-[16px] leading-[22px] md:leading-[25.6px] text-[#87c7aa] max-w-[640.5px] mt-1">
            Each card shows maturity, operator and availability as recorded in
            the registry. Nothing is claimed beyond it.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="flex flex-col gap-[18px] items-start w-full pt-6"
        >
          <div className="flex flex-col md:flex-row gap-[18px] items-stretch w-full">
            {row1.map((card) => (
              <EvidenceCardItem key={card.title} card={card} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-[18px] items-stretch w-full">
            {row2.map((card) => (
              <EvidenceCardItem key={card.title} card={card} />
            ))}
            <div className="bg-[#1b2c2e] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.09)] flex flex-1 flex-col gap-4 items-start min-w-[260px] p-[24px] rounded-[16px]">
              <div className="flex items-center justify-between w-full">
                <div className="bg-[rgba(16,185,129,0.12)] flex flex-col items-center justify-center rounded-[12px] shrink-0 size-[48px]">
                  <img
                    alt="File text icon"
                    className="size-[24px]"
                    src="/solution-zoiko-cloud-developer-infrastructure/file-text-icon.svg"
                  />
                </div>
                <div className="bg-[rgba(16,185,129,0.12)] flex gap-1 items-center px-[8px] py-[4px] rounded-[100px] shrink-0">
                  <img alt="" className="size-[6px]" src="/solution-zoiko-cloud-developer-infrastructure/live-dot.svg" />
                  <p className="font-segoe font-bold leading-[normal] text-[10px] text-white whitespace-nowrap">
                    LIVE
                  </p>
                </div>
              </div>
              <div className="font-segoe font-bold text-[14px] text-white w-full">
                <p className="leading-[1.5]">
                  Name · descriptor · maturity · operator · technical role ·
                  availability · docs link · Explore CTA. No unsupported
                  region, uptime, SLA or customer claims.
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="bg-[rgba(197,197,197,0.08)] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                  <p className="font-segoe font-bold leading-[normal] text-[11px] text-white whitespace-nowrap">
                    Infrastructure
                  </p>
                </div>
                <div className="flex gap-1 items-center shrink-0">
                  <p className="font-segoe font-bold leading-[normal] text-[12px] text-white whitespace-nowrap">
                    Explore
                  </p>
                  <img alt="" className="size-[12px]" src="/solution-zoiko-cloud-developer-infrastructure/arrow-right.svg" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
