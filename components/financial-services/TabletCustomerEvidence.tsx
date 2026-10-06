import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  { icon: "institution", title: "Customer & institution", lines: ["Approved identity or an approved, non-", "misleading anonymized description."] },
  { icon: "deployment", title: "Deployment & scope", lines: ["Actual platform, integration, market and", "operator context."] },
  { icon: "result", title: "Result & supporting evidence", lines: ["Measured and approved outcomes with", "limitations made clear."] },
];

export default function TabletCustomerEvidence() {
  return (
    <section id="customer-evidence-t" className="w-full overflow-hidden bg-white px-[5%] pb-[94px] pt-[93px] font-poppins">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">15 / CUSTOMER EVIDENCE</span>
          <h2 className="pb-[0.5px] text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Every published result", "needs a traceable foundation."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] text-[16px] leading-[25.6px] text-[#587176]">
            Customer identity, deployment scope, legal wording and measured results require explicit approval.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a href="#" className="flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7">
                <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={`/financial-services/tablet-evidence-${c.icon}-icon.svg`} alt="" width={25} height={25} />
                  </span>
                </div>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-6 text-[#587176]">
                  <TabletLines lines={c.lines} />
                </p>
                <span className="mt-auto flex min-h-9 items-center justify-between gap-3 text-[13px] leading-[20.8px] text-[#247780]">
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
