import { WRAP } from "./layout";
import Lines from "./Lines";

const PANELS = [
  { n: "01", title: "Task & conditions", text: "Exact evaluated problem, setup and method." },
  { n: "02", title: "Comparator", text: "Baseline and compared systems only if published." },
  { n: "03", title: "Result context", text: "Approved definition, units, dates and limits." },
  { n: "04", title: "Evidence", text: "No leaderboard, independent validation or leadership claim inferred." },
];

export default function Benchmarks() {
  return (
    <section
      id="benchmarks"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{
        backgroundImage:
          "linear-gradient(120.0170450678303deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-[60px]`}>
        <div className="flex w-full flex-col gap-[15.1px] lg:h-[414px] lg:w-[330px] lg:shrink-0">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[36px] lg:text-[41px] lg:leading-[47.15px]">
            <Lines lines={["Benchmark", "contract"]} />
          </h2>
          <p className="pt-[4.91px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            No naked score or winner treatment.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:min-w-px lg:flex-1 lg:grid-rows-[183.19px_210.19px]">
          {PANELS.map((p) => (
            <article
              key={p.n}
              className="flex flex-col gap-3 border-b border-t-2 border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px]"
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">
                {p.n}
              </span>
              <h3 className="pb-[0.59px] pt-[9.59px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">
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
