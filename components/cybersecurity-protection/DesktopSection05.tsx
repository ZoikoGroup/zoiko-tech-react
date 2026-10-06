// Protection & exposure reduction (status key + exposure review specimen)
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const tones = {
  unknown: { bg: "#e2e8f0", fg: "#334155" },
  review: { bg: "#fef3c7", fg: "#92400e" },
  exception: { bg: "#ede9fe", fg: "#5b21b6" },
  remediating: { bg: "#e0f2fe", fg: "#075985" },
  verified: { bg: "#dbf2ed", fg: "#195b62" },
} as const;

function Badge({ tone, label }: { tone: keyof typeof tones; label: string }) {
  const t = tones[tone];
  return (
    <span
      className="inline-flex shrink-0 items-center gap-[6px] rounded-full px-[10px] py-1"
      style={{ backgroundColor: t.bg, color: t.fg }}
    >
      <span
        className="size-[6px] rounded-[3px]"
        style={{ backgroundColor: t.fg }}
      />
      <span className="whitespace-nowrap font-poppins text-[11px] font-semibold leading-[15px] tracking-[0.22px]">
        {label}
      </span>
    </span>
  );
}

const states: { tone: keyof typeof tones; label: string; text: string }[] = [
  { tone: "unknown", label: "Unknown", text: "Ownership or evidence not yet established." },
  { tone: "review", label: "Needs review", text: "Known state needs owner review or fresh evidence." },
  { tone: "exception", label: "Exception", text: "An approved, bounded deviation exists." },
  { tone: "remediating", label: "Remediating", text: "Corrective work is in progress." },
  { tone: "verified", label: "Verified", text: "Current approved evidence supports the control." },
  { tone: "unknown", label: "Resolved / retired", text: "Closed or retired; history retained." },
];

const meta = [
  ["Critical service", "Customer billing service"],
  ["Owner", "Platform Operations"],
  ["Criticality", "High"],
  ["Lifecycle", "Production"],
];

const rows: { k: string; v: string; tone: keyof typeof tones; label: string; last?: boolean }[] = [
  { k: "EXPOSURE", v: "Outdated library in payment worker", tone: "remediating", label: "Remediating" },
  { k: "PREVENTIVE CONTROL", v: "Secrets stored in managed vault · reviewed 02 Sep", tone: "verified", label: "Verified" },
  { k: "EXCEPTION", v: "Legacy report export · expires 31 Dec · owner: Finance IT", tone: "exception", label: "Exception", last: true },
];

export default function DesktopSection05() {
  return (
    <section id="s05" className="w-full bg-white px-12 py-[88px] xl:px-28">
      <div className="flex w-full items-center justify-center gap-14">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[11.2px]">
          <p className="w-full font-poppins text-[11px] font-semibold uppercase leading-4 tracking-[1.76px] text-[#247780]">
            Protection & exposure reduction
          </p>
          <h2 className="w-full max-w-[860px] font-plus-jakarta text-[40px] font-bold leading-[1.17] tracking-[-1.44px] text-[#0f172a] xl:text-[48px] xl:leading-[56.16px]">
            <DesktopLines
              lines={[
                "Know what you own,",
                "what is exposed, and",
                "what is being fixed",
              ]}
            />
          </h2>
          <p className="w-full max-w-[780px] pt-[4.8px] font-poppins text-[18px] leading-[28px] text-[#64748b]">
            <DesktopLines
              lines={[
                "Transparent control and exception states instead of a single",
                "marketing score.",
              ]}
            />
          </p>
          <ul className="w-full pt-[16.8px]">
            {states.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-3 border-t border-[#e2e8f0] pb-3 pt-[13px]"
              >
                <div className="w-[150px] shrink-0 pt-[3.5px]">
                  <Badge tone={s.tone} label={s.label} />
                </div>
                <p className="min-w-0 flex-1 font-poppins text-[14px] leading-[22px] text-[#334155]">
                  {s.text}
                </p>
              </li>
            ))}
          </ul>
          <a
            href="/zoiko-shield"
            className="inline-flex min-h-[44px] items-center gap-[6px] pb-3 pt-[16.8px] font-poppins text-[14px] font-semibold leading-5 text-[#247780]"
          >
            Explore protection
            <Image
              src="/cybersecurity-protection/desktop-arrow-teal.svg"
              alt=""
              width={16}
              height={16}
            />
          </a>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start overflow-hidden rounded-[14px] border border-[#e2e8f0] bg-white p-px shadow-[0px_12px_32px_0px_rgba(15,23,42,0.14)]">
          <div className="flex w-full flex-wrap items-center justify-between gap-x-4 border-b border-[#e2e8f0] bg-[#f8fafc] px-5 pb-[15px] pt-[14px]">
            <span className="whitespace-nowrap font-plus-jakarta text-[15px] font-bold leading-5 text-[#0f172a]">
              Exposure review
            </span>
            <span className="whitespace-nowrap font-poppins text-[10px] font-semibold leading-[14px] tracking-[0.8px] text-[#64748b]">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>
          <div className="flex w-full flex-col p-5">
            <dl className="grid h-[101px] w-full grid-cols-3 content-start gap-[14px] border-b border-[#e2e8f0] pb-[15px]">
              {meta.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-[2px] self-start">
                  <dt className="font-poppins text-[11px] font-medium leading-4 text-[#64748b]">
                    {k}
                  </dt>
                  <dd className="font-poppins text-[13px] font-semibold leading-[18px] text-[#0f172a]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="flex w-full flex-col">
              {rows.map((r) => (
                <li
                  key={r.k}
                  className={`flex flex-wrap items-center justify-between gap-x-6 py-[14px] ${
                    r.last ? "" : "border-b border-[#e2e8f0] pb-[15px]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="whitespace-nowrap font-poppins text-[11px] font-medium leading-4 text-[#64748b]">
                      {r.k}
                    </span>
                    <span className="font-poppins text-[14px] font-semibold leading-5 text-[#0f172a] xl:whitespace-nowrap">
                      {r.v}
                    </span>
                  </div>
                  <Badge tone={r.tone} label={r.label} />
                </li>
              ))}
            </ul>
            <div className="w-full rounded-[10px] border border-[#e2e8f0] bg-[#f8fafc] px-[15px] pb-[13px] pt-[19px]">
              <p className="font-poppins text-[13px] leading-5 text-[#334155]">
                <span className="font-semibold text-[#0f172a]">Remediation:</span>
                <DesktopLines
                  lines={[
                    " upgrade and redeploy · owner: Billing Engineering · target 14 Oct",
                    "· closure needs validation evidence",
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
