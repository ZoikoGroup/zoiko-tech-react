"use client";

import React, { useState } from "react";
import { SectionHeader, body, ghostBtn, textLink } from "./shared";

const inputClass =
  "self-stretch h-12 min-h-12 rounded-[10px] border border-color-cyan-66 bg-white/10 px-4 zk-body text-color-white-solid text-sm placeholder:text-color-cyan-90 outline-none focus:border-color-cyan-67 transition-colors";

const selectClass =
  "self-stretch min-h-12 pl-4 pr-7 py-3.5 rounded-[10px] outline outline-1 -outline-offset-1 outline-color-cyan-66 bg-white/10 zk-body text-color-white-solid text-sm font-semibold appearance-none";

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
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
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
        <div className="self-stretch p-5 bg-cyan-950 rounded-[20px] overflow-hidden">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate={false}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="zk-email" className="zk-body text-white text-sm font-semibold leading-6">
                Work email
              </label>
              <input
                id="zk-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="zk-company" className="zk-body text-white text-sm font-semibold leading-6">
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
              <label htmlFor="zk-role" className="zk-body text-white text-sm font-semibold leading-6">
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
              <label htmlFor="zk-country" className="zk-body text-white text-sm font-semibold leading-6">
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
            <div className="flex flex-col gap-1.5">
              <label htmlFor="zk-objective" className="zk-body text-white text-sm font-semibold leading-6">
                Primary governance objective
              </label>
              <select
                id="zk-objective"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className={selectClass}
              >
                {["AI inventory", "Impact classification", "Agent authority", "Evaluation design", "Evidence & audit"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="zk-systype" className="zk-body text-white text-sm font-semibold leading-6">
                AI system type
              </label>
              <select
                id="zk-systype"
                value={systemType}
                onChange={(e) => setSystemType(e.target.value)}
                className={selectClass}
              >
                {["Mixed / unsure", "Assistive AI", "Model service", "Agents / workflows", "Domain AI", "Embedded AI"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="zk-stage" className="zk-body text-white text-sm font-semibold leading-6">
                Deployment stage
              </label>
              <select
                id="zk-stage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className={selectClass}
              >
                {["Exploring", "Piloting", "In production", "Retiring / consolidating"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="zk-domain" className="zk-body text-white text-sm font-semibold leading-6">
                Domain / sensitivity
              </label>
              <select
                id="zk-domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className={selectClass}
              >
                {["General enterprise", "Finance", "HR / workforce", "Healthcare", "Public sector", "Legal / regulatory"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="zk-message" className="zk-body text-white text-sm font-semibold leading-6">
                Message (optional)
              </label>
              <textarea
                id="zk-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="self-stretch h-24 min-h-12 rounded-[10px] border border-color-cyan-66 bg-white/10 px-4 py-3 zk-body text-color-white-solid text-sm outline-none focus:border-color-cyan-67 transition-colors resize-none"
              />
              <p className="zk-body text-color-grey-93-2 text-xs font-normal leading-5">
                Please don’t submit prompts containing secrets, model keys,
                sensitive personal data, production logs, confidential
                evaluations or regulated records.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="zk-privacy"
                type="checkbox"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                className="size-5 rounded-xs border border-gray-400 accent-cyan-500"
              />
              <label htmlFor="zk-privacy" className="zk-body text-white text-sm font-normal leading-6">
                I acknowledge the Privacy Notice.
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="zk-updates"
                type="checkbox"
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
                className="size-5 rounded-xs border border-gray-400 accent-cyan-500"
              />
              <label htmlFor="zk-updates" className="zk-body text-white text-sm font-normal leading-6">
                Send me optional Zoiko Tech updates.
              </label>
            </div>
            <div className="pt-3 flex flex-wrap content-start">
              <div className="min-h-14 pr-3 pb-3">
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 bg-white rounded-[10px] outline outline-2 -outline-offset-2 outline-white zk-body text-color-black-solid text-base font-semibold hover:bg-cyan-50 transition-colors disabled:opacity-60"
                >
                  {submitted ? "Request received" : "Contact Sales"}
                </button>
              </div>
              <div className="min-h-14 pr-3 pb-3">
                <a href="#responsible-ai" className={ghostBtn}>
                  Explore Responsible AI
                </a>
              </div>
              <div className="flex items-center">
                <a href="#agentic-automation" className={textLink}>
                  Explore AI &amp; Agentic Automation →
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
