import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IncidentStage {
  step: number;
  title: string;
  description: string;
  isSpecial?: boolean;
}

const incidentStages: IncidentStage[] = [
  { step: 1, title: "Observe", description: "Signal or report received" },
  { step: 2, title: "Report", description: "Safe report path; no sensitive case data" },
  {
    step: 3,
    title: "Contain",
    description: "Disable or suspend where governed",
    isSpecial: true,
  },
  { step: 4, title: "Investigate", description: "Evidence preserved safely" },
  { step: 5, title: "Correct", description: "Source-defined corrective action" },
  { step: 6, title: "Re-evaluate", description: "Review and evaluation as required" },
  { step: 7, title: "Re-enter", description: "Approval before restoring use" },
];

const postureCards = [
  {
    title: "Quality / performance",
    description: "Approved monitoring posture only; no invented dashboards.",
  },
  {
    title: "Safety / harmful behavior",
    description: "Escalation, incident state and containment where supported.",
  },
  {
    title: "Data / model drift",
    description: "Only if actually monitored.",
  },
  {
    title: "Security / abuse",
    description: "Routed to Cybersecurity and Responsible Disclosure.",
  },
  {
    title: "Privacy / data incident",
    description: "Routed to the authoritative privacy and security process.",
  },
  {
    title: "Provider dependency",
    description: "Unknown or degraded state stays explicit.",
  },
];

export const MonitoringIncidentsSection: React.FC = () => {
  return (
    <section id="monitoring" className="w-full bg-[#E9F9F8] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Top Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#247780] font-poppins uppercase">
              Monitoring, AI incidents & disablement
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0F172A] font-plus-jakarta leading-tight">
              Observe, contain,<br />investigate, and only then<br />re-enter
            </h2>
          </div>
          <div className="lg:col-span-5 relative w-full h-44 sm:h-52 md:h-56 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/ai-safety-and-governance/monitoring-incidents-forest.png"
              alt="Misty forest path illustrating continuous observation and containment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </div>
        </div>

        {/* 7-Stage Incident Lifecycle Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-[20px] sm:rounded-[22px] p-5 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6 shadow-sm">
          {/* Stepper Grid / Flex */}
          <div className="relative">
            {/* Connecting bar across steps on desktop */}
            <div className="hidden lg:block absolute top-5 left-10 right-10 h-0.5 bg-[#CFE9EA] -z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4 relative z-10">
              {incidentStages.map((stage) => (
                <div
                  key={stage.step}
                  className={`flex flex-col items-center text-center gap-1.5 sm:gap-2 ${
                    stage.step === 7 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      stage.isSpecial
                        ? "bg-[#FEE2E2] border-2 border-[#DC2626] text-[#991B1B] shadow-sm scale-105"
                        : "bg-white border-2 border-[#247780] text-[#247780]"
                    }`}
                  >
                    {stage.step}
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-plus-jakarta mt-1">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-[#475569] font-poppins leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Red Alert Callout */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-center text-center">
            <p className="text-xs md:text-sm font-semibold text-[#991B1B] font-poppins">
              No automatic “green” state. Re-entry always needs review and approval.
            </p>
          </div>
        </div>

        {/* 6 Posture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {postureCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-xl p-4 md:p-5 flex flex-col gap-1.5 shadow-xs"
            >
              <h4 className="text-sm font-bold text-[#0F172A] font-plus-jakarta">
                {card.title}
              </h4>
              <p className="text-xs md:text-sm text-[#475569] font-poppins leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div>
          <Link
            href="#monitoring"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#247780] hover:text-[#195B62] transition-colors group"
          >
            <span>Review incident model</span>
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
