import { WRAP } from "./layout";
import Lines from "./Lines";

const PANELS = [
  { n: "01", t: "Intent", d: "Specific university, enterprise or technical research objective.", pb: "pb-[41px]" },
  { n: "02", t: "Scope", d: "Access, responsibilities and research state.", pb: "pb-[41px] lg:pb-[68px]" },
  { n: "03", t: "Rights", d: "IP, data and publication agreement.", pb: "pb-[41px]" },
  { n: "04", t: "No endorsement", d: "No named partnership, pilot or adoption inferred.", pb: "pb-[41px]" },
];

export default function Collaboration() {
  return (
    <section id="collaboration" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-[60px]`}>
        <div className="flex w-full flex-col gap-[15.1px] lg:w-[330px] lg:shrink-0 lg:pb-[238.32px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[41px] md:leading-[47.15px]">
            <Lines lines={["Governed", "collaboration"]} />
          </h2>
          <p className="pt-[4.9px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Names and outcomes require approval.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-5 md:grid-cols-2 lg:min-w-px lg:flex-1">
          {PANELS.map((p) => (
            <article
              key={p.n}
              className={`flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[#f0f7f8] px-[26px] pt-[31px] ${p.pb}`}
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{p.n}</span>
              <h3 className="pb-[0.59px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{p.t}</h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
