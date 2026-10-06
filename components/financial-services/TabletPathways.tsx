import Image from "next/image";

const cards = [
  { icon: "tablet-evidence-institution-icon", title: "Banks & financial institutions", text: "Modernize technology, evidence and controls around existing regulated systems.", href: "#architecture-t" },
  { icon: "tablet-path-icon-code", title: "Fintech & digital finance", text: "Build financial workflows through APIs, identity and governed operations.", href: "#developers-t" },
  { icon: "tablet-evidence-deployment-icon", title: "Payments organizations", text: "Connect payment workflows with explicit operator and market boundaries.", href: "#payments-t" },
  { icon: "tablet-path-icon-globe", title: "Remittance & cross-border", text: "Clarify money movement, availability and jurisdiction context.", href: "#remittance-t" },
  { icon: "tablet-evidence-result-icon", title: "Finance & revenue operations", text: "Run billing, payroll and recurring cycles with clearer approvals.", href: "#operations-t" },
  { icon: "tablet-path-icon-shield", title: "Compliance, risk & identity", text: "Connect obligations, authority, evidence and security to financial work.", href: "#compliance-t" },
];

export default function TabletPathways() {
  return (
    <section id="pathways-t" className="w-full overflow-hidden bg-white px-[5%] pb-[94px] pt-[93px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            01 / FIND YOUR PATH
          </p>
          <h2 className="font-poppins text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            Where does your financial workflow start?
          </h2>
          <p className="max-w-[760px] pt-[4.295px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Choose the institution and operating need closest to yours. Each path takes you to a
            relevant part of this page.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a
                href={c.href}
                className="flex w-full flex-col items-start rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={`/financial-services/${c.icon}.svg`} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-[12px] font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="pb-[22px] font-poppins text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
                <span className="mt-auto flex min-h-[36px] w-full items-center justify-between font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780]">
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
