import React from "react";
import { SectionHeader, cardDark, journeyImg } from "./shared";

/* Geometric glyph icons, matching the Figma spec (48×48 white tile, 24×24 glyph) */
function MatrixIcon({ shape }: { shape: number }) {
  const sq =
    "absolute outline outline-2 -outline-offset-[0.90px] outline-cyan-700 rounded-[2px]";
  return (
    <div className="size-12 relative bg-white rounded-xl outline outline-1 -outline-offset-1 outline-zinc-200 shrink-0">
      <div className="size-6 left-[12px] top-[12px] absolute overflow-hidden">
        {shape === 0 && (
          <>
            <div className={`${sq} size-1.5 left-[4px] top-[4px]`} />
            <div className={`${sq} size-1.5 left-[14px] top-[4px]`} />
            <div className={`${sq} size-1.5 left-[4px] top-[14px]`} />
            <div className={`${sq} size-1.5 left-[14px] top-[14px]`} />
          </>
        )}
        {shape === 1 && (
          <>
            <div className={`${sq} w-3.5 h-3 left-[5px] top-[7px]`} />
            <div className={`${sq} w-1.5 h-2.5 left-[9px] top-[4px]`} />
          </>
        )}
        {shape === 2 && (
          <>
            <div className={`${sq} w-4 h-2.5 left-[3px] top-[3px]`} />
            <div className={`${sq} w-4 h-2 left-[3px] top-[12px]`} />
          </>
        )}
        {shape === 3 && (
          <>
            <div className={`${sq} size-1.5 left-[3px] top-[9px]`} />
            <div className={`${sq} size-1.5 left-[15px] top-[3px]`} />
            <div className={`${sq} size-1.5 left-[15px] top-[15px]`} />
            <div className={`${sq} w-1.5 h-2.5 left-[9px] top-[7px]`} />
          </>
        )}
        {shape === 4 && (
          <>
            <div className={`${sq} size-2 left-[4px] top-[5px]`} />
            <div className={`${sq} w-4 h-3 left-[4px] top-[9px]`} />
          </>
        )}
        {shape === 5 && (
          <>
            <div className={`${sq} w-3.5 h-4 left-[5px] top-[3px]`} />
            <div className={`${sq} w-1.5 h-[5px] left-[9px] top-[9px]`} />
          </>
        )}
        {shape === 6 && (
          <>
            <div className={`${sq} w-3.5 h-4 left-[5px] top-[4px]`} />
            <div className={`${sq} w-2 h-4 left-[8px] top-[2px]`} />
          </>
        )}
        {shape === 7 && (
          <div className={`${sq} w-4 h-3 left-[3px] top-[6px]`} />
        )}
      </div>
    </div>
  );
}

const families = [
  {
    icon: 0,
    title: (
      <>
        Enterprise SaaS &amp; Business
        <br />
        Platforms
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
    icon: 1,
    title: "AI & Agentic Automation",
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
    icon: 2,
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
    icon: 3,
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
    icon: 4,
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
    icon: 5,
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
    icon: 6,
    title: "Regulatory & Compliance",
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
    icon: 7,
    title: "Operations & Observability",
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
      style={{
        backgroundImage:
          "linear-gradient(157deg, #010f14 0%, #123f44 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          light
          title="Solution capability matrix"
          subtitle="Eight capability families, each tied to a proof surface."
        />
        <div className="self-stretch flex flex-col gap-4">
          {[families.slice(0, 4), families.slice(4)].map((row, ri) => (
            <div key={ri} className="self-stretch flex flex-wrap gap-4">
              {row.map((f) => (
                <div
                  key={f.icon}
                  className={`flex-1 min-w-[270px] p-5 flex flex-col gap-1.5 ${cardDark}`}
                >
                  <div className="self-stretch flex items-center gap-3">
                    <MatrixIcon shape={f.icon} />
                    <p className="flex-1 zk-heading text-color-white-solid text-base font-bold leading-5">
                      {f.title}
                    </p>
                  </div>
                  <p className="zk-body text-color-cyan-90 text-base font-normal leading-6">
                    {f.desc}
                  </p>
                  <p className="zk-body text-color-cyan-67 text-sm font-semibold leading-5 pt-1">
                    {f.proof}
                  </p>
                </div>
              ))}
            </div>
          ))}
          <img
            src={journeyImg.src}
            alt={journeyImg.alt}
            className="self-stretch h-72 rounded-2xl border border-teal-300/75 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
