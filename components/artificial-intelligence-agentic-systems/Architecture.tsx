import { WRAP } from "./layout";

const LAYERS = [
  { n: "L1", title: "Domain intent", text: "Objective and expected outcome." },
  { n: "L2", title: "Authorized context", text: "Sources, system state and provenance." },
  { n: "L3", title: "Intelligence / reasoning", text: "Approved models and domain logic abstraction." },
  { n: "L4", title: "Agent plan", text: "Proposed actions and dependencies." },
  { n: "L5", title: "Policy / identity / approval", text: "Permission and authorized human gate." },
  { n: "L6", title: "Bounded execution", text: "Least necessary tool/system action." },
  { n: "L7", title: "Authoritative result", text: "Definitive downstream state." },
  { n: "L8", title: "Evidence / observability", text: "Trace, evaluation and recovery context." },
];

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-white py-14 lg:pb-[86px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            Eight explicit architecture layers.
          </h2>
          <p className="pt-1 font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            An intention, generated message or successful tool call is not the authoritative business outcome.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-[18px] lg:gap-y-8">
          {LAYERS.map((l) => (
            <li
              key={l.n}
              className="flex w-full items-center gap-5 self-start rounded-[10px] border border-[#b4d0d6] px-6 pb-[39px] pt-[28px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)] sm:gap-[44px]"
            >
              <span className="font-poppins text-[24px] leading-[19.2px] text-[#247780]">{l.n}</span>
              <div className="flex min-w-0 flex-1 flex-col gap-[12.4px]">
                <h3 className="py-[0.59px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{l.title}</h3>
                <p className="font-poppins text-[15px] leading-[24px] text-[#587176]">{l.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
