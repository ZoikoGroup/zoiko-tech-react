import React from "react";
import { ArrowRight } from "lucide-react";

interface TimelineRow {
  time: string;
  title: string;
  description: string;
  badge: {
    label: string;
    bg: string;
    text: string;
    dot: string;
  };
}

const TIMELINE_ROWS: TimelineRow[] = [
  {
    time: "09:12",
    title: "Signal observed",
    description: "SIG-2207 · monitoring source · billing service",
    badge: {
      label: "Signal",
      bg: "bg-blue-50",
      text: "text-blue-700",
      dot: "bg-blue-600",
    },
  },
  {
    time: "09:20",
    title: "Triage started",
    description: "Security on-call · evidence pointer attached",
    badge: {
      label: "Triage",
      bg: "bg-sky-50",
      text: "text-sky-700",
      dot: "bg-sky-600",
    },
  },
  {
    time: "09:38",
    title: "Incident declared",
    description: "INC-0412 · responsible incident process",
    badge: {
      label: "Incident",
      bg: "bg-amber-50",
      text: "text-amber-700",
      dot: "bg-amber-600",
    },
  },
  {
    time: "09:45",
    title: "Containment action",
    description: "Restrict admin access · approved by Platform security lead",
    badge: {
      label: "Response",
      bg: "bg-purple-50",
      text: "text-purple-700",
      dot: "bg-purple-600",
    },
  },
  {
    time: "10:30",
    title: "Recovery confirmed",
    description: "Service registry: operational · limitation noted",
    badge: {
      label: "Recovery",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-600",
    },
  },
  {
    time: "10:35",
    title: "Public status updated",
    description: "System Status remains the authoritative source",
    badge: {
      label: "Status",
      bg: "bg-teal-50",
      text: "text-teal-700",
      dot: "bg-teal-600",
    },
  },
];

export default function EvidenceObservabilitySection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Evidence Trail Card */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
              <h3 className="text-sm font-bold text-[#0B132B]">
                Evidence trail · INC-0412
              </h3>
              <span className="text-[10px] tracking-wider uppercase font-medium text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Timeline Rows */}
            <div className="divide-y divide-gray-100">
              {TIMELINE_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="py-3.5 flex items-center justify-between text-xs"
                >
                  <div className="flex items-start space-x-4 w-3/4">
                    <span className="font-mono text-gray-400 font-medium shrink-0 pt-0.5">
                      {row.time}
                    </span>
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2b7a78]"></span>
                        <span className="font-bold text-[#0B132B]">
                          {row.title}
                        </span>
                      </div>
                      <span className="text-gray-500 text-[11px] mt-0.5 pl-3.5">
                        {row.description}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${row.badge.bg} ${row.badge.text}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${row.badge.dot} mr-1`}
                      ></span>
                      {row.badge.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer Note */}
            <div className="pt-6 mt-4 border-t border-gray-100">
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Public examples never contain credentials, raw logs, PII,
                exploit detail, customer identifiers or sensitive incident
                evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Header & Image */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            EVIDENCE & OBSERVABILITY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            From first signal to authoritative recovery, on one record
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            Signal, triage, incident, response, recovery, control and trust
            evidence, each with source, time and owner.
          </p>

          {/* Image Thumbnail */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white mb-6">
            <div className="relative w-full h-[220px]">
              <img
                src="/cyber/21.png"
                alt="Evidence and observability scenic sunrise landscape"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Inspect Evidence Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-[#2b7a78] hover:underline"
            >
              Inspect evidence <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
