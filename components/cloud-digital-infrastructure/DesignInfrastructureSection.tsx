"use client"
import React from "react";

export default function DesignInfrastructureSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header content */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            Design infrastructure around the workload, the control boundary and
            the evidence you actually need.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Talk with Zoiko Tech about the platforms or workloads you need to
            integrate, the deployment and jurisdiction constraints involved, the
            interfaces and systems of record that matter, and the control and
            evidence model required for production.
          </p>
        </div>

        {/* Form Container with background #6FD0F652 */}
        <div
          className="rounded-3xl p-8 sm:p-10 border border-[#d3e4e6] shadow-sm"
          style={{ backgroundColor: "#6FD0F652" }}
        >
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-[#112223] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-[#112223] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                  Workload / technology need
                </label>
                <input
                  type="text"
                  defaultValue="Zoiko platform architecture"
                  className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-[#112223] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                  Role / function (optional)
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-[#112223] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                  Country / region
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-[#112223] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                  Deployment context (optional)
                </label>
                <input
                  type="text"
                  defaultValue="Only if you choose to share"
                  className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#247780]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                  Primary constraint
                </label>
                <input
                  type="text"
                  defaultValue="Integration"
                  className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-[#112223] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                  Evaluation stage
                </label>
                <input
                  type="text"
                  defaultValue="Exploring"
                  className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-[#112223] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#112223] mb-2">
                Message (optional)
              </label>
              <textarea
                rows={4}
                className="w-full bg-white border border-[#d3e4e6] rounded-xl px-4 py-3 text-sm text-[#112223] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                placeholder=""
              />
            </div>

            {/* Disclaimer text */}
            <p className="text-xs text-[#112223] leading-relaxed">
              Please don't submit credentials, secrets, access tokens, private
              keys, regulated records, production logs with PII,
              incident-sensitive data or confidential architecture details.
            </p>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#d3e4e6] text-[#247780] focus:ring-[#247780]"
                />
                <span className="text-sm text-[#112223]">
                  I acknowledge the Privacy Notice.
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#d3e4e6] text-[#247780] focus:ring-[#247780]"
                />
                <span className="text-sm text-[#112223]">
                  Send me optional Zoiko Tech updates.
                </span>
              </label>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#247780] hover:bg-[#1a5b62] text-white font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                Contact Sales
              </button>
              <a
                href="#"
                className="px-6 py-3 rounded-xl bg-transparent hover:bg-white/50 border border-[#247780] text-[#247780] font-semibold text-sm transition-all duration-200"
              >
                Explore Developer Platform (when public-ready)
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
