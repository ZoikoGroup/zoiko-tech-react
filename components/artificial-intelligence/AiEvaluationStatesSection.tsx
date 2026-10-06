import React from "react";
import { ArrowRight } from "lucide-react";

interface HonestState {
  title: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
  description: string;
}

const HONEST_STATES: HonestState[] = [
  {
    title: "Ready / supported",
    badgeBg: "bg-emerald-500/10",
    badgeColor: "text-emerald-700",
    badgeBorder: "border-emerald-500/30",
    description: "Source, model, policy and review context available.",
  },
  {
    title: "Insufficient evidence",
    badgeBg: "bg-amber-500/10",
    badgeColor: "text-amber-700",
    badgeBorder: "border-amber-500/30",
    description: 'Shows "Needs information" or review required.',
  },
  {
    title: "Conflicting sources",
    badgeBg: "bg-rose-500/10",
    badgeColor: "text-rose-700",
    badgeBorder: "border-rose-500/30",
    description: "Conflict surfaced and routed for resolution.",
  },
  {
    title: "Stale / unknown",
    badgeBg: "bg-indigo-500/10",
    badgeColor: "text-indigo-700",
    badgeBorder: "border-indigo-500/30",
    description: "Shows last confirmed time; avoids a confident answer.",
  },
  {
    title: "Policy blocked",
    badgeBg: "bg-rose-500/10",
    badgeColor: "text-rose-700",
    badgeBorder: "border-rose-500/30",
    description: "Stops and explains the next route.",
  },
  {
    title: "Model unavailable",
    badgeBg: "bg-sky-500/10",
    badgeColor: "text-sky-700",
    badgeBorder: "border-sky-500/30",
    description: "Workflow state preserved; fallback or support route.",
  },
  {
    title: "Invalid output",
    badgeBg: "bg-rose-500/10",
    badgeColor: "text-rose-700",
    badgeBorder: "border-rose-500/30",
    description: "Rejected output never flows downstream.",
  },
  {
    title: "Human review pending",
    badgeBg: "bg-amber-500/10",
    badgeColor: "text-amber-700",
    badgeBorder: "border-amber-500/30",
    description: "No downstream completion until reviewed.",
  },
  {
    title: "Downstream failure",
    badgeBg: "bg-blue-500/10",
    badgeColor: "text-blue-700",
    badgeBorder: "border-blue-500/30",
    description: "AI output and system handoff tracked separately.",
  },
  {
    title: "Security / privacy concern",
    badgeBg: "bg-rose-500/10",
    badgeColor: "text-rose-700",
    badgeBorder: "border-rose-500/30",
    description: "Processing stops; incident or privacy path.",
  },
];

export default function AiEvaluationStatesSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            EVALUATION & OPERATIONAL INTEGRITY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Ten honest states, so nothing looks more certain than it is
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
            When sources, models, policies or downstream systems are not ready,
            the experience says so plainly.
          </p>
        </div>

        {/* 2 x 5 Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full mb-12">
          {HONEST_STATES.map((state, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow-xl border border-gray-200/60 flex flex-col justify-between"
            >
              <div>
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${state.badgeBg} ${state.badgeColor} ${state.badgeBorder}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span>{state.title}</span>
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review states <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            
          </a>
        </div>
      </div>
    </section>
  );
}
