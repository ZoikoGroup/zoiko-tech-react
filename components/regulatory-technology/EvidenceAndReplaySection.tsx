import React from "react";
import { ArrowRight } from "lucide-react";

const EVIDENCE_TAGS = [
  "Source evidence",
  "Applicability evidence",
  "Obligation evidence",
  "Control / workflow evidence",
  "Approval evidence",
  "External-action evidence",
  "Reconciliation evidence",
  "AI assistance evidence",
  "Replay object",
  "Limitation",
];

const REPLAY_ITEMS = [
  { label: "Source applied", value: "EU-REG-0142 v2" },
  { label: "Rule version", value: "Levy rule v2" },
  { label: "Applicability", value: "APP-198 · approved" },
  { label: "Approval", value: "APR-2911 · lead" },
  { label: "Receipt", value: "TX-102 · accepted" },
  { label: "Limitation", value: "Ledger confirmation missing" },
];

export default function EvidenceAndReplaySection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/reg/31.jpg"
          alt="Evidence and replay background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001315F2] to-[#001315BF]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Description & Evidence Tags */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 bg-[#2477808C] backdrop-blur-sm border border-[#34D4CA73] rounded-full px-3 py-1 w-fit mb-4">
            <span className="text-[#34D4CA] font-mono text-[11px] font-bold">
              §12
            </span>
          </div>
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3">
            EVIDENCE & REPLAY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Reproduce exactly what was known and done at the time
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Source, context, rule version, decisions, actions and receipts are
            bound together, so a reviewer can replay any past period.
          </p>

          {/* Tags Grid */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {EVIDENCE_TAGS.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white rounded-full border border-[#34D4CA80]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Inspect Evidence Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
            >
              Inspect evidence <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Replay Specimen Card */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B132B]">
                  Replay · Q3 2025 return
                </h3>
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </div>
            </div>

            {/* Timeline Progress Bar Simulation */}
            <div className="mb-8">
              <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                <span>v1</span>
                <span className="text-[#2b7a78]">v2 effective</span>
                <span className="text-purple-600">v3 future</span>
              </div>
              <div className="relative w-full h-1.5 bg-gray-100 rounded-full flex items-center">
                <div className="absolute left-0 w-3/5 h-full bg-[#2b7a78] rounded-full"></div>
                <div className="absolute left-[60%] flex flex-col items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-sm"></div>
                </div>
              </div>
              <div className="text-center mt-2">
                <span className="text-[11px] font-semibold text-red-600">
                  Replay point · 30 Sep 2025
                </span>
              </div>
            </div>

            {/* Grid of Replay Data Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {REPLAY_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-[#0B132B]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Historical Replay Note */}
            <p className="text-[11px] text-gray-500 leading-relaxed italic">
              Historical replay uses the version effective at the period
              replayed, never the current rule by default.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
