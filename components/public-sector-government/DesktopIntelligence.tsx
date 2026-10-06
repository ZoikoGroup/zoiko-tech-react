import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/public-sector-government/desktop-icon-sparkle.svg",
    title: "Assist & recommend",
    body: "Summarize and suggest from approved sources. An authorized human or system decides.",
    lines: null,
    minH: "min-h-[258px]",
  },
  {
    icon: "/public-sector-government/desktop-practice-document-icon.svg",
    title: "Prepare for review",
    body: "",
    lines: ["Draft communications or", "evidence packages before", "material action."],
    minH: "min-h-[258px]",
  },
  {
    icon: "/public-sector-government/desktop-icon-lock.svg",
    title: "Execute with approval",
    body: "Supported tools, explicit approval and a bounded action scope.",
    lines: null,
    minH: "min-h-[279px]",
  },
  {
    icon: "/public-sector-government/desktop-icon-shield-check.svg",
    title: "Operate within bounds",
    body: "",
    lines: ["Approved low-risk scope", "with monitoring and retained", "evidence."],
    minH: "min-h-[279px]",
  },
];

export default function DesktopIntelligence() {
  return (
    <section
      id="intelligence"
      className="flex w-full flex-col items-center bg-white pt-[93px] pb-[108px] px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] leading-[50.6px] font-bold tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["AI can assist.", "Official authority stays explicit."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Responsible AI connects governance, human oversight, evaluation and accountable deployment.
          </p>
        </div>
        <div className="flex items-center justify-center gap-[44px] pt-[36px]">
          <ul className="grid min-w-0 flex-1 grid-cols-2 content-start gap-5">
            {cards.map((c) => (
              <li
                key={c.title}
                className={`flex w-full flex-col items-start self-start rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px] ${c.minH}`}
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
                  {c.lines ? <DesktopLines lines={c.lines} /> : c.body}
                </p>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[578/530] max-h-[530px] min-w-0 flex-1">
            <Image
              src="/public-sector-government/desktop-intelligence-governed-ai-illustration.webp"
              alt="Governed AI illustration with human oversight, controlled permissions and evidence"
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
