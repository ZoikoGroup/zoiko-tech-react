import Image from "next/image";
import DesktopLines from "./DesktopLines";

const steps = [
  { icon: "target", title: ["Define sector, activity,", "jurisdiction"], body: ["Canonical industry,", "legal or commercial", "entity, regulated activity", "and target outcome."], status: ["Scope approved"] },
  { icon: "book-open", title: ["Identify authoritative", "requirements"], body: ["Map authoritative", "sources with authorized", "legal and compliance", "review."], status: ["Requirement set approved"] },
  { icon: "layers", title: ["Map identity, systems,", "controls"], body: ["Owners, systems of", "record, identities,", "delegated authority,", "controls and evidence", "sources."], status: ["Control architecture", "approved"] },
  { icon: "file-text", title: ["Define claims and", "evidence boundaries"], body: ["Which claims need", "certification,", "compliance or", "alignment wording and", "approved evidence."], status: ["Claims model approved"] },
  { icon: "plug", title: ["Integrate / configure"], body: ["Connect APIs, events", "and workflows without", "losing source, authority,", "operator or jurisdiction", "metadata."], status: ["Technical design approved"] },
  { icon: "alert-circle", title: ["Validate exceptions", "and failures"], body: ["Missing evidence,", "expired certification,", "unsupported market,", "access failure, control", "exception, AI-review", "states."], status: ["Acceptance criteria met"] },
  { icon: "flask-conical", title: ["Pilot"], body: ["A bounded regulated", "workflow using", "controlled or synthetic", "data where possible."], status: ["Pilot reviewed"] },
  { icon: "activity", title: ["Operate, monitor, re-", "review"], body: ["Evidence freshness,", "control exceptions,", "product and regulatory", "change, approval", "expiry."], status: ["Operational readiness", "maintained"] },
];

export default function DesktopImplementation() {
  return (
    <section className="w-full bg-white px-[130px] pb-[120px] pt-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[23.99px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Implementation and control adoption
        </h2>
        <ol className="grid h-[666px] grid-cols-4 grid-rows-2 gap-x-[20px] gap-y-[16px]">
          {steps.map((s) => (
            <li
              key={s.icon}
              className="flex min-w-0 flex-col items-center gap-[3px] rounded-[14px] border border-[#d5e3e5] bg-[#f3f9fa] p-[18px] text-center [filter:drop-shadow(0px_4px_5px_rgba(0,0,0,0.2))]"
            >
              <span className="flex size-[40px] shrink-0 items-center justify-center rounded-[20px] bg-[#247780]">
                <Image src={`/regulated-industries/desktop-impl-icon-${s.icon}.svg`} alt="" width={20} height={20} />
              </span>
              <h3 className="w-full pt-[6.4px] font-sora text-[16px] font-bold leading-[25.6px] text-[#0a1416]">
                <DesktopLines lines={s.title} />
              </h3>
              <p className="w-full font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
                <DesktopLines lines={s.body} />
              </p>
              <small className="w-full pt-[4.59px] font-inter text-[13.3px] font-semibold leading-[21.33px] text-[#247780]">
                <DesktopLines lines={s.status} />
              </small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
