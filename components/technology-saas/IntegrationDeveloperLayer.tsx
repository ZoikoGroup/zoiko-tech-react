import { SectionHeader, cardLight, asset } from "./shared";

const stages = [
  {
    img: asset("photo-1526374965328-7f61d4dc18c5.png"),
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
  },
  {
    img: asset("photo-1460925895917-afdab827c52f (4).png"),
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
  },
  {
    img: asset("photo-1518770660439-4636190af475 (2).png"),
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
  },
  {
    img: asset("scale-trust-dash.png"),
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
  },
];

export default function IntegrationDeveloperLayer() {
  return (
    <section
      id="developer-integration"
      className="w-full px-8 md:px-32 py-24 bg-color-white-solid"
    >
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-6">
        <SectionHeader center title="Developer and integration layer" />
        <div className="self-stretch rounded-[20px] border border-teal-900/30 p-5 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {stages.map((s) => (
              <div
                key={s.title}
                className={`h-full pb-5 ${cardLight} flex flex-col rounded-2xl overflow-hidden`}
              >
                <div className="relative w-full h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7 rounded-t-2xl overflow-hidden">
                  <img
                    src={s.img}
                    alt=""
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="px-5 pt-3 flex flex-col flex-1 gap-2">
                  <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5">
                    {s.title}
                  </p>
                  <p className="zk-body text-color-cyan-35-2 text-xs font-normal leading-5">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
