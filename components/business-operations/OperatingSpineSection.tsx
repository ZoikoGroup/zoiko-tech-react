"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  }),
};

export default function OperatingSpineSection() {
  const stages = [
    {
      step: 1,
      title: "Plan / Prepare",
      desc: "Scope, inputs, owners, dependencies",
      badges: [
        { text: "Gathering inputs", bg: "bg-[#E2E8F0]", color: "text-[#334155]" },
        { text: "Ready", bg: "bg-[#DBF2ED]", color: "text-[#195B62]" },
      ],
    },
    {
      step: 2,
      title: "Validate",
      desc: "Completeness, consistency, controls",
      badges: [
        { text: "Warning", bg: "bg-[#FEF3C7]", color: "text-[#92400E]" },
        { text: "Blocked", bg: "bg-[#FEE2E2]", color: "text-[#991B1B]" },
      ],
    },
    {
      step: 3,
      title: "Review / Approve",
      desc: "Material decisions to authorized roles",
      badges: [
        { text: "In review", bg: "bg-[#E0F2FE]", color: "text-[#075985]" },
        { text: "Approved", bg: "bg-[#DBF2ED]", color: "text-[#195B62]" },
      ],
    },
    {
      step: 4,
      title: "Execute",
      desc: "Through the relevant specialist platform",
      badges: [
        { text: "Processing", bg: "bg-[#E0F2FE]", color: "text-[#075985]" },
        { text: "Completed", bg: "bg-[#DBF2ED]", color: "text-[#195B62]" },
      ],
    },
    {
      step: 5,
      title: "Verify / Reconcile",
      desc: "Expected versus actual outcome",
      badges: [
        { text: "Matched", bg: "bg-[#DBF2ED]", color: "text-[#195B62]" },
        { text: "Difference", bg: "bg-[#FEF3C7]", color: "text-[#92400E]" },
      ],
    },
    {
      step: 6,
      title: "Evidence / Close",
      desc: "Outcome, approvals, exceptions kept",
      badges: [
        { text: "Closed", bg: "bg-[#DBF2ED]", color: "text-[#195B62]" },
        { text: "Reopened", bg: "bg-[#FEF3C7]", color: "text-[#92400E]" },
      ],
    },
    {
      step: 7,
      title: "Improve",
      desc: "Recurring exceptions and design",
      badges: [
        { text: "Action planned", bg: "bg-[#E2E8F0]", color: "text-[#334155]" },
        { text: "Monitoring", bg: "bg-[#E0F2FE]", color: "text-[#075985]" },
      ],
    },
  ];

  return (
    <section
      id="operating-spine"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(262deg, rgba(6, 85, 72, 0.45) 78%, rgba(0, 38, 42, 0.45) 100%), #001315",
      }}
    >
      {/* Background Architectural Texture with opacity 0.12 */}
      <div className="absolute inset-0 pointer-events-none opacity-12">
        <Image
          src="/business-operations/pattern-bg-architecture.png"
          alt="Architecture backdrop"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="max-w-[800px] mb-12"
        >
          <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-white uppercase mb-2">
            RECURRING OPERATING SPINE
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight mb-4">
            One operating pattern across every function
          </h2>
          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#E2E8F0] font-normal leading-relaxed">
            The same seven stages apply whether the cycle is payroll, billing, a
            people change or a compliance review.
          </p>
        </motion.div>

        {/* 7 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3.5 mb-10">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1 + idx * 0.05}
              className="flex flex-col justify-between p-4 rounded-[12px] bg-white/[0.05] border border-white/[0.12] backdrop-blur-xs hover:bg-white/[0.08] transition-colors"
            >
              <div>
                <div className="w-6 h-6 rounded-full bg-[#247780] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-bold text-white mb-3">
                  {stage.step}
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-bold text-white leading-snug mb-1.5 min-h-[38px] flex items-center">
                  {stage.title}
                </h3>

                <p className="font-['Poppins',sans-serif] text-[12px] text-[#CBD5E1] leading-relaxed mb-4 min-h-[48px]">
                  {stage.desc}
                </p>
              </div>

              <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                {stage.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold text-center ${badge.bg} ${badge.color}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note & Link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.4}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-6 border-t border-white/15"
        >
          <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] text-[#CBD5E1]">
            A page-level operating pattern. Each specialist platform keeps its
            own validated workflow.
          </p>

          <Link
            href="#operating-domains"
            className="inline-flex items-center gap-2 text-[#4DDCAD] hover:text-white font-['Poppins',sans-serif] text-[14px] font-semibold transition-colors"
          >
            <span>View operating model</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
