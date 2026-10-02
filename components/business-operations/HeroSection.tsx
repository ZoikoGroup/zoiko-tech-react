"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

export default function HeroSection() {
  const lanes = [
    {
      title: "People / HR",
      detail: "Role change · effective 1 Oct",
      status: "Complete",
      statusBg: "bg-[#DBF2ED]",
      statusText: "text-[#195B62]",
      hasDot: true,
      dotBg: "bg-[#195B62]",
    },
    {
      title: "Payroll / Revenue",
      detail: "October cycle inputs",
      status: "In review",
      statusBg: "bg-[#E0F2FE]",
      statusText: "text-[#075985]",
      hasDot: false,
    },
    {
      title: "Workforce",
      detail: "Policy exceptions",
      status: "Review required",
      statusBg: "bg-[#FEF3C7]",
      statusText: "text-[#92400E]",
      hasDot: false,
    },
    {
      title: "Communications",
      detail: "Decision logged to workflow",
      status: "Completed",
      statusBg: "bg-[#DBF2ED]",
      statusText: "text-[#195B62]",
      hasDot: true,
      dotBg: "bg-[#195B62]",
    },
    {
      title: "Marketing operations",
      detail: "Outbound campaign",
      status: "Approval pending",
      statusBg: "bg-[#FEF3C7]",
      statusText: "text-[#92400E]",
      hasDot: false,
    },
    {
      title: "Compliance",
      detail: "Quarterly control evidence",
      status: "Current",
      statusBg: "bg-[#DBF2ED]",
      statusText: "text-[#195B62]",
      hasDot: true,
      dotBg: "bg-[#195B62]",
    },
  ];

  const tags = [
    "IDENTITY",
    "DATA / PROVENANCE",
    "APPROVALS",
    "EXCEPTIONS",
    "INTEGRATIONS",
    "EVIDENCE",
  ];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(262deg, rgba(6, 85, 72, 0.45) 78%, rgba(0, 38, 42, 0.45) 100%), #001315",
      }}
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 lg:py-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Heading, Description, Actions & Bottom Notice */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[640px] shrink-0"
          >
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[30px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-extrabold leading-[1.15] sm:leading-[1.12] lg:leading-[62.64px] tracking-[-0.02em] text-white mb-4 sm:mb-5">
              Connect the <br className="hidden sm:inline" />
              recurring operations <br className="hidden sm:inline" />
              that keep the <br className="hidden sm:inline" />
              business running.
            </h1>

            <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[28px] text-[#E2E8F0] mb-6 sm:mb-8 font-normal max-w-[600px]">
              Zoiko Tech brings people operations, payroll, billing, workforce
              assurance, communications, marketing operations and compliance into
              a clearer operating architecture, with explicit sources, owners,
              approvals, exceptions, integrations and evidence.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link
                href="#intent-router"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1f6870] text-white font-['Poppins',sans-serif] font-semibold text-[14px] sm:text-[15px] leading-5 transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                <span>Explore operations</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="#contact-sales"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] border border-white hover:bg-white/10 text-white font-['Poppins',sans-serif] font-semibold text-[14px] sm:text-[15px] leading-5 transition-colors w-full sm:w-auto text-center"
              >
                <span>Discuss your operating model</span>
              </Link>
            </div>

            <div className="w-full pt-4 sm:pt-5 border-t border-white/20">
              <p className="font-['Poppins',sans-serif] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-medium text-white/90">
                Authoritative data. Explicit ownership. Controlled handoffs.
                Evidence-aware operations.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Specimen Card & Architecture Background */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="w-full lg:flex-1 max-w-[580px] lg:max-w-none flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] min-h-[460px] sm:min-h-[560px] flex items-center justify-center">
              {/* Architectural image backdrop */}
              <div className="absolute right-0 top-0 w-[80%] sm:w-[75%] h-[440px] sm:h-[560px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl">
                <Image
                  src="/business-operations/hero-building-floors.png"
                  alt="Rows of building floors rising in parallel lines"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001315]/80 via-transparent to-transparent" />
              </div>

              {/* Glassmorphic Specimen Card */}
              <div
                className="relative z-10 w-[96%] sm:w-[438px] p-4 sm:p-[19px] rounded-[14px] sm:rounded-[16px] backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(0, 25, 30, 0.92)",
                  border: "1px solid rgba(52, 212, 202, 0.5)",
                  boxShadow: "0px 0px 24px 0px rgba(52, 212, 202, 0.25)",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/10 gap-2">
                  <span className="font-['Poppins',sans-serif] text-[9.5px] sm:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] text-[#4DDCAD] uppercase truncate">
                    OPERATING LANES · THIS CYCLE
                  </span>
                  <span className="font-['Poppins',sans-serif] text-[9.5px] sm:text-[11px] font-semibold text-[#CBD5E1] uppercase shrink-0">
                    SPECIMEN · SYNTHETIC
                  </span>
                </div>

                {/* Lanes List */}
                <div className="flex flex-col gap-2 sm:gap-2.5 py-2.5 sm:py-3">
                  {lanes.map((lane, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors gap-2"
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#247780]/30 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4DDCAD]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] sm:text-[13px] font-semibold text-white truncate">
                            {lane.title}
                          </span>
                          <span className="font-['Poppins',sans-serif] text-[10px] sm:text-[11px] text-[#CBD5E1] truncate">
                            {lane.detail}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full ${lane.statusBg} shrink-0`}
                      >
                        {lane.hasDot && (
                          <span
                            className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${lane.dotBg}`}
                          />
                        )}
                        <span
                          className={`font-['Poppins',sans-serif] text-[10px] sm:text-[11px] font-semibold ${lane.statusText}`}
                        >
                          {lane.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Badges footer */}
                <div className="pt-2.5 sm:pt-3 border-t border-white/10 flex flex-wrap gap-1 sm:gap-1.5">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#4DDCAD]"
                      style={{
                        border: "1px solid rgba(52, 212, 202, 0.5)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
