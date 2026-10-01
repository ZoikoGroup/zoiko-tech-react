import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: ["Legal / commercial", "operator"], lines: ["The exact entity operating or", "contracting for the platform or", "service, where material."] },
  { title: ["Markets / availability"], lines: ["Only locations and markets", "actually approved in the product", "registry."] },
  { title: ["Regulated status"], lines: ["Licensing, authorization and", "regulated-service wording from", "a controlled compliance source."] },
  { title: ["Jurisdiction context"], lines: ["Relevant jurisdiction only when", "authoritative and materially", "applicable."] },
  { title: ["Deployment"], lines: ["Cloud, hybrid, on-premises,", "region or residency only when", "deployment evidence supports it."] },
  { title: ["Group platform attribution"], lines: ["Sector-owned or Group", "platforms are never shown as", "Zoiko Tech-operated when they", "aren’t."] },
];

export default function DesktopJurisdiction() {
  return (
    <section
      className="w-full px-[130px] py-[96px]"
      style={{ backgroundImage: "linear-gradient(127.913deg, #000000 0%, #1c5c62 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.1px]">
        <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Jurisdiction, market and operator truth
        </h2>
        <p className="pb-[0.59px] font-inter text-[16px] leading-[25.6px] text-[#dcecee]">
          Six facts we state precisely, or not at all.
        </p>
        <div className="flex h-[528px] w-full gap-[48px] overflow-hidden">
          <ul className="grid h-[528px] min-w-0 max-w-[582px] flex-1 grid-cols-2 grid-rows-[160.3px_160.3px_165px] gap-[18px] pt-[1.9px]">
            {cards.map((c) => (
              <li
                key={c.title[0]}
                className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]"
              >
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                  <DesktopLines lines={c.title} />
                </h3>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  <DesktopLines lines={c.lines} />
                </p>
              </li>
            ))}
          </ul>
          <div className="relative h-[528px] min-w-0 max-w-[550px] flex-1 overflow-hidden rounded-[18px]">
            <Image
              src="/regulated-industries/desktop-jurisdiction-meeting.webp"
              alt="Colleagues reviewing global jurisdiction and market maps in a meeting"
              fill
              sizes="550px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
