import Image from "next/image";
import TabletLines from "./TabletLines";

const platforms = [
  {
    title: "ZoikoPay",
    text: "Payments and embedded financial infrastructure.",
    scope: "Zoiko Financial Group entity; workflow operator requires confirmation.",
  },
  {
    title: "Zoiko Remit",
    text: "Cross-border remittance and money-movement platform.",
    scope: "Operator, markets and availability require confirmation.",
  },
  {
    title: "Zoiko Billing",
    text: "Billing, invoicing, usage and revenue operations.",
    scope: "Product scope and contracting entity require confirmation.",
  },
  {
    title: "Zoiko Payroll",
    text: "Payroll operations and workforce payments.",
    scope: "Country, payment scope and operator require confirmation.",
  },
  {
    title: "ZoikoAssure",
    text: "Regulatory intelligence, compliance and audit automation.",
    scope: "Public maturity and capabilities require confirmation.",
  },
  {
    title: "Identity foundations",
    text: "Identity evidence at approved scope.",
    scope: "Public readiness and supported methods require confirmation.",
  },
];

export default function TabletPlatforms() {
  return (
    <section
      id="platforms-t"
      className="w-full overflow-hidden bg-white px-[5%] pb-[70px] pt-[70px] font-poppins md:pb-[94px] md:pt-[93px]"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            11 / PLATFORM EVIDENCE
          </span>
          <h2 className="text-[clamp(24px,4.5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Specialist platforms.", "Evidence before claims."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#587176]">
            These source-backed descriptors help frame evaluation. Current maturity, availability and operator records
            are not supplied in this prototype.
          </p>
        </div>

        <ul className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
          {platforms.map((p) => (
            <li key={p.title} className="flex">
              <article className="flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]">
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src="/financial-services/tablet-icon-platform-database.svg" alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-[#102d2f]">{p.title}</h3>
                <p className="pb-[22px] text-[15px] leading-[24px] text-[#587176]">{p.text}</p>
                <dl className="mt-auto border-t border-[rgba(114,157,164,0.25)] py-3 pt-[15px] text-[12px] leading-[19.2px]">
                  <dt className="text-[#9ec9cc]">Maturity</dt>
                  <dd className="text-[#102d2f]">Not confirmed</dd>
                  <dt className="pt-3 text-[#9ec9cc]">Market availability</dt>
                  <dd className="text-[#102d2f]">Not published</dd>
                  <dt className="pt-3 text-[#9ec9cc]">Operator / scope</dt>
                  <dd className="text-[#102d2f]">{p.scope}</dd>
                </dl>
                <a
                  href="#"
                  className="flex min-h-[36px] items-start py-2 text-[13px] font-bold leading-[20.8px] text-[#247780]"
                >
                  Request platform evidence ↗
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
