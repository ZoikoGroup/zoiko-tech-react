"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Link2 } from "lucide-react";

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

const layers = [
  {
    layer: "L1",
    title: "Customer / visitor context",
    description:
      "Anonymous or known customer, organization, local or market context and approved relationship state.",
    question: "Who is engaging?",
    highlighted: false,
  },
  {
    layer: "L2",
    title: "Channels / touchpoints",
    description:
      "Calling, video, local numbers, approved digital channels, web, app or other supported interfaces.",
    question: "Where does the interaction happen?",
    highlighted: false,
  },
  {
    layer: "L3",
    title: "Intent / journey state",
    description:
      "Inquiry, discovery, request, offer or recommendation, action, confirmation, support or exception.",
    question: "What is the customer trying to do?",
    highlighted: false,
  },
  {
    layer: "L4",
    title: "Intelligence / orchestration",
    description:
      "Approved marketing intelligence, routing, workflow or life-orchestration logic.",
    question: "How is the experience coordinated?",
    highlighted: true, // Botticelli #CFE9EA in Figma
  },
  {
    layer: "L5",
    title: "Commerce / service systems",
    description:
      "The external or Zoiko platform that owns the transaction, booking, order, service or fulfillment.",
    question: "Where is the action completed?",
    highlighted: false,
  },
  {
    layer: "L6",
    title: "Shared foundations",
    description:
      "Identity, consent, data, APIs and events, security, governance and evidence.",
    question: "How is it connected and controlled?",
    highlighted: true, // Botticelli #CFE9EA in Figma
  },
  {
    layer: "L7",
    title: "Operations / observability",
    description:
      "Handoff, failure and exception, support, status and outcome evidence.",
    question: "How is the experience operated?",
    highlighted: false,
  },
];

export default function CustomerExperienceArchitectureSection() {
  return (
    <section id="architecture" className="w-full bg-[#E9F9F8] py-16 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col items-start mb-10 sm:mb-12"
        >
          <span className="font-['Poppins',sans-serif] text-[#1F7A6C] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
            Customer experience architecture
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.17] tracking-[-0.03em] mb-4">
            Seven layers, one accountable customer journey
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#64748B] leading-[28px] max-w-[820px]">
            Each layer answers a buyer question. Together they show how channels, intelligence, commerce systems and operations connect through shared foundations.
          </p>
        </motion.div>

        {/* 7 Layer Cards List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="flex flex-col gap-2.5 sm:gap-3 mb-8"
        >
          {layers.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row md:items-center justify-between px-5 py-4 sm:px-6 sm:py-4.5 rounded-[12px] transition-all gap-3 md:gap-6 ${
                item.highlighted
                  ? "bg-[#CFE9EA] border border-[#9FDCD7]"
                  : "bg-white border border-[#E2E8F0]"
              }`}
            >
              <div className="flex items-start md:items-center gap-4 sm:gap-6">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] sm:text-[22px] text-[#1F7A6C] shrink-0 w-8">
                  {item.layer}
                </span>

                <div className="flex flex-col gap-0.5">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[17px] text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#334155] leading-relaxed max-w-[640px]">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="md:text-right shrink-0 pl-12 md:pl-0">
                <span className="font-['Poppins',sans-serif] text-[13.5px] sm:text-[14px] font-medium text-[#195B62]">
                  {item.question}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Callout Banner (Swamp #001315) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
          className="bg-[#001315] rounded-[14px] p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5 mb-6"
        >
          <div className="w-11 h-11 rounded-[10px] bg-[#1F7A6C] flex items-center justify-center shrink-0">
            <Link2 className="w-5 h-5 text-white" />
          </div>

          <div className="flex-1">
            <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[17px] text-white mb-1">
              Built to orchestrate specialist systems, not replace them
            </h4>
            <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#CBD5E1] leading-relaxed">
              This architecture deliberately allows multiple specialist systems. Zoiko Tech connects customer communications, marketing, commerce and service systems and operational back ends rather than claiming one universal customer platform.
            </p>
          </div>
        </motion.div>

        {/* View Details Link */}
        <div className="flex justify-start">
          <a
            href="#customer-communications"
            className="inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[14px] font-semibold text-[#1F7A6C] hover:text-[#247780] transition-colors group"
          >
            <span>View the architecture in detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
