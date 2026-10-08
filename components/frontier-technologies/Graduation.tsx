import { WRAP } from "./layout";
import Lines from "./Lines";

const panels = [
  { n: "01", title: "Evidence", text: "Reviewed method and supported conclusions." },
  { n: "02", title: "Safety / rights", text: "Risk, permissions and applicable approvals." },
  { n: "03", title: "Product readiness", text: "Owner, capability, support, operator and market governance." },
  { n: "04", title: "Publication", text: "Approved naming, destination and maturity before commercial exposure." },
];

export default function Graduation() {
  return (
    <section
      id="graduation"
      className="w-full bg-[linear-gradient(119.486deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[70px] lg:pt-[69px]"
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]`}>
        <div className="flex w-full flex-col gap-[15.1px] lg:w-[330px] lg:shrink-0">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[41px] md:leading-[47.15px]">
            <Lines lines={["Formal", "graduation gate"]} />
          </h2>
          <p className="pt-[4.2px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            <Lines lines={["Supported capability needs more than", "promising research."]} />
          </p>
        </div>
        <ul className="grid min-w-0 flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:h-[413.38px] lg:grid-rows-[183.19px_210.19px]">
          {panels.map((p, i) => (
            <li
              key={p.n}
              className={`flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px] ${i === 0 ? "lg:self-stretch" : "lg:self-start"}`}
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{p.n}</span>
              <h3 className="pb-[0.6px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{p.title}</h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
