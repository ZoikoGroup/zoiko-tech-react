"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, UserCheck, Lock, ShieldAlert, Sparkles, Handshake, AlertOctagon } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const trustCards = [
  {
    icon: UserCheck,
    title: "Identity",
    description: "Explicit customer, contact and organization boundaries.",
  },
  {
    icon: ShieldCheck,
    title: "Consent",
    description: "Channel, purpose and frequency permissions kept with interaction state.",
  },
  {
    icon: Lock,
    title: "Local boundaries",
    description: "Jurisdictional rules for local communications and data access.",
  },
  {
    icon: ShieldAlert,
    title: "Sensitive data",
    description: "No payment, health, financial or identity-document data in generic cross-domain views.",
  },
  {
    icon: Sparkles,
    title: "AI & personalization",
    description: "Recommendations and generated content are labeled as derived, with human or policy controls.",
  },
  {
    icon: Handshake,
    title: "Partner handoff",
    description: "Operator, controller and partner boundaries made clear.",
  },
];

export default function TrustConsentIdentitySection() {
  return (
    <section id="trust-identity" className="w-full bg-white py-16 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col items-start mb-12 sm:mb-14"
        >
          <span className="font-['Poppins',sans-serif] text-[#1F7A6C] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
            Trust, consent & identity
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-[#0F172A] leading-[1.2] tracking-[-0.03em] mb-4 max-w-[840px]">
            Customer experiences that respect who the customer is and what they agreed to
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#64748B] leading-[28px] max-w-[760px]">
            Permission, identity and data boundaries are part of the journey design, not an afterthought.
          </p>
        </motion.div>

        {/* Two Columns: 6 Cards Left + Trust Detail Mock Right */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          {/* Left Column: 6 Trust Principles */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-[620px]"
          >
            {trustCards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#1F7A6C]/40 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-[6px] bg-[#1F7A6C]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#1F7A6C]" />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] sm:text-[16px] text-[#0F172A]">
                      {c.title}
                    </h3>
                  </div>
                  <p className="font-['Poppins',sans-serif] text-[13px] text-[#334155] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Trust & Consent Detail Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.3}
            className="w-full lg:flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-6 sm:p-7 shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-5">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#0F172A]">
                Trust & consent detail
              </h3>
              <span className="font-['Poppins',sans-serif] text-[12px] font-semibold text-[#64748B]">
                Active Policy
              </span>
            </div>

            <div className="flex flex-col gap-3.5 mb-5 text-[13px]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E2E8F0]/70 gap-1 sm:gap-4">
                <span className="text-[#64748B] font-['Poppins',sans-serif]">Identity state</span>
                <span className="font-['Poppins',sans-serif] font-semibold text-[#0F172A]">
                  Known customer · verified by one-time code
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E2E8F0]/70 gap-1 sm:gap-4">
                <span className="text-[#64748B] font-['Poppins',sans-serif]">Service messages</span>
                <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] text-[11px] font-semibold">
                  Permitted
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E2E8F0]/70 gap-1 sm:gap-4">
                <span className="text-[#64748B] font-['Poppins',sans-serif]">Marketing messages</span>
                <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#FEE2E8] text-[#991B1B] text-[11px] font-semibold">
                  Withdrawn 12 Sep
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E2E8F0]/70 gap-1 sm:gap-4">
                <span className="text-[#64748B] font-['Poppins',sans-serif]">Purpose</span>
                <span className="font-['Poppins',sans-serif] font-semibold text-[#0F172A]">
                  Appointment reminders only
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E2E8F0]/70 gap-1 sm:gap-4">
                <span className="text-[#64748B] font-['Poppins',sans-serif]">Source</span>
                <span className="font-['Poppins',sans-serif] font-semibold text-[#0F172A]">
                  Customer preference center
                </span>
              </div>
            </div>

            {/* Blocked Alert Banner */}
            <div className="p-3.5 rounded-[10px] bg-[#FEE2E2] border border-[#FCA5A5] flex items-start gap-3 mb-4">
              <AlertOctagon className="w-4 h-4 text-[#991B1B] shrink-0 mt-0.5" />
              <p className="font-['Poppins',sans-serif] text-[12.5px] text-[#991B1B] leading-snug">
                Marketing path blocked. The spring campaign will skip this customer automatically.
              </p>
            </div>

            <p className="font-['Poppins',sans-serif] text-[12px] text-[#64748B] leading-relaxed mb-5">
              Review history: preference changed 12 Sep · reviewed by Privacy 13 Sep
            </p>

            <div>
              <a
                href="#integration-developer"
                className="inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[14px] font-semibold text-[#1F7A6C] hover:text-[#247780] transition-colors"
              >
                <span>Review trust</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
