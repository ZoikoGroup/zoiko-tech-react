import Image from "next/image";
import Link from "next/link";
import TabletLines from "./TabletLines";

export default function TabletHero() {
  return (
    <section
      id="top-t"
      className="relative w-full overflow-hidden px-[5%] pb-[65px] pt-[28px]"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[42px]">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-[14px] font-poppins text-[12px] leading-[19.2px] text-[#b4cece]"
        >
          <a href="/">Home</a>
          <span aria-hidden="true" className="opacity-50">/</span>
          <a href="#">Industries</a>
          <span aria-hidden="true" className="opacity-50">/</span>
          <span aria-current="page">Financial Services</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-x-[8px] gap-y-10 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col items-start gap-[15.3px] pb-[12px]">
            <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              FINANCIAL SERVICES
            </p>
            <h1 className="font-poppins text-[clamp(32px,5.6vw,43px)] font-bold leading-[1.08] tracking-[-2px] text-white">
              <TabletLines lines={["Modernize financial", "operations without"]} />{" "}
              <br className="hidden md:block" />
              separating <span className="text-[#8edbdb]">speed</span>{" "}
              <br className="hidden md:block" />
              <span className="text-[#8edbdb]">from control.</span>
            </h1>
            <p className="max-w-[640px] pt-[10.185px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              Zoiko Tech supports financial-services organizations with technology across payments,
              remittance, billing, payroll, compliance, identity and specialist intelligence —
              designed to connect operational workflows with clearer authority, evidence and
              integration boundaries.
            </p>
            <div className="flex w-full flex-col items-start gap-[12px] pb-[11.2px] pt-[12.7px]">
              <a
                href="#pathways-t"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-[12px] text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639] max-sm:w-full"
              >
                Explore financial pathways ↗
              </a>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-[12px] text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white max-sm:w-full"
              >
                Discuss your architecture
              </Link>
            </div>
            <a
              href="#architecture-t"
              className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]"
            >
              Explore Financial Services Technology →
            </a>
            <p className="max-w-[640px] pt-[14.2px] font-poppins text-[12px] leading-[19.2px] text-[#c4d7d9]">
              Operator-aware. Evidence-led. Identity-controlled. Integration-ready.
            </p>
          </div>

          <div className="flex min-w-0 flex-col items-start pb-[7px]">
            <div className="relative w-full">
              <Image
                src="/financial-services/tablet-hero-architecture-illustration.webp"
                alt="Connected source documents, controlled workflows and retained evidence in a teal architecture illustration"
                width={1000}
                height={1000}
                className="mx-auto h-auto max-h-[535px] w-full object-contain"
                priority
              />
            </div>
            <div className="flex w-full flex-col items-center gap-[10.09px] border-t border-[#59848a] pt-[24.5px]">
              <p className="text-center font-poppins text-[10px] leading-[16px] tracking-[2px] text-[#a6ced0]">
                THE OPERATING FOUNDATION
              </p>
              <p className="text-center font-poppins text-[14px] leading-[22.4px] text-[#c4d7d9]">
                Identity → Workflows → Controls → Evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
