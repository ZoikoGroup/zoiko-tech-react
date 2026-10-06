import Lines from "./Lines";
import { WRAP } from "./layout";

const STEPS = [
  {
    no: "01",
    title: "Map the journey",
    body: "Channels, intent, locations, authoritative systems and owners.",
    gate: ["Gate: Journey map", "approved"],
  },
  {
    no: "02",
    title: "Map data & consent",
    body: "Sources, permissions and sensitive-data boundaries.",
    gate: ["Gate: Data / trust design", "approved"],
  },
  {
    no: "03",
    title: "Define handoffs & states",
    body: "Send, accept, reject, pending and authoritative return states.",
    gate: ["Gate: Handoff contract", "approved"],
  },
  {
    no: "04",
    title: "Select the pattern",
    body: "Coexist, integrate or modernize within actual scope.",
    gate: ["Gate: Architecture", "approved"],
  },
  {
    no: "05",
    title: "Validate failure paths",
    body: "Payment mismatches, stale context and unavailable integrations.",
    gate: ["Gate: Acceptance criteria", "met"],
  },
  {
    no: "06",
    title: "Pilot",
    body: "Bounded journey, market and accountable owner.",
    gate: ["Gate: Pilot", "reviewed"],
  },
  {
    no: "07",
    title: "Roll out & expand",
    body: "Add channels and workflows only when readiness is confirmed.",
    gate: ["Gate: Operational readiness", "confirmed"],
  },
];

export default function Implementation() {
  return (
    <section
      id="implementation"
      className="w-full bg-white py-14 font-poppins md:pb-[94px] md:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-8 md:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15.2px] lg:gap-[14.8px]">
          <span className="text-xs font-bold uppercase leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            13 / IMPLEMENTATION &amp; MODERNIZATION
          </span>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] lg:text-[36px] lg:leading-[1.15] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Start with one journey.", "Validate its handoffs before", "expansion."]}
              tablet={["Start with one journey.", "Validate its handoffs before expansion."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] text-base leading-[25.6px] text-[#587176]">
            Match the architecture to existing systems and approved product scope.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.no}
              className="flex min-h-[171.77px] items-start gap-4 rounded-[10px] border border-[rgba(142,180,183,0.33)] bg-white/[0.03] p-5 md:gap-5 md:p-[25px]"
            >
              <span className="shrink-0 text-[22px] leading-[35.2px] text-[#247780]">{s.no}</span>
              <div className="min-w-0 flex-1">
                <h3 className="-mt-px pb-3 text-lg font-bold leading-[23.4px] text-[#102d2f]">{s.title}</h3>
                <p className="text-sm leading-[22.4px] text-[#587176]">{s.body}</p>
                <p className="mt-[19px] text-xs leading-[19.2px] text-[#236d75]">
                  <Lines desktop={s.gate} tablet={s.gate} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
