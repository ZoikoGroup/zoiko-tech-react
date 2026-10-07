"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [intent, setIntent] = useState("");
  const [context, setContext] = useState("");
  const [ackPreview, setAckPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full text-white py-16 sm:py-20 lg:py-[74px]"
      style={{
        background:
          "linear-gradient(133deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 max-w-[489px]"
          >
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.15] tracking-[-0.0217em] text-white">
              Still need a product, implementation or{" "}
              <span className="text-[#6FD0F6]">account-specific answer?</span>
            </h2>
            <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
              Continue to the authoritative destination for your question.
            </p>

            <h3 className="font-poppins font-bold text-xl sm:text-2xl lg:text-[28px] leading-[36.4px] text-white mt-4 sm:mt-6">
              Task completion first.
            </h3>
            <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
              Developer Resources for build contracts; Trust for assurance;
              Status for live health; approved Support for unresolved issues;
              Sales for evaluation.
            </p>
            <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
              No support URL or service promise is guessed. This inquiry is a
              local preview, not a submitted ticket.
            </p>

            <div className="pt-2">
              <Link
                href="/research"
                className="inline-flex items-center text-[#9ADDDF] hover:text-white font-poppins font-bold text-sm leading-[22.4px] transition-colors"
              >
                Explore Guides & Reports preview →
              </Link>
            </div>
          </motion.div>

          {/* Right Column Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full"
          >
            <form
              id="consultation"
              onSubmit={handleSubmit}
              className="bg-white/[0.29] border border-[#DCE8E8] rounded-[12px] p-6 sm:p-8 md:p-[34px] shadow-2xl backdrop-blur-md flex flex-col gap-4"
            >
              <h3 className="font-poppins font-bold text-lg sm:text-[20px] leading-[26px] text-[#6FD0F6] mb-1">
                Describe the question
              </h3>

              {submitted ? (
                <div className="p-6 rounded-[8px] bg-[#247780]/40 border border-[#86D4D8]/50 text-white text-center">
                  <h4 className="font-poppins font-bold text-lg text-white mb-2">
                    Inquiry Preview Prepared
                  </h4>
                  <p className="font-poppins text-sm text-[#DEEFEF] mb-4">
                    Your local preview is ready. No data was transmitted or
                    retained.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#86D4D8] underline hover:text-white"
                  >
                    Edit inquiry details
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-poppins font-bold text-xs leading-[19.2px] text-white">
                        Work email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full bg-[#F8FBFB] border border-[#CCDEDF] rounded-[5px] px-3.5 py-2.5 text-sm text-[#20474B] placeholder-[#767676] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                      />
                    </div>

                    {/* Organization */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-poppins font-bold text-xs leading-[19.2px] text-white">
                        Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="Company name"
                        className="w-full bg-[#F8FBFB] border border-[#CCDEDF] rounded-[5px] px-3.5 py-2.5 text-sm text-[#20474B] placeholder-[#767676] focus:outline-none focus:ring-2 focus:ring-[#247780]"
                      />
                    </div>
                  </div>

                  {/* Intent select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins font-bold text-xs leading-[19.2px] text-white">
                      Intent
                    </label>
                    <select
                      value={intent}
                      onChange={(e) => setIntent(e.target.value)}
                      className="w-full bg-[#F8FBFB] border border-[#CCDEDF] rounded-[5px] px-3.5 py-2.5 text-sm text-[#20474B] font-bold focus:outline-none focus:ring-2 focus:ring-[#247780]"
                    >
                      <option value="">Choose one</option>
                      <option value="product-doc">Product Documentation</option>
                      <option value="api-integration">API & Integration Contract</option>
                      <option value="architecture">Architecture & Security Authority</option>
                      <option value="compliance">Compliance & Governance Scope</option>
                      <option value="status">Service Status & Outage Check</option>
                    </select>
                  </div>

                  {/* High-level context */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins font-bold text-xs leading-[19.2px] text-white">
                      High-level context
                    </label>
                    <textarea
                      rows={3}
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                      placeholder="Outline the documentation or implementation question..."
                      className="w-full bg-[#F8FBFB] border border-[#CCDEDF] rounded-[5px] px-3.5 py-2.5 text-sm text-[#20474B] placeholder-[#767676] focus:outline-none focus:ring-2 focus:ring-[#247780] resize-none h-[91px]"
                    />
                  </div>

                  {/* Privacy / Safety microcopy */}
                  <p className="font-poppins font-normal text-xs leading-[19.2px] text-white/90">
                    Do not submit credentials, customer records, private URLs,
                    secrets or sensitive error payloads.
                  </p>

                  {/* Checkbox acknowledgment */}
                  <label className="flex items-start gap-3 cursor-pointer py-1">
                    <input
                      type="checkbox"
                      checked={ackPreview}
                      onChange={(e) => setAckPreview(e.target.checked)}
                      required
                      className="mt-1 w-4 h-4 rounded-[2.5px] border-gray-400 text-[#247780] focus:ring-[#247780] shrink-0"
                    />
                    <span className="font-poppins font-normal text-xs leading-[19.2px] text-white/95">
                      I acknowledge this local preview does not send or store
                      information.
                    </span>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-[5px] bg-[#247780] hover:bg-[#1e636b] text-white font-poppins font-bold text-sm leading-[22.4px] transition-all duration-200 shadow-md hover:shadow-lg mt-1 cursor-pointer"
                  >
                    Review inquiry
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
