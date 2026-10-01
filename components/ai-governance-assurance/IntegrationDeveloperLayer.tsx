import { SectionHeader, cardDark, body, integrationImg } from "./shared";

const cards = [
  {
    title: (
      <>
        Model / AI service
        <br />
        interfaces
      </>
    ),
    desc: (
      <>
        Exact model APIs and providers
        <br />
        only where public and approved.
      </>
    ),
    pb: "pb-6",
  },
  {
    title: "Agent / workflow identity",
    desc: (
      <>
        Named identity, owner, scopes
        <br />
        and delegated authority where
        <br />
        supported.
      </>
    ),
  },
  {
    title: "Tools / connectors",
    desc: (
      <>
        Approved tool registry,
        <br />
        permissions, environment and
        <br />
        health.
      </>
    ),
  },
  {
    title: "Events / webhooks",
    desc: (
      <>
        Governance, approval, incident
        <br />
        and change events where
        <br />
        supported.
      </>
    ),
  },
  {
    title: "Evaluation tooling",
    desc: (
      <>
        Scenario suites, test fixtures,
        <br />
        versioning and evidence at
        <br />
        approved scope.
      </>
    ),
  },
  {
    title: "Observability",
    desc: (
      <>
        Logs, events, policy decisions,
        <br />
        tool calls, approvals and state
        <br />
        where exposed.
      </>
    ),
  },
];

export default function IntegrationDeveloperLayer() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={{
        backgroundImage: "linear-gradient(157deg, #000000 0%, #0c2729 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader light title="Integration and developer layer" />
        <div className="relative self-stretch">
          <div className="w-full md:w-[582px] flex flex-wrap content-start gap-4">
            {cards.map((c, i) => (
              <div
                key={i}
                className={`w-[283px] p-5 ${c.pb ? `px-5 pt-5 ${c.pb}` : ""} ${cardDark} flex flex-col items-start gap-1.5 overflow-hidden`}
              >
                <div className="self-stretch">
                  <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                    {c.title}
                  </p>
                </div>
                <div className="w-full max-w-[670.68px] pb-[0.63px]">
                  <p className={`${body} text-color-cyan-90`}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            src={integrationImg.src}
            alt={integrationImg.alt}
            className="hidden md:block absolute left-[590px] top-0 w-[615px] h-[461px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
