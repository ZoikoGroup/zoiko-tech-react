import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function ContactSalesSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading, Description & Actions */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Get Started Tag */}
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            GET STARTED
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Make identity and authority clear before access is granted.
          </h2>

          {/* Description */}
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            Talk with Zoiko Tech about the people, services, external actors or
            agents you need to identify; the systems that own identity and
            entitlement; the delegation and access decisions that matter; and
            the security, privacy and regulatory boundaries that must remain
            visible.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#2b7a78] text-white text-sm font-semibold shadow-md hover:bg-[#236361] transition-colors"
            >
              Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-gray-200 text-[#0B132B] text-sm font-semibold shadow-sm hover:bg-gray-50 transition-colors"
            >
              Explore Security, Identity and Assurance
            </a>
          </div>

          {/* Developer Platform Link */}
          <div className="mb-8">
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-[#2b7a78] hover:underline"
            >
              Explore Developer Platform{" "}
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>

          {/* Avatars & Subtitle */}
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src="/digital/29.png"
                alt="Actor 1"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src="/digital/30.png"
                alt="Actor 2"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src="/digital/31.png"
                alt="Actor 3"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src="/digital/27.png"
                alt="Actor 4"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src="/digital/28.png"
                alt="Actor 5"
              />
            </div>
            <span className="text-xs text-[#4A5568] font-medium">
              Identity architecture for people, services, guests and agents.
            </span>
          </div>
        </div>

        {/* Right Column: Contact Sales Form Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
          {/* Form Header */}
          <div className="pb-4 mb-6 border-b border-gray-100">
            <h3 className="text-base font-bold text-[#0B132B] mb-1">
              Contact Sales
            </h3>
            <span className="text-xs text-gray-400">
              Technology: Digital Identity
            </span>
          </div>

          {/* Form Grid */}
          <form className="space-y-4">
            {/* Row 1: Work Email & Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Work email *
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-[#0B132B] focus:outline-none focus:border-[#2b7a78]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Organization *
                </label>
                <input
                  type="text"
                  placeholder="Enterprise Inc."
                  className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-[#0B132B] focus:outline-none focus:border-[#2b7a78]"
                />
              </div>
            </div>

            {/* Row 2: Identity Population & Primary Need */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Identity population
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-400 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Primary need
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-400 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 3: Authority Sensitivity & Integration Need */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Authority sensitivity
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-400 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Integration need
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-400 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 4: Evaluation Stage & Country / Region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Evaluation stage
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-400 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Country / region
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-[#0B132B] focus:outline-none focus:border-[#2b7a78]">
                    <option>United States</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="The identity or access flow you want to make clear"
                className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-400 focus:outline-none focus:border-[#2b7a78] resize-none"
              ></textarea>
            </div>

            {/* Disclaimer Text */}
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Please don&apos;t include passwords, tokens, private keys,
              identity documents, government IDs, authentication factors,
              customer records, health or financial data, raw logs or
              confidential access evidence.
            </p>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start space-x-2 text-xs text-[#0B132B] cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-gray-300 text-[#2b7a78] focus:ring-[#2b7a78]"
                />
                <span>
                  I acknowledge the{" "}
                  <a href="#" className="underline font-semibold">
                    Privacy Notice
                  </a>{" "}
                  .
                </span>
              </label>
              <label className="flex items-start space-x-2 text-xs text-[#0B132B] cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-gray-300 text-[#2b7a78] focus:ring-[#2b7a78]"
                />
                <span>
                  Send me occasional updates from Zoiko Tech (optional).
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#2b7a78] text-white text-xs font-semibold shadow-md hover:bg-[#236361] transition-colors"
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
