import Image from "next/image";
import TabletLines from "./TabletLines";

export default function TabletHero() {
  return (
    <section
      id="top-t"
      className="relative w-full overflow-hidden pb-[60px] pt-[40px] font-poppins px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[42px]">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-[14px] text-[12px] leading-[19.2px] text-[#b4cece]"
        >
          <a href="/">Home</a>
          <span aria-hidden="true" className="opacity-50">
            /
          </span>
          <a href="#">Industries</a>
          <span aria-hidden="true" className="opacity-50">
            /
          </span>
          <span aria-current="page">Public Sector &amp; Government</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-[10px] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col items-start gap-[16px] pb-[12px]">
            <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              PUBLIC SECTOR &amp; GOVERNMENT
            </span>
            <h1 className="w-full text-[clamp(34px,8vw,44px)] font-bold leading-[1.08] tracking-[-2px] text-white">
              Build public digital <br className="hidden md:block" />
              services <span className="text-[#8edbdb]">people</span>{" "}
              <br className="hidden md:block" />
              <span className="text-[#8edbdb]">can access,</span>{" "}
              <br className="hidden md:block" />
              agencies can <br className="hidden md:block" />
              operate and <br className="hidden md:block" />
              reviewers can <br className="hidden md:block" />
              audit.
            </h1>
            <p className="w-full max-w-[640px] pt-[9.475px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
              <TabletLines
                lines={[
                  "Zoiko Tech supports public-sector technology across",
                  "digital infrastructure, identity, governed AI,",
                  "communications, data and public-service workflows",
                  "— with accessibility, jurisdiction, authority and",
                  "evidence treated as part of the operating",
                  "architecture.",
                ]}
              />
            </p>
            <div className="flex w-full flex-col items-start gap-[12px] pb-[10.5px] pt-[12px] max-sm:items-stretch">
              <a
                href="#pathways-t"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-[12px] text-center text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
              >
                Explore public-service pathways ↗
              </a>
              <a
                href="/contact-us"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-[12px] text-center text-[14px] font-bold leading-[22.4px] text-white"
              >
                Discuss your public-sector architecture
              </a>
            </div>
            <a href="#architecture-t" className="text-[14px] font-bold leading-[22.4px] text-[#9adddf]">
              Explore trust architecture →
            </a>
            <p className="w-full max-w-[640px] pt-[13.595px] text-[12px] leading-[19.2px] text-[#c4d7d9]">
              Accessible by design. Authority-aware. Evidence-led. Jurisdiction-conscious.
            </p>
          </div>

          <div className="flex min-w-0 flex-col items-start pb-[7px]">
            <div className="relative aspect-square max-h-[535px] w-full">
              <Image
                src="/public-sector-government/tablet-hero-foundations-modules.webp"
                alt="Connected teal modules illustrating identity, governed workflows, data and evidence foundations"
                fill
                sizes="(min-width: 768px) 340px, 90vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex w-full flex-col items-center gap-[10.1px] border-t border-[#59848a] pt-[24.5px]">
              <span className="text-center text-[10px] leading-[16px] tracking-[2px] text-[#a6ced0]">
                PUBLIC DIGITAL-SERVICE FOUNDATIONS
              </span>
              <p className="text-center text-[14px] leading-[22.4px] text-[#c4d7d9]">
                <TabletLines lines={["Accessible channel → Authority → Workflow →", "Evidence"]} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
