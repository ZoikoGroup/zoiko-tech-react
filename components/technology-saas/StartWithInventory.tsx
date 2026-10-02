import React from "react";
import { SectionHeader, cardDark, primaryBtn, journeySideImg, gradDarkToTeal } from "./shared";

const steps = [
  {
    name: "Discover",
    icon: (
      <svg className="size-4 text-[#004148] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    desc: (
      <>
        Business goals, current
        <br />
        systems, constraints,
        <br />
        markets, security and
        <br />
        regulatory context.
      </>
    ),
    tag: "Qualifies without a long form",
  },
  {
    name: "Architect",
    icon: (
      <svg className="size-4 text-[#004148] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    desc: (
      <>
        Target architecture,
        <br />
        coexistence, identity,
        <br />
        integration, data and
        <br />
        governance decisions.
      </>
    ),
    tag: (
      <>
        Creates technical
        <br />
        confidence
      </>
    ),
  },
  {
    name: "Validate",
    icon: (
      <svg className="size-4 text-[#004148] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11.5 14.5 15.5 9.5" />
      </svg>
    ),
    desc: (
      <>
        Pilot or proof-of-value
        <br />
        scope, success criteria,
        <br />
        evidence needs,
        <br />
        integration test.
      </>
    ),
    tag: "Reduces implementation risk",
  },
  {
    name: "Migrate / Deploy",
    icon: (
      <svg className="size-4 text-[#004148] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    desc: (
      <>
        Phased migration or
        <br />
        new deployment with
        <br />
        controlled cutover and
        <br />
        rollback.
      </>
    ),
    tag: (
      <>
        Supports implementation
        <br />
        readiness
      </>
    ),
  },
  {
    name: "Operate",
    icon: (
      <svg className="size-4 text-[#004148] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    desc: (
      <>
        Observability, support,
        <br />
        status, policy, review
        <br />
        and change
        <br />
        management.
      </>
    ),
    tag: "Retention and trust",
  },
  {
    name: "Expand",
    icon: (
      <svg className="size-4 text-[#004148] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    desc: (
      <>
        Add adjacent platforms
        <br />
        and workflows when
        <br />
        value and governance
        <br />
        are established.
      </>
    ),
    tag: "Expansion without pressure",
  },
];

export default function StartWithInventory() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader light title="From discovery to expansion" />
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
          <div className="flex-1 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {steps.map((s) => (
                <div
                  key={s.name}
                  className={`p-4 flex flex-col justify-between gap-3 ${cardDark}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="size-8 bg-color-white-solid rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      {s.icon}
                    </div>
                    <p className="flex-1 zk-heading text-color-white-solid text-base font-bold leading-6">
                      {s.name}
                    </p>
                  </div>
                  <p className="zk-body text-color-cyan-90 text-xs sm:text-sm font-normal leading-5">
                    {s.desc}
                  </p>
                  <p className="zk-body text-color-cyan-67 text-xs font-semibold leading-5 pt-1 mt-auto">
                    {s.tag}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <a href="#contact-sales" className={primaryBtn}>
                Discuss your architecture
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 flex items-center justify-center">
            <img
              src={journeySideImg.src}
              alt={journeySideImg.alt}
              className="w-full h-full max-h-[520px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
