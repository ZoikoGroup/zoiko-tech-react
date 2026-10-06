import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    photo: "/retail-commerce/desktop-locations-boutique-customers.webp",
    icon: "/retail-commerce/desktop-locations-icon-store.svg",
    title: "Location-aware experience",
    text: "Identify relevant location context without implying a Zoiko store-management system.",
  },
  {
    photo: "/retail-commerce/desktop-locations-store-seller.webp",
    icon: "/retail-commerce/desktop-locations-icon-phone.svg",
    title: "Customer contactability",
    text: "Supported communication endpoints and routing require market confirmation.",
  },
  {
    photo: "/retail-commerce/desktop-locations-commerce-team.webp",
    icon: "/retail-commerce/desktop-locations-icon-network.svg",
    title: "Responsible operating systems",
    text: "Store, inventory and fulfillment systems retain their own authority.",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="w-full bg-white py-14 font-poppins md:pb-[108px] md:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            09 / MULTI-LOCATION &amp; STORE OPERATIONS
          </p>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.8px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] md:tracking-[-1.3px] lg:text-[36px] lg:leading-[42px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Local context.", "Clear communication boundaries."]}
              tablet={["Local context.", "Clear communication boundaries."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] text-[16px] leading-[25.6px] text-[#587176]">
            Use approved location, business-unit and market context to evaluate reachability and supported routing.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-[10px] md:grid-cols-3 md:gap-[22px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-white md:pb-6 lg:pb-0"
            >
              <div className="relative h-[200px] w-full overflow-hidden md:h-[170px] lg:h-[220px]">
                <Image
                  src={c.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 240px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 md:p-[18px] lg:p-[26px]">
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="pt-[2px] text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="text-[15px] leading-6 text-[#587176]">{c.text}</p>
                <a
                  href="#"
                  className="flex min-h-[36px] items-start pb-2 pt-[11px] text-[13px] font-bold leading-[20.8px] text-[#247780] lg:hidden"
                >
                  Explore pathway ↗
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[18.5px] text-[14px] leading-[22.4px] text-[#48666a] lg:hidden">
          Local communications do not establish local listings, maps, reviews, local SEO or POS functionality.
        </p>
      </div>
    </section>
  );
}
