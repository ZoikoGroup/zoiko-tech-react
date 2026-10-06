// Why security fragments (before/after list with figure)
import Image from "next/image";
import MobileLines from "./MobileLines";

const items: { from: string; to: string[]; check: string; w: number; h: number }[] = [
  { from: "Assets and services lack clear owners", to: ["Business and technical ownership with", "criticality"], check: "mobile-check-1.svg", w: 15.02, h: 16.005 },
  { from: "Identity controls differ by application", to: ["Authentication and least privilege tied to the", "architecture"], check: "mobile-check-2.svg", w: 12.78, h: 15.998 },
  { from: "Prevention and response live in separate tools", to: ["A visible control → signal → response chain"], check: "mobile-check-3.svg", w: 16, h: 16 },
  { from: "Privacy sits outside security design", to: ["Purpose, minimization and access", "boundaries built in"], check: "mobile-check-4.svg", w: 13.8, h: 16.004 },
  { from: "Evidence goes stale", to: ["Current, stale, missing and unsupported", "states"], check: "mobile-check-5.svg", w: 15.45, h: 15.997 },
  { from: "Continuity is an afterthought", to: ["Incidents linked to critical-service", "dependencies"], check: "mobile-check-6.svg", w: 14.75, h: 16 },
  { from: "Trust claims drift from current scope", to: ["Authoritative registries and Trust Center", "routes"], check: "mobile-check-7.svg", w: 15.52, h: 16.005 },
];

export default function MobileSection03() {
  return (
    <section id="s03-m" className="flex w-full flex-col items-start bg-[#e9f9f8]">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center gap-[56px] px-[32px] py-[88px]">
        <div className="flex w-full flex-col items-start gap-[11.1px]">
          <p className="w-full font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
            Why security fragments
          </p>
          <h2 className="w-full max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-[#0f172a]">
            <MobileLines lines={["Most security gaps sit", "between the tools, not", "inside them"]} />
          </h2>
          <p className="w-full max-w-[780px] pt-[4.9px] font-poppins text-[18px] leading-[28px] text-[#64748b]">
            <MobileLines
              lines={["Seven reasons protection drifts apart,", "and what a connected architecture", "does instead."]}
            />
          </p>
          <ul className="flex w-full flex-col items-start pt-[16.9px] sm:grid sm:grid-cols-2 sm:gap-x-[24px]">
            {items.map((it) => (
              <li key={it.from} className="flex w-full flex-col items-start gap-[3.5px] border-t border-[#e2e8f0] pb-[13px] pt-[14px]">
                <p className="w-full font-poppins text-[14px] leading-[20px] text-[#64748b] line-through">{it.from}</p>
                <div className="flex w-full items-center gap-[8px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/cybersecurity-protection/${it.check}`}
                    alt=""
                    style={{ width: it.w, height: it.h }}
                    className="shrink-0"
                  />
                  <p className="font-plus-jakarta text-[15px] font-semibold leading-[22px] text-[#0f172a]">
                    <MobileLines lines={it.to} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative m-0 h-[640px] min-h-[640px] w-full overflow-hidden rounded-[20px]">
          <Image
            src="/cybersecurity-protection/mobile-glass-facade.webp"
            alt="Glass facade of a modern building"
            fill
            sizes="(min-width: 720px) 656px, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-[20px] left-[20px] right-[20px] flex flex-col items-start gap-[4px] rounded-[14px] bg-[rgba(255,255,255,0.95)] px-[20px] py-[18px]">
            <span className="w-full font-plus-jakarta text-[16px] font-bold leading-[22px] text-[#0f172a]">
              Connected, not consolidated
            </span>
            <span className="font-poppins text-[14px] font-medium leading-[22px] text-[#0f172a]">
              <MobileLines
                lines={[
                  "You keep the controls that work. The",
                  "architecture makes ownership,",
                  "signals and evidence line up across",
                  "them.",
                ]}
              />
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
