import Image from "next/image";
import Link from "next/link";
import { WRAP } from "./layout";

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full bg-[linear-gradient(128.54deg,#000000_0%,#0a2528_48%,#247780_100%)] pb-14 pt-12 md:pb-16 md:pt-14 lg:pb-[65px] lg:pt-[27px]"
    >
      <div
        className={`${WRAP} flex flex-col items-center gap-10 lg:min-h-[608px] lg:flex-row lg:justify-between lg:gap-8`}
      >
        <div className="flex w-full flex-1 flex-col items-start gap-[15.2px] pb-3 lg:min-w-px">
          <span className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            INDUSTRIES
          </span>
          <h1 className="font-poppins text-[40px] font-bold leading-[1.08] tracking-[-2px] text-white md:text-[56px] lg:text-[64px] lg:leading-[69.12px]">
            Technology built <br className="hidden xl:block" />
            around <span className="text-[#8edbdb]">how</span>{" "}
            <br className="hidden xl:block" />
            <span className="text-[#8edbdb]">
              industries <br className="hidden xl:block" />
              actually operate.
            </span>
          </h1>
          <p className="w-full max-w-[640px] pt-[10.8px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Explore Zoiko Tech by economic sector, then move into the operational systems, solutions, technology foundations and approved evidence most relevant to your organization.
          </p>
          <div className="flex w-full flex-col gap-3 pt-[12.8px] sm:flex-row sm:flex-wrap">
            <a
              href="#core-industries"
              className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
            >
              Explore industries ↗
            </a>
            <Link
              href="/contact-us"
              className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white"
            >
              Talk to Zoiko Tech
            </Link>
          </div>
          <p className="w-full max-w-[640px] pt-[1.8px] font-poppins text-[12px] leading-[19.2px] text-[#c4d7d9]">
            True sectors only. Canonical routes. Evidence-led coverage.
          </p>
        </div>
        <div className="relative aspect-[661/496] w-full max-w-[661px] shrink-0 lg:w-[52%]">
          <Image
            src="/view-all-industries/hero-industries-diagram.webp"
            alt="Core industries, shared technology foundations and connected industries diagram"
            fill
            priority
            sizes="(min-width: 1024px) 661px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
