"use client";

import React, { useState } from "react";
import { SectionHeader } from "./shared";

const inputClass =
  "w-full h-11 min-h-11 rounded-[10px] bg-[#87c7aa] px-4 zk-body text-[#004148] font-medium text-sm placeholder:text-[#004148]/60 outline-none focus:ring-2 focus:ring-white transition-all";

const selectClass =
  "w-full h-11 min-h-11 pl-4 pr-8 rounded-[10px] bg-[#87c7aa] zk-body text-[#004148] font-medium text-sm outline-none focus:ring-2 focus:ring-white transition-all appearance-none cursor-pointer";

export default function MoveGovernanceCta() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [objective, setObjective] = useState("AI inventory");
  const [systemType, setSystemType] = useState("Mixed / unsure");
  const [stage, setStage] = useState("Exploring");
  const [domain, setDomain] = useState("General enterprise");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-sales" className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          title={
            <>
              Move AI governance from policy
              <br />
              documents into accountable operating
              <br />
              controls.
            </>
          }
          subtitle={
            <>
              Talk with Zoiko Tech about the AI systems and agents you need to
              govern, the actions and
              <br />
              data they can access, the evaluation and evidence your reviewers
              require, and the right path
              <br />
              to establish accountable deployment controls.
            </>
          }
        />
        <div className="self-stretch p-6 md:p-8 bg-[#004148] rounded-[20px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Row 1: 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zk-email" className="zk-body text-white text-xs font-semibold leading-5">
                  Work email
                </label>
                <input
                  id="zk-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zk-company" className="zk-body text-white text-xs font-semibold leading-5">
                  Company
                </label>
                <input
                  id="zk-company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zk-role" className="zk-body text-white text-xs font-semibold leading-5">
                  Role / function (optional)
                </label>
                <input
                  id="zk-role"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zk-country" className="zk-body text-white text-xs font-semibold leading-5">
                  Country / region
                </label>
                <input
                  id="zk-country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zk-objective" className="zk-body text-white text-xs font-semibold leading-5">
                  Primary governance objective
                </label>
                <div className="relative">
                  <select
                    id="zk-objective"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className={selectClass}
                  >
                    {["AI inventory", "Impact classification", "Agent authority", "Evaluation design", "Evidence & audit"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zk-systype" className="zk-body text-white text-xs font-semibold leading-5">
                  AI system type
                </label>
                <div className="relative">
                  <select
                    id="zk-systype"
                    value={systemType}
                    onChange={(e) => setSystemType(e.target.value)}
                    className={selectClass}
                  >
                    {["Mixed / unsure", "Assistive AI", "Model service", "Agents / workflows", "Domain AI", "Embedded AI"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zk-stage" className="zk-body text-white text-xs font-semibold leading-5">
                  Deployment stage
                </label>
                <div className="relative">
                  <select
                    id="zk-stage"
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className={selectClass}
                  >
                    {["Exploring", "Piloting", "In production", "Retiring / consolidating"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zk-domain" className="zk-body text-white text-xs font-semibold leading-5">
                  Domain / sensitivity
                </label>
                <div className="relative">
                  <select
                    id="zk-domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className={selectClass}
                  >
                    {["General enterprise", "Finance", "HR / workforce", "Healthcare", "Public sector", "Legal / regulatory"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Row 3: Message textarea */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="zk-message" className="zk-body text-white text-xs font-semibold leading-5">
                Message (optional)
              </label>
              <textarea
                id="zk-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-24 rounded-[10px] bg-[#87c7aa] px-4 py-3 zk-body text-[#004148] font-medium text-sm outline-none focus:ring-2 focus:ring-white transition-all resize-none"
              />
              <p className="zk-body text-white/70 text-xs font-normal leading-5">
                Please don&apos;t submit prompts containing secrets, model keys,
                sensitive personal data, production logs, confidential
                evaluations or regulated records.
              </p>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2 pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <div
                  onClick={() => setPrivacy(!privacy)}
                  className="size-4 rounded-[3px] bg-[#87c7aa] flex items-center justify-center cursor-pointer shrink-0"
                >
                  {privacy && (
                    <svg className="size-3 text-[#004148]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="zk-body text-white text-xs sm:text-sm font-normal">
                  I acknowledge the Privacy Notice.
                </span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <div
                  onClick={() => setUpdates(!updates)}
                  className="size-4 rounded-[3px] bg-[#87c7aa] flex items-center justify-center cursor-pointer shrink-0"
                >
                  {updates && (
                    <svg className="size-3 text-[#004148]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="zk-body text-white text-xs sm:text-sm font-normal">
                  Send me optional Zoiko Tech updates.
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={submitted}
                className="inline-flex items-center justify-center min-h-12 px-6 bg-[#87c7aa] rounded-[10px] zk-body text-[#004148] text-base font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer"
              >
                {submitted ? "Request received" : "Contact Sales"}
              </button>
              <a
                href="#responsible-ai"
                className="inline-flex items-center justify-center min-h-12 px-6 rounded-[10px] outline outline-1 -outline-offset-1 outline-[#87c7aa] zk-body text-[#87c7aa] text-base font-semibold hover:bg-[#87c7aa]/10 transition-colors"
              >
                Explore Responsible AI
              </a>
              <a
                href="#agentic-automation"
                className="inline-flex items-center gap-1.5 zk-body text-color-cyan-67 text-base font-semibold"
              >
                <span>Explore AI &amp; Agentic Automation</span>
                <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
