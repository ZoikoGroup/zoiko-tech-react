import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: "Evidence ID", icon: "hash", size: 40, pb: "pb-[92.94px]", lines: ["Stable internal identifier."], h: "h-[222px]" },
  { title: "Type", icon: "tag", size: 40, pb: "pb-[20px]", lines: ["Control evidence, certification or", "attestation, policy, audit or", "assessment, operational", "evidence, customer proof."], h: "h-[222px]" },
  { title: "Source / owner", icon: "user", size: 40, pb: "pb-[68.62px]", lines: ["Authoritative source and", "accountable owner."], h: "h-[222px]" },
  { title: "Scope", icon: "scope", size: 24, pb: "pb-[44.31px]", lines: ["Entity, product, control, system,", "market or jurisdiction and period", "as relevant."], h: "h-[222px]" },
  { title: "State", icon: "check-circle", size: 40, pb: "pb-[20px]", lines: ["Draft, Under review, Approved,", "Published, Expired, Withdrawn,", "Superseded."], h: "h-[189px]" },
  { title: "Freshness", icon: "clock", size: 40, pb: "pb-[44.31px]", lines: ["Valid from, review by, and expiry", "where applicable."], h: "h-[189px]" },
  { title: "Allowed wording", icon: "quote", size: 40, pb: "pb-[20px]", lines: ["Exact public claim language if", "the evidence backs a marketing", "or trust claim."], h: "h-[189px]" },
  { title: "Linked claims / controls", icon: "link", size: 40, pb: "pb-[68.63px]", lines: ["Only approved relationships."], h: "h-[189px]" },
];

export default function DesktopEvidence() {
  return (
    <section
      className="w-full px-[130px] pb-[114px] pt-[96px]"
      style={{ backgroundImage: "linear-gradient(132.68deg, #000000 0%, #1c5c62 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[18px]">
        <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Evidence and audit lifecycle
        </h2>
        <p className="pb-[0.59px] pt-[2.11px] font-inter text-[16px] leading-[25.6px] text-[#dcecee]">
          Every evidence record carries the same eight fields.
        </p>
        <ul className="grid grid-cols-4 gap-[18px] pt-[4.01px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`${c.h} ${c.pb} flex flex-col items-center justify-center gap-[5.7px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] px-[20px] pt-[20px]`}
            >
              <div className="flex size-[60px] shrink-0 items-center justify-center">
                <Image
                  src={`/regulated-industries/desktop-evidence-icon-${c.icon}.svg`}
                  alt=""
                  width={c.size}
                  height={c.size}
                  style={{ width: c.size, height: c.size }}
                />
              </div>
              <h3 className="w-full text-center font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                {c.title}
              </h3>
              <p className="w-full text-center font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                <DesktopLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
