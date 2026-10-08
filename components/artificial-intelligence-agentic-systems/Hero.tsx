import Image from "next/image";
import { WRAP } from "./layout";

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full pb-14 pt-10 lg:pb-[57px] lg:pt-[44px]"
      style={{
        backgroundImage:
          "linear-gradient(136.85205953120106deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_401px] lg:gap-6`}>
        <div className="flex flex-col">
          <p className="pt-2 font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8] lg:pt-6">
            ARTIFICIAL INTELLIGENCE &amp; AGENTIC SYSTEMS
          </p>
          <h1 className="mt-3 pt-3 font-poppins text-[38px] font-bold leading-[1.08] tracking-[-1.7px] text-white md:text-[54px] lg:mt-[18px] xl:text-[66px]">
            Move from intelligence <br className="hidden xl:block" />
            to action{" "}
            <span className="text-[#97d0d5]">
              without losing <br className="hidden xl:block" />
              control evidence or <br className="hidden xl:block" />
              human accountability.
            </span>
          </h1>
          <div className="flex flex-col gap-[11px] pt-[13px] lg:px-[7px]">
            <p className="max-w-[700px] pb-4 font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              Zoiko Tech develops domain-specific intelligence and governed agentic systems that connect models, knowledge, permissions, workflow execution, evidence and human oversight across real operating domains.
            </p>
            <div className="flex flex-col gap-3 pb-[18px] pt-3 sm:flex-row sm:flex-wrap lg:pt-[28px]">
              <a
                href="#pathways"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
              >
                Explore AI architecture ↓
              </a>
              <a
                href="/contact-us"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white"
              >
                Discuss your AI operating model
              </a>
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-[401/524] w-full max-w-[401px] lg:mt-[27px]">
          <Image
            src="/artificial-intelligence-agentic-systems/hero-ai-to-action-illustration.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 401px, 80vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
