"use client";
import React, { useState } from "react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    workEmail: "",
    organization: "",
    organizationType: "Choose one",
    serviceLine: "Choose one",
    primaryWorkflow: "Choose one",
    countryJurisdiction: "Choose one",
    evaluationStage: "Choose one",
    addContext: "",
    ack1: false,
    ack2: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Local preview handler
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Build professional-service operations <br />
            that make source, review and <br />
            accountability visible.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            Talk with Zoiko Tech about the workflow, systems, confidentiality
            and professional-authority boundaries involved.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#FFFFFF33] rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-2xl">
          <div className="mb-8">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-teal-400 uppercase block mb-1">
              Contact Sales / Local Preview
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Discuss your operating architecture
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Industry: Professional Services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Work email & Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  className="w-full bg-[#9FDCD7] border border-[#CCDEDF] rounded-[5px] px-4 py-3 text-black text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition-colors"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full bg-[#9FDCD7] border border-[#CCDEDF] rounded-[5px] px-4 py-3 text-black text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition-colors"
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 2: Organization type & Service line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Organization type
                </label>
                <select className="w-full bg-[#9FDCD7] border border-[#CCDEDF] rounded-[5px] px-4 py-3 text-black text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition-colors">
                  <option>Choose one</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Service line
                </label>
                <select className="w-full bg-[#9FDCD7] border border-[#CCDEDF] rounded-[5px] px-4 py-3 text-black text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition-colors">
                  <option>Choose one</option>
                </select>
              </div>
            </div>

            {/* Row 3: Primary workflow & Country / jurisdiction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Primary workflow
                </label>
                <select className="w-full bg-[#9FDCD7] border border-[#CCDEDF] rounded-[5px] px-4 py-3 text-black text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition-colors">
                  <option>Choose one</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Country / jurisdiction
                </label>
                <select className="w-full bg-[#9FDCD7] border border-[#CCDEDF] rounded-[5px] px-4 py-3 text-black text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition-colors">
                  <option>Choose one</option>
                </select>
              </div>
            </div>

            {/* Row 4: Evaluation stage */}
            <div className="max-w-md">
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Evaluation stage
              </label>
              <select className="w-full bg-[#9FDCD7] border border-[#CCDEDF] rounded-[5px] px-4 py-3 text-black text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition-colors">
                <option>Choose one</option>
              </select>
            </div>

            {/* Row 5: Add context */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Add context (optional)
              </label>
              <textarea
                rows={3}
                className="w-full bg-[#9FDCD7] border border-[#CCDEDF] rounded-[5px] px-4 py-3 text-black text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
                placeholder=""
              ></textarea>
            </div>

            {/* Disclaimer Text */}
            <p className="text-[10px] sm:text-xs text-[#8ADCE0] max-w-xl leading-relaxed">
              Do not submit confidential client content, privileged information,
              tax records, financial statements, payroll or employee details,
              identity documents or credentials.
            </p>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-teal-800 bg-[#0E2A2E] text-teal-500 focus:ring-0"
                />
                <span className="text-[11px] sm:text-xs text-gray-300">
                  I acknowledge that this local preview does not send or store
                  information.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-teal-800 bg-[#0E2A2E] text-teal-500 focus:ring-0"
                />
                <span className="text-[11px] sm:text-xs text-gray-300">
                  Optional product updates when a live service is connected.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-teal-500/20"
              >
                Request consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
