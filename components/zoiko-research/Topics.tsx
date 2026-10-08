import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const PANELS = [
  {
    n: "01",
    title: "Domain relevance",
    text: "AI, cloud, enterprise, communications, security or industry only where sourced.",
    img: "/zoiko-research/topics-domain-relevance-meeting.webp",
  },
  {
    n: "02",
    title: "Product boundary",
    text: "Related research does not establish live functionality.",
    img: "/zoiko-research/topics-product-boundary-laptop.webp",
  },
  {
    n: "03",
    title: "Topic taxonomy",
    text: "Governed published metadata only, no SEO-seeded inventory.",
    img: "/zoiko-research/topics-taxonomy-laptop-charts.webp",
  },
  {
    n: "04",
    title: "State",
    text: "Artifact and product maturity remain separately visible.",
    img: "/zoiko-research/topics-state-team-meeting.webp",
  },
];

export default function Topics() {
  return (
    <section id="topics" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]`}>
        <div className="flex flex-col gap-[15.1px] lg:w-[330px] lg:shrink-0">
          <h2 className="font-poppins text-[30px] font-bold leading-[36px] tracking-[-1px] text-[#102d2f] md:text-[36px] md:leading-[42px] lg:text-[41px] lg:leading-[47.15px]">
            <Lines lines={["Topics &", "technology", "mapping"]} />
          </h2>
          <p className="pt-[4.2px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Relationships require a published supporting artifact.
          </p>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-1 items-start gap-5 md:grid-cols-2">
          {PANELS.map((p) => (
            <article
              key={p.n}
              className="flex flex-col overflow-hidden rounded-[10px] border border-solid border-[#b1cdd3] bg-white"
            >
              <div className="relative h-[190px] w-full shrink-0 overflow-hidden">
                <Image
                  src={p.img}
                  alt="Illustrative stock image for research and technical collaboration"
                  fill
                  sizes="(min-width: 1024px) 435px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 px-6 pb-6 pt-[29px]">
                <span className="font-poppins text-[11px] leading-[17.6px] text-[#247780]">{p.n}</span>
                <h3 className="pb-[0.6px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                  {p.title}
                </h3>
                <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{p.text}</p>
                <small className="pt-[7px] font-poppins text-[9px] leading-[13.5px] text-[#5c7980]">
                  Illustrative stock photo · No institution or project implied
                </small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
