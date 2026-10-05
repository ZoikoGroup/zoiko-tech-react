import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  {
    icon: "/education-research/adjacent-icon-ai.svg",
    title: "Assist",
    text: "Retrieve, summarize, explain or organize authorized sources.",
  },
  {
    icon: "/education-research/adjacent-icon-publications.svg",
    title: "Recommend",
    text: "Suggest source or comparison paths; a researcher or educator decides.",
  },
  {
    icon: "/education-research/adjacent-icon-collaboration.svg",
    title: "Prepare",
    text: "Draft notes or material for human review before institutional use.",
  },
  {
    icon: "/education-research/icon-shield-check-dark.svg",
    title: "Bounded workflow",
    text: "Approved low-risk technical actions; no self-authorizing publication or academic decisions.",
  },
  {
    icon: "/education-research/icon-database-dark.svg",
    title: "Evaluation",
    text: "Evidence, scope and limitations; internal benchmarks are not independent validation.",
  },
  {
    icon: "/education-research/icon-user-dark.svg",
    title: "Human oversight",
    text: "Preserve citation, authorship, institutional policy and accountable review.",
  },
];

export default function Section08() {
  return (
    <section id="section-8" className="w-full bg-white py-14 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["AI assists. Authorized people own the", "judgment."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-base leading-[25.6px] text-[#587176]">
            Make source sets, AI contribution, limitations and review authority visible.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col items-center justify-center rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7 text-center xl:h-[234px]"
            >
              <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                <div className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </div>
              </div>
              <h3 className="w-full pb-3 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">
                {c.title}
              </h3>
              <p className="w-full font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
