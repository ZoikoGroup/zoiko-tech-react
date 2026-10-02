// Implementation & adoption (7-step roadmap + case study cards)
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const steps = [
  { t: ["Define critical scope"], s: ["Scope approved"], flag: "step-flag", w: 13, h: 13, pb: "pb-[22px]" },
  { t: ["Establish baseline"], s: ["Baseline reviewed"], flag: "step-flag", w: 13, h: 13, pb: "pb-[22px]" },
  { t: ["Prioritize protection"], s: ["Priority plan approved"], flag: "step-flag", w: 13, h: 13, pb: "pb-[22px]" },
  {
    t: ["Validate controls"],
    s: ["Acceptance criteria", "met"],
    flag: "step-flag-validate",
    w: 12.81,
    h: 12.997,
    pb: "pb-[4px]",
  },
  { t: ["Pilot & roll out"], s: ["Readiness confirmed"], flag: "step-flag", w: 13, h: 13, pb: "pb-[22px]" },
  { t: ["Review trust", "evidence"], s: ["Trust review completed"], flag: "step-flag", w: 13, h: 13, pb: "" },
  {
    t: ["Expand"],
    s: ["Periodic review", "completed"],
    flag: "step-flag-expand",
    w: 11.81,
    h: 12.997,
    pb: "pb-[4px]",
  },
];

const cases = [
  { title: "Security architecture", img: "case-security-architecture", pos: "right center" },
  { title: "Identity security", img: "case-identity-security", pos: "center" },
  { title: "Resilience", img: "case-resilience", pos: "center" },
  { title: "Evidence & assurance note", img: "case-assurance-note", pos: "center" },
];

export default function DesktopSection10() {
  return (
    <section id="s10" className="hidden w-full bg-[#e9f9f8] px-[80px] lg:block">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[11px] px-[32px] py-[88px]">
        <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
          Implementation &amp; adoption
        </p>
        <h2 className="font-plus-jakarta max-w-[860px] text-[48px] font-bold leading-[56.16px] tracking-[-1.44px] text-[#0f172a] xl:whitespace-nowrap">
          Start from a baseline you can trust
        </h2>

        <ol className="flex items-start justify-center gap-[12px] pt-[29px]">
          {steps.map((s, i) => (
            <li key={i} className={`flex min-w-0 flex-1 flex-col gap-[7.5px] ${s.pb}`}>
              <div className="flex items-center gap-[8px]">
                <span className="font-plus-jakarta flex size-[40px] shrink-0 items-center justify-center rounded-[20px] bg-[#247780] text-center text-[15px] font-bold leading-[15px] text-white">
                  {i + 1}
                </span>
                {i < steps.length - 1 && <span className="h-[2px] min-w-px flex-1 bg-[#9fdcd7]" />}
              </div>
              <h3 className="font-plus-jakarta text-[16px] font-bold leading-[22px] text-[#0f172a]">
                <DesktopLines lines={s.t} />
              </h3>
              <p className="flex items-center gap-[6px]">
                <Image
                  src={`/cybersecurity-protection/desktop-${s.flag}.svg`}
                  alt=""
                  width={s.w}
                  height={s.h}
                  className="shrink-0"
                />
                <span className="font-poppins text-[12px] font-medium leading-[18px] text-[#195b62]">
                  <DesktopLines lines={s.s} />
                </span>
              </p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col pb-[45px] pt-[21px]">
          <a
            href="/contact-us"
            className="font-poppins flex min-h-[44px] w-fit items-center gap-[6px] py-[12px] text-[14px] font-semibold leading-[20px] text-[#247780]"
          >
            Discuss rollout
            <Image src="/cybersecurity-protection/desktop-arrow-teal.svg" alt="" width={16} height={16} />
          </a>
        </div>

        <div className="flex flex-col gap-[24px] border-t border-solid border-[#c6e6e4] pt-[49px]">
          <div className="flex flex-wrap items-end justify-between gap-x-[193px] gap-y-[16px]">
            <div className="flex w-[564px] max-w-full flex-col gap-[12px]">
              <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
                Technology in practice
              </p>
              <h3 className="font-plus-jakarta text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f172a] xl:whitespace-nowrap">
                Evidence first, and only approved evidence
              </h3>
            </div>
            <p className="font-poppins max-w-[460px] pr-[14.09px] text-[14px] leading-[22px] text-[#334155]">
              <DesktopLines
                lines={[
                  "Case studies are in review. No blocked-threat counts,",
                  "vulnerability reductions, attack maps, logos, recovery metrics or",
                  "uptime claims until approved.",
                ]}
              />
            </p>
          </div>

          <ul className="flex items-start justify-center gap-[16px]">
            {cases.map((c, i) => (
              <li
                key={c.title}
                className="relative h-[210px] min-h-[210px] min-w-0 flex-1 overflow-hidden rounded-[14px]"
              >
                {i === 0 ? (
                  <div className="absolute left-[-24px] top-[-0.11px] h-[211px] w-[316px]">
                    <Image
                      src={`/cybersecurity-protection/desktop-${c.img}.webp`}
                      alt=""
                      fill
                      sizes="316px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={`/cybersecurity-protection/desktop-${c.img}.webp`}
                    alt=""
                    fill
                    sizes="(min-width:1440px) 292px, 22vw"
                    className="object-cover"
                    style={{ objectPosition: c.pos }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,19,21,0.25)] to-[rgba(0,19,21,0.9)]" />
                <span className="font-poppins absolute left-[16px] top-[17.5px] flex items-center gap-[6px] rounded-full bg-[#fef3c7] px-[10px] py-[4px] text-[11px] font-semibold leading-[15px] tracking-[0.22px] text-[#92400e]">
                  <span className="size-[6px] rounded-[3px] bg-[#92400e]" />
                  Evidence pending
                </span>
                <div className="absolute bottom-[14px] left-[16px] right-[16px] flex flex-col gap-[2px]">
                  <p className="font-poppins text-[11px] font-semibold leading-[16px] tracking-[1.32px] text-[#4ddcad]">
                    CASE STUDY · IN REVIEW
                  </p>
                  <h3 className="font-plus-jakarta text-[18px] font-bold leading-[24px] text-white">{c.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
