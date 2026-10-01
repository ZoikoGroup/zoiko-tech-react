import Image from "next/image";
import DesktopLines from "./DesktopLines";

const rows = [
  ["Workflow", "Payment orchestration"],
  ["Operator / market", "Requires confirmation"],
  ["Current state", "Pending authoritative response"],
  ["Owner", "Payment operations — specimen"],
  ["Approval", "Review required"],
  ["Evidence", "Source event retained"],
];

export default function DesktopPayments() {
  return (
    <section
      id="payments"
      className="flex w-full flex-col items-center justify-center px-10 pb-[94px] pt-[93px] font-poppins xl:px-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(120.80804133292479deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-9">
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[14.8px]">
          <h2 className="w-full text-[36px] font-bold leading-[1.15] tracking-[-1.3px] text-white xl:text-[44px] xl:leading-[50.6px]">
            <DesktopLines lines={["Keep payment work connected to its", "source of truth."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={[
                "ZoikoPay is described as payments and embedded financial infrastructure. Exact capabilities, operator and",
                "market scope require current product and legal evidence.",
              ]}
            />
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-11">
          <div className="flex min-w-0 flex-1 flex-col gap-5 pb-[14px]">
            <a
              href="/zoiko-pay"
              className="flex h-[208px] w-full flex-col items-start rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-[28px]"
            >
              <div className="flex h-[60px] w-full items-center gap-[30px]">
                <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src="/financial-services/desktop-icon-network.svg" alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <h3 className="min-w-0 flex-1 pb-3 text-[20px] font-bold leading-[26px] text-white">
                  Explicit workflow states
                </h3>
              </div>
              <p className="w-full pb-[22px] text-[15px] leading-[24px] text-[#c4d7d9]">
                <DesktopLines lines={["Initiated, pending, processing and authoritative outcome", "remain distinct."]} />
              </p>
              <span className="block h-[36.8px] min-h-[36px] w-full pt-[7px] text-[13px] font-bold leading-[20.8px] text-[#9cdee0]">
                Explore pathway
              </span>
            </a>
            <a
              href="/zoiko-pay"
              className="flex h-[209px] w-full flex-col items-start rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-[28px]"
            >
              <div className="flex w-full items-center gap-[30px]">
                <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src="/financial-services/desktop-icon-shield-check.svg" alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <h3 className="min-w-0 flex-1 pb-3 text-[20px] font-bold leading-[26px] text-white">
                  Visible controls & exceptions
                </h3>
              </div>
              <p className="w-full pb-[22px] text-[15px] leading-[24px] text-[#c4d7d9]">
                <DesktopLines lines={["Keep approval, rejected, partial and review-required states", "visible."]} />
              </p>
              <span className="relative top-[-3.5px] block h-[36.8px] min-h-[36px] w-full text-[13px] font-bold leading-[20.8px] text-[#9cdee0]">
                Explore pathway
              </span>
            </a>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)]">
            <div className="flex w-full items-start justify-between gap-4 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <div className="relative h-[35.39px] w-[233px] shrink-0">
                <h3 className="absolute left-0 top-[11.5px] w-full -translate-y-1/2 text-[18px] font-bold leading-[23.4px] text-white">
                  <DesktopLines lines={["Payment workflow /", "FS-001"]} />
                </h3>
              </div>
              <span className="whitespace-nowrap rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#a1dade]">
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
                <span className="text-[#9bc2c6]">{k}</span>
                <strong className="font-normal text-white">{v}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
