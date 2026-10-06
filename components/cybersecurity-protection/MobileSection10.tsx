// Implementation & adoption (7-step baseline) + case studies in review
import Image from "next/image";
import MobileLines from "./MobileLines";

const steps = [
  { n: 1, title: ["Define critical scope"], note: ["Scope approved"] },
  { n: 2, title: ["Establish baseline"], note: ["Baseline reviewed"] },
  { n: 3, title: ["Prioritize protection"], note: ["Priority plan approved"] },
  { n: 4, title: ["Validate controls"], note: ["Acceptance criteria met"] },
  { n: 5, title: ["Pilot & roll out"], note: ["Readiness confirmed"] },
  { n: 6, title: ["Review trust", "evidence"], note: ["Trust review completed"] },
  { n: 7, title: ["Expand"], note: ["Periodic review", "completed"], last: true },
];

const cases = [
  { title: "Security architecture", img: "case-security-architecture.webp" },
  { title: "Identity security", img: "case-identity-security.webp" },
  { title: "Resilience", img: "case-resilience.webp" },
  { title: "Evidence & assurance note", img: "assurance-building.webp" },
];

export default function MobileSection10() {
  return (
    <section id="s10-m" className="w-full bg-[#e9f9f8] px-[32px] py-[88px] font-poppins">
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-[11px]">
        <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
          Implementation &amp; adoption
        </p>
        <h2 className="max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-[#0f172a]">
          <MobileLines lines={["Start from a baseline you", "can trust"]} />
        </h2>

        <ol className="grid w-full grid-cols-2 items-start gap-x-[12px] gap-y-[24px] pt-[29px] sm:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col gap-[7.5px]">
              <div className="flex w-full items-center gap-[8px]">
                <span className="flex size-[40px] shrink-0 items-center justify-center rounded-[20px] bg-[#247780] font-plus-jakarta text-[15px] font-bold leading-[15px] text-white">
                  {s.n}
                </span>
                {!s.last && <span className="h-[2px] min-w-px flex-1 bg-[#9fdcd7]" />}
              </div>
              <h3 className="font-plus-jakarta text-[16px] font-bold leading-[22px] text-[#0f172a]">
                <MobileLines lines={s.title} />
              </h3>
              <p className="flex items-center gap-[6px] text-[12px] font-medium leading-[18px] text-[#195b62]">
                <Image
                  src={`/cybersecurity-protection/mobile-icon-${s.last ? "flag-step-last" : "flag-step"}.svg`}
                  alt=""
                  width={13}
                  height={13}
                  className="shrink-0"
                />
                <span>
                  <MobileLines lines={s.note} />
                </span>
              </p>
            </li>
          ))}
        </ol>

        <div className="flex w-full flex-col pt-[21px]">
          <a
            href="/contact-us"
            className="flex min-h-[44px] w-fit items-center gap-[6px] py-[12px] text-[14px] font-semibold leading-[20px] text-[#247780]"
          >
            Discuss rollout
            <Image src="/cybersecurity-protection/mobile-icon-arrow-right-teal.svg" alt="" width={16} height={16} />
          </a>
        </div>

        <div className="flex w-full flex-col gap-[24px] border-t border-[#c6e6e4] pt-[94px]">
          <div className="flex w-full flex-col gap-[24px]">
            <div className="flex w-full flex-col gap-[12px]">
              <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
                Technology in practice
              </p>
              <h3 className="font-plus-jakarta text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f172a]">
                <MobileLines lines={["Evidence first, and only", "approved evidence"]} />
              </h3>
            </div>
            <p className="max-w-[460px] pr-[30px] text-[14px] leading-[22px] text-[#334155]">
              <MobileLines
                lines={[
                  "Case studies are in review. No blocked-threat",
                  "counts, vulnerability reductions, attack maps,",
                  "logos, recovery metrics or uptime claims until",
                  "approved.",
                ]}
              />
            </p>
          </div>
          <ul className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2">
            {cases.map((c) => (
              <li key={c.title} className="relative h-[210px] min-h-[210px] w-full overflow-hidden rounded-[14px]">
                <Image
                  src={`/cybersecurity-protection/mobile-${c.img}`}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,19,21,0.25)] to-[rgba(0,19,21,0.9)]" />
                <span className="absolute left-[16px] top-[17.5px] flex items-center gap-[6px] rounded-full bg-[#fef3c7] px-[10px] py-[4px] text-[11px] font-semibold leading-[15px] tracking-[0.22px] text-[#92400e]">
                  <span className="size-[6px] rounded-[3px] bg-[#92400e]" />
                  Evidence pending
                </span>
                <div className="absolute bottom-[14px] left-[16px] right-[16px] flex flex-col gap-[2px]">
                  <p className="text-[11px] font-semibold leading-[16px] tracking-[1.32px] text-[#4ddcad]">
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
