import React from "react";
import { ArrowRight, AlertTriangle } from "lucide-react";

interface RegistryRow {
  tool: string;
  action: string;
  resourceScope: string;
  sideEffect: string;
  sideEffectType: "green" | "amber" | "red";
  requiredAuthority: string;
  approvalGate: string;
  availability: string;
  availabilityType: "green" | "amber" | "red" | "gray";
}

const REGISTRY_ROWS: RegistryRow[] = [
  {
    tool: "ERP · invoice read",
    action: "Read invoice",
    resourceScope: "AP entity · US",
    sideEffect: "Read-only",
    sideEffectType: "green",
    requiredAuthority: "Agent (delegated)",
    approvalGate: "None",
    availability: "Current",
    availabilityType: "green",
  },
  {
    tool: "Contract search",
    action: "Find clause",
    resourceScope: "Supplier contracts",
    sideEffect: "Read-only",
    sideEffectType: "green",
    requiredAuthority: "Agent (delegated)",
    approvalGate: "None",
    availability: "Current",
    availabilityType: "green",
  },
  {
    tool: "Email · draft",
    action: "Create draft",
    resourceScope: "Shared AP mailbox",
    sideEffect: "Draft",
    sideEffectType: "amber",
    requiredAuthority: "Agent (delegated)",
    approvalGate: "None",
    availability: "Current",
    availabilityType: "green",
  },
  {
    tool: "Email · send",
    action: "Send message",
    resourceScope: "External suppliers",
    sideEffect: "External communication",
    sideEffectType: "amber",
    requiredAuthority: "AP Specialist",
    approvalGate: "Pre-send review",
    availability: "Restricted",
    availabilityType: "amber",
  },
  {
    tool: "Payments",
    action: "Hold or release",
    resourceScope: "—",
    sideEffect: "Irreversible",
    sideEffectType: "red",
    requiredAuthority: "Not delegated",
    approvalGate: "—",
    availability: "Unavailable",
    availabilityType: "red",
  },
  {
    tool: "Vendor master",
    action: "Update bank details",
    resourceScope: "—",
    sideEffect: "High-impact",
    sideEffectType: "red",
    requiredAuthority: "Not delegated",
    approvalGate: "—",
    availability: "Unknown · fail closed",
    availabilityType: "gray",
  },
];

export default function AgenticToolActionRegistrySection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header & Right Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-end mb-12">
          {/* Left Header */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
              TOOL & ACTION REGISTRY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
              An agent can only touch what the registry allows
            </h2>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
              Every tool lists its action, scope, side effect, required
              authority, approval gate and availability. Missing state fails
              closed.
            </p>
          </div>

          {/* Right Image Specimen (/age/13.png) */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-[#00191E] border border-gray-200/60 h-[220px]">
              <img
                src="/age/13.png"
                alt="Engineers reviewing operational tools and action dashboards"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
          </div>
        </div>

        {/* Main Registry Table Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-200/60 p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
            <h3 className="text-xs font-bold text-[#0B132B]">
              Tool & action registry
            </h3>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Tool</th>
                  <th className="pb-3 font-semibold">Action</th>
                  <th className="pb-3 font-semibold">
                    Resource scope
                  </th>
                  <th className="pb-3 font-semibold">Side effect</th>
                  <th className="pb-3 font-semibold">
                    Required authority
                  </th>
                  <th className="pb-3 font-semibold">Approval gate</th>
                  <th className="pb-3 font-semibold">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {REGISTRY_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3.5 font-extrabold text-[#0B132B]">
                      {row.tool}
                    </td>
                    <td className="py-3.5 text-gray-700">
                      {row.action}
                    </td>
                    <td className="py-3.5 text-gray-500 font-mono text-[11px]">
                      {row.resourceScope}
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          row.sideEffectType === "green"
                            ? "bg-emerald-100 text-emerald-800"
                            : row.sideEffectType === "amber"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {row.sideEffect}
                      </span>
                    </td>
                    <td className="py-3.5 text-gray-700">
                      {row.requiredAuthority}
                    </td>
                    <td className="py-3.5 text-gray-500">
                      {row.approvalGate}
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          row.availabilityType === "green"
                            ? "bg-emerald-100 text-emerald-800"
                            : row.availabilityType === "amber"
                              ? "bg-amber-100 text-amber-800"
                              : row.availabilityType === "red"
                                ? "bg-rose-100 text-rose-800"
                                : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {row.availability}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-[10px] text-gray-400">
            Inputs are structured; credentials never appear in the interface.
            Retries are bounded, with no exactly-once guarantee implied.[cite:
            7]
          </div>
        </div>

        {/* Warning Banner Callout */}
        <div className="w-full bg-[#FEF3C7]/60 border border-[#F59E0B]/40 rounded-2xl p-4 md:p-5 flex items-start space-x-3 mb-8">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong className="font-bold">High-impact boundary.</strong>{" "}
            Payments, money movement, employment, medical, legal,
            security-critical and government actions are never shown as
            automatically executable. They require explicit authority, policy,
            approval and evidence, and only where product documentation supports
            them.
          </p>
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Inspect tools <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            
          </a>
        </div>
      </div>
    </section>
  );
}
