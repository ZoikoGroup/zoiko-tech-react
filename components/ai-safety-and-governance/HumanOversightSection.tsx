import React from "react";
import Image from "next/image";
import Link from "next/link";

interface OversightStep {
  step: string;
  title: string;
  description: string;
}

const oversightSteps: OversightStep[] = [
  {
    step: "01",
    title: "Reviewer assignment",
    description: "A named role or accountable team, never a generic badge.",
  },
  {
    step: "02",
    title: "Review trigger",
    description: "Use-case, risk, uncertainty, policy or incident condition.",
  },
  {
    step: "03",
    title: "Review action",
    description: "Accept, reject, request evidence, revise, escalate, suspend.",
  },
  {
    step: "04",
    title: "Override",
    description: "Only where the workflow supports it; actor and reason captured.",
  },
  {
    step: "05",
    title: "Escalation",
    description: "Governance, security, privacy, legal, product, operations, support.",
  },
  {
    step: "06",
    title: "Manual fallback",
    description: "Only if verified; no universal continuity implied.",
  },
  {
    step: "07",
    title: "Disable / suspend",
    description: "Visible state that blocks new use.",
  },
  {
    step: "08",
    title: "Re-entry",
    description: "Review, evaluation and approval before returning.",
  },
  {
    step: "09",
    title: "Customer responsibility",
    description: "Configured duties where customers keep the decision.",
  },
];

interface FailSafeCondition {
  title: string;
  description: string;
  badgeStyle: {
    bg: string;
    text: string;
  };
}

const failSafeConditions: FailSafeCondition[] = [
  {
    title: "Insufficient evidence",
    description: "Review required; no positive safety claim",
    badgeStyle: { bg: "bg-[#FEF3C7]", text: "text-[#92400E]" },
  },
  {
    title: "Stale evaluation",
    description: "Approval withheld until re-evaluated",
    badgeStyle: { bg: "bg-slate-100", text: "text-[#334155]" },
  },
  {
    title: "Provider / model unknown",
    description: "Use not published or expanded",
    badgeStyle: { bg: "bg-slate-100", text: "text-[#334155]" },
  },
  {
    title: "Dependency degraded",
    description: "Uncertainty and status route shown",
    badgeStyle: { bg: "bg-[#FEF3C7]", text: "text-[#92400E]" },
  },
  {
    title: "Unexpected output",
    description: "Escalated and investigated",
    badgeStyle: { bg: "bg-purple-100", text: "text-[#6B21A8]" },
  },
  {
    title: "Incident active",
    description: "Suspended or investigating; never resolved by inference",
    badgeStyle: { bg: "bg-[#FEE2E2]", text: "text-[#991B1B]" },
  },
  {
    title: "Governance owner unavailable",
    description: "Fallback owner only if defined, otherwise blocked",
    badgeStyle: { bg: "bg-slate-100", text: "text-[#334155]" },
  },
];

export const HumanOversightSection: React.FC = () => {
  return (
    <section id="oversight" className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Title, Dual Images, 9-Step List */}
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#247780] font-poppins uppercase">
              Human oversight, escalation & fail-safe
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0F172A] font-plus-jakarta leading-tight">
              Oversight with a name, a<br className="hidden md:inline" /> trigger and a way back
            </h2>
          </div>

          {/* Dual Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className="relative h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/ai-safety-and-governance/oversight-city-terrace.png"
                alt="Professional on a city terrace representing human oversight role"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>
            <div className="relative h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/ai-safety-and-governance/oversight-professional-building.png"
                alt="Professional by modern architecture representing governance accountability"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>
          </div>

          {/* 9-Step Oversight Ordered List */}
          <div className="flex flex-col divide-y divide-slate-100">
            {oversightSteps.map((step) => (
              <div key={step.step} className="py-3 flex items-start gap-4">
                <span className="text-sm font-bold text-[#247780] font-mono shrink-0 w-6 pt-0.5">
                  {step.step}
                </span>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#0F172A] font-plus-jakarta">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#475569] font-poppins mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Fail-Safe State Contract Card */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="bg-[#E9F9F8] border border-[#CFE9EA] rounded-[22px] p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-wider text-[#247780] font-poppins uppercase">
                FAIL-SAFE STATE CONTRACT
              </span>
              <h3 className="text-2xl md:text-[26px] font-bold text-[#0F172A] font-plus-jakarta leading-snug">
                When something is missing, the answer is “not yet”
              </h3>
            </div>

            {/* 2-Column Grid of 7 Fail-Safe Conditions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {failSafeConditions.map((cond, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col gap-2 shadow-xs"
                >
                  <span
                    className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold self-start ${cond.badgeStyle.bg} ${cond.badgeStyle.text}`}
                  >
                    {cond.title}
                  </span>
                  <p className="text-xs text-[#334155] font-poppins leading-relaxed">
                    {cond.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <Link
                href="#oversight"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#247780] hover:text-[#195B62] transition-colors group"
              >
                <span>Review oversight</span>
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
        </div>
      </div>
    </section>
  );
};
