import React from "react";
import { ArrowRight } from "lucide-react";

interface SupersessionVersion {
  version: string;
  subtitle: string;
  status: {
    label: string;
    bg: string;
    text: string;
    dot: string;
  };
}

interface ChangeRecordRow {
  label: string;
  value: string;
  isFuture?: boolean;
}

const SUPERSESSION_VERSIONS: SupersessionVersion[] = [
  {
    version: "v1",
    subtitle: "Published Jan 2024",
    status: {
      label: "Superseded",
      bg: "bg-gray-100",
      text: "text-gray-600",
      dot: "bg-gray-500",
    },
  },
  {
    version: "v2",
    subtitle: "Amended Jun 2025",
    status: {
      label: "Superseded",
      bg: "bg-gray-100",
      text: "text-gray-600",
      dot: "bg-gray-500",
    },
  },
  {
    version: "v3",
    subtitle: "Correction Sep 2025",
    status: {
      label: "Current · effective 01 Jan",
      bg: "bg-purple-50",
      text: "text-purple-700",
      dot: "bg-purple-600",
    },
  },
];

const CHANGE_RECORD_ROWS: ChangeRecordRow[] = [
  {
    label: "Authority / publisher",
    value: "Market A telecom authority (synthetic)",
  },
  { label: "Source reference", value: "EU-REG-0142 · notice 2025/17" },
  { label: "Jurisdiction", value: "Market A · national" },
  { label: "Version / issue", value: "v3 (correction of v2)" },
  {
    label: "Published / observed",
    value: "Published 12 Sep · ingested 13 Sep",
  },
  {
    label: "Effective date",
    value: "01 Jan 2026 · future-effective",
    isFuture: true,
  },
  { label: "Change type", value: "Corrected" },
  {
    label: "Impact (analysis)",
    value: "2 obligations · 3 controls · review pending",
  },
  { label: "Reviewer", value: "Regulatory counsel · in review" },
  { label: "Freshness", value: "Current · confirmed today" },
];

export default function RegulatorySourceChangeRegistrySection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full mb-16">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
              <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
                §04
              </span>
            </div>
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
              REGULATORY SOURCE & CHANGE REGISTRY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
              Pin the authority, version and effective date, every time
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-8 max-w-xl">
              Discovery is not legal effect. A source published today may only
              take effect next year, and a correction must never erase what came
              before.
            </p>

            {/* Image (No bg, border, radius, shadow) */}
            <div className="w-full max-w-md">
              <img
                src="/reg/12.png"
                alt="Regulatory source handbook"
                className="w-full h-[220px] rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Right Column: Change Record Specimen Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <div>
                  <h3 className="text-sm font-bold text-[#0B132B]">
                    Change record · CHG-0917
                  </h3>
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                  SPECIMEN · SYNTHETIC DATA
                </div>
              </div>

              {/* Future Stamp */}
              <div className="relative">
                <div className="absolute right-0 -top-3 rotate-6 bg-red-50 border border-red-200 text-red-600 font-bold text-[10px] px-2.5 py-0.5 rounded tracking-widest shadow-sm">
                  FUTURE
                </div>
              </div>

              {/* Specimen Rows */}
              <div className="flex flex-col divide-y divide-gray-100 text-xs">
                {CHANGE_RECORD_ROWS.map((row, index) => (
                  <div
                    key={index}
                    className="py-3 flex items-center justify-between"
                  >
                    <span className="text-gray-500 font-medium">
                      {row.label}
                    </span>
                    <span
                      className={`font-bold ${row.isFuture ? "text-gray-800" : "text-[#0B132B]"}`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supersession Chain Section */}
        <div className="w-full pt-8 border-t border-gray-200/60">
          <div className="mb-6">
            <div className="text-[#2b7a78] font-bold text-[11px] tracking-widest uppercase mb-1">
              SUPERSESSION CHAIN · KEPT FOR REPLAY
            </div>
          </div>

          {/* Chain Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center w-full mb-8">
            {SUPERSESSION_VERSIONS.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex flex-col justify-between w-full">
                  <div>
                    <span className="text-base font-extrabold text-[#0B132B] block mb-1">
                      {item.version}
                    </span>
                    <span className="text-xs text-gray-500 font-medium block mb-4">
                      {item.subtitle}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${item.status.bg} ${item.status.text}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.status.dot} mr-1.5`}
                      ></span>
                      {item.status.label}
                    </span>
                  </div>
                </div>
                {index < SUPERSESSION_VERSIONS.length - 1 && (
                  <div className="hidden sm:flex text-gray-400 shrink-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Inspect Sources Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-[#2b7a78] hover:underline"
            >
              Inspect sources <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
