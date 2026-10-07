import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function NewsUpdates() {
  const authorities = [
    "Approved",
    "Dated",
    "Typed",
    "Source named",
    "Currentness",
  ];

  const chronologicalItems = [
    {
      type: "Type",
      date: "YYYY-MM-DD",
      title: "News item headline preview placeholder text...",
    },
    {
      type: "Type",
      date: "YYYY-MM-DD",
      title: "News item headline preview placeholder text...",
    },
    {
      type: "Type",
      date: "YYYY-MM-DD",
      title: "News item headline preview placeholder text...",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] to-[#1C5C62] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/60 text-[#7FD0D9] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-6">
              Resources · Newspaper
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
              News and updates, <br />
              published{" "}
              <span className="text-[#6FD0F6]">
                {" "}
                from <br />
                approved sources.
              </span>
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
              Browse dated Zoiko Tech news and editorial updates with clear
              source, topic and currentness. Formal press releases and media
              assets remain available through their dedicated Resources
              destinations.
            </p>

            <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mb-8">
              Only approved public records appear. Draft, scheduled, embargoed,
              withdrawn or unverified material does not render as current news.
              The Press Releases and Media Resources links activate only once
              those destinations are live.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg">
                Browse latest
              </button>
              <button className="bg-[#051517]/80 hover:bg-[#0E2A2E] text-white border border-teal-800/60 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg backdrop-blur-md">
                View Press Releases
              </button>
            </div>
          </div>

          {/* Right Column: Preview UI Mockup Boxes */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Featured Box */}
            <div className="bg-[#051517]/80 border border-teal-800/40 rounded-2xl p-6 backdrop-blur-md shadow-2xl relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-wider text-[#7FD0D9] uppercase">
                  Featured · Only when eligible
                </span>
                <span className="text-[10px] font-semibold text-gray-400">
                  Source authority
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Inner Card */}
                <div className="md:col-span-7 bg-[#0E2A2E]/60 border border-teal-800/50 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-teal-950 border border-teal-700/50 text-[#7FD0D9] text-[10px] px-2.5 py-1 rounded-full font-medium">
                      Type
                    </span>
                    <span className="bg-teal-950 border border-teal-700/50 text-[#7FD0D9] text-[10px] px-2.5 py-1 rounded-full font-medium">
                      YYYY-MM-DD
                    </span>
                    <span className="bg-teal-950 border border-teal-700/50 text-[#7FD0D9] text-[10px] px-2.5 py-1 rounded-full font-medium">
                      Current
                    </span>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="h-2.5 bg-teal-900/60 rounded-full w-full"></div>
                    <div className="h-2.5 bg-teal-900/60 rounded-full w-4/5"></div>
                    <div className="h-2.5 bg-teal-900/60 rounded-full w-3/5"></div>
                  </div>
                </div>

                {/* Right Inner Authority List */}
                <div className="md:col-span-5 flex flex-col gap-2 border-t md:border-t-0 md:border-l border-teal-800/40 pt-4 md:pt-0 md:pl-6">
                  {authorities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7FD0D9] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chronological Index Container */}
            <div className="bg-[#051517]/80 border border-teal-800/40 rounded-2xl p-6 backdrop-blur-md shadow-2xl flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-wider text-[#7FD0D9] uppercase">
                Chronological index · Newest approved first
              </span>

              <div className="flex flex-col gap-3">
                {chronologicalItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0E2A2E]/60 border border-teal-800/50 rounded-xl p-3.5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="bg-teal-950 border border-teal-700/50 text-[#7FD0D9] text-[10px] px-2 py-0.5 rounded-full font-medium">
                        {item.type}
                      </span>
                      <span className="bg-teal-950 border border-teal-700/50 text-[#7FD0D9] text-[10px] px-2 py-0.5 rounded-full font-medium">
                        {item.date}
                      </span>
                    </div>
                    <div className="flex-grow hidden sm:block">
                      <div className="h-2 bg-teal-900/60 rounded-full w-3/4"></div>
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-teal-950 border border-teal-800 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3.5 h-3.5 text-[#7FD0D9]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
