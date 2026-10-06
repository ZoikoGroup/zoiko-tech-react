import Image from "next/image";
import DesktopLines from "./DesktopLines";

export default function DesktopHero() {
  return (
    <section
      id="top"
      className="relative flex w-full flex-col items-center justify-center px-10 pb-[65px] pt-[28px] font-poppins xl:px-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(119.40723119489108deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] py-[40px]">
        <div className="grid min-h-[619px] grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-x-8">
          <div className="flex min-w-0 flex-col items-start gap-[14.9px] pb-[12px]">
            <h1 className="pb-[0.9px] text-[46px] font-bold leading-[1.08] tracking-[-2px] text-white xl:text-[62px] xl:leading-[66.96px]">
              <span className="xl:whitespace-nowrap">
                Modernize financial <br className="hidden xl:block" />
                operations without <br className="hidden xl:block" />
                separating <span className="text-[#8edbdb]">speed</span>{" "}
                <br className="hidden xl:block" />
                <span className="text-[#8edbdb]">from control.</span>
              </span>
            </h1>
            <p className="max-w-[640px] pt-[10.5px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
              <DesktopLines
                lines={[
                  "Zoiko Tech supports financial-services organizations with technology across",
                  "payments, remittance, billing, payroll, compliance, identity and specialist",
                  "intelligence— designed to connect operational workflows with clearer",
                  "authority, evidence and integration boundaries.",
                ]}
              />
            </p>
            <div className="flex w-full flex-wrap gap-x-3 pb-[11.6px] pt-[13.1px]">
              <a
                href="#pathways"
                className="flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
              >
                Explore financial pathways ↗
              </a>
              <a
                href="/contact-us"
                className="flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-[14px] font-bold leading-[22.4px] text-white"
              >
                Discuss your architecture
              </a>
            </div>
            <a
              href="#architecture"
              className="whitespace-nowrap text-[14px] font-bold leading-[22.4px] text-[#9adddf]"
            >
              Explore Financial Services Technology →
            </a>
          </div>
          <div className="flex min-w-0 flex-col items-start justify-self-stretch pb-[7px]">
            <div className="relative aspect-[556.2/535] max-h-[535px] w-full">
              <Image
                src="/financial-services/desktop-hero-architecture-illustration.webp"
                alt="Connected source documents, controlled workflows and retained evidence in a teal architecture illustration"
                fill
                sizes="(min-width: 1280px) 556px, 45vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex w-full flex-col items-center gap-[10.1px] border-t border-[#59848a] pt-[24.5px]">
              <p className="whitespace-nowrap text-center text-[10px] leading-[16px] tracking-[2px] text-[#a6ced0]">
                THE OPERATING FOUNDATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
