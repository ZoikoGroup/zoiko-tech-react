"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  }),
};

export default function ContactSalesCtaSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    company: "",
    primaryDomain: "",
    primaryChallenge: "",
    operatingModel: "",
    evaluationStage: "",
    message: "",
    privacyAccepted: false,
    updatesOptIn: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.company || !formData.privacyAccepted) {
      alert("Please fill in required fields and acknowledge the Privacy Notice.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact-sales"
      className="relative w-full bg-[#001315] py-14 sm:py-20 lg:py-[88px] text-white overflow-hidden"
    >
      {/* Background Architectural Photo with Dark Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/business-operations/cta-bg.png"
          alt="CTA background architecture"
          fill
          className="object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(262deg, rgba(6, 85, 72, 0.5) 78%, rgba(0, 38, 42, 0.5) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 19, 21, 0.94) 0%, rgba(0, 19, 21, 0.76) 55%, rgba(0, 19, 21, 0.5) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Heading, Copy & Action Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[580px]"
          >
            <span className="font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-white uppercase mb-2">
              GET STARTED
            </span>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[26px] sm:text-[36px] lg:text-[44px] font-bold text-white leading-tight mb-4 sm:mb-5">
              Create a clearer operating model across the functions that run the
              business.
            </h2>

            <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[16px] text-[#E2E8F0] font-normal leading-relaxed mb-6 sm:mb-8 max-w-[540px]">
              Talk with Zoiko Tech about the recurring operations you need to
              coordinate, the systems and teams involved, the handoffs that
              create friction, and the specialist solution path that best fits
              your environment.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1f6870] text-white font-['Poppins',sans-serif] font-semibold text-[14px] sm:text-[15px] transition-colors shadow-sm text-center"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/solution-zoiko-hr-payroll-revenue-operations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] border border-white hover:bg-white/10 text-white font-['Poppins',sans-serif] font-semibold text-[14px] sm:text-[15px] transition-colors text-center"
              >
                <span>Explore Operations Solutions</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Contact Sales Form Card */}
          <motion.div
            id="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="w-full lg:max-w-[560px]"
          >
            <div className="bg-white rounded-[14px] sm:rounded-[16px] p-5 sm:p-8 text-[#0F172A] shadow-2xl">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#DBF2ED] flex items-center justify-center mb-4 text-[#195B62]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-bold text-[#0F172A] mb-2">
                    Request Received
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[14px] text-[#334155] max-w-[380px] mb-6">
                    Thank you for reaching out. A Zoiko Tech business operations
                    specialist will review your operational requirements and
                    follow up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        workEmail: "",
                        company: "",
                        primaryDomain: "",
                        primaryChallenge: "",
                        operatingModel: "",
                        evaluationStage: "",
                        message: "",
                        privacyAccepted: false,
                        updatesOptIn: false,
                      });
                    }}
                    className="px-5 py-2.5 rounded-[6px] bg-[#247780] text-white font-semibold text-[13px]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Form Header */}
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] sm:text-[22px] font-bold text-[#0F172A]">
                      Contact Sales
                    </h3>
                    <p className="font-['Poppins',sans-serif] text-[12px] text-[#64748B]">
                      Solution: Business Operations
                    </p>
                  </div>

                  {/* 2-Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Work email */}
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Work email*
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-3 py-2 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] placeholder-[#757575] focus:outline-hidden focus:border-[#247780]"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Company*
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Enterprise Inc."
                        className="w-full px-3 py-2 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] placeholder-[#757575] focus:outline-hidden focus:border-[#247780]"
                      />
                    </div>

                    {/* Primary domain */}
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Primary domain
                      </label>
                      <select
                        value={formData.primaryDomain}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            primaryDomain: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] focus:outline-hidden focus:border-[#247780]"
                      >
                        <option value="">Select</option>
                        <option value="people">People Operations</option>
                        <option value="payroll">Payroll & Revenue</option>
                        <option value="workforce">Workforce Assurance</option>
                        <option value="comms">Communications</option>
                        <option value="marketing">Marketing Operations</option>
                        <option value="compliance">Compliance Operations</option>
                      </select>
                    </div>

                    {/* Primary challenge */}
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Primary challenge
                      </label>
                      <select
                        value={formData.primaryChallenge}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            primaryChallenge: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] focus:outline-hidden focus:border-[#247780]"
                      >
                        <option value="">Select</option>
                        <option value="fragmentation">Cross-system fragmentation</option>
                        <option value="handoffs">Handoff friction & delays</option>
                        <option value="exceptions">Exceptions surfacing too late</option>
                        <option value="evidence">Evidence & audit fragmentation</option>
                      </select>
                    </div>

                    {/* Operating model */}
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Operating model
                      </label>
                      <select
                        value={formData.operatingModel}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            operatingModel: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] focus:outline-hidden focus:border-[#247780]"
                      >
                        <option value="">Select</option>
                        <option value="centralized">Centralized shared services</option>
                        <option value="distributed">Distributed functional teams</option>
                        <option value="hybrid">Hybrid operating model</option>
                      </select>
                    </div>

                    {/* Evaluation stage */}
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
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
                        className="w-full px-3 py-2 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] focus:outline-hidden focus:border-[#247780]"
                      >
                        <option value="">Select</option>
                        <option value="exploring">Initial exploratory review</option>
                        <option value="evaluating">Active solution evaluation</option>
                        <option value="rfp">RFP / scheduled rollout</option>
                      </select>
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="The recurring operations you want to coordinate"
                      className="w-full px-3 py-2 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] placeholder-[#757575] focus:outline-hidden focus:border-[#247780] resize-none"
                    />
                    <p className="font-['Poppins',sans-serif] text-[11px] text-[#64748B] mt-1 leading-normal">
                      Please don’t include employee data, payroll records,
                      invoices, financial data, confidential communications,
                      credentials or regulated evidence.
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="flex flex-col gap-2 pt-1">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.privacyAccepted}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            privacyAccepted: e.target.checked,
                          })
                        }
                        className="mt-0.5 rounded border-[#CBD5E1] text-[#247780] focus:ring-[#247780]"
                      />
                      <span className="font-['Poppins',sans-serif] text-[11px] text-[#334155] leading-snug">
                        I acknowledge the{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-[#247780] underline font-medium hover:text-[#195B62]"
                        >
                          Privacy Notice
                        </Link>
                        .*
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.updatesOptIn}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            updatesOptIn: e.target.checked,
                          })
                        }
                        className="mt-0.5 rounded border-[#CBD5E1] text-[#247780] focus:ring-[#247780]"
                      />
                      <span className="font-['Poppins',sans-serif] text-[11px] text-[#334155] leading-snug">
                        Send me occasional updates from Zoiko Tech (optional).
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1f6870] text-white font-['Poppins',sans-serif] font-semibold text-[15px] transition-colors shadow-sm cursor-pointer text-center"
                  >
                    Contact Sales
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
