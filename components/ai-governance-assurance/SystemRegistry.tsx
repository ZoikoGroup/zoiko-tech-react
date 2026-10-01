import { SectionHeader, thCell, thText, tdCell, tdTextStrong, tdText, pillGreen, pillGreenText, pillAmber, pillAmberText, pillRed, pillRedText, primaryBtn, gradDarkToTeal } from "./shared";

const registryRows = [
  ["System / use-case ID", "Stable identifier."],
  ["Name / purpose", "Concise outcome and business context."],
  ["Owner", "Accountable business owner, plus technical owner where appropriate."],
  ["System type", "Assistive AI, model service, agent / workflow, domain AI, embedded AI or other approved taxonomy."],
  ["Model / provider / version", "Only where permitted and known. Unknown remains visible."],
  ["Environment / deployment", "Development, test, pilot, production or retired."],
  ["Users / affected parties", "Internal, customer, partner or public-facing context."],
  ["Data / sensitivity", "High-level approved categories. Never sensitive production data."],
  ["Authority mode", "Assist, recommend, prepare, approval-required or bounded execution."],
  ["Governance status", "Draft, Review required, Pilot approved, Production approved, Restricted, Suspended, Retired."],
];

const pillWhite =
  "inline-flex items-start rounded-md bg-color-white-solid px-2 pb-[1.47px]";
const pillWhiteText =
  "zk-body text-color-black-solid text-xs font-semibold leading-5";

const specimenRows: Array<Array<React.ReactNode>> = [
  [
    "Sample assistant A",
    "Summarize cases",
    "Ops lead",
    "Assistive AI",
    "v1.2 · Production",
    "Assist",
    <span key="p" className={pillGreen}>
      <span className={pillGreenText}>Production approved</span>
    </span>,
    "Specimen date",
  ],
  [
    "Sample agent B",
    "Prepare requests",
    "Finance owner",
    "Agent",
    "v0.4 · Pilot",
    "Prepare",
    <span key="a" className={pillAmber}>
      <span className={pillAmberText}>Pilot approved</span>
    </span>,
    "Specimen date",
  ],
  [
    "Sample model C",
    "Unknown",
    <span key="om" className={pillRed}>
      <span className={pillRedText}>Owner missing</span>
    </span>,
    "Embedded AI",
    "Unknown",
    "Unknown",
    <span key="rr" className={pillWhite}>
      <span className={pillWhiteText}>Review required</span>
    </span>,
    "Overdue",
  ],
];

const specimenHeights = ["w-[160px]", "w-[150px]", "w-[140px]", "w-[130px]", "w-[150px]", "w-[110px]", "w-[170px]", "w-[130px]"];
const specimenHeaders = ["System", "Purpose", "Owner", "Type", "Version / env", "Authority", "Status", "Next review"];

export default function SystemRegistry() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-3">
        <SectionHeader
          light
          title="AI system and use-case registry"
          subtitle="One inventory for systems, models, agents and use cases, with owners and status visible."
        />

        {/* Registry fields table */}
        <div className="self-stretch pt-2 rounded-xl outline outline-1 -outline-offset-1 outline-color-cyan-67/35 overflow-hidden">
          <div className="min-w-[600px] overflow-x-auto">
            <div className="flex">
              <div className={`w-64 shrink-0 ${thCell}`}>
                <p className={thText}>Registry field</p>
              </div>
              <div className={`flex-1 ${thCell}`}>
                <p className={thText}>Required content</p>
              </div>
            </div>
            {registryRows.map(([field, content]) => (
              <div key={field} className="flex">
                <div className={`w-64 shrink-0 ${tdCell}`}>
                  <p className={tdTextStrong}>{field}</p>
                </div>
                <div className={`flex-1 ${tdCell}`}>
                  <p className={tdText}>{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specimen view */}
        <div className="self-stretch pt-2 rounded-xl outline outline-1 -outline-offset-1 outline-color-cyan-67/35 overflow-hidden">
          <div className="min-w-[600px] overflow-x-auto">
            <div className="px-3.5 pt-1.5 pb-2 opacity-90">
              <p className="zk-body text-color-white-solid text-xs font-normal leading-5">
                Registry view (specimen data)
              </p>
            </div>
            <div className="flex">
              {specimenHeaders.map((h, i) => (
                <div key={h} className={`${specimenHeights[i]} shrink-0 ${thCell}`}>
                  <p className={thText}>{h}</p>
                </div>
              ))}
            </div>
            {specimenRows.map((row, ri) => (
              <div key={ri} className="flex">
                {row.map((cell, ci) => (
                  <div key={ci} className={`${specimenHeights[ci]} shrink-0 ${tdCell}`}>
                    {typeof cell === "string" ? (
                      <p className={ci === 0 ? tdTextStrong : tdText}>{cell}</p>
                    ) : (
                      cell
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <a href="#contact-sales" className={primaryBtn}>
            Review the registry model
          </a>
        </div>
      </div>
    </section>
  );
}
