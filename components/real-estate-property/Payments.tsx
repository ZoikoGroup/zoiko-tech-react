import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    icon: "/real-estate-property/icon-financial-source.svg",
    title: "Financial source",
    text: "The payment or billing system returns its definitive financial state.",
  },
  {
    icon: "/real-estate-property/icon-property-source.svg",
    title: "Property source",
    text: "The transaction or service system returns its own outcome.",
  },
];

export default function Payments() {
  return (
    <section id="payments" className="w-full bg-white py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-8 lg:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Financial confirmation is separate", "from property confirmation."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-inter text-base leading-[25.6px] text-[#587176]">
            Use approved financial and billing scope with explicit operator responsibilities.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-11">
          <ul className="flex w-full flex-col gap-5 lg:h-[497px] lg:w-[45%] lg:justify-between xl:w-[567px] xl:shrink-0">
            {cards.map((c) => (
              <li
                key={c.title}
                className="flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-6 drop-shadow-[0px_4px_5px_rgba(0,0,0,0.2)] lg:p-7"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="mb-3 font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="max-w-[500px] pb-[22px] font-inter text-[15px] leading-6 text-[#587176] lg:pb-[46.5px]">
                  {c.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] lg:aspect-auto lg:h-[497px] lg:min-w-0 lg:flex-1">
            <Image
              src="/real-estate-property/payments-modern-house.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
