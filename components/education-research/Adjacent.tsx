import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  {
    icon: "/education-research/adjacent-icon-publications.svg",
    title: "Research & publications",
    text: "Zoiko Research and technical implementation context.",
  },
  {
    icon: "/education-research/adjacent-icon-ai.svg",
    title: "AI & assurance",
    text: "Governed assistance, evaluation and Responsible AI.",
  },
  {
    icon: "/education-research/adjacent-icon-integration.svg",
    title: "Institutional integration",
    text: "Modernization and cloud / developer foundations.",
  },
  {
    icon: "/education-research/adjacent-icon-collaboration.svg",
    title: "Collaboration",
    text: "Communications with privacy and restricted-work boundaries.",
  },
];

export default function Adjacent() {
  return (
    <section id="adjacent" className="w-full bg-white py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[18px] lg:gap-[18.6px]`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            Extend a supported workflow.
          </h2>
          <p className="pt-[5px] font-inter text-base leading-[25.6px] text-[#587176]">
            <Lines lines={["Adjacent foundations follow the objective and readiness of the work."]} />
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,590fr)_minmax(0,610fr)] lg:gap-0">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:self-start lg:pt-[15px]">
            {CARDS.map((c) => (
              <li
                key={c.title}
                className="flex flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7 lg:h-[261px]"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
              </li>
            ))}
          </ul>
          <div className="relative mx-auto w-full max-w-[629px] lg:ml-5 lg:max-w-none">
            <Image
              src="/education-research/adjacent-education-isometric.webp"
              alt="Isometric illustration of research, AI, institutional and collaboration platforms around a graduation cap"
              width={1300}
              height={867}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
