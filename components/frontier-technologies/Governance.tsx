import Image from "next/image";
import { WRAP } from "./layout";

const panels = [
  { title: "Authority", text: "Accountable human and institutional owner." },
  { title: "Risk", text: "Physical, location, cultural, education and operational constraints." },
  { title: "Stop states", text: "Blocked, paused, restricted or insufficient evidence remain visible." },
  { title: "No absolutes", text: "No safety certification or universal harmlessness inferred." },
];

export default function Governance() {
  return (
    <section id="governance" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-6`}>
        <div className="flex max-w-[800px] flex-col gap-[15px] pb-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[41px] md:leading-[47.15px]">
            Safety, ethics &amp; governance
          </h2>
          <p className="pt-[5px] font-poppins text-base leading-[25.6px] text-[#587176]">Exploration must be able to stop.</p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {panels.map((p) => (
            <li
              key={p.title}
              className="flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[#f0f7f8] px-[26px] pb-[41px] pt-[31px]"
            >
              <h3 className="pb-[0.6px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{p.title}</h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{p.text}</p>
            </li>
          ))}
        </ul>
        <div className="relative aspect-[1200/542] w-full overflow-hidden">
          <Image
            src="/frontier-technologies/governance-team-meeting.webp"
            alt="Team reviewing documents together at a table"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover object-[50%_66.8%]"
          />
        </div>
      </div>
    </section>
  );
}
