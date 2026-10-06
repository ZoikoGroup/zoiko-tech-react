import Lines from "./Lines";
import { WRAP } from "./layout";

const CASES = [
  { ref: "RE-101", state: "Assigned", title: "Accommodation inquiry", owner: "Guest operations", step: "Confirm missing service information" },
  { ref: "RE-102", state: "Pending confirmation", title: "Provider handoff", owner: "Integration owner", step: "Check authoritative transaction response" },
  { ref: "RE-103", state: "Needs review", title: "Payment / property mismatch", owner: "Finance reviewer", step: "Review both source-system outcomes" },
];

export default function Operations() {
  return (
    <section
      id="operations"
      className="w-full pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[94px] lg:pt-[93px]"
      style={{ backgroundImage: "linear-gradient(120.00586775576295deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <div className="hidden h-5 lg:block" aria-hidden="true" />
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Every exception needs", "an owner and a recovery path."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Keep the request, receiving provider, state and next action visible.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <li key={c.ref} className="min-w-0">
              <article className="flex h-full flex-col rounded-xl border border-[rgba(123,170,177,0.4)] bg-[rgba(255,255,255,0.03)] p-6 lg:p-7">
                <div className="flex items-start justify-between gap-3 pb-[25px]">
                  <span className="pt-[3px] font-inter text-xs leading-[19.2px] text-[#aacdd0]">{c.ref}</span>
                  <span className="whitespace-nowrap rounded-full border border-[rgba(125,184,189,0.47)] px-2.5 pb-[4.59px] pt-[3px] font-inter text-[11px] leading-[17.6px] text-[#c5ecee]">
                    {c.state}
                  </span>
                </div>
                <h3 className="pb-[12px] font-poppins text-xl font-bold leading-[28.6px] text-white lg:text-[22px]">{c.title}</h3>
                <div className="flex flex-col gap-[6.5px] border-t border-[rgba(136,184,191,0.2)] pb-[21.09px] pt-5">
                  <span className="font-inter text-[10px] leading-4 tracking-[1.3px] text-[#96c3c8]">ACCOUNTABLE OWNER</span>
                  <span className="font-poppins text-sm font-bold leading-[22.4px] text-white">{c.owner}</span>
                </div>
                <div className="flex flex-col gap-[5px] border-l-2 border-[#80d1d5] bg-[rgba(93,183,191,0.05)] p-4">
                  <span className="font-inter text-[10px] leading-4 tracking-[1.3px] text-[#96c3c8]">NEXT RECOVERY STEP</span>
                  <p className="font-inter text-[15px] leading-6 text-[#eefafa]">{c.step}</p>
                </div>
                <p className="pb-[0.59px] pt-[21px] font-inter text-[11px] leading-[17.6px] text-[#c4d7d9]">
                  Synthetic specimen · Source confirmation remains explicit
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
