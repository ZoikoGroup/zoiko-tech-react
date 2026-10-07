"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const GetStartedContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    workEmail: "",
    organization: "",
    useCaseDomain: "",
    aiAuthority: "",
    riskImpact: "",
    dataSource: "",
    modelProvider: "",
    evaluationStage: "",
    deploymentStage: "",
    countryRegion: "United States",
    privacyConsent: false,
    updatesConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#001315] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/ai-safety-and-governance/getstarted-contact-bg.png"
          alt="Contact Section Background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001315]/95 via-[#001315]/85 to-[#001315]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Heading, Context, and CTAs */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-white font-poppins uppercase">
              Get started
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white font-plus-jakarta leading-tight">
              Put AI into operation with<br />governance that can be<br />inspected, reviewed and<br />changed.
            </h2>
            <p className="text-[#E2E8F0] text-xs sm:text-sm md:text-base font-poppins leading-relaxed mt-1 sm:mt-2">
              Talk with Zoiko Tech about your use case, domain, data and source boundaries, system, model
              and provider scope, human and agentic authority, risk classification, evaluation, monitoring
              and evidence requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="#contact-form"
              className="px-6 py-3.5 rounded-lg bg-[#247780] hover:bg-[#195B62] text-white text-sm font-semibold transition-colors shadow-md inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <span>Contact Sales</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <Link
              href="/ai"
              className="px-6 py-3.5 rounded-lg border border-white hover:bg-white/10 text-white text-sm font-semibold transition-colors w-full sm:w-auto text-center"
            >
              Explore Artificial Intelligence
            </Link>
          </div>

          <div className="pt-1">
            <Link
              href="/trust-center"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DDCAD] hover:underline transition-colors group"
            >
              <span>Explore Responsible AI / Trust Center</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column: Contact Sales Form Card */}
        <div id="contact-form" className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl w-full">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#DBF2ED] text-[#195B62] flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] font-plus-jakarta">
                Thank you for contacting us
              </h3>
              <p className="text-sm text-[#475569] font-poppins max-w-md">
                An AI Safety and Governance specialist from Zoiko Tech will review your information
                and follow up within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold text-[#0F172A] font-plus-jakarta">
                  Contact Sales
                </h3>
                <p className="text-xs text-[#64748B] font-poppins">
                  Technology: AI Safety and Governance
                </p>
              </div>

              {/* 10 Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Work Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Work email*
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#247780] transition-colors"
                  />
                </div>

                {/* 2. Organization */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Organization*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Enterprise Inc."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#247780] transition-colors"
                  />
                </div>

                {/* 3. Use case / domain */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Use case / domain
                  </label>
                  <select
                    value={formData.useCaseDomain}
                    onChange={(e) => setFormData({ ...formData, useCaseDomain: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none focus:border-[#247780] bg-white transition-colors"
                  >
                    <option value="">Select domain / use case...</option>
                    <option value="Finance & Accounts Payable">Finance & Accounts Payable</option>
                    <option value="Customer Support & Operations">Customer Support & Operations</option>
                    <option value="Document Intelligence">Document Intelligence</option>
                    <option value="Decision Support & Analytics">Decision Support & Analytics</option>
                    <option value="Other Enterprise Use Case">Other Enterprise Use Case</option>
                  </select>
                </div>

                {/* 4. AI Authority */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    AI authority
                  </label>
                  <select
                    value={formData.aiAuthority}
                    onChange={(e) => setFormData({ ...formData, aiAuthority: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none focus:border-[#247780] bg-white transition-colors"
                  >
                    <option value="">Select authority tier...</option>
                    <option value="Tier 1: Read-only assist">Tier 1: Read-only assist</option>
                    <option value="Tier 2: Draft / proposal">Tier 2: Draft / proposal</option>
                    <option value="Tier 3: Recommend with human confirmation">Tier 3: Recommend with human confirmation</option>
                    <option value="Tier 4: Bounded autonomous action">Tier 4: Bounded autonomous action</option>
                  </select>
                </div>

                {/* 5. Risk / impact */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Risk / impact
                  </label>
                  <select
                    value={formData.riskImpact}
                    onChange={(e) => setFormData({ ...formData, riskImpact: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none focus:border-[#247780] bg-white transition-colors"
                  >
                    <option value="">Select risk classification...</option>
                    <option value="Low impact">Low impact</option>
                    <option value="Moderate impact">Moderate impact</option>
                    <option value="High-impact (regulated / legal)">High-impact (regulated / legal)</option>
                    <option value="Restricted boundary">Restricted boundary</option>
                  </select>
                </div>

                {/* 6. Data / source */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Data / source
                  </label>
                  <select
                    value={formData.dataSource}
                    onChange={(e) => setFormData({ ...formData, dataSource: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none focus:border-[#247780] bg-white transition-colors"
                  >
                    <option value="">Select data source...</option>
                    <option value="Internal documents & records">Internal documents & records</option>
                    <option value="Enterprise ERP / CRM data">Enterprise ERP / CRM data</option>
                    <option value="Synthetic benchmark data">Synthetic benchmark data</option>
                    <option value="Public knowledge only">Public knowledge only</option>
                  </select>
                </div>

                {/* 7. Model / provider known? */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Model / provider known?
                  </label>
                  <select
                    value={formData.modelProvider}
                    onChange={(e) => setFormData({ ...formData, modelProvider: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none focus:border-[#247780] bg-white transition-colors"
                  >
                    <option value="">Select provider status...</option>
                    <option value="Self-hosted / private cluster">Self-hosted / private cluster</option>
                    <option value="Commercial API provider">Commercial API provider</option>
                    <option value="Hybrid deployment">Hybrid deployment</option>
                    <option value="Undecided / in review">Undecided / in review</option>
                  </select>
                </div>

                {/* 8. Evaluation stage */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Evaluation stage
                  </label>
                  <select
                    value={formData.evaluationStage}
                    onChange={(e) => setFormData({ ...formData, evaluationStage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none focus:border-[#247780] bg-white transition-colors"
                  >
                    <option value="">Select evaluation stage...</option>
                    <option value="Pre-evaluation planning">Pre-evaluation planning</option>
                    <option value="Active benchmark testing">Active benchmark testing</option>
                    <option value="Validation proof ready">Validation proof ready</option>
                    <option value="Continuous monitoring">Continuous monitoring</option>
                  </select>
                </div>

                {/* 9. Deployment stage */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Deployment stage
                  </label>
                  <select
                    value={formData.deploymentStage}
                    onChange={(e) => setFormData({ ...formData, deploymentStage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none focus:border-[#247780] bg-white transition-colors"
                  >
                    <option value="">Select deployment stage...</option>
                    <option value="Exploratory / concept">Exploratory / concept</option>
                    <option value="Controlled pilot">Controlled pilot</option>
                    <option value="Production rollout">Production rollout</option>
                    <option value="Scaling across enterprise">Scaling across enterprise</option>
                  </select>
                </div>

                {/* 10. Country / Region */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#0F172A] font-poppins">
                    Country / region
                  </label>
                  <input
                    type="text"
                    value={formData.countryRegion}
                    onChange={(e) => setFormData({ ...formData, countryRegion: e.target.value })}
                    placeholder="United States"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#247780] transition-colors"
                  />
                </div>
              </div>

              {/* Disclaimer Note */}
              <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-3 text-xs text-[#92400E] font-poppins leading-relaxed">
                Please don’t include private prompts, credentials, model keys, customer records,
                regulated data, incident evidence or confidential evaluation results.
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-2.5 pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#334155] font-poppins">
                  <input
                    type="checkbox"
                    required
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[#247780] focus:ring-[#247780]"
                  />
                  <span>
                    I acknowledge the{" "}
                    <Link href="/trust-center" className="text-[#247780] underline font-medium">
                      Privacy Notice
                    </Link>
                    .*
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#334155] font-poppins">
                  <input
                    type="checkbox"
                    checked={formData.updatesConsent}
                    onChange={(e) => setFormData({ ...formData, updatesConsent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[#247780] focus:ring-[#247780]"
                  />
                  <span>Send me occasional updates from Zoiko Tech (optional).</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-[#247780] hover:bg-[#195B62] text-white font-semibold text-sm transition-colors shadow-md mt-2"
              >
                Contact Sales
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
