import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AuthorityStep {
  step: number;
  badge: string;
  badgeBg: string;
  badgeText: string;
  dotColor?: string;
  desc: string;
  footer: string;
  heightStyle: string;
  bgFill: string;
}

const steps: AuthorityStep[] = [
  {
    step: 1,
    badge: "AI-derived output",
    badgeBg: "bg-[#EDE9FE]",
    badgeText: "text-[#5B21B6]",
    dotColor: "bg-[#7C3AED]",
    desc: "Analysis, recommendation, draft or classification.",
    footer: "Not automatically authoritative.",
    heightStyle: "h-[170px]",
    bgFill: "bg-[rgba(36,119,128,0.16)]",
  },
  {
    step: 2,
    badge: "Human review",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#92400E]",
    dotColor: "bg-[#D97706]",
    desc: "Checks evidence and limitations; accepts, rejects, escalates.",
    footer: "Reviewer identity and role visible.",
    heightStyle: "h-[214px]",
    bgFill: "bg-[rgba(36,119,128,0.24)]",
  },
  {
    step: 3,
    badge: "Human approval",
    badgeBg: "bg-[#DBF2ED]",
    badgeText: "text-[#195B62]",
    dotColor: "bg-[#0D9488]",
    desc: "Explicit decision for the next material step.",
    footer: "Scope, time and conditions recorded.",
    heightStyle: "h-[258px]",
    bgFill: "bg-[rgba(36,119,128,0.32)]",
  },
  {
    step: 4,
    badge: "Agentic execution",
    badgeBg: "bg-[#E0F2FE]",
    badgeText: "text-[#075985]",
    dotColor: "bg-[#0284C7]",
    desc: "Controlled action through approved tools.",
    footer: "Agentic Systems owns execution.",
    heightStyle: "h-[302px]",
    bgFill: "bg-[rgba(36,119,128,0.40)]",
  },
  {
    step: 5,
    badge: "Authoritative system result",
    badgeBg: "bg-[#F0FDFA]",
    badgeText: "text-[#195B62]",
    desc: "State returned by the system of record.",
    footer: "Distinct from AI-reported success.",
    heightStyle: "h-[346px]",
    bgFill: "bg-[rgba(36,119,128,0.48)]",
  },
  {
    step: 6,
    badge: "Authoritative human decision",
    badgeBg: "bg-[#F0FDFA]",
    badgeText: "text-[#195B62]",
    desc: "The responsible person or organization decides.",
    footer: "AI supports; authority stays human.",
    heightStyle: "h-[390px]",
    bgFill: "bg-[rgba(36,119,128,0.56)]",
  },
];

export default function AuthorityRightsSection() {
  return (
    <section id="authority-rights" className="relative w-full bg-[#001315] text-white py-14 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image at 0.22 opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.22] z-0">
        <Image
          src="/ai-safety-and-governance/authority-decision-steps.png"
          alt="Authority decision steps background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Header matching Figma */}
        <div className="flex flex-col gap-2 sm:gap-2.5 max-w-[820px] mb-8 sm:mb-10 lg:mb-12">
          <span className="font-poppins text-xs font-semibold tracking-[0.16em] text-white uppercase">
            AUTHORITY & DECISION RIGHTS
          </span>
          <h2 className="font-plus-jakarta font-bold text-2xl sm:text-4xl lg:text-[44px] leading-[1.18] text-white">
            Six steps of authority, climbing toward<br className="hidden sm:inline" /> the final decision
          </h2>
          <p className="font-poppins text-xs sm:text-sm md:text-base text-[#E2E8F0] leading-relaxed pt-0.5 sm:pt-1">
            Each step up adds accountability. AI output sits at the bottom, and never jumps the stairs.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="lg:hidden flex items-center gap-1.5 text-xs text-[#4DDCAD]/90 mb-3">
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          <span>Swipe horizontally to view all 6 authority steps</span>
        </div>

        {/* 6-Step Climbing Staircase - Preserves stair climb metaphor with smooth edge-to-edge scroll on mobile */}
        <div className="overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[680px] lg:min-w-0 grid grid-cols-6 gap-2 sm:gap-2.5 items-end border-b-2 border-[#4DDCAD] pb-0">
            {steps.map((st) => (
              <div
                key={st.step}
                className={`w-full ${st.heightStyle} ${st.bgFill} border-t border-x border-[rgba(52,212,202,0.5)] rounded-t-[16px] p-3.5 sm:p-4 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-plus-jakarta font-bold text-xl sm:text-2xl text-[#4DDCAD] leading-none">
                    {st.step}
                  </span>

                  {/* Badge with leading dot */}
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${st.badgeBg} w-fit max-w-full`}>
                    {st.dotColor && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${st.dotColor}`} />}
                    <span className={`font-poppins text-[10px] font-semibold leading-tight truncate ${st.badgeText}`}>
                      {st.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-poppins text-[11px] sm:text-xs leading-snug text-[#E2E8F0] mt-0.5">
                    {st.desc}
                  </p>
                </div>

                {/* Bottom Footer Note (No border line, clean whitespace) */}
                <div className="pb-1">
                  <span className="font-poppins text-[11px] font-medium text-white leading-tight block">
                    {st.footer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link directly below the turquoise baseline */}
        <div className="mt-6 flex justify-start">
          <Link
            href="#authority-rights"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-[#4DDCAD] hover:underline group"
          >
            <span>Review authority</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
