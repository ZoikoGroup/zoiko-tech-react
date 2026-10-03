import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: "Digital service delivery", body: "Access problem → integration → accessible workflow → approved result." },
  { title: "Identity & authority", body: "Delegation problem → authorization design →approved operational result." },
  { title: "Workflow & evidence", body: "Fragmented process → governed handoff →approved outcome." },
  { title: "Governed public-sector AI", body: "Bounded use → evaluation → human oversight→ monitored limitations." },
];

export default function DesktopPractice() {
  return (
    <section id="practice" className="flex w-full flex-col items-center bg-white pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[29px]">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Public-sector proof", "must be approved and traceable."]} />
          </h2>
          <p className="pt-[4.5px] text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "Approved agency stories and measured outcomes were not supplied. Explore the architecture while",
                "evidence is pending.",
              ]}
            />
          </p>
        </div>
        <div className="flex items-start justify-between">
          <ul className="grid w-[53.3%] grid-cols-2 grid-rows-[auto_284px] gap-5">
            {cards.map((c) => (
              <li key={c.title} className="rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]">
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src="/public-sector-government/desktop-practice-document-icon.svg" alt="" width={25} height={25} />
                </span>
                <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="text-[15px] font-normal leading-[24px] text-[#587176]">{c.body}</p>
              </li>
            ))}
          </ul>
          <div className="relative mt-[29px] aspect-square w-[37.75%] shrink-0">
            <Image
              src="/public-sector-government/desktop-practice-architecture-illustration.webp"
              alt=""
              fill
              sizes="453px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
