import { WRAP } from "./layout";
import Lines from "./Lines";

const STEPS = [
  { n: "01", title: "Map property journeys", body: "Sources, intent, provider and responsible systems.", gate: "Gate: Journey map approved" },
  { n: "02", title: "Map ownership", body: "Platform, property, financial and service boundaries.", gate: "Gate: Ownership map approved" },
  { n: "03", title: "Map data & privacy", body: "Identity, purpose and sensitive-data limits.", gate: "Gate: Trust design approved" },
  { n: "04", title: "Define handoff states", body: "Send, accept, reject, pending and definitive returns.", gate: "Gate: Handoff contract approved" },
  { n: "05", title: "Validate exceptions", body: "Stale availability, mismatches and integration failures.", gate: "Gate: Acceptance criteria met" },
  { n: "06", title: "Pilot", body: "Bounded market and journey with accountable owners.", gate: "Gate: Pilot reviewed" },
  { n: "07", title: "Expand", body: "Add providers only when product and support are ready.", gate: "Gate: Expansion approved" },
];

export default function Implementation() {
  return (
    <section id="implementation" className="w-full bg-white py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Start with one property journey.", "Validate ownership and return states."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-base leading-[25.6px] text-[#587176]">
            Preserve existing authoritative systems while evaluating a bounded integration.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="flex gap-5 rounded-[10px] border border-solid border-[rgba(142,180,183,0.33)] bg-[rgba(255,255,255,0.03)] p-[25px] lg:h-[171.77px]"
            >
              <span className="font-inter text-[22px] leading-[35.2px] text-[#247780]">{s.n}</span>
              <div className="flex min-w-0 flex-1 flex-col lg:-mt-px">
                <h3 className="font-poppins text-lg font-bold leading-[23.4px] text-[#102d2f]">{s.title}</h3>
                <p className="mt-3 font-inter text-sm leading-[22.4px] text-[#587176]">{s.body}</p>
                <p className="mt-[19px] max-w-[160px] font-inter text-xs leading-[19.2px] text-[#236d75]">{s.gate}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
