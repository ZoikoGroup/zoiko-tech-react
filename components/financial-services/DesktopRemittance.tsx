import Image from "next/image";
import DesktopLines from "./DesktopLines";

const rows = [
  ["Origin / destination", "Not published"],
  ["Service operator", "Requires review"],
  ["Availability", "Not confirmed"],
  ["Workflow state", "Verification / review"],
  ["FX / fee information", "Not published"],
  ["Evidence", "Current registry confirmation required"],
];

export default function DesktopRemittance() {
  return (
    <section
      id="remittance"
      className="flex w-full flex-col items-center justify-center bg-white px-10 pb-[94px] pt-[93px] font-poppins xl:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-[36px]">
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[14.8px]">
          <h2 className="w-full text-[36px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] xl:text-[44px] xl:leading-[50.6px]">
            <DesktopLines lines={["Cross-border work needs", "market-specific clarity."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "Zoiko Remit is described as a cross-border remittance and money-movement platform. Availability, maturity",
                "and legal operator remain specific to approved product and market records.",
              ]}
            />
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-11">
          <div className="flex min-w-0 flex-[1.1_1_0] flex-col items-start rounded-[12px] border border-[#d3e5e6] bg-white p-[26px] drop-shadow-[0px_18px_25px_rgba(0,30,37,0.06)]">
            <div className="flex w-full items-start justify-between gap-4 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <div className="relative h-[35.39px] w-[199px] shrink-0">
                <h3 className="absolute left-0 top-[11.5px] w-full -translate-y-1/2 text-[18px] font-bold leading-[23.4px] text-[#102d2f]">
                  <DesktopLines lines={["Market availability", "view"]} />
                </h3>
              </div>
              <span className="whitespace-nowrap rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#247780]">
                Synthetic specimen
              </span>
            </div>
            {rows.map(([k, v], i) => (
              <div
                key={k}
                className={`grid w-full grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-x-5 py-[16px] text-[13px] leading-[20.8px] ${
                  i < rows.length - 1 ? "h-[53.8px] border-b border-[rgba(120,152,156,0.19)]" : "h-[52.8px]"
                }`}
              >
                <span className="text-[#648287]">{k}</span>
                <strong className="font-normal text-[#102d2f]">{v}</strong>
              </div>
            ))}
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-[11.3px]">
            <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[#deefef] py-[10.5px]">
              <Image src="/financial-services/desktop-remittance-icon-globe.svg" alt="" width={25} height={25} className="size-[25px]" />
            </span>
            <h3 className="w-full pt-[10.7px] text-[20px] font-bold leading-[26px] text-[#102d2f]">
              Context before coverage claims.
            </h3>
            <p className="w-full text-[16px] leading-[25.6px] text-[#587176]">
              Establish the source and destination markets, operator, identity requirements and
              <br />
              authoritative workflow reference before evaluation.
            </p>
            <p className="w-full pt-[4px] text-[16px] leading-[25.6px] text-[#587176]">
              Geography and country inputs support routing; they do not establish legal
              <br />
              availability.
            </p>
            <a
              href="/contact-us"
              className="flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-[5px] border border-transparent bg-[#247780] px-[21px] pb-[11.9px] pt-[16.2px] text-center text-[14px] font-bold leading-[22.4px] text-white"
            >
              Discuss your money-movement workflow ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
