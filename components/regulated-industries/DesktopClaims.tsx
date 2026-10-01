import DesktopLines from "./DesktopLines";

const rows = [
  { level: "Certified / Attested", border: "border-[#247780]", bg: "bg-[#f3f9fa]", h: "h-[90.63px]", lines: ["Exact external certificate, attestation or assurance artifact", "with scope, entity, issuer and expiry."], rule: " exact approved wording only." },
  { level: "Compliant", border: "border-[#4f9aa2]", bg: "bg-[#f3f9fa]", h: "h-[90.63px]", lines: ["A legal or compliance-approved statement with defined", "scope."], rule: " only where legally verified." },
  { level: "Aligned / Designed to", border: "border-[#9fcdd2]", bg: "bg-[#f3f9fa]", h: "h-[74.31px]", lines: ["Architecture or control intent or alignment. Not certification."], rule: " never styled like a certified or compliant badge." },
  { level: "Roadmap / Target", border: "border-[#d5e3e5]", bg: "bg-white", h: "h-[74.31px]", lines: ["Future intent or target."], rule: " clearly future-looking, no present-tense claim." },
  { level: "Unknown / Not claimed", border: "border-[#d5e3e5]", bg: "bg-white", h: "h-[74.31px]", lines: ["No approved evidence or wording."], rule: " hide the claim or state “not claimed.” Never interpolate." },
];

export default function DesktopClaims() {
  return (
    <section className="w-full bg-white px-[130px] pb-[120px] pt-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[19.9px]">
        <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Certification, attestation and claims
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          <DesktopLines lines={["A five-level hierarchy. Each level looks different on purpose, so a weaker claim never passes", "for a stronger one."]} />
        </p>
        <ul className="flex flex-col gap-[12px] pt-[2.09px]">
          {rows.map((r) => (
            <li
              key={r.level}
              className={`${r.h} ${r.bg} ${r.border} flex gap-x-[16px] overflow-hidden rounded-[14px] border border-l-[8px] pl-[12px] pr-[19px] pt-[19px]`}
            >
              <h3 className="w-[210px] shrink-0 whitespace-nowrap font-sora text-[16px] font-bold leading-[25.6px] text-[#0a1416]">
                {r.level}
              </h3>
              <p className="-mt-px min-w-0 flex-[0_1_453.5px] font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                <DesktopLines lines={r.lines} />
              </p>
              <p className="mt-[7px] min-w-0 flex-1 font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                <span className="font-bold">Rule:</span>
                <span className="font-normal">{r.rule}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
