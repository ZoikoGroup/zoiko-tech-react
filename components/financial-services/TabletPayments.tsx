import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  {
    icon: "tablet-adjacent-network-icon",
    title: ["Explicit", "workflow", "states"],
    text: ["Initiated,", "pending,", "processing", "and", "authoritative", "outcome", "remain distinct."],
  },
  {
    icon: "tablet-adjacent-shield-icon",
    title: ["Visible", "controls &", "exceptions"],
    text: ["Keep approval,", "rejected,", "partial and", "review-", "required states", "visible."],
  },
];

const rows: [string, string[]][] = [
  ["Workflow", ["Payment orchestration"]],
  ["Operator / market", ["Requires confirmation"]],
  ["Current state", ["Pending authoritative", "response"]],
  ["Owner", ["Payment operations —", "specimen"]],
  ["Approval", ["Review required"]],
  ["Evidence", ["Source event retained"]],
];

export default function TabletPayments() {
  return (
    <section
      id="payments-t"
      className="w-full overflow-hidden px-[5%] pb-[94px] pt-[93px]"
      style={{
        backgroundImage:
          "linear-gradient(117.7deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            04 / PAYMENTS &amp; EMBEDDED FINANCE
          </p>
          <h2 className="font-poppins text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            Keep payment work connected to its source of truth.
          </h2>
          <p className="max-w-[760px] pt-[4.3px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            ZoikoPay is described as payments and embedded financial infrastructure. Exact
            capabilities, operator and market scope require current product and legal evidence.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-[44px] md:flex-row md:items-center">
          <div className="flex min-w-0 flex-1 flex-col gap-[26px] md:pb-[14.01px]">
            <ul className="flex flex-col gap-[20px] sm:flex-row sm:items-start">
              {cards.map((c) => (
                <li key={c.title.join(" ")} className="min-w-0 flex-1">
                  <a
                    href="#"
                    className="flex flex-col items-start rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-[28px]"
                  >
                    <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                      <Image src={`/financial-services/${c.icon}.svg`} alt="" width={25} height={25} />
                    </span>
                    <h3 className="pb-[12px] font-poppins text-[20px] font-bold leading-[26px] text-white">
                      <TabletLines lines={c.title} />
                    </h3>
                    <p className="pb-[22px] font-poppins text-[15px] leading-[24px] text-[#c4d7d9]">
                      <TabletLines lines={c.text} />
                    </p>
                    <span className="mt-auto flex min-h-[36px] w-full items-center justify-between font-poppins text-[13px] font-bold leading-[20.8px] text-[#9cdee0]">
                      <span>
                        Explore
                        <br />
                        pathway
                      </span>
                      <span aria-hidden="true" className="font-poppins font-normal">↗</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-l-[3px] border-[#8edade] bg-white/[0.04] px-[23px] py-[19px]">
              <p className="font-poppins text-[14px] leading-[22.4px] text-[#c6dfe1]">
                ZoikoPay is identified as a Zoiko Financial Group entity. The contracting and
                regulated operator must be confirmed for the relevant workflow.
              </p>
            </div>
          </div>

          <div className="min-w-0 flex-1 rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)]">
            <div className="flex items-start justify-between gap-[12px] border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="max-w-[160px] font-poppins text-[18px] font-bold leading-[23.4px] text-white">
                Payment workflow / FS-001
              </h3>
              <span className="shrink-0 rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-poppins text-[10px] leading-[16px] tracking-[0.3px] text-[#a1dade]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {rows.map(([label, value], i) => (
                <div
                  key={label}
                  className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-x-[20px] py-[16px] ${
                    i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                  }`}
                >
                  <dt className="font-poppins text-[13px] leading-[20.8px] text-[#9bc2c6]">{label}</dt>
                  <dd className="font-poppins text-[13px] leading-[20.8px] text-white">
                    <TabletLines lines={value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
