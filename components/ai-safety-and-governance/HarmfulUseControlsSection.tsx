import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TrafficSignal {
  color: string;
  glow: string;
  title: string;
  description: string;
  footer: string;
}

const trafficSignals: TrafficSignal[] = [
  {
    color: "bg-[#22C55E]",
    glow: "shadow-[0_0_22px_rgba(34,197,94,0.9)]",
    title: "Allowed /\napproved",
    description: "Approved within stated scope and controls.",
    footer: "Scope, owner, currentness, evidence shown.",
  },
  {
    color: "bg-[#84CC16]",
    glow: "shadow-[0_0_22px_rgba(132,204,22,0.9)]",
    title: "Allowed with\nconditions",
    description: "Requires safeguards, approval or monitoring.",
    footer: "Conditions and unmet conditions shown.",
  },
  {
    color: "bg-[#F59E0B]",
    glow: "shadow-[0_0_22px_rgba(245,158,11,0.9)]",
    title: "Review required",
    description: "Approval not made, renewed, or context changed.",
    footer: "Production claims blocked; routed to review.",
  },
  {
    color: "bg-[#F97316]",
    glow: "shadow-[0_0_22px_rgba(249,115,22,0.9)]",
    title: "Restricted",
    description: "Only for narrowed users, data, environments or authority.",
    footer: "Restriction surfaced; no broad marketing.",
  },
  {
    color: "bg-[#EF4444]",
    glow: "shadow-[0_0_22px_rgba(239,68,68,0.9)]",
    title: "Prohibited",
    description: "Current policy disallows the use.",
    footer: "Blocked. No workaround path.",
  },
  {
    color: "bg-[#94A3B8]",
    glow: "shadow-[0_0_22px_rgba(148,163,184,0.9)]",
    title: "Unknown /\nunavailable",
    description: "Policy missing, stale or conflicting.",
    footer: "Fails closed; never approved.",
  },
];

export const HarmfulUseControlsSection: React.FC = () => {
  return (
    <section id="harmful-use" className="relative w-full bg-[#001315] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background Image with Opacity 0.20 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image
          src="/ai-safety-and-governance/harmful-use-controls-traffic.png"
          alt="Atmospheric light background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2.5 sm:gap-3 max-w-3xl">
          <span className="text-xs md:text-sm font-semibold tracking-wider text-white font-poppins uppercase">
            Harmful, restricted & prohibited use controls
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white font-plus-jakarta leading-tight">
            Six policy signals, read like a traffic light
          </h2>
          <p className="text-[#E2E8F0] text-xs sm:text-sm md:text-base font-poppins leading-relaxed">
            No speculative prohibited-use catalog here. Exact categories come from current Responsible
            AI, Acceptable Use, product, security, legal and governance sources.
          </p>
        </div>

        {/* 6 Traffic Light Column Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 items-stretch">
          {trafficSignals.map((signal, idx) => (
            <div
              key={idx}
              className="bg-[#002227]/75 backdrop-blur-sm border border-[rgba(52,212,202,0.2)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-4 sm:gap-5 hover:border-[rgba(52,212,202,0.5)] transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {/* Glowing Light Indicator */}
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${signal.color} ${signal.glow}`} />

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-white font-plus-jakarta sm:whitespace-pre-line break-words">
                  {signal.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#E2E8F0] font-poppins leading-relaxed">
                  {signal.description}
                </p>
              </div>

              {/* Turquoise Footer Note */}
              <div className="pt-2 border-t border-[rgba(52,212,202,0.15)]">
                <span className="text-xs font-medium text-[#4DDCAD] font-poppins leading-snug block">
                  {signal.footer}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div>
          <Link
            href="#registry"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DDCAD] hover:underline transition-colors group"
          >
            <span>Review controls</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
