"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, AlertTriangle } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

export default function TrustGovernanceSection() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const governanceControls = [
    {
      title: "System registration",
      desc: "Owner, purpose, deployment state, version",
    },
    {
      title: "Authority",
      desc: "Assist through bounded execution",
    },
    {
      title: "Evaluation",
      desc: "Use-case-specific testing and limitations",
    },
    {
      title: "Human oversight",
      desc: "Named approval, override, escalation, stop",
    },
    {
      title: "Evidence",
      desc: "Version-linked evaluation and runtime evidence",
    },
    {
      title: "Monitoring & incidents",
      desc: "Exceptions and re-review triggers",
    },
    {
      title: "Change control",
      desc: "Model, prompt, data or tool change triggers re-evaluation",
    },
  ];

  return (
    <section
      id="trust-governance"
      className="relative w-full bg-[#00191E] py-20 lg:py-[88px] text-white overflow-hidden"
    >
      {/* Background with opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/ai-and-intelligent-automation/trust-bg.png"
          alt="Trust background pattern"
          fill
          className="object-cover opacity-15"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(262deg, rgba(6, 85, 72, 0.65) 78%, rgba(0, 38, 42, 0.75) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Description & 7 Controls List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="font-['Poppins',sans-serif] text-white text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3">
              Governance, evaluation & human oversight
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.17] tracking-[-0.03em] text-white mb-4">
              Trust is an operating control, not a badge
            </h2>
            <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#E2E8F0] mb-8 font-normal max-w-[560px]">
              Governance, evaluation and approval sit inside the AI lifecycle, so every system has an owner, a tested scope and a human who can stop it.
            </p>

            {/* 7 Controls List */}
            <div className="w-full space-y-3 mb-8">
              {governanceControls.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 pt-3 pb-2 border-t border-[#34D4CA]/25"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#4DDCAD] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#CBD5E1] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact-sales"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-semibold text-[15px] transition-colors"
              >
                <span>Explore AI Governance & Assurance</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#contact-sales"
                className="inline-flex items-center gap-1.5 text-[#4DDCAD] font-['Poppins',sans-serif] text-[14px] font-semibold hover:underline"
              >
                <span>Responsible AI</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Specimen Review Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="lg:col-span-6 w-full"
          >
            <div className="bg-white rounded-[16px] overflow-hidden shadow-2xl border border-slate-200 text-[#0F172A]">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#F8FAFC] border-b border-slate-200">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-[#0F172A]">
                  Operations review
                </span>
                <span className="font-['Poppins',sans-serif] text-[11px] font-semibold tracking-wider text-[#64748B] uppercase">
                  SPECIMEN · SYNTHETIC DATA
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                {/* Meta Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-slate-200 text-left">
                  <div>
                    <span className="block font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] uppercase tracking-wider mb-1">
                      Work item
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A] leading-tight block">
                      Supplier invoice exception
                    </span>
                  </div>
                  <div>
                    <span className="block font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] uppercase tracking-wider mb-1">
                      Domain
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A] leading-tight block">
                      Finance operations
                    </span>
                  </div>
                  <div>
                    <span className="block font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] uppercase tracking-wider mb-1">
                      Owner
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A] leading-tight block">
                      AP Lead · M. Patel
                    </span>
                  </div>
                  <div>
                    <span className="block font-['Poppins',sans-serif] text-[11px] font-medium text-[#64748B] uppercase tracking-wider mb-1">
                      Authority
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A] leading-tight block">
                      Prepare
                    </span>
                  </div>
                </div>

                {/* Context row */}
                <div className="pb-4 border-b border-slate-200">
                  <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-1">
                    CONTEXT
                  </span>
                  <p className="font-['Poppins',sans-serif] text-[13px] text-[#334155]">
                    PO-4471 · Goods receipt GR-889 · Contract clause 7.2 (source dated 03 Sep)
                  </p>
                </div>

                {/* AI Proposal Container */}
                <div className="p-4 sm:p-5 rounded-[12px] bg-[#F5F3FF] border border-[#DDD6FE]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-[#0F172A]">
                      AI proposal
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EDE9FE] text-[#7C3AED] font-['Poppins',sans-serif] text-[11px] font-semibold">
                      Derived, not authoritative
                    </span>
                  </div>

                  <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#334155] mb-4">
                    Quantity mismatch of 12 units against goods receipt. Prepared a supplier query and a hold on payment, pending your review.
                  </p>

                  {/* Interactive Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {["Approve", "Edit", "Reject", "Request context", "Escalate"].map((action, aIndex) => {
                      const isPrimary = action === "Approve";
                      const isSelected = selectedAction === action;
                      return (
                        <button
                          key={aIndex}
                          type="button"
                          onClick={() => setSelectedAction(action)}
                          className={`px-3 py-1.5 rounded-[6px] font-['Poppins',sans-serif] text-[12px] sm:text-[13px] font-semibold transition-all ${
                            isPrimary
                              ? isSelected
                                ? "bg-[#165a50] text-white ring-2 ring-[#4DDCAD]"
                                : "bg-[#1F7A6C] hover:bg-[#165a50] text-white"
                              : isSelected
                              ? "bg-slate-200 text-[#0F172A] border border-slate-400"
                              : "bg-white hover:bg-slate-100 text-[#0F172A] border border-slate-300"
                          }`}
                        >
                          {action}
                        </button>
                      );
                    })}
                  </div>
                  {selectedAction && (
                    <p className="mt-2 text-[12px] text-[#1F7A6C] font-['Poppins',sans-serif] font-medium">
                      Action recorded: {selectedAction} (specimen simulation)
                    </p>
                  )}
                </div>

                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DBF2ED] text-[#195B62] font-['Poppins',sans-serif] text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#195B62]" />
                    Evaluation: passed
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-['Poppins',sans-serif] text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#92400E]" />
                    Approval: pending
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#075985] font-['Poppins',sans-serif] text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#075985]" />
                    Evidence recorded
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
