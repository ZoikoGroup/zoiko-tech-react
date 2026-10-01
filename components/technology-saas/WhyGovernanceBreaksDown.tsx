import { SectionHeader, cardDark, modernizeSquareImg } from "./shared";

const points = [
  {
    title: "Reduce duplication",
    desc: (
      <>
        Shared identity, integration,
        <br />
        governance and observability
        <br />
        foundations.
      </>
    ),
  },
  {
    title: "Increase adaptability",
    desc: (
      <>
        Modular adoption and
        <br />
        coexistence patterns.
      </>
    ),
  },
  {
    title: "Improve control",
    desc: (
      <>
        Policy, access, evidence and
        <br />
        audit boundaries.
      </>
    ),
  },
  {
    title: "Accelerate delivery",
    desc: (
      <>
        Reusable APIs, SDKs, eventing
        <br />
        and implementation patterns.
      </>
    ),
  },
];

export default function WhyGovernanceBreaksDown() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={{
        backgroundImage:
          "linear-gradient(157deg, #010f14 0%, #123f44 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          light
          title="Modernization should remove fragmentation, not relocate it."
        />
        <p className="zk-body text-color-cyan-90 text-base font-normal leading-6 w-full">
          Enterprise technology estates accumulate applications, integrations,
          identity layers, policy exceptions, data boundaries and duplicated
          operational work. Zoiko Tech’s Technology &amp; SaaS solution is
          designed to modernize these estates around shared foundations so new
          <br />
          capability can be introduced without creating another disconnected
          operating layer.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-44 max-lg:gap-10">
          <div className="flex flex-wrap gap-4">
            {points.map((p) => (
              <div
                key={p.title}
                className={`w-72 p-5 flex flex-col gap-1.5 ${cardDark}`}
              >
                <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                  {p.title}
                </p>
                <p className="zk-body text-color-cyan-90 text-base font-normal leading-6">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <img
            src={modernizeSquareImg.src}
            alt={modernizeSquareImg.alt}
            className="size-80 object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
