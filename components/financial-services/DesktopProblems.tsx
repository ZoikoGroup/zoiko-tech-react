import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/financial-services/desktop-icon-network.svg",
    title: ["Fragmented financial", "operations"],
    body: ["Payments, billing and payroll", "often carry inconsistent status", "and ownership."],
  },
  {
    icon: "/financial-services/desktop-problems-icon-globe.svg",
    title: ["Cross-border", "complexity"],
    body: ["Operator, jurisdiction and", "availability differ by market."],
  },
  {
    icon: "/financial-services/desktop-icon-file-text.svg",
    title: ["Control & evidence", "gaps"],
    body: ["Approvals and source records", "become separated from the", "work they govern."],
  },
  {
    icon: "/financial-services/desktop-icon-lock-keyhole.svg",
    title: ["Unclear delegated", "authority"],
    body: ["Sensitive actions need explicit", "human and system permissions."],
  },
];

export default function DesktopProblems() {
  return (
    <section
      id="problems"
      className="flex w-full flex-col items-center justify-center px-10 pb-[94px] pt-[93px] font-poppins xl:px-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(122.62425753285603deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-9">
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[14.8px]">
          <h2 className="w-full text-[36px] font-bold leading-[1.15] tracking-[-1.3px] text-white xl:text-[44px] xl:leading-[50.6px]">
            <DesktopLines
              lines={["Financial systems should connect.", "So should the controls around them."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines lines={["Four priority problems shape the financial-services operating model."]} />
          </p>
        </div>
        <ul className="flex w-full items-stretch justify-center gap-5">
          {cards.map((c) => (
            <li key={c.title[0]} className="flex min-w-0 flex-1">
              <a
                href="#architecture"
                className="flex w-full min-w-0 flex-col items-start rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-[28px]"
              >
                <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <h3 className="w-full pb-3 text-[20px] font-bold leading-[26px] text-white">
                  <DesktopLines lines={c.title} />
                </h3>
                <p className="w-full text-[15px] leading-[24px] text-[#c4d7d9]">
                  <DesktopLines lines={c.body} />
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
