import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  { img: "pathway-traveler-luggage-airport.webp", icon: "icon-route-nodes.svg", title: "Travel & life journeys", text: "Coordinate mobility within a broader cross-domain life journey.", h: "lg:h-[412px]" },
  { img: "comms-operational-updates.webp", icon: "icon-network-comms.svg", title: "Mobility & transport operations", text: "Connect supported service workflows and accountable operations.", h: "lg:h-[412px]" },
  { img: "pathway-technology-team-workflow.webp", icon: "pathway-icon-shield-check.svg", title: "Driver & automotive technology", text: "Evaluate future capability when scope becomes public-ready.", h: "lg:h-[412px]" },
  { img: "pathway-traveler-terminal-luggage.webp", icon: "pathway-icon-globe.svg", title: "Cross-border & relocation", text: "Coordinate provider handoffs with clear market and authority context.", h: "lg:h-[437px]" },
  { img: "comms-traveler-support.webp", icon: "icon-user-comms.svg", title: "Communications & connectivity", text: "Approved communication channels and local contactability.", h: "lg:h-[437px]" },
  { img: "pathway-team-laptop.webp", icon: "pathway-icon-code.svg", title: "Developer & integration", text: "Documented interfaces, identity, events and observability.", h: "lg:h-[437px]" },
];

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white py-14 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-4xl lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Where does your connected journey", "start?"]} />
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#587176]">
            Six operating needs help frame a focused architecture evaluation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className={`flex flex-col overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2),0px_4px_4px_0px_rgba(0,0,0,0.25)] ${c.h}`}
            >
              <div className="relative h-[220px] w-full shrink-0">
                <Image
                  src={`/travel-mobility-transportation/${c.img}`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 412px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-[26px]">
                <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[#deefef] py-[6.5px]">
                  <Image src={`/travel-mobility-transportation/${c.icon}`} alt="" width={25} height={25} />
                </span>
                <h3 className="pt-0.5 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
