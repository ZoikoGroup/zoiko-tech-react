import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const PANELS = [
  {
    title: "Engineering question",
    text: "Approved architecture/problem statement.",
    image: "/zoiko-research/papers-engineering-question-office.webp",
    h: "lg:h-[217px]",
    pos: "50% 16.3%",
  },
  {
    title: "Technical scope",
    text: "Actual system boundaries and documented implementation.",
    image: "/zoiko-research/papers-technical-scope-team.webp",
    h: "lg:h-[212px]",
    pos: "50% 48.5%",
  },
  {
    title: "Tradeoffs",
    text: "Source-approved assumptions and constraints.",
    image: "/zoiko-research/papers-tradeoffs-chess-knights.webp",
    h: "lg:h-[217px]",
    pos: "50% 40.6%",
  },
  {
    title: "Currentness",
    text: "Version, correction/history and current product relationship separately.",
    image: "/zoiko-research/papers-currentness-plasma-ball.webp",
    h: "lg:h-[212px]",
    pos: "50% 58.7%",
  },
];

export default function Papers() {
  return (
    <section id="papers" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[38px]">
      <div className={`${WRAP} flex flex-col gap-[22px]`}>
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[36px] lg:text-[41px] lg:leading-[47.15px]">
            <Lines lines={["Technical papers"]} />
          </h2>
          <p className="pt-[5px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            A design proposal is not a shipped product.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
          {PANELS.map((p) => (
            <article
              key={p.title}
              className="flex w-full flex-col gap-3 bg-[#f0f7f8] px-6 pb-10 pt-[31px] shadow-[0px_4px_5px_rgba(0,0,0,0.2)] lg:pb-[41px] lg:pl-[43px] lg:pr-[26px]"
            >
              <div className={`relative aspect-[500/217] w-full overflow-hidden lg:aspect-auto ${p.h}`}>
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: p.pos }}
                />
              </div>
              <h3 className="pb-[0.59px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                {p.title}
              </h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
