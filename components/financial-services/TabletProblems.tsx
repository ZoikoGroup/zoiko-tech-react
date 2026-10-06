import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  { icon: "tablet-adjacent-network-icon", title: ["Fragmented financial", "operations"], text: "Payments, billing and payroll often carry inconsistent status and ownership.", href: "#operations-t" },
  { icon: "tablet-problem-icon-globe", title: ["Cross-border complexity"], text: "Operator, jurisdiction and availability differ by market.", href: "#remittance-t" },
  { icon: "tablet-practice-document-icon", title: ["Control & evidence gaps"], text: "Approvals and source records become separated from the work they govern.", href: "#compliance-t" },
  { icon: "tablet-problem-icon-lock", title: ["Unclear delegated authority"], text: "Sensitive actions need explicit human and system permissions.", href: "#identity-t" },
];

export default function TabletProblems() {
  return (
    <section
      id="problems-t"
      className="w-full overflow-hidden px-[5%] pb-[94px] pt-[93px]"
      style={{
        backgroundImage:
          "linear-gradient(119.99deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            02 / THE OPERATING CHALLENGE
          </p>
          <h2 className="pb-[0.52px] font-poppins text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines lines={["Financial systems should connect.", "So should the controls around them."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.79px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Four priority problems shape the financial-services operating model.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title.join(" ")} className="flex">
              <a
                href={c.href}
                className="flex w-full flex-col items-start rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-[28px]"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={`/financial-services/${c.icon}.svg`} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-[12px] font-poppins text-[20px] font-bold leading-[26px] text-white">
                  <TabletLines lines={c.title} />
                </h3>
                <p className="pb-[22px] font-poppins text-[15px] leading-[24px] text-[#c4d7d9]">{c.text}</p>
                <span className="mt-auto flex min-h-[36px] w-full items-center justify-between font-poppins text-[13px] font-bold leading-[20.8px] text-[#9cdee0]">
                  <span>Explore pathway</span>
                  <span aria-hidden="true" className="font-poppins font-normal">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
