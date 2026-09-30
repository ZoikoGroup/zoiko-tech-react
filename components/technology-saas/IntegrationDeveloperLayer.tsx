import { SectionHeader, cardLight, photo } from "./shared";

const stages = [
  {
    img: photo.saasBoard,
    title: "Build",
    desc: (
      <>
        APIs, SDKs, model interfaces,
        <br />
        webhooks, authentication, event
        <br />
        contracts.
      </>
    ),
    pb: "pb-11",
  },
  {
    img: photo.analytics2,
    title: "Integrate",
    desc: (
      <>
        Connectors, identity providers,
        <br />
        data exchange, integration
        <br />
        patterns, reference
        <br />
        architectures.
      </>
    ),
    pb: "pb-5",
  },
  {
    img: photo.circuit,
    title: "Test",
    desc: (
      <>
        Sandbox and test environments
        <br />
        only when externally live, plus
        <br />
        quickstarts and sample
        <br />
        integrations.
      </>
    ),
    pb: "pb-5",
  },
  {
    img: photo.decision,
    title: "Operate",
    desc: (
      <>
        Usage, metering, observability,
        <br />
        changelog, service status,
        <br />
        developer support.
      </>
    ),
    pb: "pb-11",
  },
  {
    img: photo.team,
    title: "Govern",
    desc: (
      <>
        Permissions, keys and
        <br />
        credentials, audit, policy, data
        <br />
        boundaries, environment
        <br />
        separation.
      </>
    ),
    pb: "pb-5",
  },
];

export default function IntegrationDeveloperLayer() {
  return (
    <section
      id="developer-integration"
      className="w-full px-8 md:px-32 py-24 bg-color-white-solid"
    >
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-3">
        <SectionHeader center title="Developer and integration layer" />
        <div className="self-stretch pt-2 rounded-[20px] border-l-2 border-r-2 border-teal-900 flex flex-wrap justify-center items-center gap-11 overflow-hidden">
          {stages.map((s) => (
            <div
              key={s.title}
              className={`w-72 px-5 ${s.pb} ${cardLight} flex flex-col items-center gap-1.5 overflow-hidden`}
            >
              <div className="w-72 h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7">
                <img src={s.img} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5 pt-2.5">
                {s.title}
              </p>
              <p className="zk-body text-color-cyan-35-2 text-base font-normal leading-6">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[565.11px] max-w-full h-5" />
      </div>
    </section>
  );
}
