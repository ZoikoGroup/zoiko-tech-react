import React from "react";
import { ArrowRight, Calendar, GitCommit } from "lucide-react";

interface VersionItem {
  title: string;
  description: string;
}

const VERSION_ITEMS: VersionItem[] = [
  {
    title: "Future-effective.",
    description: "Shown as future; preparation allowed.",
  },
  {
    title: "Amendment.",
    description: "Linked to impacted rules, obligations, controls.",
  },
  {
    title: "Correction.",
    description: "History kept; prior evidence linked.",
  },
  {
    title: "Superseded.",
    description: "Stops new authoritative use.",
  },
  {
    title: "Withdrawn / repealed.",
    description: "Marked no longer effective.",
  },
  {
    title: "Conflicting source.",
    description: "Routed to legal review, never chosen silently.",
  },
  {
    title: "Impact unknown.",
    description: "Review before auto-updating obligations.",
  },
];

const TIMELINE_ROWS = [
  {
    label: "Rule v2",
    sub: "Effective",
    barClass: "bg-[#2b7a78] w-3/5",
    quarterStart: 2, // Q2
  },
  {
    label: "Rule v3",
    sub: "Future-effective",
    barClass: "bg-purple-500 w-1/4 ml-auto",
    quarterStart: 5, // Q1 next
  },
  {
    label: "Transition period",
    sub: "Overlap defined by source",
    barClass: "bg-amber-500 w-16 ml-[55%]",
  },
  {
    label: "Guidance note",
    sub: "Withdrawn",
    barClass: "bg-gray-300 w-24 bg-stripes",
  },
  {
    label: "Data feed",
    sub: "Ingestion delayed",
    barClass: "bg-gray-300 w-32 ml-[65%] bg-stripes",
  },
];

export default function RegulatoryChangeVersioningSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading, Image & Version Items */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
            <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
              §13
            </span>
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            CHANGE, VERSIONING & EFFECTIVE DATES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Every rule lives on a calendar
          </h2>

          {/* Image (rounded-2xl only, no bg, border, shadow) */}
          <div className="w-full h-[220px] mb-8">
            <img
              src="/reg/20.png"
              alt="Calendar change autumn leaf"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Version Items List */}
          <div className="flex flex-col space-y-3 mb-6">
            {VERSION_ITEMS.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-2.5 text-xs text-gray-700"
              >
                <Calendar className="w-4 h-4 text-[#2b7a78] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0B132B]">{item.title}</strong>{" "}
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Effective-date Timeline Specimen Card */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 mb-6">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B132B]">
                  Effective-date timeline
                </h3>
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </div>
            </div>

            {/* Quarters Header */}
            <div className="grid grid-cols-7 pb-3 border-b border-gray-100 text-[10px] font-bold tracking-widest uppercase text-gray-400 text-center mb-6">
              <div>Q1</div>
              <div>Q2</div>
              <div>Q3</div>
              <div>Q4</div>
              <div>Q1 next</div>
              <div>Q2 next</div>
            </div>

            {/* Timeline Rows */}
            <div className="flex flex-col space-y-6 mb-6">
              {TIMELINE_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-50 gap-2"
                >
                  <div className="w-40 shrink-0">
                    <span className="text-xs font-bold text-[#0B132B] block">
                      {row.label}
                    </span>
                    <span className="text-[10px] text-gray-400 block">
                      {row.sub}
                    </span>
                  </div>
                  <div className="w-full bg-gray-50 h-3 rounded-full relative overflow-hidden flex items-center">
                    <div
                      className={`h-full rounded-full ${row.barClass}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Explanatory Note */}
            <p className="text-[11px] text-gray-500 leading-relaxed italic">
              Hatched bars: withdrawn or delayed. A delayed source is never
              assumed to mean &ldquo;no change&rdquo;.
            </p>
          </div>

          {/* Review Change Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
            >
              Review change <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
