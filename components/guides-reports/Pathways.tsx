import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const photos = [
  { src: "/guides-reports/pathway-people-studying-library.webp", alt: "People studying together in a library", title: "Learn a complex topic", text: "Structured explanation, purpose and audience before evaluating options." },
  { src: "/guides-reports/pathway-professionals-reviewing-documents.webp", alt: "Professionals reviewing documents", title: "Evaluate an approach", text: "Source-aware tradeoffs, decision criteria and currentness." },
  { src: "/guides-reports/pathway-team-working-laptops.webp", alt: "Team working with laptops", title: "Prepare implementation", text: "Practical readiness guidance; exact product behavior remains in canonical documentation." },
];

const notes = [
  { icon: "/guides-reports/icon-user-teal.svg", title: "Prepare procurement", text: "Requirements, evidence and Trust context." },
  { icon: "/guides-reports/icon-pathway-evidence.svg", title: "Find technical evidence", text: "Technical papers and benchmarks belong to Research." },
  { icon: "/guides-reports/icon-hierarchy-teal.svg", title: "Discuss an evaluation", text: "Bring a qualified question after reviewing the resource context." },
];

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white py-14 md:py-16 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-3`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["What do you need to understand?"]} />
          </h2>
          <p className="pt-1 font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Reading and evaluation come before conversion.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-[22px] pt-[23px] md:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <li
              key={p.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-white shadow-[0px_10px_25px_0px_rgba(22,63,69,0.06)] lg:min-h-[386px]"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-[26px]">
                <h3 className="pt-0.5 font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{p.title}</h3>
                <p className="font-poppins text-[15px] leading-[24px] text-[#587176]">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((n) => (
            <li
              key={n.title}
              className="flex flex-col gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-[27px] pb-[42px] pt-[27px]"
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[#deefef] py-[10.5px]">
                <Image src={n.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="pt-2.5 font-poppins text-[21px] font-bold leading-[27.3px] text-[#102d2f]">{n.title}</h3>
              <p className="font-poppins text-[15px] leading-[24px] text-[#587176]">{n.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
