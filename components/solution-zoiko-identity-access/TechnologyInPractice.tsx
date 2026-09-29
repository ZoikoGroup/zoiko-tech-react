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

type DesktopCard = {
  image: string;
  title: string;
  lines: string[];
};

const desktopCards: DesktopCard[] = [
  {
    image: "/solution-zoiko-identity-access/stock-identity-architecture.png",
    title: "Identity architecture",
    lines: ["Estate, problem, model,", "governance, approved result."],
  },
  {
    image: "/solution-zoiko-identity-access/stock-access-governance.png",
    title: "Access governance",
    lines: ["Review issue, lifecycle model,", "approved outcome."],
  },
  {
    image: "/solution-zoiko-identity-access/stock-delegation-and-approval.png",
    title: "Delegation",
    lines: ["Need, scope, approval, expiry,", "outcome."],
  },
  {
    image: "/solution-zoiko-identity-access/stock-machine-identity.png",
    title: "Machine identity",
    lines: ["Ownership, scope, credential and", "review design."],
  },
];

type TabletCard = {
  title: string;
  lines: string[];
};

const tabletCards: TabletCard[] = [
  {
    title: "Identity architecture",
    lines: ["Estate, problem, model, governance,", "approved result."],
  },
  {
    title: "Access governance",
    lines: ["Review issue, lifecycle model, approved", "outcome."],
  },
  {
    title: "Delegation",
    lines: ["Need, scope, approval, expiry, outcome."],
  },
  {
    title: "Machine identity",
    lines: ["Ownership, scope, credential and review", "design."],
  },
];

export default function TechnologyInPractice() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px] pb-[12px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[20px] w-full"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-[#0a1416] max-w-[698px]">
              Technology in practice
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
              Proof appears only when approved for public use.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex gap-[16px] items-start justify-center w-full"
          >
            {desktopCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#247780] border border-[#d5e3e5] rounded-[14px] flex flex-1 flex-col items-center justify-between h-[345px] p-[20px]"
              >
                <img
                  src={card.image}
                  alt={`Stock image — ${card.title.toLowerCase()}`}
                  className="w-[256px] h-[151px] object-cover rounded-[8px] pointer-events-none"
                />
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#7fd0d9] text-center w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-white text-center w-full pt-[5px]">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <span className="bg-white border border-[#247780] rounded-full font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#247780] px-[10px] py-[1px] flex items-center justify-center">
                  Evidence pending
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full bg-white">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.4px] pb-[12.01px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[14.4px] w-full"
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-[#0a1416] max-w-[507.72px]">
              Technology in practice
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#4d6468] max-w-[686px]">
              Proof appears only when approved for public use.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.1}
            className="grid grid-cols-2 gap-[16px] w-full pt-[5.6px]"
          >
            {tabletCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f3f9fa] border border-[#d5e3e5] rounded-[14px] flex flex-col items-start gap-[1px] p-[20px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-[#0a1416] w-full">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#4d6468] w-full pt-[5px]">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <span className="border border-[#247780] rounded-full font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#247780] px-[10px] py-[1px] flex items-center justify-center mt-[8px]">
                  Evidence pending
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="bg-[#e6f2f4] border-l-4 border-[#247780] rounded-tr-[10px] rounded-br-[10px] flex flex-col items-start w-full max-w-[742.83px] py-[17px] px-[16px] mt-[16px]"
          >
            <p className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#4d6468] max-w-[631.41px]">
              No approved public proof yet? Talk to us about the
              architecture, launch-readiness labels and Trust Center. We
              don&rsquo;t publish authentication success rates, risk
              reductions, logos or compliance claims without evidence.
            </p>
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.2}
            href="#read-evidence"
            className="font-inter font-semibold text-[16px] text-white bg-[#247780] border-2 border-[#247780] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-[#1c5f66] transition-colors duration-200 mt-[16px]"
          >
            Read evidence
          </motion.a>
        </div>
      </div>
    </section>
  );
}
