import React from "react";
import { ArrowRight } from "lucide-react";

interface IntegrationPrinciple {
  title: string;
  description: string;
}

interface ReadinessRow {
  platformRoute: string;
  state: {
    label: string;
    bg: string;
    text: string;
    dot: string;
  };
  role: string;
  publicationLimit: string;
}

const PRINCIPLES: IntegrationPrinciple[] = [
  {
    title: "Receive signals",
    description:
      "Event and signal contracts only when current, with redaction rules.",
  },
  {
    title: "Send / receive status",
    description:
      "Health, incident and evidence events only when authoritative.",
  },
  {
    title: "Authorize",
    description: "Digital Identity controls at documented scope.",
  },
  {
    title: "Observe",
    description:
      "Logs, events, status and evidence references, never raw secrets.",
  },
  {
    title: "Failure handling",
    description:
      "Timeouts, retries, ordering, stale state, dependency failure.",
  },
  {
    title: "Security",
    description:
      "No credentials, tokens, keys or exploit details anywhere public.",
  },
];

const READINESS_ROWS: ReadinessRow[] = [
  {
    platformRoute: "Zoiko Shield",
    state: {
      label: "Finish · readiness-gated",
      bg: "bg-gray-100",
      text: "text-gray-700",
      dot: "bg-gray-600",
    },
    role: "Cybersecurity platform evidence candidate",
    publicationLimit:
      "Linked only once destination, owner and claims are approved",
  },
  {
    platformRoute: "Cybersecurity & Resilience",
    state: {
      label: "Solution route",
      bg: "bg-sky-50",
      text: "text-sky-700",
      dot: "bg-sky-600",
    },
    role: "Buyer-outcome solution page",
    publicationLimit: "Technology intent stays here",
  },
  {
    platformRoute: "Security / Trust Center",
    state: {
      label: "Authoritative proof",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-600",
    },
    role: "Corporate security and trust evidence",
    publicationLimit: "Not product features",
  },
  {
    platformRoute: "Responsible Disclosure",
    state: {
      label: "Canonical route",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-600",
    },
    role: "Security issue reporting",
    publicationLimit: "No sensitive findings shown",
  },
  {
    platformRoute: "System Status",
    state: {
      label: "Authoritative state",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-600",
    },
    role: "Operational service state",
    publicationLimit: "No parallel status feed",
  },
  {
    platformRoute: "Developer Platform",
    state: {
      label: "[Public state]",
      bg: "bg-purple-50",
      text: "text-purple-700",
      dot: "bg-purple-600",
    },
    role: "Integration destination",
    publicationLimit: "Public CTA once approved",
  },
];

export default function DeveloperIntegrationLayerSection() {
  return (
    <div className="w-full bg-[#E9F9F8] font-sans">
      {/* Top Section: Developer & Integration Layer */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Header & Image */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
              DEVELOPER & INTEGRATION LAYER
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
              Integrate security data safely
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-6">
              Approved APIs, SDKs, webhooks, events and authentication only when
              published. Sandbox only once self-service is live.
            </p>

            <div className="mb-8">
              <a
                href="#"
                className="inline-flex items-center justify-between bg-[#2b7a78] hover:bg-[#236361] text-white text-xs font-semibold py-3 px-5 rounded-xl transition-colors shadow-md"
              >
                <span>Explore Developer Platform</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <img
                src="/cyber/26.png"
                alt="Developer and integration layer schematic"
                className="w-full h-[260px] object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Principles List */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col divide-y divide-gray-100">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={index}
                  className="py-4 first:pt-0 last:pb-0 flex flex-col"
                >
                  <h3 className="text-sm font-bold text-[#0B132B] mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Platform Evidence Layer & Readiness Table */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
              PLATFORM EVIDENCE LAYER
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
              Readiness-gated, by design
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed">
              Zoiko Shield being Finish-state does not authorize this page to
              publish every capability implied by earlier design work.
            </p>
          </div>

          {/* Readiness Table Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 w-full flex flex-col">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    <th className="pb-4 pr-4">PLATFORM / ROUTE</th>
                    <th className="pb-4 px-4">STATE</th>
                    <th className="pb-4 px-4">ROLE</th>
                    <th className="pb-4 pl-4">PUBLICATION LIMIT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs md:text-sm">
                  {READINESS_ROWS.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 pr-4 font-bold text-[#0B132B]">
                        {row.platformRoute}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${row.state.bg} ${row.state.text}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${row.state.dot} mr-1.5`}
                          ></span>
                          {row.state.label}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600 font-medium">
                        {row.role}
                      </td>
                      <td className="py-4 pl-4 text-red-600/90 font-medium">
                        {row.publicationLimit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
