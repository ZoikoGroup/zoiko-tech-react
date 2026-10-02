// Protection & exposure reduction (state legend + exposure review specimen)
import MobileLines from "./MobileLines";

type Tone = "gray" | "amber" | "violet" | "blue" | "green";
const tones: Record<Tone, { bg: string; fg: string; dot: string }> = {
  gray: { bg: "bg-[#e2e8f0]", fg: "text-[#334155]", dot: "bg-[#334155]" },
  amber: { bg: "bg-[#fef3c7]", fg: "text-[#92400e]", dot: "bg-[#92400e]" },
  violet: { bg: "bg-[#ede9fe]", fg: "text-[#5b21b6]", dot: "bg-[#5b21b6]" },
  blue: { bg: "bg-[#e0f2fe]", fg: "text-[#075985]", dot: "bg-[#075985]" },
  green: { bg: "bg-[#dbf2ed]", fg: "text-[#195b62]", dot: "bg-[#195b62]" },
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

const states: { tone: Tone; label: string; text: string[] }[] = [
  { tone: "gray", label: "Unknown", text: ["Ownership or evidence", "not yet established."] },
  { tone: "amber", label: "Needs review", text: ["Known state needs owner", "review or fresh evidence."] },
  { tone: "violet", label: "Exception", text: ["An approved, bounded", "deviation exists."] },
  { tone: "blue", label: "Remediating", text: ["Corrective work is in", "progress."] },
  { tone: "green", label: "Verified", text: ["Current approved", "evidence supports the", "control."] },
  { tone: "gray", label: "Resolved / retired", text: ["Closed or retired; history", "retained."] },
];

const fields: [string, string][] = [
  ["Critical service", "Customer billing service"],
  ["Owner", "Platform Operations"],
  ["Criticality", "High"],
  ["Lifecycle", "Production"],
];

const rows: { kicker: string; text: string[]; tone: Tone; status: string; last?: boolean }[] = [
  { kicker: "EXPOSURE", text: ["Outdated library in payment worker"], tone: "blue", status: "Remediating" },
  { kicker: "PREVENTIVE CONTROL", text: ["Secrets stored in managed vault ·", "reviewed 02 Sep"], tone: "green", status: "Verified" },
  { kicker: "EXCEPTION", text: ["Legacy report export · expires 31 Dec ·", "owner: Finance IT"], tone: "violet", status: "Exception", last: true },
];

export default function MobileSection05() {
  return (
    <section id="s05-m" className="flex w-full flex-col items-start bg-white">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center gap-[56px] px-[32px] py-[88px]">
        <div className="flex w-full flex-col items-start gap-[11.1px]">
          <p className="w-full font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
            Protection &amp; exposure reduction
          </p>
          <h2 className="w-full max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-[#0f172a]">
            <MobileLines lines={["Know what you own,", "what is exposed, and", "what is being fixed"]} />
          </h2>
          <p className="w-full max-w-[780px] pt-[4.9px] font-poppins text-[18px] leading-[28px] text-[#64748b]">
            <MobileLines lines={["Transparent control and exception", "states instead of a single marketing", "score."]} />
          </p>
          <ul className="flex w-full flex-col items-start pt-[16.9px] sm:grid sm:grid-cols-2 sm:gap-x-[24px]">
            {states.map((s) => (
              <li key={s.label} className="flex w-full items-center gap-[12px] border-t border-[#e2e8f0] pb-[12px] pt-[13px]">
                <div className="flex w-[150px] shrink-0 flex-col items-start pt-[3.5px]">
                  <Pill tone={s.tone}>{s.label}</Pill>
                </div>
                <p className="min-w-px flex-1 font-poppins text-[14px] leading-[22px] text-[#334155]">
                  <MobileLines lines={s.text} />
                </p>
              </li>
            ))}
          </ul>
          <a
            href="/cybersecurity-resilience"
            className="flex min-h-[44px] items-center gap-[6px] pb-[12px] pt-[16.9px] font-poppins text-[14px] font-semibold leading-[20px] whitespace-nowrap text-[#247780]"
          >
            Explore protection
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cybersecurity-protection/mobile-icon-arrow-right-teal.svg" alt="" className="size-[16px]" />
          </a>
        </div>

        <div className="flex w-full flex-col items-start overflow-hidden rounded-[14px] border border-[#e2e8f0] bg-white p-px shadow-[0px_12px_32px_0px_rgba(15,23,42,0.14)]">
          <div className="flex w-full flex-wrap items-center justify-between gap-[24.44px] border-b border-[#e2e8f0] bg-[#f8fafc] px-[20px] pb-[15px] pt-[14px]">
            <h3 className="font-plus-jakarta text-[15px] font-bold leading-[20px] whitespace-nowrap text-[#0f172a]">
              Exposure review
            </h3>
            <span className="font-poppins text-[10px] font-semibold leading-[14px] tracking-[0.8px] whitespace-nowrap text-[#64748b]">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          <div className="flex w-full flex-col items-start p-[20px]">
            <dl className="flex w-full flex-col items-start gap-[14px] border-b border-[#e2e8f0] pb-[15px]">
              {fields.map(([k, v]) => (
                <div key={k} className="flex w-full flex-col items-start gap-[2px]">
                  <dt className="w-full font-poppins text-[11px] font-medium leading-[16px] text-[#64748b]">{k}</dt>
                  <dd className="m-0 w-full font-poppins text-[13px] font-semibold leading-[18px] text-[#0f172a]">{v}</dd>
                </div>
              ))}
            </dl>

            <ul className="flex w-full flex-col items-start">
              {rows.map((r) => (
                <li
                  key={r.kicker}
                  className={`flex w-full flex-col items-start justify-center gap-[10px] py-[14px] ${
                    r.last ? "" : "border-b border-[#e2e8f0] pb-[15px]"
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-poppins text-[11px] font-medium leading-[16px] whitespace-nowrap text-[#64748b]">
                      {r.kicker}
                    </span>
                    <span className="font-poppins text-[14px] font-semibold leading-[20px] text-[#0f172a]">
                      <MobileLines lines={r.text} />
                    </span>
                  </div>
                  <Pill tone={r.tone}>{r.status}</Pill>
                </li>
              ))}
            </ul>

            <div className="flex w-full flex-col items-start rounded-[10px] border border-[#e2e8f0] bg-[#f8fafc] px-[15px] pb-[13px] pt-[19px] font-poppins text-[13px] leading-[20px] text-[#334155]">
              <p className="m-0">
                <span className="font-semibold text-[#0f172a]">Remediation:</span>
                {" upgrade and redeploy ·"}
                <br className="hidden min-[400px]:max-sm:block" /> owner: Billing Engineering · target 14 Oct ·
                <br className="hidden min-[400px]:max-sm:block" /> closure needs validation evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
