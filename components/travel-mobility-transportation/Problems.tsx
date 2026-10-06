import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  { icon: "icon-orchestration.svg", title: ["Fragmented provider", "journeys"], text: "Separate providers and systems can obscure ownership and the next step." },
  { icon: "icon-sitemap.svg", title: ["Unclear operating", "states"], text: "Delays, unavailable services and exceptions need explicit owners." },
  { icon: "icon-database.svg", title: ["Product readiness", "ambiguity"], text: "Named mobility products require accurate maturity and public-scope treatment." },
  { icon: "icon-globe.svg", title: ["Cross-border", "complexity"], text: "Identity, markets and regulated decisions require responsible-provider handoffs." },
];

export default function Problems() {
  return (
    <section
      id="problems"
      className="w-full bg-[linear-gradient(121.35deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-4xl lg:text-[44px] lg:leading-[50.6px]">
            One journey. Multiple providers and responsibilities.
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9] xl:whitespace-nowrap">
            Resolve fragmentation without assuming that one platform owns every service.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article
              key={c.icon}
              className="flex flex-col items-center rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 lg:min-h-[262px]"
            >
              <div className="flex h-[68px] w-[46px] shrink-0 flex-col pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={`/travel-mobility-transportation/${c.icon}`} alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="w-full pb-3 text-center font-poppins text-xl font-bold leading-[26px] text-white">
                <Lines lines={c.title} />
              </h3>
              <p className="w-full text-center font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
