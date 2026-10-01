import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cardCls =
  "flex min-w-px flex-col justify-between overflow-hidden rounded-[14px] border border-solid border-[#afbdc6] bg-[#f3f9fa] p-[20px] shadow-[0px_4px_10px_0px_rgba(10,20,22,0.2)]";
const inputCls =
  "flex min-h-[48px] w-full flex-col items-start rounded-[10px] border border-solid border-[#b1bfc8] bg-white";

function CardHead({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-[12px]">
      <div className="flex size-[60px] flex-col items-center justify-center rounded-[10px] border border-solid border-[#afbdc6] bg-white">
        <Image src={icon} alt="" width={40} height={40} className="size-[40px]" />
      </div>
      <p className="whitespace-nowrap font-inter text-[14.4px] font-semibold leading-[23px] text-[#0a1416]">
        {label}
      </p>
    </div>
  );
}

export default function DesktopContext() {
  return (
    <section className="w-full bg-white px-[130px] pb-[120px] pt-[96px]">
      <div className="mx-auto flex h-[553px] w-full max-w-[1180px] flex-col items-start gap-[19.9px]">
        <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Start with your sector and jurisdiction
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          <DesktopLines
            lines={[
              "These inputs route you to the right industry, solution and trust context. They never determine",
              "which laws or controls apply to you.",
            ]}
          />
        </p>
        <div className="flex h-[420px] w-full flex-col gap-[18px]">
          <div className="flex h-[199px] w-full items-start gap-[18px]">
            <div className={`${cardCls} h-full flex-1`}>
              <CardHead icon="/regulated-industries/desktop-context-briefcase.svg" label="Industry" />
              <div className={`${inputCls} px-[12px] pb-[14.53px] pt-[14.47px]`}>
                <span className="w-full font-inter text-[12px] font-semibold text-[#757575]">
                  Choose from the approved Industries taxonomy
                </span>
              </div>
            </div>
            <div className={`${cardCls} h-full flex-1`}>
              <CardHead icon="/regulated-industries/desktop-context-globe.svg" label="Country / region / jurisdiction" />
              <div className={`${inputCls} overflow-hidden px-[12px] pb-[14.53px] pt-[14.47px]`}>
                <span className="w-full font-inter text-[14.4px] font-semibold text-[#757575]">
                  For routing and review only
                </span>
              </div>
            </div>
            <div className={`${cardCls} h-full flex-1`}>
              <CardHead icon="/regulated-industries/desktop-context-building.svg" label="Organization / operator type" />
              <div className={`${inputCls} justify-center py-[15px] pl-[16px] pr-[28px]`}>
                <span className="w-full py-px font-inter text-[14.4px] font-semibold leading-[14px] text-[#0a1416]">
                  Other / unsure
                </span>
              </div>
            </div>
            <div className={`${cardCls} h-full flex-1`}>
              <CardHead icon="/regulated-industries/desktop-context-shield.svg" label="Regulated activity" />
              <div className={`${inputCls} px-[12px] pb-[14.53px] pt-[14.47px]`}>
                <span className="w-full font-inter text-[12px] font-semibold text-[#757575]">
                  High-level description, not a compliance conclusion
                </span>
              </div>
            </div>
          </div>
          <div className="flex h-[203px] w-full items-start gap-[18px]">
            <div className={`${cardCls} h-[207px] w-[284px] shrink-0`}>
              <CardHead icon="/regulated-industries/desktop-context-leaf.svg" label="Environment" />
              <div className={`${inputCls} justify-center py-[15px] pl-[16px] pr-[28px]`}>
                <span className="w-full py-px font-inter text-[14.4px] font-semibold leading-[14px] text-[#0a1416]">
                  Unknown
                </span>
              </div>
            </div>
            <div className="relative h-[207px] min-w-px flex-1 overflow-hidden rounded-[14px] border border-solid border-[#afbdc6] bg-[#f3f9fa] shadow-[0px_4px_12px_0px_rgba(10,20,22,0.08)]">
              <Image
                src="/regulated-industries/desktop-context-stock.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 880px, 100vw"
                className="object-cover object-[50%_33.3%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
