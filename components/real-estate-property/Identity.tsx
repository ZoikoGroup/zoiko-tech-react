import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "/real-estate-property/icon-user-outline.svg", title: "Identity & authority", text: "Supported identity states and representative scope.", h: "lg:h-[228px]" },
  { icon: "/real-estate-property/identity-icon-permission.svg", title: "Purpose & permission", text: "Approved inquiry, transaction or service use only.", h: "lg:h-[229px]" },
  { icon: "/real-estate-property/icon-database-outline.svg", title: "Minimum necessary data", text: "Role-appropriate context without sensitive records.", h: "lg:h-[207px]" },
  { icon: "/real-estate-property/identity-icon-derived.svg", title: "Derived vs authoritative", text: "AI or enriched context is labeled as derived property information.", h: "lg:h-[207px]" },
];

export default function Identity() {
  return (
    <section
      id="identity"
      className="w-full pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[94px] lg:pt-[93px]"
      style={{ backgroundImage: "linear-gradient(121.96844301985175deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-9 lg:gap-[34px]`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Necessary information.", "Explicit authority and purpose."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Protect sensitive customer, resident, guest and property context.
          </p>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[18px]">
          <ul className="grid min-w-0 grid-cols-1 content-start items-start gap-5 md:grid-cols-2 lg:w-[57%] lg:shrink-0">
            {CARDS.map((c) => (
              <li key={c.title} className="min-w-0">
                <article className={`flex flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-6 lg:p-7 ${c.h}`}>
                  <div className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </div>
                  <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">{c.title}</h3>
                  <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
                </article>
              </li>
            ))}
          </ul>
          <div className="relative mx-auto w-full max-w-[543px] lg:mx-0 lg:mt-[23px] lg:min-w-0 lg:max-w-none lg:flex-1">
            <Image
              src="/real-estate-property/identity-data-hub-illustration.webp"
              alt=""
              width={1100}
              height={825}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
