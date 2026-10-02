import Image from "next/image";
import Lines from "./DesktopLines";

export default function Hero() {
  return (
    <section
      className="w-full px-[130px] pb-24 pt-[95px]"
      style={{
        backgroundImage:
          "linear-gradient(138.43deg, #000000 0%, #1c5c62 100%)",
      }}
    >
      <div className="relative mx-auto w-full max-w-[1180px] lg:min-h-[560px] xl:h-[602px]">
        <div className="relative z-10 flex w-full flex-col items-start">
          <span className="font-inter rounded-full border border-[#7fd0d9] px-[10px] pb-[2.47px] pt-px text-[12.8px] font-semibold leading-[20.48px] text-[#7fd0d9]">
            Technology &amp; SaaS
          </span>

          <h1 className="font-sora mt-[16.8px] w-[50%] text-[36px] xl:w-[54.2%] font-bold leading-[1.15] tracking-[-1.088px] text-white xl:text-[54.4px] xl:leading-[62.56px]">
            <Lines
              lines={[
                "Build and operate",
                "technology products",
                "on foundations that",
                "keep scale, identity,",
                "governance and",
                "evidence connected.",
              ]}
            />
          </h1>

          <p className="font-inter mt-8 w-[70%] text-[17.6px] leading-[28.16px] text-[#dcecee] xl:w-[777px]">
            <Lines
              lines={[
                "Zoiko Tech supports technology companies across AI, APIs, infrastructure, identity,",
                "developer tooling and operational platforms, with product maturity, integration, security and",
                "governance boundaries kept explicit.",
              ]}
            />
          </p>

          <div className="font-inter mt-[18px] flex w-full flex-wrap items-center">
            <a
              href="#technology-pathways"
              className="mb-3 mr-3 flex min-h-[48px] items-center rounded-[10px] border-2 border-white bg-white px-6 text-base font-semibold text-black"
            >
              Explore technology-company pathways
            </a>
            <a
              href="/contact-us"
              className="mb-3 mr-3 flex min-h-[48px] items-center rounded-[10px] border-2 border-[#7fd0d9] px-6 text-base font-semibold text-white"
            >
              Discuss your platform architecture
            </a>
            <a
              href="/technology-saas"
              className="mb-3 p-3 text-base font-semibold leading-[25.6px] text-[#7fd0d9] underline decoration-solid"
            >
              Explore Technology &amp; SaaS Solutions →
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute left-[52.7%] top-[-43px] aspect-square w-[46.4%]">
          <Image
            src="/technology-saas-industry/desktop-hero-illustration.webp"
            alt="Connected technology platform: servers, code, identity and evidence"
            width={547}
            height={547}
            priority
            sizes="(min-width: 1440px) 547px, 46vw"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
