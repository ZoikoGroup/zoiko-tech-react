import Image from "next/image";
import Link from "next/link";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  { title: "Retail & Commerce", text: "Customer, commerce, communications and operational technology.", photo: "photo-retail-commerce", icon: "arch-icon-cloud", href: "/retail-commerce", span: "lg:col-span-2" },
  { title: "Travel, Mobility & Transportation", text: "Travel technology, transport, mobility and connected operations.", photo: "photo-travel-mobility-transportation", icon: "icon-connected-globe", href: "/travel-mobility-transportation", span: "lg:col-span-2" },
  { title: "Real Estate & Property", text: "Property, accommodation and compliance-aware marketplaces.", photo: "photo-real-estate-property", icon: "arch-icon-cloud", href: "/real-estate-property", span: "lg:col-span-2" },
  { title: "Professional Services", text: "Technology for knowledge, finance, compliance and service organizations.", photo: "photo-professional-services", icon: "arch-icon-data", href: "#", span: "lg:col-span-3" },
  { title: "Education & Research", text: "Professional intelligence, learning and research-oriented technology.", photo: "photo-education-research", icon: "arch-icon-ai", href: "/education-research", span: "md:col-span-2 lg:col-span-3" },
];

export default function ConnectedIndustries() {
  return (
    <section id="connected-industries" className="w-full bg-white pb-14 pt-14 md:pb-20 md:pt-16 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="pb-[0.59px] font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[44px] lg:leading-[50.6px]">
            Connected Industries
          </h2>
          <p className="max-w-[760px] pt-[4.3px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            <Lines
              lines={[
                "Five approved economic sectors. Photography illustrates context and does not imply a customer, partner or",
                "deployment.",
              ]}
            />
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-x-[19px] gap-y-[22px] md:grid-cols-2 lg:grid-cols-6">
          {cards.map((c) => (
            <li key={c.title} className={`flex ${c.span}`}>
              <Link
                href={c.href}
                className="flex w-full flex-col overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-[#e1eff0]"
              >
                <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
                  <Image
                    src={`/view-all-industries/${c.photo}.webp`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 640px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-3 p-[26px]">
                  <div className="flex w-full items-center">
                    <span className="flex w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef] py-[6.5px]">
                      <Image src={`/view-all-industries/${c.icon}.svg`} alt="" width={25} height={25} />
                    </span>
                    <span className="min-w-px flex-1 pt-0.5 font-poppins text-[10px] font-bold leading-4 tracking-[2px] text-[#247780]">
                      CONNECTED INDUSTRIES
                    </span>
                  </div>
                  <h3 className="w-full pt-1 font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                  <p className="w-full font-poppins text-[15px] leading-6 text-[#587176]">{c.text}</p>
                  <span className="w-full pb-[0.59px] pt-[7px] font-poppins text-[11px] leading-[17.6px] text-[#5a767a]">
                    Production publication status unverified
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
