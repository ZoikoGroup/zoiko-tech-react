import { SectionHeader, cardLight, photo, scaleTrustImg, extendImg } from "./shared";

const rowCards = [
  {
    img: photo.saasBoard2,
    title: "Modernize core work",
    desc: (
      <>
        Upgrade business workflows without
        <br />
        forcing every system into one
        <br />
        replacement program.
      </>
    ),
    proof: (
      <>
        Proof: enterprise SaaS, workflow
        <br />
        orchestration, integration, migration
        <br />
        patterns
      </>
    ),
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
    desc: (
      <>
        Apply AI to real operating domains with
        <br />
        explicit control and evidence.
      </>
    ),
    proof: (
      <>
        Proof: domain AI, governed agents,
        <br />
        human approvals, evaluation, audit
      </>
    ),
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
    desc: (
      <>
        <span className="block whitespace-nowrap">Give teams reusable identity, APIs, events,</span>
        <span className="block whitespace-nowrap">data, observability and controls.</span>
      </>
    ),
    proof: (
      <>
        Proof: developer platform, integration
        <br />
        layer, security, identity, cloud
        <br />
        foundations
      </>
    ),
  },
  {
    img: photo.decision,
    title: "Run across functions",
    desc: (
      <>
        Connect finance, workforce, revenue,
        <br />
        communications and compliance on
        <br />
        consistent foundations.
      </>
    ),
    proof: (
      <>
        Proof: cross-platform operating
        <br />
        model and shared governance
      </>
    ),
  },
];

export default function OutcomeArchitecture() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          title="Outcome architecture"
          subtitle="Six outcomes, each with the capability that proves it."
        />

        {/* Row 1: 4 outcome cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rowCards.map((c, i) => (
            <div
              key={i}
              className={`pb-5 ${cardLight} flex flex-col rounded-2xl overflow-hidden`}
            >
              <div className="relative w-full h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7 rounded-t-2xl overflow-hidden">
                <img
                  src={c.img}
                  alt=""
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="px-5 pt-3 flex flex-col flex-1 gap-2">
                <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5">
                  {c.title}
                </p>
                <p className="zk-body text-color-cyan-35-2 text-xs font-normal leading-5">
                  {c.desc}
                </p>
                <p className="zk-body text-color-cyan-19 text-xs font-semibold leading-5 pt-1 mt-auto">
                  {c.proof}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 2 wide outcome cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className={`pb-5 ${cardLight} flex flex-col rounded-2xl overflow-hidden`}>
            <div className="relative w-full h-44 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7 rounded-t-2xl overflow-hidden">
              <img
                src={scaleTrustImg.src}
                alt={scaleTrustImg.alt}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="px-5 pt-3 flex flex-col flex-1 gap-2">
              <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5">
                Scale with trust
              </p>
              <p className="zk-body text-color-cyan-35-2 text-xs sm:text-sm font-normal leading-5">
                Support procurement, security, privacy, compliance, resilience and
                <br />
                accessibility review.
              </p>
              <p className="zk-body text-color-cyan-19 text-xs font-semibold leading-5 pt-1 mt-auto">
                Proof: Trust Center evidence, policy
                <br />
                architecture, operational status
              </p>
            </div>
          </div>

          <div className={`pb-5 ${cardLight} flex flex-col rounded-2xl overflow-hidden`}>
            <div className="relative w-full h-44 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7 rounded-t-2xl overflow-hidden">
              <img
                src={extendImg.src}
                alt={extendImg.alt}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="px-5 pt-3 flex flex-col flex-1 gap-2">
              <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5">
                Extend instead of restart
              </p>
              <p className="zk-body text-color-cyan-35-2 text-xs sm:text-sm font-normal leading-5">
                Add adjacent Zoiko capabilities to an existing estate over time.
              </p>
              <p className="zk-body text-color-cyan-19 text-xs font-semibold leading-5 pt-1 mt-auto">
                Proof: expansion routes,
                <br />
                interoperable platform evidence,
                <br />
                modular rollout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
