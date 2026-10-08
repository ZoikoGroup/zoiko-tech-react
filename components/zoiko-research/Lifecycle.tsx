import { WRAP } from "./layout";

const items = [
  { n: "01", t: "Define", d: "Question, scope and authoritative sources." },
  { n: "02", t: "Examine", d: "Method, assumptions, data rights and analysis." },
  { n: "03", t: "Review", d: "Accountable ownership and exact review/publication state." },
  { n: "04", t: "Maintain", d: "Canonical source, correction and supersession history." },
];

export default function Lifecycle() {
  return (
    <section id="lifecycle" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]`}>
        <div className="flex flex-col gap-[15.1px] lg:mt-[10px] lg:w-[330px] lg:shrink-0">
          <h2 className="font-poppins text-3xl font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-4xl lg:text-[41px] lg:leading-[47.15px]">
            Research <br className="hidden lg:block" />
            lifecycle <br className="hidden lg:block" />
            architecture
          </h2>
          <p className="pt-[4.2px] font-poppins text-[16px] font-normal leading-[25.6px] text-[#587176]">
            Question → sources → method → analysis → review → publication → version evidence.
          </p>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-rows-[183.19px_210.19px]">
          {items.map((i) => (
            <article
              key={i.n}
              className="flex flex-col gap-3 border-b border-t-2 border-[rgba(129,180,191,0.27)] bg-[#f0f7f8] px-[26px] pb-[41px] pt-[31px]"
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{i.n}</span>
              <h3 className="pb-[0.59px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{i.t}</h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
