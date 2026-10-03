import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    icon: "/real-estate-property/icon-building-columns.svg",
    title: "Provider & source",
    text: "Identify who is responsible for the offer and downstream transaction.",
  },
  {
    icon: "/real-estate-property/icon-current-information.svg",
    title: "Current information",
    text: "Unknown or stale availability remains visible; terms need an authoritative source.",
  },
];

export default function Discovery() {
  return (
    <section
      id="discovery"
      className="w-full bg-[linear-gradient(122.85deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-16 lg:pb-[108px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-6 lg:gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Clear property source.", "Clear marketplace attribution."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Zoiko Rooms is described as a Zoiko Realty Group platform for property and accommodation marketplace, with a Live — Group Attributed state.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 pt-0 lg:flex-row lg:gap-11 lg:pt-[10px]">
          <ul className="flex w-full flex-1 flex-col gap-5">
            {cards.map((c) => (
              <li
                key={c.title}
                className="flex w-full flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-6 lg:p-7"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="mb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="max-w-[493px] pb-[22px] font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
              </li>
            ))}
          </ul>
          <div className="w-full shrink-0 lg:w-[45%] xl:w-[664px]">
            <Image
              src="/real-estate-property/discovery-marketplace-illustration.webp"
              alt=""
              width={1400}
              height={1050}
              className="h-auto w-full rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
