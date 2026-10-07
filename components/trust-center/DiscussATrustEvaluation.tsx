"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function DiscussATrustEvaluation() {
  const [formData, setFormData] = useState({
    workEmail: "",
    organization: "",
    reviewArea: "",
    highLevelScope: "",
    acknowledge: false,
    updates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Context & Copy */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-[1.1]">
            Continue with a qualified enterprise question.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            Trust context first; commercial conversation second.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Keep the review scoped.
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              No approved live request provider or evidence access process was
              supplied. This local form demonstrates high-level evaluation
              context only.
            </p>
          </div>

          <div>
            <a
              href="#documentation"
              className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors group"
            >
              Documentation preview
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Trust Evaluation Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">
              Discuss a trust evaluation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Work email & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
                    placeholder=""
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
                    placeholder=""
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Row 2: Review area */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Review area
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all appearance-none"
                    value={formData.reviewArea}
                    onChange={(e) =>
                      setFormData({ ...formData, reviewArea: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option value="security">Security & Resilience</option>
                    <option value="privacy">Data Handling & Privacy</option>
                    <option value="ai">Responsible AI</option>
                    <option value="compliance">Controls & Assurance</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 3: High-level scope */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  High-level scope
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all resize-none"
                  value={formData.highLevelScope}
                  onChange={(e) =>
                    setFormData({ ...formData, highLevelScope: e.target.value })
                  }
                />
                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                  Do not submit credentials, secrets, customer data, regulated
                  records, vulnerability/exploit details or confidential
                  architecture.
                </p>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-teal-700 border-gray-300 rounded focus:ring-teal-500"
                    checked={formData.acknowledge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acknowledge: e.target.checked,
                      })
                    }
                  />
                  <span className="text-xs text-gray-600 leading-normal">
                    I acknowledge this local preview sends/stores no information
                    and does not request evidence access.
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-teal-700 border-gray-300 rounded focus:ring-teal-500"
                    checked={formData.updates}
                    onChange={(e) =>
                      setFormData({ ...formData, updates: e.target.checked })
                    }
                  />
                  <span className="text-xs text-gray-600 leading-normal">
                    Optional updates when an approved live service is
                    connected.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3.5 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Review inquiry</span>
                  <svg
                    className="w-4 h-4 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
