import { SectionHeader, cardLight, darkSectionBtn, photo } from "./shared";

const patterns = [
  {
    img: photo.saasBoard3,
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
        <br />↔ Zoiko capabilities
      </>
    ),
    pb: "pb-6",
  },
  {
    img: photo.analytics3,
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
    pb: "pb-6",
  },
  {
    img: photo.circuit,
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
    meta: <>Phased workflow modernization</>,
    pb: "pb-5",
  },
  {
    img: photo.decision2,
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
    pb: "pb-6",
  },
  {
    img: photo.team,
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
    pb: "pb-5",
  },
  {
    img: photo.approval2,
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
        <br />+ trust foundations
      </>
    ),
    pb: "pb-5",
  },
];

export default function DeliveryPatterns() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          title="Delivery and modernization patterns"
          subtitle="Different estates call for different moves. You don’t have to replace everything."
        />
        <div className="self-stretch flex flex-col">
          {patterns.map((p) => (
            <div
              key={p.title}
              className={`self-stretch px-5 ${p.pb} ${cardLight} flex flex-col items-start gap-2.5 overflow-hidden`}
            >
              <div className="w-72 h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7">
                <img
                  src={p.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5 pt-2.5">
                {p.title}
              </p>
              <p className="zk-body text-color-cyan-35-2 text-base font-normal leading-6">
                {p.desc}
              </p>
              <p className="zk-body text-color-cyan-7 text-sm font-semibold leading-5 pt-1">
                {p.meta}
              </p>
            </div>
          ))}
        </div>
        <div className="self-stretch pb-3 flex flex-wrap content-start">
          <a href="#contact-sales" className={darkSectionBtn}>
            Discuss your architecture
          </a>
        </div>
      </div>
    </section>
  );
}
