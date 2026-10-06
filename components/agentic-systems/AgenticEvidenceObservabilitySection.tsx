import React from "react";
import { ArrowRight } from "lucide-react";

interface EvidenceItem {
  time: string;
  title: string;
  description: string;
  badge: string;
  badgeType: "purple" | "blue" | "amber" | "emerald";
}

const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    time: "09:02",
    title: "Run started",
    description: "Agent INV-EXC-01 · owner AP Lead",
    badge: "Plan",
    badgeType: "purple",
  },
  {
    time: "09:02",
    title: "Plan v2 accepted",
    description: "Sources: contract v4, INV-7781, rate card (stale)",
    badge: "Plan",
    badgeType: "purple",
  },
  {
    time: "09:03",
    title: "Authority checked",
    description: "Delegated scope: AP US · expires 17:00",
    badge: "Authority",
    badgeType: "blue",
  },
  {
    time: "09:04",
    title: "Draft created",
    description: "Email draft #D-551 · receipt stored",
    badge: "Action",
    badgeType: "blue",
  },
  {
    time: "09:04",
    title: "Policy: review required",
    description: "Policy v3.2 · external communication",
    badge: "Policy",
    badgeType: "amber",
  },
  {
    time: "09:41",
    title: "Approved by AP Specialist",
    description: "Scope: this message only",
    badge: "Human",
    badgeType: "emerald",
  },
  {
    time: "09:42",
    title: "Sent · receipt returned",
    description: "Mail system message ID recorded",
    badge: "Action",
    badgeType: "blue",
  },
  {
    time: "09:42",
    title: "Authoritative outcome",
    description: "Supplier query logged in ERP case #C-118",
    badge: "Outcome",
    badgeType: "emerald",
  },
];

export default function AgenticEvidenceObservabilitySection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Main Grid: Left Header & Image Specimen, Right Evidence Trail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start mb-8">
          {/* Left Column: Header & Image Specimen with Overlay */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
              EVIDENCE & OBSERVABILITY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
              Trace intent to action to authoritative result
            </h2>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-8">
              Every run keeps its plan, authority, policy decisions, human
              approvals, actions, exceptions and the outcome confirmed by the
              system of record.
            </p>

            {/* Image Specimen (/age/18.png) with Floating Caption Box */}
            <div className="w-full relative">
              <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-[#00191E] border border-gray-200/60 h-[280px]">
                <img
                  src="/age/18.png"
                  alt="Scenic landscape tracking evidence and trace history"
                  className="w-full h-full object-cover block m-0 p-0"
                />
              </div>
              <div className="absolute -bottom-5 left-4 right-4 bg-white rounded-2xl p-3 shadow-lg border border-gray-200/80">
                <p className="text-xs text-gray-700 font-medium">
                  Every step leaves a trace you can follow back.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Run Evidence Trail Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-2xl border border-gray-200/60 p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <h3 className="text-xs font-bold text-[#0B132B]">
                Run evidence trail
              </h3>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            <div className="space-y-4 mb-6">
              {EVIDENCE_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-[11px] font-mono text-gray-400 font-semibold w-10 shrink-0">
                      {item.time}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#2b7a78]"></span>
                      <div>
                        <h4 className="text-xs font-extrabold text-[#0B132B]">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        item.badgeType === "purple"
                          ? "bg-purple-100 text-purple-800"
                          : item.badgeType === "blue"
                            ? "bg-sky-100 text-sky-800"
                            : item.badgeType === "amber"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 text-[10px] text-gray-400">
              Analytics never capture credentials, secrets, payloads, private
              prompts or raw customer data.
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Inspect evidence <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
