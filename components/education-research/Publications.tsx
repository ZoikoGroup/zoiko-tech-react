import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  { icon: "adjacent-icon-publications", title: "Research publications", text: "Approved title, authors, date, abstract, canonical source, state and rights." },
  { icon: "icon-database-dark", title: "Benchmarks", text: "Published method, scope, conditions, version and limitations." },
  { icon: "adjacent-icon-integration", title: "Technical papers", text: "Team, topic, version and approved public technical reference." },
  { icon: "adjacent-icon-collaboration", title: "Research updates", text: "Preliminary findings and work in progress stay clearly labeled." },
];

export default function Publications() {
  return (
    <section id="publications" className="w-full bg-white py-14 md:py-16 lg:pb-[108px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Research authority begins with", "approved material."]} />
          </h2>
          <p className="pt-[4.5px] font-inter text-base leading-[25.6px] text-[#587176]">
            Zoiko Research is described through research, publications, benchmarks, technical papers and university collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_498px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:auto-rows-[258px] lg:pt-[10px]">
            {cards.map((c) => (
              <article key={c.title} className="flex flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-5 md:p-7">
                <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={`/education-research/${c.icon}.svg`} alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
              </article>
            ))}
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] shadow-[0px_10px_24px_0px_rgba(16,45,47,0.08)] md:h-[420px] lg:mt-[6px] lg:h-[523px]">
            <Image
              src="/education-research/publications-lab-researcher.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 498px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
