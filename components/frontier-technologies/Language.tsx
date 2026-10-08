import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  { title: "Language / locale", text: "Actual approved coverage only.", img: "/frontier-technologies/language-locale-business-photo.webp" },
  { title: "Source", text: "Rights, population context and provenance.", img: "/frontier-technologies/language-source-laptop-photo.webp" },
  { title: "Evaluation", text: "Limits, reviewed method and accountable interpretation.", img: "/frontier-technologies/language-evaluation-statistics-photo.webp" },
  { title: "No universal claim", text: "No translation accuracy or cultural competence presumed.", img: "/frontier-technologies/language-no-universal-claim-photo.webp" },
];

export default function Language() {
  return (
    <section id="language" className="w-full bg-white py-14 md:py-16 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]`}>
        <div className="flex flex-col gap-[15.1px] lg:w-[330px] lg:shrink-0">
          <h2 className="font-poppins text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-[36px] lg:text-[41px] lg:leading-[47.15px] text-[#102d2f]">
            <Lines lines={["Language &", "Cultural", "Technology"]} />
          </h2>
          <p className="pt-[4.2px] font-poppins text-[16px] font-normal leading-[25.6px] text-[#587176]">
            <Lines lines={["Scope and evaluation before", "representation", "claims."]} />
          </p>
        </div>
        <ul className="grid min-w-0 flex-1 grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex flex-col overflow-hidden rounded-[10px] border border-[#b5d0d5] bg-white">
              <div className="relative h-[190px] w-full shrink-0 overflow-hidden">
                <Image src={c.img} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="mt-[7.59px] flex flex-col gap-3 p-6">
                <h3 className="pb-[0.59px] pt-[7.1px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{c.title}</h3>
                <p className="font-poppins text-[15px] font-normal leading-[27px] text-[#587176]">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
