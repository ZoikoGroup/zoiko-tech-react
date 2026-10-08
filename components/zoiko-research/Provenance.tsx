import Image from "next/image";
import { WRAP } from "./layout";

const PANELS = [
  {
    title: "Source",
    text: "Public-safe owner and authoritative reference.",
    img: "/zoiko-research/provenance-source-students-computer.webp",
  },
  {
    title: "Version",
    text: "Published, reviewed and updated dates are not interchangeable.",
    img: "/zoiko-research/provenance-version-laptop-table.webp",
  },
  {
    title: "Corrections",
    text: "Material changes, super session and withdrawal stay visible.",
    img: "/zoiko-research/provenance-corrections-two-students.webp",
  },
  {
    title: "Citation",
    text: "No invented DOI, journal, affiliation, counts or impact metrics.",
    img: "/zoiko-research/provenance-citation-library.webp",
  },
];

export default function Provenance() {
  return (
    <section id="provenance" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[22px]`}>
        <div className="flex max-w-[800px] flex-col gap-[15px] pb-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[36px] tracking-[-1px] text-[#102d2f] md:text-[36px] md:leading-[42px] lg:text-[41px] lg:leading-[47.15px]">
            Evidence, provenance &amp; versioning
          </h2>
          <p className="pt-[5px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            One canonical artifact and a durable history.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PANELS.map((p) => (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-solid border-[#b1cdd3] bg-white lg:min-h-[376px]"
            >
              <div className="relative h-[190px] w-full shrink-0 overflow-hidden">
                <Image
                  src={p.img}
                  alt="Illustrative stock image for research and technical collaboration"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 px-6 pb-6 pt-[29px]">
                <h3 className="pb-[0.6px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                  {p.title}
                </h3>
                <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
