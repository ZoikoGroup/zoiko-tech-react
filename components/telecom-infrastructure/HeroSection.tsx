import React from "react";
import { User, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[720px] bg-[#001315] text-white overflow-hidden flex items-center">
      {/* Background Bridge Image with Dark Teal Overlay / Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-100 mix-blend-luminosity"
        style={{
          backgroundImage: `url('/tele/1.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b0a] via-[#050b0a]/90 to-[#050b0a]/40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column: Heading, Paragraph, CTA Buttons */}
        <div className="flex flex-col max-w-[640px]">
          {/* Headline */}
          <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] font-sans text-white">
            Build telecom services on infrastructure designed to{" "}
            <span className="text-[#34d399]">connect, evolve and operate</span>
            {" "}as one estate.
          </h1>

          {/* Body Paragraph */}
          <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.6] text-[#9ca3af] font-normal">
            Zoiko Tech brings OSS/BSS, subscriber operations, identity, cloud
            and digital foundations, APIs, integrations and communications
            infrastructure into a clearer architecture for telecom and MVNO
            environments, supporting staged modernization without turning the
            operator stack into another set of silos.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#227271] hover:bg-[#1a5b5a] text-white text-[15px] font-medium transition-all shadow-[0_0_20px_rgba(34,114,113,0.3)] group"
            >
              Explore telecom architecture
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-transparent hover:bg-white/[0.04] text-white text-[15px] font-medium border border-white/20 transition-all"
            >
              Discuss your telecom stack
            </a>
          </div>
        </div>

        {/* Right Column: Floating Floating Glass Cards */}
        <div className="relative w-full lg:w-[480px] h-[360px] flex flex-col justify-center gap-4 self-center lg:self-auto">
          {/* Card 1: System of Record */}
          <div className="w-full max-w-[420px] ml-auto bg-[#0d1716]/90 backdrop-blur-xl border border-[#1f3835] rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#6b7280] font-semibold mb-2">
              <span>System of record</span>
              <span>Specimen • Synthetic data</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#112422] border border-[#234845] flex items-center justify-center text-[#34d399]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">
                    Subscriber / account
                  </div>
                  <div className="text-[12px] text-[#6b7280]">
                    Owned by: Billing system
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0e2723] border border-[#1b483f] text-[#34d399] text-[12px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                Active
              </div>
            </div>
          </div>

          {/* Card 2: Interface Contract */}
          <div className="w-full max-w-[420px] mr-auto bg-[#0d1716]/90 backdrop-blur-xl border border-[#1f3835] rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#6b7280] font-semibold mb-2">
              <span>Interface contract</span>
              <span className="text-[#9ca3af] normal-case tracking-normal">
                Billing system
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[14px] font-semibold text-white">
                  ZoikoNex
                </div>
                <div className="text-[12px] text-[#6b7280] mt-0.5">
                  service.activated - v2
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0e2723] border border-[#1b483f] text-[#34d399] text-[12px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                Healthy
              </div>
            </div>
            {/* Progress / Status Bar */}
            <div className="mt-3 w-full bg-[#142321] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#34d399] h-full w-full rounded-full" />
            </div>
          </div>

          {/* Card 3: Migration Waves */}
          <div className="w-full max-w-[420px] ml-auto bg-[#0d1716]/90 backdrop-blur-xl border border-[#1f3835] rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#6b7280] font-semibold mb-2">
              <span>Migration waves</span>
              <span className="text-[#34d399] font-medium normal-case tracking-normal">
                Wave 2 of 4
              </span>
            </div>
            {/* Wave Segments */}
            <div className="grid grid-cols-4 gap-1.5 my-2.5">
              <div className="h-1 bg-[#34d399] rounded-full" />
              <div className="h-1 bg-[#34d399] rounded-full" />
              <div className="h-1 bg-[#1c3330] rounded-full" />
              <div className="h-1 bg-[#1c3330] rounded-full" />
            </div>
            <div className="text-[12px] text-[#9ca3af]">
              Pattern: coexist • legacy CRM stays system of record
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
