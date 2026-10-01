import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/financial-services/desktop-icon-sparkles-ai.svg",
    title: ["Source-aware analysis"],
    body: ["Retrieve, compare and", "summarize approved", "operational", "and regulatory sources."],
    extra: "",
  },
  {
    icon: "/financial-services/desktop-icon-document.svg",
    title: ["Evidence assistance"],
    body: ["Draft, classify and map", "supporting records with", "provenance where", "supported."],
    extra: "",
  },
  {
    icon: "/financial-services/desktop-icon-user.svg",
    title: ["Human decision", "ownership"],
    body: ["A named human or", "authorized", "system owns the decision."],
    extra: "pb-[46.5px]",
  },
  {
    icon: "/financial-services/desktop-icon-lock.svg",
    title: ["Bounded agent", "actions"],
    body: ["Approved tools and action", "scope; no self-authorizing", "financial actions."],
    extra: "pb-[22px]",
  },
];

export default function DesktopIntelligence() {
  return (
    <section id="intelligence" className="w-full bg-white pb-[108px] pt-[93px] font-poppins">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[26px] px-10 xl:px-0">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Useful intelligence.", "Bounded authority."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.495px] text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "Source-aware assistance keeps recommendations reviewable and material financial decisions",
                "accountable.",
              ]}
            />
          </p>
        </div>

        <div className="flex items-center justify-center gap-[44px] pt-[10px]">
          <div className="grid min-w-0 flex-1 grid-cols-2 grid-rows-[316px_321px] gap-x-[20px] gap-y-[35px]">
            {cards.map((c) => (
              <a
                key={c.icon}
                href="#"
                className="flex min-w-0 flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]"
              >
                <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                </div>
                <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-[#102d2f]">
                  <DesktopLines lines={c.title} />
                </h3>
                <p className={`pb-[22px] text-[15px] leading-[24px] text-[#587176] ${c.extra}`}>
                  <DesktopLines lines={c.body} />
                </p>
                <span className="relative block h-[36.8px] min-h-[36px] w-full">
                  <span className="absolute left-0 top-[6.5px] -translate-y-1/2 whitespace-nowrap text-[13px] font-bold leading-[20.8px] text-[#247780]">
                    Explore pathway
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="relative aspect-[578/530] max-h-[530px] min-w-0 flex-1">
            <Image
              src="/financial-services/desktop-intelligence-governed-ai.webp"
              alt="Teal illustration of governed AI with oversight, permissions and evidence"
              fill
              sizes="578px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
