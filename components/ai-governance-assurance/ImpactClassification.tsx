import { SectionHeader, ThumbCard, thumb } from "./shared";

const cards = [
  {
    img: thumb.decisionImpact,
    title: "Decision impact",
    desc: (
      <>
        Does the AI inform, recommend,<br />
        prepare or execute a material<br />
        decision or action?
      </>
    ),
  },
  {
    img: thumb.affectedParties,
    title: "Affected parties",
    desc: (
      <>
        Internal user, worker, customer,<br />
        partner, public or other group.
      </>
    ),
  },
  {
    img: thumb.domainSensitivity,
    title: "Domain sensitivity",
    desc: (
      <>
        Finance, HR / workforce,<br />
        healthcare, public sector,<br />
        security, legal / regulatory or<br />
        other.
      </>
    ),
  },
  {
    img: thumb.dataSensitivity,
    title: "Data sensitivity",
    desc: (
      <>
        Public, internal, confidential,<br />
        personal, regulated / sensitive or<br />
        unknown.
      </>
    ),
  },
  {
    img: thumb.reversibility,
    title: "Action reversibility",
    desc: (
      <>
        Read / draft, reversible update, or<br />
        consequential and difficult-to-<br />
        reverse action.
      </>
    ),
  },
  {
    img: thumb.autonomy,
    title: "Autonomy / authority",
    desc: (
      <>
        Assist through bounded<br />
        execution, with exact<br />
        permissions and approvals.
      </>
    ),
  },
  {
    img: thumb.externalDependency,
    title: "External dependency",
    desc: (
      <>
        Third-party model, data, tool /<br />
        API or partner dependency.
      </>
    ),
  },
  {
    img: thumb.regulatoryContext,
    title: "Regulatory / policy context",
    desc: (
      <>
        Applicable AI, privacy, sector,<br />
        security or internal policy review<br />
        state.
      </>
    ),
  },
];

export default function ImpactClassification() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader
          title="Impact and use classification"
          subtitle="Transparent and multidimensional, never a black-box score."
        />
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <ThumbCard
              key={c.title}
              img={c.img}
              title={c.title}
              desc={c.desc}
              pb="pb-5"
              titleClass="zk-heading text-color-cyan-6 text-base font-bold leading-5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
