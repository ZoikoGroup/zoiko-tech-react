import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const steps = [
  { icon: "adoption-map-icon", title: "Map", text: "Define intent, sources, owners and systems of record." },
  { icon: "adoption-govern-icon", title: "Govern", text: "Scope data, policies, authority and evaluation." },
  { icon: "adoption-pilot-icon", title: "Pilot", text: "Controlled bounded workflow with approved actions." },
  { icon: "adoption-evaluate-icon", title: "Evaluate / operate", text: "Validate failures, evidence and accountable recovery." },
  {
    icon: "adoption-expand-icon",
    title: "Expand",
    text: "Only after capability, governance, integration and support readiness are approved.",
  },
];

export default function Adoption() {
  return (
    <section id="adoption" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Implementation & adoption"]} />
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#587176]">
            Begin with one bounded workflow.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-[rgba(141,185,196,0.33)] bg-[#f1f8f9] px-[26px] pb-[41px] pt-[26px] text-center"
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[#deefef] py-[10.5px]">
                <Image src={`/artificial-intelligence-agentic-systems/${s.icon}.svg`} alt="" width={25} height={25} />
              </span>
              <h3 className="w-full pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                {s.title}
              </h3>
              <p className="w-full font-poppins text-[15px] leading-[25.5px] text-[#587176]">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
