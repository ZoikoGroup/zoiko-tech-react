import React from "react";
import { Monitor, FileText } from "lucide-react";

export default function DeliveryAndReplaySection() {
  const specRows = [
    { label: "Experience", value: "Sample media experience" },
    { label: "Delivery destination", value: "Requires documentation" },
    { label: "Delivery state", value: "Awaiting authoritative confirmation" },
    { label: "Replay state", value: "Processing — not available" },
    { label: "Next action", value: "Check responsible-system status" },
    {
      label: "Limitations",
      value: "Exact technical capabilities require product evidence",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Delivery and replay need <br />
            their own authoritative states.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Media & Streaming is the specialist solution framing for live
            events, streaming and programmable media infrastructure.
          </p>
        </div>

        {/* Main Grid: Left Cards vs Right Spec Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Two Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1 */}
            <div className="bg-[#F4F8F8] border border-teal-900/10 rounded-2xl p-6 md:p-8 flex flex-col justify-start shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white border border-teal-900/10 flex items-center justify-center mb-6 shadow-sm">
                <Monitor className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                Streaming & delivery
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Documented service and destination state at approved product
                scope.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F4F8F8] border border-teal-900/10 rounded-2xl p-6 md:p-8 flex flex-col justify-start shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white border border-teal-900/10 flex items-center justify-center mb-6 shadow-sm">
                <FileText className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                Replay & post-event
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Preparation and availability only where supported by the
                responsible platform.
              </p>
            </div>
          </div>

          {/* Right Column: Streaming / Replay View Spec Panel */}
          <div className="lg:col-span-7 border border-teal-900/10 rounded-2xl p-6 md:p-8 shadow-sm">
            {/* Panel Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-900 tracking-tight">
                Streaming / replay <br />
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
      </div>
    </section>
  );
}
