import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  { icon: "network", title: "Financial operations", lines: ["Business operations, billing, payroll and", "modernization."] },
  { icon: "shield", title: "Trust & control", lines: ["Regulatory obligations, identity and", "cybersecurity."] },
  { icon: "ai", title: "AI & intelligence", lines: ["Bounded automation, governance and", "responsible AI."] },
  { icon: "code", title: "Developer-led modernization", lines: ["Infrastructure, interfaces and financial", "workflow integration."] },
];

export default function TabletAdjacent() {
  return (
    <section
      id="adjacent-t"
      className="w-full overflow-hidden px-[5%] pb-[94px] pt-[93px] font-poppins"
      style={{ backgroundImage: "linear-gradient(119.32deg, rgb(0,0,0) 0%, rgb(10,37,40) 48%, rgb(36,119,128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">16 / EXPANSION &amp; RETENTION</span>
          <h2 className="pb-[0.5px] text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines lines={["Extend the operating foundation", "into the next relevant workflow."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Choose adjacent pathways when you are ready to explore a broader operating architecture.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a
                href="#"
                className="flex w-full flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7"
              >
                <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={`/financial-services/tablet-adjacent-${c.icon}-icon.svg`} alt="" width={25} height={25} />
                  </span>
                </div>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-6 text-[#c4d7d9]">
                  <TabletLines lines={c.lines} />
                </p>
                <span className="mt-auto flex min-h-9 items-center justify-between gap-3 text-[13px] leading-[20.8px] text-[#9cdee0]">
                  <span className="font-bold">Explore pathway</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
