"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Check } from "lucide-react";

export default function ContactSalesCtaSection() {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [intent, setIntent] = useState("");
  const [stage, setStage] = useState("");
  const [context, setContext] = useState("");
  const [ackPreview, setAckPreview] = useState(false);
  const [optUpdates, setOptUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full text-white py-16 sm:py-20 md:py-24"
      style={{
        background:
          "linear-gradient(130deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full max-w-[560px]"
          >
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-white mb-6">
              Evaluate the operating context behind the proof.
            </h2>
            <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#C4D7D9] mb-8">
              Talk with Zoiko Tech about the challenge, technology area, implementation environment and governance requirements you are evaluating.
            </p>

            {/* Context subhead matching Figma */}
            <div className="border-t border-[#83B7BF]/35 pt-7 mb-8">
              <h3 className="font-poppins font-bold text-lg sm:text-[20px] text-white mb-3">
                Your requirements remain the starting point.
              </h3>
              <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#C4D7D9] mb-6">
                Customer outcomes are context-specific. No story ID or private evidence is passed because the approved story registry was not supplied.
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-1.5 text-[#86D4D8] hover:text-white font-poppins font-medium text-base transition-colors"
              >
                <span>Explore Research →</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column Form Card Matching Figma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:max-w-[540px] border border-[#83B7BF]/35 rounded-[10px] p-6 sm:p-9 bg-transparent"
          >
            <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white mb-6">
              Discuss your evaluation
            </h3>

            {submitted ? (
              <div className="bg-[#247780]/20 border border-[#247780]/50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#247780] text-white flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-poppins font-bold text-lg text-white mb-2">Inquiry Reviewed</h4>
                <p className="font-poppins text-sm text-[#C4D7D9]">
                  Thank you. Your evaluation parameters have been recorded in preview mode.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins text-xs font-bold uppercase tracking-wider text-[#C4D7D9] mb-1.5">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white placeholder-gray-500 font-poppins text-sm focus:outline-none focus:border-[#6FD0F6] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-xs font-bold uppercase tracking-wider text-[#C4D7D9] mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="Organization name"
                      className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white placeholder-gray-500 font-poppins text-sm focus:outline-none focus:border-[#6FD0F6] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins text-xs font-bold uppercase tracking-wider text-[#C4D7D9] mb-1.5">
                      Evaluation intent
                    </label>
                    <select
                      value={intent}
                      onChange={(e) => setIntent(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white font-poppins text-sm focus:outline-none focus:border-[#6FD0F6] transition-colors"
                    >
                      <option value="" className="bg-[#0A2528] text-white">Choose one</option>
                      <option value="architecture" className="bg-[#0A2528] text-white">Architecture Evaluation</option>
                      <option value="deployment" className="bg-[#0A2528] text-white">Deployment Proof</option>
                      <option value="regulatory" className="bg-[#0A2528] text-white">Regulatory Alignment</option>
                      <option value="commercial" className="bg-[#0A2528] text-white">Commercial Readiness</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-poppins text-xs font-bold uppercase tracking-wider text-[#C4D7D9] mb-1.5">
                      Stage
                    </label>
                    <select
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white font-poppins text-sm focus:outline-none focus:border-[#6FD0F6] transition-colors"
                    >
                      <option value="" className="bg-[#0A2528] text-white">Choose one</option>
                      <option value="discovery" className="bg-[#0A2528] text-white">Discovery / Exploration</option>
                      <option value="technical" className="bg-[#0A2528] text-white">Technical Evaluation</option>
                      <option value="procurement" className="bg-[#0A2528] text-white">Procurement / RFP</option>
                      <option value="active" className="bg-[#0A2528] text-white">Active Deployment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-poppins text-xs font-bold uppercase tracking-wider text-[#C4D7D9] mb-1.5">
                    High-level context (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="Describe the operational challenge or technology scope..."
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white placeholder-gray-500 font-poppins text-sm focus:outline-none focus:border-[#6FD0F6] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-[#A6D2D7] font-poppins">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#6FD0F6]" />
                  <span>
                    Do not submit private customer data, quotes, CRM records, sensitive metrics, credentials or confidential architecture.
                  </span>
                </div>

                <div className="flex flex-col gap-2 pt-1 text-xs text-[#C4D7D9] font-poppins">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={ackPreview}
                      onChange={(e) => setAckPreview(e.target.checked)}
                      className="mt-0.5 rounded border-white/20 bg-black/40 text-[#247780] focus:ring-[#6FD0F6]"
                    />
                    <span>I acknowledge this local preview does not send or store information.</span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={optUpdates}
                      onChange={(e) => setOptUpdates(e.target.checked)}
                      className="mt-0.5 rounded border-white/20 bg-black/40 text-[#247780] focus:ring-[#6FD0F6]"
                    />
                    <span>Optional updates when an approved live service is connected.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-6 rounded-[5px] bg-[#247780] hover:bg-[#1a5f66] text-white font-poppins font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Review inquiry →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
