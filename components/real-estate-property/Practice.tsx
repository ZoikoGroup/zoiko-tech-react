import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const CARDS = [
  { img: "practice-discovery-marketplace", alt: "Team reviewing marketplace maps on a laptop", title: "Discovery & marketplace", body: <>Inquiry problem → provider architecture → authoritative .</> },
  { img: "practice-property-operations", alt: "Colleagues reviewing property plans around a table", title: "Property operations", body: <>Fragmented service process → accountable integration → approved outcome.</> },
  {
    img: "practice-payments-property",
    alt: "Laptop and documents on an office desk",
    title: "Payments & property",
    body: (
      <>
        State mismatch → separated source outcomes
        <br className="hidden xl:block" /> → measured result.
      </>
    ),
  },
  { img: "practice-compliance-experience", alt: "Professional reviewing documents at a desk", title: "Compliance-aware experience", body: <>Policy context → evidence and controls →reviewed limitations.</> },
];

export default function Practice() {
  return (
    <section
      id="practice"
      className="w-full bg-[linear-gradient(123.85deg,#000000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Property proof needs", "approved operational evidence."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Measured customer results were not supplied. The architecture provides a clear starting point.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-3 rounded-[10px] border border-solid border-[#dae8e8] bg-[#f3f8f8] p-7 lg:h-[440px]"
            >
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={`/real-estate-property/${c.img}.webp`}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="w-full pb-3 font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
              <p className="w-full font-inter text-[15px] leading-6 text-[#587176]">{c.body}</p>
              <span className="mt-auto flex h-9 w-full shrink-0 items-center justify-center rounded-[20px] border border-solid border-[#719ea4] bg-[#1a838e] px-[9px] py-[3px] font-inter text-[10px] leading-4 tracking-[0.3px] text-[#8adce0]">
                Evidence pending
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
