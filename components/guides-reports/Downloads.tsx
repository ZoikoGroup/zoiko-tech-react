import Image from "next/image";
import { WRAP } from "./layout";

const CARDS = [
  { img: "/guides-reports/downloads-professionals-laptop.webp", alt: "Professionals reviewing information on a laptop", icon: "/guides-reports/icon-document-teal.svg", title: "Verify the artifact", text: "Real approved file; title, version and metadata match the resource." },
  { img: "/guides-reports/downloads-team-discussing-documents.webp", alt: "Team discussing documents", icon: "/guides-reports/icon-shield-check-teal.svg", title: "Verify accessibility", text: "Accessible-document QA, scanning and approved hosting before release." },
  { img: "/guides-reports/downloads-team-at-laptop.webp", alt: "Team working together at a laptop", icon: "/guides-reports/icon-hierarchy-teal.svg", title: "Preserve web value", text: "Remove unhealthy downloads while keeping meaningful web content available." },
];

export default function Downloads() {
  return (
    <section id="downloads" className="w-full bg-white py-14 lg:pb-[87px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-5`}>
        <div className="flex w-full max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            A download button is a promise.
          </h2>
          <p className="pt-1 font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            No placeholder file, guessed format or broken delivery path.
          </p>
        </div>
        <ul className="grid w-full grid-cols-1 gap-[22px] pt-[15px] md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-solid border-[#d5e5e5] bg-white shadow-[0px_10px_25px_0px_rgba(22,63,69,0.06)]"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
                <Image src={c.img} alt={c.alt} fill sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col items-start gap-3 p-[26px]">
                <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[#deefef] py-[6.5px]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="w-full pt-[2px] font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="w-full font-poppins text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
