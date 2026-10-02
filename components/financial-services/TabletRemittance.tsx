import Image from "next/image";
import Link from "next/link";
import TabletLines from "./TabletLines";

const rows: [string, string[]][] = [
  ["Origin / destination", ["Not published"]],
  ["Service operator", ["Requires review"]],
  ["Availability", ["Not confirmed"]],
  ["Workflow state", ["Verification / review"]],
  ["FX / fee information", ["Not published"]],
  ["Evidence", ["Current registry", "confirmation required"]],
];

export default function TabletRemittance() {
  return (
    <section id="remittance-t" className="w-full overflow-hidden bg-white px-[5%] pb-[94px] pt-[93px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            05 / REMITTANCE &amp; MONEY MOVEMENT
          </p>
          <h2 className="pb-[0.515px] font-poppins text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Cross-border work needs", "market-specific clarity."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.1px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Zoiko Remit is described as a cross-border remittance and money-movement platform.
            Availability, maturity and legal operator remain specific to approved product and
            market records.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-[44px] md:flex-row md:items-center">
          <div className="min-w-0 flex-1 rounded-[12px] border border-[#d3e5e6] bg-white p-[26px] shadow-[0px_18px_25px_0px_rgba(0,30,37,0.06)]">
            <div className="flex items-start justify-between gap-[12px] border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="max-w-[160px] font-poppins text-[18px] font-bold leading-[23.4px] text-[#102d2f]">
                Market availability view
              </h3>
              <span className="shrink-0 rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-poppins text-[10px] leading-[16px] tracking-[0.3px] text-[#247780]">
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
                  <dt className="font-poppins text-[13px] leading-[20.8px] text-[#648287]">{label}</dt>
                  <dd className="font-poppins text-[13px] leading-[20.8px] text-[#102d2f]">
                    <TabletLines lines={value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-start gap-[11.4px]">
            <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
              <Image src="/financial-services/tablet-path-icon-globe.svg" alt="" width={25} height={25} />
            </span>
            <h3 className="pt-[10.6px] font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">
              Context before coverage claims.
            </h3>
            <p className="font-poppins text-[16px] leading-[25.6px] text-[#587176]">
              Establish the source and destination markets, operator, identity requirements and
              authoritative workflow reference before evaluation.
            </p>
            <p className="pt-[3.89px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
              Geography and country inputs support routing; they do not establish legal
              availability.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-[#247780] px-[21px] py-[12px] text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white max-sm:w-full"
            >
              Discuss your money-movement workflow ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
