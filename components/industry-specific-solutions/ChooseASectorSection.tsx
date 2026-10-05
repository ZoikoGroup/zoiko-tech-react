"use client"
import React, { useState } from "react";

export default function ChooseASectorSection() {
  const [selectedSector, setSelectedSector] = useState("Choose a sector");

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Grid: Left Selector/Info vs Right Header & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Title, Dropdown, and Explanatory Text (Span 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Your industry, <br />
              your starting point.
            </h2>

            <div className="mb-6">
              <label className="block text-xs font-mono text-gray-600 mb-2">
                Choose an industry
              </label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-teal-700 transition-colors shadow-sm"
              >
                <option value="Choose a sector">
                  Choose a sector
                </option>
                <option value="Media & Streaming">Media & Streaming</option>
                <option value="Enterprise SaaS">Enterprise SaaS</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Healthcare Tech">Healthcare Tech</option>
                <option value="Logistics & Supply">Logistics & Supply</option>
              </select>
            </div>

            <p className="text-xs font-mono text-gray-500 mb-6">
              Ten canonical sectors available.
            </p>

            <div className="space-y-4 text-xs text-gray-600 leading-relaxed pt-4 border-t border-gray-200">
              <p>
                Direct means source-defined. Contextual means a discovery
                association described by this wireframe, not a formal product
                mapping.
              </p>
              <p className="text-gray-500">
                Production mapping approvals and solution URLs were not
                supplied. This preview offers consultation and local industry
                navigation.
              </p>
            </div>
          </div>

          {/* Right Column: Heading, Subtitle, and Flush Image (Span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
              Choose a sector to see its operating context.
            </h3>

            <p className="text-gray-600 text-sm md:text-base mb-8 max-w-2xl">
              One direct specialist direction where defined, plus up to four
              contextual directions. No rankings or product-brand
              clusters.
            </p>

            {/* Flush Image Container */}
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
              <img
                src="/industry/20.png"
                alt="Team collaborating in a modern office evaluating industry sector context"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
