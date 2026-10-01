import { SectionHeader, cardLight, asset } from "./shared";

const patterns = [
  {
    img: asset("photo-1550751827-4bd374c3f58b.png"),
    title: "Coexist",
    desc: (
      <>
        Preserve critical legacy systems
        <br />
        while introducing new capability.
      </>
    ),
    meta: (
      <>
        Existing systems ↔ integration layer
        <br />
        ↔ Zoiko capabilities
      </>
    ),
  },
  {
    img: asset("photo-1461749280684-dccba630e2f6.png"),
    title: "Integrate",
    desc: (
      <>
        A shared API, event and identity
        <br />
        layer across current tools.
      </>
    ),
    meta: (
      <>
        Hub-and-spoke or event mesh with
        <br />
        governed interfaces
      </>
    ),
  },
  {
    img: asset("photo-1451187580459-43490279c0fa.png"),
    title: "Modernize in place",
    desc: (
      <>
        Improve a workflow without
        <br />
        replacing the whole application
        <br />
        estate.
      </>
    ),
    meta: "Phased workflow modernization",
  },
  {
    img: asset("photo-1526374965328-7f61d4dc18c5.png"),
    title: "Migrate",
    desc: (
      <>
        Move a defined workload or
        <br />
        function to a Zoiko platform.
      </>
    ),
    meta: (
      <>
        Discovery → mapping → pilot →
        <br />
        migration → verification
      </>
    ),
  },
  {
    img: asset("photo-1460925895917-afdab827c52f (4).png"),
    title: "Consolidate",
    desc: (
      <>
        Reduce duplicated SaaS tools
        <br />
        and control surfaces.
      </>
    ),
    meta: (
      <>
        Capability rationalization and shared
        <br />
        services
      </>
    ),
  },
  {
    img: asset("photo-1518770660439-4636190af475 (2).png"),
    title: "Build new",
    desc: (
      <>
        Create a new digital product or
        <br />
        operating capability.
      </>
    ),
    meta: (
      <>
        Developer Platform + APIs + identity
        <br />
        + trust foundations
      </>
    ),
  },
];

export default function DeliveryPatterns() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          title="Delivery and modernization patterns"
          subtitle="Different estates call for different moves. You don’t have to replace everything."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {patterns.map((p, i) => (
            <div
              key={i}
              className={`pb-5 ${cardLight} flex flex-col rounded-2xl overflow-hidden`}
            >
              <div className="relative w-full h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7 rounded-t-2xl overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="px-5 pt-3 flex flex-col flex-1 gap-2">
                <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5">
                  {p.title}
                </p>
                <p className="zk-body text-color-cyan-35-2 text-xs font-normal leading-5">
                  {p.desc}
                </p>
                <p className="zk-body text-color-cyan-19 text-xs font-semibold leading-5 pt-1 mt-auto">
                  {p.meta}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex">
          <a
            href="#contact-sales"
            className="inline-flex items-center min-h-12 px-6 bg-color-cyan-19 rounded-[10px] outline outline-2 -outline-offset-2 outline-color-cyan-19 zk-body text-color-white-solid text-base font-semibold hover:bg-color-cyan-7 transition-colors duration-200"
          >
            Discuss your architecture
          </a>
        </div>
      </div>
    </section>
  );
}
