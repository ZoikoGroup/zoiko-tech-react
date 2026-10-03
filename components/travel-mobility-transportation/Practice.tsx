import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS: { title: string; body: string[] | string }[] = [
  { title: "Connected journeys", body: ["Fragmented experience → orchestration →", "approved result."] },
  { title: "Mobility operations", body: ["Service-state problem → provider / workflow", "model → evidenced outcome."] },
  { title: "Cross-border orchestration", body: "Multi-provider journey → permission and market handoffs → approved result." },
  { title: "Communications", body: ["Journey communication problem → supported", "routing → measured outcome."] },
];

export default function Practice() {
  return (
    <section
      id="practice"
      className="w-full bg-[linear-gradient(120.98deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Journey proof needs", "approved operational evidence."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Approved customer stories and measured results were not supplied. The architecture provides a starting point.
          </p>
        </div>

        <ul className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col rounded-[10px] border border-solid border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7"
            >
              <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src="/travel-mobility-transportation/icon-document.svg" alt="" width={25} height={25} />
              </span>
              <span className="w-full rounded-[20px] border border-solid border-[#719ea4] px-[9px] py-[3px] font-inter text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
                Evidence pending
              </span>
              <h3 className="mb-3 w-full font-poppins text-xl font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">
                {Array.isArray(c.body) ? <Lines lines={c.body} /> : c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
