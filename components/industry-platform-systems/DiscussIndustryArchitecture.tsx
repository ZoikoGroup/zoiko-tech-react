"use client";
import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function DiscussIndustryArchitecture() {
  const [workEmail, setWorkEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [systemNeed, setSystemNeed] = useState("");
  const [highLevelContext, setHighLevelContext] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Info */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
            Start with one authoritative industry workflow.
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-6">
            A bounded architecture conversation.
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8">
            Current source, maturity, operator and domain evidence must govern
            evaluation.
          </p>
          <a
            href="#developer-platform"
            className="inline-flex items-center text-sm font-semibold text-[#8ADCE0] hover:text-white transition-colors group"
          >
            Developer Platform preview
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right Column: Glassmorphic Form Card */}
        <div className="lg:col-span-7 w-full">
          <div
            style={{
              backgroundColor: "#FFFFFF33",
            }}
            className="rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl flex flex-col text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Discuss your industry architecture
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Work email & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-300">
                    Work email
                  </label>
                  <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder=""
                    className="w-full bg-[#F8FBFB] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#8ADCE0] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-300">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder=""
                    className="w-full bg-[#F8FBFB] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#8ADCE0] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: System need */}
              <div className="flex flex-col gap-1.5 max-w-79">
                <label className="text-xs font-medium text-gray-300">
                  System need
                </label>
                <div className="relative">
                  <select
                    value={systemNeed}
                    onChange={(e) => setSystemNeed(e.target.value)}
                    className="w-full bg-[#F8FBFB] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#8ADCE0] transition-all cursor-pointer pr-10"
                  >
                    <option
                      value=""
                      disabled
                      hidden
                      className="text-gray-500 bg-[#0A2528]"
                    >
                      Choose one
                    </option>
                    <option
                      value="workflow"
                      className="bg-[#0A2528] text-white"
                    >
                      Authoritative Industry Workflow
                    </option>
                    <option
                      value="infrastructure"
                      className="bg-[#0A2528] text-white"
                    >
                      Smart Infrastructure & Energy
                    </option>
                    <option
                      value="compliance"
                      className="bg-[#0A2528] text-white"
                    >
                      Jurisdiction & Policy Compliance
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 3: High-level context */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-300">
                  High-level context
                </label>
                <textarea
                  rows={4}
                  value={highLevelContext}
                  onChange={(e) => setHighLevelContext(e.target.value)}
                  className="w-full bg-[#F8FBFB] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#8ADCE0] transition-all"
                />
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-gray-400 leading-normal">
                No regulated records, personal/customer data, credentials or
                confidential infrastructure details.
              </p>

              {/* Checkbox */}
              <div className="flex items-start gap-3 mt-1">
                <input
                  type="checkbox"
                  id="acknowledge"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-[#7FD0D959] bg-[#F8FBFB] text-teal-600 focus:ring-0 cursor-pointer"
                />
                <label
                  htmlFor="acknowledge"
                  className="text-xs text-gray-300 cursor-pointer select-none leading-relaxed"
                >
                  I acknowledge this preview sends/stores no information.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#247780] to-[#1d646b] hover:from-[#298791] hover:to-[#247780] text-white font-medium text-sm transition-all shadow-lg border border-[#7FD0D959] cursor-pointer"
              >
                Review inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
