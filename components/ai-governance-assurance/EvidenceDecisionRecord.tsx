import { SectionHeader, ThumbCard, thumb } from "./shared";

const cards = [
  {
    img: thumb.systemEvidence,
    title: "System evidence",
    desc: (
      <>
        Version, configuration and<br />
        deployment metadata, owner,<br />
        environment.
      </>
    ),
  },
  {
    img: thumb.evaluationEvidence,
    title: "Evaluation evidence",
    desc: (
      <>
        Scenario suite, result, version,<br />
        date, reviewer, limitations.
      </>
    ),
  },
  {
    img: thumb.policyEvidence,
    title: (
      <>
        Policy / regulatory<br />
        evidence
      </>
    ),
    desc: (
      <>
        Applicable policy and review<br />
        state. External legal claims stay<br />
        evidence-gated.
      </>
    ),
  },
  {
    img: thumb.securityEvidence,
    title: "Security / privacy evidence",
    desc: (
      <>
        Review, access and data<br />
        boundaries, approved findings<br />
        and exceptions.
      </>
    ),
  },
  {
    img: thumb.approvalEvidence,
    title: "Approval evidence",
    desc: (
      <>
        Decision, conditions, scope,<br />
        approver, effective and review<br />
        date.
      </>
    ),
  },
  {
    img: thumb.runtimeEvidence,
    title: "Runtime evidence",
    desc: (
      <>
        Incidents, exceptions, material<br />
        overrides, policy blocks,<br />
        monitoring state.
      </>
    ),
  },
  {
    img: thumb.changeEvidence,
    title: "Change evidence",
    desc: (
      <>
        What changed, why, who<br />
        approved, what was re-<br />
        evaluated, release and rollback<br />
        state.
      </>
    ),
  },
];

export default function EvidenceDecisionRecord() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader light={false} title="Evidence and decision record" />
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
      </div>
    </section>
  );
}
