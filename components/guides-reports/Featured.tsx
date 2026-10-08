import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  { src: "/guides-reports/featured-eligibility.webp", title: "Eligibility", text: "Approved current resource with complete content, ownership, source and access metadata." },
  { src: "/guides-reports/featured-no-eligible-feature.webp", title: "No eligible feature supplied", text: "Featured resources are omitted. No invented title, author, date, page count or download statistic." },
  { src: "/guides-reports/featured-freshness.webp", title: "Freshness", text: "Superseded, stale or withdrawn resources do not remain featured." },
];

export default function Featured() {
  return (
    <section id="featured" className="w-full bg-white py-14 md:py-16 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-[15.4px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Featured resources need current", "evidence."]} />
          </h2>
          <p className="pt-[4.6px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            A real resource, not a decorative report cover.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-[27px] pb-[42px] pt-[27px]"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[10px]">
                <Image src={c.src} alt="" fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <h3 className="pt-2.5 font-poppins text-[21px] font-bold leading-[27.3px] text-[#102d2f]">{c.title}</h3>
              <p className="font-poppins text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
