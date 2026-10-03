import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    img: "/travel-mobility-transportation/comms-traveler-support.webp",
    icon: "/travel-mobility-transportation/icon-user-comms.svg",
    title: "Traveler support",
    text: "Human support and escalation within the responsible service scope.",
  },
  {
    img: "/travel-mobility-transportation/comms-operational-updates.webp",
    icon: "/travel-mobility-transportation/icon-network-comms.svg",
    title: "Operational updates",
    text: "Delay or change notifications depend on authoritative service and channel support.",
  },
  {
    img: "/travel-mobility-transportation/comms-private-journey.webp",
    icon: "/travel-mobility-transportation/icon-lock-comms.svg",
    title: "Private journey context",
    text: "Keep sensitive travel and location details out of generic notifications.",
  },
];

export default function Communications() {
  return (
    <section id="communications" className="w-full bg-white py-14 md:py-20 lg:pb-[108px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px] lg:pt-[34.8px]">
          <h2 className="font-poppins text-[28px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-4xl lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Communicate the state.", "Limit the detail to what is needed."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-inter text-base leading-[25.6px] text-[#587176]">
            Connect supported communication channels to provider-confirmed updates.
          </p>
        </div>
        <div className="grid gap-[22px] pt-[10px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
            >
              <div className="relative h-[220px] w-full shrink-0">
                <Image src={c.img} alt="" fill sizes="(min-width:1024px) 420px, (min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col items-start gap-3 p-[26px]">
                <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[#deefef] py-[6.5px]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="w-full pt-0.5 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
