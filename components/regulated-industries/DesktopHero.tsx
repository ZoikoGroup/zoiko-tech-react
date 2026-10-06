import Image from "next/image";
import DesktopLines from "./DesktopLines";

export default function DesktopHero() {
  return (
    <section
      className="relative w-full overflow-hidden px-[130px] pb-[120px] pt-[95px]"
      style={{
        backgroundImage:
          "linear-gradient(143.8928324327731deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="relative mx-auto h-[537px] w-full max-w-[1180px]">
        <span className="absolute left-0 top-0 flex items-start whitespace-nowrap rounded-[99px] border border-solid border-[#7fd0d9] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#7fd0d9]">
          Regulated Industries
        </span>
        <h1 className="absolute left-0 right-[465px] top-[25.47px] max-w-[913px] pt-[17.845px] font-sora text-[54.4px] font-bold leading-[62.56px] tracking-[-1.088px] text-white">
          <DesktopLines
            lines={[
              "Operate across regulated",
              "environments with clearer",
              "controls, evidence and",
              "accountability.",
            ]}
          />
        </h1>
        <p className="absolute left-0 top-[293.32px] w-[685px] max-w-[777px] pt-[32.765px] font-inter text-[17.6px] font-normal leading-[28.16px] text-[#dcecee]">
          Zoiko Tech supports organizations operating under material regulatory, security, privacy, identity and governance requirements by connecting obligations, controls, evidence and accountable workflows — while keeping jurisdiction, operator and claim boundaries explicit.
        </p>
        <div className="absolute left-0 right-0 top-[438.08px] flex h-[78.6px] flex-wrap items-start pt-[18.6px]">
          <div className="flex min-h-[60px] flex-col items-start justify-center self-stretch pb-[12px] pr-[12px]">
            <a
              href="#"
              className="flex min-h-[48px] flex-1 items-center whitespace-nowrap rounded-[10px] border-2 border-solid border-white bg-white px-[24px] font-inter text-[16px] font-semibold text-black"
            >
              Explore regulated requirements
            </a>
          </div>
          <div className="flex min-h-[60px] flex-col items-start justify-center self-stretch pb-[12px] pr-[12px]">
            <a
              href="#"
              className="flex min-h-[48px] flex-1 items-center whitespace-nowrap rounded-[10px] border-2 border-solid border-[#7fd0d9] px-[24px] font-inter text-[16px] font-semibold text-white"
            >
              Discuss your regulated operating architecture
            </a>
          </div>
        </div>
        <p className="absolute left-0 top-[515.68px] whitespace-nowrap font-inter text-[12.8px] font-normal leading-[20.48px] text-[#dcecee]">
          Jurisdiction-aware. Evidence-led. Operator-clear. Human-accountable.
        </p>
        <div className="absolute left-[689px] top-[6px] size-[531px]">
          <Image
            src="/regulated-industries/desktop-hero-illustration.webp"
            alt=""
            width={1200}
            height={1200}
            priority
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
