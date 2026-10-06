import React from "react";
import { ArrowRight, Check, X } from "lucide-react";

interface ClassificationRow {
  dimension: string;
  requiredTreatment: string;
  doNotInfer: string;
}

const CLASSIFICATION_ROWS: ClassificationRow[] = [
  {
    dimension: "Jurisdiction",
    requiredTreatment:
      "Approved market, regulator and region hierarchy with effective period",
    doNotInfer:
      "Licensure, approval or universal coverage from a country label",
  },
  {
    dimension: "Entity / operator",
    requiredTreatment: "The actual responsible legal or regulated entity",
    doNotInfer: "That Zoiko Tech is itself the regulated operator",
  },
  {
    dimension: "Business / product",
    requiredTreatment: "Controlled taxonomy for the activity or offering",
    doNotInfer: "A regulatory category without a source-backed rule",
  },
  {
    dimension: "Transaction / activity",
    requiredTreatment: "Applicable activity or trigger, abstracted",
    doNotInfer: "A legal classification from generic metadata",
  },
  {
    dimension: "Customer context",
    requiredTreatment: "Minimum segmentation where a rule truly depends on it",
    doNotInfer: "Sensitive attributes collected for convenience",
  },
  {
    dimension: "Period",
    requiredTreatment: "Effective date, reporting period, event time",
    doNotInfer: "Current applicability from historical evidence",
  },
  {
    dimension: "Classification state",
    requiredTreatment:
      "Proposed · review required · approved · not applicable · unknown",
    doNotInfer: "An AI suggestion as final legal classification",
  },
];

export default function JurisdictionScopeClassificationSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header & Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full mb-12">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
              <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
                §05
              </span>
            </div>
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
              JURISDICTION, SCOPE & CLASSIFICATION
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
              Where, what and who a rule concerns, never guessed
            </h2>
          </div>

          {/* Right Column: Two Images Side-by-Side (rounded-2xl only) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
            <div className="w-full h-[160px]">
              <img
                src="/reg/13.png"
                alt="Jurisdiction landscape left"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-full h-[160px]">
              <img
                src="/reg/14.png"
                alt="Jurisdiction architecture right"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Classification Table Card */}
        <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 px-6 md:px-8 py-4 border-b border-gray-100 text-[10px] font-bold tracking-widest uppercase text-gray-400">
            <div className="md:col-span-3">DIMENSION</div>
            <div className="md:col-span-5">REQUIRED TREATMENT</div>
            <div className="md:col-span-4">DO NOT INFER</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100 text-xs">
            {CLASSIFICATION_ROWS.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 px-6 md:px-8 py-4 items-center gap-4"
              >
                <div className="md:col-span-3 font-bold text-[#0B132B]">
                  {row.dimension}
                </div>
                <div className="md:col-span-5 text-gray-700 flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#2b7a78] shrink-0 mt-0.5" />
                  <span>{row.requiredTreatment}</span>
                </div>
                <div className="md:col-span-4 text-red-600 flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{row.doNotInfer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Scope Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review scope <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
