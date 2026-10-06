import React from "react";

interface SignalRow {
  signal: string;
  source: string;
  affectedScope: string;
  observed: string;
  stateBadge: {
    label: string;
    bg: string;
    text: string;
    dot: string;
  };
  owner: string;
}

const SIGNAL_ROWS: SignalRow[] = [
  {
    signal: "SIG-2207",
    source: "Monitoring source",
    affectedScope: "Billing service",
    observed: "09:12 - 09:38",
    stateBadge: {
      label: "Investigating",
      bg: "bg-[#E0F2FE]",
      text: "text-[#0369A1]",
      dot: "bg-[#0369A1]",
    },
    owner: "Security on-call",
  },
  {
    signal: "SIG-2211",
    source: "Provider notice",
    affectedScope: "Payments dependency",
    observed: "08:50 - 09:40",
    stateBadge: {
      label: "Acknowledged",
      bg: "bg-[#F3F4F6]",
      text: "text-[#374151]",
      dot: "bg-[#374151]",
    },
    owner: "Platform Ops",
  },
  {
    signal: "SIG-2214",
    source: "Log pipeline",
    affectedScope: "Reporting jobs",
    observed: "Last seen 3 h ago",
    stateBadge: {
      label: "Stale · telemetry delayed",
      bg: "bg-[#F3F4F6]",
      text: "text-[#374151]",
      dot: "bg-[#374151]",
    },
    owner: "Observability team",
  },
  {
    signal: "SIG-2219",
    source: "Customer report",
    affectedScope: "Partner portal",
    observed: "09:41",
    stateBadge: {
      label: "Queued",
      bg: "bg-[#FEF3C7]",
      text: "text-[#D97706]",
      dot: "bg-[#D97706]",
    },
    owner: "Security triage",
  },
];

export default function SecuritySignalsSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Header & Image Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center mb-10">
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
              SECURITY SIGNALS & SOURCE INTEGRITY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
              Every signal carries its source, scope, time and owner
            </h2>
          </div>

          {/* Right Column: Image Thumbnail */}
          <div className="lg:col-span-5 w-full flex justify-end">
            <div className="w-full max-w-[420px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
              <div className="relative w-full h-[220px]">
                <img
                  src="/cyber/8.png"
                  alt="Security signals command dashboard"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Signals Data Table Card */}
        <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <h3 className="text-sm font-bold text-[#0B132B]">
              Security signals
            </h3>
            <span className="text-[10px] tracking-wider uppercase font-medium text-gray-400">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <th className="pb-3 pr-4">Signal</th>
                  <th className="pb-3 px-4">Source</th>
                  <th className="pb-3 px-4">Affected scope</th>
                  <th className="pb-3 px-4">Observed</th>
                  <th className="pb-3 px-4">State</th>
                  <th className="pb-3 pl-4">Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs md:text-sm">
                {SIGNAL_ROWS.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 pr-4 font-bold text-[#0B132B]">
                      {row.signal}
                    </td>
                    <td className="py-4 px-4 text-gray-600 font-medium">
                      {row.source}
                    </td>
                    <td className="py-4 px-4 text-gray-600 font-medium">
                      {row.affectedScope}
                    </td>
                    <td className="py-4 px-4 text-gray-600 font-medium">
                      {row.observed}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${row.stateBadge.bg} ${row.stateBadge.text}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${row.stateBadge.dot} mr-1.5`}
                        ></span>
                        {row.stateBadge.label}
                      </span>
                    </td>
                    <td className="py-4 pl-4 text-gray-600 font-medium">
                      {row.owner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note */}
          <div className="pt-6 mt-4 border-t border-gray-100">
            <p className="text-[11px] text-gray-400">
              Severity appears only where the responsible system defines a
              scale. Unknown or delayed telemetry is never shown as secure or
              normal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
