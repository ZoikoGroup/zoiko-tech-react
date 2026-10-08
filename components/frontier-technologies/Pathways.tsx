import Image from "next/image";
import { WRAP } from "./layout";

const PANELS = [
  { img: "pathway-library-collaboration", title: "Frontier Labs", text: "Umbrella exploration lane." },
  { img: "pathway-students-reading-library", title: "Robotics / Industrial AI", text: "Physical and industrial research boundaries." },
  { img: "pathway-learning-writing-desk", title: "Education / Geospatial", text: "Learning and spatial research; no implied operational systems." },
  { img: "pathway-group-discussion-library", title: "Language / collaboration", text: "Scoped cultural/language research and governed partnerships." },
];

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[25px]`}>
        <div className="flex flex-col gap-[15.1px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[41px] md:leading-[47.15px]">
            Frontier intent router
          </h2>
          <p className="pt-[4.195px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Six source-backed exploration areas, not products.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-[5px]">
          {PANELS.map((p) => (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[#b5d0d5] bg-white"
            >
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  src={`/frontier-technologies/${p.img}.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="pb-[0.59px] pt-[7px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                  {p.title}
                </h3>
                <p className="max-w-[420px] font-poppins text-[15px] leading-[27px] text-[#587176]">
                  {p.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
