import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const specimen = [
  ["Channel / location", "Sample call / sample location"],
  ["Endpoint", "Market availability requires confirmation"],
  ["Intent", "Sample service inquiry"],
  ["Current owner", "Customer operations — specimen"],
  ["State", "Assigned"],
  ["Next action", "Confirm supported downstream handoff"],
  ["Evidence", "Channel, owner and routing event retained"],
];

export default function Communications() {
  return (
    <section
      id="communications"
      className="w-full bg-[linear-gradient(119deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:pb-[94px] md:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-8 md:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8] font-poppins lg:hidden">
            04 / CUSTOMER COMMUNICATIONS &amp; LOCAL REACHABILITY
          </p>
          <h2 className="font-poppins text-[26px] font-bold leading-[30px] tracking-[-1.3px] text-white md:text-[29px] md:leading-[33.35px] lg:text-[38px] lg:leading-[44px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Connect the conversation", "to accountable operating work."]}
              tablet={["Connect the conversation", "to accountable operating work."]}
            />
          </h2>
          <p className="max-w-[760px] pt-1 font-poppins text-[15px] leading-6 text-[#c4d7d9] md:text-[16px] md:leading-[25.6px]">
            <Lines
              desktop={[
                "Zoiko Local is described as local numbers, calling, video, routing and AI-powered customer",
                "communications. Exact market availability and capabilities require product evidence.",
              ]}
              tablet={[
                "Zoiko Local is described as local numbers, calling, video, routing and AI-powered customer",
                "communications. Exact market availability and capabilities require product evidence.",
              ]}
            />
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:h-[536px] lg:flex-row lg:items-stretch lg:gap-11">
          {/* Cards */}
          <div className="flex flex-col gap-5 md:flex-row lg:w-[344px] lg:shrink-0 lg:flex-col">
            <a
              href="#pathways"
              className="flex flex-1 flex-col items-start rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 lg:items-center lg:text-center"
            >
              <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src="/retail-commerce/desktop-adjacent-icon-phone.svg" alt="" width={25} height={25} />
              </span>
              <h3 className="mb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">
                Reachability &amp; routing
              </h3>
              <p className="font-poppins text-[15px] leading-6 text-[#c4d7d9]">
                <Lines desktop={["Supported endpoints and routing", "to the right team or workflow."]} />
              </p>
              <span className="mt-5 font-poppins text-[13px] font-bold leading-[20.8px] text-[#9cdee0] lg:hidden">
                Explore pathway <span aria-hidden="true">↗</span>
              </span>
            </a>
            <a
              href="#pathways"
              className="flex flex-1 flex-col items-start rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 lg:items-center lg:text-center"
            >
              <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src="/retail-commerce/desktop-icon-user.svg" alt="" width={25} height={25} />
              </span>
              <h3 className="mb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">Human oversight</h3>
              <p className="font-poppins text-[15px] leading-6 text-[#c4d7d9]">
                <Lines
                  desktop={["AI-assisted communications", "remain bounded by approved", "scope."]}
                />
              </p>
              <span className="mt-5 font-poppins text-[13px] font-bold leading-[20.8px] text-[#9cdee0] lg:hidden">
                Explore pathway <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>

          {/* Desktop: photo */}
          <div className="relative hidden min-w-0 flex-1 rounded-[12px] bg-[rgba(5,27,32,0.5)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)] lg:block">
            <div className="relative h-full overflow-hidden rounded-[12px] border-b border-[rgba(120,152,156,0.27)]">
              <Image
                src="/retail-commerce/desktop-communications-call-agent.webp"
                alt="Smiling customer-communications agent wearing a headset at her desk"
                fill
                sizes="(min-width: 1280px) 760px, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile + tablet: specimen */}
          <div className="rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)] md:flex-1 lg:hidden">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="max-w-[160px] font-poppins text-[18px] font-bold leading-[23.4px] text-white">
                Customer interaction / RC-001
              </h3>
              <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-poppins text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {specimen.map(([label, value], i) => (
                <div
                  key={label}
                  className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 py-4 font-poppins text-[13px] leading-[20.8px] ${
                    i < specimen.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                  }`}
                >
                  <dt className="text-[#9bc2c6]">{label}</dt>
                  <dd className="text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
