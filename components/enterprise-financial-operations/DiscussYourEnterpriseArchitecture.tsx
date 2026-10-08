"use client";
import React from "react";

export default function DiscussYourEnterpriseArchitecture() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Subtitle & Link matching the new image precisely */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Start with one accountable operating workflow.
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
            Bounded evaluation.
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8">
            Capability, operator, jurisdiction and current availability require
            verified sources.
          </p>
          <a
            href="#developer-preview"
            className="inline-flex items-center text-sm font-semibold text-teal-300 hover:text-white transition-colors group"
          >
            Developer Platform preview
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Right Column: Glassmorphic Inquiry Form */}
        <div className="lg:col-span-7">
          <div
            style={{
              backgroundColor: "#FFFFFF0F",
              borderColor: "#7FD0D959",
            }}
            className="border rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col w-full text-left"
          >
            <h3 className="text-xl font-bold text-white tracking-tight mb-6">
              Discuss your enterprise architecture
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              {/* Row 1: Work email & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-xs text-gray-300 mb-1.5 font-medium">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    style={{
                      backgroundColor: "#7FD0D94D",
                      borderColor: "#7FD0D940",
                    }}
                    className="border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-gray-300 mb-1.5 font-medium">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    style={{
                      backgroundColor: "#7FD0D94D",
                      borderColor: "#7FD0D940",
                    }}
                    className="border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              {/* Priority Select */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-300 mb-1.5 font-medium">
                  Priority
                </label>
                <select
                  style={{
                    backgroundColor: "#7FD0D94D",
                    borderColor: "#7FD0D940",
                  }}
                  className="border rounded-lg px-4 py-2.5 text-white text-sm max-w-80 focus:outline-none focus:border-teal-400 transition-colors"
                >
                  <option className="bg-[#7FD0D94D] text-black">
                    Choose one
                  </option>
                  <option className="bg-[#7FD0D94D] text-black">High</option>
                  <option className="bg-[#7FD0D94D] text-black">Medium</option>
                  <option className="bg-[#7FD0D94D] text-black">Low</option>
                </select>
              </div>

              {/* High-level context Textarea */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-300 mb-1.5 font-medium">
                  High-level context
                </label>
                <textarea
                  rows={4}
                  style={{
                    backgroundColor: "#7FD0D94D",
                    borderColor: "#7FD0D940",
                  }}
                  className="border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
                />
              </div>

              {/* Disclaimer Notice */}
              <p className="text-[11px] text-gray-400 leading-relaxed">
                No credentials, employee data, customer records, financial
                payloads or confidential evidence.
              </p>

              {/* Checkbox Agreement */}
              <div className="flex items-start gap-3 mt-1">
                <input
                  type="checkbox"
                  id="acknowledge"
                  className="mt-1 rounded border-gray-400 text-teal-600 focus:ring-teal-500 bg-transparent"
                />
                <label
                  htmlFor="acknowledge"
                  className="text-xs text-gray-300 cursor-pointer leading-snug"
                >
                  I acknowledge this preview sends/stores no information.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full py-3 px-6 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-medium text-sm transition-colors shadow-lg flex items-center justify-center gap-2 border border-teal-500/40"
              >
                Review inquiry ↗
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
