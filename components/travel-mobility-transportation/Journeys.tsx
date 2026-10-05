import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    icon: "/travel-mobility-transportation/icon-orchestration.svg",
    title: "Broader journey context",
    text: "Travel and mobility sit within supported cross-domain objectives.",
  },
  {
    icon: "/travel-mobility-transportation/icon-shield-check.svg",
    title: "Derived vs definitive",
    text: "Recommendations remain separate from provider availability, price and service confirmation.",
  },
];

export default function Journeys() {
  return (
    <section
      id="journeys"
      className="w-full bg-[linear-gradient(120.7deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[28px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-4xl lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Start with the life objective.", "Make provider handoffs visible."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.49px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            <Lines
              lines={[
                "Zoiko Arc is described as an AI-powered life-orchestration ecosystem spanning travel, health, education,",
                "finance, mobility and connectivity.",
              ]}
            />
          </p>
        </div>
        <div className="grid items-center gap-10 lg:min-h-[494px] lg:grid-cols-[469px_minmax(0,1fr)] lg:gap-12">
          <div className="grid gap-5 md:grid-cols-2 lg:h-[494px] lg:grid-cols-1 lg:content-between">
            {cards.map((c) => (
              <article
                key={c.title}
                className="rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto w-full max-w-[657px] lg:justify-self-end">
            <Image
              src="/travel-mobility-transportation/journeys-architecture-illustration.webp"
              alt=""
              width={1400}
              height={1050}
              className="-scale-x-100 h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
