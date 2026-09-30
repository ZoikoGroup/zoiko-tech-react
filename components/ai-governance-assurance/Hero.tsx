import React from "react";
import {
  heroImg,
  flowSteps,
  chipBase,
  chipArrow,
  chipFilled,
  primaryBtn,
  ghostBtn,
  textLink,
  gradDarkToTeal,
} from "./shared"

export default function Hero() {
  return (
    <section
      className="w-full px-8 md:px-32 pt-24 pb-28"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="relative max-w-[1180px]">
          <img
            src={heroImg.src}
            alt="AI governance dashboard"
            className="absolute -right-[150px] top-[31px] w-[732px] h-[488px] object-contain pointer-events-none select-none"
          />
          <div className="relative z-10 flex flex-col gap-2">
            {/* Badge */}
            <div>
              <div className="inline-flex items-center rounded-[99px] outline outline-1 -outline-offset-1 outline-color-cyan-67 px-2.5 pt-px pb-[2.47px]">
                <span className="zk-body text-color-cyan-67 text-xs font-semibold leading-5">
                  AI Governance &amp; Assurance
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="zk-heading text-color-white-solid text-[60px] font-bold leading-[62.56px] max-w-[602px] pt-5 pb-[0.63px]">
              Govern AI systems and agents with evidence before, during and
              after deployment.
            </h1>

            {/* Copy */}
            <p className="zk-body text-[#EEF3F6] text-lg font-normal leading-7 pt-0.5">
              Zoiko Tech’s governance architecture connects AI use cases, system<br />
              ownership, agent authority, evaluation, evidence, human approvals,<br />
              monitoring and change control so organizations can deploy intelligence<br />
              with clearer accountability.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap content-start pt-5">
              <div className="min-h-14 pr-3 pb-3">
                <a href="#contact-sales" className={primaryBtn}>
                  Discuss your AI governance model
                </a>
              </div>
              <div className="min-h-14 pr-3 pb-3">
                <a href="#responsible-ai" className={ghostBtn}>
                  Explore Responsible AI
                </a>
              </div>
              <div className="flex items-center min-h-14 pb-3">
                <a href="#agentic-automation" className={`${textLink} inline-flex items-center gap-1.5 no-underline hover:underline`}>
                  <span className="underline">Explore AI &amp; Agentic Automation</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91667 7H11.0833M11.0833 7L7.58333 3.5M11.0833 7L7.58333 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Governance flow chips */}
        <div className="py-2.5 flex flex-wrap items-center justify-center gap-2">
          {flowSteps.map((step, i) => (
            <React.Fragment key={step}>
              {i > 0 && (
                <div className="h-16 py-3 flex items-center justify-center px-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-color-cyan-67">
                    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <div
                className={`flex-1 min-w-[110px] h-16 px-1.5 py-3 rounded-[10px] outline outline-1 -outline-offset-1 outline-color-cyan-67/50 flex flex-col items-center justify-center text-center ${step === "Approval" ? chipFilled : chipBase}`}
              >
                <span className="zk-body text-color-white-solid text-sm font-semibold leading-5 whitespace-pre-line">
                  {step}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
