import Lines from "./Lines";
import { WRAP } from "./layout";

const STEPS = [
  { no: "01", title: "Define objective", text: "Research or learning objective, people and human authority.", gate: "Gate: Scope approved" },
  { no: "02", title: "Map sources & systems", text: "Content, data, artifacts, identity and institutional systems.", gate: "Gate: Architecture map approved" },
  { no: "03", title: "Define governance", text: "Rights, privacy, AI, citation, retention and review.", gate: "Gate: Governance approved" },
  { no: "04", title: "Define states", text: "Draft, exploratory, reviewed, approved, published and superseded.", gate: "Gate: State model approved" },
  { no: "05", title: "Validate behavior", text: "Missing or conflicting sources, restricted access and insufficient evidence.", gate: "Gate: Acceptance criteria met" },
  { no: "06", title: "Pilot", text: "One bounded workflow with controlled, approved data.", gate: "Gate: Pilot reviewed" },
  { no: "07", title: "Operate & expand", text: "Add scope when rights, state and support readiness are approved.", gate: "Gate: Expansion approved" },
];

export default function Adoption() {
  return (
    <section
      id="adoption"
      className="w-full py-14 md:py-16 lg:pt-[93px] lg:pb-[94px]"
      style={{ backgroundImage: "linear-gradient(120.91deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] leading-[1.15] font-bold tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Start bounded.", "Expand with reviewed evidence."]} />
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Seven stages connect architecture decisions to practical adoption.
          </p>
        </div>
        <ol className="flex flex-col gap-[14px]">
          {STEPS.map((s) => (
            <li
              key={s.no}
              className="grid grid-cols-[44px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 rounded-[10px] border border-[#80a6ac]/[0.27] bg-white/[0.03] p-[25px] md:grid-cols-[56px_220px_minmax(0,1fr)] lg:min-h-[70px] lg:grid-cols-[170px_279px_minmax(0,1fr)_150px] lg:gap-0 lg:py-0"
            >
              <span className="font-inter text-[22px] leading-[35.2px] text-[#89d4d7]">{s.no}</span>
              <h3 className="font-poppins text-lg leading-[23.4px] font-bold text-white">{s.title}</h3>
              <p className="col-start-2 font-inter text-sm leading-[22.4px] text-[#c4d7d9] md:col-span-2 lg:col-span-1 lg:col-start-auto lg:py-[14px] lg:pr-8">
                {s.text}
              </p>
              <strong className="col-start-2 font-poppins text-xs leading-[19.2px] font-bold text-[#96dcde] md:col-span-2 lg:col-span-1 lg:col-start-auto">
                {s.gate}
              </strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
