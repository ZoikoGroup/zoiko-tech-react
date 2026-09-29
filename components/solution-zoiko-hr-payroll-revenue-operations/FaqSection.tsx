"use client";

import React, { useState } from "react";
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

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "What is Zoiko Tech HR, Payroll & Revenue Operations?",
    answer:
      "Zoiko Tech is an integrated suite designed to streamline your organization's core operational functions. It combines HR management, global payroll processing, and revenue operations into a single, unified platform.",
  },
  {
    question: "Which Zoiko platforms support this solution?",
    answer:
      "Our solution is powered by ZoikoAssure, ZoikoNex, and our proprietary AI intelligence layer. These platforms work in tandem to provide a seamless experience for your teams.",
  },
  {
    question: "Does Zoiko provide global payroll in every country?",
    answer:
      "We offer comprehensive payroll coverage in over 180 countries. While we support global operations, specific compliance requirements are handled through our localized network of partners.",
  },
  {
    question:
      "Does Zoiko Billing include payments, collections, tax or accounting?",
    answer:
      "Our billing engine is focused on unified revenue recognition and subscription management. We integrate seamlessly with your existing accounting systems to ensure end-to-end financial accuracy.",
  },
  {
    question: "How should exceptions be handled?",
    answer:
      "Our platform includes a robust exception management workflow. Automated alerts notify your team of discrepancies, allowing for quick resolution and maintaining data integrity.",
  },
  {
    question: "How do HR and payroll data stay consistent?",
    answer:
      "We utilize a single source of truth for employee data. Any changes made in HR are automatically synced to payroll in real-time, eliminating manual reconciliation.",
  },
  {
    question: "How do we start?",
    answer:
      "Contact our sales team to schedule a demo. We'll tailor a rollout plan based on your organization's specific needs and current infrastructure.",
  },
];

type PlatformCard = {
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoAlt: string;
  description: string;
};

const platformCards: PlatformCard[] = [
  {
    logo: "/solution-zoiko-hr-payroll-revenue-operations/logo-zoiko-assure.png",
    logoWidth: 107,
    logoHeight: 43,
    logoAlt: "ZoikoAssure logo",
    description: "Smart compliance, automated audits & corporate governance.",
  },
  {
    logo: "/solution-zoiko-hr-payroll-revenue-operations/logo-zoiko-nex.png",
    logoWidth: 146,
    logoHeight: 49,
    logoAlt: "ZoikoNex logo",
    description: "Global telecom billing & unified revenue engine.",
  },
  {
    logo: "/home/zoiko-ai.png",
    logoWidth: 122,
    logoHeight: 44,
    logoAlt: "ZoikoAI logo",
    description: "Agentic intelligence layer built for secure enterprise reasoning.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <DesktopFaq />

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <TabletFaq />
    </section>
  );
}

function DesktopFaq() {
  return (
    <div
      className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[99px] lg:pb-[100px] lg:px-[130px] w-full"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUpVariant}
        custom={0.05}
        className="w-full max-w-[1180px] mx-auto flex flex-col items-center"
      >
        {/* header */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <div className="flex items-center gap-[8px] bg-[#0f172a] border border-[rgba(127,208,217,0.3)] rounded-[100px] px-[12px] py-[6px]">
            <img
              src="/solution-zoiko-hr-payroll-revenue-operations/icon-buyer-resources.svg"
              alt=""
              className="size-[20px]"
            />
            <span className="font-inter font-bold text-[12px] uppercase text-[#7fd0d9] whitespace-nowrap">
              Buyer Resources
            </span>
          </div>
          <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-white text-center max-w-[820px]">
            Buyer questions, answered directly
          </h2>
          <p className="font-inter font-normal text-[18px] leading-[28px] text-[#94a3b8] text-center max-w-[820px]">
            Everything you need to know about our HR, Payroll, and Revenue
            Operations solutions.
          </p>
        </div>

        {/* featured platforms */}
        <div className="flex flex-col items-center gap-[41px] w-full mt-[42px]">
          <span className="font-inter font-semibold text-[14px] uppercase text-[#7fd0d9]">
            Core Platforms
          </span>
          <div className="flex items-stretch justify-center gap-[36px] w-full">
            {platformCards.map((card) => (
              <div
                key={card.logoAlt}
                className="bg-[#f8fafc] border-2 border-[#1f7a6c] rounded-[16px] p-[24px] w-[302px] h-[204px] flex flex-col gap-[20px] shadow-[0px_4px_2px_rgba(0,0,0,0.09)]"
              >
                <div className="flex items-center justify-between w-full">
                  <img
                    src={card.logo}
                    alt={card.logoAlt}
                    style={{ width: card.logoWidth }}
                    className="h-auto object-contain"
                  />
                  <div className="flex items-center gap-[4px] bg-[rgba(16,185,129,0.12)] rounded-[100px] px-[8px] py-[4px]">
                    <img
                      src="/solution-zoiko-hr-payroll-revenue-operations/icon-live-dot.svg"
                      alt=""
                      className="size-[6px]"
                    />
                    <span className="font-inter font-semibold text-[10px] text-[#247880] whitespace-nowrap">
                      LIVE
                    </span>
                  </div>
                </div>
                <p className="font-inter font-normal text-[14px] leading-[1.5] text-[#64748b] h-[42px]">
                  {card.description}
                </p>
                <div className="flex items-center justify-between w-full">
                  <span className="font-inter font-semibold text-[11px] text-[#247780] bg-[rgba(36,119,128,0.08)] rounded-[100px] px-[10px] py-[4px]">
                    Infrastructure
                  </span>
                  <div className="flex items-center gap-[4px]">
                    <span className="font-inter font-semibold text-[12px] text-[#247880]">
                      Explore
                    </span>
                    <img
                      src="/solution-zoiko-hr-payroll-revenue-operations/icon-arrow-right.svg"
                      alt=""
                      className="size-[12px]"
                    />
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>

        {/* faq list */}
        <div className="flex flex-col items-start gap-[24px] w-full mt-[56px]">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-[#0b2629] border border-[rgba(127,208,217,0.3)] rounded-[16px] p-[24px] flex flex-col gap-[12px] items-start w-full"
            >
              <div className="flex items-center gap-[12px] w-full">
                <img
                  src="/solution-zoiko-hr-payroll-revenue-operations/icon-faq-gear.svg"
                  alt=""
                  className="size-[24px] shrink-0"
                />
                <p className="font-inter font-semibold text-[18px] text-white flex-1">
                  {faq.question}
                </p>
              </div>
              {faq.answer && (
                <p className="font-inter font-normal text-[15px] leading-[24px] text-[#94a3b8] w-full">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function TabletFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="flex lg:hidden flex-col items-start pt-[40px] pb-[46px] px-[24px] sm:pt-[60.44px] sm:pb-[61.43px] sm:px-[38.4px] w-full"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUpVariant}
        custom={0.05}
        className="w-full max-w-[1180px] mx-auto flex flex-col items-start"
      >
        <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white pb-[15.36px]">
          Buyer questions, answered directly
        </h2>

        <div className="flex flex-col items-start w-full max-w-[820px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-b border-[rgba(127,208,217,0.3)] py-[14px] w-full flex flex-col items-start"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full min-h-[44px] py-[8px] text-left"
                >
                  <span className="font-inter font-semibold text-[16.8px] leading-[26.88px] text-white pr-[12px]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 font-inter font-semibold text-[18px] text-[#7fd0d9] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && faq.answer && (
                  <p className="font-inter font-normal text-[14px] leading-[22px] text-[#94a3b8] mt-[8px] w-full">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
