// Hero
import Image from "next/image";
import MobileLines from "./MobileLines";

type Tone = "green" | "amber" | "blue";
const tones: Record<Tone, { bg: string; fg: string; dot: string }> = {
  green: { bg: "bg-[#dbf2ed]", fg: "text-[#195b62]", dot: "bg-[#195b62]" },
  amber: { bg: "bg-[#fef3c7]", fg: "text-[#92400e]", dot: "bg-[#92400e]" },
  blue: { bg: "bg-[#e0f2fe]", fg: "text-[#075985]", dot: "bg-[#075985]" },
};

function Pill({ tone, children }: { tone: Tone; children: string }) {
  return (
    <span className={`flex shrink-0 items-center gap-[6px] rounded-full px-[10px] py-[4px] ${tones[tone].bg}`}>
      <span className={`size-[6px] rounded-[3px] ${tones[tone].dot}`} />
      <span className={`font-poppins text-[11px] font-semibold leading-[15px] tracking-[0.22px] whitespace-nowrap ${tones[tone].fg}`}>
        {children}
      </span>
    </span>
  );
}

const chain: { icon: string; label: string[]; tone: Tone; status: string }[] = [
  { icon: "server", label: ["Critical systems"], tone: "green", status: "Protected" },
  { icon: "key", label: ["Identity & authority"], tone: "amber", status: "Needs review" },
  { icon: "lock", label: ["Preventive controls"], tone: "green", status: "Verified" },
  { icon: "signal", label: ["Security signals"], tone: "blue", status: "Investigating" },
  { icon: "recovery", label: ["Response & recovery"], tone: "blue", status: "Recovering" },
  { icon: "evidence", label: ["Evidence &", "governance"], tone: "green", status: "Evidence current" },
];

const card =
  "rounded-[16px] border border-[rgba(52,212,202,0.45)] bg-[rgba(0,25,30,0.72)] shadow-[0px_18px_40px_0px_rgba(0,0,0,0.35)] backdrop-blur-[5px]";

export default function MobileSection01() {
  return (
    <section id="s01-m" className="relative flex w-full flex-col items-start overflow-hidden bg-[#001315]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image src="/cybersecurity-protection/mobile-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 19, 21, 0.96) 0%, rgba(0, 19, 21, 0.8) 42%, rgba(0, 19, 21, 0.3) 75%, rgba(0, 19, 21, 0.5) 100%)",
        }}
      />
      <div className="absolute inset-[45%_0_0_0] bg-gradient-to-b from-[rgba(0,19,21,0)] via-[rgba(0,19,21,0.92)] via-[70%] to-[#001315]" />
      {[
        { right: "right-[40.24px]", from: "from-[rgba(52,212,202,0.5)]" },
        { right: "right-[86.24px]", from: "from-[rgba(52,212,202,0.38)]" },
        { right: "right-[132.24px]", from: "from-[rgba(52,212,202,0.26)]" },
        { right: "right-[178.24px]", from: "from-[rgba(52,212,202,0.14)]" },
      ].map((b) => (
        <div
          key={b.right}
          className={`pointer-events-none absolute top-[-40px] flex h-[299.999px] w-[181.512px] items-center justify-center ${b.right}`}
        >
          <div className="flex-none -skew-x-28 scale-y-88">
            <div className={`h-[339.77px] w-[22px] bg-gradient-to-b ${b.from} to-[rgba(52,212,202,0)]`} />
          </div>
        </div>
      ))}

      <div className="relative mx-auto flex w-full max-w-[720px] flex-col items-start gap-[64px] px-[32px] pb-[56px] pt-[28px]">
        <nav aria-label="Breadcrumb" className="w-full font-poppins text-[13px] leading-[18px]">
          <span className="text-[#cbd5e1]">Home / Solutions / </span>
          <span className="text-white">Cybersecurity &amp; Protection</span>
        </nav>

        <div className="flex w-full flex-col items-start gap-[48px]">
          <div className="flex w-full max-w-[720px] flex-col items-start gap-[14px]">
            <div className="flex items-center gap-[8px] rounded-full border border-[rgba(52,212,202,0.5)] bg-[rgba(25,91,98,0.85)] py-[7px] pl-[9px] pr-[15px]">
              <span className="size-[8px] shrink-0 rounded-[4px] bg-[#4ddcad] shadow-[0px_0px_10px_0px_#4ddcad]" />
              <span className="font-poppins text-[11px] font-semibold leading-[16px] tracking-[1.32px] text-white">
                CYBERSECURITY &amp; PROTECTION
              </span>
            </div>

            <h1 className="w-full pt-[10px] font-plus-jakarta text-[40px] font-extrabold leading-[42px] tracking-[-1.2px] text-white">
              <MobileLines lines={["Protect digital", "operations with", "security controls", "that stay", "connected to"]} />{" "}
              <br className="hidden min-[400px]:max-sm:block" />
              <span className="text-[#4ddcad]">
                <MobileLines lines={["identity, evidence", "and resilience."]} />
              </span>
            </h1>

            <p className="w-full max-w-[620px] pt-[10px] font-poppins text-[19px] leading-[30px] text-[#e2e8f0]">
              <MobileLines
                lines={[
                  "Zoiko Tech connects secure",
                  "engineering, identity, least privilege,",
                  "threat prevention, security",
                  "operations, privacy, evidence and",
                  "resilience into a governed",
                  "protection architecture for",
                  "enterprise systems and platforms.",
                ]}
              />
            </p>

            <div className="flex w-full flex-col items-start justify-center gap-[12px] pt-[22px]">
              <a
                href="#s02-m"
                className="flex min-h-[52px] items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[24px] py-[16px] font-poppins text-[16px] font-semibold leading-[20px] text-white"
              >
                Explore security pathways
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/cybersecurity-protection/mobile-icon-arrow-right-white.svg" alt="" className="size-[16px]" />
              </a>
              <a
                href="/contact-us"
                className="flex min-h-[52px] items-center rounded-[6px] border border-white bg-[rgba(255,255,255,0.06)] px-[24px] py-[15px] font-poppins text-[16px] font-semibold leading-[20px] text-white"
              >
                Discuss your security architecture
              </a>
            </div>

            <a
              href="/cybersecurity-resilience"
              className="flex min-h-[44px] items-center gap-[6px] py-[12px] font-poppins text-[14px] font-semibold leading-[20px] text-[#4ddcad]"
            >
              Explore Cybersecurity &amp; Resilience
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/cybersecurity-protection/mobile-icon-arrow-right-green.svg" alt="" className="size-[16px]" />
            </a>
          </div>

          <div className="flex w-full max-w-[348px] flex-col items-end gap-[16px] pt-[24px]">
            <div className={`flex w-[320px] max-w-full flex-col items-start gap-[12px] p-[18px] ${card}`}>
              <div className="flex w-full items-center justify-between gap-[10.66px]">
                <span className="font-poppins text-[10px] font-semibold leading-[14px] tracking-[1.4px] whitespace-nowrap text-[#4ddcad]">
                  CRITICAL SERVICE
                </span>
                <span className="font-poppins text-[10px] font-semibold leading-[14px] tracking-[0.8px] whitespace-nowrap text-[#cbd5e1]">
                  SPECIMEN · SYNTHETIC DATA
                </span>
              </div>
              <div className="flex w-full items-center gap-[10px]">
                <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#1f7a6c]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/cybersecurity-protection/mobile-icon-server.svg" alt="" className="size-[18px]" />
                </div>
                <div className="min-w-px flex-1">
                  <p className="font-plus-jakarta text-[14px] font-semibold leading-[20px] text-white">
                    Customer billing service
                  </p>
                  <p className="font-poppins text-[12px] leading-[18px] text-[#cbd5e1]">Owner: Platform Operations</p>
                </div>
                <Pill tone="green">Protected</Pill>
              </div>
            </div>

            <div className={`mr-[56px] flex w-[340px] shrink-0 flex-col items-start gap-[8px] px-[18px] py-[16px] ${card}`}>
              <p className="w-full font-poppins text-[10px] font-semibold leading-[14px] tracking-[1.4px] text-[#4ddcad]">
                ACCESS REVIEW
              </p>
              <div className="flex w-full flex-col items-start justify-center gap-[10px] pt-[2px]">
                <p className="font-plus-jakarta text-[14px] font-semibold leading-[20px] whitespace-nowrap text-white">
                  Billing admin role · 3 accounts
                </p>
                <Pill tone="amber">Needs review</Pill>
              </div>
              <p className="w-full font-poppins text-[12px] leading-[18px] text-[#cbd5e1]">
                Privileged access separated from routine access
              </p>
            </div>

            <div className={`flex w-[300px] max-w-full flex-col items-start gap-[10px] px-[18px] py-[16px] ${card}`}>
              <p className="w-full font-poppins text-[10px] font-semibold leading-[14px] tracking-[1.4px] text-[#4ddcad]">
                CONTROL EVIDENCE
              </p>
              <div className="flex w-full flex-col items-start gap-[8px]">
                <div className="flex w-full items-center justify-between gap-[8px]">
                  <span className="font-poppins text-[13px] font-medium leading-[18px] whitespace-nowrap text-white">
                    Data access policy
                  </span>
                  <Pill tone="green">Evidence current</Pill>
                </div>
                <div className="flex w-full items-center justify-between gap-[19px]">
                  <span className="font-poppins text-[13px] font-medium leading-[18px] whitespace-nowrap text-white">
                    Backup restore test
                  </span>
                  <Pill tone="amber">Evidence stale</Pill>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[12px] pt-[8px]">
          <div className="flex w-full flex-col items-start justify-center gap-[16px]">
            <p className="font-poppins text-[11px] font-semibold leading-[16px] tracking-[1.76px] whitespace-nowrap text-[#4ddcad]">
              ONE CONNECTED PROTECTION CHAIN
            </p>
            <p className="pr-[23.81px] font-poppins text-[14px] font-medium leading-[22px] text-white">
              <MobileLines lines={["Secure engineering. Least privilege. Evidence-", "aware controls. Responsible disclosure."]} />
            </p>
          </div>

          <div className="relative flex w-full flex-col items-start pt-[6px]">
            <div className="absolute left-[8%] right-[8%] top-[12px] h-[2px] bg-gradient-to-r from-[rgba(52,212,202,0.15)] via-[#34d4ca] via-50% to-[rgba(52,212,202,0.15)] shadow-[0px_0px_12px_0px_rgba(52,212,202,0.6)]" />
            <ol className="relative grid w-full grid-cols-2 gap-[12px]">
              {chain.map((c, i) => (
                <li key={c.icon} className={`flex flex-col items-center gap-[10px] self-start ${i === 4 ? "pb-[18px]" : ""}`}>
                  <span className="size-[18px] shrink-0 rounded-[9px] border-2 border-[#34d4ca] bg-[#001315] shadow-[0px_0px_12px_0px_rgba(52,212,202,0.8)]" />
                  <div className="flex w-full flex-col items-center gap-[8px] rounded-[14px] border border-[rgba(52,212,202,0.35)] bg-[rgba(0,25,30,0.7)] px-[10px] py-[14px] backdrop-blur-[4px]">
                    <div className="flex size-[36px] items-center justify-center rounded-[10px] bg-[#1f7a6c]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/cybersecurity-protection/mobile-icon-${c.icon}.svg`} alt="" className="size-[18px]" />
                    </div>
                    <h3 className="text-center font-plus-jakarta text-[13px] font-semibold leading-[18px] text-white">
                      {c.label.map((l, j) => (
                        <span key={j} className="block">
                          {l}
                        </span>
                      ))}
                    </h3>
                    <Pill tone={c.tone}>{c.status}</Pill>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative flex h-[88px] w-full flex-col items-center rounded-[12px] border border-dashed border-[rgba(52,212,202,0.55)] bg-[rgba(0,19,21,0.5)] pt-[13px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cybersecurity-protection/mobile-icon-shield-check.svg" alt="" className="size-[16px]" />
            <p className="mt-[9.5px] self-stretch px-[17px] font-poppins text-[12px] font-semibold leading-[18px] tracking-[0.96px] text-[#e2e8f0]">
              <MobileLines lines={["FIRST-CLASS CONTROL DOMAINS: PRIVACY ·", "RESILIENCE"]} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
