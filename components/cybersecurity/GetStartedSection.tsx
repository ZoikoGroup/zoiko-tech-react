"use client"
import React from "react";
import { Activity, AlertCircle, FileText, ArrowRight } from "lucide-react";

interface RouteCard {
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const ROUTE_CARDS: RouteCard[] = [
  {
    title: "Active incident or support need",
    subtitle: "Go to Help Center or System Status",
    icon: Activity,
  },
  {
    title: "Reporting a vulnerability",
    subtitle: "Use Responsible Disclosure",
    icon: AlertCircle,
  },
  {
    title: "Evaluating security architecture",
    subtitle: "Use this form",
    icon: FileText,
  },
];

export default function GetStartedSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cyber/33.png"
          alt="Get started background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#00191EB8]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Quick Route Cards */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          {/* Header */}
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-4">
            GET STARTED
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Design cybersecurity around the systems, responsibilities and
            evidence you actually operate.
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-10">
            Bring your protected scope, environment, incident and resilience
            needs, integration context, trust requirements and evaluation stage.
          </p>

          {/* Are you in the right place? */}
          <div className="mb-4">
            <h3 className="text-[#34D4CA] font-bold text-[11px] tracking-widest uppercase mb-4">
              ARE YOU IN THE RIGHT PLACE?
            </h3>
          </div>

          {/* Route Cards */}
          <div className="flex flex-col space-y-4">
            {ROUTE_CARDS.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-[#00191EB8] border border-[#34D4CA73] rounded-2xl p-4 flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#34D4CA] shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs mb-0.5">
                        {card.title}
                      </h4>
                      <p className="text-gray-300 text-[11px]">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#34D4CA]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Contact Sales Form */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#0B132B]">
                Contact Sales
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Technology: Cybersecurity
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 text-xs"
            >
              {/* Row 1: Work Email & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Work email*
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2b7a78]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Organization*
                  </label>
                  <input
                    type="text"
                    placeholder="Enterprise Inc."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2b7a78]"
                  />
                </div>
              </div>

              {/* Row 2: Primary Objective & Environment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Primary objective
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Environment
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Current Challenge & Responsibility Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Current challenge
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Responsibility model
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Timeline / Stage & Protected Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Timeline / stage
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:border-[#2b7a78]">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Protected scope (high level)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. customer billing services"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2b7a78]"
                  />
                </div>
              </div>

              {/* Warning Notice Box */}
              <div className="bg-[#FFF8E6] border border-[#FFE0A3] rounded-xl p-3.5 text-[11px] text-[#8C6D1F] leading-relaxed">
                Don't submit credentials, vulnerability details, active incident
                evidence, customer PII, private logs or regulated records.
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-[#2b7a78] focus:ring-[#2b7a78]"
                  />
                  <span className="text-gray-600 text-[11px]">
                    I acknowledge the{" "}
                    <a
                      href="#"
                      className="text-[#2b7a78] underline font-medium"
                    >
                      Privacy Notice
                    </a>
                    .*
                  </span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-[#2b7a78] focus:ring-[#2b7a78]"
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
                  className="w-full bg-[#2b7a78] hover:bg-[#236361] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors shadow-md text-center"
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
