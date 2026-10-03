import Link from "next/link";
import { WRAP } from "./layout";

const sectors = [
  { title: "Telecommunications", icon: "wifi", href: "/telecom", discuss: true },
  { title: "Financial Services", icon: "bar-chart", href: "/financial-services" },
  { title: "Healthcare & Life Sciences", icon: "heart", href: "/healthcare", discuss: true },
  { title: "Media & Entertainment", icon: "film", href: "/media-entertainment" },
  { title: "Public Sector & Government", icon: "landmark", href: "/public-sector-government" },
  { title: "Retail & Commerce", icon: "shopping-cart", href: "/retail-commerce" },
  { title: "Travel, Mobility & Transportation", icon: "plane", href: "/travel-mobility-transportation" },
  { title: "Real Estate & Property", icon: "home", href: "/real-estate-property" },
  { title: "Professional Services", icon: "briefcase", href: "#" },
  { title: "Education & Research", icon: "graduation-cap", href: "/education-research" },
];

export default function SectorRoutes() {
  return (
    <section
      id="sector-routes"
      className="w-full py-14 md:py-20 lg:pb-[108px] lg:pt-[93px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(28,93,100,1) 0%, rgba(22,73,79,1) 25%, rgba(16,53,58,1) 50%, rgba(9,33,36,1) 75%, rgba(3,13,15,1) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-8 lg:gap-12`}>
        <div className="flex max-w-[820px] flex-col gap-3">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            Explore a sector preview.
          </h2>
          <p className="max-w-[760px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            Navigation sits outside the cards. Local previews are design files; production publication and canonical routes require registry verification.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-6">
          {sectors.map((s) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className="flex min-h-20 items-center gap-4 rounded-xl border border-[#1a4a50] bg-[rgba(10,37,40,0.8)] p-5"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-[#1a5560] bg-[#0d3038]">
                  <img src={`/view-all-industries/icon-${s.icon}.svg`} alt="" width={24} height={24} className="size-6" />
                </span>
                <span className="min-w-0 flex-1 font-poppins text-[15px] font-bold leading-[22px] text-white">
                  {s.title}
                </span>
                <span className="h-10 w-px shrink-0 bg-[#1a5560]" />
                <span
                  className={`flex shrink-0 items-center gap-3 pl-4 ${
                    s.discuss ? "xl:w-[232px] xl:justify-between" : ""
                  }`}
                >
                  <span className="hidden whitespace-nowrap font-poppins text-[13px] font-medium text-[#97d7dd] sm:inline lg:hidden xl:inline">
                    {s.discuss ? "Discuss this industry" : "Open local design preview"}
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#1a5560] bg-[#0d3038]">
                    <img
                      src={`/view-all-industries/icon-${s.discuss ? "arrow-right" : "external-link"}.svg`}
                      alt=""
                      width={14}
                      height={14}
                      className="size-[14px]"
                    />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
