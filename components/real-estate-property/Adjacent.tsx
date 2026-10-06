import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "icon-user-outline", title: ["Customer", "communications"], text: ["Inquiry routing and supported", "interaction context."] },
  { icon: "icon-database-outline", title: ["Financial operations"], text: ["Payment and billing source", "boundaries."] },
  { icon: "icon-code-outline", title: ["Modernization"], text: ["Documented interfaces across", "existing systems."] },
  { icon: "icon-shield-check-outline", title: ["Trust & evidence"], text: ["Purpose, authority, reviewed", "policy and records."] },
];

export default function Adjacent() {
  return (
    <section
      id="adjacent"
      className="w-full py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]"
      style={{ backgroundImage: "linear-gradient(114.67deg, rgb(0,0,0) 0%, rgb(10,37,40) 48%, rgb(36,119,128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Extend the operating foundation", "into the next supported need."]} />
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9] xl:whitespace-nowrap">
            Explore adjacent architecture with approved product, market and provider scope.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[610fr_553fr] lg:gap-[37px]">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {CARDS.map((c) => (
              <li
                key={c.icon}
                className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 lg:h-[223px]"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={`/real-estate-property/${c.icon}.svg`} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">
                  <Lines lines={c.title} />
                </h3>
                <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">
                  <Lines lines={c.text} />
                </p>
              </li>
            ))}
          </ul>
          <div className="relative mx-auto aspect-[553/415] w-full max-w-[553px] lg:mt-[11px] lg:max-w-none">
            <Image
              src="/real-estate-property/adjacent-architecture-illustration.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 553px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
