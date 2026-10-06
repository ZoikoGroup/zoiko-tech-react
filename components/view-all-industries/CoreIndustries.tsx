import Image from "next/image";
import Link from "next/link";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  { title: "Telecommunications", text: "Operators, communications providers and telecom ecosystems.", photo: "photo-telecommunications", icon: "icon-core-network", href: "/telecom" },
  { title: "Financial Services", text: "Banks, fintech, payments, markets and financial operations.", photo: "photo-financial-services", icon: "icon-core-finance", href: "/financial-services" },
  { title: "Healthcare & Life Sciences", text: "Health technology, medicine access, care and healthcare administration.", photo: "photo-healthcare-life-sciences", icon: "icon-core-healthcare", href: "/healthcare" },
  { title: "Media & Entertainment", text: "Streaming, live events, content and digital media experiences.", photo: "photo-media-entertainment", icon: "icon-core-network", href: "/media-entertainment" },
  { title: "Public Sector & Government", text: "Accessible, auditable and jurisdiction-aware digital services.", photo: "photo-public-sector-government", icon: "icon-core-public-sector", href: "/public-sector-government" },
];

export default function CoreIndustries() {
  return (
    <section
      id="core-industries"
      className="w-full bg-[linear-gradient(120.65deg,#000000_0%,#0a2528_48%,#247780_100%)] pb-14 pt-14 md:pb-20 md:pt-16 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="pb-[0.59px] font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[44px] lg:leading-[50.6px]">
            Core Industries
          </h2>
          <p className="max-w-[760px] pt-[4.3px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <Lines
              lines={[
                "Five approved economic sectors. Photography illustrates context and does not imply a customer, partner or",
                "deployment.",
              ]}
            />
          </p>
        </div>
        <ul className="grid grid-cols-1 items-start gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li key={c.title} className="contents">
              <Link
                href={c.href}
                className="flex w-full flex-col overflow-hidden rounded-[10px] bg-gradient-to-b from-[#195b62] to-[#0a2d31]"
              >
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={`/view-all-industries/${c.photo}.webp`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 427px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-3 p-[26px]">
                  <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[6.5px]">
                    <Image src={`/view-all-industries/${c.icon}.svg`} alt="" width={25} height={25} />
                  </span>
                  <span className="w-full pt-0.5 font-poppins text-[10px] font-bold leading-4 tracking-[2px] text-[#86d4d8]">
                    CORE INDUSTRIES
                  </span>
                  <h3 className="w-full pt-1 font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                  <p className="w-full font-poppins text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
                  <span className="w-full pb-[0.59px] pt-[7px] font-poppins text-[11px] leading-[17.6px] text-[#b5d8db]">
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
