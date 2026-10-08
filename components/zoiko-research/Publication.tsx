import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const PANELS = [
  {
    title: "Identity",
    text: "Approved title, owner/authors and exact publication/review status.",
    image: "/zoiko-research/publication-team-around-monitor.webp",
  },
  {
    title: "Purpose",
    text: "Abstract and scope without strengthening conclusions.",
    image: "/zoiko-research/publication-meeting-table-discussion.webp",
  },
  {
    title: "Method / limitations",
    text: "Source-defined evidence, assumptions and qualifications.",
    image: "/zoiko-research/publication-laptop-typing-desk.webp",
  },
  {
    title: "Version / rights",
    text: "Canonical citation, date, currentness and permitted access.",
    image: "/zoiko-research/publication-team-reviewing-papers.webp",
  },
];

export default function Publication() {
  return (
    <section id="publication" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[60px]`}>
        <div className="flex max-w-[800px] flex-col gap-[15px] pb-0 lg:pb-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[36px] lg:text-[41px] lg:leading-[47.15px]">
            <Lines lines={["Publication detail contract"]} />
          </h2>
          <p className="pt-[5px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Read enough context to evaluate a claim.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PANELS.map((p) => (
            <article
              key={p.title}
              className="w-full overflow-hidden rounded-[10px] border border-[#b1cdd3] bg-white"
            >
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 px-6 pb-6 pt-[29px]">
                <h3 className="pb-[0.59px] pt-[9.59px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
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
