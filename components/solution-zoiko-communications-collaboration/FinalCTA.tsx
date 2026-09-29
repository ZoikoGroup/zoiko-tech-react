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

const labelClass =
  "font-inter font-semibold text-[14.4px] leading-[23px] text-white";

/* Desktop inputs use a teal-tinted fill (#8fb5ac) per the 1440w Figma frame */
const inputClassDesktop =
  "bg-[#8fb5ac] border border-[#9bb5b8] rounded-[10px] h-[48px] w-full px-[16px] font-inter font-semibold text-[14.4px] text-[#0a1416] outline-none placeholder:text-[#757575]";

const selectClassDesktop =
  "bg-[#8fb5ac] border border-[#9bb5b8] rounded-[10px] h-[48px] w-full px-[16px] font-inter font-semibold text-[14.4px] text-[#0a1416] outline-none appearance-none";

/* Tablet/mobile inputs use a plain white fill per the 768w Figma frame */
const inputClassTablet =
  "bg-white border border-[#9bb5b8] rounded-[10px] h-[48px] w-full px-[16px] font-inter font-semibold text-[14.4px] text-[#0a1416] outline-none placeholder:text-[#757575]";

const selectClassTablet =
  "bg-white border border-[#9bb5b8] rounded-[10px] h-[48px] w-full px-[16px] font-inter font-semibold text-[14.4px] text-[#0a1416] outline-none appearance-none";

function ContactFields({ variant }: { variant: "desktop" | "tablet" }) {
  const inputClass = variant === "desktop" ? inputClassDesktop : inputClassTablet;
  const selectClass = variant === "desktop" ? selectClassDesktop : selectClassTablet;
  const gridCols =
    variant === "desktop"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <>
      <div className={`grid ${gridCols} gap-[14px] w-full`}>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Work email</label>
          <input type="email" className={inputClass} />
        </div>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Company</label>
          <input type="text" className={inputClass} />
        </div>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Role / function (optional)</label>
          <input type="text" className={inputClass} />
        </div>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Country / region</label>
          <input type="text" className={inputClass} />
        </div>
      </div>

      <div className={`grid ${gridCols} gap-[14px] w-full`}>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Primary objective</label>
          <select className={selectClass} defaultValue="Team collaboration">
            <option>Team collaboration</option>
            <option>Meeting governance</option>
            <option>Messaging &amp; calling</option>
            <option>AI controls &amp; guardrails</option>
          </select>
        </div>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Governance need</label>
          <select className={selectClass} defaultValue="Unsure">
            <option>Unsure</option>
            <option>Data &amp; retention</option>
            <option>Identity &amp; permissions</option>
            <option>AI governance</option>
          </select>
        </div>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Evaluation stage</label>
          <select className={selectClass} defaultValue="Exploring">
            <option>Exploring</option>
            <option>Comparing options</option>
            <option>Ready to evaluate</option>
            <option>Actively buying</option>
          </select>
        </div>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Current environment (optional)</label>
          <input
            type="text"
            placeholder="High-level tool categories only"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[5px] items-start w-full">
        <label className={labelClass}>Message (optional)</label>
        <textarea className={`${inputClass} h-[92px] py-[15px] resize-none`} />
        <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#a9c9cd]">
          Please don&rsquo;t submit message content, meeting transcripts,
          phone numbers, credentials, personal data or confidential
          communications.
        </p>
      </div>

      <label className="flex gap-[13px] items-center w-full cursor-pointer">
        <input
          type="checkbox"
          className="bg-white border border-[#767676] rounded-[2.5px] shrink-0 size-[22px] accent-[#0a1416]"
        />
        <span className="font-inter font-normal text-[14.4px] leading-[23px] text-white">
          I acknowledge the Privacy Notice.
        </span>
      </label>

      <label className="flex gap-[13px] items-center w-full cursor-pointer">
        <input
          type="checkbox"
          className="bg-white border border-[#767676] rounded-[2.5px] shrink-0 size-[22px] accent-[#0a1416]"
        />
        <span className="font-inter font-normal text-[14.4px] leading-[23px] text-white">
          Send me optional Zoiko Tech updates.
        </span>
      </label>

      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-[14px] w-full pt-[12px]">
        <button
          type="submit"
          className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center justify-center text-center hover:bg-white/90 transition-colors duration-200 w-full sm:w-auto"
        >
          Contact Sales
        </button>
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
    </>
  );
}

export default function FinalCTA() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:py-[96px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(137.27deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
            Bring business communication into a more governed operating
            model.
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
            Talk with Zoiko Tech about your meetings, messaging, calling,
            external collaboration, AI-governance needs, integrations and the
            right platform path to evaluate fit.
          </p>

          <div className="flex flex-col gap-[20px] w-full pt-[4px]">
            <ContactFields variant="desktop" />
          </div>
        </motion.form>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.43px] px-[24px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col gap-[14.2px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[508px]">
            Bring business communication into a more governed operating
            model.
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
            Talk with Zoiko Tech about your meetings, messaging, calling,
            external collaboration, AI-governance needs, integrations and the
            right platform path to evaluate fit.
          </p>

          <div className="flex flex-col gap-[16px] w-full pt-[10px]">
            <ContactFields variant="tablet" />
          </div>
        </motion.form>
      </div>
    </section>
  );
}
