"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MakeChangesInServiceState() {
  const [selectedState, setSelectedState] = useState("Scheduled");
  const [isOpen, setIsOpen] = useState(false);

  const states = [
    "Scheduled",
    "Prepared",
    "Live",
    "Degraded",
    "Completed",
    "Archived",
  ];

  const specRows = [
    { label: "Current state", value: "Degraded — synthetic specimen" },
    { label: "Impact", value: "Sample experience delivery affected" },
    { label: "Owner", value: "Media operations owner" },
    { label: "Mitigation", value: "Review supported recovery path" },
    { label: "Timeline", value: "Detected -> assessed -> mitigation pending" },
    {
      label: "Communication",
      value: "Authoritative Status / support route required",
    },
    { label: "Evidence", value: "System-event and action history retained" },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Make changes in service state <br />
            understandable and actionable.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Separate platform health from event state. Keep impact, owner,
            mitigation and recovery visible.
          </p>
        </div>

        {/* Top Interactive Specimen Box */}
        <div className="bg-[#FAFCFC] border border-teal-900/10 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Explore a specimen event state
            </label>

            {/* Dropdown / Selector box */}
            <div className="relative max-w-xs">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-900 flex items-center justify-between shadow-sm hover:border-gray-400 transition-colors"
              >
                <span>{selectedState}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1">
                  {states.map((st, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedState(st);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {st}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <p className="text-sm font-medium text-teal-800 mb-2">
            An event time exists. Readiness and live status are not implied.
          </p>
          <p className="text-xs text-gray-400">
            Interactive state explanation only; this is not live product
            telemetry.
          </p>
        </div>

        {/* Bottom Incident / Event-State View Spec Panel */}
        <div className="bg-[#FAFCFC] border border-teal-900/10 rounded-2xl p-6 md:p-8 shadow-sm">
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-200">
            <h3 className="text-base font-bold text-gray-900 tracking-tight">
              Incident / event-state <br />
              view
            </h3>
            <span className="text-[10px] font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-600 bg-white">
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
                    ? "pb-5 border-b border-gray-100"
                    : ""
                }`}
              >
                <span className="text-xs md:text-sm text-gray-500 font-medium">
                  {row.label}
                </span>
                <span className="text-xs md:text-sm text-gray-900 font-medium sm:text-right">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
