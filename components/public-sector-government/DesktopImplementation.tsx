import DesktopLines from "./DesktopLines";

const steps = [
  { no: "01", title: "Define service & authority", body: "Agency, users, jurisdiction, policy owner and outcome.", gate: "Gate: Scope approved", gateW: "w-[121px]" },
  { no: "02", title: "Map systems & data", body: "Authoritative systems, sources and integration boundaries.", gate: "Gate: Architecture map approved", gateW: "w-[177px]" },
  { no: "03", title: "Define accessibility & trust", body: "Access, privacy, security, authority and support requirements.", gate: "Gate: Control design approved", gateW: "w-[164px]" },
  { no: "04", title: "Select the pattern", body: "Coexist, integrate, modernize or migrate where justified.", gate: "Gate: Architecture decision approved", gateW: "w-[197px]" },
  { no: "05", title: "Validate states & exceptions", body: "Access, errors, missing data, review, outages and recovery.", gate: "Gate: Acceptance criteria met", gateW: "w-[158px]" },
  { no: "06", title: "Pilot", body: "Bounded service and jurisdiction with controlled data.", gate: "Gate: Pilot reviewed", gateW: "w-[108px]" },
  { no: "07", title: "Deploy & operate", body: "Support, status, evidence and change-control ownership.", gate: "Gate: Operational readiness approved", gateW: "w-[204px]" },
  { no: "08", title: "Review & expand", body: "Evaluate barriers, exceptions, incidents and evidence.", gate: "Gate: Expansion approved", gateW: "w-[143px]" },
];

export default function DesktopImplementation() {
  return (
    <section
      id="implementation"
      className="flex w-full flex-col items-center pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(120deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[35.99px]">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Start with one service.", "Expand with accountable evidence."]} />
          </h2>
          <p className="pt-[5.2px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines lines={["Choose a bounded modernization path that preserves authoritative systems and service responsibilities."]} />
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-5">
          {steps.map((s) => (
            <li
              key={s.no}
              className="flex min-h-[171.77px] items-start gap-5 rounded-[10px] border border-[rgba(142,180,183,0.33)] bg-[rgba(255,255,255,0.03)] p-[25px]"
            >
              <span className="text-[22px] leading-[35.2px] text-[#89d4d7]">{s.no}</span>
              <div className="min-w-0 flex-1">
                <h3 className="-mt-px text-[18px] font-bold leading-[23.4px] text-white">{s.title}</h3>
                <p className="mt-[12px] text-[14px] leading-[22.4px] text-[#c4d7d9]">{s.body}</p>
                <p className={`mt-[19px] text-[12px] leading-[19.2px] text-[#96dcde] ${s.gateW}`}>{s.gate}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
