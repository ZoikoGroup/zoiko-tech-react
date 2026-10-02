import { SectionHeader, cardDark, body, gradDarkToTeal } from "./shared";

const items = [
  {
    title: "AI governance",
    desc: (
      <>
        Fragmented AI use, governance<br />
        architecture, evaluation and<br />
        approval, deployment, approved<br />
        outcome.
      </>
    ),
  },
  {
    title: "Agent governance",
    desc: (
      <>
        Agent purpose, tools and<br />
        authority, evaluation, approval,<br />
        runtime oversight, result.
      </>
    ),
  },
  {
    title: "Assurance report",
    desc: (
      <>
        System and version, scope,<br />
        scenarios and controls, results,<br />
        limitations, reviewer, decision.
      </>
    ),
  },
  {
    title: "Incident / change note",
    desc: (
      <>
        Issue or change, containment<br />
        and review, re-evaluation,<br />
        updated approval state.
      </>
    ),
  },
];

export default function TechnologyInPractice() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader
          light
          title="Technology in practice"
          subtitle="Proof appears only when approved for public use."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map((c) => (
            <div
              key={c.title}
              className="px-4 pt-5 pb-5 bg-white/6 rounded-2xl outline outline-1 -outline-offset-1 outline-color-cyan-67/35 flex flex-col items-start gap-3.5 overflow-hidden"
            >
              <div className="flex flex-col items-start gap-1.5 self-stretch">
                <div className="self-stretch">
                  <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                    {c.title}
                  </p>
                </div>
                <div className="w-full max-w-[670.68px]">
                  <p className={`${body} tracking-tight text-color-cyan-90`}>{c.desc}</p>
                </div>
              </div>
              <div className="inline-flex items-start rounded-[99px] outline outline-1 -outline-offset-1 outline-color-cyan-67 px-2.5 pt-px pb-[2.47px]">
                <span className="zk-body text-color-cyan-67 text-xs font-semibold leading-5">
                  Evidence pending
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
