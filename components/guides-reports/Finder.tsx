import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  { icon: "/guides-reports/icon-document-cyan.svg", title: "Search", text: "Approved titles, summaries, topics, audiences and public keywords. Exclude drafts and controlled files." },
  { icon: "/guides-reports/icon-database.svg", title: "Facets", text: "Guide, Report and registry-defined other types; topic, audience, related technology and industry only when metadata exists." },
  { icon: "/guides-reports/icon-hierarchy-cyan.svg", title: "Sort & clear", text: "Relevance, newest, recently reviewed or A–Z. Announce changes and preserve focus." },
  { icon: "/guides-reports/icon-shield-check-cyan.svg", title: "Prototype state", text: "Catalog unavailable: approved inventory and registry were not supplied. No fake search results or filter options." },
];

export default function Finder() {
  return (
    <section
      id="finder"
      className="w-full py-14 md:py-16 lg:pb-[75px] lg:pt-[74px]"
      style={{
        backgroundImage:
          "linear-gradient(118.35249935461735deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-9 lg:gap-[37px]`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Find the right resource."]} />
          </h2>
          <p className="font-poppins text-[16px] leading-[25.6px] text-white">
            Only published metadata can populate discovery controls.
          </p>
        </div>
        <div className="flex flex-col gap-10 xl:grid xl:grid-cols-[548px_minmax(0,1fr)] xl:gap-0">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:h-[619px] xl:grid-cols-[262px_262px]">
            {cards.map((c) => (
              <li
                key={c.title}
                className="flex flex-col gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[rgba(255,255,255,0.03)] px-[27px] pb-[42px] pt-[27px]"
              >
                <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="pt-2.5 font-poppins text-[21px] font-bold leading-[27.3px] text-white">{c.title}</h3>
                <p className="font-poppins text-[15px] leading-[24px] text-white">{c.text}</p>
              </li>
            ))}
          </ul>
          <div className="relative mx-auto aspect-[705/529] w-full max-w-[705px] xl:mt-[34px] xl:max-w-none">
            <Image
              src="/guides-reports/finder-search-isometric-illustration.webp"
              alt="Isometric illustration of search, filter, sort and verified-data panels around a central magnifier"
              fill
              sizes="(min-width: 1280px) 705px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
