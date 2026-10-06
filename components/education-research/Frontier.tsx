import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  { icon: "icon-sparkle", title: "Exploratory", text: "Hypothesis or prototype; no commercial availability implication." },
  { icon: "icon-database-light", title: "Active research", text: "Current work with scope, owner and public-approved limitations." },
  { icon: "evidence-icon-shield-check", title: "Under evaluation", text: "Testing and review underway; no launch promise." },
  { icon: "icon-institution", title: "Graduated / productized", text: "Requires formal product governance, approved claims and support readiness." },
  { icon: "evidence-icon-document", title: "Superseded / retired", text: "Preserve historical context and current-version references." },
];

export default function Frontier() {
  return (
    <section
      id="frontier"
      className="w-full bg-[linear-gradient(121.06deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            Exploration has its own state.
          </h2>
          <p className="pt-[5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Education under Frontier Technologies remains research or exploration unless formally graduated.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[234px]">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-5 md:p-7"
            >
              <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={`/education-research/${c.icon}.svg`} alt="" width={25} height={25} className="size-[25px]" />
              </span>
              <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
