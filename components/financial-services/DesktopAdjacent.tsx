import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: ["Financial operations"], icon: "network", body: ["Business operations, billing,", "payroll and modernization."] },
  { title: ["Trust & control"], icon: "shield-check", body: ["Regulatory obligations,", "identity", "and cybersecurity."] },
  { title: ["AI & intelligence"], icon: "sparkle", body: ["Bounded automation,", "governance", "and responsible AI."] },
  { title: ["Developer-led", "modernization"], icon: "code", body: ["Infrastructure, interfaces and", "financial workflow integration."] },
];

export default function DesktopAdjacent() {
  return (
    <section
      id="adjacent"
      className="w-full bg-[linear-gradient(121.34deg,#000_0%,#0a2528_48%,#247780_100%)] px-10 pb-[94px] pt-[93px] xl:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">16 / EXPANSION &amp; RETENTION</p>
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Extend the operating foundation", "into the next relevant workflow."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Choose adjacent pathways when you are ready to explore a broader operating architecture.
          </p>
        </div>
        <ul className="flex gap-5">
          {cards.map((c) => (
            <li
              key={c.icon}
              className="min-h-[260px] min-w-0 flex-1 rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-[28px]"
            >
              <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={`/financial-services/desktop-icon-${c.icon}.svg`} alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">
                <DesktopLines lines={c.title} />
              </h3>
              <p className="font-poppins text-[15px] leading-[24px] text-[#c4d7d9]">
                <DesktopLines lines={c.body} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
