import React from "react";

export default function AuditVisibilityAssurance() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Text & Attribution List */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#241C59] tracking-tight mb-4">
            Visibility is not assurance.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Keep management assertions, evidence references, reviewer findings
            and committee decisions separately attributed.
          </p>

          {/* List of Attributions */}
          <div className="flex flex-col divide-y divide-gray-200">
            <div className="py-4">
              <h4 className="text-xs font-bold text-[#241C59] uppercase tracking-wider mb-1">
                Origin
              </h4>
              <p className="text-sm text-gray-600">
                Synthetic access-review exception
              </p>
            </div>

            <div className="py-4">
              <h4 className="text-xs font-bold text-[#241C59] uppercase tracking-wider mb-1">
                Management position
              </h4>
              <p className="text-sm text-gray-600">
                Response/evidence submitted; not verified closure
              </p>
            </div>

            <div className="py-4">
              <h4 className="text-xs font-bold text-[#241C59] uppercase tracking-wider mb-1">
                Reviewer disposition
              </h4>
              <p className="text-sm text-gray-600">
                Pending; source/review date not established
              </p>
            </div>

            <div className="py-4">
              <h4 className="text-xs font-bold text-[#241C59] uppercase tracking-wider mb-1">
                Committee question
              </h4>
              <p className="text-sm text-gray-600">Who confirms closure?</p>
            </div>
          </div>
        </div>

        {/* Right Column: Concept UI / Synthetic Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-white border border-[#B9B3D1] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col">
            {/* Card Header Top */}
            <div className="flex items-center justify-between mb-6">
              <span className="bg-[#FFE8EC] text-[#772536] text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-[20px]">
                CONCEPT UI / SYNTHETIC
              </span>
              <span className="text-xs font-mono text-gray-500 tracking-wider">
                AC-104 / PROVENANCE VIEW
              </span>
            </div>

            {/* Card Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#241C59] mb-6 pb-4 border-b border-gray-200">
              Access-review exception
            </h3>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Owner
                </span>
                <span className="text-sm font-semibold text-[#241C59]">
                  Finance operations
                </span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Evidence
                </span>
                <span className="text-sm font-semibold text-[#241C59]">
                  Submitted for review
                </span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Currentness
                </span>
                <span className="text-sm font-semibold text-[#241C59]">
                  Review pending
                </span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                  As-of date
                </span>
                <span className="text-sm font-semibold text-[#241C59]">
                  Not established — illustrative
                </span>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="bg-[#F3F0FA] border-l-4 border-[#F0596B] rounded-r-lg p-4 mb-6">
              <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                UNRESOLVED COMMITTEE QUESTION
              </span>
              <p className="text-base font-bold text-[#241C59]">
                Who confirms closure?
              </p>
            </div>

            {/* Footer Note */}
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Illustrative source only. No customer record, live screenshot,
              audit opinion or independent verification is represented.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
