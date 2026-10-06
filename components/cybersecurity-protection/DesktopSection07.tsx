// Privacy, evidence & governance (claim levels + photo)
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const levels = [
  {
    label: "Certified / Attested",
    lines: ["A current certificate or attestation exists for the exact", "scope and entity."],
    indent: "pl-0",
    pill: "bg-[#dbf2ed] text-[#195b62] px-[10px] py-[5px]",
    card: "bg-[rgba(255,255,255,0.1)] border-[rgba(52,212,202,0.5)] border-solid",
  },
  {
    label: "Compliant",
    lines: ["Only where legally or contractually verified for the exact", "product and context."],
    indent: "pl-[20px]",
    pill: "bg-[#e0f2fe] text-[#075985] px-[10px] py-[5px]",
    card: "bg-[rgba(255,255,255,0.1)] border-[rgba(52,212,202,0.5)] border-solid",
  },
  {
    label: "Aligned / Designed to",
    lines: ["Designed with a framework in mind, without", "representing certification."],
    indent: "pl-[40px]",
    pill: "bg-[#f1f5f9] text-[#334155] px-[10px] py-[5px]",
    card: "bg-[rgba(255,255,255,0.1)] border-[rgba(52,212,202,0.5)] border-solid",
  },
  {
    label: "Roadmap / Target",
    lines: ["A future intention. Visually distinct and not", "procurement-ready."],
    indent: "pl-[60px]",
    pill: "border border-dashed border-[#cbd5e1] text-[#cbd5e1] px-[11px] py-[6px]",
    card: "bg-[rgba(255,255,255,0.06)] border-[rgba(52,212,202,0.35)] border-dashed",
  },
];

const bullets = [
  "Privacy: purpose limitation and data minimization",
  "Security evidence with scope, date, owner and state",
  "Compliance evidence in exact-scope, jurisdiction-aware language",
  "Bounded, reviewed exceptions kept visible",
  "Live incidents and service health on System Status",
];

export default function DesktopSection07() {
  return (
    <section
      id="s07"
      className="hidden w-full bg-[#00191e] px-[112px] py-[88px] lg:block"
    >
      <div className="flex items-center justify-center gap-[56px]">
        <div className="flex min-w-0 flex-1 flex-col gap-[11.1px]">
          <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
            Privacy, evidence &amp; governance
          </p>
          <h2 className="font-plus-jakarta max-w-[860px] text-[48px] font-bold leading-[56.16px] tracking-[-1.44px] text-white">
            <DesktopLines lines={["Every trust claim says", "exactly how strong it is"]} />
          </h2>
          <p className="font-poppins max-w-[780px] pt-[4.91px] text-[18px] leading-[28px] text-[#e2e8f0]">
            <DesktopLines
              lines={[
                "Four levels of claim, never blurred. Certifications appear only",
                "from the authoritative registry, with entity, scope, issuer and",
                "review date.",
              ]}
            />
          </p>
          <ol className="flex flex-col gap-[10px] pt-[16.9px]">
            {levels.map((l) => (
              <li key={l.label} className={`w-full ${l.indent}`}>
                <div
                  className={`flex items-start gap-[16px] rounded-[12px] border px-[19px] py-[17px] ${l.card}`}
                >
                  <span
                    className={`font-poppins shrink-0 rounded-full text-[11px] font-semibold leading-[15px] whitespace-nowrap ${l.pill}`}
                  >
                    {l.label}
                  </span>
                  <p className="font-poppins pr-[29px] text-[14px] leading-[22px] text-[#e2e8f0]">
                    <DesktopLines lines={l.lines} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-x-[12px] pt-[12.9px]">
            <a
              href="/zoiko-shield"
              className="font-poppins flex min-h-[44px] items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[20px] py-[12px] text-[15px] font-semibold leading-[20px] text-white"
            >
              Open Trust Center
              <Image src="/cybersecurity-protection/desktop-arrow-white.svg" alt="" width={16} height={16} />
            </a>
            <a
              href="/status-dashboard"
              className="font-poppins flex min-h-[44px] items-center gap-[6px] py-[12px] text-[14px] font-semibold leading-[20px] text-[#4ddcad]"
            >
              System Status
              <Image src="/cybersecurity-protection/desktop-arrow-green.svg" alt="" width={16} height={16} />
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-[20px]">
          <div className="relative h-[380px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/cybersecurity-protection/desktop-trust-levels-photo.webp"
              alt="Team joining hands over a table"
              fill
              sizes="(min-width:1440px) 580px, 40vw"
              className="object-cover"
            />
          </div>
          <ul className="flex flex-col gap-[10px]">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-[8px]">
                <Image
                  src="/cybersecurity-protection/desktop-check-green.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="shrink-0"
                />
                <span className="font-poppins text-[14px] leading-[22px] text-[#e2e8f0]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
