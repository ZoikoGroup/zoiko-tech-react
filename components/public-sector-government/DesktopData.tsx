import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/public-sector-government/desktop-icon-database.svg",
    title: "Source & provenance",
    lines: ["Owning agency or system,", "effective time and any", "transformation."],
  },
  {
    icon: "/public-sector-government/desktop-icon-globe.svg",
    title: "Jurisdiction & purpose",
    lines: ["Reviewed service scope,", "necessary information and", "approved retention."],
  },
];

export default function DesktopData() {
  return (
    <section id="data" className="flex w-full flex-col items-center bg-white pt-[93px] pb-[108px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] leading-[50.6px] font-bold tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Use trusted sources.", "Preserve their context."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Data use should be understandable, necessary for its purpose and linked to the owning source.
          </p>
        </div>
        <div className="flex items-center justify-center gap-[44px] pt-[10px]">
          <ul className="flex min-w-0 flex-[623_1_0] items-stretch justify-center gap-5">
            {cards.map((c) => (
              <li
                key={c.title}
                className="flex min-w-0 flex-1 flex-col items-start rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]"
              >
                <div className="flex h-[68px] w-[46px] flex-col items-start pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                </div>
                <h3 className="pb-[12px] font-poppins text-[20px] leading-[26px] font-bold text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="pb-[22px] font-poppins text-[15px] leading-[24px] text-[#587176]">
                  <DesktopLines lines={c.lines} />
                </p>
              </li>
            ))}
          </ul>
          <div className="relative h-[258px] min-w-0 flex-[534_1_0] rounded-[10px] shadow-[0px_10px_24px_-8px_rgba(0,0,0,0.18)]">
            <Image
              src="/public-sector-government/desktop-data-public-service-governance.webp"
              alt="Public service governance"
              fill
              sizes="534px"
              className="rounded-[10px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
