import React from "react";
import { FileText, ExternalLink } from "lucide-react";

export default function ClearSourceAndPublishingHandoff() {
  const specRows = [
    { label: "Content", value: "Sample briefing — synthetic item" },
    { label: "Source / owner", value: "Sample external source / publisher" },
    { label: "Publishing state", value: "Prepared for review" },
    { label: "Destination", value: "Sample web experience" },
    {
      label: "System boundary",
      value: "External publishing system remains authoritative",
    },
    { label: "Permission metadata", value: "Needs source confirmation" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
          Clear source. <br />
          Clear publishing handoff.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl">
          Connect digital experiences to authoritative content and destination
          systems without implying an all-in-one publishing suite.
        </p>

        {/* Main Grid: Left Spec Panel vs Right Text & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content / Experience Handoff Spec Panel */}
          <div className="lg:col-span-7 bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
            {/* Panel Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-teal-800/40">
              <h3 className="text-base font-bold text-white tracking-tight">
                Content / experience <br />
                handoff
              </h3>
              <span className="text-[10px] font-medium px-3 py-1 rounded-full border border-teal-700/40 text-teal-300 bg-teal-950/60">
                Synthetic specimen
              </span>
            </div>

            {/* Spec Rows */}
            <div className="flex flex-col gap-6">
              {specRows.map((row, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${
                    index !== specRows.length - 1
                      ? "pb-5 border-b border-teal-900/60"
                      : ""
                  }`}
                >
                  <span className="text-xs md:text-sm text-gray-400 font-medium">
                    {row.label}
                  </span>
                  <span className="text-xs md:text-sm text-gray-200 font-medium sm:text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Preserve system boundary text and button */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-6 shadow-inner text-teal-300">
              <FileText className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
              Preserve the system boundary.
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Use supported draft, prepared, scheduled, published and retired
              states. Identify the owner and any dependency on publishing,
              commerce, identity or delivery systems.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              Discuss your content architecture
              <ExternalLink className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
