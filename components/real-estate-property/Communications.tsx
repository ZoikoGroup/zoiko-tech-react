import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const rows = [
  ["Channel", "Sample approved contact channel"],
  ["Property reference", "Synthetic accommodation reference"],
  ["Intent", "Service information inquiry"],
  ["Provider", "Requires confirmation"],
  ["Current owner", "Inquiry operations — specimen"],
  ["State", "Assigned"],
  ["Next step", "Confirm responsible downstream team"],
];

const cards = [
  {
    icon: "/real-estate-property/icon-responsible-owner.svg",
    title: "Responsible owner",
    text: "Preserve inquiry purpose, team and current state.",
    cls: "lg:h-[230px]",
  },
  {
    icon: "/real-estate-property/icon-supported-routing.svg",
    title: "Supported routing",
    text: "Only create downstream requests where product and integration evidence supports it.",
    cls: "",
  },
];

export default function Communications() {
  return (
    <section id="communications" className="w-full bg-white py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-8 lg:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Move inquiry context", "into an accountable handoff."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-base leading-[25.6px] text-[#587176]">
            Use supported contact and routing patterns with minimum necessary customer, resident or guest context.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-11">
          <div className="min-w-0 flex-1 rounded-xl border border-[#d3e5e6] bg-white p-4 drop-shadow-[0px_18px_25px_rgba(0,30,37,0.06)] md:p-[26px]">
            <div className="flex min-h-[52px] flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-[rgba(120,152,156,0.27)] pb-3 lg:pb-0">
              <h3 className="font-poppins text-[18px] font-bold leading-[23.4px] text-[#102d2f] lg:pl-[10px]">
                Inquiry operations / RE-001
              </h3>
              <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-inter text-[10px] leading-4 tracking-[0.3px] text-[#247780]">
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
                  <dt className="font-inter text-[13px] leading-[20.8px] text-[#648287]">{k}</dt>
                  <dd className="font-inter text-[13px] leading-[20.8px] text-[#102d2f]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="grid min-w-0 flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:flex lg:h-[513px] lg:flex-col lg:justify-between">
            {cards.map((c) => (
              <li
                key={c.title}
                className={`flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#23767e] p-6 lg:p-7 ${c.cls}`}
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="mb-3 font-poppins text-[20px] font-bold leading-[26px] text-[#7fd0d9]">{c.title}</h3>
                <p className="max-w-[420px] pb-[22px] font-inter text-[15px] leading-6 text-[#e6f2f4]">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
