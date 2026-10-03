import TabletLines from "./TabletLines";

const steps = [
  { no: "01", title: "Define service & authority", text: "Agency, users, jurisdiction, policy owner and outcome.", gate: "Gate: Scope approved" },
  { no: "02", title: "Map systems & data", text: "Authoritative systems, sources and integration boundaries.", gate: "Gate: Architecture map approved" },
  { no: "03", title: "Define accessibility & trust", text: "Access, privacy, security, authority and support requirements.", gate: "Gate: Control design approved" },
  { no: "04", title: "Select the pattern", text: "Coexist, integrate, modernize or migrate where justified.", gate: "Gate: Architecture decision approved" },
  { no: "05", title: "Validate states & exceptions", text: "Access, errors, missing data, review, outages and recovery.", gate: "Gate: Acceptance criteria met" },
  { no: "06", title: "Pilot", text: "Bounded service and jurisdiction with controlled data.", gate: "Gate: Pilot reviewed" },
  { no: "07", title: "Deploy & operate", text: "Support, status, evidence and change-control ownership.", gate: "Gate: Operational readiness approved" },
  { no: "08", title: "Review & expand", text: "Evaluate barriers, exceptions, incidents and evidence.", gate: "Gate: Expansion approved" },
];

export default function TabletImplementation() {
  return (
    <section
      id="implementation-t"
      className="w-full overflow-hidden py-[70px] font-poppins sm:py-[93px] px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(120deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            14 / IMPLEMENTATION &amp; MODERNIZATION
          </p>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines lines={["Start with one service.", "Expand with accountable evidence."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Choose a bounded modernization path that preserves authoritative systems and service responsibilities.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.no}
              className="flex min-h-[171.77px] items-start gap-5 rounded-[10px] border border-[rgba(142,180,183,0.33)] bg-[rgba(255,255,255,0.03)] p-[25px]"
            >
              <span className="text-[22px] leading-[35.2px] text-[#89d4d7]">{s.no}</span>
              <div className="min-w-0 flex-1">
                <h3 className="-mt-px text-[18px] font-bold leading-[23.4px] text-white">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-[22.4px] text-[#c4d7d9]">{s.text}</p>
                <p className="mt-3 text-[12px] leading-[19.2px] text-[#96dcde]">{s.gate}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
