import Image from "next/image";
import { WRAP } from "./layout";

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full bg-[linear-gradient(126.93deg,#000_0%,#0a2528_48%,#247780_100%)] pb-14 pt-14 lg:pb-[65px] lg:pt-[28px]"
    >
      <div className={WRAP}>
        <div className="grid grid-cols-1 items-center gap-10 lg:min-h-[727px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-col items-start gap-[14.9px] pb-3">
            <p className="font-poppins text-xs font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              TRAVEL, MOBILITY &amp; TRANSPORTATION
            </p>
            <h1 className="font-poppins text-[40px] font-bold leading-[1.08] tracking-[-2px] text-white md:text-[52px] lg:text-[62px] lg:leading-[66.96px]">
              Connect mobility <br className="hidden xl:block" />
              journeys and <br className="hidden xl:block" />
              operations without <br className="hidden xl:block" />
              obscuring <span className="text-[#8edbdb]">who </span>
              <br className="hidden xl:block" />
              <span className="text-[#8edbdb]">
                actually owns the <br className="hidden xl:block" />
                service.
              </span>
            </h1>
            <p className="max-w-[640px] pt-[11.1px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
              Zoiko Tech supports travel and mobility experiences through life orchestration,{" "}
              <br className="hidden xl:block" />
              connected operations, communications, identity and integration patterns — with{" "}
              <br className="hidden xl:block" />
              provider, market, maturity and authoritative-service boundaries kept explicit.
            </p>
            <div className="flex w-full flex-col gap-3 pt-[13px] sm:flex-row sm:flex-wrap">
              <a
                href="#pathways"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-sm font-bold leading-[22.4px] text-[#0a3639]"
              >
                Explore mobility pathways ↗
              </a>
              <a
                href="/contact-us"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center font-poppins text-sm font-bold leading-[22.4px] text-white"
              >
                Discuss your mobility architecture
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start pb-[7px]">
            <div className="relative aspect-[556.2/535] max-h-[535px] w-full">
              <Image
                src="/travel-mobility-transportation/hero-connected-modules-illustration.webp"
                alt="Connected teal workflow modules illustrating orchestration and separate provider systems"
                fill
                priority
                sizes="(min-width: 1024px) 584px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="flex w-full flex-col items-center gap-[10.1px] border-t border-[#59848a] pt-[24.5px]">
              <p className="text-center font-inter text-[10px] leading-4 tracking-[2px] text-[#a6ced0]">
                CONNECTED JOURNEY / OPERATING ARCHITECTURE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
