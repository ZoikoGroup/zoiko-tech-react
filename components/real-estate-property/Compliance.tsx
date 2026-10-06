import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { img: "/real-estate-property/compliance-market-jurisdiction.webp", title: "Market & jurisdiction", lines: ["Applicable scope comes from authoritative", "records."] },
  { img: "/real-estate-property/compliance-rules-evidence.webp", title: "Rules & evidence", lines: ["Source, effective period, reviewer and freshness", "remain visible."] },
  { img: "/real-estate-property/compliance-exceptions-claims.webp", title: "Exceptions & claims", lines: ["Missing proof, expired records and unsupported", "markets stay explicit."] },
];

const ROWS = [
  ["Policy source", "Sample reviewed policy record"],
  ["Applicability", "Provider / market scope requires confirmation"],
  ["Effective period", "Not established in specimen"],
  ["Evidence owner", "Assigned reviewer"],
  ["Review state", "Needs confirmation"],
];

export default function Compliance() {
  return (
    <section id="compliance" className="w-full bg-white pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[108px] lg:pt-[93px]">
      <div className={WRAP}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Reviewed sources.", "Jurisdiction-specific context."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-base leading-[25.6px] text-[#587176]">
            Attach authoritative policy scope, ownership and evidence to relevant workflows.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-start gap-5 pt-9 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li key={c.title} className="min-w-0">
              <article className="flex flex-col gap-5 rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-6 lg:p-7">
                <div className="relative h-[180px] w-full overflow-hidden rounded-[10px]">
                  <Image src={c.img} alt="" fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <h3 className="font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="-mt-2 font-inter text-[15px] leading-6 text-[#587176]">
                  {c.lines.join(" ")}
                </p>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-xl border border-[#d3e5e6] bg-white px-5 pb-10 pt-[26px] shadow-[0px_18px_25px_rgba(0,30,37,0.06)] md:px-[26px] lg:mt-0 lg:pb-[52px]">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="font-poppins text-lg font-bold leading-[23.4px] text-[#102d2f]">Jurisdiction / evidence detail</h3>
            <span className="whitespace-nowrap rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-inter text-[10px] leading-4 tracking-[0.3px] text-[#247780]">
              Synthetic specimen
            </span>
          </div>
          <dl>
            {ROWS.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 py-4 ${i < ROWS.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""}`}
              >
                <dt className="font-inter text-[13px] leading-[20.8px] text-[#648287]">{k}</dt>
                <dd className="font-inter text-[13px] leading-[20.8px] text-[#102d2f]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
