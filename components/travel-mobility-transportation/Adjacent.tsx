import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "icon-orchestration", title: ["Life orchestration"], body: ["Supported cross-domain journey and provider handoffs."], pb: true },
  { icon: "icon-user", title: ["Communications"], body: ["Local reachability and", "accountable service updates."], pb: true },
  { icon: "icon-shield-check", title: ["Identity & security"], body: ["Purpose-bound context and", "explicit delegated authority."], pb: true },
  { icon: "icon-code", title: ["Modernization &", "integration"], body: ["Documented boundaries between existing systems."], pb: false },
  { icon: "icon-database", title: ["Financial handoffs"], body: ["Correct financial operator and", "market treatment."], pb: false },
  { icon: "icon-sparkle", title: ["Governed AI"], body: ["Source-aware assistance and", "bounded workflow authority."], pb: false },
];

export default function Adjacent() {
  return (
    <section
      id="adjacent"
      className="w-full py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]"
      style={{ backgroundImage: "linear-gradient(121.02deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Extend the connected foundation", "into the next supported need."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Adjacent architecture depends on approved use cases, product scope and provider responsibility.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <li
              key={c.icon}
              className="flex flex-col rounded-[10px] border border-solid border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7"
            >
              <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={`/travel-mobility-transportation/${c.icon}.svg`} alt="" width={25} height={25} />
              </span>
              <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">
                {c.title.length > 1 ? <Lines lines={c.title} /> : c.title[0]}
              </h3>
              <p className={`font-inter text-[15px] leading-6 text-[#c4d7d9] ${c.pb ? "pb-[26.5px]" : ""}`}>
                {c.body.length > 1 ? <Lines lines={c.body} /> : c.body[0]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
