import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  {
    icon: "/education-research/evidence-icon-author.svg",
    title: "Institution & author",
    text: "Approved attribution and partnership scope.",
  },
  {
    icon: "/education-research/evidence-icon-document.svg",
    title: "Work & technology",
    text: "Actual public-approved project and integration detail.",
  },
  {
    icon: "/education-research/evidence-icon-shield-check.svg",
    title: "Measured result",
    text: "Reviewed technical or operational evidence with limitations.",
  },
];

export default function Evidence() {
  return (
    <section
      id="evidence"
      className="w-full bg-[linear-gradient(123.157deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)] py-14 md:py-20 lg:pb-[108px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Institutional evidence must be", "attributable."]} />
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Publish identity, research scope and outcomes only with explicit approval.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 pt-[9.99px] md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7"
            >
              <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="pb-[22px] font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
