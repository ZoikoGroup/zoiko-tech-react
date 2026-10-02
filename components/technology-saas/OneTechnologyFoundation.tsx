import { SectionHeader, cardDarkRow, gradDarkToTeal } from "./shared";

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
      style={gradDarkToTeal}
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
              className={`self-stretch px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 ${cardDarkRow}`}
            >
              <div className="w-full sm:w-60 md:w-64 shrink-0 flex items-center sm:justify-center text-left sm:text-center">
                <p className="zk-heading text-color-white-solid text-base font-bold leading-6 sm:text-center">
                  {l.name}
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="zk-body text-color-cyan-90 text-sm md:text-base font-normal leading-6">
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
