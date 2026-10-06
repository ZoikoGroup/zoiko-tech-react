import React from "react";
import { ArrowRight, AlertTriangle, Sparkles } from "lucide-react";

interface ApplicabilityRow {
  label: string;
  value: string;
}

const APPLICABILITY_ROWS: ApplicabilityRow[] = [
  {
    label: "Responsible party",
    value: "Operator Ltd · regulated entity (synthetic)",
  },
  { label: "Basis", value: "Licence condition 4.2 · source EU-REG-0142 v3" },
  { label: "Trigger", value: "Consumer revenue above threshold in period" },
  {
    label: "Effective scope",
    value: "Market A · consumer mobile · from 01 Jan",
  },
  { label: "Decision owner", value: "Regulatory counsel" },
  {
    label: "Re-evaluation",
    value: "On source change, entity change or threshold change",
  },
];

export default function RegulatoryResponsibilitySection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Applicability Decision Card */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-[#FFFDF9] rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 relative">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B132B]">
                  Applicability decision · APP-221
                </h3>
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </div>
            </div>

            {/* Specimen Rows */}
            <div className="flex flex-col divide-y divide-gray-100 text-xs mb-6">
              {APPLICABILITY_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="py-3 flex items-center justify-between"
                >
                  <span className="text-gray-500 font-medium">{row.label}</span>
                  <span className="font-bold text-[#0B132B] text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags / Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5"></span>
                Conditional
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1.5"></span>
                Review required
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-assisted draft
              </span>
            </div>

            {/* Disclaimer Notice */}
            <p className="text-[11px] text-gray-500 leading-relaxed italic">
              AI may assist; it never becomes an undisclosed legal authority.
              Overrides need authority, reason, scope, expiry and evidence.
            </p>
          </div>
        </div>

        {/* Right Column: Heading & Images */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-3 py-1 w-fit mb-4">
            <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
              §06
            </span>
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            RESPONSIBILITY & APPLICABILITY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Who is responsible is a decision, not a badge
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed mb-8">
            The responsible party, the source-backed basis, the scope and
            period, who reviewed the conclusion, and what event can invalidate
            it.
          </p>

          {/* Two Images Side-by-Side (rounded-2xl only, no bg/border/shadow) */}
          <div className="grid grid-cols-2 gap-4 w-full mb-6">
            <div className="w-full h-[250px]">
              <img
                src="/reg/30.png"
                alt="Responsibility professional left"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-full h-[250px]">
              <img
                src="/reg/15.png"
                alt="Responsibility professional right"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Alert Notice Box */}
          <div className="bg-[#E9F9F8] border border-[#34D4CA73] rounded-2xl p-4 flex items-start space-x-3 mb-6">
            <AlertTriangle className="w-4 h-4 text-[#2b7a78] shrink-0 mt-0.5" />
            <p className="text-xs text-[#0B132B] leading-relaxed">
              <strong className="font-bold">Responsibility rule.</strong> A
              generic platform, customer or market label must never silently
              become a legal responsibility determination.
            </p>
          </div>

          {/* Review Responsibility Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
            >
              Review responsibility{" "}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
