import { WRAP } from "./layout";
import Lines from "./Lines";

const layers = [
  { l: "L1", t: "User / traveler / operator", d: "User type, market and objective at minimum necessary scope.", q: "Who needs the service?", bg: "bg-[#f4f9f9]" },
  { l: "L2", t: "Intent / service objective", d: "High-level travel, mobility or life-orchestration need.", q: "What is the user trying to do?", bg: "bg-[#f4f9f9]" },
  { l: "L3", t: "Provider / authoritative system", d: "The actual system that owns availability and definitive service state.", q: "Who owns the service?", bg: "bg-[#f4f9f9]" },
  { l: "L4", t: "Workflow / orchestration", d: "Supported routing, preparation, approval and handoff.", q: "How is it coordinated?", bg: "bg-[#f4f9f9]" },
  { l: "L5", t: "Operations / status", d: "Current provider state, exception, owner and support route.", q: "What is happening now?", bg: "bg-[#f4f9f9]" },
  { l: "L6", t: "Shared controls", d: "Identity, purpose, permission, security and provenance.", q: "How is it controlled?", bg: "bg-[#d7f2fd]" },
  { l: "L7", t: "Outcome / evidence", d: "Definitive provider reference, escalation and retained records.", q: "Can the journey be verified?", bg: "bg-[#bbeafd]" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-white py-14 lg:pb-[108px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-4xl lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Coordinate the journey.", "Keep service authority at its source."]} />
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#587176] xl:whitespace-nowrap">
            Seven operating layers clarify provider responsibility and the boundaries of supported orchestration.
          </p>
        </div>
        <ol className="flex flex-col gap-2.5 pt-2.5">
          {layers.map((r) => (
            <li
              key={r.l}
              className={`grid grid-cols-[48px_minmax(0,1fr)] items-center gap-x-4 gap-y-1 rounded-lg border border-[#ddeaea] px-[22px] py-[18px] lg:h-[70.8px] lg:grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-5 ${r.bg}`}
            >
              <span className="row-span-3 flex flex-col items-center self-center rounded-[30px] border border-[#90b8bd] p-[5px] font-inter text-[13px] leading-[20.8px] text-[#247780] lg:row-span-1">
                {r.l}
              </span>
              <h3 className="font-poppins text-base font-bold leading-[20.8px] text-[#102d2f]">{r.t}</h3>
              <p className="font-inter text-sm leading-[22.4px] text-[#587176] lg:whitespace-nowrap">{r.d}</p>
              <strong className="font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780]">{r.q}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
