import Image from "next/image";
import { WRAP } from "./layout";

const BR = <br className="hidden xl:block" />;

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full pb-14 pt-12 md:pb-16 md:pt-14 lg:pb-[7px] lg:pt-[46px]"
      style={{
        backgroundImage:
          "linear-gradient(128.54deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div
        className={`${WRAP} grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[666px_minmax(0,1fr)]`}
      >
        <div className="flex min-w-0 flex-col items-start gap-[14.8px] pb-3">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            REAL ESTATE &amp; PROPERTY
          </p>
          <h1 className="pb-[0.77px] font-poppins text-[34px] font-bold leading-[1.3] tracking-[-2px] text-white md:text-[44px] xl:whitespace-nowrap xl:text-[50px] xl:leading-[66.96px]">
            Connect property {BR}
            discovery and operations {BR}
            to authoritative transaction {BR}
            systems <span className="text-[#8edbdb]">without hiding {BR}</span>
            <span className="text-[#8edbdb]">
              ownership or compliance {BR}
              boundaries.
            </span>
          </h1>
          <p className="max-w-[640px] pt-[10.58px] font-inter text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Zoiko Tech supports real-estate and accommodation organizations with technology across property
            operations, communications, payments and compliance-aware experiences — designed to keep provider,
            operator, jurisdiction, transaction and system-of-record boundaries explicit.
          </p>
          <div className="flex w-full flex-col gap-3 pb-[11.7px] pt-[13.2px] sm:flex-row sm:flex-wrap">
            <a
              href="#pathways"
              className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
            >
              Explore property pathways ↗
            </a>
            <a
              href="/contact-us"
              className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white"
            >
              Discuss your property architecture
            </a>
          </div>
          <a href="#pathways" className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]">
            Explore Property &amp; Accommodation →
          </a>
        </div>

        <div className="flex w-full min-w-0 flex-col items-start lg:mt-[49px]">
          <div className="relative mx-auto aspect-[556.2/535] w-full">
            <div className="absolute left-[1.91%] top-0 h-full w-[96.19%]">
              <Image
                src="/real-estate-property/property-operating-architecture-hero.webp"
                alt="Teal connected workflow modules representing separate provider, transaction and operations systems"
                fill
                sizes="(min-width: 1280px) 590px, 100vw"
                priority
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-[10.09px] border-t border-[#59848a] pt-[24.5px]">
            <p className="text-center font-inter text-[10px] leading-4 tracking-[2px] text-[#a6ced0]">
              PROPERTY OPERATING ARCHITECTURE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
