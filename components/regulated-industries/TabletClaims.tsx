import TabletLines from "./TabletLines";

const levels = [
  { title: "Certified / Attested", border: "border-[#247780]", bg: "bg-[#f3f9fa]", desc: ["Exact external certificate,", "attestation or assurance", "artifact with scope, entity,", "issuer and expiry."], rule: ["exact approved", "wording only."] },
  { title: "Compliant", border: "border-[#4f9aa2]", bg: "bg-[#f3f9fa]", desc: ["A legal or compliance-", "approved statement with", "defined scope."], rule: ["only where legally", "verified."] },
  { title: "Aligned / Designed to", border: "border-[#9fcdd2]", bg: "bg-[#f3f9fa]", desc: ["Architecture or control", "intent or alignment. Not", "certification."], rule: ["never styled like a", "certified or compliant", "badge."] },
  { title: "Roadmap / Target", border: "border-[#d5e3e5]", bg: "bg-white", desc: ["Future intent or target."], rule: ["clearly future-looking,", "no present-tense claim."] },
  { title: "Unknown / Not claimed", border: "border-[#d5e3e5]", bg: "bg-white", desc: ["No approved evidence or", "wording."], rule: ["hide the claim or state", "“not claimed.” Never", "interpolate."] },
];

export default function TabletClaims() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[85.45px] pt-[60.43px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.2px]">
        <h2 className="font-sora text-[25.6px] font-bold leading-[29.44px] text-[#0a1416]">
          Certification, attestation and claims
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          <TabletLines
            lines={[
              "A five-level hierarchy. Each level looks different on purpose, so a weaker claim never",
              "passes for a stronger one.",
            ]}
          />
        </p>
        <ul className="flex flex-col gap-3 pb-[9.8px] pt-[7.79px]">
          {levels.map((l) => (
            <li
              key={l.title}
              className={`grid grid-cols-1 gap-x-4 gap-y-3 overflow-hidden rounded-[14px] border border-l-8 p-5 sm:grid-cols-[210px_minmax(0,1fr)_minmax(0,1fr)] ${l.border} ${l.bg}`}
            >
              <h3 className="font-sora text-[16px] font-bold leading-[25.6px] text-[#0a1416]">{l.title}</h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                <TabletLines lines={l.desc} />
              </p>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468] sm:pt-[7.16px]">
                <b className="font-bold">Rule:</b> <TabletLines lines={l.rule} />
              </p>
            </li>
          ))}
        </ul>
        <div className="rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#247780] bg-[#e6f2f4] px-4 pb-3 pt-[10.775px]">
          <p className="font-inter text-[14.7px] font-normal leading-[23.55px] text-[#4d6468]">
            <b className="font-bold">Badge rule.</b>{" "}
            <TabletLines
              lines={[
                "No certification-style seals, checkmarks or regulator logos for Aligned, Designed",
                "to or Roadmap claims.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
