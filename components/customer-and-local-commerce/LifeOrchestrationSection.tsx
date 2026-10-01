"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Car, Heart, GraduationCap, CircleDollarSign, Wifi } from "lucide-react";

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

const domains = [
  {
    title: "Travel",
    icon: Send,
    image: "/customer-and-local-commerce/life-canal.png",
  },
  {
    title: "Mobility",
    icon: Car,
    image: "/customer-and-local-commerce/life-taxi.png",
  },
  {
    title: "Health",
    icon: Heart,
    image: null,
  },
  {
    title: "Education",
    icon: GraduationCap,
    image: null,
  },
  {
    title: "Finance",
    icon: CircleDollarSign,
    image: null,
  },
  {
    title: "Connectivity",
    icon: Wifi,
    image: null,
  },
];

const journeySteps = [
  {
    stage: "OBJECTIVE",
    action: "Relocate for a new job in Austin",
    badge: "Zoiko Arc",
    badgeType: "teal",
  },
  {
    stage: "TRAVEL",
    action: "Compare flight options",
    badge: "Partner: travel operator",
    badgeType: "blue",
  },
  {
    stage: "CONNECTIVITY",
    action: "Set up a local mobile plan",
    badge: "Partner: licensed carrier",
    badgeType: "blue",
  },
  {
    stage: "FINANCE",
    action: "Open a local account",
    badge: "Regulated operator · consent required",
    badgeType: "warning",
  },
  {
    stage: "OUTCOME",
    action: "2 of 4 steps confirmed",
    badge: "Split state kept visible",
    badgeType: "neutral",
  },
];

export default function LifeOrchestrationSection() {
  return (
    <section
      id="life-orchestration"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-[96px]"
      style={{
        background:
          "linear-gradient(228deg, rgba(6, 85, 72, 0.65) 38%, rgba(0, 38, 42, 0.65) 67%), #001315",
      }}
    >
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
          <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
            Life-orchestration experiences
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.17] tracking-[-0.03em] mb-4">
            Coordinate journeys that cross more than one part of a customer’s life
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#E2E8F0] leading-[28px] max-w-[840px]">
            Zoiko Arc is an AI-powered life-orchestration ecosystem spanning travel, health, education, finance, mobility and connectivity. It starts from the customer’s objective, not a single booking.
          </p>
        </motion.div>

        {/* 2-Column Grid: 3x2 Domain Cards (Left) + Specimen Mock Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-8">
          {/* Left: 3x2 Grid of 6 Domain Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full"
          >
            {domains.map((dom, idx) => {
              const Icon = dom.icon;
              return (
                <div
                  key={idx}
                  className="relative h-[160px] sm:h-[180px] rounded-[16px] overflow-hidden border border-[#34D4CA]/30 flex flex-col justify-between p-3.5 sm:p-4 group bg-[#002227]/40"
                >
                  {dom.image ? (
                    <>
                      <Image
                        src={dom.image}
                        alt={dom.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 33vw, 200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001315]/95 via-[#001315]/40 to-transparent" />
                      <div className="relative z-10 mt-auto">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1F7A6C]/70 backdrop-blur-md border border-[#34D4CA]/35 shadow-sm">
                          <Icon className="w-3 h-3 text-white" />
                          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] sm:text-[13px] text-white">
                            {dom.title}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 rounded-full bg-[#1F7A6C]/40 flex items-center justify-center border border-[#34D4CA]/30">
                        <Icon className="w-4 h-4 text-[#4DDCAD]" />
                      </div>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] sm:text-[15px] text-white">
                        {dom.title}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Right: Interactive Evidence Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.3}
            className="w-full bg-white rounded-[14px] p-5 sm:p-6 shadow-[0px_12px_32px_0px_rgba(15,23,42,0.14)] text-[#0F172A]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0] mb-3">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] sm:text-[16px] text-[#0F172A]">
                Life-orchestration journey
              </h3>
              <span className="font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.08em] uppercase text-[#64748B]">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Steps Table */}
            <div className="divide-y divide-[#E2E8F0]">
              {journeySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13px]"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <span className="font-['Poppins',sans-serif] text-[#64748B] text-[11px] font-medium uppercase tracking-wider w-24 sm:w-28 shrink-0">
                      {step.stage}
                    </span>
                    <span className="font-['Poppins',sans-serif] font-semibold text-[13px] sm:text-[14px] text-[#0F172A]">
                      {step.action}
                    </span>
                  </div>

                  <div className="pl-24 sm:pl-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        step.badgeType === "teal"
                          ? "bg-[#E6F4EA] text-[#137333]"
                          : step.badgeType === "blue"
                          ? "bg-[#EFF6FF] text-[#1D4ED8]"
                          : step.badgeType === "warning"
                          ? "bg-[#FEF3C7] text-[#B45309]"
                          : "bg-[#F1F5F9] text-[#475569]"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          step.badgeType === "teal"
                            ? "bg-[#137333]"
                            : step.badgeType === "blue"
                            ? "bg-[#1D4ED8]"
                            : step.badgeType === "warning"
                            ? "bg-[#B45309]"
                            : "bg-[#475569]"
                        }`}
                      />
                      <span>{step.badge}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <div className="pt-3 border-t border-[#E2E8F0] mt-2">
              <p className="font-['Poppins',sans-serif] text-[11.5px] sm:text-[12px] text-[#64748B] leading-relaxed">
                Recommendations stay separate from authoritative availability, price, eligibility and transaction results. The journey shows when it leaves Zoiko-owned technology.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer Note */}
        <p className="font-['Poppins',sans-serif] text-[12px] sm:text-[13px] text-[#CBD5E1] leading-relaxed max-w-[900px]">
          Domain modules appear only where Arc product evidence and partner relationships are approved. Cross-domain context stays purpose-bound and permission-aware.
        </p>
      </div>
    </section>
  );
}
