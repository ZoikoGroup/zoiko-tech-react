import React from "react";

export default function ComplianceCompletedTask() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Text & Attribution List */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#241C59] tracking-tight mb-4">
            A completed task <br />
            is not verified compliance.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Keep obligation, assignment, control mapping, exception and evidence
            references separately owned and versioned.
          </p>

          {/* List of Attributions */}
          <div className="flex flex-col divide-y divide-gray-200">
            <div className="py-4">
              <h4 className="text-xs font-bold text-[#241C59] uppercase tracking-wider mb-1">
                Source and scope
              </h4>
              <p className="text-sm text-gray-600">
                Authority, entity, jurisdiction and effective version.
              </p>
            </div>

            <div className="py-4">
              <h4 className="text-xs font-bold text-[#241C59] uppercase tracking-wider mb-1">
                Owner and review
              </h4>
              <p className="text-sm text-gray-600">
                Preparation, approval and segregation remain distinct.
              </p>
            </div>

            <div className="py-4">
              <h4 className="text-xs font-bold text-[#241C59] uppercase tracking-wider mb-1">
                Evidence and oversight
              </h4>
              <p className="text-sm text-gray-600">
                Currentness, access and unresolved decision context.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Concept UI / Synthetic Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-white border border-[#B9B3D1] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col">
            {/* Card Header Top */}
            <div className="flex items-center justify-between mb-6">
              <span className="bg-[#FFE8EC] text-[#772536] text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-[20px]">
                ILLUSTRATIVE CONCEPT / SYNTHETIC
              </span>
              <span className="text-xs font-mono text-gray-500 tracking-wider">
                CL-104
              </span>
            </div>

            {/* Card Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#241C59] mb-6 pb-4 border-b border-gray-200">
              Scoped obligation review
            </h3>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Source version
                </span>
                <span className="text-sm font-semibold text-[#241C59]">
                  Not verified — specimen
                </span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Applicability
                </span>
                <span className="text-sm font-semibold text-[#241C59]">
                  Not assessed
                </span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Accountability
                </span>
                <span className="text-sm font-semibold text-[#241C59]">
                  Awaiting owner
                </span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Review date
                </span>
                <span className="text-sm font-semibold text-[#241C59]">
                  Not established
                </span>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="bg-[#F3F0FA] border-l-4 border-[#F0596B] rounded-r-lg p-4 mb-6">
              <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                NEXT REVIEW QUESTION
              </span>
              <p className="text-base font-bold text-[#241C59]">
                Who confirms applicability and source freshness?
              </p>
            </div>

            {/* Footer Note */}
            <p className="text-[11px] text-gray-400 leading-relaxed">
              No real obligation, legal determination, customer record or
              production screenshot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
