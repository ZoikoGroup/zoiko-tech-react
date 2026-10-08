import Image from "next/image";
import { WRAP } from "./layout";

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full pb-14 pt-12 md:pb-16 md:pt-14 lg:pb-[57px] lg:pt-[44px]"
      style={{
        backgroundImage:
          "linear-gradient(125.3460275350923deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={WRAP}>
        <div className="grid grid-cols-1 items-center gap-10 pb-[13px] pt-[25px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-col items-start gap-[14.9px] pb-[18px]">
            <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              GUIDES &amp; REPORTS
            </p>
            <h1 className="pb-[0.91px] font-poppins text-[36px] font-bold leading-[1.1] tracking-[-1.5px] text-white md:text-[48px] xl:whitespace-nowrap xl:text-[62px] xl:leading-[66.96px]">
              Practical resources <br className="hidden xl:block" />
              <span className="text-[#91d0d6]">worth reading</span>{" "}
              <br className="hidden xl:block" />
              before you download.
            </h1>
            <p className="max-w-[640px] pt-[10.485px] font-poppins text-[16px] leading-[25.6px] text-white">
              Explore structured guides and reports designed to help teams evaluate, implement and operate complex technology and business systems. Every published resource should make its purpose, scope, currentness, sources and access state clear — without thin teaser pages or invented proof.
            </p>
            <div className="flex w-full flex-wrap gap-3 pt-[13.1px]">
              <a
                href="#library"
                className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639] sm:w-auto"
              >
                Browse guides &amp; reports ↓
              </a>
              <a
                href="/analyst-reports"
                className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white sm:w-auto"
              >
                Explore Research
              </a>
            </div>
          </div>
          <div className="pb-3">
            <div className="relative aspect-[556.2/370.8] max-h-[535px] w-full overflow-hidden rounded-[18px]">
              <Image
                src="/guides-reports/authority-source-archive.webp"
                alt="Illustrative teal knowledge library with open guide, document folios, source archive, reading lens and review clipboard"
                fill
                sizes="(min-width: 1024px) 610px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
