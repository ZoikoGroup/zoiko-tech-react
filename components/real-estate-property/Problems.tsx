import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "icon-building-columns.svg", title: ["Disconnected", "discovery"], body: ["Property information and intent", "can diverge from authoritative", "availability."] },
  { icon: "icon-user-outline.svg", title: ["Lost inquiry context"], body: ["Communication needs an owner and a supported downstream handoff."] },
  { icon: "icon-sitemap-outline.svg", title: ["Conflated financial", "outcomes"], body: ["Paid does not establish booked,", "leased, purchased or fulfilled."] },
  { icon: "icon-shield-check-outline.svg", title: ["Jurisdiction outside the journey"], body: ["Applicable rules, sources and", "evidence need reviewed context."] },
];

export default function Problems() {
  return (
    <section
      id="problems"
      className="w-full py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]"
      style={{
        backgroundImage:
          "linear-gradient(108.78deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-[35.99px]`}>
        <div className="flex flex-col items-start gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["One property journey.", "Distinct sources and responsibilities."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Clear ownership and state help teams resolve fragmented handoffs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <article
              key={c.icon}
              className="flex flex-col items-center rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 lg:min-h-[284px]"
            >
              <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={`/real-estate-property/${c.icon}`} alt="" width={25} height={25} />
              </span>
              <h3 className="mb-3 w-full text-center font-poppins text-[20px] font-bold leading-[26px] text-white">
                <Lines lines={c.title} />
              </h3>
              <p className="w-full text-center font-inter text-[15px] leading-6 text-[#c4d7d9]">
                <Lines lines={c.body} />
              </p>
            </article>
          ))}
        </div>
        <div className="relative h-[220px] overflow-hidden rounded-[10px] border border-white/[0.19] md:h-[360px] lg:h-[480px]">
          <Image
            src="/real-estate-property/problems-modern-house-at-dusk.webp"
            alt="Modern house at dusk with warmly lit glass facade"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
