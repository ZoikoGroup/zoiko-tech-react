import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "/education-research/adjacent-icon-publications.svg", title: "Research workflows", text: "Sources → provenance → human review → approved operating result. Evidence pending." },
  { icon: "/education-research/icon-user-dark.svg", title: "University collaboration", text: "Objective → access and workspace design → approved public output. Evidence pending." },
  { icon: "/education-research/icon-institution-teal.svg", title: "Learning technology", text: "Experience → institutional integration → reviewed operational result. Evidence pending." },
  { icon: "/education-research/adjacent-icon-integration.svg", title: "Research infrastructure", text: "Technical workflow → API and data architecture → approved result. Evidence pending." },
];

export default function Practice() {
  return (
    <section id="practice" className="w-full bg-white py-14 md:py-16 lg:pt-[93px] lg:pb-[94px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] leading-[1.15] font-bold tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Technology in practice needs", "approved proof."]} />
          </h2>
          <p className="pt-[4.5px] font-inter text-base leading-[25.6px] text-[#587176]">
            <Lines lines={["Institutional case studies and measured results were not supplied. Explore the architecture while evidence", "is pending."]} />
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:auto-rows-[minmax(234px,auto)] lg:grid-cols-3">
          {CARDS.map((c) => (
            <li key={c.title} className="flex flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7">
              <div className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </div>
              <h3 className="mb-3 font-poppins text-xl leading-[26px] font-bold text-[#102d2f]">{c.title}</h3>
              <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
