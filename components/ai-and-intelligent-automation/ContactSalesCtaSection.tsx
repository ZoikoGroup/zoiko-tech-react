"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

export default function ContactSalesCtaSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    company: "",
    objective: "",
    authority: "",
    stage: "",
    role: "",
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
      className="relative w-full bg-[#001315] py-20 lg:py-[88px] text-white overflow-hidden"
    >
      {/* Background with Dark Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/ai-and-intelligent-automation/contact-bg.png"
          alt="Contact background skyline"
          fill
          className="object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 19, 21, 0.95) 0%, rgba(0, 19, 21, 0.8) 55%, rgba(0, 19, 21, 0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & CTAs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="font-['Poppins',sans-serif] text-white text-[11px] font-semibold tracking-[0.16em] uppercase block mb-2 sm:mb-3">
              Get started
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.2] lg:leading-[1.17] tracking-[-0.03em] text-white mb-4 sm:mb-6">
              Build an AI operating
              <br className="hidden sm:inline" />
              {" "}model that can scale
              <br className="hidden sm:inline" />
              {" "}beyond experiments.
            </h2>
            <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#E2E8F0] mb-6 sm:mb-8 font-normal max-w-[560px]">
              Talk with Zoiko Tech about the workflows you want to improve, the intelligence and automation pattern that fits them, the systems and data involved, and the governance required to move from pilot to accountable operation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 lg:mb-0">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-semibold text-[15px] leading-5 transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#patterns"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] border border-white hover:bg-white/10 text-white font-['Poppins',sans-serif] font-semibold text-[15px] leading-5 transition-colors w-full sm:w-auto text-center"
              >
                <span>Explore AI Solutions</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Sales Form Card */}
          <motion.div
            id="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="lg:col-span-6 w-full"
          >
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-2xl text-[#0F172A] border border-slate-100">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#DBF2ED] rounded-full flex items-center justify-center mx-auto text-[#1F7A6C]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-bold text-[#0F172A]">
                    Thank you for reaching out
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[14px] text-[#64748B] max-w-[400px] mx-auto">
                    A Zoiko Tech enterprise AI specialist will review your requirements and follow up within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-bold text-[#0F172A]">
                      Contact Sales
                    </h3>
                    <p className="font-['Poppins',sans-serif] text-[13px] text-[#64748B] mt-0.5">
                      Solution: AI & Intelligent Automation
                    </p>
                  </div>

                  {/* 2-Column Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Work email*
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#247780] focus:ring-1 focus:ring-[#247780]"
                      />
                    </div>

                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Company*
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enterprise Inc."
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#247780] focus:ring-1 focus:ring-[#247780]"
                      />
                    </div>

                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Primary AI objective
                      </label>
                      <select
                        value={formData.objective}
                        onChange={(e) =>
                          setFormData({ ...formData, objective: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#247780] focus:ring-1 focus:ring-[#247780]"
                      >
                        <option value="">Select</option>
                        <option value="enterprise-search">Enterprise Search & Knowledge</option>
                        <option value="agentic-workflows">Agentic Workflow Automation</option>
                        <option value="domain-intelligence">Domain Intelligence</option>
                        <option value="intelligent-operations">Intelligent Operations</option>
                        <option value="ai-governance">AI Governance & Compliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Desired authority
                      </label>
                      <select
                        value={formData.authority}
                        onChange={(e) =>
                          setFormData({ ...formData, authority: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#247780] focus:ring-1 focus:ring-[#247780]"
                      >
                        <option value="">Select</option>
                        <option value="l1">Level 1: Assist</option>
                        <option value="l2">Level 2: Recommend</option>
                        <option value="l3">Level 3: Prepare</option>
                        <option value="l4">Level 4: Execute with approval</option>
                        <option value="l5">Level 5: Execute within bounds</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Deployment stage
                      </label>
                      <select
                        value={formData.stage}
                        onChange={(e) =>
                          setFormData({ ...formData, stage: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#247780] focus:ring-1 focus:ring-[#247780]"
                      >
                        <option value="">Select</option>
                        <option value="evaluating">Exploring / Evaluating</option>
                        <option value="pilot">Proof of Concept / Pilot</option>
                        <option value="active">Active Deployment</option>
                        <option value="scaling">Scaling Across Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                        Role / function
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chief Data Officer"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#247780] focus:ring-1 focus:ring-[#247780]"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block font-['Poppins',sans-serif] text-[12px] font-medium text-[#0F172A] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="The workflows you want to improve"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#247780] focus:ring-1 focus:ring-[#247780]"
                    />
                    <p className="font-['Poppins',sans-serif] text-[11px] text-[#64748B] mt-1">
                      Please don’t include secrets, model keys, confidential prompts, production or regulated data.
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
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
                        className="mt-0.5 w-4 h-4 rounded border-[#CBD5E1] text-[#247780] focus:ring-[#247780]"
                      />
                      <span className="font-['Poppins',sans-serif] text-[12px] text-[#475569]">
                        I acknowledge the{" "}
                        <a
                          href="/privacy-policy"
                          className="text-[#247780] underline hover:text-[#1F7A6C]"
                        >
                          Privacy Notice
                        </a>
                        .*
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.updatesOptIn}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            updatesOptIn: e.target.checked,
                          })
                        }
                        className="mt-0.5 w-4 h-4 rounded border-[#CBD5E1] text-[#247780] focus:ring-[#247780]"
                      />
                      <span className="font-['Poppins',sans-serif] text-[12px] text-[#475569]">
                        Send me occasional updates from Zoiko Tech (optional).
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-semibold text-[15px] transition-colors shadow-sm"
                    >
                      Contact Sales
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
