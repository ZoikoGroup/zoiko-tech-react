import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BoundaryRow {
  area: string;
  publicTreatment: string;
  neverInferred: string;
}

const boundaryRows: BoundaryRow[] = [
  {
    area: "Provider identity",
    publicTreatment: "✓ Published only if approved",
    neverInferred: "✕ Omission does not imply in-house",
  },
  {
    area: "Hosted vs internal",
    publicTreatment: "✓ From current architecture or contract sources",
    neverInferred: "✕ No inferred boundary",
  },
  {
    area: "Data sent to provider",
    publicTreatment: "✓ From privacy and data-processing sources",
    neverInferred: "✕ No inference",
  },
  {
    area: "Retention / deletion",
    publicTreatment: "✓ Provider and product policy control the statement",
    neverInferred: "✕ No invented period",
  },
  {
    area: "Training / improvement",
    publicTreatment: "✓ Only from an approved source",
    neverInferred: "✕ No opt-in, opt-out or no-training claims",
  },
  {
    area: "Subprocessor status",
    publicTreatment: "✓ Legal and Privacy decide",
    neverInferred: "✕ No classification here",
  },
  {
    area: "Region / residency",
    publicTreatment: "✓ Routed to residency evidence",
    neverInferred: "✕ No inferred location",
  },
  {
    area: "Availability / continuity",
    publicTreatment: "✓ —",
    neverInferred: "✕ No portability, redundancy, exit or SLA claims",
  },
];

export const ThirdPartyBoundarySection: React.FC = () => {
  return (
    <section id="third-party" className="w-full bg-[#E9F9F8] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Heading, Subtitle, Footbridge Image */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#247780] font-poppins uppercase">
              Third-party AI & provider boundary
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0F172A] font-plus-jakarta leading-tight">
              What we say<br />about providers,<br />and only from<br />authoritative<br />sources
            </h2>
          </div>

          <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/ai-safety-and-governance/thirdparty-footbridge.png"
              alt="Footbridge between buildings symbolizing the boundary between external providers and internal governance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Right Column: 3-Column Table Card + Link */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 w-full">
          {/* Mobile Swipe Hint */}
          <div className="sm:hidden flex items-center gap-1.5 text-xs text-[#247780] font-medium">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>Swipe table horizontally to read all columns</span>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px] text-left text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-slate-50/60 font-semibold text-[#64748B]">
                    <th className="py-3.5 px-4 md:px-5">AREA</th>
                    <th className="py-3.5 px-4 md:px-5">PUBLIC TREATMENT</th>
                    <th className="py-3.5 px-4 md:px-5">NEVER INFERRED</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {boundaryRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4 md:px-5 font-bold text-[#0F172A] font-plus-jakarta whitespace-nowrap">
                        {row.area}
                      </td>
                      <td className="py-3 px-4 md:px-5 text-[#195B62] font-medium font-poppins">
                        {row.publicTreatment}
                      </td>
                      <td className="py-3 px-4 md:px-5 text-[#991B1B] font-medium font-poppins">
                        {row.neverInferred}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Link
              href="#third-party"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#247780] hover:text-[#195B62] transition-colors group"
            >
              <span>Review provider boundary</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
