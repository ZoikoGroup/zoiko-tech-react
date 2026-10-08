import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  { img: "pathways-library-students-publications", title: "Publications", text: "Inspect canonical outputs and their state." },
  { img: "pathways-students-books-benchmarks", title: "Benchmarks / papers", text: "Review methods and engineering scope." },
  { img: "pathways-students-studying-collaboration", title: "Collaboration", text: "Understand access, rights and publication boundaries." },
  { img: "pathways-group-library-topics", title: "Topics / implementation", text: "Follow approved artifact relationships, not speculative capability." },
];

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]`}>
        <div className="flex flex-col gap-[15.1px] lg:mt-[35px] lg:w-[330px] lg:shrink-0">
          <h2 className="font-poppins text-3xl font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-4xl lg:text-[41px] lg:leading-[47.15px]">
            Research intent <br className="hidden lg:block" />
            router
          </h2>
          <p className="pt-[4.9px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Choose the evidence question.
          </p>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[#b1cdd3] bg-white"
            >
              <div className="relative h-[190px] w-full">
                <Image
                  src={`/zoiko-research/${c.img}.webp`}
                  alt="Illustrative stock image for research and technical collaboration"
                  fill
                  sizes="(min-width: 1024px) 435px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 px-6 pb-6 pt-[29px]">
                <h3 className="pb-[0.59px] pt-[9.59px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
