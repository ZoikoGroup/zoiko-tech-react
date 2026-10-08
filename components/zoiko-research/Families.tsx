import { WRAP } from "./layout";

const items = [
  { n: "01", t: "Publication", d: "Author/owner, version, state and canonical source." },
  { n: "02", t: "Benchmark", d: "Question, conditions, comparator and limitations." },
  { n: "03", t: "Technical paper", d: "Architecture/engineering depth with currentness." },
  { n: "04", t: "Collaboration output", d: "Approved institution/project attribution and rights." },
];

export default function Families() {
  return (
    <section
      id="families"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{
        backgroundImage:
          "linear-gradient(121.64062913831933deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[60px]`}>
        <div className="flex max-w-[800px] flex-col gap-[15px] pb-4">
          <h2 className="font-poppins text-3xl font-bold leading-[1.15] tracking-[-1px] text-white md:text-4xl lg:text-[41px] lg:leading-[47.15px]">
            Research output families
          </h2>
          <p className="pt-[5px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Technical authority is inspectable, not implied by presentation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <article
              key={i.n}
              className="flex flex-col gap-3 border-b border-t-2 border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px] lg:min-h-[210px]"
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{i.n}</span>
              <h3 className="pb-[0.59px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{i.t}</h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
