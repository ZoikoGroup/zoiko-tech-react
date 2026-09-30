"use client";

import { useState } from "react";

export default function OperateTheTelecomStackSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    companyOperator: "",
    roleFunction: "",
    operatorType: "Other / unsure",
    countryMarkets: "",
    primaryObjective: "OSS/BSS modernization",
    evaluationStage: "Exploring",
    currentEnvironment: "High-level categories only",
    message: "",
    privacyNotice: false,
    updates: false,
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
    // Handle form submission logic here
  };

  return (
    <section className="w-full min-h-screen bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Operate the telecom stack with clearer service, commercial and
            integration control.
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Talk with Zoiko Tech about your OSS/BSS estate, subscriber and
            service operations, communications infrastructure, monetization
            model, partner dependencies, and the right path to evaluate fit.
          </p>
        </div>

        {/* Form Container with #E1EFFE Background */}
        <div className="bg-[#E1EFFE] border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Work email, Company/operator, Role/function, Operator type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Work email
                </label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Company / operator
                </label>
                <input
                  type="text"
                  name="companyOperator"
                  value={formData.companyOperator}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Role / function (optional)
                </label>
                <input
                  type="text"
                  name="roleFunction"
                  value={formData.roleFunction}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Operator type
                </label>
                <select
                  name="operatorType"
                  value={formData.operatorType}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                >
                  <option value="Other / unsure">Other / unsure</option>
                  <option value="MNO">MNO</option>
                  <option value="MVNO">MVNO</option>
                  <option value="Fixed Line">Fixed Line</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>
            </div>

            {/* Row 2: Country / markets, Primary objective, Evaluation stage, Current environment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Country / markets
                </label>
                <input
                  type="text"
                  name="countryMarkets"
                  value={formData.countryMarkets}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Primary objective
                </label>
                <select
                  name="primaryObjective"
                  value={formData.primaryObjective}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                >
                  <option value="OSS/BSS modernization">
                    OSS/BSS modernization
                  </option>
                  <option value="Subscriber Operations">
                    Subscriber Operations
                  </option>
                  <option value="Monetization">Monetization</option>
                  <option value="Integration & APIs">Integration & APIs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Evaluation stage
                </label>
                <select
                  name="evaluationStage"
                  value={formData.evaluationStage}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                >
                  <option value="Exploring">Exploring</option>
                  <option value="Evaluating">Evaluating</option>
                  <option value="Ready to Pilot">Ready to Pilot</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Current environment (optional)
                </label>
                <input
                  type="text"
                  name="currentEnvironment"
                  value={formData.currentEnvironment}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Message (optional)
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800 resize-none"
              ></textarea>
            </div>

            {/* Disclaimer & Checkboxes */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-slate-600">
                Please don't submit subscriber personal data, call records,
                credentials, regulated telecom data or confidential network
                details.
              </p>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="privacyNotice"
                  id="privacyNotice"
                  checked={formData.privacyNotice}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-slate-300 text-teal-800 focus:ring-teal-800"
                />
                <label
                  htmlFor="privacyNotice"
                  className="text-xs text-slate-700"
                >
                  I acknowledge the Privacy Notice.
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="updates"
                  id="updates"
                  checked={formData.updates}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-slate-300 text-teal-800 focus:ring-teal-800"
                />
                <label htmlFor="updates" className="text-xs text-slate-700">
                  Send me optional Zoiko Tech updates.
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="submit"
                className="px-6 py-3 rounded-[14px] bg-teal-800 text-white hover:bg-teal-900 transition-colors text-sm font-medium shadow-md"
              >
                Contact Sales
              </button>
              <button
                type="button"
                className="px-6 py-3 rounded-[14px] bg-white border border-slate-300 text-teal-800 hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm"
              >
                Explore Telecom Platforms
              </button>
              <button
                type="button"
                className="text-sm font-medium text-teal-800 hover:underline flex items-center space-x-1"
              >
                <span>Explore ZoikoNex</span>
                <span>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
