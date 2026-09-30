import { SectionHeader, body } from "./shared";

const steps = [
  {
    icon: "▲",
    title: "Inventory AI",
    desc: (
      <>
        Register systems,
        <br />
        models, agents, owners,
        <br />
        use cases, data, tools,
        <br />
        deployment state.
      </>
    ),
    result: "Inventory baseline approved",
    pb: "pb-10",
  },
  {
    icon: "●",
    title: "Classify use / impact",
    desc: (
      <>
        Purpose, affected users,
        <br />
        domain, data, authority,
        <br />
        applicable policy.
      </>
    ),
    result: "Classification reviewed",
    pb: "pb-16",
  },
  {
    icon: "■",
    title: "Define controls",
    desc: (
      <>
        Authority, approvals,
        <br />
        boundaries, evaluation,
        <br />
        evidence, monitoring,
        <br />
        incident ownership.
      </>
    ),
    result: "Control design approved",
    pb: "pb-10",
  },
  {
    icon: "✓",
    title: "Evaluate",
    desc: (
      <>
        Use-case-specific
        <br />
        scenario, policy,
        <br />
        security, privacy and
        <br />
        operational tests.
      </>
    ),
    result: (
      <>
        Criteria met or limitations
        <br />
        documented
      </>
    ),
  },
  {
    icon: "✎",
    title: "Approve / pilot",
    desc: (
      <>
        Record human decision,
        <br />
        conditions, scope and
        <br />
        review trigger.
      </>
    ),
    result: "Decision recorded",
    pb: "pb-16",
  },
  {
    icon: "◉",
    title: "Operate / monitor",
    desc: (
      <>
        Track exceptions, policy events, incidents, changes, review dates.
      </>
    ),
    result: "Ownership confirmed",
    pb: "pb-11",
    wide: true,
  },
  {
    icon: "↻",
    title: "Re-evaluate / expand",
    desc: (
      <>
        Review material changes; add use cases only when evidence and
        governance suffice.
      </>
    ),
    result: "Periodic review completed",
    wide: true,
  },
];

function IconBadge({ icon }: { icon: string }) {
  return (
    <div className="size-8 bg-color-cyan-7 rounded-2xl flex items-center justify-center">
      <span className="text-white text-xs leading-none">{icon}</span>
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
                className={`self-stretch px-4 pt-4 ${s.pb} bg-color-grey-97 rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.20)] outline outline-1 -outline-offset-1 outline-color-cyan-87 flex flex-col items-start gap-[2.90px]`}
              >
                <div className="self-stretch flex items-center gap-3">
                  <IconBadge icon={s.icon} />
                  <p className="flex-1 zk-heading text-color-cyan-6 text-base font-bold leading-6">
                    {s.title}
                  </p>
                </div>
                <p className={`${body} text-color-cyan-35-2`}>{s.desc}</p>
                <div className="self-stretch pt-1">
                  <p className="zk-body text-color-cyan-7 text-sm font-semibold leading-5">
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
                className={`self-stretch px-4 pt-4 ${s.pb} bg-color-grey-97 rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.20)] outline outline-1 -outline-offset-1 outline-color-cyan-87 flex flex-col items-start gap-[3.10px]`}
              >
                <div className="self-stretch flex items-center gap-3">
                  <IconBadge icon={s.icon} />
                  <p className="flex-1 zk-heading text-color-cyan-6 text-base font-bold leading-6">
                    {s.title}
                  </p>
                </div>
                <p className={`${body} text-color-cyan-35-2`}>{s.desc}</p>
                <div className="self-stretch pt-1">
                  <p className="zk-body text-color-cyan-7 text-sm font-semibold leading-5">
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
          className="self-stretch h-72 rounded-2xl border border-teal-300/75 object-cover"
        />
      </div>
    </section>
  );
}
