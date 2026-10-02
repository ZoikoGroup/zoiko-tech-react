"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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

const commsFeatures = [
  {
    title: "Local numbers & contactability",
    description: "Within approved availability and market scope.",
  },
  {
    title: "Calling",
    description: "Business calling for customer communication.",
  },
  {
    title: "Video",
    description: "Where current Zoiko Local evidence supports it.",
  },
  {
    title: "Routing",
    description: "Communications routing within validated scope.",
  },
  {
    title: "AI-powered customer communications",
    description: "With governed AI and human-oversight boundaries.",
  },
  {
    title: "Interaction handoff",
    description: "From communication into inquiry, request or service workflow.",
  },
];

export default function CustomerCommunicationsSection() {
  const [activeState, setActiveState] = useState("Assigned");

  const routingStates = [
    "Queued",
    "Assigned",
    "In progress",
    "Escalated",
    "Completed",
    "Failed / unavailable",
  ];

  return (
    <section id="customer-communications" className="w-full bg-white py-16 sm:py-20 lg:py-[96px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-14">
          {/* Left Column: Heading, Subtext & 6 Checklist Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[540px] shrink-0"
          >
            <span className="font-['Poppins',sans-serif] text-[#1F7A6C] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
              Customer communications
            </span>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-[#0F172A] leading-[1.18] tracking-[-0.03em] mb-4">
              Every conversation arrives with context, an owner and a state
            </h2>

            <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#64748B] leading-[26px] mb-8 font-normal">
              Zoiko Local provides the customer-communications foundation: local numbers, calling, video, routing and AI-powered customer communications, connected to the workflows that act on them.
            </p>

            {/* Clean 2-column checklist with checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full mb-8">
              {commsFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1F7A6C] stroke-[2.2] shrink-0 mt-1" />
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] sm:text-[15px] text-[#0F172A] leading-snug">
                      {feat.title}
                    </h3>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#334155] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#local-presence"
              className="inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[14px] font-semibold text-[#1F7A6C] hover:text-[#247780] transition-colors group"
            >
              <span>Explore communications</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right Column: Layered Smartphone Photo + Overlapping Interaction Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:flex-1 relative flex flex-col items-end"
          >
            {/* Top Right Photo */}
            <div className="relative w-full sm:w-[480px] lg:w-[500px] h-[240px] sm:h-[340px] lg:h-[380px] rounded-[20px] overflow-hidden ml-auto">
              <Image
                src="/customer-and-local-commerce/comms-smartphone.png"
                alt="Hands holding a smartphone in warm evening light"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            {/* Floating Overlapping Card */}
            <div className="w-full sm:w-[490px] lg:w-[500px] bg-white border border-[#E2E8F0] rounded-[14px] p-5 sm:p-6 shadow-[0px_12px_32px_0px_rgba(15,23,42,0.14)] -mt-12 sm:-mt-28 lg:-mt-[220px] mr-auto lg:mr-4 relative z-10">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-4">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] sm:text-[16px] text-[#0F172A]">
                  Communication interaction
                </span>
                <span className="font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.08em] uppercase text-[#64748B]">
                  SPECIMEN · SYNTHETIC DATA
                </span>
              </div>

              {/* Contact Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pb-4 mb-4 border-b border-[#E2E8F0] text-[13px]">
                <div>
                  <span className="block text-[#64748B] text-[11px] font-medium mb-0.5">
                    Contact
                  </span>
                  <span className="font-['Poppins',sans-serif] font-semibold text-[13px] text-[#0F172A]">
                    Customer #C-1042
                  </span>
                </div>
                <div>
                  <span className="block text-[#64748B] text-[11px] font-medium mb-0.5">
                    Channel
                  </span>
                  <span className="font-['Poppins',sans-serif] font-semibold text-[13px] text-[#0F172A]">
                    Voice call
                  </span>
                </div>
                <div>
                  <span className="block text-[#64748B] text-[11px] font-medium mb-0.5">
                    Local number
                  </span>
                  <span className="font-['Poppins',sans-serif] font-semibold text-[13px] text-[#0F172A]">
                    Austin, TX line
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-3 pt-1">
                  <span className="block text-[#64748B] text-[11px] font-medium mb-0.5">
                    Owner
                  </span>
                  <span className="font-['Poppins',sans-serif] font-semibold text-[13px] text-[#0F172A]">
                    Store Support Team
                  </span>
                </div>
              </div>

              {/* Intent */}
              <div className="pb-4 mb-4 border-b border-[#E2E8F0]">
                <span className="block text-[#64748B] text-[11px] font-medium uppercase mb-1">
                  INTENT
                </span>
                <span className="font-['Poppins',sans-serif] font-semibold text-[15px] text-[#0F172A]">
                  Service appointment request
                </span>
              </div>

              {/* Routing State Pills */}
              <div className="pb-4 mb-4 border-b border-[#E2E8F0]">
                <span className="block text-[#64748B] text-[11px] font-medium uppercase mb-2">
                  ROUTING STATE
                </span>
                <div className="flex flex-wrap gap-2">
                  {routingStates.map((state) => {
                    const isSelected = activeState === state;
                    return (
                      <button
                        key={state}
                        onClick={() => setActiveState(state)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                          isSelected
                            ? "bg-[#1F7A6C] text-white shadow-sm"
                            : "bg-[#E2E8F0] text-[#334155] hover:bg-[#CBD5E1]"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? "bg-white" : "bg-[#334155]"
                          }`}
                        />
                        <span>{state}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pb-4 mb-3 border-b border-[#E2E8F0] flex flex-col gap-2.5">
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-[6px] bg-[#1F7A6C] hover:bg-[#247780] text-white font-['Poppins',sans-serif] text-[13px] font-semibold transition-colors">
                    Respond
                  </button>
                  <button className="px-4 py-2 rounded-[6px] bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-slate-50 font-['Poppins',sans-serif] text-[13px] font-semibold transition-colors">
                    Route
                  </button>
                  <button className="px-4 py-2 rounded-[6px] bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-slate-50 font-['Poppins',sans-serif] text-[13px] font-semibold transition-colors">
                    Escalate
                  </button>
                </div>
                <div>
                  <button className="px-4 py-2 rounded-[6px] bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-slate-50 font-['Poppins',sans-serif] text-[13px] font-semibold transition-colors">
                    Create downstream request
                  </button>
                </div>
              </div>

              {/* Evidence subtext */}
              <p className="font-['Poppins',sans-serif] text-[11.5px] text-[#64748B] leading-relaxed">
                Evidence: 10:42 · Voice · Owner assigned · Outcome pending. Message content is never shown in public views.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
