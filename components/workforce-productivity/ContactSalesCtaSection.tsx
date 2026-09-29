"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

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
    email: "",
    company: "",
    role: "",
    country: "",
    objective: "Time visibility",
    model: "Mixed",
    stage: "Exploring",
    message: "",
    ackPrivacy: false,
    sendUpdates: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-sales" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10 max-w-[850px]"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.2] text-[#0A1416] mb-3">
            Create clearer workforce operations without turning visibility into
            surveillance.
          </h2>
          <p className="text-[16px] leading-[25.6px] text-[#4D6468]">
            Talk with Zoiko Tech about your workforce workflows, time and people
            systems, coordination gaps, policy requirements, and the right path to
            evaluate privacy-respecting operational context.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full rounded-[16px] bg-[#E1EFFE] border border-[#B2B4B6] p-6 sm:p-8 lg:p-10 shadow-lg"
        >
          {/* Form Header */}
          <div className="mb-8">
            <h3 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] leading-tight mb-2 font-poppins">
              Contact Sales
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#64748B] font-poppins">
              Tell us a bit about your organization and we'll connect you with the
              right team.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white p-8 rounded-[12px] border border-[#CBD5E1] text-center py-12">
              <div className="w-14 h-14 bg-[#20656C]/10 text-[#20656C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-[22px] font-bold text-[#0F172A] mb-2 font-poppins">
                Thank you for reaching out
              </h4>
              <p className="text-[15px] text-[#64748B] max-w-md mx-auto font-poppins">
                Our workforce operations team has received your message and will
                get in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Row 1: Work email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#0F172A] font-poppins">
                    Work email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@company.com"
                    className="w-full h-[48px] px-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0F172A] placeholder-[#94A3B8] font-poppins text-[14px] focus:outline-none focus:border-[#20656C] focus:ring-1 focus:ring-[#20656C]"
                  />
                </div>

                {/* Row 1: Company */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#0F172A] font-poppins">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Company name"
                    className="w-full h-[48px] px-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0F172A] placeholder-[#94A3B8] font-poppins text-[14px] focus:outline-none focus:border-[#20656C] focus:ring-1 focus:ring-[#20656C]"
                  />
                </div>

                {/* Row 2: Role / function */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#0F172A] font-poppins">
                    Role / function (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    placeholder="e.g. HR Manager"
                    className="w-full h-[48px] px-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0F172A] placeholder-[#94A3B8] font-poppins text-[14px] focus:outline-none focus:border-[#20656C] focus:ring-1 focus:ring-[#20656C]"
                  />
                </div>

                {/* Row 2: Country / region */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#0F172A] font-poppins">
                    Country / region
                  </label>
                  <div className="relative">
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full h-[48px] px-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0F172A] font-poppins text-[14px] appearance-none pr-10 focus:outline-none focus:border-[#20656C] focus:ring-1 focus:ring-[#20656C]"
                    >
                      <option value="">Select country</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="India">India</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                  </div>
                </div>

                {/* Row 3: Primary workforce objective */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#0F172A] font-poppins">
                    Primary workforce objective
                  </label>
                  <div className="relative">
                    <select
                      value={formData.objective}
                      onChange={(e) =>
                        setFormData({ ...formData, objective: e.target.value })
                      }
                      className="w-full h-[48px] px-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0F172A] font-poppins text-[14px] appearance-none pr-10 focus:outline-none focus:border-[#20656C] focus:ring-1 focus:ring-[#20656C]"
                    >
                      <option value="Time visibility">Time visibility</option>
                      <option value="Team coordination">Team coordination</option>
                      <option value="Exception reduction">
                        Exception reduction
                      </option>
                      <option value="HR operations alignment">
                        HR operations alignment
                      </option>
                      <option value="Accountability & governance">
                        Accountability &amp; governance
                      </option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                  </div>
                </div>

                {/* Row 3: Organization model */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#0F172A] font-poppins">
                    Organization model (optional)
                  </label>
                  <div className="relative">
                    <select
                      value={formData.model}
                      onChange={(e) =>
                        setFormData({ ...formData, model: e.target.value })
                      }
                      className="w-full h-[48px] px-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0F172A] font-poppins text-[14px] appearance-none pr-10 focus:outline-none focus:border-[#20656C] focus:ring-1 focus:ring-[#20656C]"
                    >
                      <option value="Mixed">Mixed</option>
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                      <option value="Shift-based">Shift-based</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Evaluation stage */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#0F172A] font-poppins">
                    Evaluation stage
                  </label>
                  <div className="relative">
                    <select
                      value={formData.stage}
                      onChange={(e) =>
                        setFormData({ ...formData, stage: e.target.value })
                      }
                      className="w-full h-[48px] px-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0F172A] font-poppins text-[14px] appearance-none pr-10 focus:outline-none focus:border-[#20656C] focus:ring-1 focus:ring-[#20656C]"
                    >
                      <option value="Exploring">Exploring</option>
                      <option value="Active RFP">Active RFP</option>
                      <option value="Pilot planning">Pilot planning</option>
                      <option value="Budget approved">Budget approved</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2 mt-1">
                <label className="text-[14px] font-semibold text-[#0F172A] font-poppins">
                  Message (optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="How can we help you?"
                  className="w-full p-4 rounded-[10px] bg-white border border-[#CBD5E1] text-[#0F172A] placeholder-[#94A3B8] font-poppins text-[14px] focus:outline-none focus:border-[#20656C] focus:ring-1 focus:ring-[#20656C]"
                />
                <p className="text-[12px] text-[#64748B] font-poppins leading-[18px]">
                  Please don’t submit employee personal data, medical data,
                  credentials or confidential workforce records.
                </p>
              </div>

              {/* Consent Checkboxes */}
              <div className="flex flex-col gap-3 pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.ackPrivacy}
                    onChange={(e) =>
                      setFormData({ ...formData, ackPrivacy: e.target.checked })
                    }
                    className="w-5 h-5 rounded-[4px] border-[#CBD5E1] text-[#20656C] focus:ring-[#20656C]"
                  />
                  <span className="text-[14px] text-[#0F172A] font-poppins">
                    I acknowledge the Privacy Notice.
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.sendUpdates}
                    onChange={(e) =>
                      setFormData({ ...formData, sendUpdates: e.target.checked })
                    }
                    className="w-5 h-5 rounded-[4px] border-[#CBD5E1] text-[#20656C] focus:ring-[#20656C]"
                  />
                  <span className="text-[14px] text-[#0F172A] font-poppins">
                    Send me optional Zoiko Tech updates.
                  </span>
                </label>
              </div>

              {/* Actions Row */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-[10px] bg-[#20656C] text-white font-semibold text-[16px] font-poppins hover:bg-[#184d52] transition-colors cursor-pointer"
                >
                  Contact Sales
                </button>
                <a
                  href="#platform-evidence"
                  className="px-8 py-3.5 rounded-[10px] border-2 border-[#20656C] text-[#20656C] font-semibold text-[16px] font-poppins hover:bg-[#20656C]/10 transition-colors"
                >
                  Explore Workforce Platforms
                </a>
                <a
                  href="#time-assurance"
                  className="text-[#20656C] font-semibold text-[16px] font-poppins underline hover:text-[#184d52] transition-colors py-2"
                >
                  Explore ZoikoTime →
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
