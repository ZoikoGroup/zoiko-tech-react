import Image from "next/image";
import { WRAP } from "./layout";

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full overflow-x-clip pt-8 pb-12 lg:pt-[39px] lg:pb-[55px]"
      style={{
        backgroundImage:
          "linear-gradient(127.34440276710053deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col`}>
        <div className="flex h-[59.59px] items-start py-5 lg:-mb-px">
          <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1.5px] text-[#80c3cc]">
            FRONTIER TECHNOLOGIES
          </span>
        </div>
        <div className="grid grid-cols-1 items-center gap-9 lg:min-h-[504.05px] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-[35px]">
          <div className="flex flex-col items-start gap-[35px] pb-[18px] pt-0 lg:pt-[35px]">
            <h1 className="font-poppins text-[40px] font-bold leading-[1.06] tracking-[-1px] text-white md:text-[52px] md:tracking-[-1.5px] xl:text-[62px] xl:leading-[65.72px] xl:tracking-[-2px]">
              Explore emerging <br className="hidden xl:block" />
              technology <br className="hidden xl:block" />
              <span className="text-[#98d0d5]">
                with the boundaries <br className="hidden xl:block" />
                visible.
              </span>
            </h1>
            <p className="max-w-[601px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              Zoiko Tech applies shared AI, digital infrastructure, enterprise operations,{" "}
              <br className="hidden xl:block" />
              communications, integration, security and evidence foundations to
              industry-specific systems — preserving domain rules, operator ownership,
              jurisdiction, maturity and authoritative state.
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#portfolio"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
              >
                Explore research ↓
              </a>
              <a
                href="#collaboration"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white"
              >
                Collaboration context
              </a>
            </div>
          </div>
          <figure className="m-0 flex justify-end">
            <div className="relative aspect-[681/454] w-full overflow-hidden rounded-[18px] lg:w-[120%] lg:max-w-none lg:shrink-0">
              <Image
                src="/frontier-technologies/hero-research-documents-lens-archive.webp"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 680px, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
