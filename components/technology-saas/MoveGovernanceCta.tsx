"use client";

import React, { useState } from "react";
import { SectionHeader, skyBtn, ghostBtn, textLink } from "./shared";

const inputClass =
  "self-stretch h-12 min-h-12 rounded-[10px] border border-color-cyan-66 bg-white/10 px-4 zk-body text-color-white-solid text-sm placeholder:text-color-cyan-90 outline-none focus:border-color-cyan-67 transition-colors";

const selectClass =
  "self-stretch min-h-12 pl-4 pr-7 py-3.5 rounded-[10px] outline outline-1 -outline-offset-1 outline-color-cyan-66 bg-white/10 zk-body text-color-white-solid text-sm font-semibold appearance-none";

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
      style={{
        backgroundImage:
          "linear-gradient(157deg, #010f14 0%, #0d353b 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
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
              Talk with Zoiko Tech about your current estate, modernization
              goals, integration constraints,
              <br />
              governance requirements, and the right path to evaluate fit.
            </>
          }
        />
        <div className="self-stretch p-5 bg-cyan-950 rounded-[20px] overflow-hidden">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate={false}
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ts-email"
                className="zk-body text-white text-sm font-semibold leading-6"
              >
                Work email
              </label>
              <input
                id="ts-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ts-company"
                className="zk-body text-white text-sm font-semibold leading-6"
              >
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
              <label
                htmlFor="ts-role"
                className="zk-body text-white text-sm font-semibold leading-6"
              >
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
              <label
                htmlFor="ts-country"
                className="zk-body text-white text-sm font-semibold leading-6"
              >
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
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ts-objective"
                className="zk-body text-white text-sm font-semibold leading-6"
              >
                What brings you here?
              </label>
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
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ts-stage"
                className="zk-body text-white text-sm font-semibold leading-6"
              >
                Evaluation stage
              </label>
              <select
                id="ts-stage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className={selectClass}
              >
                {["Exploring", "Architecting", "Validating / piloting", "In production"].map(
                  (o) => (
                    <option key={o}>{o}</option>
                  )
                )}
              </select>
            </div>
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="ts-message"
                className="zk-body text-white text-sm font-semibold leading-6"
              >
                Message (optional)
              </label>
              <textarea
                id="ts-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="self-stretch h-24 min-h-12 rounded-[10px] border border-color-cyan-66 bg-white/10 px-4 py-3 zk-body text-color-white-solid text-sm outline-none focus:border-color-cyan-67 transition-colors resize-none"
              />
              <p className="zk-body text-color-cyan-73 text-xs font-normal leading-5">
                Please don’t submit credentials, secrets, regulated personal
                data or confidential architecture details.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="ts-privacy"
                type="checkbox"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                className="size-5 rounded-xs border border-gray-400 accent-cyan-500"
              />
              <label
                htmlFor="ts-privacy"
                className="zk-body text-white text-sm font-normal leading-6"
              >
                I acknowledge the Privacy Notice.
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="ts-updates"
                type="checkbox"
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
                className="size-5 rounded-xs border border-gray-400 accent-cyan-500"
              />
              <label
                htmlFor="ts-updates"
                className="zk-body text-white text-sm font-normal leading-6"
              >
                Send me optional Zoiko Tech updates.
              </label>
            </div>
            <div className="pt-3 flex flex-wrap content-start">
              <div className="min-h-14 pr-3 pb-3">
                <button
                  type="submit"
                  disabled={submitted}
                  className={skyBtn}
                >
                  {submitted ? "Request received" : "Contact Sales"}
                </button>
              </div>
              <div className="min-h-14 pr-3 pb-3">
                <a href="#platform-evidence" className={ghostBtn}>
                  Explore Platforms
                </a>
              </div>
              <div className="flex items-center">
                <a href="#developer-integration" className={textLink}>
                  Developer Platform →
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
