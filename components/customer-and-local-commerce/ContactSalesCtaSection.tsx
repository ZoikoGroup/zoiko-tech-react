"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

export default function ContactSalesCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    role: "",
    country: "",
    primaryObjective: "",
    operatingModel: "",
    currentChallenge: "",
    evaluationStage: "",
    message: "",
    privacyNotice: false,
    updates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyNotice) {
      alert("Please acknowledge the Privacy Notice to continue.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact-sales"
      className="relative w-full overflow-hidden text-white bg-[#001315] py-16 sm:py-20 lg:py-[96px]"
    >
      {/* Background Graphic & Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/customer-and-local-commerce/cta-bg.png"
          alt="CTA background"
          fill
          className="object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(262deg, rgba(6, 85, 72, 0.8) 78%, rgba(0, 38, 42, 0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-14">
          {/* Left Column: Heading, Subtext & Action Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[540px] shrink-0"
          >
            <span className="font-['Poppins',sans-serif] text-white text-[11px] font-semibold tracking-[0.14em] uppercase mb-3">
              Get started
            </span>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[34px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.14] tracking-[-0.03em] mb-6">
              Build customer<br className="hidden sm:inline" /> experiences that stay<br className="hidden sm:inline" /> connected from<br className="hidden sm:inline" /> communication to<br className="hidden sm:inline" /> outcome.
            </h2>

            <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[17px] text-[#E2E8F0] leading-[28px] mb-8 font-normal">
              Talk with Zoiko Tech about the customer journeys you need to improve, the markets and channels involved, the commerce or service systems that complete the action, and the communications, marketing intelligence or orchestration layer that fits your environment.
            </p>

            {/* Two Side-by-Side CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact-sales"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-semibold text-[14px] transition-colors shadow-sm text-center"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#intent-router"
                className="inline-flex items-center justify-center px-5 py-3 rounded-[6px] border border-white/60 hover:border-white text-white font-['Poppins',sans-serif] font-semibold text-[14px] transition-colors text-center"
              >
                <span>Explore Customer & Commerce Solutions</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Sales Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:flex-1 max-w-[620px] bg-white rounded-[14px] p-5 sm:p-8 text-[#0F172A] shadow-xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="w-14 h-14 text-[#247780] mb-4" />
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-bold text-[#0F172A] mb-2">
                  Inquiry received
                </h3>
                <p className="font-['Poppins',sans-serif] text-[14px] text-[#64748B] max-w-sm">
                  Our customer and commerce architecture team will review your objectives and connect promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#0F172A] leading-tight">
                    Contact Sales
                  </h3>
                  <span className="font-['Poppins',sans-serif] text-[13px] text-[#64748B]">
                    Solution: Customer & Local Commerce
                  </span>
                </div>

                {/* 2-Column Primary Text Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                      Work email*
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-10 px-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                      Company*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enterprise Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-10 px-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                      Role / function
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Head of Customer Experience"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full h-10 px-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                      Country / region
                    </label>
                    <input
                      type="text"
                      placeholder="United States"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full h-10 px-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2-Column Dropdowns with 'Select' initial state */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                      Primary objective
                    </label>
                    <select
                      value={formData.primaryObjective}
                      onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                      className={`w-full h-10 px-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors ${
                        formData.primaryObjective ? "text-[#0F172A]" : "text-[#64748B]"
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="Improve customer communications">Improve customer communications</option>
                      <option value="Strengthen local presence">Strengthen local presence</option>
                      <option value="Marketing intelligence & ops">Marketing intelligence & ops</option>
                      <option value="Connect commerce journeys">Connect commerce journeys</option>
                      <option value="Life orchestration">Life orchestration</option>
                      <option value="Integrate experience systems">Integrate experience systems</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                      Operating model
                    </label>
                    <select
                      value={formData.operatingModel}
                      onChange={(e) => setFormData({ ...formData, operatingModel: e.target.value })}
                      className={`w-full h-10 px-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors ${
                        formData.operatingModel ? "text-[#0F172A]" : "text-[#64748B]"
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="Single market / region">Single market / region</option>
                      <option value="Multi-region">Multi-region</option>
                      <option value="Global enterprise">Global enterprise</option>
                      <option value="Partner & operator network">Partner & operator network</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                      Current challenge
                    </label>
                    <select
                      value={formData.currentChallenge}
                      onChange={(e) => setFormData({ ...formData, currentChallenge: e.target.value })}
                      className={`w-full h-10 px-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors ${
                        formData.currentChallenge ? "text-[#0F172A]" : "text-[#64748B]"
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="Disconnected channel silos">Disconnected channel silos</option>
                      <option value="Unclear local reachability">Unclear local reachability</option>
                      <option value="Governing marketing workflows">Governing marketing workflows</option>
                      <option value="Handoffs to commerce systems">Handoffs to commerce systems</option>
                      <option value="Complex multi-domain experiences">Complex multi-domain experiences</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                      Evaluation stage
                    </label>
                    <select
                      value={formData.evaluationStage}
                      onChange={(e) => setFormData({ ...formData, evaluationStage: e.target.value })}
                      className={`w-full h-10 px-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors ${
                        formData.evaluationStage ? "text-[#0F172A]" : "text-[#64748B]"
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="Initial exploration">Initial exploration</option>
                      <option value="Defining architecture">Defining architecture</option>
                      <option value="Active RFP / vendor review">Active RFP / vendor review</option>
                      <option value="Pilot / integration validation">Pilot / integration validation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-['Poppins',sans-serif] text-[12px] font-semibold text-[#0F172A] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the customer journeys you want to improve"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-[6px] border border-[#CBD5E1] bg-[#F8FAFC] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#247780] focus:bg-white focus:outline-none transition-colors resize-none"
                  />
                  <p className="font-['Poppins',sans-serif] text-[11.5px] text-[#64748B] mt-1.5 leading-snug">
                    Please don’t include customer personal data, payment data, call recordings, health or financial data, credentials or confidential commerce records.
                  </p>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-col gap-2.5 pt-1 text-[13px]">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.privacyNotice}
                      onChange={(e) => setFormData({ ...formData, privacyNotice: e.target.checked })}
                      className="mt-0.5 rounded-[4px] border-[#CBD5E1] text-[#247780] focus:ring-[#247780] w-4 h-4"
                    />
                    <span className="font-['Poppins',sans-serif] text-[#334155] text-[12.5px] leading-snug">
                      I acknowledge the{" "}
                      <a href="/privacy-policy" className="text-[#247780] underline hover:text-[#0F172A]">
                        Privacy Notice
                      </a>
                      .*
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.updates}
                      onChange={(e) => setFormData({ ...formData, updates: e.target.checked })}
                      className="mt-0.5 rounded-[4px] border-[#CBD5E1] text-[#247780] focus:ring-[#247780] w-4 h-4"
                    />
                    <span className="font-['Poppins',sans-serif] text-[#334155] text-[12.5px] leading-snug">
                      Send me occasional updates from Zoiko Tech (optional).
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-bold text-[14px] transition-colors shadow-sm"
                  >
                    Contact Sales
                  </button>
                  <p className="font-['Poppins',sans-serif] text-[11.5px] text-[#64748B] mt-2.5 leading-relaxed">
                    Selecting a country routes your inquiry; it does not confirm local communications availability.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
