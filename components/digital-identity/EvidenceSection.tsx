import React from "react";

interface ProvenanceRow {
  time: string;
  title: string;
  description: string;
  badgeLabel: string;
  badgeBg: string;
  badgeText: string;
  dotColor: string;
}

const PROVENANCE_ROWS: ProvenanceRow[] = [
  {
    time: "08:00",
    title: "Identity confirmed",
    description: "S-0991 · Workforce directory · current",
    badgeLabel: "Identity",
    badgeBg: "bg-[#E6F4F1]",
    badgeText: "text-[#2b7a78]",
    dotColor: "bg-[#2b7a78]",
  },
  {
    time: "10:14",
    title: "Authenticated",
    description: "Responsible system · validity 8 h",
    badgeLabel: "Authentication",
    badgeBg: "bg-[#E6F4F1]",
    badgeText: "text-[#2b7a78]",
    dotColor: "bg-[#2b7a78]",
  },
  {
    time: "10:14",
    title: "Entitlement checked",
    description: "Payment approver · expired 30 Sep",
    badgeLabel: "Entitlement",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#D97706]",
    dotColor: "bg-[#2b7a78]",
  },
  {
    time: "10:14",
    title: "Decision: denied",
    description: "Payments policy v4 · reason category: expired",
    badgeLabel: "Decision",
    badgeBg: "bg-[#FDE8E8]",
    badgeText: "text-[#E02424]",
    dotColor: "bg-[#2b7a78]",
  },
  {
    time: "10:20",
    title: "Review requested",
    description: "Routed to Treasury access owner",
    badgeLabel: "Review",
    badgeBg: "bg-[#E0F2FE]",
    badgeText: "text-[#0369A1]",
    dotColor: "bg-[#2b7a78]",
  },
  {
    time: "—",
    title: "Authoritative outcome",
    description: "Payment remains owned by the payments system",
    badgeLabel: "Outcome",
    badgeBg: "bg-[#EDF2F7]",
    badgeText: "text-[#4A5568]",
    dotColor: "bg-[#2b7a78]",
  },
];

export default function EvidenceSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Step Info, Header & Photo */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Step Indicator */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase">
              STEP 7 OF 7 · EVIDENCE
            </span>
          </div>
          <div className="flex items-center space-x-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-6 h-2 rounded-full bg-[#2b7a78]"></span>
          </div>

          {/* Heading & Description */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Evidence that proves why access was refused
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            Identity, authentication, entitlement, delegation, decision and
            lifecycle evidence, linked and timestamped.
          </p>

          {/* Evidence Image Thumbnail Card */}
          <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
            <div className="relative w-full h-[220px]">
              <img
                src="/digital/20.png"
                alt="Evidence ledger archive"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Decision Provenance Card & Analytics Note */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-[#0B132B]">
                Decision provenance · DEC-3310
              </h3>
              <span className="text-[10px] tracking-wider uppercase font-medium text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Provenance Rows */}
            <div className="divide-y divide-gray-100">
              {PROVENANCE_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 py-3.5 items-center text-xs md:text-sm"
                >
                  {/* Time Column */}
                  <div className="col-span-2 text-gray-400 font-medium text-xs">
                    {row.time}
                  </div>

                  {/* Timeline Event Column */}
                  <div className="col-span-7 flex items-start space-x-3">
                    <div className="mt-1 flex items-center justify-center shrink-0">
                      <span
                        className={`w-2 h-2 rounded-full ${row.dotColor}`}
                      ></span>
                    </div>
                    <div>
                      <div className="font-bold text-[#0B132B]">
                        {row.title}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        {row.description}
                      </div>
                    </div>
                  </div>

                  {/* Badge Column */}
                  <div className="col-span-3 flex justify-end">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${row.badgeBg} ${row.badgeText}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                      {row.badgeLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Analytics Note */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-400">
              Analytics never capture credentials, tokens, secrets, factors,
              identity documents or sensitive attributes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
