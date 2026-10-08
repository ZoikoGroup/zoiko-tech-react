import Image from "next/image";
import { WRAP } from "./layout";

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full pb-14 pt-8 md:pb-16 lg:pb-[84px] lg:pt-[55px]"
      style={{
        backgroundImage:
          "linear-gradient(126.91687775960861deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col`}>
        <div className="flex h-[45px] items-start py-5">
          <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1.5px] text-[#b6d6dc]">
            ZOIKO RESEARCH
          </span>
        </div>
        <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:mt-0 lg:h-[412.73px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-[34.295px] pb-[17.99px] lg:pt-[34.22px]">
            <h1 className="font-poppins text-4xl font-bold leading-[1.06] tracking-[-2px] text-white md:text-5xl xl:text-[62px] xl:leading-[65.72px]">
              Research you can <br className="hidden xl:block" />
              inspect, <br className="hidden xl:block" />
              <span className="text-[#98d0d5]">not just cite.</span>
            </h1>
            <div className="flex flex-col gap-7">
              <p className="max-w-[630px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
                Explore research, publications, benchmarks and technical papers from Zoiko Tech, with source, method, version, limitations and current state kept visible.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#pathways"
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
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[18px]">
            <Image
              src="/zoiko-research/hero-research-folios-illustration.webp"
              alt="Illustrative technical folios, open publication, source archive and review modules"
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
