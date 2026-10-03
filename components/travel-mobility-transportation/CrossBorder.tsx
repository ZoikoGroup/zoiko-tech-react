import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const CARDS = [
  {
    icon: "/travel-mobility-transportation/icon-globe.svg",
    title: "Market & jurisdiction",
    lines: ["Confirm scope wherever it affects provider", "responsibility or availability."],
  },
  {
    icon: "/travel-mobility-transportation/icon-landmark.svg",
    title: "Provider chain",
    lines: ["Make each service transition and ownership", "boundary understandable."],
  },
  {
    icon: "/travel-mobility-transportation/icon-lock.svg",
    title: "Necessary information",
    lines: ["Do not collect identity documents without a", "dedicated approved workflow."],
  },
];

export default function CrossBorder() {
  return (
    <section
      id="cross-border"
      className="w-full bg-[linear-gradient(124.87deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-20 lg:pb-[108px] lg:pt-[93px]"
    >
      <div className={WRAP}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines lines={["A provider chain with explicit", "jurisdiction and responsibility."]} />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Coordinate supported life-service handoffs while preserving the authority of official and regulated providers.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-9 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7"
            >
              <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">
                <Lines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>

        <div className="pt-9">
          <div className="relative h-[220px] overflow-hidden rounded-[10px] border border-white/[0.19] bg-white/[0.04] md:h-[300px] lg:h-[360px]">
            <Image
              src="/travel-mobility-transportation/cross-border-team-meeting.webp"
              alt=""
              fill
              sizes="(min-width: 1440px) 1280px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
