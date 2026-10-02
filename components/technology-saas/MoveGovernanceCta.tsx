"use client";

import React, { useState } from "react";
import { SectionHeader, gradDarkToTeal } from "./shared";

const inputClass =
  "w-full h-11 min-h-11 rounded-[10px] bg-[#859897] px-4 zk-body text-[#004148] font-medium text-sm placeholder:text-[#004148]/60 outline-none focus:ring-2 focus:ring-white transition-all";

const selectClass =
  "w-full h-11 min-h-11 pl-4 pr-8 rounded-[10px] bg-[#859897] zk-body text-[#004148] font-medium text-sm outline-none focus:ring-2 focus:ring-white transition-all appearance-none cursor-pointer";

export default function MoveGovernanceCta() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [objective, setObjective] = useState("Modernize legacy systems");
  const [stage, setStage] = useState("Exploring");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-sales"
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          light
          title={
            <>
              Modernize with a technology
              <br />
              architecture built to evolve.
            </>
          }
          subtitle={
            <>
              Talk with Zoiko Tech about your current estate, modernization goals, integration constraints,
              <br />
              governance requirements, and the right path to evaluate fit.
            </>
          }
        />
        <div className="self-stretch p-6 md:p-8 bg-[#004148] rounded-[20px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Row 1: 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ts-email" className="zk-body text-white text-xs font-semibold leading-5">
                  Work email
                </label>
                <input
                  id="ts-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ts-company" className="zk-body text-white text-xs font-semibold leading-5">
                  Company
                </label>
                <input
                  id="ts-company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ts-role" className="zk-body text-white text-xs font-semibold leading-5">
                  Role / function (optional)
                </label>
                <input
                  id="ts-role"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ts-country" className="zk-body text-white text-xs font-semibold leading-5">
                  Country / region
                </label>
                <input
                  id="ts-country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: 2 columns (left half of 4-col grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ts-objective" className="zk-body text-white text-xs font-semibold leading-5">
                  What brings you here?
                </label>
                <div className="relative">
                  <select
                    id="ts-objective"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className={selectClass}
                  >
                    {[
                      "Modernize legacy systems",
                      "Consolidate SaaS sprawl",
                      "Build with governed AI",
                      "Create a developer platform",
                      "Unify operations",
                    ].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#004148]">
                    <svg className="size-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="ts-stage" className="zk-body text-white text-xs font-semibold leading-5">
                  Evaluation stage
                </label>
                <div className="relative">
                  <select
                    id="ts-stage"
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className={selectClass}
                  >
                    {["Exploring", "Architecting", "Validating / piloting", "In production"].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#004148]">
                    <svg className="size-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="ts-message" className="zk-body text-white text-xs font-semibold leading-5">
                Message (optional)
              </label>
              <textarea
                id="ts-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full rounded-[10px] bg-[#859897] p-4 zk-body text-[#004148] font-medium text-sm placeholder:text-[#004148]/60 outline-none focus:ring-2 focus:ring-white transition-all resize-none"
              />
              <p className="zk-body text-white/60 text-xs font-normal leading-5 mt-1">
                Please don’t submit credentials, secrets, regulated personal data or confidential architecture details.
              </p>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2.5 pt-1">
              <label className="flex items-center gap-3 cursor-pointer group select-none">
                <div className="relative size-4 shrink-0 rounded-[3px] bg-white flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={privacy}
                    onChange={(e) => setPrivacy(e.target.checked)}
                    className="opacity-0 absolute inset-0 cursor-pointer"
                  />
                  {privacy && (
                    <svg className="size-3 text-[#004148] stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="zk-body text-white text-xs font-normal leading-5">
                  I acknowledge the Privacy Notice.
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group select-none">
                <div className="relative size-4 shrink-0 rounded-[3px] bg-white flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={updates}
                    onChange={(e) => setUpdates(e.target.checked)}
                    className="opacity-0 absolute inset-0 cursor-pointer"
                  />
                  {updates && (
                    <svg className="size-3 text-[#004148] stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="zk-body text-white text-xs font-normal leading-5">
                  Send me optional Zoiko Tech updates.
                </span>
              </label>
            </div>

            {/* Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={submitted}
                className="h-11 px-6 rounded-[10px] bg-[#cae6da] text-[#004148] font-semibold text-sm hover:bg-white transition-all disabled:opacity-70"
              >
                {submitted ? "Request received" : "Contact Sales"}
              </button>
              <a
                href="#platform-evidence"
                className="inline-flex items-center h-11 px-6 rounded-[10px] border border-[#87c7aa] text-[#87c7aa] font-semibold text-sm hover:bg-[#87c7aa]/10 transition-all"
              >
                Explore Platforms
              </a>
              <a
                href="#developer-integration"
                className="inline-flex items-center gap-1.5 text-[#cae6da] text-sm font-semibold hover:underline"
              >
                <span>Developer Platform</span>
                <svg
                  className="size-3.5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
