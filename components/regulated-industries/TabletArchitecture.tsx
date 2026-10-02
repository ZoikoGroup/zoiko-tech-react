import Image from "next/image";
import TabletLines from "./TabletLines";

const layers = [
  { tag: "L1", img: "/regulated-industries/tablet-ai-evaluation.webp", title: "Sector, entity and activity", lines: ["The actual economic sector, legal or", "commercial operator and regulated", "activity at approved scope."], q: "Who or what is in scope?" },
  { tag: "L2", img: "/regulated-industries/tablet-ai-agent-permissions.webp", title: "Jurisdiction and source", lines: ["Authoritative law, regulation, policy,", "standard, contract or internal source", "where supported."], q: "What requirement is authoritative?" },
  { tag: "L3", img: "/regulated-industries/tablet-ai-evidence-audit.webp", title: "Obligation / requirement", lines: ["Structured requirement or responsibility", "at approved product and legal scope."], q: "What must be done or demonstrated?" },
  { tag: "L4", img: "/regulated-industries/tablet-ai-high-impact.webp", title: "Control / workflow", lines: ["Technical, procedural or operational", "control with an owner and system or", "process."], q: "How is the requirement operationalized?" },
  { tag: "L5", img: "/regulated-industries/tablet-evidence-customer-identity.webp", title: "Identity, approval, exception", lines: ["Who may act, review, approve or", "override, plus exception and remediation", "state."], q: "Who owns the decision?" },
  { tag: "L6", img: "/regulated-industries/tablet-ai-inventory.webp", title: "Evidence / assurance", lines: ["Evidence object, source, freshness,", "scope, reviewer and any claim or", "certification relationship."], q: "What proves the control operates?" },
  { tag: "L7", img: "/regulated-industries/tablet-ai-authority-mode.webp", title: "Monitoring, change, audit", lines: ["Changes, expiry, incidents, control", "failures, audit history and re-review."], q: "Can it stay current and reviewable?" },
];

export default function TabletArchitecture() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[85px] pt-[60px]">
      <div className="mx-auto w-full max-w-[960px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[1.15] text-[#0a1416]">
          <TabletLines lines={["Obligation, control and evidence", "architecture"]} />
        </h2>
        <p className="mt-[14.4px] font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          Seven layers from who is in scope to whether the control stays current and reviewable.
        </p>

        <ul className="mt-[14.4px] grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {layers.map((l) => (
            <li
              key={l.tag}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] shrink-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #247780 100%)" }}
              >
                <Image src={l.img} alt="" fill sizes="(min-width: 640px) 340px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col px-[20px] pb-[22px] pt-[26px]">
                <span className="inline-flex self-start rounded-full border border-[#247780] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#247780]">
                  {l.tag}
                </span>
                <h3 className="mt-[10.5px] font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                  {l.title}
                </h3>
                <p className="mt-[6px] font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                  <TabletLines lines={l.lines} />
                </p>
                <small className="mt-[10px] font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                  {l.q}
                </small>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-[14.4px] w-full rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#247780] bg-[#e6f2f4] px-[16px] pb-[12px] pt-[20.4px] font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
          <b className="font-bold">Authoritative-source rule.</b>{" "}
          <TabletLines
            lines={[
              "A requirement, compliance status, authorization, certification or",
              "legal conclusion is never generated from generic AI, marketing copy or an unverified system",
              "state. We route to authoritative sources and show Unknown or Requires review when scope",
              "is insufficient.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
