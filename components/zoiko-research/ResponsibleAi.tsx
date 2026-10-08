import { WRAP } from "./layout";

const PANELS = [
  { n: "01", title: "Disclosure", text: "Material assistance labeled with exact supported role." },
  { n: "02", title: "Sources", text: "Derived content remains distinct from authoritative findings." },
  { n: "03", title: "Evaluation", text: "Reviewed method, limits and source context." },
  { n: "04", title: "Authority", text: "Human researcher/reviewer owns interpretation and publication." },
];

export default function ResponsibleAi() {
  return (
    <section
      id="responsible-ai"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{
        backgroundImage:
          "linear-gradient(120.04280154497002deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]`}>
        <div className="flex flex-col gap-[15.1px] lg:w-[330px] lg:shrink-0">
          <h2 className="font-poppins text-[30px] font-bold leading-[36px] tracking-[-1px] text-white md:text-[36px] md:leading-[42px] lg:text-[41px] lg:leading-[47.15px]">
            Responsible AI in research
          </h2>
          <p className="pt-[4.2px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            AI contribution does not replace authorship or human judgment.
          </p>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-5 md:grid-cols-2">
          {PANELS.map((p) => (
            <article
              key={p.n}
              className="flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px]"
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{p.n}</span>
              <h3 className="pb-[0.6px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">
                {p.title}
              </h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
