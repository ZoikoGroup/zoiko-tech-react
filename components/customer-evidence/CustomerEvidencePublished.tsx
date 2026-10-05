import React from "react";
import { FileText } from "lucide-react";

export default function CustomerEvidencePublished() {
  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Customer evidence is published only <br />
            after approval.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            No approved public customer-evidence records were supplied for this
            prototype.
          </p>
        </div>

        {/* Empty State Card Container */}
        <div className="w-full bg-[#EFF7F8] border border-teal-900/10 rounded-2xl p-8 md:p-12 shadow-sm">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#DEEFEF] border border-teal-900/10 flex items-center justify-center mb-6 shadow-sm text-[#247780]">
            <FileText className="w-6 h-6" />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">
            No public evidence records to display.
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-3xl mb-6">
            Customer identities, quotations, results and deployment details
            appear only when permission, source, scope and review state are
            approved. Featured evidence and proof cards are omitted until
            eligible records exist.
          </p>

          {/* Prototype status note */}
          <p className="text-[11px] text-gray-400 font-medium mb-8">
            Current prototype: evidence registry not connected. No search or
            filters are presented for an empty collection.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#125355] hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm transition-colors shadow-md">
              Explore industry architecture
            </button>
            <button className="hover:bg-gray-50 text-[#247780] font-semibold py-3 px-6 rounded-xl text-xs md:text-sm transition-colors border border-[#247780]">
              Discuss your evaluation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
