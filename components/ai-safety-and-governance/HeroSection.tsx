import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#001315] text-white">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/ai-safety-and-governance/hero-governance-bg.png"
          alt="AI Safety & Governance Background"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 19, 21, 0.55) 0%, rgba(0, 19, 21, 0.35) 35%, rgba(0, 19, 21, 0.85) 72%, rgba(0, 19, 21, 1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 19, 21, 0.92) 0%, rgba(0, 19, 21, 0.65) 55%, rgba(0, 19, 21, 0.25) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pt-14 pb-20 md:pt-24 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-8">
          {/* Left Column Content */}
          <div className="flex-1 max-w-[760px] flex flex-col items-start w-full">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001315]/60 border border-[rgba(52,212,202,0.55)] backdrop-blur-sm shadow-[0_0_15px_rgba(52,212,202,0.15)] mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4DDCAD] shadow-[0_0_10px_#4DDCAD]" />
              <span className="font-poppins text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-white uppercase">
                AI Safety and Governance
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-plus-jakarta font-extrabold text-3xl sm:text-5xl lg:text-[55px] leading-[1.16] sm:leading-[1.12] tracking-[-0.03em] sm:tracking-[-0.04em] text-white mb-5 sm:mb-6">
              Govern AI by explicit{" "}
              <br className="hidden sm:inline" />
              purpose, authority, evaluation{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#4DDCAD]">and evidence.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-poppins text-sm sm:text-lg lg:text-[21px] leading-relaxed text-[#E2E8F0] max-w-[680px] mb-7 sm:mb-8 font-normal">
              AI Safety and Governance defines how AI and agent use cases are approved,
              evaluated, monitored, changed and escalated while keeping human and
              system authority, limitations, currentness and evidence visible.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto">
              <Link
                href="#intent-router"
                className="inline-flex items-center justify-center text-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#247780] hover:bg-[#1f666e] text-white font-poppins font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_10px_30px_rgba(36,119,128,0.5)] group w-full sm:w-auto"
              >
                <span>Explore AI governance architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center text-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/8 hover:bg-white/15 border border-white text-white font-poppins font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200 w-full sm:w-auto"
              >
                Discuss your AI governance requirements
              </Link>
            </div>
          </div>

          {/* Right Column Governed Use Case Aside Card */}
          <div className="w-full sm:max-w-md lg:max-w-[380px] lg:w-[380px] flex-shrink-0">
            <div className="w-full bg-[#00191E]/80 border border-[rgba(52,212,202,0.45)] rounded-[20px] sm:rounded-[22px] p-5 sm:p-6 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-poppins text-[10px] font-semibold tracking-[0.14em] text-[#4DDCAD] uppercase">
                  Governed Use Case
                </span>
                <span className="font-inter text-xs text-[#94A3B8] font-medium">
                  UC-0314
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-plus-jakarta text-xl font-bold text-white">
                  Supplier invoice summarizer
                </h3>
              </div>

              {/* 2x3 Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {/* Owner */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                  <span className="font-poppins text-[10px] font-medium text-[#CBD5E1] tracking-wider uppercase">
                    Owner
                  </span>
                  <span className="font-poppins text-[13px] font-semibold text-white">
                    AP Lead
                  </span>
                </div>

                {/* Authority */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                  <span className="font-poppins text-[10px] font-medium text-[#CBD5E1] tracking-wider uppercase">
                    Authority
                  </span>
                  <span className="font-poppins text-[13px] font-semibold text-white">
                    Recommend only
                  </span>
                </div>

                {/* Risk Class */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                  <span className="font-poppins text-[10px] font-medium text-[#CBD5E1] tracking-wider uppercase">
                    Risk Class
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FEF3C7] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#92400E]" />
                    <span className="font-poppins text-[11px] font-semibold text-[#92400E]">
                      Elevated
                    </span>
                  </div>
                </div>

                {/* Status */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                  <span className="font-poppins text-[10px] font-medium text-[#CBD5E1] tracking-wider uppercase">
                    Status
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FEF3C7] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#92400E]" />
                    <span className="font-poppins text-[11px] font-semibold text-[#92400E]">
                      Restricted (40)
                    </span>
                  </div>
                </div>

                {/* Evaluation */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                  <span className="font-poppins text-[10px] font-medium text-[#CBD5E1] tracking-wider uppercase">
                    Evaluation
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E2E8F0] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
                    <span className="font-poppins text-[11px] font-semibold text-[#334155]">
                      Stale
                    </span>
                  </div>
                </div>

                {/* Next Review */}
                <div className="bg-white/6 border border-[rgba(52,212,202,0.25)] rounded-xl p-3 flex flex-col gap-1">
                  <span className="font-poppins text-[10px] font-medium text-[#CBD5E1] tracking-wider uppercase">
                    Next Review
                  </span>
                  <span className="font-poppins text-[13px] font-semibold text-white">
                    02 Dec
                  </span>
                </div>
              </div>

              {/* Warning Alert Banner */}
              <div className="flex items-start gap-2.5 pt-2 text-[#FCD34D]">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#FCD34D]" />
                <p className="font-poppins text-xs leading-snug">
                  Provider update pending: prior approval is not inherited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
