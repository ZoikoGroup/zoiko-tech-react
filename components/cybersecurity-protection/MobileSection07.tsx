// Privacy, evidence & governance (claim levels + evidence list)
import Image from "next/image";
import MobileLines from "./MobileLines";

const levels = [
  {
    label: "Certified / Attested",
    pad: "pl-0",
    card: "bg-[rgba(255,255,255,0.1)] border-[rgba(52,212,202,0.5)] border-solid",
    pill: "bg-[#dbf2ed] text-[#195b62] px-[10px] py-[5px]",
    lines: ["A current certificate or", "attestation exists for", "the exact scope and", "entity."],
  },
  {
    label: "Compliant",
    pad: "pl-[20px]",
    card: "bg-[rgba(255,255,255,0.1)] border-[rgba(52,212,202,0.5)] border-solid",
    pill: "bg-[#e0f2fe] text-[#075985] px-[10px] py-[5px]",
    lines: ["Only where legally or", "contractually verified for", "the exact product and", "context."],
  },
  {
    label: "Aligned / Designed to",
    pad: "pl-[40px]",
    card: "bg-[rgba(255,255,255,0.1)] border-[rgba(52,212,202,0.5)] border-solid",
    pill: "bg-[#f1f5f9] text-[#334155] px-[10px] py-[5px]",
    lines: ["Designed with a", "framework in", "mind, without", "representing", "certification."],
  },
  {
    label: "Roadmap / Target",
    pad: "pl-[60px]",
    card: "bg-[rgba(255,255,255,0.06)] border-[rgba(52,212,202,0.35)] border-dashed",
    pill: "border border-dashed border-[#cbd5e1] text-[#cbd5e1] px-[11px] py-[6px]",
    lines: ["A future", "intention.", "Visually distinct", "and not", "procurement-", "ready."],
  },
];

const checks = [
  { icon: "check-privacy", w: 16.73, h: 18, lines: ["Privacy: purpose limitation and data", "minimization"] },
  { icon: "check-evidence", w: 16.05, h: 18, lines: ["Security evidence with scope, date, owner", "and state"] },
  { icon: "check-compliance", w: 12.55, h: 18, lines: ["Compliance evidence in exact-scope,", "jurisdiction-aware language"] },
  { icon: "check-exceptions", w: 18, h: 18, lines: ["Bounded, reviewed exceptions kept visible"] },
  { icon: "check-status", w: 16.55, h: 18, lines: ["Live incidents and service health on System", "Status"] },
];

export default function MobileSection07() {
  return (
    <section id="s07-m" className="w-full bg-[#00191e] px-[32px] py-[88px] font-poppins">
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-[56px]">
        <div className="flex w-full flex-col gap-[11px]">
          <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
            Privacy, evidence &amp; governance
          </p>
          <h2 className="max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-white">
            <MobileLines lines={["Every trust claim says", "exactly how strong it is"]} />
          </h2>
          <p className="max-w-[780px] pt-[5px] text-[18px] leading-[28px] text-[#e2e8f0]">
            <MobileLines
              lines={[
                "Four levels of claim, never blurred.",
                "Certifications appear only from the",
                "authoritative registry, with entity,",
                "scope, issuer and review date.",
              ]}
            />
          </p>
          <ol className="flex w-full flex-col gap-[10px] pt-[17px]">
            {levels.map((l) => (
              <li key={l.label} className={`w-full ${l.pad}`}>
                <div className={`flex w-full items-start gap-[16px] rounded-[12px] border px-[19px] py-[17px] ${l.card}`}>
                  <span className={`shrink-0 whitespace-nowrap rounded-full text-[11px] font-semibold leading-[15px] ${l.pill}`}>
                    {l.label}
                  </span>
                  <p className="min-w-0 text-[14px] leading-[22px] text-[#e2e8f0]">
                    <MobileLines lines={l.lines} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex w-full flex-wrap items-center gap-x-[12px] pt-[13px]">
            <a
              href="/contact-us"
              className="flex min-h-[44px] items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[20px] py-[12px] text-[15px] font-semibold leading-[20px] text-white"
            >
              Open Trust Center
              <Image src="/cybersecurity-protection/mobile-icon-arrow-right-white.svg" alt="" width={16} height={16} />
            </a>
            <a
              href="/status-dashboard"
              className="flex min-h-[44px] items-center gap-[6px] py-[12px] text-[14px] font-semibold leading-[20px] text-[#4ddcad]"
            >
              System Status
              <Image src="/cybersecurity-protection/mobile-icon-arrow-right-green.svg" alt="" width={16} height={16} />
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[20px]">
          <div className="relative h-[380px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/cybersecurity-protection/mobile-assurance-building.webp"
              alt="Historic stone building with an assurance company name carved above the door"
              fill
              sizes="(max-width: 720px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          <ul className="flex w-full flex-col gap-[10px]">
            {checks.map((c) => (
              <li key={c.icon} className="flex w-full items-start gap-[8px]">
                <Image
                  src={`/cybersecurity-protection/mobile-icon-${c.icon}.svg`}
                  alt=""
                  width={c.w}
                  height={c.h}
                  className="shrink-0"
                  style={{ width: c.w, height: c.h }}
                />
                <p className="min-w-0 text-[14px] leading-[22px] text-[#e2e8f0]">
                  <MobileLines lines={c.lines} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
