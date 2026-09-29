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

export default function Hero() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-start lg:py-[85px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(142.5deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1284px] mx-auto flex items-start gap-[40px]"
        >
          <div className="shrink-0 w-[672px] flex flex-col items-start">
            <span className="font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[10px] py-[1px]">
              Communications &amp; Collaboration
            </span>

            <h1 className="font-plus-jakarta font-bold text-[40px] lg:text-[64px] leading-[46px] lg:leading-[62.56px] tracking-[-1.088px] text-white mt-[18px]">
              Bring meetings, messaging and calling into communication that
              can be governed.
            </h1>

            <p className="font-inter font-normal text-[17.6px] leading-[28.16px] text-[#dcecee] mt-[33px]">
              Zoiko Tech helps organizations structure business
              communication around governed workspaces, identity,
              permissions, meetings, messaging, calling, AI controls,
              integrations and accountable follow-up — without turning
              collaboration into surveillance.
            </p>

            <div className="flex flex-wrap items-center gap-[12px] mt-[18px]">
              <a
                href="#discuss-communications-environment"
                className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
              >
                Discuss your communications environment
              </a>
              <a
                href="#explore-communications-platforms"
                className="font-inter font-semibold text-[16px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
              >
                Explore Communications Platforms
              </a>
            </div>

            <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#dcecee] mt-[24px]">
              Structured workspaces. Controlled AI. Privacy-respecting
              administration. Enterprise visibility.
            </p>
          </div>

          <div className="shrink-0 w-[572px] h-[583px]">
            <img
              src="/solution-zoiko-communications-collaboration/hero-communications-dashboard-illustration.png"
              alt="Communications platform illustration: video call with participants, shield/security, calendar, contacts, and phone panels around a laptop"
              className="w-full h-full object-cover object-bottom pointer-events-none"
            />
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-center pt-[40px] pb-[46px] px-[24px] sm:pt-[60.44px] sm:pb-[61.44px] sm:px-[38.4px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col items-center gap-[40px]"
        >
          <div className="w-full flex flex-col items-start">
            <p className="font-inter font-normal text-[13.6px] leading-[21.76px] text-[#7fd0d9] break-words">
              Home / Solutions / Communications &amp; Collaboration
            </p>

            <span className="inline-block font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[10px] py-[1px] mt-[25px]">
              Communications &amp; Collaboration
            </span>

            <h1 className="font-sora font-bold text-[26px] sm:text-[35.3px] leading-[32px] sm:leading-[40.63px] tracking-[-0.707px] text-white mt-[19px]">
              Bring meetings, messaging and calling into communication that
              can be governed.
            </h1>

            <p className="font-inter font-normal text-[17.6px] leading-[28.16px] text-[#dcecee] mt-[21px]">
              Zoiko Tech helps organizations structure business
              communication around governed workspaces, identity,
              permissions, meetings, messaging, calling, AI controls,
              integrations and accountable follow-up — without turning
              collaboration into surveillance.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-[12px] mt-[18px] w-full">
              <a
                href="#discuss-communications-environment"
                className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center justify-center text-center hover:bg-white/90 transition-colors duration-200 w-full sm:w-auto"
              >
                Discuss your communications environment
              </a>
              <a
                href="#explore-communications-platforms"
                className="font-inter font-semibold text-[16px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center justify-center text-center hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto"
              >
                Explore Communications Platforms
              </a>
              <a
                href="#explore-communication-governance"
                className="font-inter font-semibold text-[16px] leading-[25.6px] text-[#7fd0d9] underline text-center w-full sm:w-auto"
              >
                Explore communication governance →
              </a>
            </div>

            <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#dcecee] mt-[12px]">
              Structured workspaces. Controlled AI. Privacy-respecting
              administration. Enterprise visibility.
            </p>
          </div>

          <figure
            className="border border-[rgba(127,208,217,0.4)] rounded-[16px] overflow-hidden relative w-full min-h-[280px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
            }}
          >
            <img
              src="/solution-zoiko-communications-collaboration/hero-colleagues-collaborating-photo.png"
              alt="Colleagues collaborating around a table with laptops"
              className="w-full h-[280px] sm:h-[420px] object-cover"
            />
            <figcaption
              className="absolute bottom-0 left-0 right-0 px-[14px] py-[8px] font-inter font-normal text-[12.5px] leading-[19.97px] text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
              }}
            >
              Governed workspaces for meetings, messaging and calling
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
