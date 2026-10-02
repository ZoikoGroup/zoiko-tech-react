import { SectionHeader, ThumbCard, thumb, body } from "./shared";

const cards = [
  {
    img: thumb.modelProvider,
    title: "Model / provider change",
    desc: (
      <>
        Review applicability of prior<br />
        evaluation; re-test affected<br />
        scenarios.
      </>
    ),
  },
  {
    img: thumb.modelVersion,
    title: "Model version change",
    desc: (
      <>
        Determine materiality and the<br />
        regression, safety and policy<br />
        evaluation required.
      </>
    ),
  },
  {
    img: thumb.promptInstruction,
    title: (
      <>
        Prompt / system<br />
        instruction
      </>
    ),
    desc: (
      <>
        Version and review if it materially<br />
        changes behavior or policy<br />
        enforcement.
      </>
    ),
  },
  {
    img: thumb.dataSource,
    title: "Data / knowledge source",
    desc: (
      <>
        Review provenance, freshness,<br />
        sensitivity, jurisdiction and<br />
        outcome impact.
      </>
    ),
  },
  {
    img: thumb.toolApi,
    title: "Tool / API / permission",
    desc: (
      <>
        Reassess action authority, failure<br />
        modes and security / privacy<br />
        boundaries.
      </>
    ),
  },
  {
    img: thumb.workflowLogic,
    title: "Workflow / approval logic",
    desc: (
      <>
        Re-evaluate authority and<br />
        separation-of-duties<br />
        implications.
      </>
    ),
  },
  {
    img: thumb.policyChange,
    title: "Policy / regulatory change",
    desc: (
      <>
        Route for qualified review;<br />
        update requirements only after<br />
        approval.
      </>
    ),
  },
];

const states = [
  ["Proposed", "Defined; not active"],
  ["Review required", "Impact and approvals identified"],
  ["Evaluating", "Required evaluation in progress"],
  ["Approved for release", "May move to defined scope"],
  ["Released", "Active with a new evidence chain"],
  ["Rollback / contained", "Previous state restored or use restricted"],
  ["Re-approval overdue", "Escalation or restriction rule applies"],
];

export default function ChangeControlReapproval() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader
          title="Change control and re-approval"
          subtitle="Material changes trigger explicit evaluation and approval, never silently inheriting old evidence."
        />
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <ThumbCard
              key={i}
              img={c.img}
              title={c.title}
              desc={c.desc}
              pb="pb-10"
              shadow="shadow-[0px_8px_18px_0px_rgba(0,31,36,0.32)]"
              titleClass="zk-heading text-color-cyan-6 text-base font-bold leading-5"
            />
          ))}
        </div>

        <div className="self-stretch pt-2">
          <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5">
            Change states
          </p>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-4 gap-3.5">
          {states.map(([name, detail]) => (
            <div
              key={name}
              className="h-16 px-3.5 py-2 bg-color-grey-97 rounded-[10px] outline outline-1 -outline-offset-1 outline-color-cyan-87 flex flex-col justify-start items-start overflow-hidden"
            >
              <p className="zk-body text-color-cyan-6 text-sm font-bold leading-6">
                {name}
              </p>
              <p className={`${body} text-sm tracking-tight whitespace-nowrap text-color-cyan-35-2`}>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
