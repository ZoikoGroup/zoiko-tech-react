import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  {
    icon: "/financial-services/tablet-icon-sparkle.svg",
    title: "Source-aware analysis",
    text: "Retrieve, compare and summarize approved operational and regulatory sources.",
  },
  {
    icon: "/financial-services/tablet-evidence-result-icon.svg",
    title: "Evidence assistance",
    text: "Draft, classify and map supporting records with provenance where supported.",
  },
  {
    icon: "/financial-services/tablet-icon-user.svg",
    title: "Human decision ownership",
    text: "A named human or authorized system owns the decision.",
  },
  {
    icon: "/financial-services/tablet-icon-lock.svg",
    title: "Bounded agent actions",
    text: "Approved tools and action scope; no self-authorizing financial actions.",
  },
];

export default function TabletIntelligence() {
  return (
    <section
      id="intelligence-t"
      className="w-full overflow-hidden bg-white px-[5%] pb-[70px] pt-[70px] font-poppins md:pb-[108px] md:pt-[93px]"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            09 / AI &amp; SPECIALIST INTELLIGENCE
          </span>
          <h2 className="text-[clamp(24px,4.5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Useful intelligence.", "Bounded authority."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#587176]">
            Source-aware assistance keeps recommendations reviewable and material financial decisions accountable.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 pt-[10px]">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {cards.map((c) => (
              <li key={c.title} className="flex">
                <a
                  href="#"
                  className="flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]"
                >
                  <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                  <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                  <p className="pb-[22px] text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
                  <span className="mt-auto flex min-h-[36px] items-center justify-between gap-2 py-2 text-[13px] leading-[20.8px] text-[#247780]">
                    <span className="font-bold">Explore pathway</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Image
            src="/financial-services/tablet-intelligence-governed-ai-illustration.webp"
            alt="Teal illustration of governed AI with oversight, permissions and evidence"
            width={1000}
            height={1000}
            className="aspect-square h-auto w-full max-w-[460px]"
          />
        </div>

        <p className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[18.5px] text-[14px] leading-[22.4px] text-[#48666a]">
          Financial intelligence is not positioned as investment, lending, credit, tax or legal advice.
        </p>
      </div>
    </section>
  );
}
