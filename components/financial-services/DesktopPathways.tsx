import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    href: "#architecture",
    icon: "bank",
    title: "Banks & financial institutions",
    lines: ["Modernize technology, evidence and controls", "around existing regulated systems."],
  },
  {
    href: "#developers",
    icon: "code",
    title: "Fintech & digital finance",
    lines: ["Build financial workflows through APIs, identity", "and governed operations."],
  },
  {
    href: "#payments",
    icon: "network",
    title: "Payments organizations",
    lines: ["Connect payment workflows with explicit operator", "and market boundaries."],
  },
  {
    href: "#remittance",
    icon: "globe",
    title: "Remittance & cross-border",
    lines: ["Clarify money movement, availability and", "jurisdiction context."],
  },
  {
    href: "#operations",
    icon: "document",
    title: "Finance & revenue operations",
    lines: ["Run billing, payroll and recurring cycles with", "clearer approvals."],
  },
  {
    href: "#compliance",
    icon: "shield",
    title: "Compliance, risk & identity",
    lines: ["Connect obligations, authority, evidence and", "security to financial work."],
  },
];

export default function DesktopPathways() {
  return (
    <section
      id="pathways"
      className="flex w-full flex-col items-center justify-center bg-white px-10 pb-[94px] pt-[93px] font-poppins xl:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-9">
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[14.8px]">
          <h2 className="w-full text-[36px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] xl:text-[44px] xl:leading-[50.6px]">
            <DesktopLines lines={["Where does your financial workflow", "start?"]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "Choose the institution and operating need closest to yours. Each path takes you to a relevant part of this",
                "page.",
              ]}
            />
          </p>
        </div>
        <ul className="grid w-full grid-cols-3 gap-x-5 gap-y-[78px]">
          {cards.map((c, i) => (
            <li key={c.title} className="flex">
              <a
                href={c.href}
                className={`flex w-full flex-col items-center gap-[11px] rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px] drop-shadow-[0px_4px_5px_rgba(0,0,0,0.2)] ${
                  i < 3 ? "h-[274px]" : "h-[250px]"
                }`}
              >
                <span
                  className={`flex w-[60px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef] ${
                    i < 2 ? "h-[60px]" : "mb-[23px] h-[40px]"
                  }`}
                >
                  <Image
                    src={`/financial-services/desktop-pathways-icon-${c.icon}.svg`}
                    alt=""
                    width={40}
                    height={40}
                    className="size-[40px] shrink-0"
                  />
                </span>
                <h3 className="w-full pb-3 text-center text-[20px] font-bold leading-[26px] text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="w-full text-center text-[15px] leading-[24px] text-[#587176]">
                  {c.lines[0]}
                  <br />
                  {c.lines[1]}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
