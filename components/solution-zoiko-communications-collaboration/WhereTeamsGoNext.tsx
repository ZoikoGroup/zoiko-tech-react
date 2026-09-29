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

type Route = {
  title: string;
  description: string;
};

const routes: Route[] = [
  {
    title: "Internal collaboration",
    description: "Workforce & Productivity, AI Governance & Assurance, Identity & Access.",
  },
  {
    title: "Meetings & messaging",
    description: "Workforce & Productivity, Technology & SaaS.",
  },
  {
    title: "Calling / local communications",
    description: "Telecom Operations & Monetization, where approved.",
  },
  {
    title: "AI-assisted meetings",
    description: "AI Governance & Assurance, Responsible AI.",
  },
  {
    title: "Administration",
    description: "Cybersecurity & Resilience, Regulatory & Compliance, Developer routes.",
  },
];

export default function WhereTeamsGoNext() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[96px] lg:pb-[96px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white">
            Where teams go next
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee]">
            Adjacent routes follow what you are governing, and never interrupt a
            meeting, call or compliance review.
          </p>

          <div className="grid grid-cols-4 gap-[16px] w-full">
            {routes.map((route) => (
              <div
                key={route.title}
                className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] px-[20px] py-[19px] flex flex-col items-start"
              >
                <div className="font-inter font-bold text-[16px] leading-[25.6px] text-white">
                  {route.title}
                </div>
                <p className="mt-[3px] font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {route.description}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#explore-adjacent-solutions"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Explore adjacent solutions
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.44px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
            Where teams go next
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee]">
            Adjacent routes follow what you are governing, and never interrupt a
            meeting, call or compliance review.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
            {routes.map((route) => (
              <div
                key={route.title}
                className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] px-[20px] py-[19px] flex flex-col items-start"
              >
                <div className="font-inter font-bold text-[16px] leading-[25.6px] text-white">
                  {route.title}
                </div>
                <p className="mt-[3px] font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {route.description}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#explore-adjacent-solutions"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Explore adjacent solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
