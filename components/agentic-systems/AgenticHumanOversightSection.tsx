import React from "react";
import { ArrowRight, Check } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "Pause & intervene",
    description: "Stop before the next side effect; inspect and choose.",
  },
  {
    title: "Approve or reject",
    description: "Reviewer, scope, time and reason recorded.",
  },
  {
    title: "Cancel",
    description: "Stop remaining work and mark the state incomplete.",
  },
  {
    title: "Retry or compensate",
    description: "Only when safe and supported; duplicate risk shown.",
  },
  {
    title: "Manual completion",
    description:
      "A person finishes outside the agent path and records the outcome.",
  },
  {
    title: "Escalate",
    description: "To security, compliance, owner, developer or support.",
  },
];

export default function AgenticHumanOversightSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            HUMAN OVERSIGHT, EXCEPTIONS & RECOVERY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            A person can always step in
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
            Pause, approve, cancel, retry safely, complete manually or escalate,
            with every decision recorded.
          </p>
        </div>

        {/* Main Grid: Left Image Specimen, Right Run Control Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start mb-12">
          {/* Left Column: Image Specimen (/age/17.png) & Feature List */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-8">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-[#00191E] border border-gray-200/60 h-[260px]">
              <img
                src="/age/17.png"
                alt="Human operators providing review and oversight"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>

            {/* Feature Check List */}
            <div className="space-y-4 w-full">
              {FEATURE_ITEMS.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#2b7a78]/10 text-[#2b7a78] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#0B132B]">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Agent Run RUN-2219 Specimen Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-2xl border border-gray-200/60 p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <span className="text-xs font-bold text-[#0B132B]">
                Agent run · RUN-2219
              </span>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100 text-xs">
              <div>
                <span className="text-gray-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                  Agent
                </span>
                <span className="font-bold text-[#0B132B]">INV-EXC-01</span>
              </div>
              <div>
                <span className="text-gray-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                  Step
                </span>
                <span className="font-bold text-[#0B132B]">
                  4 of 5 · Send supplier query
                </span>
              </div>
              <div>
                <span className="text-gray-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                  Reviewer
                </span>
                <span className="font-bold text-[#0B132B]">AP Specialist</span>
              </div>
            </div>

            {/* State Banner */}
            <div className="mb-6">
              <span className="text-gray-400 font-mono text-[10px] uppercase tracking-wider block mb-2">
                State
              </span>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <span>Awaiting approval</span>
              </div>
            </div>

            {/* Description Text */}
            <div className="mb-8 text-xs text-gray-700 leading-relaxed font-medium">
              Draft prepared from contract v4 and invoice INV-7781. One source
              flagged stale (rate card 2025).
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button className="bg-[#2b7a78] text-white hover:bg-[#236361] text-xs font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm">
                Approve
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
                Reject
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
                Pause
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
                Cancel
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
                Complete manually
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
                Escalate
              </button>
            </div>

            <div className="pt-4 border-t border-gray-100 text-[10px] text-gray-400">
              Retry only for retry-safe actions. Rollback only where the
              underlying system supports a compensating action.
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review recovery <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
