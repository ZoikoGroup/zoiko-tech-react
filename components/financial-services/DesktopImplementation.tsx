import DesktopLines from "./DesktopLines";

const steps = [
  { no: "01", title: "Define the workflow", body: ["Institution, operator, market and desired", "outcome."], gate: ["Gate: Scope", "approved"] },
  { no: "02", title: "Map authoritative systems", body: ["Identify definitive sources and accountable", "owners."], gate: ["Gate: System map", "approved"] },
  { no: "03", title: "Map controls", body: ["Roles, approvals, evidence and exceptions."], gate: ["Gate: Control design", "approved"] },
  { no: "04", title: "Select the pattern", body: ["Coexist, integrate, modernize or migrate", "where justified."], gate: ["Gate: Architecture", "approved"] },
  { no: "05", title: "Validate states", body: ["Test pending, partial, rejected, failed and", "duplicate paths."], gate: ["Gate: Acceptance criteria", "met"] },
  { no: "06", title: "Pilot", body: ["Bounded workflow with observability and", "owners."], gate: ["Gate: Pilot", "reviewed"] },
  { no: "07", title: "Expand", body: ["Add markets or workflows when readiness is", "confirmed."], gate: ["Gate: Expansion", "approved"] },
];

export default function DesktopImplementation() {
  return (
    <section id="implementation" className="w-full bg-white px-10 pb-[94px] pt-[93px] xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Start with one material workflow.", "Expand with evidence."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Choose a modernization pattern that fits existing systems, product scope and operator boundaries.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-5">
          {steps.map((s) => (
            <li
              key={s.no}
              className="flex min-h-[171.77px] min-w-0 gap-5 rounded-[10px] border border-[rgba(128,166,172,0.27)] bg-[rgba(255,255,255,0.03)] p-[25px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)]"
            >
              <span className="font-poppins text-[22px] leading-[35.2px] text-[#89d4d7]">{s.no}</span>
              <div className="-mt-px min-w-0 flex-1">
                <h3 className="font-poppins text-[18px] font-bold leading-[23.4px] text-[#102d2f]">{s.title}</h3>
                <p className="mt-[13px] font-poppins text-[14px] leading-[22.4px] text-[#587176]">
                  <DesktopLines lines={s.body} />
                </p>
                <p className="mt-[9.3px] font-poppins text-[12px] leading-[19.2px] text-[#96dcde]">
                  <DesktopLines lines={s.gate} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
