import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  {
    img: "/education-research/workflow-source-collection.webp",
    title: "Source collection",
    meta: ["ER-101 · Source set incomplete · AI involvement:", "None"],
    owner: "Knowledge analyst",
    next: "Confirm authorized sources and versions",
  },
  {
    img: "/education-research/workflow-draft-preparation.webp",
    title: "Draft preparation",
    meta: ["ER-102 · Under review · AI involvement: Prepare"],
    owner: "Researcher",
    next: "Review citations, limitations and interpretation",
  },
  {
    img: "/education-research/workflow-publication-review.webp",
    title: "Publication review",
    meta: ["ER-103 · Approval pending · AI involvement:", "Assist"],
    owner: "Authorized reviewer",
    next: "Confirm release decision and retained evidence",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="w-full bg-white py-14 lg:pb-[108px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="pb-[0.59px] font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            Research work stays reviewable.
          </h2>
          <p className="max-w-[760px] pt-[5px] font-inter text-base leading-[25.6px] text-[#587176]">
            An operating pattern for knowledge work, with clear ownership and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 pt-[9.99px] md:grid-cols-2 xl:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] xl:h-[560px]"
            >
              <div className="relative h-[220px] w-full shrink-0 sm:h-[280px]">
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-7">
                <h3 className="font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">
                  {c.title}
                </h3>
                <div className="font-inter text-[15px] leading-6 text-[#587176]">
                  {c.meta.map((m) => (
                    <p key={m}>{m}</p>
                  ))}
                </div>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">
                  <span className="font-poppins font-bold">Owner:</span> {c.owner}
                </p>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">
                  <span className="font-poppins font-bold">Next step:</span> {c.next}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
