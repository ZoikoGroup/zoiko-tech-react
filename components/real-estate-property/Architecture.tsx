import Lines from "./Lines";
import { WRAP } from "./layout";

const LAYERS = [
  ["L1", "Property / accommodation source", "Provider, source record and responsible system.", "What is offered and who owns it?"],
  ["L2", "Market / jurisdiction", "Authoritative location, provider and policy context.", "Where does the workflow operate?"],
  ["L3", "Discovery / inquiry / communication", "Supported engagement and contact patterns.", "How does the user engage?"],
  ["L4", "Authoritative transaction system", "Responsible booking, tenancy, purchase or service system.", "Who owns the commercial state?"],
  ["L5", "Payment / billing system", "Separate financial operator and system of record.", "Who owns the financial state?"],
  ["L6", "Operations / service", "Accountable provider team, support and exceptions.", "Who operates the outcome?"],
  ["L7", "Controls / evidence / integration", "Privacy, reviewed rules, interfaces and retained records.", "How is it controlled and reviewed?"],
];

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-white py-14 md:py-16 lg:pb-[108px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex flex-col items-start gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Coordinate the journey.", "Preserve ownership at every layer."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-[16px] leading-[25.6px] text-[#587176]">
            Seven layers connect discovery, transactions and operating work without obscuring authority.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] pt-[10px]">
          {LAYERS.map(([level, title, desc, q], i) => (
            <div
              key={level}
              className={`grid grid-cols-[48px_minmax(0,1fr)] gap-x-4 gap-y-1 rounded-[8px] border border-[#ddeaea] px-4 py-4 md:px-[22px] xl:h-[70.8px] xl:grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1fr)] xl:gap-x-5 xl:gap-y-5 xl:py-[18px] ${
                i === 5 ? "bg-[#dbffff]" : i === 6 ? "bg-[#bcffff]" : "bg-[#f4f9f9]"
              }`}
            >
              <span className="row-span-3 flex items-center justify-center self-start rounded-[30px] border border-[#90b8bd] p-[5px] font-inter text-[13px] leading-[20.8px] text-[#247780] xl:row-span-1 xl:self-center">
                {level}
              </span>
              <h3 className="self-center font-poppins text-[16px] font-bold leading-[20.8px] text-[#102d2f] xl:whitespace-nowrap">
                {title}
              </h3>
              <p className="self-center font-inter text-[14px] leading-[22.4px] text-[#587176] xl:whitespace-nowrap">
                {desc}
              </p>
              <strong className="self-center font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780] xl:whitespace-nowrap">
                {q}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
