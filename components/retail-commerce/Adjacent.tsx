import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const CARDS = [
  {
    icon: "/retail-commerce/desktop-adjacent-icon-phone.svg",
    title: "Customer communications",
    titleDesktop: ["Customer", "communications"],
    text: "Local reachability and approved collaboration pathways.",
  },
  {
    icon: "/retail-commerce/desktop-adjacent-icon-sparkle.svg",
    title: "Governed marketing",
    text: "Bounded intelligence, approval and execution.",
  },
  {
    icon: "/retail-commerce/desktop-adjacent-icon-shield.svg",
    title: "Financial handoffs",
    text: "Payment, billing and operator-aware evidence.",
  },
  {
    icon: "/retail-commerce/desktop-adjacent-icon-code.svg",
    title: "Modernization & integration",
    titleDesktop: ["Modernization &", "integration"],
    text: "Documented interfaces and authoritative system returns.",
    textDesktop: ["Documented interfaces and", "authoritative system returns."],
  },
];

export default function Adjacent() {
  return (
    <section
      id="adjacent"
      className="w-full bg-[linear-gradient(120deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:pt-[93px] md:pb-[94px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15.2px] xl:gap-[14.8px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            16 / EXPANSION &amp; RETENTION
          </p>
          <h2 className="pb-[0.515px] font-poppins text-[26px] font-bold leading-[30px] tracking-[-1.3px] text-white md:text-[29px] md:leading-[33.35px] xl:pb-0 xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Extend the operating foundation", "into the next relevant workflow."]}
              tablet={["Extend the operating foundation", "into the next relevant workflow."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9] xl:pt-[5.2px]">
            Choose an adjacent pathway when you are ready for a broader evaluation.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-start lg:grid-cols-4 lg:items-stretch">
          {CARDS.map((c) => (
            <li key={c.title} className="contents">
              <a
                href="#"
                className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-6 md:p-7 lg:h-[255px] lg:self-start"
              >
                <span className="flex h-[68px] w-[46px] shrink-0 flex-col pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#62c6ca]/10">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                </span>
                <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">
                  {c.titleDesktop ? <Lines desktop={c.titleDesktop} /> : c.title}
                </h3>
                <p className="pb-[22px] font-poppins text-[15px] leading-6 text-[#c4d7d9] lg:pb-0">
                  {c.textDesktop ? <Lines desktop={c.textDesktop} /> : c.text}
                </p>
                <span className="relative flex min-h-[36px] items-center justify-between gap-4 font-poppins text-[13px] leading-[20.8px] text-[#9cdee0] lg:hidden">
                  <span className="font-bold md:w-[104px]">Explore pathway</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
