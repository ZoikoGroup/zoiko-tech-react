import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

interface SystemRow {
  system: string;
  role: string;
  useCases: string;
  modelProvider: string;
  version: string;
  owner: string;
  authority: string;
  evaluation: string;
  status: { text: string; bg: string; color: string };
  disclosure: string;
}

const inventoryRows: SystemRow[] = [
  {
    system: "SYS-012",
    role: "Intelligence service",
    useCases: "UC-0314, UC-0320",
    modelProvider: "[Approved disclosure only]",
    version: "v2.3 · current",
    owner: "AI Platform team",
    authority: "Recommend",
    evaluation: "EVAL-88 · stale",
    status: { text: "Elevated", bg: "bg-[#FEF3C7]", color: "text-[#92400E]" },
    disclosure: "Restricted",
  },
  {
    system: "SYS-019",
    role: "Retrieval / knowledge",
    useCases: "UC-0314",
    modelProvider: "[Approved disclosure only]",
    version: "v1.8 · current",
    owner: "Data platform",
    authority: "Read only",
    evaluation: "EVAL-91 · current",
    status: { text: "Active", bg: "bg-[#DBF2ED]", color: "text-[#195B62]" },
    disclosure: "Public",
  },
  {
    system: "SYS-024",
    role: "Safety control",
    useCases: "All finance use cases",
    modelProvider: "[Approved disclosure only]",
    version: "v4.0 · current",
    owner: "Governance eng.",
    authority: "Block / route",
    evaluation: "EVAL-77 · current",
    status: { text: "Active", bg: "bg-[#DBF2ED]", color: "text-[#195B62]" },
    disclosure: "Public",
  },
  {
    system: "SYS-031",
    role: "Agentic component",
    useCases: "UC-0402",
    modelProvider: "[Withheld]",
    version: "unknown",
    owner: "Automation team",
    authority: "Execute w/ approval",
    evaluation: "none",
    status: { text: "Unknown", bg: "bg-[#E2E8F0]", color: "text-[#334155]" },
    disclosure: "Unavailable",
  },
];

export default function SystemInventorySection() {
  return (
    <section id="system-inventory" className="w-full bg-[#E9F9F8] text-[#0F172A] py-16 sm:py-20 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Top Header & Images */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="flex flex-col gap-2 sm:gap-2.5 max-w-[620px]">
            <span className="font-poppins text-xs font-semibold tracking-[0.16em] text-[#247780] uppercase">
              System, model & provider inventory
            </span>
            <h2 className="font-plus-jakarta font-bold text-2xl sm:text-4xl lg:text-5xl leading-tight text-[#0F172A]">
              What each governed <br className="hidden sm:inline" />
              system does, owns and <br className="hidden sm:inline" />
              may trigger
            </h2>
          </div>

          {/* Two Images Side by Side - Fluid Responsive */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
            <div className="relative w-full sm:w-52 md:w-56 h-24 sm:h-32 md:h-36 rounded-[16px] sm:rounded-[18px] overflow-hidden shadow-sm">
              <Image
                src="/ai-safety-and-governance/inventory-architecture-opening.png"
                alt="Circular architectural opening"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full sm:w-52 md:w-56 h-24 sm:h-32 md:h-36 rounded-[16px] sm:rounded-[18px] overflow-hidden shadow-sm">
              <Image
                src="/ai-safety-and-governance/inventory-control-knobs.png"
                alt="Close-up of control knobs"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="lg:hidden flex items-center gap-1.5 text-xs text-[#247780] font-medium mb-2.5">
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          <span>Swipe horizontally to view full 10-column inventory</span>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] font-inter text-[11px] font-semibold tracking-wider text-[#64748B] uppercase">
                  <th className="py-3.5 px-4">System</th>
                  <th className="py-3.5 px-4">Role</th>
                  <th className="py-3.5 px-4">Use Cases</th>
                  <th className="py-3.5 px-4">Model / Provider</th>
                  <th className="py-3.5 px-4">Version</th>
                  <th className="py-3.5 px-4">Owner</th>
                  <th className="py-3.5 px-4">Authority</th>
                  <th className="py-3.5 px-4">Evaluation</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Disclosure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-inter text-xs sm:text-[13px] text-[#334155]">
                {inventoryRows.map((row) => (
                  <tr key={row.system} className="hover:bg-[#F8FAFC]/80 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#0F172A] whitespace-nowrap">
                      {row.system}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">{row.role}</td>
                    <td className="py-4 px-4 whitespace-nowrap font-mono text-xs text-[#247780]">
                      {row.useCases}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-[#64748B]">
                      {row.modelProvider}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-xs">{row.version}</td>
                    <td className="py-4 px-4 whitespace-nowrap">{row.owner}</td>
                    <td className="py-4 px-4 whitespace-nowrap font-medium text-[#0F172A]">
                      {row.authority}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">{row.evaluation}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${row.status.bg} ${row.status.color}`}>
                        {row.status.text}
                      </span>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-[#64748B]">
                      {row.disclosure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Botticelli Rule Banner */}
        <div className="flex items-start gap-3 p-4 sm:p-5 rounded-[14px] bg-[#CFE9EA] text-[#0F172A] mb-6">
          <Info className="w-5 h-5 flex-shrink-0 text-[#247780] mt-0.5" />
          <p className="font-poppins text-xs sm:text-sm leading-relaxed">
            <strong className="font-semibold text-[#0F172A]">Inventory rule.</strong>{" "}
            No secrets, hidden prompts, internal topology, proprietary chain-of-thought or sensitive
            red-team details. Omitting a provider never implies in-house.
          </p>
        </div>

        {/* Action Link */}
        <div className="flex justify-start">
          <Link
            href="#system-inventory"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-[#247780] hover:underline group"
          >
            <span>Inspect inventory</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
