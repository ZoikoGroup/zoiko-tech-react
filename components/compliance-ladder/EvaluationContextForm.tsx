"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function EvaluationContextForm() {
  return (
    <div id="context" className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Eyebrow */}
        <div className="lg:col-span-6 flex flex-col pt-4">
          {/* Eyebrow */}
          <span className="text-[#F0596B] font-semibold text-xs md:text-sm tracking-widest uppercase mb-4">
            LOCAL DEMO-INQUIRY PREVIEW
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#241C59] tracking-tight leading-[1.1] mb-6">
            Start with a <br />
            governance question.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Demo offers, canonical route, privacy notice and operational form
            provider require approval. This local form sends/stores no data and
            books no demo.
          </p>
        </div>

        {/* Right Column: Evaluation Context Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-[#FAF9FD] border border-[#B9B3D1] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col">
            {/* Form Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#241C59] mb-6">
              Evaluation context
            </h3>

            {/* Inputs Row 1: Full name & Work email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs font-semibold text-[#241C59] mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#B9B3D1] rounded-lg px-3.5 py-2.5 text-sm text-[#241C59] focus:outline-none focus:ring-2 focus:ring-[#F0596B]/50"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#241C59] mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-[#B9B3D1] rounded-lg px-3.5 py-2.5 text-sm text-[#241C59] focus:outline-none focus:ring-2 focus:ring-[#F0596B]/50"
                  placeholder=""
                />
              </div>
            </div>

            {/* Inputs Row 2: Organization & Main interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs font-semibold text-[#241C59] mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#B9B3D1] rounded-lg px-3.5 py-2.5 text-sm text-[#241C59] focus:outline-none focus:ring-2 focus:ring-[#F0596B]/50"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#241C59] mb-2">
                  Main interest
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-[#B9B3D1] rounded-lg px-3.5 py-2.5 text-sm text-[#241C59] appearance-none focus:outline-none focus:ring-2 focus:ring-[#F0596B]/50">
                    <option>Choose one</option>
                    <option value="compliance">Compliance</option>
                    <option value="governance">Governance</option>
                    <option value="audit">Audit</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Row 3: Non-sensitive question */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#241C59] mb-2">
                Non-sensitive question
              </label>
              <textarea
                rows={4}
                className="w-full bg-white border border-[#B9B3D1] rounded-lg px-3.5 py-2.5 text-sm text-[#241C59] focus:outline-none focus:ring-2 focus:ring-[#F0596B]/50 resize-none"
                placeholder=""
              />
            </div>

            {/* Disclaimer Text */}
            <p className="text-[11px] text-gray-500 leading-relaxed mb-6">
              No credentials, compliance incidents, regulated records, customer
              or employee information, or confidential evidence.
            </p>

            {/* Checkboxes */}
            <div className="flex flex-col gap-3 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-[#B9B3D1] text-[#F0596B] focus:ring-[#F0596B]"
                />
                <span className="text-xs text-gray-600 leading-normal">
                  I acknowledge this is a local preview.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-[#B9B3D1] text-[#F0596B] focus:ring-[#F0596B]"
                />
                <span className="text-xs text-gray-600 leading-normal">
                  Optional updates when a live service is approved.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-[#F0596B] text-white font-medium text-sm py-3 px-6 rounded-lg shadow hover:bg-[#e04c5e] transition duration-200 inline-flex items-center justify-center gap-2"
            >
              Review demo context <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
