"use client"
import React, { useState } from "react";

export default function StartWithTheProofSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    organization: "",
    industry: "Choose one",
    evaluationStage: "Choose one",
    operatingNeed: "",
    acknowledge: false,
    updates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-10 text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
            Start with the proof your evaluation <br />
            needs.
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl">
            Discuss your operating context, the deployment questions that matter
            and the evidence needed to assess relevance.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#FFFFFF2E] border border-[#DCE8E8] rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative">
          {/* Local Preview Badge */}
          <div className="mb-6">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-teal-300 uppercase px-3 py-1 rounded-md">
              LOCAL PREVIEW
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#6FD0F6] mt-3 tracking-tight">
              Discuss relevant evidence
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Work Email & Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-[#6FD0F6] mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, workEmail: e.target.value })
                  }
                  className="w-full bg-[#BEE6F66B] border border-[#CCDEDF] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-inner"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#6FD0F6] mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="w-full bg-[#BEE6F66B] border border-[#CCDEDF] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-inner"
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 2: Industry & Evaluation Stage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-[#6FD0F6] mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full bg-[#BEE6F66B] border border-[#CCDEDF] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-inner"
                >
                  <option value="Choose one">Choose one</option>
                  <option value="Media & Streaming">Media & Streaming</option>
                  <option value="Enterprise SaaS">Enterprise SaaS</option>
                  <option value="Financial Services">Financial Services</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#6FD0F6] mb-2">
                  Evaluation stage
                </label>
                <select
                  value={formData.evaluationStage}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      evaluationStage: e.target.value,
                    })
                  }
                  className="w-full bg-[#BEE6F66B] border border-[#CCDEDF] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-inner"
                >
                  <option value="Choose one">Choose one</option>
                  <option value="Initial Discovery">Initial Discovery</option>
                  <option value="Technical Validation">
                    Technical Validation
                  </option>
                  <option value="Procurement & Review">
                    Procurement & Review
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Operating need or evidence question */}
            <div>
              <label className="block text-xs font-mono text-[#6FD0F6] mb-2">
                Operating need or evidence question
              </label>
              <textarea
                rows={4}
                value={formData.operatingNeed}
                onChange={(e) =>
                  setFormData({ ...formData, operatingNeed: e.target.value })
                }
                className="w-full bg-[#BEE6F66B] border border-[#CCDEDF] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-inner resize-none"
                placeholder=""
              />
            </div>

            {/* Disclaimer Text */}
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Use high-level context. Do not submit confidential evidence,
              customer identities, source documents, personal data or
              credentials.
            </p>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acknowledge}
                  onChange={(e) =>
                    setFormData({ ...formData, acknowledge: e.target.checked })
                  }
                  className="mt-0.5 rounded bg-[#0A2528] border-teal-800 text-teal-600 focus:ring-0"
                />
                <span className="text-xs text-[#6FD0F6]">
                  I acknowledge that this preview does not send or store
                  information.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.updates}
                  onChange={(e) =>
                    setFormData({ ...formData, updates: e.target.checked })
                  }
                  className="mt-0.5 rounded bg-[#0A2528] border-teal-800 text-teal-600 focus:ring-0"
                />
                <span className="text-xs text-[#6FD0F6]">
                  Optional product updates when a live service is connected.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#247780] hover:bg-[#1d636b] text-white font-medium text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
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
