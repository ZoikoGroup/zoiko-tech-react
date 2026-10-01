import React from "react";
import { SectionHeader, body } from "./shared";

const steps = [
  {
    icon: (
      <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    title: "Inventory AI",
    desc: (
      <>
        Register systems,<br />
        models, agents, owners,<br />
        use cases, data, tools,<br />
        deployment state.
      </>
    ),
    result: "Inventory baseline approved",
  },
  {
    icon: (
      <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
        <circle cx="7" cy="7" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Classify use / impact",
    desc: (
      <>
        Purpose, affected users,<br />
        domain, data, authority,<br />
        applicable policy.
      </>
    ),
    result: "Classification reviewed",
  },
  {
    icon: (
      <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Define controls",
    desc: (
      <>
        Authority, approvals,<br />
        boundaries, evaluation,<br />
        evidence, monitoring,<br />
        incident ownership.
      </>
    ),
    result: "Control design approved",
  },
  {
    icon: (
      <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Evaluate",
    desc: (
      <>
        Use-case-specific<br />
        scenario, policy,<br />
        security, privacy and<br />
        operational tests.
      </>
    ),
    result: (
      <>
        Criteria met or limitations<br />
        documented
      </>
    ),
  },
  {
    icon: (
      <img src="/ai-governance-assurance/rocket.svg" alt="" className="size-4" />
    ),
    title: "Approve / pilot",
    desc: (
      <>
        Record human decision,<br />
        conditions, scope and<br />
        review trigger.
      </>
    ),
    result: "Decision recorded",
  },
  {
    icon: (
      <img src="/ai-governance-assurance/eye.svg" alt="" className="size-4" />
    ),
    title: "Operate / monitor",
    desc: "Track exceptions, policy events, incidents, changes, review dates.",
    result: "Ownership confirmed",
  },
  {
    icon: (
      <img src="/ai-governance-assurance/refresh-cw.svg" alt="" className="size-4" />
    ),
    title: "Re-evaluate / expand",
    desc: "Review material changes; add use cases only when evidence and governance suffice.",
    result: "Periodic review completed",
  },
];

function IconBadge({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="size-8 bg-color-cyan-19 rounded-full flex items-center justify-center shrink-0">
      {icon}
    </div>
  );
}

export default function StartWithInventory() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-6">
        <SectionHeader title="Start with an inventory, then expand" />
        <div className="self-stretch flex flex-col gap-3.5">
          <div className="self-stretch grid grid-cols-1 md:grid-cols-5 gap-3.5">
            {steps.slice(0, 5).map((s) => (
              <div
                key={s.title}
                className="self-stretch px-4 pt-4 pb-4 bg-color-grey-97 rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.20)] outline outline-1 -outline-offset-1 outline-color-cyan-87 flex flex-col justify-between items-start gap-3"
              >
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <div className="self-stretch flex items-center gap-2.5">
                    <IconBadge icon={s.icon} />
                    <p className="flex-1 zk-heading text-color-cyan-6 text-sm font-bold leading-5">
                      {s.title}
                    </p>
                  </div>
                  <p className={`${body} text-sm text-color-cyan-35-2`}>{s.desc}</p>
                </div>
                <div className="self-stretch pt-1 border-t border-color-cyan-87/30">
                  <p className="zk-body text-color-cyan-19 text-xs font-semibold leading-5">
                    {s.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {steps.slice(5).map((s) => (
              <div
                key={s.title}
                className="self-stretch px-4 pt-4 pb-4 bg-color-grey-97 rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.20)] outline outline-1 -outline-offset-1 outline-color-cyan-87 flex flex-col justify-between items-start gap-3"
              >
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <div className="self-stretch flex items-center gap-2.5">
                    <IconBadge icon={s.icon} />
                    <p className="flex-1 zk-heading text-color-cyan-6 text-base font-bold leading-6">
                      {s.title}
                    </p>
                  </div>
                  <p className={`${body} text-color-cyan-35-2`}>{s.desc}</p>
                </div>
                <div className="self-stretch pt-1 border-t border-color-cyan-87/30">
                  <p className="zk-body text-color-cyan-19 text-sm font-semibold leading-5">
                    {s.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/ai-governance-assurance/AI rollout stock image.png"
          alt="AI rollout timeline across the enterprise"
          className="self-stretch h-72 rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
