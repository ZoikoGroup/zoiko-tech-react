import Image from "next/image";
import { WRAP } from "./layout";

const ICONS = ["/artificial-intelligence-agentic-systems/practice-domain-icon.svg","/artificial-intelligence-agentic-systems/practice-execution-icon.svg","/artificial-intelligence-agentic-systems/practice-operational-icon.svg","/artificial-intelligence-agentic-systems/practice-proof-icon.svg","/artificial-intelligence-agentic-systems/practice-evidence-icon.svg",];

const CARDS = [
  { title: "Actor identity", text: "Person, service or agent with organizational context." },
  { title: "Delegated authority", text: "On whose behalf, which action, scope and duration." },
  { title: "Least privilege", text: "Minimum tool/system/data permissions." },
  { title: "Purpose & sensitive data", text: "Approved use boundaries and access handling." },
  { title: "Evidence & trust", text: "Source-backed controls only; no invented identity methods or assurance claims." },
];

export default function Controls() {
  return (
    <section id="controls" className="w-full bg-[linear-gradient(121.15654649497563deg,#000000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-16 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] md:text-[40px] lg:text-[45px] lg:leading-[51.75px] text-white">
            Identity, security & data controls
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            Least privilege bounds both data and actions.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <li
              key={c.title}
              className="flex flex-col gap-3 overflow-hidden rounded-xl border border-solid border-[rgba(141,185,196,0.33)] bg-white/[0.03] px-[26px] pb-[41px] pt-[26px] lg:min-h-[228.59px]"
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[#62c6ca]/10 py-[10.5px]">
                <Image src={ICONS[i]} alt="" width={25} height={25} />
              </span>
              <h3 className="pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{c.title}</h3>
              <p className="font-poppins text-[15px] leading-[25.5px] text-[#c4d7d9]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
