"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AuditBriefingForm() {
  return (
    <div
      id="context"
      className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Eyebrow */}
        <div className="lg:col-span-6 flex flex-col pt-4">
          {/* Eyebrow */}
          <span className="text-[#F0596B] font-semibold text-xs md:text-sm tracking-widest uppercase mb-4">
            EXECUTIVE BRIEFING / DESIGN PREVIEW
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#241C59] tracking-tight leading-[1.1] mb-6">
            Start with your oversight question.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            The briefing offer and operational request route remain unapproved
            in the source.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This form is a local preview and does not book, send or store a
            request.
          </p>
        </div>

        {/* Right Column: Briefing Context Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-[#FAF9FD] border border-[#B9B3D1] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col">
            {/* Form Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#241C59] mb-6">
              Briefing context
            </h3>

            {/* Inputs Row 1: Work email & Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
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
            </div>

            {/* Input Row 2: Role */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-[#241C59] mb-2">
                Role
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-[#B9B3D1] rounded-lg px-3.5 py-2.5 text-sm text-[#241C59] appearance-none focus:outline-none focus:ring-2 focus:ring-[#F0596B]/50">
                  <option>Choose one</option>
                  <option value="member">Committee Member</option>
                  <option value="chair">Committee Chair</option>
                  <option value="owner">Management Owner</option>
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

            {/* Input Row 3: High-level oversight question */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#241C59] mb-2">
                High-level oversight question
              </label>
              <textarea
                rows={4}
                className="w-full bg-white border border-[#B9B3D1] rounded-lg px-3.5 py-2.5 text-sm text-[#241C59] focus:outline-none focus:ring-2 focus:ring-[#F0596B]/50 resize-none"
                placeholder=""
              />
            </div>

            {/* Disclaimer Text */}
            <p className="text-[11px] text-gray-500 leading-relaxed mb-6">
              Do not submit workpapers, confidential findings, personal data,
              privileged material or credentials.
            </p>

            {/* Checkboxes */}
            <div className="flex flex-col gap-3 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-[#B9B3D1] text-[#F0596B] focus:ring-[#F0596B]"
                />
                <span className="text-xs text-gray-600 leading-normal">
                  I acknowledge this local preview sends/stores no information.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-[#B9B3D1] text-[#F0596B] focus:ring-[#F0596B]"
                />
                <span className="text-xs text-gray-600 leading-normal">
                  Optional updates if an approved live service is connected.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-[#F0596B] text-white font-medium text-sm py-3 px-6 rounded-lg shadow hover:bg-[#e04c5e] transition duration-200 inline-flex items-center justify-center gap-2"
            >
              Review briefing context <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
