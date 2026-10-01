import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldAlert,
} from "lucide-react";

interface ArchitectureSummaryItem {
  title: string;
  status: string;
  statusType: "healthy" | "warning" | "degraded";
}

interface IntegrationHealthItem {
  source: string;
  target: string;
  interface: string;
  statusText: string;
  statusType: "retrying" | "review" | "healthy";
}

interface ChangeIncidentItem {
  badgeText: string;
  badgeType: "planned" | "progress" | "incident";
  title: string;
  description?: string;
}

const architectureSummary: ArchitectureSummaryItem[] = [
  { title: "Subscriber / account", status: "Healthy", statusType: "healthy" },
  { title: "OSS/BSS", status: "Healthy", statusType: "healthy" },
  { title: "Identity", status: "Review required", statusType: "warning" },
  { title: "Cloud foundations", status: "Healthy", statusType: "healthy" },
  { title: "API fabric", status: "Degraded", statusType: "degraded" },
  { title: "Communications", status: "Healthy", statusType: "healthy" },
];

const integrationHealth: IntegrationHealthItem[] = [
  {
    source: "ZoikoNex",
    target: "Billing system",
    interface: "service.activated",
    statusText: "Retrying · 3 attempts",
    statusType: "retrying",
  },
  {
    source: "Identity provider",
    target: "Partner portal",
    interface: "Token exchange",
    statusText: "Setup / review required",
    statusType: "review",
  },
  {
    source: "Zoiko Local",
    target: "Support desk",
    interface: "call.routed",
    statusText: "Healthy",
    statusType: "healthy",
  },
];

const changeIncidents: ChangeIncidentItem[] = [
  {
    badgeText: "Planned",
    badgeType: "planned",
    title: "API v1 deprecation · 30 Nov",
  },
  {
    badgeText: "In progress",
    badgeType: "progress",
    title: "Billing migration wave 2",
  },
  {
    badgeText: "Incident",
    badgeType: "incident",
    title: "Activation event delays · owner: Integration team",
  },
];

export default function OperationalResilienceSection() {
  return (
    <section className="relative bg-[#00191E] text-white py-16 px-6 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(/tele/11.jpg)` }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/90 mb-3">
            Operational Resilience & Observability
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            See what is healthy, what is changing and who owns it
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Integration health, change and incidents in one view, always linked
            to the authoritative status source.
          </p>
        </div>

        {/* Main Dashboard Box */}
        <div className="bg-white text-gray-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 mb-10">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 tracking-tight">
              Infrastructure command
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
              Specimen · Synthetic data
            </span>
          </div>

          {/* Architecture Summary Subsection */}
          <div className="mb-8">
            <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-3">
              Architecture summary
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {architectureSummary.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50/80 border border-gray-200/70 rounded-xl p-3.5 flex flex-col justify-between"
                >
                  <span className="text-xs font-medium text-gray-700 mb-2 leading-snug">
                    {item.title}
                  </span>
                  <div>
                    {item.statusType === "healthy" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                        {item.status}
                      </span>
                    )}
                    {item.statusType === "warning" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />
                        {item.status}
                      </span>
                    )}
                    {item.statusType === "degraded" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Health Table Subsection */}
          <div className="mb-8">
            <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-3">
              Integration health
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    <th className="pb-3 font-semibold">Source</th>
                    <th className="pb-3 font-semibold">Target</th>
                    <th className="pb-3 font-semibold">Interface</th>
                    <th className="pb-3 font-semibold">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs">
                  {integrationHealth.map((row, index) => (
                    <tr key={index}>
                      <td className="py-3.5 font-medium text-gray-900">
                        {row.source}
                      </td>
                      <td className="py-3.5 text-gray-600">{row.target}</td>
                      <td className="py-3.5 font-mono text-gray-600 text-[11px]">
                        {row.interface}
                      </td>
                      <td className="py-3.5">
                        {row.statusType === "retrying" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />
                            {row.statusText}
                          </span>
                        )}
                        {row.statusType === "review" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5" />
                            {row.statusText}
                          </span>
                        )}
                        {row.statusType === "healthy" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                            {row.statusText}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Change & Incident Rail Subsection */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-3">
              Change & incident rail
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gray-50/60 rounded-2xl p-4 border border-gray-100 items-center">
              {/* Left List of Items */}
              <div className="lg:col-span-6 space-y-3">
                {changeIncidents.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.badgeType === "planned" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-sky-50 text-sky-700 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-1.5" />
                        {item.badgeText}
                      </span>
                    )}
                    {item.badgeType === "progress" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />
                        {item.badgeText}
                      </span>
                    )}
                    {item.badgeType === "incident" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-rose-50 text-rose-700 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5" />
                        {item.badgeText}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-gray-900 truncate">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Side Text description */}
              <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-gray-200/70 pt-3 lg:pt-0 lg:pl-6 space-y-1">
                <p className="text-xs font-medium text-gray-700">
                  New activations in two markets may confirm late. Existing
                  subscribers unaffected.
                </p>
                <p className="text-[11px] text-gray-500">
                  Authoritative updates on the system status page.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-[#4DDCAD] hover:text-cyan-300 transition-colors group w-fit"
          >
            <span>Review operations</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
