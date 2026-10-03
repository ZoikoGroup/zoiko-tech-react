import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "/real-estate-property/icon-code-outline.svg", title: "Build", body: ["Approved APIs, SDKs, events", "and authentication."] },
  { icon: "/real-estate-property/icon-current-information.svg", title: "Learn", body: ["Documentation, reference", "material and architecture guides."] },
  { icon: "/real-estate-property/icon-shield-check-outline.svg", title: "Test", body: ["Sample and sandbox access only when externally live."] },
  { icon: "/real-estate-property/icon-sitemap-outline.svg", title: "Operate", body: ["Supported usage, observability,", "status and developer assistance."] },
];

export default function Developers() {
  return (
    <section
      id="developers"
      className="w-full bg-[linear-gradient(120.86deg,#000000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-16 lg:pb-[108px] lg:pt-[93px]"
    >
      <div className={WRAP}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Connect documented systems.", "Observe authoritative responses."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Establish interface scope, ownership, identity and recovery behavior.
          </p>
        </div>
        <div className="flex flex-col gap-5 pt-9">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((c) => (
              <li
                key={c.title}
                className="flex flex-col items-center rounded-[10px] border border-solid border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7 lg:min-h-[234px]"
              >
                <div className="flex h-[68px] w-[46px] flex-col items-start pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                </div>
                <h3 className="w-full pb-3 text-center font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="w-full pb-[22px] text-center font-inter text-[15px] leading-6 text-[#c4d7d9]">
                  <Lines lines={c.body} />
                </p>
              </li>
            ))}
          </ul>
          <div className="pt-6 lg:pt-10">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[14px] md:h-[320px] lg:h-[400px]">
              <Image
                src="/real-estate-property/developers-team-coding.webp"
                alt="Developers collaborating on code in a modern office"
                fill
                sizes="(min-width: 1440px) 1280px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
