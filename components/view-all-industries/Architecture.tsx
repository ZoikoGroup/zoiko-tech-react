import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "arch-icon-ai", title: "Artificial intelligence", text: "Approved corporate AI architecture and governance." },
  { icon: "arch-icon-cloud", title: "Cloud / infrastructure", text: "Shared foundations; no inferred region or sovereignty promise." },
  { icon: "arch-icon-developer", title: "Developer Platform", text: "APIs, SDKs and documentation when public- ready." },
  { icon: "arch-icon-identity", title: "Identity & security", text: "Approved access, resilience and trust context.", extra: true },
  { icon: "arch-icon-data", title: "Data, governance & evidence", text: "Cross-cutting corporate architecture at approved scope." },
  { icon: "arch-icon-operating-systems", title: "Industry operating systems", text: "Relevant communications, financial and sector systems." },
];

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-white py-14 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Shared foundations.", "Sector-specific operating context."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-base leading-[25.6px] text-[#587176]">
            <Lines lines={["Technology foundations connect approved sectors without implying unsupported sector capabilities."]} />
          </p>
        </div>
        <ul className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li key={c.title} className="flex flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7">
              <div className="pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={`/view-all-industries/${c.icon}.svg`} alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
              <p className={`pb-[22px] font-poppins text-[15px] leading-6 text-[#587176] ${c.extra ? "lg:pb-[46.5px]" : ""}`}>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
