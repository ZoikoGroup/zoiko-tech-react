// Why security fragments
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const items = [
  ["Assets and services lack clear owners", "Business and technical ownership with criticality"],
  ["Identity controls differ by application", "Authentication and least privilege tied to the architecture"],
  ["Prevention and response live in separate tools", "A visible control → signal → response chain"],
  ["Privacy sits outside security design", "Purpose, minimization and access boundaries built in"],
  ["Evidence goes stale", "Current, stale, missing and unsupported states"],
  ["Continuity is an afterthought", "Incidents linked to critical-service dependencies"],
  ["Trust claims drift from current scope", "Authoritative registries and Trust Center routes"],
];

export default function DesktopSection03() {
  return (
    <section id="s03" className="w-full bg-[#e9f9f8] px-12 py-[88px] xl:px-28">
      <div className="flex w-full items-center justify-center gap-14">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[11.2px]">
          <p className="w-full font-poppins text-[11px] font-semibold uppercase leading-4 tracking-[1.76px] text-[#247780]">
            Why security fragments
          </p>
          <h2 className="w-full max-w-[860px] font-plus-jakarta text-[40px] font-bold leading-[1.17] tracking-[-1.44px] text-[#0f172a] xl:text-[48px] xl:leading-[56.16px]">
            <DesktopLines
              lines={[
                "Most security gaps sit",
                "between the tools, not",
                "inside them",
              ]}
            />
          </h2>
          <p className="w-full max-w-[780px] pt-[4.8px] font-poppins text-[18px] leading-[28px] text-[#64748b]">
            <DesktopLines
              lines={[
                "Seven reasons protection drifts apart, and what a connected",
                "architecture does instead.",
              ]}
            />
          </p>
          <ul className="w-full pt-[16.8px]">
            {items.map(([before, after]) => (
              <li
                key={before}
                className="flex flex-col gap-[3.5px] border-t border-[#e2e8f0] pb-[13px] pt-[14px]"
              >
                <span className="font-poppins text-[14px] leading-5 text-[#64748b] line-through">
                  {before}
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    src="/cybersecurity-protection/desktop-check-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span className="font-plus-jakarta text-[15px] font-semibold leading-[22px] text-[#0f172a]">
                    {after}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative h-[640px] min-w-0 flex-1 overflow-hidden rounded-[20px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[-23.56%] top-0 h-full w-[147.13%]">
              <Image
                src="/cybersecurity-protection/desktop-fragments-glass-structure-base.webp"
                alt=""
                fill
                sizes="600px"
                className="object-fill"
              />
            </div>
            <div className="absolute left-0 top-[0.48%] h-[99.53%] w-full">
              <div className="absolute left-0 top-[-0.05%] h-[136.52%] w-full">
                <Image
                  src="/cybersecurity-protection/desktop-fragments-man-presenting-overlay.webp"
                  alt="Presenter standing in front of a screen of connected circuit diagrams"
                  fill
                  sizes="600px"
                  className="object-fill"
                />
              </div>
            </div>
          </div>
          <figcaption className="absolute inset-x-5 bottom-5 flex flex-col gap-1 rounded-[14px] bg-white/95 px-5 py-[18px]">
            <span className="font-plus-jakarta text-[16px] font-bold leading-[22px] text-[#0f172a]">
              Connected, not consolidated
            </span>
            <span className="font-poppins text-[14px] font-medium leading-[22px] text-[#0f172a]">
              <DesktopLines
                lines={[
                  "You keep the controls that work. The architecture makes ownership,",
                  "signals and evidence line up across them.",
                ]}
              />
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
