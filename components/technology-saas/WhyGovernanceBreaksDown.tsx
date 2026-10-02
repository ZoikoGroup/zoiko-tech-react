import { SectionHeader, cardDark, modernizeSquareImg, gradDarkToTeal } from "./shared";

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
    <section className="w-full px-8 md:px-32 py-24" style={gradDarkToTeal}>
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          light
          title="Modernization should remove fragmentation, not relocate it."
        />
        <div className="zk-body text-color-cyan-90 text-sm xl:text-base font-normal leading-6 w-full">
          <p className="whitespace-normal xl:whitespace-nowrap">
            Enterprise technology estates accumulate applications, integrations, identity layers, policy exceptions, data boundaries and duplicated operational
          </p>
          <p className="whitespace-normal xl:whitespace-nowrap">
            work. Zoiko Tech’s Technology &amp; SaaS solution is designed to modernize these estates around shared foundations so new
          </p>
          <p className="whitespace-normal xl:whitespace-nowrap">
            capability can be introduced without creating another disconnected operating layer.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 max-w-[620px]">
            {points.map((p) => (
              <div
                key={p.title}
                className={`p-5 flex flex-col gap-2 ${cardDark}`}
              >
                <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                  {p.title}
                </p>
                <p className="zk-body text-color-cyan-90 text-sm xl:text-base font-normal leading-6">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="w-[420px] h-[360px] shrink-0 flex items-center justify-center">
            <img
              src={modernizeSquareImg.src}
              alt={modernizeSquareImg.alt}
              className="w-full h-full object-contain pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
