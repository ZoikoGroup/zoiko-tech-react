import React from "react";
import { ArrowRight } from "lucide-react";

interface ReconciliationRow {
  comparison: string;
  expected: string;
  actual: string;
  result: {
    label: string;
    bg: string;
    text: string;
    dot: string;
  };
}

const RECONCILIATION_ROWS: ReconciliationRow[] = [
  {
    comparison: "Expected vs prepared",
    expected: "Levy due 4.2% of revenue",
    actual: "Prepared at 4.2%",
    result: {
      label: "Match",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-600",
    },
  },
  {
    comparison: "Prepared vs approved",
    expected: "Calculation file v5",
    actual: "Approved v5",
    result: {
      label: "Match",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-600",
    },
  },
  {
    comparison: "Approved vs transmitted",
    expected: "Approved v5",
    actual: "Transmitted v5 · TX-118",
    result: {
      label: "Match",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-600",
    },
  },
  {
    comparison: "Transmitted vs external",
    expected: "Submitted Q1 return",
    actual: "Rejected: field 7 format",
    result: {
      label: "Mismatch",
      bg: "bg-red-50",
      text: "text-red-700",
      dot: "bg-red-600",
    },
  },
  {
    comparison: "Source data vs output",
    expected: "Billing revenue €4.81M",
    actual: "Return revenue €4.79M",
    result: {
      label: "Mismatch",
      bg: "bg-red-50",
      text: "text-red-700",
      dot: "bg-red-600",
    },
  },
  {
    comparison: "Financial outcome",
    expected: "Remittance instruction prepared",
    actual: "Not yet confirmed by ledger",
    result: {
      label: "Unknown",
      bg: "bg-gray-100",
      text: "text-gray-700",
      dot: "bg-gray-500",
    },
  },
];

export default function RegulatoryReconciliationSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading, Description & Image */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
            <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
              §11
            </span>
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            RECONCILIATION & AUTHORITATIVE OUTCOME
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Compare every handoff until the record agrees
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed mb-8">
            A mismatch stays an exception until it is resolved and confirmed by
            the authoritative source, with before-and-after evidence kept.
          </p>

          {/* Image (rounded-2xl only, no bg, border, shadow) */}
          <div className="w-full h-[240px]">
            <img
              src="/reg/19.png"
              alt="Reconciliation professional portrait"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Column: Reconciliation Specimen Card */}
        <div className="lg:col-span-8 w-full">
          <div className="bg-[#FFFDF8] rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B132B]">
                  Reconciliation · Q1 levy return
                </h3>
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </div>
            </div>

            {/* Table Column Headers */}
            <div className="grid grid-cols-12 pb-3 border-b border-gray-100 text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
              <div className="col-span-4">COMPARISON</div>
              <div className="col-span-3">EXPECTED</div>
              <div className="col-span-3">ACTUAL</div>
              <div className="col-span-2 text-right">RESULT</div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col divide-y divide-gray-100 text-xs mb-6">
              {RECONCILIATION_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 py-3.5 items-center gap-2"
                >
                  <div className="col-span-4 font-bold text-[#0B132B]">
                    {row.comparison}
                  </div>
                  <div className="col-span-3 text-gray-600 truncate pr-2">
                    {row.expected}
                  </div>
                  <div className="col-span-3 text-gray-800 font-medium truncate pr-2">
                    {row.actual}
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${row.result.bg} ${row.result.text}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${row.result.dot} mr-1.5`}
                      ></span>
                      {row.result.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Owner / Next Action & Link */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-gray-600 font-medium">
                <strong className="text-[#0B132B]">Owner:</strong> Tax analyst ·{" "}
                <strong className="text-[#0B132B]">next action:</strong> correct
                field 7 and resubmit
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 shrink-0">
                Exception open
              </span>
            </div>
          </div>

          {/* Review Reconciliation Link */}
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
            >
              Review reconciliation{" "}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
