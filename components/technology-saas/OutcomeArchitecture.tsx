import { SectionHeader, cardLight, photo, scaleTrustImg, extendImg } from "./shared";

const rowCards = [
  {
    img: photo.saasBoard2,
    title: "Modernize core work",
    desc: "Upgrade business workflows without forcing every system into one replacement program.",
    proof: (
      <>
        Proof: enterprise SaaS, workflow
        <br />
        orchestration, integration, migration
        <br />
        patterns
      </>
    ),
    pb: "pb-10",
  },
  {
    img: photo.circuit2,
    title: (
      <>
        Build governed
        <br />
        intelligence
      </>
    ),
    desc: "Apply AI to real operating domains with explicit control and evidence.",
    proof: (
      <>
        Proof: domain AI, governed agents,
        <br />
        human approvals, evaluation, audit
      </>
    ),
    pb: "pb-5",
  },
  {
    img: photo.analytics2,
    title: (
      <>
        Create shared platform
        <br />
        foundations
      </>
    ),
    desc: "Give teams reusable identity,APIs, events, data, observability and controls.",
    proof: (
      <>
        Proof: developer platform, integration
        <br />
        layer, security, identity, cloud
        <br />
        foundations
      </>
    ),
    pb: "pb-5",
  },
  {
    img: photo.decision,
    title: "Run across functions",
    desc: "Connect finance, workforce, revenue, communications and compliance on consistent foundations.",
    proof: (
      <>
        Proof: cross-platform operating
        <br />
        model and shared governance
      </>
    ),
    pb: "pb-9",
  },
];

export default function OutcomeArchitecture() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          title="Outcome architecture"
          subtitle="Six outcomes, each with the capability that proves it."
        />
        {/* Row 1: four compact outcome cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[19.5px]">
          {rowCards.map((c, i) => (
            <div
              key={i}
              className={`px-5 ${c.pb} ${cardLight} flex flex-col gap-1.5 overflow-hidden`}
            >
              <div className="relative w-full h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7">
                <img
                  src={c.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5 pt-2.5">
                {c.title}
              </p>
              <p className="zk-body text-color-cyan-35-2 text-xs font-normal leading-6">
                {c.desc}
              </p>
              <p className="zk-body text-color-cyan-7 text-xs font-semibold leading-5 pt-1">
                {c.proof}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: two wide cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className={`px-5 pb-5 ${cardLight} flex flex-col gap-1.5 overflow-hidden`}>
            <div className="self-stretch h-40 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7">
              <img
                src={scaleTrustImg.src}
                alt={scaleTrustImg.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5 pt-2.5">
              Scale with trust
            </p>
            <p className="zk-body text-color-cyan-35-2 text-base font-normal leading-6">
              Support procurement, security, privacy, compliance, resilience and
              accessibility review.
            </p>
            <p className="zk-body text-color-cyan-7 text-xs font-semibold leading-5 pt-1">
              Proof: Trust Center evidence, policy
              <br />
              architecture, operational status
            </p>
          </div>
          <div className={`px-5 pb-6 ${cardLight} flex flex-col gap-1.5 overflow-hidden`}>
            <div className="w-full h-44 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7">
              <img
                src={extendImg.src}
                alt={extendImg.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5 pt-2.5">
              Extend instead of restart
            </p>
            <p className="zk-body text-color-cyan-35-2 text-base font-normal leading-6">
              Add adjacent Zoiko capabilities to an existing estate over time.
            </p>
            <p className="zk-body text-color-cyan-7 text-xs font-semibold leading-5 pt-1">
              Proof: expansion routes,
              <br />
              interoperable platform evidence,
              <br />
              modular rollout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
