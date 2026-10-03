import Lines from "./Lines";
import { WRAP } from "./layout";

const rows = [
  ["Intent", "Sample accommodation service request"],
  ["System of record", "External provider / transaction system"],
  ["Context passed", "Minimum necessary specimen reference"],
  ["Transfer state", "Pending confirmation"],
  ["Return state", "Not received"],
  ["Owner", "Integration operations"],
  ["Recovery", "Approved support or retry path required"],
];

export default function Transactions() {
  return (
    <section
      id="transactions"
      className="w-full bg-[linear-gradient(123.34deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-16 lg:pb-[108px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-6 lg:gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["The responsible system", "owns the commercial outcome."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Model the transfer and return state without implying a Zoiko booking engine or property-management suite.
          </p>
        </div>
        <div className="flex w-full flex-col rounded-xl border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] px-4 pb-4 pt-6 shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)] md:px-[26px] md:pb-[26px] lg:pt-9">
          <div className="flex items-start justify-between gap-4 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="max-w-[285px] font-poppins text-[18px] font-bold leading-[23.4px] text-white">
              Authoritative transaction handoff
            </h3>
            <span className="shrink-0 rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-inter text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>
          <dl>
            {rows.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 py-4 ${
                  i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                }`}
              >
                <dt className="font-inter text-[13px] leading-[20.8px] text-[#9bc2c6]">{k}</dt>
                <dd className="font-inter text-[13px] leading-[20.8px] text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
