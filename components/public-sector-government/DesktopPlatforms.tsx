import Image from "next/image";
import DesktopLines from "./DesktopLines";

const platforms = [
  { title: "Zoiko Access", desc: "Secure access patterns for public-sector use cases.", detail: "Scope confirmation required" },
  { title: "Zoiko iD", desc: "Digital identity evidence for supported methods.", detail: "Dedicated product evidence required" },
  { title: "Zoiko Assure", desc: "Assurance and regulatory evidence for approved scope.", detail: "Governance and compliance scope only" },
  { title: "Developer Platform", desc: "APIs, SDKs, and ecosystem services for approved destinations.", detail: "Destination and external access require approval" },
  { title: "Governed AI architecture", desc: "Intelligence and knowledge with responsible AI governance.", detail: "Use-case approval required" },
  { title: "Communications platforms", desc: "Adjacent scenarios for approved communication use cases.", detail: "Scope confirmation required" },
];

export default function DesktopPlatforms() {
  return (
    <section
      id="platforms"
      className="flex w-full flex-col items-center bg-[linear-gradient(119deg,#000000_0%,#0a2528_48%,#247780_100%)] pt-[93px] pb-[94px] px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="pb-[0.59px] font-poppins text-[44px] leading-[50.6px] font-bold tracking-[-1.3px] text-white">
            Readiness is part of the story.
          </h2>
          <p className="max-w-[760px] pt-[4.305px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={[
                "Product names do not substitute for maturity, operator, deployment or evidence records. States below",
                "reflect the supplied wireframe.",
              ]}
            />
          </p>
        </div>
        <div className="relative flex h-[360px] w-full flex-col justify-between overflow-hidden rounded-[10px] p-[24px]">
          <Image
            src="/public-sector-government/desktop-platforms-hero-image-card.webp"
            alt=""
            fill
            sizes="1200px"
            className="rounded-[10px] object-cover"
          />
          <div className="relative flex w-full items-center justify-between">
            <span className="rounded-full bg-[#4c7379] px-[12px] py-[8px] font-inter text-[12px] leading-[16px] font-bold whitespace-nowrap text-white">
              Stock image
            </span>
            <span className="rounded-full border border-[rgba(52,212,202,0.85)] bg-[rgba(255,255,255,0.04)] px-[12px] py-[8px] font-inter text-[12px] leading-[16px] font-bold whitespace-nowrap text-white">
              Public sector
            </span>
          </div>
          <div className="relative flex w-full flex-col gap-[8px] text-white">
            <p className="font-inter text-[20px] leading-[26px] font-bold">
              Secure access, identity, and assurance for public-sector teams.
            </p>
            <p className="font-poppins text-[12px] leading-[19.2px]">
              A fitting editorial image that supports the section without adding unwanted detail.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-3 gap-5">
          {platforms.map((p) => (
            <li
              key={p.title}
              className="flex h-[320px] min-w-0 flex-col justify-between rounded-[10px] border border-[rgba(52,212,202,0.85)] bg-[rgba(255,255,255,0.04)] p-[28px]"
            >
              <div className="flex w-full flex-col gap-5">
                <div className="flex w-full flex-col pb-[18px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#4c7379]">
                    <Image
                      src="/public-sector-government/desktop-icon-database-platform.svg"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </span>
                </div>
                <h3 className="pb-[12px] font-inter text-[20px] leading-[26px] font-bold text-[#6fd0f6]">
                  {p.title}
                </h3>
                <p className="pb-[18px] font-poppins text-[15px] leading-[24px] text-white">{p.desc}</p>
                <dl className="flex w-full flex-col border-t border-[#9bb5b8] pt-[15px] pb-[12px]">
                  <dt className="mb-[-1px] font-poppins text-[12px] leading-[19.2px] text-white">
                    Approval context
                  </dt>
                  <dd className="font-poppins text-[12px] leading-[19.2px] text-[#9bc2c6]">{p.detail}</dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
