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

const inputClass =
  "bg-white border border-[#9bb5b8] rounded-[10px] h-[48px] w-full px-[16px] font-inter font-normal text-[14.4px] text-[#0a1416] outline-none";

const selectClass =
  "bg-white border border-[#9bb5b8] rounded-[10px] h-[48px] w-full px-[16px] font-inter font-semibold text-[14.4px] text-[#0a1416] outline-none appearance-none";

function ContactFields() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] w-full">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] w-full">
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Primary identity objective</label>
          <select className={selectClass} defaultValue="Authentication">
            <option>Authentication</option>
            <option>Authorization / entitlements</option>
            <option>Delegated authority</option>
            <option>Lifecycle & evidence</option>
          </select>
        </div>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Identity population</label>
          <select className={selectClass} defaultValue="Mixed / unsure">
            <option>Mixed / unsure</option>
            <option>People only</option>
            <option>Services / integrations</option>
            <option>AI / agents</option>
          </select>
        </div>
        <div className="flex flex-col gap-[5.5px] items-start w-full">
          <label className={labelClass}>Application estate</label>
          <select className={selectClass} defaultValue="Mixed">
            <option>Mixed</option>
            <option>Cloud-native</option>
            <option>On-premises</option>
            <option>Hybrid</option>
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
      </div>

      <div className="flex flex-col gap-[5px] items-start w-full">
        <label className={labelClass}>Message (optional)</label>
        <textarea className={`${inputClass} h-[92px] py-[15px] resize-none`} />
        <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#a9c9cd]">
          Please don&rsquo;t submit passwords, secrets, tokens, personal
          identity documents, employee records or confidential access-control
          details.
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

      <div className="flex flex-wrap items-center gap-[14px] w-full pt-[12px]">
        <button
          type="submit"
          className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
        >
          Contact Sales
        </button>
        <a
          href="#explore-identity-technology"
          className="font-inter font-semibold text-[16px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
        >
          Explore Identity Technology
        </a>
        <a
          href="#explore-cybersecurity-resilience"
          className="font-inter font-semibold text-[16px] leading-[25.6px] text-[#7fd0d9] underline"
        >
          Explore Cybersecurity &amp; Resilience →
        </a>
      </div>
    </>
  );
}

export default function AccessDecisionFinalCTA() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[95px] lg:pb-[96px] lg:px-[130px] w-full"
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
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px]"
        >
          <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
            Make every important access decision easier to understand,
            control and review.
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
            Talk with Zoiko Tech about your identity sources, applications,
            human and system identities, entitlement model, delegated
            authority and the right path to evaluate an identity architecture
            for your environment.
          </p>

          <div className="flex flex-col gap-[20px] w-full pt-[4px]">
            <ContactFields />
          </div>
        </motion.form>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.36px] pb-[61.45px] px-[24px] sm:px-[38.4px] w-full"
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
          className="w-full flex flex-col gap-[14.5px]"
        >
          <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[508px]">
            Make every important access decision easier to understand,
            control and review.
          </h2>

          <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
            Talk with Zoiko Tech about your identity sources, applications,
            human and system identities, entitlement model, delegated
            authority and the right path to evaluate an identity architecture
            for your environment.
          </p>

          <div className="flex flex-col gap-[16px] w-full pt-[10px]">
            <ContactFields />
          </div>
        </motion.form>
      </div>
    </section>
  );
}
