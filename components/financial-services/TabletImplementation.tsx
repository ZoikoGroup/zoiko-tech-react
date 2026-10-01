import TabletLines from "./TabletLines";

const steps = [
  { no: "01", title: "Define the workflow", lines: ["Institution, operator, market and desired", "outcome."], gate: "Gate: Scope approved" },
  { no: "02", title: "Map authoritative systems", lines: ["Identify definitive sources and", "accountable owners."], gate: "Gate: System map approved" },
  { no: "03", title: "Map controls", lines: ["Roles, approvals, evidence and", "exceptions."], gate: "Gate: Control design approved" },
  { no: "04", title: "Select the pattern", lines: ["Coexist, integrate, modernize or migrate", "where justified."], gate: "Gate: Architecture approved" },
  { no: "05", title: "Validate states", lines: ["Test pending, partial, rejected, failed and", "duplicate paths."], gate: "Gate: Acceptance criteria met" },
  { no: "06", title: "Pilot", lines: ["Bounded workflow with observability and", "owners."], gate: "Gate: Pilot reviewed" },
  { no: "07", title: "Expand", lines: ["Add markets or workflows when", "readiness is confirmed."], gate: "Gate: Expansion approved" },
];

export default function TabletImplementation() {
  return (
    <section id="implementation-t" className="w-full overflow-hidden bg-white px-[5%] pb-[94px] pt-[93px] font-poppins">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            13 / IMPLEMENTATION &amp; MODERNIZATION
          </span>
          <h2 className="pb-[0.5px] text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Start with one material workflow.", "Expand with evidence."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] text-[16px] leading-[25.6px] text-[#587176]">
            Choose a modernization pattern that fits existing systems, product scope and operator boundaries.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.no}
              className="flex gap-5 rounded-[10px] border border-[rgba(128,166,172,0.27)] bg-[rgba(255,255,255,0.03)] p-[25px]"
            >
              <span className="text-[22px] leading-[35.2px] text-[#89d4d7]">{s.no}</span>
              <article className="min-w-0 flex-1">
                <h3 className="text-[18px] font-bold leading-[23.4px] text-[#102d2f]">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-[22.4px] text-[#587176]">
                  <TabletLines lines={s.lines} />
                </p>
                <p className="mt-[18px] text-[12px] leading-[19.2px] text-[#96dcde]">{s.gate}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
