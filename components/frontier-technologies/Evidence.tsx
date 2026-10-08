import Image from "next/image";
import { WRAP } from "./layout";

const panels = [
  { title: "Publications", text: "Actual approved authoritative artifact.", img: "evidence-publications-books", box: "aspect-[1125/750] rounded-[10px]" },
  { title: "Benchmarks", text: "Method, conditions and limitations.", img: "evidence-benchmarks-charts", box: "aspect-[1125/750]" },
  { title: "Version", text: "Correction/supersession and currentness.", img: "evidence-version-prototype", box: "aspect-[232/155]" },
  { title: "Boundary", text: "Validated research is still not commercial graduation.", img: "evidence-boundary-paper-plane", box: "aspect-[2048/1536]" },
];

export default function Evidence() {
  return (
    <section id="evidence" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[60px]`}>
        <div className="flex max-w-[835px] flex-col gap-[15.1px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[41px] md:leading-[47.15px]">
            Research evidence
          </h2>
          <p className="pt-[4.2px] font-poppins text-base leading-[25.6px] text-[#587176]">
            Published evidence belongs to Frontier Technologies.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {panels.map((p) => (
            <li key={p.title} className="flex flex-col gap-3 bg-[#f0f7f8] px-[26px] pb-[41px] pt-[31px]">
              <div className={`relative w-full overflow-hidden ${p.box}`}>
                <Image
                  src={`/frontier-technologies/${p.img}.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="pb-[0.6px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{p.title}</h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
