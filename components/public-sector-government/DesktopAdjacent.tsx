import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: ["Modernization &integration"], body: ["Shared infrastructure, interfaces", "and system boundaries."], icon: "desktop-adjacent-modernization-icon.svg", size: 80 },
  { title: ["Identity & trust"], body: ["Delegation, security and", "accountable authority."], icon: "desktop-adjacent-identity-icon.svg", size: 80 },
  { title: ["AI governance"], body: ["Source-aware assistance and", "responsible deployment."], icon: "desktop-adjacent-ai-governance-icon.svg", size: 80 },
  { title: ["Compliance & evidence"], body: ["Reviewed rules, controls and", "retained history."], icon: "desktop-adjacent-compliance-icon.svg", size: 80 },
  { title: ["Communications &", "access"], body: ["Approved channels and", "supported assisted pathways."], icon: "desktop-adjacent-communications-icon.svg", size: 50 },
  { title: ["Operational workflows"], body: ["Requests, owners, exceptions", "and handoffs."], icon: "desktop-adjacent-workflows-icon.svg", size: 50 },
];

export default function DesktopAdjacent() {
  return (
    <section id="adjacent" className="flex w-full flex-col items-center bg-white pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[78px]">
        <div className="flex max-w-[820px] flex-col gap-[15.1px]">
          <h2 className="pb-[0.7px] text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Follow the next service need.", "Keep the operating foundation", "connected."]} />
          </h2>
          <p className="pt-[4.9px] text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines lines={["Explore adjacent architecture pathways as needs expand."]} />
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-5">
          {cards.map((c) => (
            <li
              key={c.icon}
              className="flex min-h-[340px] flex-col items-center justify-center rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px] text-center"
            >
              <span className="flex size-[80px] items-center justify-center rounded-[10px] bg-[#deefef]">
                <Image src={`/public-sector-government/${c.icon}`} alt="" width={c.size} height={c.size} />
              </span>
              <h3 className="mt-[46px] text-[20px] font-bold leading-[26px] text-[#102d2f]">
                <DesktopLines lines={c.title} />
              </h3>
              <p className="mt-[36px] text-[15px] leading-[24px] text-[#587176]">
                <DesktopLines lines={c.body} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
