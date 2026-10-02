import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/public-sector-government/desktop-icon-code.svg",
    title: "Build",
    lines: ["Approved APIs, SDKs, model", "interfaces, events and", "authentication."],
  },
  {
    icon: "/public-sector-government/desktop-practice-document-icon.svg",
    title: "Learn",
    lines: ["Documentation, API", "references,", "quickstarts and architecture", "guides."],
  },
  {
    icon: "/public-sector-government/desktop-icon-shield-check.svg",
    title: "Test",
    lines: ["External sandbox access only", "when it is live and approved."],
  },
  {
    icon: "/public-sector-government/desktop-pathways-icon-network.svg",
    title: "Operate",
    lines: ["Supported observability,", "usage,", "status, changelog and", "assistance."],
  },
];

export default function DesktopDevelopers() {
  return (
    <section
      id="developers"
      className="flex w-full flex-col items-center bg-white pt-[93px] pb-[108px] px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <div className="h-[20px] w-full" aria-hidden="true" />
          <h2 className="font-poppins text-[44px] leading-[50.6px] font-bold tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Connect agency systems", "through documented boundaries."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Keep authoritative sources, identity, interface health and support ownership visible.
          </p>
        </div>
        <ul className="flex items-stretch justify-center gap-5 pt-[36px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex min-w-0 flex-1 flex-col items-center rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px] text-center"
            >
              <div className="flex h-[68px] w-[46px] flex-col items-center pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="w-full pb-[12px] font-poppins text-[20px] leading-[26px] font-bold text-[#102d2f]">
                {c.title}
              </h3>
              <p className="w-full pb-[22px] font-poppins text-[15px] leading-[24px] text-[#587176]">
                <DesktopLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
