"use client"
import React, { useState } from "react";

export default function OneSectorOneOperatingProblemSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    organization: "",
    industry: "Choose one",
    outcomeDirection: "Not sure / choose a direction",
    countryRegion: "",
    evaluationStage: "Choose one",
    currentSystemsMessage: "",
    acknowledge: false,
    productUpdates: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-Column Layout: Left Text & CTA vs Right Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Directory Link (Span 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              One sector. <br />
              One operating <br />
              problem. <br />
              A bounded starting <br />
              point.
            </h2>
            <div>
              <a
                href="#directory"
                className="text-sm font-semibold text-[#247780] hover:text-teal-800 transition-colors inline-flex items-center gap-1 group"
              >
                Explore the industry directory
                <span className="transform transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Workflow Discussion Form Card (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F5FCFF] border border-[#DCE8E8] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">
                Discuss your industry workflow
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Work email & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Work email
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-teal-700 transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-teal-700 transition-colors"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Row 2: Industry & Outcome / solution direction */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-teal-700 transition-colors"
                    >
                      <option>Choose one</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Outcome / solution direction
                    </label>
                    <select
                      name="outcomeDirection"
                      value={formData.outcomeDirection}
                      onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-teal-700 transition-colors"
                    >
                      <option>Not sure / choose a direction</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Country / region & Evaluation stage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Country / region
                    </label>
                    <input
                      type="text"
                      name="countryRegion"
                      value={formData.countryRegion}
                      onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-teal-700 transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Evaluation stage
                    </label>
                    <select
                      name="evaluationStage"
                      value={formData.evaluationStage}
                      onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-teal-700 transition-colors"
                    >
                      <option>Choose one</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Current systems / message */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Current systems / message (optional)
                  </label>
                  <textarea
                    name="currentSystemsMessage"
                    rows={3}
                    value={formData.currentSystemsMessage}
                    onChange={handleChange}
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-teal-700 transition-colors resize-none"
                  />
                </div>

                {/* Notice text */}
                <p className="text-[11px] text-gray-500 leading-normal">
                  High-level context only. Do not submit personal data,
                  regulated records, credentials, production secrets or
                  confidential evidence.
                </p>

                {/* Checkboxes */}
                <div className="space-y-2 pt-1">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acknowledge"
                      checked={formData.acknowledge}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-gray-300 text-teal-800 focus:ring-teal-700"
                    />
                    <span className="text-xs text-gray-600">
                      I acknowledge this preview does not send or store
                      information.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="productUpdates"
                      checked={formData.productUpdates}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-gray-300 text-teal-800 focus:ring-teal-700"
                    />
                    <span className="text-xs text-gray-600">
                      Optional product updates when a live service is connected.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#247780] hover:bg-[#1d636b] text-white font-medium text-sm py-3 rounded-xl transition-colors shadow-md"
                  >
                    Request consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
