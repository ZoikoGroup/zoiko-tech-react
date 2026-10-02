import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  { title: "Inventory / use case", img: "/regulated-industries/tablet-ai-inventory.webp", lines: ["AI system, agent or workflow context,", "purpose and owner at supported scope."] },
  { title: "Authority mode", img: "/regulated-industries/tablet-ai-authority-mode.webp", lines: ["Assist, recommend, prepare, execute", "with approval. Bounded execution only", "where approved."] },
  { title: "Human oversight", img: "/regulated-industries/tablet-ai-human-oversight.webp", lines: ["A named accountable reviewer or", "approver for material decisions."] },
  { title: "Evaluation", img: "/regulated-industries/tablet-ai-evaluation.webp", lines: ["Approved test evidence, limitations and", "review date."] },
  { title: "Agent / tool permissions", img: "/regulated-industries/tablet-ai-agent-permissions.webp", lines: ["Explicit system, data and action scope.", "No self-expanding authority."] },
  { title: "Evidence / audit", img: "/regulated-industries/tablet-ai-evidence-audit.webp", lines: ["Source, model, policy, approval and", "action evidence where supported."] },
  { title: "High-impact use", img: "/regulated-industries/tablet-ai-high-impact.webp", lines: ["No implied autonomous regulated, legal,", "eligibility, clinical, financial or", "enforcement decisions without separate", "approval."] },
];

export default function TabletAi() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61.43px] pt-[60.44px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-3">
        <h2 className="font-sora text-[25.6px] font-bold leading-[29.44px] text-[#0a1416]">
          AI governance and assurance
        </h2>
        <p className="pt-[2.36px] font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          AI in regulated settings stays bounded, reviewable and human-accountable.
        </p>
        <ul className="grid grid-cols-1 gap-[18px] pt-[10px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white px-5 pb-5 shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative -mx-5 h-[140px] w-[calc(100%+40px)] overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)" }}
              >
                <Image src={c.img} alt="" fill sizes="(min-width: 640px) 335px, 100vw" className="object-cover" />
              </div>
              <h3 className="pt-[10.1px] font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                {c.title}
              </h3>
              <p className="mt-[5.9px] font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                <TabletLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pb-3">
          <a
            href="#"
            className="flex min-h-[48px] items-center rounded-[10px] border-2 border-[#247780] bg-[#247780] px-6 font-inter text-[16px] font-semibold text-white max-sm:w-full"
          >
            Explore AI Governance &amp; Assurance
          </a>
          <a
            href="#"
            className="flex min-h-[48px] items-center rounded-[10px] border-2 border-[#247780] px-6 font-inter text-[16px] font-semibold text-[#247780] max-sm:w-full"
          >
            Responsible AI
          </a>
        </div>
      </div>
    </section>
  );
}
