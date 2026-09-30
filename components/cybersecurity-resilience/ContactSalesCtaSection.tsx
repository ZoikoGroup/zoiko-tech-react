"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
    securityIntent: "Reduce exposure",
    environment: "Mixed / unsure",
    evaluationStage: "Exploring",
    message: "",
    privacyNotice: false,
    updates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-sales"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(155deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[1180px] mx-auto mb-10 sm:mb-12"
        >
          <h2 className="font-sora text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-white leading-[1.2] tracking-[-0.02em] max-w-[752px] mb-4">
            Protect critical operations with security controls you can explain
            and evidence.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#DCECEE] leading-[26px] max-w-[707px]">
            Talk with Zoiko Tech about the systems and services you need to
            protect, the identity and access boundaries that matter, the
            security operations you want to improve, and the resilience
            requirements that shape your environment.
          </p>
        </motion.div>

        {/* Full-width Interactive Consultation Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full max-w-[1180px] mx-auto"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center bg-white/[0.06] border border-[#7FD0D9]/30 rounded-[20px] p-8">
              <CheckCircle2 className="w-16 h-16 text-[#7FD0D9] mb-4" />
              <h3 className="font-sora text-[24px] font-bold text-white mb-2">
                Thank you for reaching out
              </h3>
              <p className="text-[#DCECEE] max-w-md">
                Our security solutions team has received your information and
                will get in touch promptly to discuss your security posture and
                resilience requirements.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* 4-Column Grid for Primary Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                {/* Work Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-white">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-[48px] px-4 rounded-[10px] bg-[#DEF6FF]/[0.53] border border-[#9BB5B8] text-[#0A1416] font-medium focus:border-[#7FD0D9] focus:outline-none transition-colors text-[14.5px]"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-white">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="h-[48px] px-4 rounded-[10px] bg-[#DEF6FF]/[0.53] border border-[#9BB5B8] text-[#0A1416] font-medium focus:border-[#7FD0D9] focus:outline-none transition-colors text-[14.5px]"
                  />
                </div>

                {/* Role / Function */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-white">
                    Role / function (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="h-[48px] px-4 rounded-[10px] bg-[#DEF6FF]/[0.53] border border-[#9BB5B8] text-[#0A1416] font-medium focus:border-[#7FD0D9] focus:outline-none transition-colors text-[14.5px]"
                  />
                </div>

                {/* Country / Region */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-white">
                    Country / region
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="h-[48px] px-4 rounded-[10px] bg-[#DEF6FF]/[0.53] border border-[#9BB5B8] text-[#0A1416] font-medium focus:border-[#7FD0D9] focus:outline-none transition-colors text-[14.5px]"
                  />
                </div>

                {/* Security Intent */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-white">
                    Security intent
                  </label>
                  <div className="relative">
                    <select
                      value={formData.securityIntent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          securityIntent: e.target.value,
                        })
                      }
                      className="w-full h-[48px] px-4 pr-10 rounded-[10px] bg-[#DEF6FF]/[0.53] border border-[#9BB5B8] text-[#0A1416] font-medium focus:border-[#7FD0D9] focus:outline-none transition-colors text-[14.5px] appearance-none cursor-pointer"
                    >
                      <option value="Reduce exposure">Reduce exposure</option>
                      <option value="Strengthen identity & access">
                        Strengthen identity &amp; access
                      </option>
                      <option value="Improve security operations">
                        Improve security operations
                      </option>
                      <option value="Secure engineering and change">
                        Secure engineering and change
                      </option>
                      <option value="Improve resilience">Improve resilience</option>
                      <option value="Review trust evidence">
                        Review trust evidence
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#0A1416]/70">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Environment */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-white">
                    Environment
                  </label>
                  <div className="relative">
                    <select
                      value={formData.environment}
                      onChange={(e) =>
                        setFormData({ ...formData, environment: e.target.value })
                      }
                      className="w-full h-[48px] px-4 pr-10 rounded-[10px] bg-[#DEF6FF]/[0.53] border border-[#9BB5B8] text-[#0A1416] font-medium focus:border-[#7FD0D9] focus:outline-none transition-colors text-[14.5px] appearance-none cursor-pointer"
                    >
                      <option value="Mixed / unsure">Mixed / unsure</option>
                      <option value="Cloud-native">Cloud-native</option>
                      <option value="Hybrid / On-premise">
                        Hybrid / On-premise
                      </option>
                      <option value="Multi-cloud">Multi-cloud</option>
                      <option value="Enterprise SaaS">Enterprise SaaS</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#0A1416]/70">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Evaluation Stage */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-white">
                    Evaluation stage
                  </label>
                  <div className="relative">
                    <select
                      value={formData.evaluationStage}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          evaluationStage: e.target.value,
                        })
                      }
                      className="w-full h-[48px] px-4 pr-10 rounded-[10px] bg-[#DEF6FF]/[0.53] border border-[#9BB5B8] text-[#0A1416] font-medium focus:border-[#7FD0D9] focus:outline-none transition-colors text-[14.5px] appearance-none cursor-pointer"
                    >
                      <option value="Exploring">Exploring</option>
                      <option value="Evaluating solution">
                        Evaluating solution
                      </option>
                      <option value="Active RFP">Active RFP</option>
                      <option value="Ready to implement">
                        Ready to implement
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#0A1416]/70">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message (Full-width textarea) */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-white">
                  Message (optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="p-4 rounded-[10px] bg-[#DEF6FF]/[0.53] border border-[#9BB5B8] text-[#0A1416] font-medium focus:border-[#7FD0D9] focus:outline-none transition-colors text-[14.5px] resize-none h-[92px]"
                />
                <span className="text-[13.5px] text-[#A9C9CD] leading-[20px] mt-0.5">
                  Please don’t submit credentials, secrets, vulnerability
                  details, incident data or confidential architecture.
                </span>
              </div>

              {/* Checkboxes with white 22x22px square */}
              <div className="flex flex-col gap-3 pt-1">
                <label className="flex items-center gap-3.5 cursor-pointer text-[15px] sm:text-[16px] text-white font-normal select-none">
                  <div
                    onClick={() =>
                      setFormData({
                        ...formData,
                        privacyNotice: !formData.privacyNotice,
                      })
                    }
                    className="w-[22px] h-[22px] rounded-[4px] bg-white flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
                  >
                    {formData.privacyNotice && (
                      <svg
                        className="w-4 h-4 text-[#06231F] stroke-current stroke-[3] fill-none"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    required
                    checked={formData.privacyNotice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        privacyNotice: e.target.checked,
                      })
                    }
                    className="sr-only"
                  />
                  <span>I acknowledge the Privacy Notice.</span>
                </label>

                <label className="flex items-center gap-3.5 cursor-pointer text-[15px] sm:text-[16px] text-white font-normal select-none">
                  <div
                    onClick={() =>
                      setFormData({
                        ...formData,
                        updates: !formData.updates,
                      })
                    }
                    className="w-[22px] h-[22px] rounded-[4px] bg-white flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
                  >
                    {formData.updates && (
                      <svg
                        className="w-4 h-4 text-[#06231F] stroke-current stroke-[3] fill-none"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.updates}
                    onChange={(e) =>
                      setFormData({ ...formData, updates: e.target.checked })
                    }
                    className="sr-only"
                  />
                  <span>Send me optional Zoiko Tech updates.</span>
                </label>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  type="submit"
                  className="h-[48px] px-6 rounded-[10px] bg-[#7FD0D9] hover:bg-[#6FD0F6] text-[#06231F] font-semibold text-[16px] transition-colors cursor-pointer text-center"
                >
                  Contact Sales
                </button>
                <a
                  href="#tech-in-practice"
                  className="h-[48px] px-6 rounded-[10px] border-2 border-[#7FD0D9] text-white font-semibold text-[16px] hover:bg-[#7FD0D9]/15 transition-colors flex items-center justify-center text-center"
                >
                  Explore Security Technology
                </a>
                <a
                  href="#evidence-disclosure"
                  className="text-[#7FD0D9] hover:text-[#6FD0F6] font-semibold text-[16px] flex items-center justify-center sm:justify-start sm:ml-4 transition-colors"
                >
                  Open Trust Center →
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
