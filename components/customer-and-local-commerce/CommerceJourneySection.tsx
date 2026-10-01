"use client";

import React from "react";
import { motion } from "framer-motion";

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

const journeySteps = [
  {
    step: "1",
    title: "Discover / engage",
    description: "Customer reaches an approved digital or communications experience.",
    highlighted: false,
  },
  {
    step: "2",
    title: "Understand intent",
    description: "Relevant context captured without excessive data collection.",
    highlighted: false,
  },
  {
    step: "3",
    title: "Present / recommend",
    description: "An offer or next action, only where a supported system provides it.",
    highlighted: false,
  },
  {
    step: "4",
    title: "Commit / transact",
    description: "Handoff to the authoritative commerce, payment, booking or order system.",
    highlighted: true,
  },
  {
    step: "5",
    title: "Confirm",
    description: "Definitive status returned from the authoritative system.",
    highlighted: true,
  },
  {
    step: "6",
    title: "Fulfill / operate",
    description: "Routed to the downstream service or operations system.",
    highlighted: false,
  },
  {
    step: "7",
    title: "Support / exception",
    description: "Failure, refund, cancellation or change, where the responsible system supports it.",
    highlighted: false,
  },
];

export default function CommerceJourneySection() {
  return (
    <section id="commerce-journeys" className="w-full bg-white py-16 sm:py-20 lg:py-[96px]">
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
            Commerce journey & handoffs
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-[#0F172A] leading-[1.2] tracking-[-0.03em] mb-4">
            Connect discovery to the system that actually completes the sale
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#64748B] leading-[28px] max-w-[800px]">
            Zoiko Tech coordinates the journey and the handoff. The commerce, payment, booking or order system that owns the transaction stays the source of truth.
          </p>
        </motion.div>

        {/* 7 Horizontal Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4"
        >
          {journeySteps.map((st, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-[12px] border transition-all flex flex-col justify-between ${
                st.highlighted
                  ? "bg-[#CDE5E7] border-[#A1D4D7] shadow-sm"
                  : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#1F7A6C]/40"
              }`}
            >
              <div>
                {/* Step badge */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] mb-3 ${
                    st.highlighted
                      ? "bg-[#1F7A6C] text-white"
                      : "bg-[#E2E8F0] text-[#1F7A6C]"
                  }`}
                >
                  {st.step}
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#0F172A] mb-2 leading-snug">
                  {st.title}
                </h3>
              </div>

              <p className="font-['Poppins',sans-serif] text-[12px] sm:text-[13px] text-[#334155] leading-relaxed">
                {st.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
