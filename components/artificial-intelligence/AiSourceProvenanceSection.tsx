import React from "react";
import {
  FileText,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Info,
} from "lucide-react";

interface ProvenanceItem {
  icon: React.ElementType;
  title: string;
  status: string;
  statusColor: string;
  detail: string;
}

const PROVENANCE_ITEMS: ProvenanceItem[] = [
  {
    icon: FileText,
    title: "Supplier contract v4",
    status: "Current",
    statusColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    detail: "Contract system · Effective 01 Jul",
  },
  {
    icon: FileText,
    title: "ERP invoice INV-7781",
    status: "Current",
    statusColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    detail: "ERP · Posted 03 Oct",
  },
  {
    icon: FileText,
    title: "Rate card 2025",
    status: "Stale",
    statusColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    detail: "Procurement share · Last updated Jan",
  },
  {
    icon: FileText,
    title: "Email: revised rate",
    status: "Conflicting",
    statusColor: "bg-rose-500/10 text-rose-600 border-rose-500/30",
    detail: "Shared inbox · Unverified",
  },
];

interface FeatureRow {
  title: string;
  description: string;
}

const FEATURE_ROWS: FeatureRow[] = [
  {
    title: "Source identity",
    description: "System, document or record, and its owner.",
  },
  {
    title: "Version & effective time",
    description: "Current version and last authoritative update.",
  },
  {
    title: "Access & rights",
    description:
      "Purpose, entitlement, confidentiality and licensing.",
  },
  {
    title: "Source quality",
    description:
      "Missing, conflicting, stale or incomplete states visible.",
  },
  {
    title: "Derived content",
    description:
      "Generated, summarized or inferred output clearly labeled.",
  },
  {
    title: "Citation & lineage",
    description: "Links to supporting sources where permitted.",
  },
];

export default function AiSourceProvenanceSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            SOURCE, KNOWLEDGE & PROVENANCE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Every answer shows where it came from
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
            Authoritative context, lineage, access and freshness travel with the
            output, and conflicts are surfaced rather than smoothed over.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mb-12 items-start">
          {/* Left Column: Images Stack (/ai/16.png and /ai/17.png) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 h-[220px]">
              <img
                src="/ai/16.png"
                alt="Workspace and team reviewing source data"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 h-[220px]">
              <img
                src="/ai/17.png"
                alt="Close-up of laptop interface reviewing evidence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Middle Column: Source & Provenance Panel Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-gray-400 pb-3 mb-4 border-b border-gray-100">
                <span className="text-[#0B132B] font-bold">
                  Source & provenance panel
                </span>
                
                <span className="text-gray-500">SPECIMEN · SYNTHETIC DATA</span>
                
              </div>

              {/* Items List */}
              <div className="space-y-3 mb-6">
                {PROVENANCE_ITEMS.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-xl bg-[#2b7a78]/10 text-[#2b7a78] flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#0B132B]">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-gray-500">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Derived Summary Box */}
              <div className="bg-[#f0f9f8] rounded-2xl p-4 border border-[#2b7a78]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#0B132B]">
                    Derived summary
                  </span>
                  
                  <span className="bg-purple-500/10 text-purple-700 border border-purple-500/30 text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 mr-1" /> Derived
                  </span>
                </div>
                <p className="text-[11px] text-gray-700 leading-relaxed mb-3">
                  Invoice INV-7781 bills 6% above the contracted rate{" "}
                  <span className="text-[#2b7a78] font-mono font-bold">
                    [1]
                  </span>{" "}
                  <span className="text-[#2b7a78] font-mono font-bold">
                    [2]
                  </span>
                  .
                </p>
                <div className="text-[10px] text-rose-600 bg-rose-50 border border-rose-200 p-2 rounded-xl">
                  Conflict: an unverified email suggests a revised rate. Routed
                  for authoritative resolution, not averaged.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Source Identity & Feature Rules */}
          <div className="lg:col-span-4 bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 flex flex-col justify-between">
            <div className="space-y-5">
              {FEATURE_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-100 last:border-none last:pb-0"
                >
                  <h4 className="text-xs font-extrabold text-[#0B132B] mb-1">
                    {row.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {row.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100">
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
              >
                Review source model{" "}
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
