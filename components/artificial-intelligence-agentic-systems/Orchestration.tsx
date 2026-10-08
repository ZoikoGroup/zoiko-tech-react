import Image from "next/image";
import { WRAP } from "./layout";

const ICONS = ["/artificial-intelligence-agentic-systems/adoption-map-icon.svg","/artificial-intelligence-agentic-systems/adoption-govern-icon.svg","/artificial-intelligence-agentic-systems/adoption-pilot-icon.svg","/artificial-intelligence-agentic-systems/adoption-evaluate-icon.svg","/artificial-intelligence-agentic-systems/adoption-expand-icon.svg",];

const CARDS = [
  { title: "Work graph", text: "Generic steps, dependencies, decisions and system boundaries." },
  { title: "Policy gate", text: "Evaluate action/data rules before material execution." },
  { title: "Human tasks", text: "Review, judgment and exception ownership." },
  { title: "System / agent tasks", text: "Approved scope and authoritative response." },
  { title: "Public naming", text: "Use the descriptive name; Zoiko Gesta exposure requires verified naming approval." },
];

export default function Orchestration() {
  return (
    <section id="orchestration" className="w-full bg-white py-14 md:py-16 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] md:text-[40px] lg:text-[45px] lg:leading-[51.75px] text-[#102d2f]">
            Governed Work Orchestration
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#587176]">
            Naming approval must not be inferred.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <li
              key={c.title}
              className="flex flex-col gap-3 overflow-hidden rounded-xl border border-solid border-[rgba(141,185,196,0.33)] bg-[#f1f8f9] px-[26px] pb-[41px] pt-[26px] lg:min-h-[228.59px]"
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[#deefef] py-[10.5px]">
                <Image src={ICONS[i]} alt="" width={25} height={25} />
              </span>
              <h3 className="pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{c.title}</h3>
              <p className="font-poppins text-[15px] leading-[25.5px] text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
