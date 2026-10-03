import Image from "next/image";

export default function DesktopHero() {
  return (
    <section
      id="top"
      className="w-full pb-[60px] pt-[40px] px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(120.79536012869652deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid min-h-[660px] grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-8 xl:grid-cols-[612px_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col gap-[14.9px] pb-3">
            <h1 className="pb-[0.865px] font-poppins text-[62px] font-bold leading-[66.96px] tracking-[-2px] text-white">
              Build public digital
              <br />
              services <span className="text-[#8edbdb]">people can</span>
              <br />
              <span className="text-[#8edbdb]">access,</span>
              {" "}agencies
              <br />
              can operate and
              <br />
              reviewers can audit.
            </h1>
            <p className="max-w-[640px] pt-[11.09px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              Zoiko Tech supports public-sector technology across digital infrastructure, identity, governed AI, communications, data and public-service workflows — with accessibility, jurisdiction, authority and evidence treated as part of the operating architecture.
            </p>
            <div className="flex flex-wrap gap-x-3 pb-[11.6px] pt-[13.1px] xl:w-[625px] xl:flex-nowrap">
              <a
                href="#pathways"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
              >
                Explore public-service pathways
              </a>
              <a
                href="/contact-us"
                className="flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white"
              >
                Discuss your public-sector architecture
              </a>
            </div>
            <a
              href="#architecture"
              className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]"
            >
              Explore trust architecture →
            </a>
          </div>

          <div className="flex w-full min-w-0 max-w-[541px] flex-col self-stretch justify-self-end pb-[7px]">
            <div className="relative h-[535px] w-full">
              <div className="pointer-events-none absolute left-[calc(48.6%+12px)] top-[calc(52%-21px)] aspect-square w-[97%] -translate-x-1/2 -translate-y-1/2 rotate-[30deg]">
                <Image
                  src="/public-sector-government/desktop-hero-teal-modules.webp"
                  alt="Connected teal modules illustrating identity, governed workflows, data and evidence foundations"
                  fill
                  priority
                  sizes="540px"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-[10.1px] border-t border-[#59848a] pt-[24.5px]">
              <p className="text-center font-poppins text-[10px] leading-[16px] tracking-[2px] text-[#a6ced0]">
                PUBLIC DIGITAL-SERVICE FOUNDATIONS
              </p>
              <p className="text-center font-poppins text-[14px] leading-[22.4px] text-[#c4d7d9]">
                Accessible channel → Authority → Workflow → Evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
