import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, AlertTriangle } from "lucide-react";

const inputItems = [
  {
    title: "Purpose limitation",
    desc: "Only for the approved purpose; no silent expansion.",
  },
  {
    title: "Authoritative source",
    desc: "AI summary never replaces the record.",
  },
  {
    title: "Access & identity",
    desc: "AI cannot reveal what a principal could not access.",
  },
  {
    title: "Data minimization",
    desc: "Minimum necessary approved data.",
  },
  {
    title: "Sensitive / regulated data",
    desc: "Only where product, privacy, security and legal approve.",
  },
  {
    title: "Training / reuse",
    desc: "No claim either way without an approved source.",
  },
  {
    title: "Prompt & instruction data",
    desc: "Treated as sensitive; never in analytics.",
  },
];

const outputItems = [
  {
    badge: "Draft / generated",
    badgeBg: "bg-[#F3E8FF]",
    badgeText: "text-[#6B21A8]",
    dotColor: "bg-[#7C3AED]",
    desc: "Clearly derived.",
  },
  {
    badge: "Recommendation",
    badgeBg: "bg-[#E0F2FE]",
    badgeText: "text-[#0369A1]",
    dotColor: "bg-[#0284C7]",
    desc: "Basis, limitations and reviewer shown.",
  },
  {
    badge: "Classification / score",
    badgeBg: "bg-[#F1F5F9]",
    badgeText: "text-[#334155]",
    dotColor: "bg-[#64748B]",
    desc: "Definition and scope; not legal truth.",
  },
  {
    badge: "Low-evidence / ambiguous",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#92400E]",
    dotColor: "bg-[#D97706]",
    desc: "Review required; no forced certainty.",
  },
  {
    badge: "Blocked / refused",
    badgeBg: "bg-[#FEE2E2]",
    badgeText: "text-[#991B1B]",
    dotColor: "bg-[#EF4444]",
    desc: "Reason category; no bypass details.",
  },
  {
    badge: "Approved agentic action",
    badgeBg: "bg-[#E0F2FE]",
    badgeText: "text-[#0369A1]",
    dotColor: "bg-[#0284C7]",
    desc: "Only under defined authority; runs in Agentic Systems.",
  },
  {
    badge: "Human-approved outcome",
    badgeBg: "bg-[#DBF2ED]",
    badgeText: "text-[#195B62]",
    dotColor: "bg-[#0D9488]",
    desc: "Approver and evidence captured.",
  },
  {
    badge: "External / regulated action",
    badgeBg: "bg-[#FEE2E2]",
    badgeText: "text-[#991B1B]",
    dotColor: "bg-[#EF4444]",
    desc: "No filing, financial, employment, health, legal or government authority implied.",
  },
];

export default function InputGovernanceSection() {
  return (
    <section id="input-governance" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Half: IN (White background) */}
        <div className="bg-white text-[#0F172A] px-4 sm:px-8 lg:px-14 py-12 sm:py-16 md:py-18 flex flex-col justify-between">
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Top Image with IN pill badge */}
            <div className="relative w-full h-[190px] sm:h-[230px] md:h-[250px] rounded-[18px] overflow-hidden shadow-sm">
              <Image
                src="/ai-safety-and-governance/input-waterfall-bounded.png"
                alt="Waterfall flowing over rocks"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-3.5 left-3.5 z-10 px-3 sm:px-3.5 py-1 rounded-full bg-white shadow-md font-plus-jakarta font-bold text-xs tracking-wider text-[#247780]">
                IN →
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-0.5 sm:pt-1">
              <span className="font-poppins text-xs font-semibold tracking-[0.16em] text-[#247780] uppercase">
                Input, data & source governance
              </span>
              <h2 className="font-plus-jakarta font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#0F172A]">
                What goes in is bounded
              </h2>
            </div>

            {/* Checklist with Filter icons and dividing lines */}
            <div className="flex flex-col divide-y divide-slate-100 border-t border-slate-100 pt-1">
              {inputItems.map((item) => (
                <div key={item.title} className="py-3 flex items-start gap-3 sm:gap-3.5">
                  <Filter className="w-4 h-4 flex-shrink-0 text-[#247780] mt-1 rotate-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-plus-jakarta font-bold text-sm text-[#0F172A]">
                      {item.title}
                    </span>
                    <span className="font-poppins text-xs text-[#475569] leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="#input-governance"
              className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-[#247780] hover:underline group"
            >
              <span>Review inputs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Half: OUT (Swamp background) */}
        <div className="bg-[#001315] text-white px-4 sm:px-8 lg:px-14 py-12 sm:py-16 md:py-18 flex flex-col justify-between">
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Top Image with OUT pill badge */}
            <div className="relative w-full h-[190px] sm:h-[230px] md:h-[250px] rounded-[18px] overflow-hidden shadow-sm">
              <Image
                src="/ai-safety-and-governance/input-glacier-data-lake.png"
                alt="Glacier edge meeting dark water"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-3.5 right-3.5 z-10 px-3 sm:px-3.5 py-1 rounded-full bg-[#4DDCAD] shadow-md font-plus-jakarta font-bold text-xs tracking-wider text-[#001315]">
                → OUT
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-0.5 sm:pt-1">
              <span className="font-poppins text-xs font-semibold tracking-[0.16em] text-white uppercase">
                Output, action & decision boundaries
              </span>
              <h2 className="font-plus-jakarta font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-white">
                What comes out is labeled
              </h2>
            </div>

            {/* Badged Items - Full width pill bars with subtext underneath */}
            <div className="flex flex-col gap-3.5 pt-1">
              {outputItems.map((item) => (
                <div key={item.badge} className="flex flex-col gap-1">
                  <div className={`w-full py-1.5 px-3.5 rounded-full ${item.badgeBg} flex items-center gap-2 shadow-xs`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.dotColor}`} />
                    <span className={`font-poppins text-xs font-semibold ${item.badgeText}`}>
                      {item.badge}
                    </span>
                  </div>
                  <span className="font-poppins text-xs text-[#CBD5E1] pl-3.5">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* High-Impact Boundary Alert Card */}
            <div className="p-4 rounded-xl bg-[#002227]/90 border border-[rgba(52,212,202,0.25)] flex items-start gap-3 mt-1 shadow-sm">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-[#4DDCAD] mt-0.5" />
              <p className="font-poppins text-xs leading-relaxed text-[#E2E8F0]">
                <strong className="text-white font-semibold">High-impact boundary.</strong>{" "}
                “Human in the loop” is not enough copy. The actual review point, responsibility
                and evidence must be defined.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="#input-governance"
              className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-[#4DDCAD] hover:underline group"
            >
              <span>Review output boundaries</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
