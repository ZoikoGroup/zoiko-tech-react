import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    href: "#journey",
    img: "/retail-commerce/desktop-pathway-online-shopping-laptop.webp",
    alt: "Customer using a laptop for online shopping",
    icon: "/retail-commerce/desktop-locations-icon-network.svg",
    title: "Digital commerce journeys",
    text: "Connect customer intent to the system that owns the transaction or service.",
  },
  {
    href: "#communications",
    img: "/retail-commerce/desktop-pathway-shopkeeper-store.webp",
    alt: "Shopkeeper assisting a customer in a store",
    icon: "/retail-commerce/desktop-locations-icon-phone.svg",
    title: "Customer communications",
    text: "Improve customer reachability, calling and approved routing workflows.",
  },
  {
    href: "#marketing",
    img: "/retail-commerce/desktop-pathway-professionals-laptop.webp",
    alt: "Professionals reviewing work on a laptop",
    icon: "/retail-commerce/desktop-icon-sparkle.svg",
    title: "Marketing operations",
    text: "Governed intelligence and approval around repeatable marketing work.",
  },
  {
    href: "#payments",
    img: "/retail-commerce/desktop-pathway-team-documents.webp",
    alt: "Team reviewing business documents",
    icon: "/retail-commerce/desktop-icon-document-pathway.svg",
    title: "Payments & billing",
    text: "Separate operator, payment result and commerce outcome.",
  },
  {
    href: "#operations",
    img: "/retail-commerce/desktop-pathway-team-online-orders.webp",
    alt: "Small business team preparing online orders",
    icon: "/retail-commerce/desktop-icon-user-pathway.svg",
    title: "Customer operations",
    text: "Route inquiries and post-transaction issues to responsible teams.",
  },
  {
    href: "#platforms",
    img: "/retail-commerce/desktop-locations-commerce-team.webp",
    alt: "Commerce business owners coordinating work with a laptop",
    icon: "/retail-commerce/desktop-icon-code-pathway.svg",
    title: "Integration & modernization",
    text: "Connect communication, commerce and operational systems.",
  },
];

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white py-14 md:pb-[94px] md:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-8 lg:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px] lg:gap-[14.8px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            01 / RETAIL OPERATING MODEL ROUTER
          </p>
          <h2 className="font-poppins text-[26px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] lg:text-[36px] lg:leading-[42px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines desktop={["Where does your commerce journey", "need to connect?"]} />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Choose a priority workflow. Each card leads to a relevant part of the operating architecture.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-x-[22px] md:gap-y-[26px]">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a
                href={c.href}
                className="flex w-full flex-col overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-white"
              >
                <span className="relative block h-[200px] w-full shrink-0 overflow-hidden md:h-[170px] lg:h-[220px]">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="flex flex-1 flex-col items-start gap-3 p-5 md:p-[18px] lg:items-center lg:p-[26px] lg:text-center">
                  <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[#deefef] py-[6.5px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                  </span>
                  <h3 className="pt-[2px] font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                  <p className="font-poppins text-[15px] leading-6 text-[#587176]">{c.text}</p>
                  <span className="mt-auto flex min-h-[36px] w-full items-start pb-2 pt-[11px] font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780] lg:hidden">
                    Explore pathway ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
