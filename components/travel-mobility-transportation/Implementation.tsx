import Lines from "./Lines";
import { WRAP } from "./layout";

const STEPS = [
  { n: "01", t: "Define the journey", d: ["User, provider model, markets and desired", "outcome."], g: ["Gate: Scope", "approved"] },
  { n: "02", t: "Map authoritative systems", d: ["Service, partner, payment, communication and", "identity owners."], g: ["Gate: System map", "approved"] },
  { n: "03", t: "Define trust boundaries", d: ["Permission, journey data, operator and", "support context."], g: ["Gate: Control design", "approved"] },
  { n: "04", t: "Define handoffs & states", d: ["Request, response, pending, confirmation and", "evidence."], g: ["Gate: Handoff model", "approved"] },
  { n: "05", t: "Validate exception paths", d: ["Unavailable provider, changed service and", "failed communication."], g: ["Gate: Acceptance criteria", "met"] },
  { n: "06", t: "Pilot", d: ["Bounded journey, market and provider set."], g: ["Gate: Pilot", "reviewed"] },
  { n: "07", t: "Operate & expand", d: ["Add services only when readiness and support", "are confirmed."], g: ["Gate: Expansion", "approved"] },
];

export default function Implementation() {
  return (
    <section id="implementation" className="w-full bg-white py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Start with one journey.", "Expand through validated handoffs."]} />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-inter text-base leading-[25.6px] text-[#587176]">
            Match the architecture to actual providers, supported product scope and accountable operations.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="flex gap-5 rounded-[10px] border border-solid border-[rgba(142,180,183,0.33)] bg-[rgba(255,255,255,0.03)] p-[25px] lg:h-[171.77px]"
            >
              <span className="font-inter text-[22px] leading-[35.2px] text-[#247780]">{s.n}</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-poppins text-lg font-bold leading-[23.4px] text-[#102d2f]">{s.t}</h3>
                <p className="mt-3 font-inter text-sm leading-[22.4px] text-[#587176]">
                  {s.d.join(" ")}
                </p>
                <p className="mt-[19px] font-inter text-xs leading-[19.2px] text-[#236d75]">
                  {s.g.join(" ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
