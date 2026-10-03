import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  {
    img: "pathway-modern-apartment-interior.webp",
    pos: "50% 50%",
    icon: "icon-property-source.svg",
    title: "Discovery & marketplace",
    lines: ["Connect provider information to authoritative", "availability and transaction sources."],
    h: "h-[220px]",
  },
  {
    img: "pathway-property-professional-speaking-with-clients.webp",
    pos: "50% 0%",
    icon: "icon-responsible-owner.svg",
    title: "Communications & inquiries",
    lines: ["Route inquiry context into accountable operating", "workflows."],
    h: "h-[220px]",
  },
  {
    img: "pathway-property-professional-and-client-reviewing.webp",
    pos: "50% 29.7%",
    icon: "icon-supported-routing.svg",
    title: "Transaction handoffs",
    lines: ["Keep booking, tenancy and purchase state with", "the responsible system."],
    h: "h-[220px]",
  },
  {
    img: "pathway-professionals-reviewing-financial-documents.webp",
    pos: "50% 100%",
    icon: "icon-pathway-document.svg",
    title: "Payments & billing",
    lines: ["Separate financial outcomes from property and", "accommodation outcomes."],
    h: "h-[220px] lg:h-[231px]",
  },
  {
    img: "pathway-bright-modern-apartment-interior.webp",
    pos: "50% 50%",
    icon: "icon-property-source.svg",
    title: "Property operations",
    lines: ["Coordinate requests, exceptions and responsible", "service teams."],
    h: "h-[220px]",
  },
  {
    img: "pathway-technology-team-collaborating-on-laptops.webp",
    pos: "50% 50%",
    icon: "icon-pathway-code.svg",
    title: "Compliance & integration",
    lines: ["Connect source records, reviewed controls and", "documented interfaces."],
    h: "h-[220px]",
  },
];

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex flex-col items-start gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            Which part of the property journey needs to connect?
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-[16px] leading-[25.6px] text-[#587176]">
            Six operating needs frame a focused architecture evaluation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:h-[846px] lg:grid-cols-3 lg:grid-rows-[412px_412px]">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col self-start overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)]"
            >
              <div className={`relative w-full ${c.h}`}>
                <Image
                  src={`/real-estate-property/${c.img}`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: c.pos }}
                />
              </div>
              <div className="flex flex-col items-start gap-3 p-[26px]">
                <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[#deefef] py-[6.5px]">
                  <Image src={`/real-estate-property/${c.icon}`} alt="" width={25} height={25} />
                </span>
                <h3 className="pt-[2px] font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">
                  {c.lines.join(" ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
