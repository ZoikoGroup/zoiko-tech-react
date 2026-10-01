import { SectionHeader, cardDarkRow } from "./shared";

const layers = [
  {
    name: "Industry / Experience",
    desc: "Industry-specific and user-facing experiences built on controlled platform foundations.",
  },
  {
    name: "Platforms",
    desc: "Enterprise, workforce, financial, communications, compliance, telecom and commerce platforms as approved.",
  },
  {
    name: "Operations",
    desc: "Observability, metering, audit, service health, administration, support.",
  },
  {
    name: "Data & Integration",
    desc: "APIs, SDKs, events, webhooks, data exchange, connectors, orchestration.",
  },
  {
    name: "Trust & Control",
    desc: "Identity, access, security, privacy, policy, evidence, responsible AI.",
  },
  {
    name: "Intelligence",
    desc: "Domain-specific AI, models, agents, knowledge, reasoning, evaluation.",
  },
];

export default function OneTechnologyFoundation() {
  return (
    <section
      className="w-full px-8 md:px-32 pt-24 pb-28"
      style={{
        backgroundImage:
          "linear-gradient(157deg, #010f14 0%, #0d353b 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          light
          title="One technology foundation"
          subtitle="Six layers, from intelligence to the experiences built on top. Read from the bottom layer up."
        />
        <div className="self-stretch pt-1 flex flex-col gap-2.5">
          {layers.map((l) => (
            <div
              key={l.name}
              className={`self-stretch px-4 pt-3 pb-3.5 flex items-center gap-3 ${cardDarkRow}`}
            >
              <div className="w-12 h-6 shrink-0" />
              <div className="w-52 shrink-0">
                <p className="zk-heading text-color-white-solid text-base font-bold leading-6">
                  {l.name}
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="zk-body text-color-cyan-90 text-base font-normal leading-6">
                  {l.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
