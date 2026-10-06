import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "icon-code", title: "Build", lines: ["Approved APIs, SDKs, events,", "webhooks and authentication."] },
  { icon: "icon-document", title: "Learn", lines: ["Documentation, reference", "material and architecture guides."] },
  { icon: "icon-shield-check", title: "Test", lines: ["External sandbox or sample", "access only when live."] },
  { icon: "icon-sitemap", title: "Operate", lines: ["Supported usage, observability,", "status and developer assistance."] },
];

export default function Developers() {
  return (
    <section
      id="developers"
      className="w-full bg-[linear-gradient(121.76deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-20 lg:pb-[108px] lg:pt-[93px]"
    >
      <div className={WRAP}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Connect documented interfaces.", "Observe the provider response."]} />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Establish supported source, target, identity and failure behavior for each handoff.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-9 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex min-h-[236px] flex-col rounded-[10px] border border-solid border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7"
            >
              <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={`/travel-mobility-transportation/${c.icon}.svg`} alt="" width={25} height={25} />
              </span>
              <h3 className="mb-3 font-poppins text-xl font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">
                <Lines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>

        <div className="relative mt-10 h-[220px] overflow-hidden rounded-[10px] md:h-[300px] lg:h-[360px]">
          <Image
            src="/travel-mobility-transportation/developers-workspace.webp"
            alt="Developer working at a desk with a laptop and monitor showing code in an open office"
            fill
            sizes="(min-width:1440px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
