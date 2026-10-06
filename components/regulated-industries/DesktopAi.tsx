import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: "Inventory / use case", icon: "database", w: "w-[281.5px]", lines: ["AI system, agent or workflow", "context, purpose and owner at", "supported scope."] },
  { title: "Authority mode", icon: "shield", w: "w-[281.5px]", lines: ["Assist, recommend, prepare,", "execute with approval. Bounded", "execution only where approved."] },
  { title: "Human oversight", icon: "eye", w: "w-[281.5px]", lines: ["A named accountable reviewer", "or approver for material", "decisions."] },
  { title: "Evaluation", icon: "clipboard-check", w: "w-[281.5px]", lines: ["Approved test evidence,", "limitations and review date."] },
  { title: "Agent / tool permissions", icon: "key", w: "w-[281px]", lines: ["Explicit system, data and action", "scope. No self-expanding", "authority."] },
  { title: "Evidence / audit", icon: "file-text", w: "w-[282px]", lines: ["Source, model, policy, approval", "and action evidence where", "supported."] },
];

export default function DesktopAi() {
  return (
    <section className="w-full overflow-hidden bg-white px-[130px] py-[96px]">
      <div className="relative mx-auto h-[1006px] w-full max-w-[1180px]">
        <h2 className="absolute left-0 top-0 whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          AI governance and assurance
        </h2>
        <p className="absolute left-0 top-[75.11px] whitespace-nowrap font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          AI in regulated settings stays bounded, reviewable and human-accountable.
        </p>
        <div className="absolute left-[632px] top-[237.28px] size-[589px]">
          <Image
            src="/regulated-industries/desktop-ai-governance-illustration.webp"
            alt="Isometric illustration of governed AI architecture with human oversight"
            width={1200}
            height={1200}
            className="size-full object-cover"
          />
        </div>
        <ul className="absolute left-[-7px] top-[137.28px] flex h-[602px] w-[589px] flex-wrap content-start items-start gap-x-[26px] gap-y-[18px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`${c.w} flex h-[277.625px] flex-col items-center gap-[6px] overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white px-[20px] pb-[20px] shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]`}
            >
              <div
                className="flex h-[140px] w-[279.5px] shrink-0 flex-col justify-center"
                style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #247780 100%)" }}
              >
                <div
                  className="flex min-h-px flex-1 flex-col items-center justify-center"
                  style={{ backgroundImage: "linear-gradient(135.005deg, #ffffff 0%, #9fcdd2 100.03%)" }}
                >
                  <Image
                    src={`/regulated-industries/desktop-ai-icon-${c.icon}.svg`}
                    alt=""
                    width={72}
                    height={72}
                    className="size-[72px]"
                  />
                </div>
              </div>
              <h3 className="w-full pt-[10px] text-center font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                {c.title}
              </h3>
              <p className="w-full text-center font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                <DesktopLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
