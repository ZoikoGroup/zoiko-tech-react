import React from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";

interface PassportRow {
  label: string;
  value: string;
  statusBadge?: {
    label: string;
    bg: string;
    text: string;
    dot: string;
  };
}

const PASSPORT_ROWS: PassportRow[] = [
  { label: "Scope", value: "Customer billing service (synthetic)" },
  { label: "Owner", value: "Platform Operations" },
  { label: "Environment", value: "Production" },
  {
    label: "Dependencies",
    value: "Payments provider · degraded",
    statusBadge: {
      label: "Degraded",
      bg: "bg-[#FEF3C7]",
      text: "text-[#D97706]",
      dot: "bg-[#D97706]",
    },
  },
  { label: "Data sensitivity", value: "Category: confidential" },
  { label: "Last confirmed", value: "Today 09:40 · service registry" },
];

export default function ProtectedScopeSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image with Overlapping Service Passport Card */}
        <div className="lg:col-span-6 relative w-full pt-6 pb-12">
          {/* Background Image Container */}
          <div className="w-full max-w-[540px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/cyber/7.png"
              alt="Protected scope dashboard background"
              className="w-full h-[550px] object-cover object-top"
            />
          </div>

          {/* Overlapping Service Passport Card */}
          <div className="absolute left-6 bottom-15 w-[calc(100%-48px)] max-w-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-10">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
              <h3 className="text-xs font-bold text-[#0B132B]">
                Service passport
              </h3>
              <span className="text-[9px] tracking-wider uppercase font-medium text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Passport Rows Table */}
            <div className="divide-y divide-gray-100">
              {PASSPORT_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 py-2.5 items-center text-xs"
                >
                  <div className="col-span-4 text-gray-500 font-medium">
                    {row.label}
                  </div>
                  <div className="col-span-8 text-[#0B132B] font-semibold flex items-center justify-between">
                    <span className="truncate pr-2">{row.value}</span>
                    {row.statusBadge && (
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${row.statusBadge.bg} ${row.statusBadge.text} shrink-0`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${row.statusBadge.dot} mr-1`}
                        ></span>
                        {row.statusBadge.label}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Header, Responsibility Boundary & Rule */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          {/* Step / Context Indicator */}
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            PROTECTED SCOPE & SERVICE CONTEXT
          </div>

          {/* Heading & Description */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Start by naming exactly what is protected, and by whom
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            Scope identity, owner, environment, dependencies, data category,
            security boundary and freshness. No PII, secrets or internal
            topology in public examples.
          </p>

          {/* Responsibility Boundary Block */}
          <div className="mb-6">
            <h4 className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-3">
              RESPONSIBILITY BOUNDARY
            </h4>
            <div className="grid grid-cols-3 gap-2 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-xs mb-4">
              <div className="bg-[#E6F4F1] p-3 rounded-xl">
                <span className="font-bold text-[#2b7a78] block mb-1">
                  Zoiko-operated
                </span>
                <span className="text-[11px] text-gray-600 leading-tight">
                  Platform runtime and Zoiko-managed services, where
                  documented.
                </span>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <span className="font-bold text-[#0B132B] block mb-1">
                  Shared
                </span>
                <span className="text-[11px] text-gray-600 leading-tight">
                  Configuration, integrations and incident communication.[cite:
                  7]
                </span>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <span className="font-bold text-[#0B132B] block mb-1">
                  Customer-controlled
                </span>
                <span className="text-[11px] text-gray-600 leading-tight">
                  Endpoints, identity, network, data, continuity and your own
                  response.
                </span>
              </div>
            </div>

            {/* Responsibility Rule Box */}
            <div className="bg-[#E6F4F1] border border-[#2b7a78]/20 rounded-xl p-4 flex items-start space-x-3 text-xs text-[#0B132B]">
              <AlertTriangle className="w-4 h-4 text-[#2b7a78] shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">
                Responsibility rule. Protection is shared. Zoiko never
                automatically owns customer endpoint, identity, network, data,
                continuity or incident-response responsibilities.
              </span>
            </div>
          </div>

          {/* Review Scope Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-[#2b7a78] hover:underline"
            >
              Review scope <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
