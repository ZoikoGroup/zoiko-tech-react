import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  {
    photo: "/education-research/pathway-library-collaboration.webp",
    icon: "/education-research/adjacent-icon-publications.svg",
    title: "Research workflows",
    text: "Connect sources, analysis, review, outputs and evidence.",
  },
  {
    photo: "/education-research/pathway-research-laptop.webp",
    icon: "/education-research/adjacent-icon-ai.svg",
    title: "Professional intelligence",
    text: "Source-aware assistance with visible provenance and human judgment.",
  },
  {
    photo: "/education-research/pathway-students-studying.webp",
    icon: "/education-research/icon-institution-teal.svg",
    title: "Learning-oriented technology",
    text: "Connect content, identity and experiences to institutional systems.",
  },
  {
    photo: "/education-research/pathway-educator-students.webp",
    icon: "/education-research/icon-user-dark.svg",
    title: "University & external collaboration",
    text: "Explicit access, rights and project boundaries.",
    extra: "pb-6",
  },
  {
    photo: "/education-research/pathway-reference-material.webp",
    icon: "/education-research/icon-database-dark.svg",
    title: "Publications & benchmarks",
    text: "Approved research outputs with clear version, state and evidence.",
  },
  {
    photo: "/education-research/pathway-computer-library.webp",
    icon: "/education-research/adjacent-icon-integration.svg",
    title: "Developer & infrastructure",
    text: "Documented interfaces, identity, events and observability.",
  },
];

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white py-14 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px] xl:max-w-none">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px] lg:tracking-[-1.3px]">
            <Lines lines={["Where does your research or learning", "workflow start?"]} />
          </h2>
          <p className="pt-[4.49px] font-inter text-[16px] leading-[25.6px] text-[#587176]">
            <Lines
              lines={[
                "Six needs frame a focused architecture conversation. Photography is illustrative; no institutional partnership",
                "is implied.",
              ]}
            />
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className={`flex flex-col items-start self-start overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-white ${c.extra ?? ""}`}
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={c.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-3 p-[26px]">
                <span className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="font-poppins w-full pt-[2px] text-[20px] font-bold leading-[26px] text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="w-full font-inter text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
