"use client"
import React from "react";
import { ArrowRight } from "lucide-react";

export default function AiContactSalesSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#001315] via-[#065548] to-[#00262A] py-20 px-6 md:px-12 lg:px-20 font-sans text-white flex items-center overflow-hidden">
      {/* Background Image with zero vertical constraints / full bleed */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/ai/31.png"
          alt="Space background with celestial illustration"
          className="w-full h-full object-cover opacity-40 block m-0 p-0"
        />
        {/* Dark overlay for readability */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Title and Description */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            GET STARTED
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-6">
            Bring AI into real operations without losing source, authority or
            accountability.
          </h2>
          <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-8 max-w-lg">
            Talk with Zoiko Tech about the domain, workflow, authoritative
            sources, users, systems, AI role, human and agentic authority,
            governance requirements and integration path you need to
            evaluate.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center bg-[#247780] hover:bg-[#1d6168] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-colors shadow-lg border border-[#34D4CA44]"
            >
              Contact Sales <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              
            </a>
            <a
              href="#"
              className="inline-flex items-center bg-transparent hover:bg-white/10 text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-colors border border-white/30"
            >
              Explore Agentic Systems
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form White Card */}
        <div className="lg:col-span-6 bg-white text-[#0B132B] rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-lg font-extrabold text-[#0B132B] mb-1">
              Contact Sales
            </h3>
            <p className="text-[11px] text-gray-500">
              Technology: Artificial Intelligence
            </p>
          </div>

          <form
            className="space-y-4 text-xs"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Row 1: Work email & Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Work email*
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2b7a78]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Organization*
                </label>
                <input
                  type="text"
                  placeholder="Enterprise Inc."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2b7a78]"
                />
              </div>
            </div>

            {/* Row 2: Primary AI need & Domain / function */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Primary AI need
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-500 focus:outline-none focus:border-[#2b7a78]">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Domain / function
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-500 focus:outline-none focus:border-[#2b7a78]">
                  <option>Select</option>
                </select>
              </div>
            </div>

            {/* Row 3: AI role & Human / system authority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  AI role
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-500 focus:outline-none focus:border-[#2b7a78]">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Human / system authority
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-500 focus:outline-none focus:border-[#2b7a78]">
                  <option>Select</option>
                </select>
              </div>
            </div>

            {/* Row 4: Governance needs & Evaluation stage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Governance needs
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-500 focus:outline-none focus:border-[#2b7a78]">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Evaluation stage
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-500 focus:outline-none focus:border-[#2b7a78]">
                  <option>Select</option>
                </select>
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="The domain and workflow you want to bring AI into"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2b7a78]"
              ></textarea>
              <p className="text-[10px] text-gray-400 mt-1">
                Please don't include secrets, credentials, regulated personal
                data, private model prompts, customer records or restricted
                source material.
              </p>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2 pt-2">
              <label className="flex items-start space-x-2 text-[11px] text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-gray-300 text-[#2b7a78] focus:ring-[#2b7a78]"
                />
                <span>
                  I acknowledge the{" "}
                  <a
                    href="#"
                    className="underline font-semibold text-[#2b7a78]"
                  >
                    Privacy Notice
                  </a>{" "}
                  *
                </span>
              </label>
              <label className="flex items-start space-x-2 text-[11px] text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-gray-300 text-[#2b7a78] focus:ring-[#2b7a78]"
                />
                <span>
                  Send me occasional updates from Zoiko Tech (optional).[cite:
                  7]
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#2b7a78] hover:bg-[#236361] text-white font-bold text-xs py-3.5 rounded-xl transition-colors shadow-lg"
              >
                Contact Sales
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
