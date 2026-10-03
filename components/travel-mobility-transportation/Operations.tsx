import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    img: "/travel-mobility-transportation/operations-service-request.webp",
    title: "Service request",
    text: "Reference, responsible provider, market and current supported state.",
  },
  {
    img: "/travel-mobility-transportation/operations-ownership.webp",
    title: "Operational ownership",
    text: "A team, partner or provider owns the next action.",
  },
  {
    img: "/travel-mobility-transportation/operations-exceptions-support.webp",
    title: "Exceptions & support",
    text: "Provider unavailability, failed handoffs and review requirements remain visible.",
  },
];

export default function Operations() {
  return (
    <section id="operations" className="w-full bg-white py-14 md:py-20 lg:pb-[108px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-6`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[28px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-4xl lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Connect the work.", "Keep the next owner clear."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] font-inter text-base leading-[25.6px] text-[#587176]">
            <Lines
              lines={[
                "The specialist solution is framed as digital mobility, transportation and safety-oriented operations. Exact",
                "features require dedicated evidence.",
              ]}
            />
          </p>
        </div>
        <div className="grid gap-5 pt-3 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] lg:h-[320px]"
            >
              <div className="relative h-[160px] w-full shrink-0">
                <Image src={c.img} alt="" fill sizes="(min-width:1024px) 420px, (min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7">
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
