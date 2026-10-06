"use client"
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function RegulatoryGetStartedSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden bg-[#00191E]">
      {/* Background Image with Standard Overlay Structure */}
      <div className="absolute inset-0 z-0">
        <img
          src="/reg/29.jpg"
          alt="Background bookshelf"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001315F2] via-[#001315CC] to-[#00131599]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-white">
          <div className="inline-flex items-center space-x-2 bg-[#2477808C] backdrop-blur-sm border border-[#34D4CA73] rounded-full px-3 py-1 w-fit mb-4">
            <span className="text-[#34D4CA] font-mono text-[11px] font-bold">
              §23
            </span>
            
          </div>
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3">
            GET STARTED
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.08] mb-6">
            Operationalize regulatory change without losing authority or
            evidence.
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Bring one regulated workflow, jurisdiction and your current systems.
            Zoiko Tech can help map source, applicability, obligations,
            controls, approvals, integration and evidence while keeping product
            maturity and legal boundaries explicit.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#247780] hover:bg-[#1e636a] text-white text-xs font-semibold shadow-lg transition-all"
            >
              Contact Sales <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl hover:bg-white/15 backdrop-blur-sm border border-white text-white text-xs font-semibold transition-all"
            >
              Explore Regulatory & Compliance
            </a>
          </div>

          <div className="text-[11px] text-gray-400 tracking-wide">
            Trust Center · Developer Platform · Digital Identity · Cybersecurity
            · AI Safety and Governance
          </div>
        </div>

        {/* Right Column: Contact Sales Form Card */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 text-[#0B132B]">
            <h3 className="text-xl font-extrabold mb-1">Contact Sales</h3>
            <p className="text-xs text-gray-500 mb-6">
              Technology: Regulatory Technology
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Work email*
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Organization*
                  </label>
                  <input
                    type="text"
                    placeholder="Enterprise Inc."
                    className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780]"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Primary need
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780] pr-8">
                      <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Industry / operating context
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780] pr-8">
                      <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Jurisdiction / market context
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780] pr-8">
                      <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Workflow stage
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780] pr-8">
                      <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    External action need
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780] pr-8">
                      <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Evidence / audit need
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780] pr-8">
                      <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    AI interest
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780] pr-8">
                      <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Current systems (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. billing, ERP, GRC tool"
                    className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#247780]"
                  />
                </div>
              </div>

              {/* Notice Banner */}
              <div className="bg-[#FFF8E7] border border-[#FEE1B0] rounded-xl p-3 text-[11px] text-[#856404] leading-relaxed">
                Please don't submit confidential legal-advice requests,
                credentials, regulated filing payloads, personal, financial or
                health data, or sensitive evidence.
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start space-x-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-[#247780] focus:ring-[#247780]"
                  />
                  <span className="text-[11px] text-gray-600">
                    I acknowledge the{" "}
                    <a
                      href="#"
                      className="underline font-semibold text-[#0B132B]"
                    >
                      Privacy Notice
                    </a>{" "}
                    .*
                  </span>
                </label>
                <label className="flex items-start space-x-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-[#247780] focus:ring-[#247780]"
                  />
                  <span className="text-[11px] text-gray-600">
                    Send me occasional updates from Zoiko Tech (optional).[cite:
                    6]
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#247780] hover:bg-[#1e636a] text-white text-xs font-bold shadow-md transition-all text-center"
                >
                  Contact Sales
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
