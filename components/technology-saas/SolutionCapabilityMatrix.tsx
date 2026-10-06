import React from "react";
import { SectionHeader, cardDark, journeyImg, asset, gradDarkToTeal } from "./shared";

const families = [
  {
    icon: asset("icon-white-box.png"),
    title: (
      <>
        Enterprise SaaS &amp;
        <br />
        Business Platforms
      </>
    ),
    desc: (
      <>
        Modular systems for business
        <br />
        operations and shared enterprise
        <br />
        workflows.
      </>
    ),
    proof: (
      <>
        Approved platforms, configuration,
        <br />
        governance, integration
      </>
    ),
  },
  {
    icon: asset("icon-white-box (1).png"),
    title: (
      <>
        AI &amp; Agentic
        <br />
        Automation
      </>
    ),
    desc: (
      <>
        AI and agents that are controlled,
        <br />
        domain-aware, auditable and
        <br />
        human-governed.
      </>
    ),
    proof: (
      <>
        AI policy, evaluation, approvals, audit
        <br />
        evidence
      </>
    ),
  },
  {
    icon: asset("icon-white-box (2).png"),
    title: (
      <>
        Cloud &amp; Developer
        <br />
        Infrastructure
      </>
    ),
    desc: (
      <>
        Teams build and integrate
        <br />
        through reusable platform
        <br />
        foundations.
      </>
    ),
    proof: (
      <>
        APIs, SDKs, webhooks, auth,
        <br />
        sandbox when live, observability
      </>
    ),
  },
  {
    icon: asset("icon-white-box (3).png"),
    title: (
      <>
        Modernization &amp;
        <br />
        Integration
      </>
    ),
    desc: (
      <>
        Legacy and new systems coexist
        <br />
        through deliberate patterns.
      </>
    ),
    proof: (
      <>
        Integration architecture, migration
        <br />
        patterns, connectors
      </>
    ),
  },
  {
    icon: asset("icon-white-box (4).png"),
    title: "Identity & Access",
    desc: (
      <>
        Users, systems and delegated
        <br />
        authority are consistently
        <br />
        governed.
      </>
    ),
    proof: (
      <>
        Authentication, authorization,
        <br />
        entitlements, policy
      </>
    ),
  },
  {
    icon: asset("icon-white-box (5).png"),
    title: "Security & Resilience",
    desc: (
      <>
        Technology operated with
        <br />
        security, continuity and
        <br />
        operational transparency.
      </>
    ),
    proof: (
      <>
        Security controls, status, incident
        <br />
        communication, evidence
      </>
    ),
  },
  {
    icon: asset("icon-white-box (6).png"),
    title: (
      <>
        Regulatory &amp;
        <br />
        Compliance
      </>
    ),
    desc: (
      <>
        Controls and evidence aligned to
        <br />
        relevant obligations.
      </>
    ),
    proof: (
      <>
        Policy, evidence, records,
        <br />
        jurisdiction-aware workflow
      </>
    ),
  },
  {
    icon: asset("icon-white-box (7).png"),
    title: (
      <>
        Operations &amp;
        <br />
        Observability
      </>
    ),
    desc: (
      <>
        Teams understand system state,
        <br />
        usage, change and reliability.
      </>
    ),
    proof: (
      <>
        Telemetry, audit, status, reports,
        <br />
        support
      </>
    ),
  },
];

export default function SolutionCapabilityMatrix() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          light
          title="Solution capability matrix"
          subtitle="Eight capability families, each tied to a proof surface."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {families.map((f, i) => (
            <div
              key={i}
              className={`p-5 flex flex-col gap-2 ${cardDark}`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={f.icon}
                  alt=""
                  className="size-12 shrink-0 rounded-xl object-contain"
                />
                <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                  {f.title}
                </p>
              </div>
              <p className="zk-body text-color-cyan-90 text-xs sm:text-sm font-normal leading-5">
                {f.desc}
              </p>
              <p className="zk-body text-color-cyan-67 text-xs font-semibold leading-5 pt-1 mt-auto">
                {f.proof}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src={journeyImg.src}
            alt={journeyImg.alt}
            className="w-full h-72 rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
