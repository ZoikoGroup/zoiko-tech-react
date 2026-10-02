"use client"
import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContactSalesSection() {
  return (
    <section className="relative bg-[#001315] text-white py-20 px-6 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(/tele/12.png)` }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Heading and Description */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white">
            Get Started
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Create a telecom architecture that can evolve without forcing every
            system to move at once.
          </h1>
          <p className="text-base text-gray-300 leading-relaxed max-w-xl">
            Talk with Zoiko Tech about your OSS/BSS estate, subscriber and
            communications systems, identity and digital foundations,
            integration seams, and the right path to modernize or launch telecom
            services in controlled stages.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1b7580] hover:bg-[#208a95] transition-colors shadow-lg group"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-transparent border border-white/20 hover:bg-white/10 transition-colors"
            >
              Explore Telecom Architecture
            </a>
          </div>
        </div>

        {/* Right Column: Contact Sales Card / Form */}
        <div className="lg:col-span-6">
          <div className="bg-white text-gray-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 max-w-lg mx-auto lg:ml-auto">
            {/* Form Header */}
            <div className="mb-6 pb-4 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                Contact Sales
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Solution: Telecom Infrastructure
              </p>
            </div>

            {/* Form Fields */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 text-xs"
            >
              {/* Row 1: Work email & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Work email*
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b7580] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Company / operator*
                  </label>
                  <input
                    type="text"
                    placeholder="Operator Inc."
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b7580] text-gray-900"
                  />
                </div>
              </div>

              {/* Row 2: Operator type & Primary objective */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Operator type
                  </label>
                  <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1b7580] text-gray-700">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Primary objective
                  </label>
                  <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1b7580] text-gray-700">
                    <option>Select</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Current estate & Modernization stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Current estate
                  </label>
                  <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1b7580] text-gray-700">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Modernization stage
                  </label>
                  <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1b7580] text-gray-700">
                    <option>Select</option>
                  </select>
                </div>
              </div>

              {/* Country / markets */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Country / markets
                </label>
                <input
                  type="text"
                  defaultValue="United States"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b7580] text-gray-900"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Your OSS/BSS estate and what you want to change"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b7580] text-gray-900 resize-none"
                />
              </div>

              {/* Notice text */}
              <p className="text-[10px] text-gray-400 leading-normal">
                Please don't include subscriber personal data, call detail
                records, credentials, regulated telecom data or confidential
                network architecture. Market selection does not imply
                availability.
              </p>

              {/* Checkboxes */}
              <div className="space-y-2 pt-1">
                <label className="flex items-start space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-[#1b7580] focus:ring-[#1b7580]"
                  />
                  <span className="text-gray-600 text-[11px]">
                    I acknowledge the{" "}
                    <span className="underline font-medium">
                      Privacy Notice
                    </span>
                    .*
                  </span>
                </label>
                <label className="flex items-start space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-[#1b7580] focus:ring-[#1b7580]"
                  />
                  <span className="text-gray-600 text-[11px]">
                    Send me occasional updates from Zoiko Tech (optional).
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-white font-semibold bg-[#1b7580] hover:bg-[#208a95] transition-colors shadow-md text-sm"
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
