import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  {
    img: "/guides-reports/journey-executive-procurement.webp",
    title: "Executive / procurement",
    text: "Summary → sources/currentness → technology or trust context → qualified discussion.",
    pb: "lg:pb-[66px]",
  },
  {
    img: "/guides-reports/journey-technical-implementation.webp",
    title: "Technical implementation",
    text: "Guide → exact Documentation/Developer Resources → supported platform scope.",
    pb: "lg:pb-[66px]",
  },
  {
    img: "/guides-reports/journey-research-returning-reader.webp",
    title: "Research / returning reader",
    text: "Technical evidence routes to Research. Saved historical links point to updates or current replacements.",
    pb: "lg:pb-[42px]",
  },
];

export default function Journeys() {
  return (
    <section
      id="journeys"
      className="w-full py-14 lg:pb-[75px] lg:pt-[74px] bg-[linear-gradient(116.62deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)]"
    >
      <div className={`${WRAP} flex flex-col gap-9 lg:gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Continue from learning to", "evaluation."]} />
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-white">
            Related resources follow approved topic, audience and currentness.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`flex flex-col items-start gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[rgba(255,255,255,0.03)] px-[27px] pb-[42px] pt-[27px] lg:min-h-[320px] ${c.pb}`}
            >
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-[10px]">
                <Image src={c.img} alt="" fill sizes="(min-width:1024px) 400px, (min-width:768px) 45vw, 100vw" className="object-cover" />
              </div>
              <h3 className="pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-white">{c.title}</h3>
              <p className="font-poppins text-[15px] leading-6 text-white">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
