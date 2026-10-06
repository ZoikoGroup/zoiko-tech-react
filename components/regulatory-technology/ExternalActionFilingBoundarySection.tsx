import React from "react";
import { ArrowRight, ArrowRightLeft, X } from "lucide-react";

interface FilingStage {
  stage: string;
  title: string;
  description: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  dotBg: string;
}

interface FailureBranch {
  title: string;
  description: string;
}

const FILING_STAGES: FilingStage[] = [
  {
    stage: "STAGE 1",
    title: "Prepare",
    description: "Draft, calculated, assembled.",
    badge: "Prepare",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    dotBg: "bg-blue-600",
  },
  {
    stage: "STAGE 2",
    title: "Approve",
    description: "Authorized for the next action.",
    badge: "Approve",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    dotBg: "bg-emerald-600",
  },
  {
    stage: "STAGE 3",
    title: "Transmit",
    description: "Sent to approved endpoint · ref TX-118.",
    badge: "Transmit",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    dotBg: "bg-blue-600",
  },
  {
    stage: "STAGE 4",
    title: "Acknowledged",
    description: "Receipt only, not acceptance.",
    badge: "Acknowledged",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    dotBg: "bg-blue-600",
  },
  {
    stage: "STAGE 5",
    title: "Accepted",
    description: "Authoritative external status.",
    badge: "Accepted",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    dotBg: "bg-emerald-600",
  },
];

const FAILURE_BRANCHES: FailureBranch[] = [
  {
    title: "Rejected / failed",
    description: "Error, next action and owner; never completed.",
  },
  {
    title: "Cancelled / withdrawn",
    description: "Only where both system and policy support it.",
  },
  {
    title: "Unknown / stale",
    description: "Render unknown; refresh or review.",
  },
];

export default function ExternalActionFilingBoundarySection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full mb-16">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
              <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
                §10
              </span>
            </div>
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
              EXTERNAL ACTION / FILING BOUNDARY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
              Prepared is not submitted. Submitted is not <br /> accepted.
            </h2>
            <p className="text-[#4A5568] text-sm md:text-base leading-relaxed max-w-xl">
              Preparation, routing and evidence for filings or notifications,
              only where the responsible product and registry define that
              capability.
            </p>
          </div>

          {/* Right Column: Typewriter Image (rounded-2xl only, no bg/border/shadow) */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full h-[220px]">
              <img
                src="/reg/18.png"
                alt="Vintage typewriter filing boundary"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* 5-Stage Filing Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full mb-10 items-center">
          {FILING_STAGES.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 w-full">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex flex-col justify-between w-full h-[200px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 block mb-1">
                    {item.stage}
                  </span>
                  <h3 className="text-sm font-bold text-[#0B132B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${item.badgeBg} ${item.badgeText}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.dotBg} mr-1.5`}
                    ></span>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Connector between cards */}
              {index < FILING_STAGES.length - 1 && (
                <div className="hidden lg:flex text-gray-400 shrink-0">
                  {index === 1 || index === 2 ? (
                    <span className="text-red-500 font-bold text-sm">≠</span>
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Failure Branches Section */}
        <div className="w-full mb-12">
          <div className="mb-4">
            <div className="text-red-600 font-bold text-[10px] tracking-widest uppercase">
              FAILURE BRANCHES · ALWAYS VISIBLE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAILURE_BRANCHES.map((branch, index) => (
              <div
                key={index}
                className="bg-red-50/40 border border-red-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <h4 className="text-xs font-bold text-red-900">
                      {branch.title}
                    </h4>
                  </div>
                  <p className="text-xs text-red-800/80 leading-relaxed pl-3.5">
                    {branch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Link / Notice */}
        <div className="pt-4 border-t border-gray-200/60 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            No connectivity, filing coverage or universal reversal is implied.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review action boundary <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
