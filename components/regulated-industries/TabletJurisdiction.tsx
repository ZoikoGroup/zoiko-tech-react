import TabletLines from "./TabletLines";

const cards = [
  { title: "Legal / commercial operator", lines: ["The exact entity operating or contracting", "for the platform or service, where", "material."] },
  { title: "Markets / availability", lines: ["Only locations and markets actually", "approved in the product registry."] },
  { title: "Regulated status", lines: ["Licensing, authorization and regulated-", "service wording from a controlled", "compliance source."] },
  { title: "Jurisdiction context", lines: ["Relevant jurisdiction only when", "authoritative and materially applicable."] },
  { title: "Deployment", lines: ["Cloud, hybrid, on-premises, region or", "residency only when deployment", "evidence supports it."] },
  { title: "Group platform attribution", lines: ["Sector-owned or Group platforms are", "never shown as Zoiko Tech-operated", "when they aren’t."] },
];

export default function TabletJurisdiction() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.44px] pt-[60.44px]"
      style={{ backgroundImage: "linear-gradient(135.01615016266123deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[25.6px] font-bold leading-[29.44px] text-white">
          Jurisdiction, market and operator truth
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
          Six facts we state precisely, or not at all.
        </p>
        <ul className="grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-5"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                <TabletLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
